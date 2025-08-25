import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  Code,
  Users,
  TrendingUp,
  Award,
  Globe,
  Rocket,
  Sparkles
} from 'lucide-react';

const CTASection: React.FC = () => {
  const [selectedContactMethod, setSelectedContactMethod] = useState<string>('consultation');

  const contactMethods = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      description: 'Schedule a 30-minute consultation to discuss your needs',
      icon: Calendar,
      action: 'Book Consultation',
      path: '/contact',
      gradient: 'from-blue-600 to-purple-600',
      benefits: ['No obligation', 'Expert advice', 'Custom solutions']
    },
    {
      id: 'phone',
      title: 'Call Us Directly',
      description: 'Speak with our technical experts immediately',
      icon: Phone,
      action: 'Call Now',
      path: 'tel:+1-555-0123',
      gradient: 'from-green-600 to-emerald-600',
      benefits: ['24/7 support', 'Instant response', 'Technical expertise']
    },
    {
      id: 'email',
      title: 'Send Us an Email',
      description: 'Get a detailed response within 2 hours',
      icon: Mail,
      action: 'Send Email',
      path: 'mailto:hello@ziontechgroup.com',
      gradient: 'from-orange-600 to-red-600',
      benefits: ['Detailed response', 'Documentation', 'Follow-up']
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Chat with our AI assistant or human experts',
      icon: MessageCircle,
      action: 'Start Chat',
      path: '/chat',
      gradient: 'from-purple-600 to-pink-600',
      benefits: ['Instant help', 'AI assistance', 'Human support']
    }
  ];

  const selectedMethod = contactMethods.find(m => m.id === selectedContactMethod) || contactMethods[0];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence for your business needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC2 compliance and 24/7 monitoring'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with global CDN and advanced caching'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Cloud-native solutions that grow with your business'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Get Started Today
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Choose Your Preferred Contact Method</h3>
            
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedContactMethod === method.id ? 'transform scale-105' : ''
                }`}
                onClick={() => setSelectedContactMethod(method.id)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  selectedContactMethod === method.id
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/70'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl p-3 bg-gradient-to-br ${method.gradient} flex-shrink-0`}>
                      <method.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        selectedContactMethod === method.id ? 'text-blue-300' : 'text-white'
                      }`}>
                        {method.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {method.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {method.benefits.map((benefit, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-gray-500 transition-all duration-300 ${
                      selectedContactMethod === method.id ? 'text-blue-400 rotate-90' : 'group-hover:text-gray-400 group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              </div>
            ))}

            {/* Selected Method CTA */}
            <div className="mt-8">
              <Link
                to={selectedMethod.path}
                className={`inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r ${selectedMethod.gradient} hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg`}
              >
                {selectedMethod.action}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side - Features & Trust Signals */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-2 flex-shrink-0">
                      <feature.icon className="w-full h-full text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Trusted by Industry Leaders</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">95% Success Rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">SOC2 Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300 text-sm">25+ Countries</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-white mb-1">10+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Wait to Get Started
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Every day you wait is another day your competitors get ahead. Start your transformation journey today and see results in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                Start Your Project
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;