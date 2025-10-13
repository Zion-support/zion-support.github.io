import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Headphones, 
  Mail, 
  Phone, 
  MessageCircle,
  Clock,
  CheckCircle,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  FileText,
  Search,
  HelpCircle,
  BookOpen,
  Video,
  Download,
  ExternalLink
} from 'lucide-react';

const SupportPage = () => {
  const supportChannels = [
    {
      title: "24/7 Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Instant",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: <Mail className="w-8 h-8" />,
      availability: "24/7",
      responseTime: "Within 4 hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Phone className="w-8 h-8" />,
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Call Support",
      description: "Screen sharing and remote assistance",
      icon: <Video className="w-8 h-8" />,
      availability: "By appointment",
      responseTime: "Scheduled",
      color: "from-orange-500 to-red-500"
    }
  ];

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Zap className="w-6 h-6" />,
      questions: [
        "How do I set up my account?",
        "What are the system requirements?",
        "How do I access my dashboard?",
        "Can I try the service before purchasing?"
      ]
    },
    {
      title: "Technical Issues",
      icon: <Shield className="w-6 h-6" />,
      questions: [
        "Why is my service not working?",
        "How do I troubleshoot connection issues?",
        "What if I forgot my password?",
        "How do I update my software?"
      ]
    },
    {
      title: "Billing & Account",
      icon: <FileText className="w-6 h-6" />,
      questions: [
        "How do I update my payment method?",
        "Can I change my subscription plan?",
        "How do I cancel my service?",
        "What is your refund policy?"
      ]
    },
    {
      title: "Features & Usage",
      icon: <Globe className="w-6 h-6" />,
      questions: [
        "How do I use the AI features?",
        "Can I customize the dashboard?",
        "How do I export my data?",
        "What integrations are available?"
      ]
    }
  ];

  const resources = [
    {
      title: "User Documentation",
      description: "Comprehensive guides and tutorials",
      icon: <BookOpen className="w-6 h-6" />,
      type: "Documentation",
      link: "/docs"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: <Video className="w-6 h-6" />,
      type: "Videos",
      link: "/tutorials"
    },
    {
      title: "API Documentation",
      description: "Developer resources and API reference",
      icon: <Code className="w-6 h-6" />,
      type: "Developer",
      link: "/api-docs"
    },
    {
      title: "System Status",
      description: "Real-time service status and updates",
      icon: <Shield className="w-6 h-6" />,
      type: "Status",
      link: "/status"
    },
    {
      title: "Download Center",
      description: "Software downloads and updates",
      icon: <Download className="w-6 h-6" />,
      type: "Downloads",
      link: "/downloads"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and experts",
      icon: <Users className="w-6 h-6" />,
      type: "Community",
      link: "/community"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "< 4 hrs", label: "Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> },
    { number: "95%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Support Center - Get Help & Technical Support | Zion Tech Group</title>
        <meta
          name="description"
          content="Get 24/7 technical support for Zion Tech Group services. Access documentation, tutorials, and expert help for all your AI and IT solutions."
        />
        <meta
          name="keywords"
          content="technical support, customer service, help desk, documentation, tutorials, Zion Tech Group support"
        />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Headphones className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">24/7 Expert Support</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Support Center
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get the help you need, when you need it. Our expert support team is available 24/7 
              to assist you with any questions or technical issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#faq"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Browse FAQ
                <HelpCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Get Support
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${channel.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {channel.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {channel.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {channel.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                        <span>{channel.availability}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                        <span>Response: {channel.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.questions.map((question, qIndex) => (
                      <div key={qIndex} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                        <HelpCircle className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="text-sm">{question}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Helpful Resources
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access documentation, tutorials, and other helpful resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {resource.icon}
                      </div>
                      <div className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {resource.type}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Access Resource
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is ready to assist you with any questions or technical issues. 
                Contact us through any of our support channels.
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
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Support Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Explore Services
                  <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;