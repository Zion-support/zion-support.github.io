'use client';

import React from 'react';
import { 
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Search,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BookOpen,
  Zap
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      color: "from-cyan-500 to-blue-600",
      availability: "24/7",
      responseTime: "Instant"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      color: "from-green-500 to-emerald-600",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: Mail,
      color: "from-purple-500 to-pink-600",
      availability: "24/7",
      responseTime: "Within 4 hours"
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive knowledge base",
      icon: BookOpen,
      color: "from-orange-500 to-red-600",
      availability: "24/7",
      responseTime: "Instant"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with your AI services?",
      answer: "Getting started is easy! Simply create an account, choose your service plan, and follow our quick start guide. Our team is available 24/7 to help you get up and running."
    },
    {
      question: "What is your typical response time for support requests?",
      answer: "We pride ourselves on fast response times. Live chat is instant, phone support is immediate during business hours, and email support typically responds within 4 hours."
    },
    {
      question: "Do you offer custom AI solutions for specific business needs?",
      answer: "Yes! We specialize in creating custom AI solutions tailored to your specific business requirements. Contact our sales team to discuss your needs and get a personalized quote."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2 and GDPR."
    },
    {
      question: "Can I integrate your APIs with my existing systems?",
      answer: "Absolutely! Our APIs are designed for easy integration with existing systems. We provide comprehensive documentation, SDKs, and support to help you integrate seamlessly."
    },
    {
      question: "What happens if I need to scale my usage?",
      answer: "Our services are designed to scale with your business. You can easily upgrade your plan or add additional services as your needs grow. Our team will help you plan for scaling."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We're here to help you succeed. Get the support you need, when you need it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search support articles..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support option that works best for you. We're available 24/7 to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{option.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{option.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-cyan-400">{option.availability}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-green-400">{option.responseTime}</span>
                  </div>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${option.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center`}>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services and support.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reach out to us through any of these channels for immediate assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-4">Speak directly with our technical experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                +1 (302) 464-0950
              </a>
              <p className="text-sm text-gray-400 mt-2">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-4">Send us detailed questions and get comprehensive answers</p>
              <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                support@ziontechgroup.com
              </a>
              <p className="text-sm text-gray-400 mt-2">24/7 Support</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-4">Get instant help from our support team</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Start Chat
              </button>
              <p className="text-sm text-gray-400 mt-2">Available Now</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our support team is standing by to help you succeed. Don't hesitate to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;