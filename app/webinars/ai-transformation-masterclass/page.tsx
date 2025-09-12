import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Star, Play, ArrowRight, CheckCircle, Gift } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation Masterclass: Free Live Training | Zion Tech Group',
  description: 'Join our free AI transformation masterclass and learn proven strategies for enterprise AI implementation success from industry experts.',
  keywords: 'AI masterclass, AI training, enterprise AI, transformation, free webinar, live training',
  openGraph: {
    title: 'AI Transformation Masterclass: Free Live Training',
    description: 'Join our free AI transformation masterclass and learn proven strategies for enterprise AI implementation success from industry experts.',
    type: 'event',
    startTime: '2025-01-25T14:00:00.000Z',
    endTime: '2025-01-25T16:00:00.000Z',
  },
};

const MasterclassPage = () => {
  const agenda = [
    {
      time: '2:00 PM',
      title: 'Welcome & AI Landscape Overview',
      description: 'Current state of AI adoption and future trends',
      duration: '15 min'
    },
    {
      time: '2:15 PM',
      title: 'AI Strategy Framework',
      description: 'Proven methodology for AI transformation planning',
      duration: '30 min'
    },
    {
      time: '2:45 PM',
      title: 'Technology Selection & Implementation',
      description: 'Choosing the right AI tools and technologies',
      duration: '25 min'
    },
    {
      time: '3:10 PM',
      title: 'Change Management & Adoption',
      description: 'Ensuring successful AI adoption across organizations',
      duration: '20 min'
    },
    {
      time: '3:30 PM',
      title: 'ROI Measurement & Success Metrics',
      description: 'Measuring and optimizing AI transformation impact',
      duration: '20 min'
    },
    {
      time: '3:50 PM',
      title: 'Q&A Session',
      description: 'Live Q&A with AI transformation experts',
      duration: '10 min'
    }
  ];

  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Officer',
      company: 'Zion Tech Group',
      image: '👩‍💼',
      expertise: 'Enterprise AI Strategy & Implementation',
      bio: 'Led AI transformations for 50+ Fortune 500 companies'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Head of AI Solutions',
      company: 'Zion Tech Group',
      image: '👨‍💻',
      expertise: 'AI Technology & Architecture',
      bio: '15+ years in AI implementation and technology leadership'
    },
    {
      name: 'Dr. Lisa Wang',
      title: 'Senior AI Consultant',
      company: 'Zion Tech Group',
      image: '👩‍🔬',
      expertise: 'AI Change Management & Adoption',
      bio: 'Expert in organizational transformation and AI adoption'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Frameworks',
      description: 'Get access to battle-tested AI transformation methodologies',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Learn from AI transformation experts with real-world experience',
      color: 'text-blue-600'
    },
    {
      icon: Gift,
      title: 'Free Resources',
      description: 'Exclusive access to templates, checklists, and implementation guides',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      title: 'Live Q&A',
      description: 'Get your specific questions answered by industry experts',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                🎓 Free Masterclass
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Transformation Masterclass
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl leading-relaxed mb-8">
              Join industry experts for a comprehensive 2-hour masterclass covering proven strategies, 
              frameworks, and real-world case studies for successful AI transformation.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center text-blue-200">
                <Calendar className="w-5 h-5 mr-2" />
                <span>January 25, 2025</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Clock className="w-5 h-5 mr-2" />
                <span>2:00 PM - 4:00 PM EST</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Users className="w-5 h-5 mr-2" />
                <span>2,500+ Registered</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Star className="w-5 h-5 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Register for Free
              </button>
              
              <Link
                href="/resources/ai-transformation-playbook-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Download Free Playbook
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insights from industry experts with real-world AI transformation experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Agenda Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Masterclass Agenda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 2-hour training covering all aspects of AI transformation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start mb-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-sm font-bold text-blue-600">{item.time}</div>
                  <div className="text-xs text-gray-500">{item.duration}</div>
                </div>
                
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Instructors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from AI transformation experts with decades of combined experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-200"
              >
                <div className="text-6xl mb-4">{speaker.image}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{speaker.title}</div>
                <div className="text-gray-600 text-sm mb-4">{speaker.company}</div>
                
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="text-blue-800 font-medium text-sm">{speaker.expertise}</div>
                </div>
                
                <p className="text-gray-600 text-sm">{speaker.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your AI Strategy?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 2,500+ executives who have already registered for this exclusive masterclass. 
              Limited spots available!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                Register for Free Masterclass
              </button>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Personal Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-4">What's Included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>2-hour live masterclass</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Free AI transformation playbook</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Implementation templates & checklists</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Live Q&A with experts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Recording access for 30 days</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Exclusive follow-up resources</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MasterclassPage;