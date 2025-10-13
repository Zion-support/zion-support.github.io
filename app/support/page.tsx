import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, HelpCircle, MessageCircle, Phone, Mail, Clock, CheckCircle, BookOpen, FileText, Download, ExternalLink, Star, Users, Award } from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'ai-services', name: 'AI Services', count: 15 },
    { id: 'billing', name: 'Billing & Plans', count: 8 },
    { id: 'technical', name: 'Technical Support', count: 10 }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact us through our consultation form or call us directly. We'll schedule a free consultation to understand your needs and recommend the best solutions for your business.",
      category: 'getting-started',
      popular: true
    },
    {
      id: 2,
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including business intelligence, customer support automation, content generation, cybersecurity, data analytics, and custom AI solutions tailored to your specific business needs.",
      category: 'ai-services',
      popular: true
    },
    {
      id: 3,
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary depending on the complexity of your project. Simple solutions can be deployed in 2-4 weeks, while complex enterprise implementations may take 3-6 months. We'll provide a detailed timeline during your consultation.",
      category: 'getting-started',
      popular: false
    },
    {
      id: 4,
      question: "Do you offer 24/7 support?",
      answer: "Yes! We provide 24/7 support for all our clients. Our support team is available around the clock to help with any technical issues or questions you may have.",
      category: 'technical',
      popular: true
    },
    {
      id: 5,
      question: "What are your pricing options?",
      answer: "We offer flexible pricing options including monthly subscriptions, annual plans, and custom enterprise solutions. Pricing depends on the services you need and the scale of your implementation. Contact us for a personalized quote.",
      category: 'billing',
      popular: false
    },
    {
      id: 6,
      question: "Can I integrate your AI solutions with my existing systems?",
      answer: "Absolutely! Our AI solutions are designed to integrate seamlessly with your existing systems and workflows. We support most major platforms and can create custom integrations as needed.",
      category: 'technical',
      popular: true
    }
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help through our live chat support",
      availability: "24/7",
      responseTime: "Immediate",
      link: "#chat"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      availability: "24/7",
      responseTime: "Immediate",
      link: "tel:+13024640950"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us detailed questions via email",
      availability: "24/7",
      responseTime: "Within 2 hours",
      link: "mailto:support@ziontechgroup.com"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Browse our comprehensive documentation",
      availability: "24/7",
      responseTime: "Immediate",
      link: "/docs"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete guide to setting up your Zion Tech Group services",
      type: "PDF Guide",
      size: "2.5 MB",
      icon: <FileText className="w-5 h-5" />,
      link: "/docs/getting-started.pdf"
    },
    {
      title: "API Documentation",
      description: "Comprehensive API reference for developers",
      type: "Online Docs",
      size: "Web",
      icon: <BookOpen className="w-5 h-5" />,
      link: "/docs/api"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      type: "Video Series",
      size: "45 min",
      icon: <ExternalLink className="w-5 h-5" />,
      link: "/tutorials"
    },
    {
      title: "System Status",
      description: "Real-time status of all our services",
      type: "Status Page",
      size: "Live",
      icon: <CheckCircle className="w-5 h-5" />,
      link: "/status"
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support Center - Help & Documentation | Zion Tech Group</title>
        <meta
          name="description"
          content="Get help and support for Zion Tech Group services. Access documentation, FAQs, live chat, and contact our support team for assistance."
        />
        <meta
          name="keywords"
          content="support, help center, documentation, FAQ, customer service, technical support, AI support"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Support
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Center
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the help you need with our comprehensive support resources, documentation, and expert assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  How Can We Help?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're here to help 24/7.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {channel.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {channel.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-cyan-400">
                      <span>{channel.availability}</span>
                      <span>{channel.responseTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and solutions.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {faq.question}
                        </h3>
                        {faq.popular && (
                          <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full border border-yellow-400/30">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                    <HelpCircle className="w-5 h-5 text-cyan-400 ml-4 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Helpful Resources
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our comprehensive documentation, guides, and resources to get the most out of our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-cyan-400">
                      <span>{resource.type}</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Support
                <MessageCircle className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Call Us Now
                <Phone className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}