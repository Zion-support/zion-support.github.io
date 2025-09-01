import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Clock,
  Users,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Search,
  FileText,
  Video,
  BookOpen,
  Star,
  MapPin,
  Globe,
  Calendar,
  Send,
  Ticket,
  Headphones,
  MessageSquare,
  VideoCall,
  Mailbox
} from 'lucide-react';

export const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactMethod, setContactMethod] = useState('email');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="container-responsive py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources,
              documentation, and expert assistance
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Documentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
            <p className="text-gray-300 mb-4">Comprehensive guides, tutorials, and API documentation</p>
            <button className="text-cyan-400 hover:text-cyan-300 flex items-center">
              Browse Docs <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
            <p className="text-gray-300 mb-4">Connect with other users and share knowledge</p>
            <button className="text-cyan-400 hover:text-cyan-300 flex items-center">
              Join Community <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>

          {/* Live Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-white mb-3">Live Support</h3>
            <p className="text-gray-300 mb-4">Get real-time help from our support team</p>
            <button className="text-cyan-400 hover:text-cyan-300 flex items-center">
              Start Chat <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container-responsive py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-gray-300">Our support team is here to assist you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
            <p className="text-gray-300 mb-3">+1 302 464 0950</p>
            <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-300 mb-3">kleber@ziontechgroup.com</p>
            <p className="text-sm text-gray-400">Response within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
            <p className="text-gray-300 mb-3">364 E Main St STE 1008</p>
            <p className="text-sm text-gray-400">Middletown DE 19709</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
