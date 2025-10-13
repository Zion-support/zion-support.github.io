import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle,
  BookOpen,
  FileText,
  Users,
  Shield,
  Zap,
  Brain,
  BarChart3,
  Cloud,
  Code,
  Filter
} from "lucide-react";

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "ai", name: "AI Services", icon: <Brain className="w-4 h-4" /> },
    { id: "cybersecurity", name: "Cybersecurity", icon: <Shield className="w-4 h-4" /> },
    { id: "cloud", name: "Cloud Services", icon: <Cloud className="w-4 h-4" /> },
    { id: "analytics", name: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "development", name: "Development", icon: <Code className="w-4 h-4" /> },
    { id: "5g", name: "5G Solutions", icon: <Zap className="w-4 h-4" /> },
    { id: "billing", name: "Billing", icon: <FileText className="w-4 h-4" /> }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with AI analytics?",
      answer: "Getting started with our AI analytics platform is easy. First, sign up for an account, then follow our onboarding wizard to connect your data sources. Our team will guide you through the setup process and provide training materials.",
      category: "ai",
      helpful: 45
    },
    {
      id: 2,
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2 and GDPR. All data is encrypted both in transit and at rest.",
      category: "cybersecurity",
      helpful: 38
    },
    {
      id: 3,
      question: "How can I migrate my data to the cloud?",
      answer: "Our cloud migration service includes assessment, planning, data transfer, and validation. We support migration from on-premises systems to AWS, Azure, and Google Cloud. Contact our migration team for a free consultation.",
      category: "cloud",
      helpful: 42
    },
    {
      id: 4,
      question: "What is included in your 24/7 support?",
      answer: "Our 24/7 support includes technical assistance, system monitoring, incident response, and priority support for critical issues. We have dedicated support engineers available around the clock to help resolve any problems.",
      category: "all",
      helpful: 51
    },
    {
      id: 5,
      question: "How do I integrate your APIs?",
      answer: "We provide comprehensive API documentation, SDKs for popular programming languages, and code examples. Our developer portal includes interactive API testing tools and detailed integration guides.",
      category: "development",
      helpful: 29
    },
    {
      id: 6,
      question: "What are your pricing options?",
      answer: "We offer flexible pricing plans including pay-as-you-go, monthly subscriptions, and enterprise contracts. Pricing depends on usage, features, and support level. Contact our sales team for a customized quote.",
      category: "billing",
      helpful: 33
    },
    {
      id: 7,
      question: "How do I set up 5G network monitoring?",
      answer: "Our 5G monitoring solution provides real-time network performance tracking, automated alerts, and detailed analytics. Setup includes network discovery, sensor deployment, and dashboard configuration.",
      category: "5g",
      helpful: 27
    },
    {
      id: 8,
      question: "Can I customize the analytics dashboards?",
      answer: "Yes, our analytics platform offers extensive customization options including custom widgets, personalized layouts, automated reports, and white-label branding. You can create dashboards tailored to your specific needs.",
      category: "analytics",
      helpful: 36
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Phone className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Immediate",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: <Mail className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: <BookOpen className="w-8 h-8" />,
      availability: "Always",
      responseTime: "Instant",
      color: "from-orange-500 to-red-500"
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Documentation</title>
        <meta
          name="description"
          content="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access documentation."
        />
        <meta
          name="keywords"
          content="support, help, documentation, FAQ, customer service, technical support, AI support"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">24/7 Support Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Support Center
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get the help you need with our comprehensive support resources. Find answers to common questions, 
              access documentation, or contact our expert support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${channel.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {channel.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="text-cyan-400 font-medium">
                      {channel.responseTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                      <div className="flex items-center ml-4">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-sm text-gray-400">{faq.helpful} found helpful</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed. Contact us for personalized assistance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Hours</h3>
                <p className="text-cyan-400">24/7 Support</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/tutorials"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Tutorials
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}