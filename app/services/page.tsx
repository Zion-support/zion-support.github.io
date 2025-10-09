import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link } from 'lucide-react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
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
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      icon: Cloud,
      features: ['AWS/Azure/GCP Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
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
      title: 'IT Support',
      description: '24/7 technical support and maintenance services.',
      icon: Settings,
      features: ['Remote Support', 'System Monitoring', 'Proactive Maintenance', 'Help Desk'],
      path: '/it-support'
    },
    {
      title: 'Database Management',
      description: 'Optimize and secure your database infrastructure.',
      icon: Database,
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      path: '/database-management'
    }
  ];

  const microSaasServices = [
    {
      title: 'Custom Micro SAAS',
      description: 'Build tailored software solutions for your specific business needs.',
      icon: Code,
      features: ['Custom Development', 'User Management', 'Payment Integration', 'Analytics Dashboard'],
      path: '/micro-saas'
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'support@ziontechgroup.com',
    address: 'Middletown, DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including automation, cloud infrastructure, cybersecurity, and custom development solutions." />
        <meta name="keywords" content="AI services, IT consulting, cloud infrastructure, cybersecurity, automation, custom development" />
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
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
          </section>

          {/* AI Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-10 h-10 text-cyan-400 mr-3" />
                AI Services
              </h2>
              <p className="text-xl text-gray-300">Cutting-edge artificial intelligence solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services */}
          <section className="container mx-auto px-4 py-16 bg-white/5">
            <div className="text-center mb-12">
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business. 
                Get a free consultation and custom solution recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.phone}
                </a>
                <a
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
      </div>
    </>
  );
};

export default ServicesPage;
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
