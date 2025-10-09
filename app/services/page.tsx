import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Marketing',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Target,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      path: '/ai-marketing'
    },
    {
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Zap,
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      path: '/ai-automation'
    },
    {
      title: 'AI Healthcare',
      description: 'Transform healthcare with AI-powered diagnostic and treatment solutions.',
      icon: Stethoscope,
      features: ['Medical Diagnosis', 'Treatment Planning', 'Patient Monitoring', 'Drug Discovery'],
      path: '/ai-healthcare'
    },
    {
      title: 'AI Fintech',
      description: 'Revolutionize financial services with AI-driven solutions.',
      icon: CreditCard,
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      path: '/ai-fintech'
    },
    {
      title: 'AI Content Generation',
      description: 'Create compelling content at scale with AI-powered tools.',
      icon: FileText,
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization'],
      path: '/ai-content-generation'
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock insights from your data with advanced AI analytics.',
      icon: BarChart,
      features: ['Predictive Modeling', 'Data Visualization', 'Business Intelligence', 'Real-time Analytics'],
      path: '/ai-data-analytics'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      path: '/ai-cybersecurity'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Optimize business workflows with intelligent automation.',
      icon: Settings,
      features: ['Process Automation', 'Task Optimization', 'Resource Management', 'Performance Monitoring'],
      path: '/ai-workflow-automation'
    },
    {
      title: 'AI Customer Support',
      description: 'Enhance customer experience with AI-powered support solutions.',
      icon: Users,
      features: ['Chatbots', 'Voice Assistants', 'Ticket Management', 'Customer Analytics'],
      path: '/ai-customer-support'
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales performance with AI-driven automation and insights.',
      icon: TrendingUp,
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Management', 'Performance Analytics'],
      path: '/ai-sales-automation'
    },
    {
      title: 'AI Project Management',
      description: 'Manage projects efficiently with AI-powered project management tools.',
      icon: Calendar,
      features: ['Resource Planning', 'Timeline Optimization', 'Risk Assessment', 'Progress Tracking'],
      path: '/ai-project-management'
    }
  ];

  const itServices = [
    {
      title: 'IT Infrastructure',
      description: 'Build and maintain robust IT infrastructure for your business.',
      icon: Cloud,
      features: ['Server Management', 'Network Setup', 'Cloud Migration', 'Infrastructure Monitoring'],
      path: '/it-infrastructure'
    },
    {
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      icon: Users,
      features: ['24/7 Support', 'Help Desk', 'System Maintenance', 'Troubleshooting'],
      path: '/it-support'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Migrate and optimize your cloud infrastructure.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Security Hardening'],
      path: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      icon: Shield,
      features: ['Security Assessment', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
      path: '/cybersecurity'
    },
    {
      title: 'Database Management',
      description: 'Optimize and maintain your database systems.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      path: '/database-management'
    },
    {
      title: 'Managed IT',
      description: 'Complete IT management and support services.',
      icon: Settings,
      features: ['Proactive Monitoring', 'Patch Management', 'Security Updates', 'Performance Optimization'],
      path: '/managed-it'
    }
  ];

  const emergingTech = [
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum computing for complex problem solving.',
      icon: Atom,
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development'],
      path: '/quantum-computing'
    },
    {
      title: 'Autonomous Systems',
      description: 'Develop self-managing systems and autonomous solutions.',
      icon: Bot,
      features: ['Autonomous Vehicles', 'Smart Systems', 'Self-Healing Infrastructure', 'Intelligent Automation'],
      path: '/autonomous-systems'
    },
    {
      title: 'Blockchain',
      description: 'Implement blockchain solutions for secure and transparent operations.',
      icon: Link,
      features: ['Smart Contracts', 'Decentralized Apps', 'Cryptocurrency', 'Supply Chain'],
      path: '/blockchain'
    },
    {
      title: 'IoT Edge Computing',
      description: 'Connect and manage IoT devices with edge computing solutions.',
      icon: Smartphone,
      features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Data Synchronization'],
      path: '/iot-edge-computing'
    },
    {
      title: 'Robotics',
      description: 'Develop intelligent robotic solutions for various industries.',
      icon: Bot,
      features: ['Industrial Robotics', 'Service Robots', 'AI Integration', 'Automation Systems'],
      path: '/robotics'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including AI automation, healthcare solutions, fintech, cybersecurity, cloud infrastructure, and emerging technologies." />
        <meta name="keywords" content="AI services, IT services, artificial intelligence, automation, healthcare AI, fintech, cybersecurity, cloud computing, quantum computing, blockchain" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive innovation. 
                From cutting-edge AI applications to robust IT infrastructure, we deliver results that matter.
              </p>
            </div>
          </section>

          {/* AI Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-12 h-12 text-purple-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">AI Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to automate processes, gain insights, 
                and create intelligent solutions that drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Cloud className="w-12 h-12 text-blue-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">IT Services</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build and maintain robust IT infrastructure with our comprehensive IT services. 
                From cloud migration to cybersecurity, we ensure your technology foundation is solid.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Emerging Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-12 h-12 text-cyan-400 mr-4" />
                <h2 className="text-4xl font-bold text-white">Emerging Technologies</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with cutting-edge technologies that will shape the future. 
                From quantum computing to autonomous systems, we're pioneering tomorrow's solutions today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergingTech.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">The advantages that set us apart</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">20+ years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">300% average ROI for our implementations</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl text-center p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss which services are right for your business and how we can help 
                you achieve your goals with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;