'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Shield, Cloud, Brain, Users, Award, Target, BarChart, Zap, Globe, Star, ArrowRight, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const EnterprisePage: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Transform your data into actionable insights with our enterprise-grade AI analytics platform.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Machine learning models'],
      icon: BarChart,
      category: 'AI & Analytics'
    },
    {
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable, secure, and reliable cloud solutions designed for enterprise workloads.',
      features: ['Multi-cloud support', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      icon: Cloud,
      category: 'Cloud Services'
    },
    {
      title: 'Enterprise Security Suite',
      description: 'Comprehensive security solutions to protect your enterprise from evolving threats.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security audits', 'Compliance management'],
      icon: Shield,
      category: 'Cybersecurity'
    },
    {
      title: 'AI Automation Platform',
      description: 'Streamline your enterprise processes with intelligent automation solutions.',
      features: ['Process automation', 'Workflow optimization', 'RPA implementation', 'Custom bots'],
      icon: Brain,
      category: 'AI & Automation'
    },
    {
      title: 'Data Management System',
      description: 'Organize, secure, and optimize your enterprise data infrastructure.',
      features: ['Data migration', 'Backup solutions', 'Data governance', 'Performance tuning'],
      icon: Target,
      category: 'Data Management'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamlessly integrate your existing systems with our enterprise integration platform.',
      features: ['API management', 'System integration', 'Data synchronization', 'Legacy modernization'],
      icon: Zap,
      category: 'Integration'
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'Secure, compliant solutions for banking, insurance, and fintech companies.',
      icon: Building,
      features: ['Regulatory compliance', 'Risk management', 'Fraud detection', 'Real-time processing']
    },
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.',
      icon: Users,
      features: ['Patient data security', 'Telemedicine platforms', 'AI diagnostics', 'Workflow automation']
    },
    {
      name: 'Manufacturing',
      description: 'IoT and AI solutions for smart manufacturing and supply chain optimization.',
      icon: Globe,
      features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'IoT integration']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Omnichannel solutions for retail and e-commerce businesses.',
      icon: Star,
      features: ['Customer analytics', 'Inventory management', 'Personalization', 'Multi-channel integration']
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Solutions that grow with your business, handling millions of users and transactions.',
      icon: TrendingUp
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with bank-level encryption and compliance standards.',
      icon: Shield
    },
    {
      title: 'Reliability',
      description: '99.9% uptime guarantee with redundant systems and disaster recovery.',
      icon: CheckCircle
    },
    {
      title: 'Support',
      description: '24/7 dedicated support with enterprise-grade SLAs and response times.',
      icon: MessageSquare
    }
  ];

  return (
    <>
      <SEOOptimizer 
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations. AI, cloud, security, and integration services."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Enterprise Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive, scalable, and secure solutions designed for large-scale 
                enterprise operations and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
                Why Choose Our Enterprise Solutions?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
                Enterprise Solutions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {enterpriseSolutions.map((solution, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-cyan-400 text-sm font-semibold">{solution.category}</span>
                        <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
                Industries We Serve
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{industry.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can help you achieve your 
              digital transformation goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EnterprisePage;
