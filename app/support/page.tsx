<<<<<<< HEAD
import React, { useState } from 'react",";";";
      const SupportPage: React.FC  =  () => {"}"
        "
  const [formData, setFormData] = useState({",)}"
        "
    name: '',","
        "
    email: '',","
        "
    subject: '',","
        "
    priority: '',","
        "
    category: '',",";";";
";";";
    description: '";
  }),";
      const [isSubmitting, setIsSubmitting]  =  useState(false),;";";
      const [isSubmitted, setIsSubmitted] = useState(false);";";";
,"
      const supportChannels  =  [","
        "
    {""}"
      icon: <MessageSquare className="w-8 h-8" />,","
        "
      title: 'Live Chat',","
        "
      description: 'Get instant help from our support team',","
        "
      availability: '24/7',","
        "
      responseTime: 'Immediate',","
        "
      action: 'Start Chat',","
        ";";";";
      color: 'from-blue-500 to-cyan-500';"
    },","
        "
    {"}"
        "
      icon: <Phone className="w-8 h-8" />,","
        "
      title: 'Phone Support',","
        "
      description: 'Speak directly with our technical experts',","
        "
      availability: 'Mon-Fri 9AM-6PM EST',","
        "
      responseTime: 'Immediate',","
        "
      action: 'Call Now',","
        "
      color: 'from-green-500 to-emerald-500';"
    },","
        "
    {"}"
        "
      icon: <Mail className="w-8 h-8" />,","
        "
      title: 'Email Support',","
        "
      description: 'Send detailed messages and get comprehensive responses',","
        "
      availability: '24/7',","
        "
      responseTime: '< 2 hours',","
        "
      action: 'Send Email',","
        "
      color: 'from-purple-500 to-pink-500';"
    },","
        "
    {"}"
        "
      icon: BookOpen,","
        "
      title: 'Documentation',","
        "
      description: 'Browse our comprehensive guides',","
        "
      action: 'View Docs',","
        "
      color: 'from-orange-500 to-red-500"
    },";
    {};";";
  ];";";";
,"
      const priorityLevels  =  [","
        "
    { value: 'low', label: 'Low', description: 'General questions, feature requests' },","
        "
    { value: 'medium', label: 'Medium', description: 'Minor issues, configuration help' },","
        "
    { value: 'high', label: 'High', description: 'Service degradation, performance issues' },","
        ";";";";
    { value: 'critical', label: 'Critical', description: 'Service down, security issues" };";";
  ];";";";
,"
      const categories  =  [","
        "
    'Technical Support',","
        "
    'Billing & Account',","
        "
    'API Issues',","
        "
    'Feature Request',","
        "
    'Bug Report',","
        "
    'Security Issue',","
        ";";";";
    'General Inquiry";";";
  ];";";";
,"
      const faqs  =  [","
        "
    {"}"
        "
      question: 'How do I report a technical issue?',","
        ";";";";
      answer: 'You can report technical issues through our support portal, live chat, or by calling our support line. Please provide as much detail as possible including error messages, steps to reproduce, and your system information.';"
    },","
        "
    {"}"
        "
      question: 'What information should I include in my support request?',","
        "
      answer: 'Include your account details, a clear description of the issue, steps to reproduce it, any error messages, and your system/browser information. Screenshots or screen recordings are also helpful.';"
    },","
        "
    {"}"
        "
      question: 'How quickly will I get a response?',","
        "
      answer: 'Response times vary by priority: Critical issues get immediate attention, High priority within 2 hours, Medium priority within 4 hours, and Low priority within 24 hours during business days.';"
    },","
        "
    {"}"
        "
      question: 'Can I get help with custom integrations?',","
        "
      answer: 'Yes! Our technical team can help with custom integrations, API implementations, and advanced configurations. Contact us to discuss your specific requirements.';"
    },","
        "
    {"}"
        "
      question: 'Is there a cost for support?',","
        "
      answer: 'Basic support is included with all plans. Premium support features and dedicated account management are available for Professional and Enterprise plans."
    },";
    {};";";
  ];";";";
,"
      const handleInputChange  =  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {"}"
        "
    const const { name, value  } = e.target,"
      setFormData(prev => ({",)}"
        "
      ...prev,","
        "
      [name]: value","
        "
    }))";
    },";";
    {}";";";
,"
      const handleSubmit = async (e: React.FormEvent) => {"}"
        "
    e.preventDefault(),;";";
      setIsSubmitting(true);";";";
;"
    // Simulate form submission","
        "
    await new Promise(resolve => setTimeout(resolve, 2000));
,";
      setIsSubmitting(false),";";
      setIsSubmitted(true);";";";
;"
    // Reset form after 3 seconds","
        "
    setTimeout(() => {"}"
        "
      setIsSubmitted(false),"
      setFormData({",)}"
        "
        name: '',","
        "
        email: '',","
        "
        subject: '',","
        "
        priority: '',","
        "
        category: '',","
        "
        description: '";
      });
    }, 3000)";
    },";";
    {}";";";
,"
      export default function Support() {";";";
  "
};";";
";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

const SupportPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Support - Zion Tech Group"";"
        description="Professional support solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Support</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default SupportPage;'";'";";";";
"
=======
<<<<<<< HEAD
import React, { useState } from 'react;'";
import { Helmet } from "react-helmet-async";""";
import { Link } from "react-router-dom";""";
import { ArrowRight, Search, MessageCircle, Phone, Mail, Clock, CheckCircle, Star, Users, Shield, Zap, Globe, BarChart3, Settings, HelpCircle, BookOpen, FileText, Calendar, Award, Target } from "lucide-react";""";
import EnhancedSEO from '../components/EnhancedSEO;'";
const: SupportPage = () => {;
  const [searchQuery, setSearchQuery] = useState(');''";
  const [selectedCategory, setSelectedCategory] = useState('all');''";
  const: supportCategories = [;
    { id: 'all', label: 'All Topics', icon: <HelpCircle: className ="w-5 h-5" /> },'"'"";";
    { id: 'getting-started', label: 'Getting Started', icon: <Zap: className ="w-5 h-5" /> },'"'"";";
    { id: 'ai-services', label: 'AI Services', icon: <BarChart3: className ="w-5 h-5" /> },'"'"";";
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: <Globe: className ="w-5 h-5" /> },'"'"";";
    { id: 'security', label: 'Security', icon: <Shield: className ="w-5 h-5" /> },'"'"";";
    { id: 'billing', label: 'Billing & Account', icon: <Settings: className ="w-5 h-5" /> }'"'"";";
  ];
  const: faqItems = [
    {
      id: 1,;
      question: "How do I get started with Zion Tech Group services?",""";
      answer: "Getting started is easy! Simply contact us through our consultation form or call us directly. We'll schedule a free consultation to understand your needs and recommend the best solutions for your business.",'"'"";";
      category: "getting-started",""";
      featured: true
    },
    {
      id: 2,
      question: "What AI services do you offer?",""";
      answer: "We offer comprehensive AI services including business intelligence, customer support chatbots, content generation, cybersecurity monitoring, data analytics, and custom AI solutions tailored to your specific needs.",""";
      category: "ai-services",""";
      featured: false
    },
    {
      id: 3,
      question: "How secure are your cloud solutions?",""";
      answer: "Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.",""";
      category: "cloud",""";
      featured: false
    },
    {
      id: 4,
      question: "Do you provide 24/7 support?",""";
      answer: "Yes! We offer 24/7 technical support for all our clients. Our support team is available around the clock to help you with any issues or questions you may have.",""";
      category: "getting-started",""";
      featured: true
    },
    {
      id: 5,
      question: "What is your typical project timeline?",""";
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI solutions may require 3-6 months. We provide detailed timelines during our initial consultation.",""";
      category: "getting-started",""";
      featured: false
    },
    {
      id: 6,
      question: "How do you ensure data privacy and compliance?",""";
      answer: "We follow strict data privacy protocols and are compliant with GDPR, CCPA, and other major privacy regulations. All data is encrypted in transit and at rest, and we never share your data with third parties without explicit consent.",""";
      category: "security",""";
      featured: false
    },
    {
      id: 7,
      question: "Can I integrate your solutions with my existing systems?",""";
      answer: "Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure. We support most major platforms and can create custom integrations as needed.",""";
      category: "ai-services",""";
      featured: false
    },
    {
      id: 8,
      question: "What happens if I need to scale my solution?",""";
      answer: "Our solutions are built to scale with your business. We can easily adjust capacity, add new features, or expand functionality as your needs grow. We also provide ongoing optimization and performance monitoring.",""";
      category: "cloud",""";
      featured: false
    }
  ];
  const: supportChannels = [
    {;
      title: "Live Chat",""";
      description: "Get instant help from our support team",""";
      icon: <MessageCircle: className ="w-8 h-8" />,""";
      availability: "24/7",""";
      responseTime: "Immediate",""";
      link: "#chat""";
    },
    {
      title: "Phone Support",""";
      description: "Speak directly with our technical experts",""";
      icon: <Phone: className ="w-8 h-8" />,""";
      availability: "24/7",""";
      responseTime: "Immediate",""";
      link: "tel:+13024640950""";
    },
    {
      title: "Email Support",""";
      description: "Send us detailed questions and get comprehensive answers",""";
      icon: <Mail: className ="w-8 h-8" />,""";
      availability: "24/7",""";
      responseTime: "Within 2 hours",""";
      link: "mailto:support@ziontechgroup.com""";
    },
    {
      title: "Documentation",""";
      description: "Browse our comprehensive knowledge base",""";
      icon: <BookOpen: className ="w-8 h-8" />,""";
      availability: "24/7",""";
      responseTime: "Immediate",""";
      link: "/docs""";
    }
  ];
  const: resources = [
    {;
      title: "Getting Started Guide",""";
      description: "Complete guide to setting up your Zion Tech Group services",""";
      type: "Guide",""";
      icon: <BookOpen: className ="w-6 h-6" />,""";
      link: "/docs/getting-started""";
    },
    {
      title: "API Documentation",""";
      description: "Comprehensive API reference for developers",""";
      type: "Technical",""";
      icon: <FileText: className ="w-6 h-6" />,""";
      link: "/api""";
    },
    {
      title: "Video Tutorials",""";
      description: "Step-by-step video guides for common tasks",""";
      type: "Video",""";
      icon: <Calendar: className ="w-6 h-6" />,""";
      link: "/tutorials""";
    },
    {
      title: "Best Practices",""";
      description: "Industry best practices and recommendations",""";
      type: "Guide",""";
      icon: <Award: className ="w-6 h-6" />,""";
      link: "/best-practices""";
    }
  ];
  const: stats = [;
    { number: "99.9%", label: "Uptime SLA", icon: <Shield: className ="w-6 h-6" /> },""";
    { number: "< 2 min", label: "Average Response Time", icon: <Clock: className ="w-6 h-6" /> },""";
    { number: "24/7", label: "Support Available", icon: <Users: className ="w-6 h-6" /> },""";
    { number: "95%", label: "Customer Satisfaction", icon: <Star: className ="w-6 h-6" /> }""";
  ];
  const: filteredFAQs = selectedCategory === 'all''";
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory);
  const: searchResults = searchQuery
    ? faqItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    : filteredFAQs;
  return (
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""";
      <EnhancedSEO: title ="Support - Zion Tech Group | 24/7 Technical Support""";
        description="Get 24/7 technical support from Zion Tech Group. Live chat, phone support, documentation, and expert help for all your AI and technology needs.""";
        keywords="technical support, customer service, help desk, AI support, cloud support, 24/7 support""";
        canonical="https://ziontechgroup.com/support""";
      />
      {/* Hero Section */}
      <section: className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto text-center">""";
          <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">""";
            We're Here to''";
            <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">""";
              {" "}Help""";
            </span>
          </h1>
          <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">""";
            Get 24/7 support from our expert team. Whether you need technical assistance, have questions about our services, or want to explore new possibilities, we're here for you.''";
          </p>
          {/* Search Bar */}
          <div: className ="max-w-2xl mx-auto mb-8">""";
            <div: className ="relative">""";
              <Search: className ="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />""";
              <input: type ="text""";
                placeholder="Search for help, documentation, or answers...""";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg""";
              />
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto">""";
          <div: className ="grid grid-cols-2 md:grid-cols-4 gap-8">""";
            {stats.map((stat, index) => (
              <div: key ={index} className="text-center group">""";
                <div: className ="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""";
                  {stat.icon}
                </div>
                <div: className ="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>""";
                <div: className ="text-gray-300 text-xs md:text-sm">{stat.label}</div>""";
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Support Channels */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">""";
                How Can We Help?
              </span>
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              Choose the support channel that works best for you. All channels are available 24/7.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">""";
            {supportChannels.map((channel, index) => (
              <div: key ={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden text-center""";
              >
                <div: className ="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>""";
                <div: className ="relative z-10">""";
                  <div: className ="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">""";
                    {channel.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">""";
                    {channel.title}
                  </h3>
                  <p: className ="text-gray-300 mb-4 leading-relaxed">""";
                    {channel.description}
                  </p>
                  <div: className ="space-y-2 mb-6">""";
                    <div: className ="flex items-center justify-center space-x-2 text-sm text-gray-300">""";
                      <Clock: className ="w-4 h-4" />""";
                      <span>{channel.availability}</span>
                    </div>
                    <div: className ="flex items-center justify-center space-x-2 text-sm text-cyan-400 font-semibold">""";
                      <Target: className ="w-4 h-4" />""";
                      <span>{channel.responseTime}</span>
                    </div>
                  </div>
                  <a: href ={channel.link}
                    className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105""";
                  >
                    Get Help
                    <ArrowRight: className ="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />""";
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">""";
                Frequently Asked Questions
              </span>
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              Find quick answers to common questions about our services and solutions.
            </p>
          </div>
          {/* Category Filter */}
          <div: className ="flex flex-wrap justify-center gap-4 mb-12">""";
            {supportCategories.map((category) => (
              <button: key ={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg''";
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white''";
                }`}
              >
                {category.icon;}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
          {/* FAQ Items */}
          <div: className ="space-y-6">""";
            {searchResults.map((item) => (
              <div: key ={item.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  item.featured ? 'ring-2 ring-cyan-500/50' : ''";
                }`}
              ></div>
                {item.featured && (
                  <div: className ="absolute top-4 right-4">""";
                    <span: className ="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">""";
                      Popular
                    </span>
                  </div>
                )}
                <div: className ="pr-20">""";
                  <h3: className ="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">""";
                    {item.question}
                  </h3>
                  <p: className ="text-gray-300 leading-relaxed">""";
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {searchResults.length === 0 && (
            <div: className ="text-center py-12">""";
              <HelpCircle: className ="w-16 h-16 text-gray-400 mx-auto mb-4" />""";
              <h3: className ="text-xl font-semibold text-white mb-2">No results found</h3>""";
              <p: className ="text-gray-300">Try searching with different keywords or browse our categories.</p>""";
            </div>
          )}
        </div>
      </section>
      {/* Resources Section */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-7xl mx-auto">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">""";
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">""";
                Helpful Resources
              </span>
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              Explore our comprehensive documentation, guides, and resources to get the most out of our services.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">""";
            {resources.map((resource, index) => (
              <div: key ={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden""";
              >
                <div: className ="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>""";
                <div: className ="relative z-10">""";
                  <div: className ="flex items-center space-x-3 mb-4">""";
                    <div: className ="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">""";
                      {resource.icon}
                    </div>
                    <span: className ="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">""";
                      {resource.type}
                    </span>
                  </div>
                  <h3: className ="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">""";
                    {resource.title}
                  </h3>
                  <p: className ="text-gray-300 text-sm leading-relaxed mb-4">""";
                    {resource.description}
                  </p>
                  <a: href ={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group""";
                  >
                    Learn More
                    <ArrowRight: className ="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />""";
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section: className ="py-16 px-4 sm:px-6 lg:px-8 relative z-10">""";
        <div: className ="max-w-4xl mx-auto text-center">""";
          <div: className ="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">""";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">""";
              Still Need Help?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">""";
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.''";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
              <Link: to ="/contact""";
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105""";
              >
                Contact Support
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />""";
              </Link>
              <a: href ="tel:+13024640950""";
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105""";
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};
};
export default SupportPage;
=======

import React, { useState } from 'react',";
      import React, { useState } from 'react',";
      const SupportPage: React.FC = () => {"}";
        "";
  const [formData, setFormData] = useState({",)}";
        "";
    name: '',",";";
        "";
    email: '',",";";
        "";
    subject: '',",";";
        "";
    priority: '',",";";
        "";
    category: '',",";";
        "";
    description: '';";
  }),
      const [isSubmitting, setIsSubmitting] = useState(false),
      const [isSubmitted, setIsSubmitted] = useState(false);
,
      const: supportChannels = [",";
        "";
    {""}";
      icon: <MessageSquare: className ="w-8 h-8" />,",";
        "";
      title: 'Live Chat',",";";
        "";
      description: 'Get instant help from our support team',",";";
        "";
      availability: '24/7',",";";
        "";
      responseTime: 'Immediate',",";";
        "";
      action: 'Start Chat',",";";
        "";
      color: 'from-blue-500 to-cyan-500';";
    },",";
        "";
    {"}";
        "";
      icon: <Phone: className ="w-8 h-8" />,",";
        "";
      title: 'Phone Support',",";";
        "";
      description: 'Speak directly with our technical experts',",";";
        "";
      availability: 'Mon-Fri 9AM-6PM EST',",";";
        "";
      responseTime: 'Immediate',",";";
        "";
      action: 'Call Now',",";";
        "";
      color: 'from-green-500 to-emerald-500';";
    },",";
        "";
    {"}";
        "";
      icon: <Mail: className ="w-8 h-8" />,",";
        "";
      title: 'Email Support',",";";
        "";
      description: 'Send detailed messages and get comprehensive responses',",";";
        "";
      availability: '24/7',",";";
        "";
      responseTime: '< 2 hours',",";";
        "";
      action: 'Send Email',",";";
        "";
      color: 'from-purple-500 to-pink-500';";
    },",";
        "";
    {"}";
        "";
      icon: BookOpen,",";
        "";
      title: 'Documentation',",";";
        "";
      description: 'Browse our comprehensive guides',",";";
        "";
      action: 'View Docs',",";";
        "";
      color: 'from-orange-500 to-red-500'";
    },
    {}
  ];
,
      const: priorityLevels = [",";
        "";
    { value: 'low', label: 'Low', description: 'General questions, feature requests' },",";";
        "";
    { value: 'medium', label: 'Medium', description: 'Minor issues, configuration help' },",";";
        "";
    { value: 'high', label: 'High', description: 'Service degradation, performance issues' },",";";
        "";
    { value: 'critical', label: 'Critical', description: 'Service down, security issues' };";
  ];
,
      const: categories = [",";
        "";
    'Technical Support',",";";
        "";
    'Billing & Account',",";";
        "";
    'API Issues',",";";
        "";
    'Feature Request',",";";
        "";
    'Bug Report',",";";
        "";
    'Security Issue',",";";
        "";
    'General Inquiry';";
  ];
,
      const: faqs = [",";
        "";
    {"}";
        "";
      question: 'How do I report a technical issue?',",";";
        "";
      answer: 'You can report technical issues through our support portal, live chat, or by calling our support line. Please provide as much detail as possible including error messages, steps to reproduce, and your system information.';";
    },",";
        "";
    {"}";
        "";
      question: 'What information should I include in my support request?',",";";
        "";
      answer: 'Include your account details, a clear description of the issue, steps to reproduce it, any error messages, and your system/browser information. Screenshots or screen recordings are also helpful.';";
    },",";
        "";
    {"}";
        "";
      question: 'How quickly will I get a response?',",";";
        "";
      answer: 'Response times vary by priority: Critical issues get immediate attention, High priority within 2 hours, Medium priority within 4 hours, and Low priority within 24 hours during business days.';";
    },",";
        "";
    {"}";
        "";
      question: 'Can I get help with custom integrations?',",";";
        "";
      answer: 'Yes! Our technical team can help with custom integrations, API implementations, and advanced configurations. Contact us to discuss your specific requirements.';";
    },",";
        "";
    {"}";
        "";
      question: 'Is there a cost for support?',",";";
        "";
      answer: 'Basic support is included with all plans. Premium support features and dedicated account management are available for Professional and Enterprise plans.'";
    },
    {}
  ];
,
      const: handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {"}";
        "";
    const { name, value } = e.target,
      setFormData(prev => ({",)}";
        "";
      ...prev,",";
        "";
      [name]: value",";
        "";
    }))
    },
    {}
,
      const: handleSubmit = async (e: React.FormEvent) => {"}";
        "";
    e.preventDefault(),
      setIsSubmitting(true);
;
    // Simulate form submission",";
        "";
    await new Promise(resolve => setTimeout(resolve, 2000));
,
      setIsSubmitting(false),
      setIsSubmitted(true);
;
    // Reset form after 3 seconds",";
        "";
    setTimeout(() => {"}";
        "";
      setIsSubmitted(false),
      setFormData({",)}";
        "";
        name: '',",";";
        "";
        email: '',",";";
        "";
        subject: '',",";";
        "";
        priority: '',",";";
        "";
        category: '',",";";
        "";
        description: '';";
      });
    }, 3000)
    },
    {}
,
      export default function Support() {"}";
        "";
  return (",)";
        "";
    <>{"}</>";
        "";
      <SEOHead",>";
        "";
        title="support - Zion Tech Group",";
      description="Zion Tech Group support service page" />""";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">""";
        <div: className ="text-center">""";
          <h1: className ="text-4xl font-bold mb-4">support</h1>""";
          <p: className ="text-gray-300">Coming soon...</p>",";
        "";
        </div>",";
        "";
      </div>",";
        "";
    </>",";
        "";
  )
    },
    {}
,
      export default SupportPage;
;

import React from 'react';;';";
import SEOHead from './components/SEOHead';";
;
const SupportPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Support - Zion Tech Group"";";
        description="Professional support solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Support</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default SupportPage;'";'";";";

>>>>>>> main
>>>>>>> main
