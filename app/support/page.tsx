import { ArrowRight, Phone, Mail, MessageCircle, Clock, CheckCircle, Users, Shield, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Support() {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const supportCategories = [
    { id: "general", name: "General Support", icon: <MessageCircle className="w-5 h-5" /> },
    { id: "technical", name: "Technical Issues", icon: <Zap className="w-5 h-5" /> },
    { id: "billing", name: "Billing & Payments", icon: <Shield className="w-5 h-5" /> },
    { id: "account", name: "Account Management", icon: <Users className="w-5 h-5" /> }
  ];

  const faqs = [
    {
      category: "general",
      question: "How do I get started with your services?",
      answer: "Getting started is easy! Contact our team through the consultation form or call us directly. We'll schedule a free consultation to understand your needs and recommend the best solutions."
    },
    {
      category: "technical",
      question: "What if I experience technical issues?",
      answer: "Our technical support team is available 24/7. You can reach us via phone, email, or through our support portal. We typically respond within 2 hours for critical issues."
    },
    {
      category: "billing",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely through our encrypted payment system."
    },
    {
      category: "account",
      question: "How do I update my account information?",
      answer: "You can update your account information through your dashboard or by contacting our support team. We'll guide you through the process and ensure all changes are properly implemented."
    }
  ];

  const supportMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+1 302 464 0950",
      hours: "24/7 Available",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@ziontechgroup.com",
      hours: "Response within 2 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      hours: "Mon-Fri 9AM-6PM EST",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const filteredFaqs = faqs.filter(faq => selectedCategory === "general" || faq.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help Center & Customer Support</title>
        <meta name="description" content="Get comprehensive support for Zion Tech Group services. 24/7 technical support, billing assistance, and account management help." />
        <meta name="keywords" content="support, help center, customer service, technical support, billing support, account management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              We're here to help! Get comprehensive support for all our services with 24/7 assistance 
              from our expert team.
            </p>
          </div>
        </section>

        {/* Support Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Get Support
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support method that works best for you. Our team is ready to help.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-center space-y-2">
                    <p className="text-cyan-400 font-semibold">{method.contact}</p>
                    <p className="text-gray-400 text-sm">{method.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and support.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you with any questions or issues.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
