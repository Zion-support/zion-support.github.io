'use client';
import React, { useState, useMemo } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send, DollarSign, Rocket, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Star as StarIcon, Award as AwardIcon, Target as TargetIcon, Brain as BrainIcon, Cloud as CloudIcon, Code as CodeIcon, BarChart as BarChartIcon, Users as UsersIcon2, Zap as ZapIcon, Globe as GlobeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, Settings as SettingsIcon, CheckSquare as CheckSquareIcon, MessageSquare as MessageSquareIcon, Building as BuildingIcon, Clock as ClockIcon, Send as SendIcon, DollarSign as DollarSignIcon, Rocket as RocketIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };
<<<<<<< HEAD

export default function MicroSaasPage() {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-04a7
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      services: [
        {
          id: 1,
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
          icon: BarChart,
          price: 99,
          originalPrice: 149,
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
          benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          link: '/ai-project-manager',
          popular: true,
          category: 'Productivity',
          rating: 4.9,
          users: '10,000+',
          freeTrial: '14 days'
        },
        {
          id: 2,
          name: 'AI Smart Calendar Pro',
          description: 'Revolutionary calendar that learns your patterns and automatically optimizes your schedule for maximum productivity and work-life balance.',
          icon: Calendar,
          price: 59,
          originalPrice: 89,
          features: ['Smart scheduling', 'Pattern learning', 'Conflict resolution', 'Time blocking', 'Meeting optimization', 'Work-life balance', 'Integration support', 'Mobile sync'],
          benefits: ['50% time saved', '90% fewer conflicts', 'Perfect work-life balance', '25% more productive'],
          link: '/ai-smart-calendar',
          popular: true,
          category: 'Productivity',
          rating: 4.8,
          users: '5,000+',
          freeTrial: '7 days'
        },
        {
          id: 3,
          name: 'AI Voice Cloning Studio Pro',
          description: 'Professional voice cloning and synthesis platform for content creators, marketers, and businesses. Create natural-sounding voiceovers in minutes.',
          icon: Mic,
          price: 149,
          originalPrice: 199,
          features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multiple languages', 'Real-time processing', 'API integration', 'Custom voices', 'Batch processing'],
          benefits: ['95% voice accuracy', '80% cost reduction', '10x faster production', 'Unlimited usage'],
          link: '/ai-voice-cloning-studio',
          popular: false,
          category: 'Creative',
          rating: 4.7,
          users: '2,500+',
          freeTrial: '3 days'
        }
      ]
    },
    {
      category: 'Marketing & Sales Automation',
      services: [
        {
          id: 4,
          name: 'AI Email Marketing Pro',
          description: 'Intelligent email marketing platform that uses AI to optimize subject lines, content, and send times for maximum engagement and conversions.',
          icon: Mail,
          price: 79,
          originalPrice: 119,
          features: ['AI content generation', 'Send time optimization', 'A/B testing', 'Segmentation', 'Analytics dashboard', 'Template library', 'Automation workflows', 'Deliverability tools'],
          benefits: ['300% higher open rates', '250% more clicks', '180% increase in conversions', '60% time saved'],
          link: '/ai-email-marketing',
          popular: true,
          category: 'Marketing',
          rating: 4.9,
          users: '8,000+',
          freeTrial: '14 days'
        },
        {
          id: 5,
          name: 'AI Social Media Manager',
          description: 'Automated social media management with AI-powered content creation, posting optimization, and engagement tracking across all platforms.',
          icon: MessageSquare,
          price: 89,
          originalPrice: 129,
          features: ['Content generation', 'Multi-platform posting', 'Engagement tracking', 'Hashtag optimization', 'Analytics reports', 'Scheduling', 'Brand voice training', 'Trend analysis'],
          benefits: ['400% more engagement', '70% time saved', '200% follower growth', '85% better reach'],
          link: '/ai-social-media-manager',
          popular: true,
          category: 'Marketing',
          rating: 4.8,
          users: '6,500+',
          freeTrial: '10 days'
        }
      ]
    },
    {
      category: 'Customer Support & Service',
      services: [
        {
          id: 6,
          name: 'AI Customer Support Pro',
          description: 'Intelligent customer support system with AI chatbots, ticket routing, and automated responses that provide 24/7 assistance.',
          icon: MessageSquare,
          price: 129,
          originalPrice: 179,
          features: ['AI chatbots', 'Ticket routing', 'Knowledge base', 'Multi-language support', 'Sentiment analysis', 'Escalation management', 'Performance analytics', 'Integration APIs'],
          benefits: ['90% faster response', '80% cost reduction', '95% customer satisfaction', '24/7 availability'],
          link: '/ai-customer-support',
          popular: true,
          category: 'Support',
          rating: 4.9,
          users: '12,000+',
          freeTrial: '21 days'
        },
        {
          id: 7,
          name: 'AI Help Desk Assistant',
          description: 'Smart help desk solution that automatically categorizes tickets, suggests solutions, and provides instant answers to common questions.',
          icon: Settings,
          price: 99,
          originalPrice: 139,
          features: ['Auto-categorization', 'Solution suggestions', 'Knowledge base search', 'Ticket prioritization', 'SLA management', 'Reporting dashboard', 'Mobile app', 'Team collaboration'],
          benefits: ['75% faster resolution', '60% fewer escalations', '85% accuracy', '50% time saved'],
          link: '/ai-help-desk',
          popular: false,
          category: 'Support',
          rating: 4.7,
          users: '4,000+',
          freeTrial: '14 days'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        {
          id: 8,
          name: 'AI Business Intelligence Pro',
          description: 'Advanced BI platform with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
          icon: BarChart,
          price: 199,
          originalPrice: 299,
          features: ['Predictive analytics', 'Automated insights', 'Custom dashboards', 'Data visualization', 'Report automation', 'Trend analysis', 'Alert system', 'API integration'],
          benefits: ['300% faster insights', '90% accuracy', '200% better decisions', '80% time saved'],
          link: '/ai-business-intelligence',
          popular: true,
          category: 'Analytics',
          rating: 4.9,
          users: '3,500+',
          freeTrial: '30 days'
        },
        {
          id: 9,
          name: 'AI Data Visualization Studio',
          description: 'Create stunning, interactive data visualizations with AI assistance. Transform complex data into compelling stories and insights.',
          icon: BarChart,
          price: 149,
          originalPrice: 199,
          features: ['AI chart suggestions', 'Interactive dashboards', 'Custom templates', 'Real-time updates', 'Export options', 'Collaboration tools', 'Mobile responsive', 'Brand customization'],
          benefits: ['90% faster creation', '200% more engaging', '85% better insights', '60% time saved'],
          link: '/ai-data-visualization',
          popular: false,
          category: 'Analytics',
          rating: 4.6,
          users: '2,000+',
          freeTrial: '14 days'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          id: 10,
          name: 'AI Security Monitor Pro',
          description: 'Advanced security monitoring with AI-powered threat detection, automated incident response, and compliance reporting.',
          icon: Shield,
          price: 299,
          originalPrice: 399,
          features: ['Threat detection', 'Incident response', 'Compliance reporting', 'Real-time monitoring', 'Risk assessment', 'Automated alerts', 'Forensic analysis', 'Integration support'],
          benefits: ['95% threat detection', '80% faster response', '100% compliance', '70% cost reduction'],
          link: '/ai-security-monitor',
          popular: true,
          category: 'Security',
          rating: 4.9,
          users: '1,500+',
          freeTrial: '30 days'
        }
      ]
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const categories = ['all', ...new Set(microSaasServices.flatMap(cat => cat.services.map(s => s.category)))];

  const filteredServices = useMemo(() => {
    return microSaasServices.flatMap(category => 
      category.services.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesPrice && matchesSearch;
      })
    );
  }, [selectedCategory, priceRange, searchTerm]);

>>>>>>> cursor/fix-errors-and-merge-to-main-04a7
  const benefits = [
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'Average ROI Increase',
      description: 'Our clients see significant returns on investment within the first quarter'
    },
    {
      icon: Users,
      stat: '50K+',
      title: 'Active Users',
      description: 'Trusted by businesses worldwide for their critical operations'
    },
    {
      icon: Award,
      stat: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA coverage'
    },
    {
      icon: Target,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our expert technical team'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Project Manager Pro transformed our team productivity. We now complete projects 40% faster with better quality.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCorp',
      content: 'The AI Email Marketing Pro increased our open rates by 300%. It\'s like having a marketing genius on our team.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
      rating: 5,
      avatar: '/images/testimonials/emily.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
<<<<<<< HEAD
              Powerful AI-driven tools for modern businesses
=======
  const categories = ['All', 'Productivity', 'Creative', 'Security', 'Health', 'IoT', 'Finance', 'Education'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable AI-driven tools for modern businesses. 
              Choose from our comprehensive suite of specialized applications designed to boost productivity and efficiency.
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
            </p>
          </div>
<<<<<<< HEAD
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  } ${service.comingSoon ? 'opacity-75' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {service.comingSoon && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                    <p className="text-gray-300 text-sm">{service.category}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        {formatPrice(service.pricing.monthly)}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        or {formatPrice(service.pricing.yearly)}/year (save 17%)
                      </div>
                      {service.pricing.setup && service.pricing.setup > 0 && (
                        <div className="text-sm text-gray-400 mt-1">
                          + {formatPrice(service.pricing.setup)} setup fee
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <a
                        href={`/contact?service=${service.id}`}
                        className="w-full bg-cyan-400 text-slate-900 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 text-center block"
                      >
                        Get Started
                      </a>
                      <a
                        href={`/micro-saas/${service.id}`}
                        className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI-Powered Micro SAAS Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
=======
              AI-Powered Business Tools for Modern Enterprises
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
>>>>>>> cursor/fix-errors-and-merge-to-main-04a7
              Streamline your business operations with our intelligent micro SAAS applications. 
              From project management to customer support, we have the tools you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
=======
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.toLowerCase()
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              onClick={() => setActiveTab(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasServices
            .filter(service => activeTab === 'all' || service.category.toLowerCase() === activeTab)
            .map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                {service.popular && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">${service.pricing.monthly}</div>
                <div className="text-sm text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 group-hover:shadow-lg">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a

      <Footer />
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SAAS solutions designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Start Free Trial
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include free trials and no setup fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all block text-center ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-804c
=======

export default MicroSaasPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-e12a
>>>>>>> 0cc94a9107be4e149f624d711393a8900b821eec
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-04a7
