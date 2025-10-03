import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  DollarSign, 
  Clock,
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Brain,
  MessageSquare,
  BarChart3,
  Settings
} from 'lucide-react';


export default function AICustomerServiceAutomation() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Natural language processing for human-like conversations',
    'Multi-channel support (email, chat, phone, social media)',
    'Sentiment analysis and intelligent escalation',
    'Knowledge base integration and learning',
    'Real-time analytics and performance dashboard',
    'Custom AI model training for your business',
    'API integrations with existing systems',
    'Multi-language support (50+ languages)'
  ];

  const benefits = [
    'Reduce support costs by 60%',
    'Improve response time by 80%',
    'Increase customer satisfaction by 40%',
    '24/7 availability without breaks',
    'Scalable solution that grows with your business',
    'Consistent service quality across all channels'
  ];

  const capabilities = [
    'Handles 10,000+ queries per day',
    '99.9% uptime guarantee',
    'Custom AI model training',
    'Real-time performance monitoring',
    'Advanced analytics and reporting',
    'Seamless human handoff when needed'
  ];

  const useCases = [
    'E-commerce customer support',
    'SaaS technical support',
    'Healthcare patient inquiries',
    'Financial services customer service',
    'Lead qualification and nurturing',
    'FAQ automation and self-service'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI Customer Service Automation
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transform customer support with intelligent automation. Advanced AI-powered platform with 24/7 support and human-like interactions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">No hidden fees, no surprises</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">$299</div>
                <div className="text-xl text-gray-600 mb-4">per month</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">300%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">14</div>
                  <div className="text-gray-600">Days Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">2-3</div>
                  <div className="text-gray-600">Weeks Setup</div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need for intelligent customer service</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Benefits</h2>
            <p className="text-xl text-gray-600">Real results from real customers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade performance and reliability</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{capability}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600">Industries and use cases we serve</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Position</h2>
            <p className="text-xl text-gray-600">Leading the AI customer service revolution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$4.2B</div>
              <div className="text-gray-600">Market Size by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-gray-600">Annual Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600">Queries Per Day</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI-powered customer service automation to deliver exceptional support experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400">{contactInfo.phone}</a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400">{contactInfo.email}</a>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}