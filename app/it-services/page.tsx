'use client';
import React, { useState, useEffect } from 'react';
import { Cpu, Cloud, Shield, Database, Settings, Users, Lock, Globe, Code, Smartphone, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin, CheckCircle, ArrowRight, Star, Award, TrendingUp, Zap, Target, BarChart, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      icon: Cloud,
      price: 'Custom Pricing',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      features: [
        'AWS, Azure, GCP migration',
        'Zero-downtime migration',
        'Data security & compliance',
        'Cost optimization',
        'Performance monitoring',
        '24/7 support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery'
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      icon: Shield,
      price: 'Custom Pricing',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: [
        'Security assessment & audit',
        'Threat detection & response',
        'Data encryption & protection',
        'Compliance management',
        'Security training',
        'Incident response'
      ],
      benefits: [
        'Protect against cyber attacks',
        'Ensure regulatory compliance',
        'Reduce security risks',
        'Improve security posture'
      ]
    },
    {
      id: 'database-management',
      name: 'Database Management',
      icon: Database,
      price: 'Custom Pricing',
      description: 'Expert database administration and optimization services for all major platforms.',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening',
        'Monitoring & maintenance',
        'Migration services'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data integrity',
        'Reduce downtime',
        'Optimize costs'
      ]
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      icon: Settings,
      price: 'Custom Pricing',
      description: 'Connect and integrate your systems for seamless data flow and improved efficiency.',
      features: [
        'API development & integration',
        'Legacy system modernization',
        'Data synchronization',
        'Workflow automation',
        'Third-party integrations',
        'Custom connectors'
      ],
      benefits: [
        'Improve data flow',
        'Reduce manual processes',
        'Enhance productivity',
        'Streamline operations'
      ]
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Stethoscope,
      description: 'HIPAA-compliant IT solutions for healthcare organizations',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      name: 'Finance',
      icon: Building,
      description: 'Secure IT infrastructure for financial institutions',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Industrial IT solutions and automation systems',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      name: 'Retail',
      icon: Smartphone,
      description: 'E-commerce and retail technology solutions',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Educational technology and learning management systems',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Secure government IT solutions and compliance',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'IT Projects Delivered' },
    { icon: Award, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: TrendingUp, value: '40%', label: 'Cost Reduction' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for modern businesses'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Comprehensive security solutions to protect your digital assets'
    },
    {
      icon: Settings,
      title: 'Custom Integration',
      description: 'Seamless integration of systems and applications'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Expert database administration and optimization services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, database management, and system integration solutions for modern businesses."
        keywords={["IT services","cloud migration","cybersecurity","database management","system integration","IT consulting"]}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure and drive business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-2">{service.description}</p>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our IT solutions are tailored for various industries and compliance requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className={`w-12 h-12 ${industry.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with industry knowledge to deliver exceptional IT solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact our IT experts to discuss your specific needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;