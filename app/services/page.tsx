import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Brain, Cloud, Code, Zap, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Comprehensive AI solutions for enterprise transformation',
      services: [
        { name: 'AI Consulting & Strategy', path: '/ai-services', description: 'Strategic AI planning and implementation' },
        { name: 'Machine Learning Solutions', path: '/ai-services', description: 'Custom ML models and algorithms' },
        { name: 'AI Marketing Automation', path: '/ai-marketing', description: 'AI-powered marketing campaigns' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI applications' },
        { name: 'AI Financial Services', path: '/ai-fintech', description: 'Fintech AI solutions' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Complete IT infrastructure and support solutions',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure setup' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions and protection' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration and management' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Development operations automation' },
        { name: 'Database Services', path: '/database', description: 'Database management and optimization' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure design' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: '100+ ready-to-use AI-powered applications',
      services: [
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI-powered content creation' },
        { name: 'Smart Analytics', path: '/smart-analytics', description: 'Business intelligence tools' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling system' },
        { name: 'Expense Tracker', path: '/expense-tracker', description: 'Financial management tool' },
        { name: 'Task Manager Pro', path: '/task-manager-pro', description: 'Advanced task management' },
        { name: 'Business Apps', path: '/business-apps', description: 'Productivity applications' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation suite' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'AI-powered development tools' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Cutting-edge technology solutions for the future',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum algorithm development' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robotic systems' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected device solutions' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized applications' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, IT infrastructure, Micro SAAS applications, and emerging technologies. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="AI services, IT services, Micro SAAS, quantum computing, robotics, blockchain, business intelligence, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive unprecedented growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={service.path}
                        className="group p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-sm text-gray-400">{service.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <Link
                      href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center"
                    >
                      View All {category.title} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">Proven results and unmatched expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">300% average ROI with 99.9% client satisfaction rate</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">50+ certified experts with 15+ years average experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-300">Latest AI and IT technologies for maximum impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss your specific needs and discover how we can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.phone}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Middletown, DE</div>
                  <div className="text-gray-400 text-sm">Our location</div>
                </div>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Start Your Transformation
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ServicesPage;