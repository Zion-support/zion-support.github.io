import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, Star, Users, Zap } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: "General",
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions, IT services, micro SAAS products, and 5G solutions. Our services include AI analytics, automation, content generation, customer service, cloud infrastructure, cybersecurity, and more."
    },
    {
      category: "General",
      question: "How do I get started with your services?",
      answer: "You can get started by scheduling a free consultation with our team. We'll assess your needs and recommend the best solutions for your business. Contact us through our contact form or call us directly."
    },
    {
      category: "Technical",
      question: "Do you provide technical support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via email, phone, and live chat to help you with any technical issues or questions."
    },
    {
      category: "Technical",
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including AI/ML frameworks (TensorFlow, PyTorch), cloud platforms (AWS, Azure, GCP), programming languages (Python, JavaScript, TypeScript), and modern development tools."
    },
    {
      category: "Billing",
      question: "What are your pricing options?",
      answer: "We offer flexible pricing options including monthly subscriptions, annual plans, and custom enterprise solutions. Pricing varies based on the services and features you need. Contact us for a personalized quote."
    },
    {
      category: "Billing",
      question: "Do you offer free trials?",
      answer: "Yes, we offer free trials for most of our services. This allows you to test our solutions before making a commitment. Contact us to learn more about our trial options."
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Immediate",
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Phone className="w-8 h-8" />,
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      action: "Call Now"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: <Mail className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Within 4 hours",
      action: "Send Email"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      icon: <CheckCircle className="w-6 h-6" />,
      link: "/docs"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all our services",
      icon: <Zap className="w-6 h-6" />,
      link: "/tutorials"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and get peer support",
      icon: <Users className="w-6 h-6" />,
      link: "/community"
    },
    {
      title: "Status Page",
      description: "Check the current status of all our services",
      icon: <Star className="w-6 h-6" />,
      link: "/status"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Support - Help Center & Customer Support | Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to common questions, contact our support team, and access helpful resources."
        keywords="support, help center, customer support, technical support, FAQ, documentation, tutorials"
        canonical="https://ziontechgroup.com/support"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Support
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            We're here to help you succeed. Find answers to common questions, get technical support, 
            and access helpful resources to make the most of our services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">
                    {channel.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {channel.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {channel.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {channel.availability}
                  </div>
                  <div className="text-sm text-cyan-400 font-medium">
                    Response: {channel.responseTime}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access documentation, tutorials, and other helpful resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">
                    {resource.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;