import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { 
  Users
  MessageCircle, 
  Search, 
  Filter
  ArrowRight
  Star
  Bookmark
  Share2
  Copy
  CheckCircle
  Clock
  Tag
  Play
  Terminal
  FileText
  Key
  Lock
  Eye
  EyeOff
  ChevronDown
  ChevronRight
  AlertCircle
  Info
  TrendingUp
  Heart
  MessageSquare
  Award
  Zap
  Globe
  Calendar
  User
  Plus
} from "lucide-react"
export default function Community() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSort, setSelectedSort] = useState('Latest')
  const categories = [['AllGeneral Discussion', 'AI & Machine LearningCybersecurity', 'Cloud & DevOpsQuantum Computing', 'BlockchainIoT & Edge', 'Help & SupportShowcase'];]
  const sortOptions = [['LatestMost Popular', 'Most ActiveTrending'];]
  const forumCategories = [
    {
      id: 'general',na,
  m: e: 'General Discussion',descripti,
  o: n: 'General topics, announcements, and community discussions'
      ic,
  o: n: Users,col,
  o: r: 'from-blue-500 to-cyan-500',topi,
  c: s: 1247,pos,
  t: s: 8934,lastActivi,
  t: y: '2 hours ago',featur,
  e: d: true
    }, {
      id: 'ai-ml',na,
  m: e: 'AI & Machine Learning',descripti,
  o: n: 'Discussions about AI, machine learning, and data science'
      ic,
  o: n: Zap,col,
  o: r: 'from-purple-500 to-pink-500',topi,
  c: s: 892,pos,
  t: s: 5678,lastActivi,
  t: y: '1 hour ago',featur,
  e: d: true
    }, {
      id: 'cybersecurity',na,
  m: e: 'Cybersecurity',descripti,
  o: n: 'Security discussions, threat intelligence, and best practices'
      ic,
  o: n: Lock,col,
  o: r: 'from-red-500 to-orange-500',topi,
  c: s: 456,pos,
  t: s: 2345,lastActivi,
  t: y: '3 hours ago',featur,
  e: d: true
    }, {
      id: 'cloud-devops',na,
  m: e: 'Cloud & DevOps',descripti,
  o: n: 'Cloud computing, DevOps practices, and infrastructure'
      ic,
  o: n: Globe,col,
  o: r: 'from-green-500 to-emerald-500',topi,
  c: s: 678,pos,
  t: s: 3456,lastActivi,
  t: y: '4 hours ago',featur,
  e: d: false
    }, {
      id: 'quantum',na,
  m: e: 'Quantum Computing',descripti,
  o: n: 'Quantum computing research, applications, and developments'
      ic,
  o: n: Atom,col,
  o: r: 'from-indigo-500 to-purple-500',topi,
  c: s: 234,pos,
  t: s: 1234,lastActivi,
  t: y: '6 hours ago',featur,
  e: d: false
    }, {
      id: 'blockchain',na,
  m: e: 'Blockchain',descripti,
  o: n: 'Blockchain technology, DeFi, and Web3 discussions'
      ic,
  o: n: Link,col,
  o: r: 'from-yellow-500 to-orange-500',topi,
  c: s: 345,pos,
  t: s: 1789,lastActivi,
  t: y: '8 hours ago',featur,
  e: d: false
    }
  ]
  const recentDiscussions = [
    {
      id: 1,tit,
  l: e: 'Best practices for implementing AI in enterprise environments?',auth,
  o: r: 'Sarah Chen',authorAvat,
  a: r: '/avatars/sarah.jpg',catego,
  r: y: 'AI & Machine Learning',repli,
  e: s: 23,vie,
  w: s: 456,lastRep,
  l: y: '2 hours ago',ta,
  g: s: ['AIEnterprise', 'Best Practices']
      featur,
  e: d: true,pinn,
  e: d: false
    }, {
      id: 2,tit,
  l: e: 'Zero Trust Security Architecture Implementation Guide',auth,
  o: r: 'Mike Rodriguez',authorAvat,
  a: r: '/avatars/mike.jpg',catego,
  r: y: 'Cybersecurity',repli,
  e: s: 18,vie,
  w: s: 234,lastRep,
  l: y: '4 hours ago',ta,
  g: s: ['SecurityZero Trust', 'Architecture']
      featur,
  e: d: false,pinn,
  e: d: true
    }, {
      id: 3,tit,
  l: e: 'Quantum Computing vs Classical Computing for ML workloads',auth,
  o: r: 'Dr. Emily Watson',authorAvat,
  a: r: '/avatars/emily.jpg',catego,
  r: y: 'Quantum Computing',repli,
  e: s: 31,vie,
  w: s: 789,lastRep,
  l: y: '1 hour ago',ta,
  g: s: ['QuantumMachine Learning', 'Performance']
      featur,
  e: d: true,pinn,
  e: d: false
    }, {
      id: 4,tit,
  l: e: 'DevOps transformation success stories and lessons learned',auth,
  o: r: 'Alex Thompson',authorAvat,
  a: r: '/avatars/alex.jpg',catego,
  r: y: 'Cloud & DevOps',repli,
  e: s: 15,vie,
  w: s: 345,lastRep,
  l: y: '5 hours ago',ta,
  g: s: ['DevOpsTransformation', 'Success Stories']
      featur,
  e: d: false,pinn,
  e: d: false
    }, {
      id: 5,tit,
  l: e: 'Blockchain scalability solutions for enterprise applications',auth,
  o: r: 'Maria Santos',authorAvat,
  a: r: '/avatars/maria.jpg',catego,
  r: y: 'Blockchain',repli,
  e: s: 27,vie,
  w: s: 567,lastRep,
  l: y: '3 hours ago',ta,
  g: s: ['BlockchainScalability', 'Enterprise']
      featur,
  e: d: false,pinn,
  e: d: false
    }
  ]
  const communityStats = [
    { lab,
  e: l: 'Members', val,
  u: e: '12,847', ic,
  o: n: Users, col,
  o: r: 'text-blue-400' }, { lab,
  e: l: 'Topics', val,
  u: e: '4,892', ic,
  o: n: MessageSquare, col,
  o: r: 'text-green-400' }, { lab,
  e: l: 'Posts', val,
  u: e: '23,456', ic,
  o: n: MessageCircle, col,
  o: r: 'text-purple-400' }, { lab,
  e: l: 'Solutions', val,
  u: e: '8,934', ic,
  o: n: CheckCircle, col,
  o: r: 'text-cyan-400' }
  ]
  const filteredDiscussions = recentDiscussions.filter(discussion () () => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || discussion.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleStartDiscussion = () () => {
    // Navigate to create discussion page
    console.log('Start new discussion')
  }

  const handleJoinCommunity = () () => {
    // Handle community join logic
    console.log('Join community')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of technology professionals. Connect, learn, and collaborate with experts in AI, cybersecurity, quantum computing, and more."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with thousands of technology professionals, share knowledge, 
              and stay updated with the latest trends in AI, cybersecurity, quantum computing, and more.
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col,
  m: d:flex-row gap-4 max-w-3xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search discussions, topics, or members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  animate={ opaci,
  t: y: 1, y: 0 }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                  className="className="text-center";"
                >
                  <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Forum Categories</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Explore our organized discussion areas covering all aspects of technology and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden,
  hove: r: border-cyan-400/30 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    {category.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{category.topics} topics</span>
                    <span>{category.posts} posts</span>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    Last,
  activit: y: {category.lastActivity}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg hove,
  r:shadow-cyan-500/25">
                    Browse Category
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Recent Discussions</h2>
              <p className="text-gray-300">Join the conversation in our most active discussions</p>
            </div>
            <button
              onClick={onClick={handleStartDiscussion}
              className="className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg hove,
  r:shadow-cyan-500/25 flex items-center gap-2";"
            >
              <Plus className="w-4 h-4" />
              Start Discussion
            </button>
          </div>

          <div className="space-y-4">
            {filteredDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={ opaci,
  t: y: 0, y: 20 }
                animate={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.05 }
                className="className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6,
  hove: r:border-cyan-400/30 transition-all duration-300";"
              >
                <div className="flex items-start gap-4">
                  {/* Author Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>

                  {/* Discussion Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white,
  hove: r:text-cyan-400 transition-colors cursor-pointer">
                          {discussion.title}
                        </h3>
                        {discussion.pinned && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                            Pinned
                          </span>
                        )}, {discussion.featured && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>by {discussion.author}</span>
                      <span>in {discussion.category}</span>
                      <span>{discussion.lastReply}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {discussion.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {discussion.views} views
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400,
  hove: r: text-cyan-400 transition-colors" title="Bookmark">
                          <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400,
  hove: r:text-cyan-400 transition-colors" title="Share">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="text-cyan-400 hove,
  r:text-cyan-300 transition-colors text-sm font-medium">
                          View Discussion →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDiscussions.length === 0 && (
            <motion.div
              initial={ opaci,
  t: y: 0 }
              animate={ opaci,
  t: y: 1 }
              className="className="text-center py-16";"
            >
              <div className="text-gray-400 text-lg mb-4">
                No discussions found matching your criteria.
              </div>
              <button
                onClick={() () => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }
                className="className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors";"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            viewport={ on,
  c: e: true }
            className="className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join the Community?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect with thousands of technology professionals, share your expertise
              and learn from industry leaders. Join our community today!
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button
                onClick={onClick={handleJoinCommunity}
                className="className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-cyan-500/25";"
              >
                Join Community
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 hove,
  r:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                View Guidelines
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}