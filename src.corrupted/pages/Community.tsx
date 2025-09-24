import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Users,;
  MessageCircle, ;
  Search, ;
  Filter,;
  ArrowRight,;
  Star,;
  Bookmark,;
  Share2,;
  Copy,;
  CheckCircle,;
  Clock,;
  Tag,;
  Play,;
  Terminal,;
  FileText,;
  Key,;
  Lock,;
  Eye,;
  EyeOff,;
  ChevronDown,;
  ChevronRight,;
  AlertCircle,;
  Info,;
  TrendingUp,;
  Heart,;
  MessageSquare,;
  Award,;
  Zap,;
  Globe,;
  Calendar,;
  User,;
  Plus;
} from "lucide-react"
export default function Community() {;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('All'),;
  const [selectedSort, setSelectedSort] = useState('Latest')
  const categories = ['AllGeneral Discussion', 'AI & Machine LearningCybersecurity', 'Cloud & DevOpsQuantum Computing', 'BlockchainIoT & Edge', 'Help & SupportShowcase']
  const sortOptions = ['LatestMost Popular', 'Most ActiveTrending']
  const forumCategories = [;
    {;
      id: 'general',name: 'General Discussion',description: 'General topics, announcements, and community discussions',;
      icon: Users,color: 'from-blue-500 to-cyan-500',topics: 1247,posts: 8934,lastActivity: '2 hours ago',featured: true;
    };
    {;
      id: 'ai-ml',name: 'AI & Machine Learning',description: 'Discussions about AI, machine learning, and data science',;
      icon: Zap,color: 'from-purple-500 to-pink-500',topics: 892,posts: 5678,lastActivity: '1 hour ago',featured: true;
    };
    {;
      id: 'cybersecurity',name: 'Cybersecurity',description: 'Security discussions, threat intelligence, and best practices',;
      icon: Lock,color: 'from-red-500 to-orange-500',topics: 456,posts: 2345,lastActivity: '3 hours ago',featured: true;
    };
    {;
      id: 'cloud-devops',name: 'Cloud & DevOps',description: 'Cloud computing, DevOps practices, and infrastructure',;
      icon: Globe,color: 'from-green-500 to-emerald-500',topics: 678,posts: 3456,lastActivity: '4 hours ago',featured: false;
    };
    {;
      id: 'quantum',name: 'Quantum Computing',description: 'Quantum computing research, applications, and developments',;
      icon: Atom,color: 'from-indigo-500 to-purple-500',topics: 234,posts: 1234,lastActivity: '6 hours ago',featured: false;
    };
    {;
      id: 'blockchain',name: 'Blockchain',description: 'Blockchain technology, DeFi, and Web3 discussions',;
      icon: Link,color: 'from-yellow-500 to-orange-500',topics: 345,posts: 1789,lastActivity: '8 hours ago',featured: false;
    };
  ];
  const recentDiscussions = [;
    {;
      id: 1,title: 'Best practices for implementing AI in enterprise environments?',author: 'Sarah Chen',authorAvatar: '/avatars/sarah.jpg',category: 'AI & Machine Learning',replies: 23,views: 456,lastReply: '2 hours ago',tags: ['AIEnterprise', 'Best Practices'],;
      featured: true,pinned: false;
    };
    {;
      id: 2,title: 'Zero Trust Security Architecture Implementation Guide',author: 'Mike Rodriguez',authorAvatar: '/avatars/mike.jpg',category: 'Cybersecurity',replies: 18,views: 234,lastReply: '4 hours ago',tags: ['SecurityZero Trust', 'Architecture'],;
      featured: false,pinned: true;
    };
    {;
      id: 3,title: 'Quantum Computing vs Classical Computing for ML workloads',author: 'Dr. Emily Watson',authorAvatar: '/avatars/emily.jpg',category: 'Quantum Computing',replies: 31,views: 789,lastReply: '1 hour ago',tags: ['QuantumMachine Learning', 'Performance'],;
      featured: true,pinned: false;
    };
    {;
      id: 4,title: 'DevOps transformation success stories and lessons learned',author: 'Alex Thompson',authorAvatar: '/avatars/alex.jpg',category: 'Cloud & DevOps',replies: 15,views: 345,lastReply: '5 hours ago',tags: ['DevOpsTransformation', 'Success Stories'],;
      featured: false,pinned: false;
    };
    {;
      id: 5,title: 'Blockchain scalability solutions for enterprise applications',author: 'Maria Santos',authorAvatar: '/avatars/maria.jpg',category: 'Blockchain',replies: 27,views: 567,lastReply: '3 hours ago',tags: ['BlockchainScalability', 'Enterprise'],;
      featured: false,pinned: false;
    };
  ];
  const communityStats = [;
    { label: 'Members', value: '12,847', icon: Users, color: 'text-blue-400' };
    { label: 'Topics', value: '4,892', icon: MessageSquare, color: 'text-green-400' };
    { label: 'Posts', value: '23,456', icon: MessageCircle, color: 'text-purple-400' };
    { label: 'Solutions', value: '8,934', icon: CheckCircle, color: 'text-cyan-400' };
  ];
  const filteredDiscussions = recentDiscussions.filter(discussion => {;
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),;
    const matchesCategory = selectedCategory === 'All' || discussion.category === selectedCategory
    return matchesSearch && matchesCategory,;&& matchesCategory,; matchesCategory,
  }),;

  const handleStartDiscussion = () => {;
    //[^;]*
    console.log('Start new discussion'),;
  },;

  const handleJoinCommunity = () => {;
    //[^;]*
    console.log('Join community'),;
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals. Connect, learn, and collaborate with experts in AI, cybersecurity, quantum computing, and more."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Join Our Community;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Connect with thousands of technology professionals, share knowledge, ;
              and stay updated with the latest trends in AI, cybersecurity, quantum computing, and more.;
            </[^>]*>
            ;
            {/* Search and Filters */};
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">;
              <div className="relative flex-1">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search discussions, topics, or members..."
                  value={searchQuery};
                  onChange={(e) => setSearchQuery(e.target.value)};
                  className="[^"]*"
                />;
              </[^>]*>
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {categories.map(category => (;
                  <option key={category} value={category}>{category}</[^>]*>
                ))};
              </[^>]*>
              <select;
                value={selectedSort};
                onChange={(e) => setSelectedSort(e.target.value)};
                className="[^"]*"
              >;
                {sortOptions.map(option => (;
                  <option key={option} value={option}>{option}</[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            {/* Community Stats */};
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">;
              {communityStats.map((stat, index) => (;
                <motion.div
                  key={stat.label};
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</[^>]*>
                  <div className="text-sm text-gray-400">{stat.label}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Forum Categories */};
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white text-center mb-4">Forum Categories</[^>]*>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">;
              Explore our organized discussion areas covering all aspects of technology and innovation;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {forumCategories.map((category, index) => (;
              <motion.div
                key={category.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>;
                      <[^>]*/>
                    </[^>]*>
                    {category.featured && (;&& (; (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">;
                        Featured;
                      </[^>]*>
                    )};
                  </[^>]*>

                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</[^>]*>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</[^>]*>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">;
                    <span>{category.topics} topics</[^>]*>
                    <span>{category.posts} posts</[^>]*>
                  </[^>]*>

                  <div className="text-xs text-gray-500 mb-4">;
                    Last activity: {category.lastActivity};
                  </[^>]*>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                    Browse Category;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Recent Discussions */};
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="flex items-center justify-between mb-8">;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-2">Recent Discussions</[^>]*>
              <p className="text-gray-300">Join the conversation in our most active discussions</[^>]*>
            </[^>]*>
            <button;
              onClick={handleStartDiscussion};
              className="[^"]*"
            >;
              <[^>]*/>
              Start Discussion;
            </[^>]*>
          </[^>]*>

          <div className="space-y-4">;
            {filteredDiscussions.map((discussion, index) => (;
              <motion.div
                key={discussion.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.05 }};
                className="[^"]*"
              >;
                <div className="flex items-start gap-4">;
                  {/* Author Avatar */};
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">;
                    <[^>]*/>
                  </[^>]*>

                  {/* Discussion Content */};
                  <div className="flex-1 min-w-0">;
                    <div className="flex items-start justify-between mb-2">;
                      <div className="flex items-center gap-2">;
                        <h3 className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer">;
                          {discussion.title};
                        </[^>]*>
                        {discussion.pinned && (;&& (; (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">;
                            Pinned;
                          </[^>]*>
                        )};
                        {discussion.featured && (;&& (; (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full">;
                            Featured;
                          </[^>]*>
                        )};
                      </[^>]*>
                    </[^>]*>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">;
                      <span>by {discussion.author}</[^>]*>
                      <span>in {discussion.category}</[^>]*>
                      <span>{discussion.lastReply}</[^>]*>
                    </[^>]*>

                    <div className="flex flex-wrap gap-2 mb-3">;
                      {discussion.tags.map((tag, idx) => (;
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">;
                          {tag};
                        </[^>]*>
                      ))};
                    </[^>]*>

                    <div className="flex items-center justify-between">;
                      <div className="flex items-center gap-4 text-sm text-gray-400">;
                        <span className="flex items-center gap-1">;
                          <[^>]*/>
                          {discussion.replies} replies;
                        </[^>]*>
                        <span className="flex items-center gap-1">;
                          <[^>]*/>
                          {discussion.views} views;
                        </[^>]*>
                      </[^>]*>

                      <div className="flex items-center gap-2">;
                        <button className="p-2 text-gray-400 hover: text-cyan-400 transition-colors" title="Bookmark">;
                          <[^>]*/>
                        </[^>]*>
                        <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors" title="Share">;
                          <[^>]*/>
                        </[^>]*>
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">;
                          View Discussion →;
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {filteredDiscussions.length === 0 && (;&& (; (
            <motion.div
              initial={{ opacity: 0 }};
              animate={{ opacity: 1 }};
              className="[^"]*"
            >;
              <div className="text-gray-400 text-lg mb-4">;
                No discussions found matching your criteria.;
              </[^>]*>
              <button;
                onClick={() => {;
                  setSearchQuery('')
                  setSelectedCategory('All'),;
                }};
                className="[^"]*"
              >;
                Clear filters;
              </[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready to Join the Community?;
            </[^>]*>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">;
              Connect with thousands of technology professionals, share your expertise;
              and learn from industry leaders. Join our community today!;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button;
                onClick={handleJoinCommunity};
                className="[^"]*"
              >;
                Join Community;
              </[^>]*>
              <button className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">;
                View Guidelines;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};