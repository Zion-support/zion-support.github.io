import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NextSeo } from "@/components/NextSeo";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import { useAuth } from "@/hooks/useAuth";
import { ForumPost } from "@/types/community";

// Mock data for featured posts
const featuredPosts: ForumPost[] = [
  {
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    author: {
      id: "user1",
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      role: "Verified Talent"
    },
    authorId: "user1",
    category: "ai-tools",
    categoryId: "ai-tools",
    tags: ["machine-learning", "fine-tuning", "gpt"],
    createdAt: "2025-04-01T12:00:00Z",
    updatedAt: "2025-04-01T12:00:00Z",
    replies: [],
    likes: 48,
    views: 120,
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isPinned: false,
    isLocked: false,
    isAnswered: true,
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent"
  },
  {
    id: "2",
    title: "How to build an effective AI talent profile?",
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
    author: {
      id: "user2",
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Verified Talent"
    },
    authorId: "user2",
    category: "getting-hired",
    categoryId: "getting-hired",
    tags: ["profile", "tips", "hiring"],
    createdAt: "2025-04-03T09:15:00Z",
    updatedAt: "2025-04-03T09:15:00Z",
    replies: [],
    likes: 32,
    views: 89,
    upvotes: 32,
    downvotes: 0,
    replyCount: 8,
    isPinned: true,
    isLocked: false,
    isAnswered: false,
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    authorRole: "Verified Talent"
  }
];

// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {
    id: "3",
    title: "Looking for feedback on my automated testing approach",
    content: "I've set up a CI/CD pipeline with the following testing strategy...",
    author: {
      id: "user3",
      name: "Michael Wong",
      avatar: "https://i.pravatar.cc/150?img=7",
      role: "Developer"
    },
    authorId: "user3",
    category: "project-help",
    categoryId: "project-help",
    tags: ["testing", "automation", "ci-cd"],
    createdAt: "2025-04-10T14:30:00Z",
    updatedAt: "2025-04-10T14:30:00Z",
    replies: [],
    likes: 5,
    views: 45,
    upvotes: 5,
    downvotes: 0,
    replyCount: 2,
    isPinned: false,
    isLocked: false,
    isAnswered: false,
    authorName: "Michael Wong",
    authorAvatar: "https://i.pravatar.cc/150?img=7",
    authorRole: "Developer"
  },
  {
    id: "4",
    title: "Feature request: Team collaboration tools",
    content: "It would be really helpful if we could have built-in tools for team collaboration...",
    author: {
      id: "user4",
      name: "Emma Davis",
      avatar: "https://i.pravatar.cc/150?img=9",
      role: "Product Manager"
    },
    authorId: "user4",
    category: "feedback",
    categoryId: "feedback",
    tags: ["feature-request", "teams", "collaboration"],
    createdAt: "2025-04-09T18:45:00Z",
    updatedAt: "2025-04-09T18:45:00Z",
    replies: [],
    likes: 12,
    views: 67,
    upvotes: 12,
    downvotes: 1,
    replyCount: 3,
    isPinned: false,
    isLocked: false,
    isAnswered: false,
    authorName: "Emma Davis",
    authorAvatar: "https://i.pravatar.cc/150?img=9",
    authorRole: "Product Manager"
  },
  {
    id: "5",
    title: "How to handle client scope creep?",
    content: "I'm working on a project where the client keeps adding requirements...",
    author: {
      id: "user5",
      name: "David Lin",
      avatar: "https://i.pravatar.cc/150?img=11",
      role: "Freelancer"
    },
    authorId: "user5",
    category: "project-help",
    categoryId: "project-help",
    tags: ["client-management", "scope", "projects"],
    createdAt: "2025-04-08T10:20:00Z",
    updatedAt: "2025-04-08T10:20:00Z",
    replies: [],
    likes: 24,
    views: 89,
    upvotes: 24,
    downvotes: 0,
    replyCount: 7,
    isPinned: false,
    isLocked: false,
    isAnswered: true,
    authorName: "David Lin",
    authorAvatar: "https://i.pravatar.cc/150?img=11",
    authorRole: "Freelancer"
  }
];

export default function CommunityPage() {

  logInfo('CommunityPage rendering');
  const { t } = useTranslation();
  const { user } = useAuth();
  const { featuredPosts, recentPosts } = useCommunity();
  const [activeTab, setActiveTab] = useState("categories");
  const router = useRouter();
  const [showNewPost, setShowNewPost] = useState(false);
  const { markCommunityVisited } = useAdvancedOnboardingStatus();

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
      const returnTo = encodeURIComponent(`/community?new=1${initialCategory ? `&category=${initialCategory}` : ""}`);
      router.replace(`/auth/login?returnTo=${returnTo}`);
      return;
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
      <NextSeo
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"
        canonical="https://ziontechgroup.com/community"
      />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">{t('community_page.title')}</h1>
            <p className="text-muted-foreground mt-2">
              {t('community_page.subtitle')}
            </p>
          </div>
          
          <CreatePostButton />
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">{t('categories')}</TabsTrigger>
            <TabsTrigger value="featured">{t('featured')}</TabsTrigger>
            <TabsTrigger value="recent">{t('recent')}</TabsTrigger>
            <TabsTrigger value="qa">{t('q_and_a')}</TabsTrigger>
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
                  <p>{t('community_page.no_featured')}</p>
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
                  <p>{t('community_page.no_recent')}</p>
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
                  <p>{t('community_page.no_qa')}</p>
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
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
