import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  Calendar,
  Clock,
  Users,
  Play,
  ExternalLink,
  Search,
  Filter,
  Eye,
  Download,
  Share2,
  Bookmark,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Cpu,
  Shield,
  Zap,
  Rocket,
  Globe,
  Building
} from 'lucide-react';
export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const categories = [
    { id: 'all', name: 'All Topics', icon: Video },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Zap },
    { id: 'business', name: 'Business Solutions', icon: Building },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket }
  ];
  const statuses = [
    { id: 'all', name: 'All Webinars' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'live', name: 'Live Now' },
    { id: 'recorded', name: 'Recorded' }
  ];
  const webinars = [
    {
      id: 1,
      title: 'AI Autonomous Business Systems: The Future of Enterprise Operations',
      category: 'ai-ml',
      status: 'upcoming',
      date: '2025-02-25',
      time: '02:00 PM - 03:30 PM EST',
      duration: '90 minutes',
      description: 'Discover how AI autonomous systems are revolutionizing business operations, from automated decision-making to intelligent process optimization.',
      speakers: [
        { name: 'Dr. Sarah Chen', title: 'Chief AI Officer, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Prof. Michael Rodriguez', title: 'AI Research Director, MIT', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['AI Autonomous Systems', 'Business Process Automation', 'Machine Learning', 'Enterprise AI'],
      capacity: 500,
      registered: 342,
      price: 'Free',
      isLive: false,
      hasRecording: false,
      featured: true,
      tags: ['AI', 'Business Automation', 'Enterprise', 'Live Q&A']
    },
    {
      id: 2,
      title: 'Quantum Computing Applications in Financial Services',
      category: 'quantum',
      status: 'recorded',
      date: '2025-01-20',
      time: '01:00 PM - 02:30 PM EST',
      duration: '90 minutes',
      description: 'Explore how quantum computing is transforming financial modeling, risk assessment, and portfolio optimization in the financial services industry.',
      speakers: [
        { name: 'Dr. James Wilson', title: 'Quantum Computing Lead, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Dr. Emily Zhang', title: 'Quantum Researcher, IBM', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['Quantum Computing', 'Financial Modeling', 'Risk Assessment', 'Portfolio Optimization'],
      capacity: 300,
      registered: 267,
      price: 'Free',
      isLive: false,
      hasRecording: true,
      featured: false,
      tags: ['Quantum Computing', 'Finance', 'Risk Management', 'Available Now']
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Threats and Defenses',
      category: 'cybersecurity',
      status: 'live',
      date: '2025-02-20',
      time: '11:00 AM - 12:30 PM EST',
      duration: '90 minutes',
      description: 'Live webinar discussing the latest cybersecurity threats and AI-powered defense mechanisms for modern enterprises.',
      speakers: [
        { name: 'Alex Johnson', title: 'Security Compliance Director, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Maria Garcia', title: 'Cybersecurity Consultant, SecureNet', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['AI Security', 'Threat Detection', 'Cybersecurity Frameworks', 'AI Defense'],
      capacity: 400,
      registered: 389,
      price: 'Free',
      isLive: true,
      hasRecording: false,
      featured: true,
      tags: ['Live Now', 'Cybersecurity', 'AI Security', 'Interactive']
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable Applications',
      category: 'cloud',
      status: 'recorded',
      date: '2025-01-15',
      time: '10:00 AM - 11:30 AM EST',
      duration: '90 minutes',
      description: 'Learn best practices for designing and implementing cloud-native applications that scale automatically and handle high traffic loads.',
      speakers: [
        { name: 'David Kim', title: 'Cloud Architecture Lead, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Rachel Green', title: 'DevOps Engineer, CloudScale', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['Cloud Architecture', 'Microservices', 'DevOps', 'Scalability'],
      capacity: 250,
      registered: 198,
      price: 'Free',
      isLive: false,
      hasRecording: true,
      featured: false,
      tags: ['Cloud Computing', 'Architecture', 'DevOps', 'Available Now']
    },
    {
      id: 5,
      title: 'AI-Powered Marketing Automation: From Basics to Advanced',
      category: 'business',
      status: 'upcoming',
      date: '2025-03-05',
      time: '03:00 PM - 04:30 PM EST',
      duration: '90 minutes',
      description: 'Comprehensive guide to implementing AI-driven marketing automation strategies that increase conversion rates and customer engagement.',
      speakers: [
        { name: 'Jennifer Lee', title: 'AI Marketing Specialist, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Tom Anderson', title: 'Marketing Technology Consultant', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['AI Marketing', 'Marketing Automation', 'Customer Segmentation', 'Campaign Optimization'],
      capacity: 350,
      registered: 156,
      price: 'Free',
      isLive: false,
      hasRecording: false,
      featured: false,
      tags: ['Marketing', 'AI', 'Automation', 'Registration Open']
    },
    {
      id: 6,
      title: 'Emerging Technologies: What\'s Next in 2025 and Beyond',
      category: 'emerging-tech',
      status: 'recorded',
      date: '2025-01-10',
      time: '02:00 PM - 03:30 PM EST',
      duration: '90 minutes',
      description: 'Explore cutting-edge technologies that will shape the future, including quantum computing, AI consciousness, and advanced robotics.',
      speakers: [
        { name: 'Dr. Robert Chen', title: 'AI Ethics Researcher, Zion Tech Group', avatar: '/api/placeholder/60/60' },
        { name: 'Dr. Amanda Foster', title: 'Emerging Tech Analyst, Stanford', avatar: '/api/placeholder/60/60' }
      ],
      topics: ['Emerging Technologies', 'Future Trends', 'Innovation', 'Technology Forecasting'],
      capacity: 400,
      registered: 312,
      price: 'Free',
      isLive: false,
      hasRecording: true,
      featured: false,
      tags: ['Emerging Tech', 'Future Trends', 'Innovation', 'Available Now']
    }
  ];
  const filteredWebinars = webinars.filter(webinar => {
    const categoryMatch = selectedCategory === 'all' || webinar.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || webinar.status === selectedStatus;
    const searchMatch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       webinar.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && statusMatch && searchMatch;
  });
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  const getTimeUntilWebinar = (dateString: string) => {
    const webinarDate = new Date(dateString);
    const now = new Date();
    const diffTime = webinarDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'Past Webinar';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks`;
    return `${Math.ceil(diffDays / 30)} months`;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Webinars & Virtual Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our expert-led webinars to learn about cutting-edge technologies,
              industry insights, and practical solutions for your business challenges.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars, topics, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Status Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {statuses.map((status) => (
                <button
                  key={status.id}
                  onClick={() => setSelectedStatus(status.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedStatus === status.id
                      ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                      : 'border-gray-600 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                  }`}
                >
                  {status.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Live Webinars */}
      {filteredWebinars.filter(w => w.status === 'live').length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Live Now
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredWebinars.filter(w => w.status === 'live').map((webinar) => (
                <div key={webinar.id} className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30 overflow-hidden hover:border-red-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                        Live Now
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                        {webinar.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {webinar.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-red-400" />
                        <span className="text-gray-300">{webinar.time} ({webinar.duration})</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-300">{webinar.registered} watching now</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">Speakers:</span>
                        <div className="flex -space-x-2">
                          {webinar.speakers.slice(0, 3).map((speaker, index) => (
                            <div key={index} className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-xs text-white">
                              {speaker.name.charAt(0)}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-red-400">
                        {webinar.price}
                      </div>
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                      <Play className="w-5 h-5 mr-2 inline" />
                      Join Live
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Featured Upcoming Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Featured Upcoming Webinars
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredWebinars.filter(w => w.featured && w.status === 'upcoming').map((webinar) => (
              <div key={webinar.id} className="bg-gray-800/50 rounded-xl border border-cyan-500/30 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      {webinar.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {webinar.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{formatDate(webinar.date)}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">{webinar.time} ({webinar.duration})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        {webinar.registered}/{webinar.capacity} registered
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {webinar.price}
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* All Webinars Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            All Webinars
          </h2>
          {filteredWebinars.length === 0 ? (
            <div className="text-center py-20">
              <Video className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No webinars found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search terms to see more webinars.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWebinars.filter(w => !w.featured).map((webinar) => (
                <div key={webinar.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                        {webinar.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className={`text-sm font-medium px-2 py-1 rounded ${
                        webinar.status === 'live' ? 'bg-red-500/20 text-red-400' :
                        webinar.status === 'upcoming' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {webinar.status === 'live' ? 'Live' :
                         webinar.status === 'upcoming' ? getTimeUntilWebinar(webinar.date) :
                         'Recorded'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{webinar.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-400">
                        {webinar.registered}/{webinar.capacity} spots
                      </div>
                      <div className="font-semibold text-cyan-400">
                        {webinar.price}
                      </div>
                    </div>
                    {webinar.status === 'live' ? (
                      <button className="w-full px-4 py-2 bg-red-500/20 border border-red-500 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                        <Play className="w-4 h-4 mr-2 inline" />
                        Join Live
                      </button>
                    ) : webinar.status === 'upcoming' ? (
                      <button className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                        Register
                      </button>
                    ) : (
                      <button className="w-full px-4 py-2 bg-blue-500/20 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                        <Eye className="w-4 h-4 mr-2 inline" />
                        Watch Recording
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Stay Updated with Our Webinars
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get notified about upcoming webinars, access exclusive content, and never miss
            an opportunity to learn from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Subscribe to Updates
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}