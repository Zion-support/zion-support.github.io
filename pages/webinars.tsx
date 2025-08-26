import React from 'react';
import Head from 'next/head';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Download, 
  ExternalLink,
  Brain,
  Shield,
  Cpu,
  Zap,
  Cloud,
  Database,
  Target,
  TrendingUp,
  Award,
  Star,
  BookOpen,
  Video,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Cybersecurity: The Future of Digital Defense",
      date: "December 15, 2024",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Chen",
      role: "Chief Security Officer",
      description: "Explore how artificial intelligence is revolutionizing cybersecurity and protecting businesses from evolving threats.",
      topics: ["AI threat detection", "Automated response systems", "Predictive security analytics"],
      image: "/images/webinars/ai-cybersecurity.jpg",
      category: "Cybersecurity",
      registrationUrl: "#",
      isLive: true
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking Down the Hype vs. Reality",
      date: "December 22, 2024",
      time: "1:00 PM EST",
      duration: "90 minutes",
      speaker: "Dr. Michael Rodriguez",
      role: "Quantum Research Lead",
      description: "Separate fact from fiction in quantum computing and understand its real-world applications for businesses.",
      topics: ["Quantum supremacy", "Business applications", "Implementation roadmap"],
      image: "/images/webinars/quantum-computing.jpg",
      category: "Quantum Technology",
      registrationUrl: "#",
      isLive: true
    },
    {
      id: 3,
      title: "Digital Transformation: From Strategy to Execution",
      date: "January 8, 2025",
      time: "3:00 PM EST",
      duration: "75 minutes",
      speaker: "Lisa Thompson",
      role: "Digital Strategy Director",
      description: "Learn practical steps to transform your business digitally and stay ahead of the competition.",
      topics: ["Strategy development", "Change management", "ROI measurement"],
      image: "/images/webinars/digital-transformation.jpg",
      category: "Digital Transformation",
      registrationUrl: "#",
      isLive: true
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Cloud Migration Best Practices",
      date: "November 30, 2024",
      speaker: "Alex Johnson",
      role: "Cloud Architect",
      description: "Comprehensive guide to migrating your infrastructure to the cloud safely and efficiently.",
      recordingUrl: "#",
      slidesUrl: "#",
      transcriptUrl: "#",
      category: "Cloud & DevOps",
      attendees: 847,
      rating: 4.8
    },
    {
      id: 5,
      title: "Building Resilient IT Infrastructure",
      date: "November 15, 2024",
      speaker: "David Kim",
      role: "Infrastructure Engineer",
      description: "Design and implement IT infrastructure that can withstand any challenge.",
      recordingUrl: "#",
      slidesUrl: "#",
      transcriptUrl: "#",
      category: "IT Infrastructure",
      attendees: 623,
      rating: 4.7
    },
    {
      id: 6,
      title: "Green IT: Sustainable Technology Solutions",
      date: "October 28, 2024",
      speaker: "Emma Wilson",
      role: "Sustainability Specialist",
      description: "Reduce your carbon footprint while improving IT efficiency and performance.",
      recordingUrl: "#",
      slidesUrl: "#",
      transcriptUrl: "#",
      category: "Green IT",
      attendees: 456,
      rating: 4.9
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Brain, count: 12 },
    { name: "Cybersecurity", icon: Shield, count: 8 },
    { name: "Quantum Technology", icon: Cpu, count: 6 },
    { name: "Cloud & DevOps", icon: Cloud, count: 15 },
    { name: "Digital Transformation", icon: Zap, count: 10 },
    { name: "IT Infrastructure", icon: Database, count: 9 }
  ];

  return (
    <>
      <Head>
        <title>Webinars & Events | Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars on AI, cybersecurity, quantum computing, and digital transformation. Stay ahead with cutting-edge insights and practical knowledge." />
        <meta name="keywords" content="webinars, events, AI, cybersecurity, quantum computing, digital transformation, technology insights" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Webinars & Events | Zion Tech Group" />
        <meta property="og:description" content="Join our expert-led webinars on AI, cybersecurity, quantum computing, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/webinars" />
        <link rel="canonical" href="https://ziontechgroup.com/webinars" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert-Led <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Webinars</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry experts for in-depth discussions on cutting-edge technology topics. 
              From AI and cybersecurity to quantum computing and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>View Upcoming Events</span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Recordings</span>
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <div key={category.name} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-200">
                    <category.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-medium text-white mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-400">{category.count} webinars</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Upcoming Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full">
                        {webinar.category}
                      </span>
                      {webinar.isLive && (
                        <span className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-medium rounded-full flex items-center space-x-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span>Live</span>
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{webinar.speaker}, {webinar.role}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {webinar.topics.map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                      Register Now
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Past Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-xs font-medium rounded-full">
                        {webinar.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white">{webinar.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{webinar.speaker}, {webinar.role}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{webinar.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600/30 transition-all duration-200 flex items-center justify-center space-x-1">
                        <Play className="h-4 w-4" />
                        <span>Watch</span>
                      </button>
                      <button className="flex-1 px-3 py-2 bg-gray-600/20 text-gray-400 text-sm font-medium rounded-lg hover:bg-gray-600/30 transition-all duration-200 flex items-center justify-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>Slides</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Never Miss a Webinar</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and get notified about upcoming webinars, exclusive content, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who are already leveraging our insights to stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}