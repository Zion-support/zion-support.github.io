import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Download, 
  ArrowRight, 
  Star,
  Award,
  Globe,
  BookOpen,
  Video,
  Headphones
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebinarsPage = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: A Complete Guide",
      description: "Learn how to implement AI solutions that drive real business value and competitive advantage.",
      date: "2024-01-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Johnson",
      speakerTitle: "Chief AI Officer",
      attendees: 1250,
      category: "AI Solutions",
      level: "Intermediate",
      image: "/images/webinar-ai-transformation.jpg",
      featured: true
    },
    {
      id: 2,
      title: "5G Implementation Strategies for Enterprise",
      description: "Discover best practices for deploying 5G networks in enterprise environments.",
      date: "2024-01-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen",
      speakerTitle: "5G Solutions Architect",
      attendees: 890,
      category: "5G Solutions",
      level: "Advanced",
      image: "/images/webinar-5g-enterprise.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Micro SAAS: Building Scalable Software Solutions",
      description: "Learn how to create and scale micro SAAS applications for maximum impact.",
      date: "2024-01-29",
      time: "1:00 PM EST",
      duration: "50 minutes",
      speaker: "Emily Rodriguez",
      speakerTitle: "Product Manager",
      attendees: 1100,
      category: "Micro SAAS",
      level: "Beginner",
      image: "/images/webinar-micro-saas.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity in the AI Era: New Challenges and Solutions",
      description: "Explore emerging cybersecurity threats and AI-powered defense strategies.",
      date: "2024-02-05",
      time: "2:30 PM EST",
      duration: "55 minutes",
      speaker: "David Kim",
      speakerTitle: "Security Expert",
      attendees: 750,
      category: "Cybersecurity",
      level: "Advanced",
      image: "/images/webinar-cybersecurity.jpg",
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 5,
      title: "Digital Transformation: From Strategy to Implementation",
      description: "A comprehensive guide to digital transformation success.",
      date: "2023-12-18",
      duration: "60 minutes",
      speaker: "Lisa Wang",
      speakerTitle: "Digital Transformation Lead",
      attendees: 2100,
      category: "Digital Transformation",
      level: "Intermediate",
      image: "/images/webinar-digital-transformation.jpg",
      recording: true
    },
    {
      id: 6,
      title: "Cloud Migration Best Practices",
      description: "Learn proven strategies for successful cloud migration projects.",
      date: "2023-12-11",
      duration: "45 minutes",
      speaker: "James Wilson",
      speakerTitle: "Cloud Solutions Architect",
      attendees: 1800,
      category: "Cloud Solutions",
      level: "Intermediate",
      image: "/images/webinar-cloud-migration.jpg",
      recording: true
    }
  ];

  const categories = [
    "All Webinars",
    "AI Solutions",
    "5G Solutions", 
    "Micro SAAS",
    "Cybersecurity",
    "Digital Transformation",
    "Cloud Solutions"
  ];

  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Webinars - Zion Tech Group | AI, 5G, and Technology Insights"
        description="Join our expert-led webinars on AI solutions, 5G technology, micro SAAS, and digital transformation. Learn from industry leaders and stay ahead of technology trends."
        keywords="webinars, AI webinars, 5G webinars, technology webinars, digital transformation, micro SAAS, cybersecurity webinars"
        canonical="https://ziontechgroup.com/webinars"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Video className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert-Led Learning</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Technology Webinars
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Learn from industry experts about the latest trends in AI, 5G, micro SAAS, and digital transformation. 
            Join our interactive webinars and stay ahead of the technology curve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Request Custom Webinar
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {levels.map((level) => (
              <button
                key={level}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300"
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300">
              Join our live sessions and interact with industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  webinar.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {webinar.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <Video className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {webinar.description}
                  </p>
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
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.speaker}, {webinar.speakerTitle}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {webinar.category}
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {webinar.level}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group">
                    Register
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300">
              Watch recordings of our previous expert sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center relative">
                    <Play className="w-12 h-12 text-purple-400" />
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {webinar.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.attendees} attended</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{webinar.speaker}, {webinar.speakerTitle}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {webinar.category}
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {webinar.level}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group">
                    Watch Recording
                    <Play className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Webinars
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get notified about upcoming webinars and access to exclusive content. 
            Join thousands of professionals who trust our expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;