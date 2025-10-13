import React from 'react';
import { Calendar, Clock, User, ExternalLink } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const WebinarsPage = () => {
  const webinars = [
    {
      title: 'AI-Powered Business Transformation: A Complete Guide',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      speaker: 'Kleber Santos',
      description: 'Learn how to leverage AI to transform your business operations and drive growth.',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      title: 'Building Scalable Cloud Infrastructure with AI',
      date: '2024-02-22',
      time: '3:00 PM EST',
      duration: '45 minutes',
      speaker: 'Sarah Johnson',
      description: 'Discover best practices for building and managing cloud infrastructure with AI integration.',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Cybersecurity in the Age of AI',
      date: '2024-03-01',
      time: '1:00 PM EST',
      duration: '50 minutes',
      speaker: 'Michael Chen',
      description: 'Understanding AI-driven cybersecurity threats and how to protect your organization.',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Webinars - Zion Tech Group | AI and Technology Insights"
        description="Join our expert-led webinars on AI, cloud computing, cybersecurity, and digital transformation. Learn from industry leaders and get practical insights."
        keywords="webinars, AI webinars, technology webinars, cloud computing, cybersecurity, digital transformation"
        canonical="https://ziontechgroup.com/webinars"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Expert Webinars
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn from industry experts through our comprehensive webinars on AI, technology, and digital transformation.
          </p>
        </div>
      </section>

      {/* Featured Webinar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {webinars.filter(webinar => webinar.featured).map((webinar, index) => (
            <div key={index} className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      Featured
                    </span>
                    <span className="text-cyan-400 font-medium">Upcoming Webinar</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{webinar.title}</h2>
                  <p className="text-xl text-gray-300 mb-6">{webinar.description}</p>
                  <div className="flex items-center text-gray-400 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-6">{new Date(webinar.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="mr-6">{webinar.time}</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{webinar.speaker}</span>
                  </div>
                  <FuturisticButton
                    variant="primary"
                    size="lg"
                    to="/contact"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Featured Webinar</h4>
                    <p className="text-gray-300">Click "Register Now" to secure your spot in this exclusive session.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse through all our upcoming and past webinars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{webinar.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(webinar.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{webinar.time} ({webinar.duration})</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{webinar.speaker}</span>
                  </div>
                </div>
                
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  to="/contact"
                  className="w-full"
                >
                  Register
                  <ExternalLink className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to get notified about upcoming webinars and exclusive content.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="/contact"
          >
            Subscribe to Updates
          </FuturisticButton>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;