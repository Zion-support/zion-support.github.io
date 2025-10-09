import React from 'react';
import { ArrowLeft, Briefcase, Brain, Cloud, Shield, Settings, Database, Globe, Users, CheckCircle, TrendingUp, Phone, Mail, MapPin, BarChart, Code, Target, Zap, Lock, MessageSquare, Eye, Cpu, CreditCard, Smartphone, Calendar, FileText, Search, Bot, Calculator, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation roadmap and technology strategy',
      icon: Brain,
      features: ['Technology Assessment', 'Digital Roadmap', 'Change Management', 'ROI Analysis', 'Vendor Selection', 'Implementation Planning'],
      benefits: ['Clear direction', 'Cost optimization', 'Risk mitigation', 'Competitive advantage']
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for your business',
      icon: Cloud,
      features: ['Cloud Strategy', 'Architecture Design', 'Migration Planning', 'Security Design', 'Cost Optimization', 'Performance Tuning'],
      benefits: ['Scalable infrastructure', 'Cost reduction', 'Improved performance', 'Enhanced security']
    },
    {
      title: 'Cybersecurity Strategy',
      description: 'Comprehensive security assessment and implementation strategy',
      icon: Shield,
      features: ['Security Assessment', 'Risk Analysis', 'Compliance Planning', 'Incident Response', 'Security Training', 'Policy Development'],
      benefits: ['Enhanced security', 'Compliance ready', 'Risk reduction', 'Peace of mind']
    },
    {
      title: 'DevOps Implementation',
      description: 'Streamline development and deployment processes with DevOps practices',
      icon: Settings,
      features: ['CI/CD Pipeline Design', 'Automation Strategy', 'Monitoring Setup', 'Team Training', 'Tool Selection', 'Process Optimization'],
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Improved quality']
    },
    {
      title: 'Data Strategy',
      description: 'Design and implement comprehensive data management solutions',
      icon: Database,
      features: ['Data Architecture', 'ETL Design', 'Data Governance', 'Analytics Strategy', 'Data Security', 'Compliance Planning'],
      benefits: ['Better insights', 'Data-driven decisions', 'Improved efficiency', 'Regulatory compliance']
    },
    {
      title: 'Network Design',
      description: 'Design and implement enterprise-grade network infrastructure',
      icon: Globe,
      features: ['Network Assessment', 'Architecture Design', 'Security Planning', 'Performance Optimization', 'Disaster Recovery', 'Monitoring Setup'],
      benefits: ['Reliable connectivity', 'Enhanced security', 'Better performance', 'Reduced downtime']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology stack, processes, and business requirements to understand your unique challenges and opportunities.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our assessment, we develop a comprehensive technology strategy tailored to your business goals and budget.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'We create detailed implementation plans with timelines, milestones, and resource requirements for seamless execution.',
      icon: Settings
    },
    {
      step: '04',
      title: 'Execution & Support',
      description: 'Our team works alongside yours to implement the solutions and provide ongoing support and optimization.',
      icon: CheckCircle
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Consulting Services - Zion Tech Group"
        description="Strategic IT consulting services including digital transformation, cloud architecture, cybersecurity, DevOps, and data strategy. Transform your business with expert guidance."
        keywords={['IT consulting', 'digital transformation', 'cloud architecture', 'cybersecurity strategy', 'DevOps implementation', 'data strategy', 'technology consulting']}
        canonicalUrl="https://ziontechgroup.com/it-consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              IT Consulting Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Strategic technology guidance to transform your business. 
              From digital strategy to implementation, we help you navigate the complex world of enterprise technology.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {consultingServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Services Include:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Consulting Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our IT Consulting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Knowledge</h3>
                <p className="text-gray-300 text-sm">Our team brings decades of experience in enterprise technology and digital transformation.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tailored Solutions</h3>
                <p className="text-gray-300 text-sm">Every strategy is customized to your specific business needs and industry requirements.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm">We've helped hundreds of companies achieve their digital transformation goals.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-slate-800/50 rounded-2xl p-8 border border-cyan-400/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Strategy?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert consultants help you navigate the complex world of enterprise technology. 
              Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITConsultingPage;