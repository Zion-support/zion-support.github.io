import React, { useState } from 'react;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MessageCircle, Phone, Mail, Clock, CheckCircle, Star, Users, Shield, Zap, Globe, BarChart3, Settings, HelpCircle, BookOpen, FileText, Calendar, Award, Target } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO;

const SupportPage = () => {';
  const [searchQuery, setSearchQuery] = useState('')'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = ['
    { id: 'all', label: 'All Topics', icon: <HelpCircle className="w-5 h-5"> },'
    { id: 'getting-started', label: 'Getting Started', icon: <Zap className="w-5 h-5"> },'
    { id: 'ai-services', label: 'AI Services', icon: <BarChart3 className="w-5 h-5"> },'
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: <Globe className="w-5 h-5"> },'
    { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5"> },'
    { id: 'billing', label: 'Billing & Account', icon: <Settings className="w-5 h-5"> }
  ];

  const faqItems = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group services?",'
      answer: "Getting started is easy! Simply contact us through our consultation form or call us directly. We'll schedule a free consultation to understand your needs and recommend the best solutions for your business.",
      category: "getting-started",
      featured: true
    },
    {
      id: 2,
      question: "What AI services do you offer?",
      answer: "We offer comprehensive AI services including business intelligence, customer support chatbots, content generation, cybersecurity monitoring, data analytics, and custom AI solutions tailored to your specific needs.",
      category: "ai-services",
      featured: false
    },
    {
      id: 3,
      question: "How secure are your cloud solutions?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR.",
      category: "cloud",
      featured: false
    },
    {
      id: 4,
      question: "Do you provide 24/7 support?",
      answer: "Yes! We offer 24/7 technical support for all our clients. Our support team is available around the clock to help you with any issues or questions you may have.",
      category: "getting-started",
      featured: true
    },
    {
      id: 5,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI solutions may require 3-6 months. We provide detailed timelines during our initial consultation.",
      category: "getting-started",
      featured: false
    },
    {
      id: 6,
      question: "How do you ensure data privacy and compliance?",
      answer: "We follow strict data privacy protocols and are compliant with GDPR, CCPA, and other major privacy regulations. All data is encrypted in transit and at rest, and we never share your data with third parties without explicit consent.",
      category: "security",
      featured: false
    },
    {
      id: 7,
      question: "Can I integrate your solutions with my existing systems?",
      answer: "Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure. We support most major platforms and can create custom integrations as needed.",
      category: "ai-services",
      featured: false
    },
    {
      id: 8,
      question: "What happens if I need to scale my solution?",
      answer: "Our solutions are built to scale with your business. We can easily adjust capacity, add new features, or expand functionality as your needs grow. We also provide ongoing optimization and performance monitoring.",
      category: "cloud",
      featured: false;
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageCircle className="w-6 h-6" />
      availability: "24/7",
      responseTime: "Immediate",
      link: "#chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: <Phone className="w-6 h-6" />
      availability: "24/7",
      responseTime: "Immediate",
      link: "tel:+13024640950"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: <Mail className="w-6 h-6" />
      availability: "24/7",
      responseTime: "Within 2 hours",
      link: "mailto:support@ziontechgroup.com"
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive knowledge base",
      icon: <BookOpen className="w-6 h-6" />
      availability: "24/7",
      responseTime: "Immediate",
      link: "/docs"
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete guide to setting up your Zion Tech Group services",
      type: "Guide",
      icon: <BookOpen className="w-6 h-6" />
      link: "/"
    },
    {
      title: "API Documentation",
      description: "Comprehensive API reference for developers",
      type: "Technical",
      icon: <FileText className="w-6 h-6" />
      link: "/api"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      type: "Video",
      icon: <Calendar className="w-6 h-6" />
      link: "/tutorials"
    },
    {
      title: "Best Practices",
      description: "Industry best practices and recommendations",
      type: "Guide",
      icon: <Award className="w-6 h-6" />
      link: "/best-practices"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6"> },
    { number: "< 2 min", label: "Average Response Time", icon: <Clock className="w-6 h-6"> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6"> },
    { number: "95%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6"> }
  ];
'
  const filteredFAQs = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const searchResults = searchQuery 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFAQs;
  return (
    
    <div>
    <EnhancedSEO />
      {/* Hero Section */}
      <section>
        <div>
    <h1>'
            We're Here to
             <span>{" "}Help
            </span></h1>
          <p />'
            Get 24/7 support from our expert team. Whether you need technical assistance, have questions about our services, or want to explore new possibilities, we're here for you.

          </p>
          
          {/* Search Bar */}
          <div>
    <div />
              <Search />
              <input
                type="text"
                placeholder="Search for help, documentation, or answers..."
                value={searchQuery;
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg">
            </div>
        </div>
      </div>
      </section>

      {/* Stats Section */}
      <section>
        <div>
    <div />
            {stats.map((stat, index) => (
              <div>
    <div />
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
      <section>
        <div>
    <div />
            <h2 />
              <span />
                How Can We Help?
              </span>
            </h2>
            <p />
              Choose the support channel that works best for you. All channels are available 24/7.
            </p>
          </div>
          
          <div />
            {supportChannels.map((channel, index) => (
              <div>
    <div />
                <div>
    <div />
                    {channel.icon}
                  </div>
                  <h3 />
                    {channel.title}
                  </h3>
                  <p />
                    {channel.description}
                  </p>
                  <div>
    <div />
                      <Clock />
                      <span>{channel.availability}</span>
                    </div>
                    <div>
    <Target />
                      <span>{channel.responseTime}</span>
                    </div>
  </div>
  <a />
                    Get Help
                    <ArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div>
    <div />
            <h2 />
              <span />
                Frequently Asked Questions
              </span>
            </h2>
            <p />
              Find quick answers to common questions about our services and solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div />
            {supportCategories.map((category) => (
              <button
                key={category.id;
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg';
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon;
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div />
            {searchResults.map((item) => (
              <div />
                {item.featured && (
                  <div>
    <span />
                      Popular
                    </span>
                  </div>
                )}
                
                <div>
    <h3 />
                    {item.question}
                  </h3>
                  <p />
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {searchResults.length === 0 && (
            <div>
    <HelpCircle />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-300">Try searching with different keywords or browse our categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section>
        <div>
    <div />
            <h2 />
              <span />
                Helpful Resources
              </span>
            </h2>
            <p />
              Explore our comprehensive documentation, guides, and resources to get the most out of our services.
            </p>
          </div>
          
          <div />
            {resources.map((resource, index) => (
              <div>
    <div />
                <div>
    <div />
                    <div />
                      {resource.icon}
                    </div>
                    <span />
                      {resource.type}
                    </span>
                  </div>
                  <h3 />
                    {resource.title}
                  </h3>
                  <p />
                    {resource.description}
                  </p>
                  <a />
                    Learn More
                    <ArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div>
    <div />
            <h2 />
              Still Need Help?
            </h2>
            <p />'
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div>
    <Link />
                Contact Support
                <ArrowRight />
              </Link>
              <a />
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