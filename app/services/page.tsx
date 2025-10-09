import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced AI analytics and predictive modeling.',
      icon: BarChart,
      price: 'Starting at $299/month',
      marketPrice: '$599/month',
      features: ['Real-time data processing', 'Predictive analytics', 'Automated reporting', 'Custom dashboards'],
      benefits: ['Increase decision speed by 400%', 'Reduce manual analysis by 90%', 'Improve accuracy by 95%'],
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      title: 'AI Document Processing',
      description: 'AI-powered document analysis, extraction, and workflow automation for maximum efficiency.',
      icon: FileText,
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation'],
      benefits: ['Process documents 15x faster', 'Reduce errors by 98%', 'Save 30+ hours weekly'],
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      title: 'AI Customer Support',
      description: 'Intelligent customer support automation with natural language processing and sentiment analysis.',
      icon: MessageSquare,
      price: 'Starting at $149/month',
      marketPrice: '$299/month',
      features: ['Intelligent chatbots', 'Voice recognition', 'Sentiment analysis', 'Multi-language support'],
      benefits: ['Improve satisfaction by 60%', 'Reduce response time by 85%', 'Handle 20x more inquiries'],
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-driven personalization and optimization.',
      icon: Target,
      price: 'Starting at $179/month',
      marketPrice: '$359/month',
      features: ['Behavioral analysis', 'Content personalization', 'Campaign optimization', 'A/B testing automation'],
      benefits: ['Increase engagement by 300%', 'Boost conversion by 80%', 'Reduce costs by 60%'],
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      title: 'AI Predictive Maintenance',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and anomaly detection.',
      icon: Wrench,
      price: 'Starting at $399/month',
      marketPrice: '$799/month',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Anomaly detection'],
      benefits: ['Reduce downtime by 70%', 'Cut maintenance costs by 50%', 'Extend equipment life by 40%'],
      link: 'https://ziontechgroup.com/ai-predictive-maintenance'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, design, and video generation.',
      icon: PenTool,
      price: 'Starting at $129/month',
      marketPrice: '$259/month',
      features: ['Text generation', 'Image creation', 'Video production', 'Voice synthesis'],
      benefits: ['Create content 10x faster', 'Reduce costs by 70%', 'Improve quality by 85%'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses with 99.9% uptime guarantee.',
      icon: Cloud,
      price: 'Starting at $299/month',
      marketPrice: '$599/month',
      features: ['AWS/Azure/GCP Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security'],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets with advanced threat detection.',
      icon: Shield,
      price: 'Starting at $249/month',
      marketPrice: '$499/month',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      benefits: ['Prevent 99.9% of threats', 'Ensure compliance', 'Reduce security risks'],
      link: 'https://ziontechgroup.com/cybersecurity'
    },
    {
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and maintenance services with proactive monitoring.',
      icon: Settings,
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      features: ['Remote Support', 'System Monitoring', 'Proactive Maintenance', 'Help Desk'],
      benefits: ['Minimize downtime', 'Improve system performance', 'Reduce IT costs'],
      link: 'https://ziontechgroup.com/it-support'
    },
    {
      title: 'Database Management',
      description: 'Optimize and secure your database infrastructure with advanced management tools.',
      icon: Database,
      price: 'Starting at $179/month',
      marketPrice: '$359/month',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      benefits: ['Improve performance by 200%', 'Ensure data security', 'Reduce maintenance overhead'],
      link: 'https://ziontechgroup.com/database-management'
    }
  ];

  const microSaasServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction.',
      icon: Calendar,
      price: 'Starting at $79/month',
      marketPrice: '$120/month',
      features: ['Smart task scheduling', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      benefits: ['Complete projects 30% faster', 'Reduce project risks by 85%', 'Save 15+ hours weekly'],
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    {
      title: 'Smart Invoice AI',
      description: 'Automate invoice creation and management with AI-powered data extraction and processing.',
      icon: FileText,
      price: 'Starting at $49/month',
      marketPrice: '$89/month',
      features: ['Auto data extraction', 'Smart categorization', 'Payment tracking', 'Tax calculations'],
      benefits: ['Save 5 hours weekly', 'Reduce errors by 95%', 'Faster payments'],
      link: 'https://ziontechgroup.com/smart-invoice-ai'
    },
    {
      title: 'DataVision Analytics',
      description: 'Comprehensive business analytics with AI-powered insights and predictive modeling.',
      icon: BarChart,
      price: 'Starting at $99/month',
      marketPrice: '$199/month',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization'],
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Increase revenue by 25%'],
      link: 'https://ziontechgroup.com/datavision-analytics'
    },
    {
      title: 'SupportBot AI',
      description: 'Intelligent customer support automation with natural language processing.',
      icon: MessageSquare,
      price: 'Starting at $69/month',
      marketPrice: '$149/month',
      features: ['Natural language processing', 'Multi-language support', 'Ticket routing', 'Sentiment analysis'],
      benefits: ['Reduce support costs by 60%', 'Improve response time by 90%', 'Handle 10x more inquiries'],
      link: 'https://ziontechgroup.com/supportbot-ai'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including automation, cloud infrastructure, cybersecurity, and custom development solutions." />
        <meta name="keywords" content="AI services, IT consulting, cloud infrastructure, cybersecurity, automation, custom development" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 holographic-text">Services</span>
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. 
                Trusted by 500+ companies worldwide with 99.9% uptime guarantee.
              </p>
            </div>
          </section>

          {/* AI Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-10 h-10 text-cyan-400 mr-3" />
                <span className="cyber-text neon-pulse">AI Services</span>
              </h2>
              <p className="text-xl text-cyan-400">Cutting-edge artificial intelligence solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group cyber-card">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-cyan-400 font-semibold">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-gray-500 text-sm line-through">{service.marketPrice}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-purple-400 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="container mx-auto px-4 py-16 bg-white/5">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Cloud className="w-10 h-10 text-blue-400 mr-3" />
                <span className="cyber-text neon-pulse">IT Services</span>
              </h2>
              <p className="text-xl text-blue-400">Reliable and scalable technology infrastructure</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cyber-card">
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-400 font-semibold">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-gray-500 text-sm line-through">{service.marketPrice}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Micro SAAS Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Code className="w-10 h-10 text-green-400 mr-3" />
                <span className="cyber-text neon-pulse">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-green-400">Custom software solutions for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 group cyber-card">
                  <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400 font-semibold">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-gray-500 text-sm line-through">{service.marketPrice}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 cyber-text neon-pulse">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-cyan-400">The advantages that set us apart</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 cyber-card">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">20+ years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 cyber-card">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 cyber-card">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">300% average ROI for our implementations</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 cyber-card">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center cyber-card">
              <h2 className="text-4xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-cyan-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business. 
                Get a free consultation and custom solution recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
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