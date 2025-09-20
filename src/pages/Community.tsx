import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Users,;
  MessageCircle,;
  Search,;
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
  CalendarUserPlus;
} from "lucide-react";
export, default, function Community() {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [selectedSortsetSelectedSort] = useState('Latest');
  const categories = ['AllGeneral Discussion', 'AI & Machine LearningCybersecurity', 'Cloud & DevOpsQuantum Computing', 'BlockchainIoT & Edge''Help &, SupportShowcase'];
  const sortOptions = ['LatestMost Popular''Most, ActiveTrending'];
  const forumCategories = [;
    {
      id: 'general',name: 'General Discussion',description: 'General topics, announcements, and, community, discussions',;
      icon: Users,color: 'from-blue-50o0 to-cyan-50o0',topics: 1247,posts: 8934lastActivit,;
    y: '2, hours, ago'feature,;
  d: true;
    };
    {
      id: 'ai-ml',name: 'AI & Machine Learning',description: 'Discussions, about, AI, machine learning, and, data, science',;
      icon: Zap,color: 'from-purple-50o0 to-pink-50o0',topics: 892,posts: 5678lastActivit,;
    y: '1, hour, ago'feature,;
  d: true;
    };
    {
      id: 'cybersecurity',name: 'Cybersecurity',description: 'Security discussions, threat intelligence, and, best, practices',;
      icon: Lock,color: 'from-red-50o0 to-orange-50o0',topics: 456,posts: 2345lastActivit,;
    y: '3, hours, ago'feature,;
  d: true;
    };
    {
      id: 'cloud-devops',name: 'Cloud & DevOps',description: 'Cloud computing, DevOps practices, and infrastructure',;
      icon: Globe,color: 'from-green-50o0 to-emerald-50o0',topics: 678,posts: 3456lastActivit,;
    y: '4, hours, ago'feature,;
  d: false;
    };
    {
      id: 'quantum',name: 'Quantum Computing',description: 'Quantum, computing, research, applications, and developments',;
      icon: Atom,color: 'from-indigo-50o0 to-purple-50o0',topics: 234,posts: 1234lastActivit,;
    y: '6, hours, ago'feature,;
  d: false;
    },;
    {
      id: 'blockchain',name: 'Blockchain',description: 'Blockchain technology, DeFi, and, Web3, discussions',;
      icon: Link,color: 'from-yellow-50o0 to-orange-50o0',topics: 345posts: 1789lastActivit,;
    y: '8, hours, ago'feature,;
  d: false;
    }
,  ];
  const recentDiscussions = [;
    {
      id: 1,title: 'Best, practices, for implementing, AI, in enterprise environments?',author: 'Sarah Chen',authorAvatar: '/avatars/sarah.jpg',category: 'AI & Machine Learning',replies: 23,views: 456,lastReply: '2, hours, ago',tags: ['AIEnterprise''Best, Practices']featured: truepinne,;
  d: false;
    };
    {
      id: 2,title: 'Zero, Trust, Security Architecture, Implementation, Guide',author: 'Mike Rodriguez',authorAvatar: '/avatars/mike.jpg',category: 'Cybersecurity',replies: 18,views: 234,lastReply: '4, hours, ago',tags: ['SecurityZero, Trust''Architecture']featured: falsepinne,;
  d: true;
    };
    {
      id: 3,title: 'Quantum, Computing, vs Classical, Computing, for ML workloads',author: 'Dr. Emily Watson',authorAvatar: '/avatars/emily.jpg',category: 'Quantum Computing',replies: 31,views: 789,lastReply: '1, hour, ago',tags: ['QuantumMachine, Learning''Performance']featured: truepinne,;
  d: false;
    };
    {
      id: 4,title: 'DevOps, transformation, success stories, and, lessons learned',author: 'Alex Thompson',authorAvatar: '/avatars/alex.jpg',category: 'Cloud & DevOps',replies: 15,views: 345,lastReply: '5, hours, ago',tags: ['DevOpsTransformation''Success, Stories']featured: falsepinne,;
  d: false;
    };
    {
      id: 5,title: 'Blockchain, scalability, solutions for, enterprise, applications',author: 'Maria Santos',authorAvatar: '/avatars/maria.jpg',category: 'Blockchain',replies: 27,views: 567,lastReply: '3, hours, ago',tags: ['BlockchainScalability''Enterprise']feature,;
    d: falsepinne,;
  d: false;
    }
  ];
  const communityStats = [;
    { label: 'Members', value: '12,847'icon: Userscolo,;
  r: 'text-blue-40o0' };
    { label: 'Topics', value: '4,892'icon: MessageSquarecolo,;
  r: 'text-green-40o0' };
    { label: 'Posts', value: '23,456'icon: MessageCirclecolo,;
  r: 'text-purple-40o0' },;
    { label: 'Solutions', value: '8934'ico,;
    n: CheckCirclecolo,;
  r: 'text-cyan-40o0' };
,  ];
  const filteredDiscussions = recentDiscussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory });
;
  const handleStartDiscussion = () => {;
    // Navigate, to, create discussion page;
    console.log('Start, new, discussion');
  },;
  const handleJoinCommunity = () => {;
    // Handle, community, join logic;
    console.log('Join community');
  },;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Community - Zion, Tech, Group";
        description="Join, our, vibrant community, of, technology professionals. Connect, learn, and, collaborate, with experts, in, AI, cybersecurity, quantum, computingand, more.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Join, Our, Community;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
              Connect, with, thousands of, technology, professionals, share knowledge; ;
              and, stay, updated with, the, latest trends, in, AI, cybersecurity, quantum computing, and more.;
            </p>;
            {/* Search, and, Filters */}
            <div className="flex flex-col md: flex-row gap-4 max-w-3xl mx-auto mb-8">;
              <div className="relative flex-1">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search, discussionstopicsor, members...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                />;
              </div>;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
              >;
                {categories.map(category => (;
                  <option key={category} value={category}>{category}</option>;
                ))}
              </select>;
              <select;
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
              >;
                {sortOptions.map(option => (;
                  <option key={option} value={option}>{option}</option>;
                ))}
              </select>;
            </div>;
            {/* Community Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-3xl mx-auto">;
              {communityStats.map((statindex) => (;
                <motion.div;
                  key={stat.label}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  className="text-center";
                >;
                  <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>;
                  <div className="text-sm text-gray-40o0">{stat.label}</div>;
                </motion.div>;
              ))}
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Forum Categories */}
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12";
          >;
            <h2 className="text-3xl font-bold text-white text-center mb-4">Forum Categories</h2>;
            <p className="text-gray-30o0 text-center max-w-2xl mx-auto">;
              Explore, our, organized discussion, areas, covering all, aspects, of technology, and, innovation;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {forumCategories.map((categoryindex) => (;
              <motion.div;
                key={category.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-80o0/50 backdrop-blur-xl rounded-xl, border, border-slate-70o0/50 overflow-hidden hover: border-cyan-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className="p-6">;
                  <div className="flex items-start justify-between mb-4">;
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>;
                      <category.icon className="w-6 h-6 text-white" />;
                    </div>;
                    {category.featured && (;
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 rounded-full text-xs font-medium text-white">;
                        Featured;
                      </span>;
                    )}
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>;
                  <p className="text-gray-30o0 text-sm mb-4">{category.description}</p>;
                  <div className="flex items-center justify-between text-sm text-gray-40o0 mb-4">;
                    <span>{category.topics} topics</span>;
                    <span>{category.posts} posts</span>;
                  </div>;
                  <div className="text-xs text-gray-50o0 mb-4">;
                    Last activity: {category.lastActivity}
                  </div>;
                  <button className="w-full bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium py-2 px-4 rounded-lg transition-all duration-30o0, transform, hover:scale-10o5 shadow-lg hove,;
  r:shadow-cyan-50o0/25">;
                    Browse Category;
                  </button>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Recent Discussions */}
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="flex items-center justify-between mb-8">;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-2">Recent Discussions</h2>;
              <p className="text-gray-30o0">Join, the, conversation in, our, most active discussions</p>;
            </div>;
            <button;
              onClick={handleStartDiscussion}
              className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium py-3 px-6 rounded-lg transition-all duration-30o0, transform, hover:scale-10o5 shadow-lg hove,;
  r:shadow-cyan-50o0/25, flex, items-center gap-2";
            >;
              <Plus className="w-4 h-4" />;
              Start Discussion;
            </button>;
          </div>;
          <div className="space-y-4">;
            {filteredDiscussions.map((discussionindex) => (;
              <motion.div;
                key={discussion.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.0o5 }}
                className="bg-slate-80o0/50 backdrop-blur-xl rounded-xl, border, border-slate-70o0/50 p-6 hover:border-cyan-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-start gap-4">;
                  {/* Author Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-40o0 to-blue-50o0 rounded-full, flex, items-center justify-center flex-shrink-0">;
                    <User className="w-6 h-6 text-white" />;
                  </div>;
                  {/* Discussion Content */}
                  <div className="flex-1 min-w-0">;
                    <div className="flex items-start justify-between mb-2">;
                      <div className="flex items-center gap-2">;
                        <h3 className="text-lg font-semibold text-white hover:text-cyan-40o0 transition-colors cursor-pointer">;
                          {discussion.title}
                        </h3>;
                        {discussion.pinned && (;
                          <span className="px-2 py-1 bg-yellow-50o0/20 text-yellow-40o0 text-xs rounded-full">;
                            Pinned;
                          </span>;
                        )}
                        {discussion.featured && (;
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white text-xs rounded-full">;
                            Featured;
                          </span>;
                        )}
                      </div>;
                    </div>;
                    <div className="flex items-center gap-4 text-sm text-gray-40o0 mb-3">;
                      <span>by {discussion.author}</span>;
                      <span>in {discussion.category}</span>;
                      <span>{discussion.lastReply}</span>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mb-3">;
                      {discussion.tags.map((tagidx) => (;
                        <span key={idx} className="px-2 py-1 bg-slate-70o0/50, rounded, text-xs text-gray-30o0">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <div className="flex items-center justify-between">;
                      <div className="flex items-center gap-4 text-sm text-gray-40o0">;
                        <span className="flex items-center gap-1">;
                          <MessageCircle className="w-4 h-4" />;
                          {discussion.replies} replies;
                        </span>;
                        <span className="flex items-center gap-1">;
                          <Eye className="w-4 h-4" />;
                          {discussion.views} views;
                        </span>;
                      </div>;
                      <div className="flex items-center gap-2">;
                        <button className="p-2 text-gray-40o0 hover: text-cyan-40o0 transition-colors" title="Bookmark">;
                          <Bookmark className="w-4 h-4" />;
                        </button>;
                        <button className="p-2 text-gray-40o0 hove,;
    r:text-cyan-40o0 transition-colors" title="Share">;
                          <Share2 className="w-4 h-4" />;
                        </button>;
                        <button className="text-cyan-40o0 hove,;
  r:text-cyan-30o0 transition-colors text-sm font-medium">;
                          View Discussion →;
                        </button>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
          {filteredDiscussions.length === 0 && (;
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16";
            >;
              <div className="text-gray-40o0 text-lg mb-4">;
                No, discussions, found matching, your, criteria.;
              </div>;
              <button;
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-cyan-40o0 hover: text-cyan-30o0 transition-colors";
              >;
                Clear filters;
              </button>;
            </motion.div>;
          )}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-50o0/10 to-blue-60o0/10, border, border-cyan-40o0/20 rounded-2xl p-8 text-center";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready, to, Join the Community?;
            </h2>;
            <p className="text-gray-30o0 mb-6 max-w-2xl mx-auto">;
              Connect, with, thousands of, technology, professionals, share, your, expertise;
              and, learn, from industry leaders. Join, our, community today!;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button;
                onClick={handleJoinCommunity}
                className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium py-3 px-6 rounded-lg transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-cyan-50o0/25";
              >;
                Join Community;
              </button>;
              <button className="border border-cyan-40o0/50 text-cyan-40o0 hove,;
  r: bg-cyan-40o0/10 font-medium py-3 px-6 rounded-lg transition-all duration-30o0">;
                View Guidelines;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;