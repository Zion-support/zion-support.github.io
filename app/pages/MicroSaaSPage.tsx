import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Shield, BarChart, Users, Globe, Code, Database, Smartphone, Mail, Phone, MapPin } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: ['GPT-4 Integration', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Content Calendar', 'Analytics Dashboard'],
      pricing: { monthly: 29, yearly: 290, currency: 'USD' },
      category: 'Content Creation',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      popular: true
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler',
      description: 'Automate your social media presence across all platforms with intelligent scheduling.',
      features: ['Multi-platform Support', 'Best Time Optimization', 'Content Library', 'Analytics & Insights', 'Team Collaboration', 'Auto-hashtag Generation'],
      pricing: { monthly: 19, yearly: 190, currency: 'USD' },
      category: 'Social Media',
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      id: 'email-marketing-automation',
      name: 'Email Marketing Automation',
      description: 'Powerful email marketing platform with advanced automation and personalization features.',
      features: ['Drag & Drop Builder', 'Advanced Segmentation', 'A/B Testing', 'Behavioral Triggers', 'Deliverability Optimization', 'ROI Tracking'],
      pricing: { monthly: 39, yearly: 390, currency: 'USD' },
      category: 'Marketing',
      icon: <Mail className="w-8 h-8 text-green-400" />
    },
    {
      id: 'analytics-dashboard',
      name: 'Business Analytics Dashboard',
      description: 'Comprehensive business intelligence and analytics platform for data-driven decisions.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integrations', 'Automated Alerts', 'White-label Options'],
      pricing: { monthly: 49, yearly: 490, currency: 'USD' },
      category: 'Analytics',
      icon: <BarChart className="w-8 h-8 text-orange-400" />
    },
    {
      id: 'customer-support-chat',
      name: 'AI Customer Support Chat',
      description: 'Intelligent customer support chatbot with human handoff capabilities.',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Knowledge Base Integration', 'Sentiment Analysis', 'Live Chat Handoff', 'Performance Analytics'],
      pricing: { monthly: 25, yearly: 250, currency: 'USD' },
      category: 'Customer Service',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      id: 'project-management-tool',
      name: 'Project Management Pro',
      description: 'Comprehensive project management solution with team collaboration and time tracking.',
      features: ['Kanban Boards', 'Gantt Charts', 'Time Tracking', 'Resource Management', 'Budget Tracking', 'Client Portal'],
      pricing: { monthly: 35, yearly: 350, currency: 'USD' },
      category: 'Productivity',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      id: 'security-monitoring',
      name: 'Security Monitoring Suite',
      description: 'Advanced security monitoring and threat detection for small to medium businesses.',
      features: ['Real-time Monitoring', 'Threat Detection', 'Compliance Reporting', 'Incident Response', 'Security Audits', '24/7 Alerts'],
      pricing: { monthly: 59, yearly: 590, currency: 'USD' },
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      id: 'mobile-app-builder',
      name: 'No-Code Mobile App Builder',
      description: 'Create professional mobile apps without coding using our drag-and-drop builder.',
      features: ['Visual App Builder', 'Cross-platform Support', 'App Store Publishing', 'Push Notifications', 'User Management', 'Analytics Integration'],
      pricing: { monthly: 45, yearly: 450, currency: 'USD' },
      category: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8 text-indigo-400" />
    }
  ];

  const categories = ['All', 'Content Creation', 'Social Media', 'Marketing', 'Analytics', 'Customer Service', 'Productivity', 'Security', 'Mobile Development'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation platforms, and productivity software." />
        <meta name="keywords" content="micro saas, saas solutions, business software, automation tools, ai tools, productivity software" />
        <meta property="og:title" content="Micro SaaS Solutions | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SaaS solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SaaS tools designed to streamline your business operations and boost productivity. 
              Choose from our comprehensive suite of AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of micro SaaS tools designed to solve specific business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">
                      ${service.pricing.monthly}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      ${service.pricing.yearly}/year (Save ${(service.pricing.monthly * 12) - service.pricing.yearly})
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    >
                      Get Started
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    >
                      Call (302) 464-0950
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS tools are designed with modern businesses in mind, offering powerful features at affordable prices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-300">Quick setup and deployment in minutes, not days</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with SOC 2 compliance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Analytics</h3>
                <p className="text-gray-300">Comprehensive insights and reporting tools</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support from our expert team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SaaS solutions to streamline operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSPage;