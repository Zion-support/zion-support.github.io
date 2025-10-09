import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';

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
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Exception Handling'],
      path: '/ai-automation'
    },
    {
      title: 'AI Healthcare',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      icon: Heart,
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance'],
      path: '/ai-healthcare'
    },
    {
      title: 'AI Fintech',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      icon: CreditCard,
      features: ['Algorithmic Trading', 'Fraud Detection', 'Risk Assessment', 'Credit Scoring'],
      path: '/ai-fintech'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps', 'Containerization'],
      path: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      path: '/cybersecurity'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific needs.',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      path: '/custom-development'
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance to optimize your technology infrastructure and strategy.',
      icon: Settings,
      features: ['Technology Assessment', 'Strategic Planning', 'Digital Transformation', 'Process Optimization'],
      path: '/it-consulting'
    }
  ];

  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project management with AI-driven insights and automation.',
      icon: Calendar,
      features: ['Task Automation', 'Resource Optimization', 'Progress Tracking', 'Risk Management'],
      path: '/ai-project-management'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing materials.',
      icon: FileText,
      features: ['Content Automation', 'SEO Optimization', 'Multi-language Support', 'Brand Consistency'],
      path: '/ai-content-generation'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics and business intelligence powered by AI.',
      icon: BarChart,
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization'],
      path: '/ai-analytics'
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent customer service automation and chatbot solutions.',
      icon: MessageSquare,
      features: ['Chatbot Integration', 'Ticket Automation', 'Sentiment Analysis', 'Multi-channel Support'],
      path: '/ai-customer-support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including automation, cloud infrastructure, cybersecurity, and custom development solutions." />
        <meta name="keywords" content="ai services, it services, automation, cloud computing, cybersecurity, custom development, micro saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations and drive digital innovation.
            </p>
          </section>

          {/* AI Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium mt-4 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium mt-4 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;