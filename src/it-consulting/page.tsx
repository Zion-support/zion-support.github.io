'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle, Briefcase, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'Digital Strategy & Roadmap',
      description: 'Comprehensive digital transformation strategy and technology roadmap development',
      icon: Target,
      features: ['Technology Assessment', 'Digital Strategy Development', 'Technology Roadmap', 'Vendor Selection', 'ROI Analysis', 'Change Management'],
      benefits: ['Clear technology direction', 'Cost optimization', 'Risk mitigation', 'Competitive advantage']
    },
    {
      title: 'IT Architecture Design',
      description: 'Enterprise-grade IT architecture design and implementation planning',
      icon: Building,
      features: ['System Architecture Design', 'Cloud Architecture', 'Security Architecture', 'Integration Planning', 'Scalability Design', 'Performance Optimization'],
      benefits: ['Scalable solutions', 'Future-proof design', 'Cost efficiency', 'Improved performance']
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernize and migrate legacy systems to modern platforms',
      icon: Settings,
      features: ['Legacy Assessment', 'Migration Planning', 'Data Migration', 'System Integration', 'Testing & Validation', 'Training & Support'],
      benefits: ['Improved efficiency', 'Reduced maintenance', 'Better security', 'Enhanced capabilities']
    },
    {
      title: 'Cloud Migration & Optimization',
      description: 'Seamless cloud migration and optimization services',
      icon: Cloud,
      features: ['Cloud Strategy', 'Migration Planning', 'Data Migration', 'Security Configuration', 'Cost Optimization', 'Performance Tuning'],
      benefits: ['Reduced costs', 'Improved scalability', 'Enhanced security', 'Better performance']
    },
    {
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive cybersecurity assessment and implementation',
      icon: Shield,
      features: ['Security Assessment', 'Risk Analysis', 'Security Architecture', 'Compliance Auditing', 'Incident Response', 'Security Training'],
      benefits: ['Enhanced security', 'Compliance assurance', 'Risk reduction', 'Peace of mind']
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Implement DevOps practices and CI/CD pipelines for faster delivery',
      icon: Code,
      features: ['DevOps Strategy', 'CI/CD Pipeline Setup', 'Automation Implementation', 'Monitoring Setup', 'Team Training', 'Process Optimization'],
      benefits: ['Faster delivery', 'Reduced errors', 'Better collaboration', 'Improved quality']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Stethoscope, description: 'HIPAA-compliant solutions for healthcare organizations' },
    { name: 'Finance', icon: Calculator, description: 'Secure financial technology solutions' },
    { name: 'Manufacturing', icon: Factory, description: 'Industrial IoT and automation solutions' },
    { name: 'Retail', icon: Building, description: 'E-commerce and retail technology solutions' },
    { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning management systems' },
    { name: 'Government', icon: Shield, description: 'Secure government technology solutions' }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Consulting Services - Zion Tech Group"
        description="Expert IT consulting services including digital strategy, architecture design, legacy modernization, and cloud migration."
        keywords={['IT consulting', 'digital strategy', 'technology roadmap', 'legacy modernization', 'cloud migration', 'cybersecurity consulting']}
        canonicalUrl="https://ziontechgroup.com/it-consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch">
              IT Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Strategic technology guidance for digital transformation
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our expert IT consulting services. We provide strategic guidance, 
              technology roadmaps, and implementation support to help you achieve your digital transformation goals.
            </p>
          </section>

          {/* Consulting Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-pink-400 font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="/contact" 
                      className="cyber-button px-6 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="quantum-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{industry.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our IT Consulting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300 text-sm">Certified professionals with decades of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm">Track record of successful implementations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">Rapid implementation and deployment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300 text-sm">Round-the-clock support and maintenance</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our IT consulting team to discuss your technology needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITConsultingPage;