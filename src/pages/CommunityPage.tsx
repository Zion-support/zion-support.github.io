
import { useState } from "react";
import CreatePostButton from "@/components/community/CreatePostButton";
import { LoginModal } from "@/components/auth/LoginModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEO } from "@/components/SEO";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import NewPostDialog from "@/components/community/NewPostDialog";
import { ChatAssistantTrigger } from "@/components/ChatAssistantTrigger";
import { useRequireAuth } from "@/hooks/useAuthGuard";
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
import { useCommunity } from "@/context/CommunityContext";
import type { ForumCategory } from "@/types/community";
import { logErrorToProduction } from '@/utils/productionLogger';
import { logInfo } from '@/utils/productionLogger';

export default function CommunityPage() {

  logInfo('CommunityPage rendering');
  const { user, loading } = useRequireAuth();
  const { featuredPosts, recentPosts } = useCommunity();
  const [activeTab, setActiveTab] = useState("categories");
  const router = useRouter();
  const [showNewPost, setShowNewPost] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { markCommunityVisited } = useAdvancedOnboardingStatus();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading community...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Combine posts for Q&A section, removing duplicates by id
  const qaPosts = Array.from(
    new Map(
      [...featuredPosts, ...recentPosts].map((post) => [post.id, post])
    ).values()
  );

  const initialCategory = router.query.category as ForumCategory | null;

  useEffect(() => {
    const wantsNew = router.query.new === "1";
    if (wantsNew && !user) {
      setLoginOpen(true);
      setShowNewPost(false);
      return;
    }
    setShowNewPost(wantsNew && !!user);
    if (user) {
      setLoginOpen(false);
    }
    markCommunityVisited();
  }, [router, user, initialCategory, markCommunityVisited]);

  // Handle tab changes in URL query params for better UX
  useEffect(() => {
    const tab = router.query.tab as string;
    if (tab && ["categories", "featured", "recent", "qa"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [router.query.tab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL to reflect active tab
    const newQuery = { ...router.query, tab: value };
    router.replace({ pathname: router.pathname, query: newQuery }, undefined, { shallow: true });
  };

  const handleDialogChange = (open: boolean) => {
    setShowNewPost(open);
    if (!open) {
      const currentQuery = { ...router.query };
      delete currentQuery.new;
      router.replace({ pathname: router.pathname, query: currentQuery }, undefined, { shallow: true });
    }
  };

  const handleLoginModalChange = (open: boolean) => {
    setLoginOpen(open);
    if (!open) {
      const currentQuery = { ...router.query };
      delete currentQuery.new;
      router.replace({ pathname: router.pathname, query: currentQuery }, undefined, { shallow: true });
    }
  };

  logInfo('CommunityPage featuredPosts:', { data: featuredPosts });
  logInfo('CommunityPage recentPosts:', { data: recentPosts });
  logInfo('CommunityPage activeTab:', { data: activeTab });
  
  if (!featuredPosts || !recentPosts) {
    logErrorToProduction('CommunityPage: Posts data is missing from context!', undefined, { message: 'CommunityPage: Posts data is missing from context!' });
  }
  
  return (
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Calendar, BookOpen, Award, Globe, Lightbulb, Rocket, Heart, Star, Zap, Target } from 'lucide-react';

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Discussion Forums',
      description: 'Engage in meaningful conversations about AI, technology trends, and industry insights with fellow professionals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'Access and contribute to our growing library of technical articles, tutorials, and best practices.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Events & Meetups',
      description: 'Join our virtual and in-person events, workshops, and networking opportunities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Recognition Program',
      description: 'Get recognized for your contributions and achievements within the community.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with professionals from around the world and expand your professional network.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Collaborate on innovative projects and share breakthrough ideas with the community.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Ethics & Responsible Development',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      type: 'Webinar',
      attendees: 127,
      icon: Rocket
    },
    {
      title: 'Quantum Computing Workshop',
      date: 'March 22, 2024',
      time: '10:00 AM EST',
      type: 'Workshop',
      attendees: 89,
      icon: Zap
    },
    {
      title: 'Cybersecurity Best Practices',
      date: 'March 29, 2024',
      time: '3:00 PM EST',
      type: 'Panel Discussion',
      attendees: 156,
      icon: Target
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '2,847', icon: Users },
    { label: 'Discussions', value: '1,234', icon: MessageCircle },
    { label: 'Resources Shared', value: '567', icon: BookOpen },
    { label: 'Events Hosted', value: '89', icon: Calendar }
  ];

  return (
    <>
      <SEO
        title="Community - Join the Zion Tech Marketplace Network"
        description="Connect with innovators in the Zion Tech Marketplace community. Share ideas, collaborate on projects, and expand your tech network today. Gain points and unlock resources."
        keywords="community, forum, discussion, AI marketplace, questions, answers"
        canonical="https://app.ziontechgroup.com/community"
      />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground mt-2">
              Join the conversation, ask questions, and share your knowledge
            </p>
          </div>
          
          <CreatePostButton onRequireLogin={(target) => {
            router.push(target);
            setLoginOpen(true);
          }} />
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="qa">Q&A</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <ForumCategories />
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="space-y-4">
              {featuredPosts && featuredPosts.length > 0 ? (
                featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No featured posts available at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts && recentPosts.length > 0 ? (
                recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No recent posts available at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="qa">
            <div className="space-y-4">
              {qaPosts && qaPosts.length > 0 ? (
                qaPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No Q&A posts available at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <NewPostDialog
        open={showNewPost}
        onOpenChange={handleDialogChange}
        initialCategory={initialCategory}
      />
      <LoginModal isOpen={loginOpen} onOpenChange={handleLoginModalChange} />
      <ChatAssistantTrigger />
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Community Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What You'll Find in Our Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
            <Link to="/events" className="text-blue-400 hover:text-blue-300 transition-colors">
              View All Events →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg font-medium transition-all duration-300">
                    Register Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Community Guidelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Be Respectful</h3>
                    <p className="text-gray-300 text-sm">Treat all community members with respect and kindness. Constructive feedback is welcome, but personal attacks are not.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Share Knowledge</h3>
                    <p className="text-gray-300 text-sm">Contribute valuable insights, ask thoughtful questions, and help others learn from your experiences.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Stay On Topic</h3>
                    <p className="text-gray-300 text-sm">Keep discussions relevant to technology, AI, and professional development. Off-topic content may be removed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Be Professional</h3>
                    <p className="text-gray-300 text-sm">Maintain a professional tone and avoid spam, self-promotion, or inappropriate content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Involved?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already part of our community. Start connecting, learning, and growing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Join Now - It's Free!
              </button>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
