import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  ArrowRight, 
  Star, 
  Award,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cloud,
  Settings,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const WebinarsPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: A Complete Guide",
      description: "Learn how to implement AI solutions across your organization for maximum impact and ROI.",
      date: "2024-01-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Johnson",
      speakerTitle: "Chief AI Officer",
      speakerCompany: "Zion Tech Group",
      attendees: 1250,
      category: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",
      description: "Essential security strategies to protect your business from evolving cyber threats.",
      date: "2024-01-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen",
      speakerTitle: "Security Expert",
      speakerCompany: "Zion Tech Group",
      attendees: 890,
      category: "IT Services",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      id: 3,
      title: "Micro SAAS Solutions: Quick Implementation Guide",
      description: "Discover ready-to-use software solutions that can transform your business operations immediately.",
      date: "2024-01-29",
      time: "1:00 PM EST",
      duration: "50 minutes",
      speaker: "Emily Rodriguez",
      speakerTitle: "Product Manager",
      speakerCompany: "Zion Tech Group",
      attendees: 650,
      category: "Micro SAAS",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Future of Connectivity",
      description: "Explore the potential of 5G networks and how they can revolutionize your business.",
      date: "2024-02-05",
      time: "2:30 PM EST",
      duration: "55 minutes",
      speaker: "David Kim",
      speakerTitle: "5G Solutions Architect",
      speakerCompany: "Zion Tech Group",
      attendees: 420,
      category: "5G Solutions",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 5,
      title: "Digital Transformation Strategies for SMEs",
      description: "How small and medium enterprises can leverage technology for growth.",
      date: "2023-12-18",
      duration: "60 minutes",
      speaker: "Lisa Wang",
      speakerTitle: "Digital Transformation Consultant",
      speakerCompany: "Zion Tech Group",
      attendees: 980,
      category: "IT Services",
      icon: <Settings className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      recording: true
    },
    {
      id: 6,
      title: "AI Analytics: Turning Data into Insights",
      description: "Advanced analytics techniques using artificial intelligence for business intelligence.",
      date: "2023-12-11",
      duration: "45 minutes",
      speaker: "Dr. James Wilson",
      speakerTitle: "Data Science Lead",
      speakerCompany: "Zion Tech Group",
      attendees: 1200,
      category: "AI Services",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      recording: true
    },
    {
      id: 7,
      title: "Cloud Migration: Best Practices and Pitfalls",
      description: "Everything you need to know about migrating to the cloud successfully.",
      date: "2023-12-04",
      duration: "50 minutes",
      speaker: "Alex Thompson",
      speakerTitle: "Cloud Solutions Architect",
      speakerCompany: "Zion Tech Group",
      attendees: 750,
      category: "IT Services",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      recording: true
    }
  ];

  const categories = [
    { name: "AI Services", count: 12, icon: <Brain className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "IT Services", count: 8, icon: <Shield className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
    { name: "Micro SAAS", count: 6, icon: <Zap className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "5G Solutions", count: 4, icon: <Globe className="w-5 h-5" />, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Webinars - Zion Tech Group | AI, IT, and Technology Webinars"
        description="Join our expert-led webinars on AI solutions, IT services, micro SAAS, and 5G technology. Learn from industry leaders and transform your business."
        keywords="webinars, AI webinars, IT webinars, technology webinars, business transformation, digital solutions"
        canonical="https://ziontechgroup.com/webinars"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Play className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Live & Recorded Webinars</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Expert Webinars
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Learn from industry experts about AI solutions, IT services, micro SAAS, and cutting-edge technology. 
            Join our live sessions or watch recorded webinars at your convenience.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore webinars organized by technology category
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-cyan-400 text-center text-sm font-medium">
                  {category.count} webinars
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our live sessions and interact with industry experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  webinar.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {webinar.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${webinar.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {webinar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {webinar.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.time} ({webinar.duration})</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.attendees} registered</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">{webinar.speaker}</p>
                    <p className="text-gray-400 text-xs">{webinar.speakerTitle}, {webinar.speakerCompany}</p>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group">
                    Register
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Past Webinars</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch recorded sessions from our previous webinars
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${webinar.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                    {webinar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {webinar.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.attendees} attendees</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">{webinar.speaker}</p>
                    <p className="text-gray-400 text-xs">{webinar.speakerTitle}</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center group">
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Updated with Our Webinars
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get notified about upcoming webinars and access to exclusive content. 
            Join our community of technology professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Subscribe to Updates
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Request Custom Webinar
              <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;