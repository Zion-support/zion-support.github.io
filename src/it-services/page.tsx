'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and optimization services',
      icon: Cloud,
      price: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Global deployment', '24/7 monitoring'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      marketPrice: '$3,500/month',
      savings: '$1,500/month',
      demoUrl: 'https://demo.ziontechgroup.com/cloud-services',
      caseStudy: 'https://ziontechgroup.com/case-studies/cloud-migration',
      supportEmail: 'cloud@ziontechgroup.com',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$2,499/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Auditing'],
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Zero-day protection', 'Compliance ready'],
      color: 'text-red-400',
      category: 'Security',
      marketPrice: '$4,200/month',
      savings: '$1,700/month',
      demoUrl: 'https://demo.ziontechgroup.com/cybersecurity',
      caseStudy: 'https://ziontechgroup.com/case-studies/cybersecurity-banking',
      supportEmail: 'security@ziontechgroup.com',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Zero Trust', 'SOC']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,799/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Blue-Green Deployments'],
      benefits: ['80% faster deployments', '90% fewer errors', 'Automated rollbacks', 'Zero-downtime updates'],
      color: 'text-green-400',
      category: 'DevOps',
      marketPrice: '$3,000/month',
      savings: '$1,200/month',
      demoUrl: 'https://demo.ziontechgroup.com/devops',
      caseStudy: 'https://ziontechgroup.com/case-studies/devops-saas',
      supportEmail: 'devops@ziontechgroup.com',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,299/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Query Optimization'],
      benefits: ['300% performance boost', '99.99% availability', 'Automated backups', 'Real-time monitoring'],
      color: 'text-purple-400',
      category: 'Database',
      marketPrice: '$2,200/month',
      savings: '$900/month',
      demoUrl: 'https://demo.ziontechgroup.com/database-services',
      caseStudy: 'https://ziontechgroup.com/case-studies/database-optimization',
      supportEmail: 'database@ziontechgroup.com',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra']
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and management',
      icon: Globe,
      price: '$1,599/month',
      features: ['Network Design', 'SD-WAN Implementation', 'Load Balancing', 'VPN Setup', 'Network Monitoring', 'Bandwidth Optimization'],
      benefits: ['40% faster speeds', '99.9% reliability', 'Global connectivity', 'Cost optimization'],
      color: 'text-cyan-400',
      category: 'Networking',
      marketPrice: '$2,800/month',
      savings: '$1,200/month',
      demoUrl: 'https://demo.ziontechgroup.com/network-infrastructure',
      caseStudy: 'https://ziontechgroup.com/case-studies/network-enterprise',
      supportEmail: 'network@ziontechgroup.com',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS', '5G']
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services',
      icon: Users,
      price: '$899/month',
      features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training', 'System Maintenance'],
      benefits: ['Instant response', '95% satisfaction', 'Proactive monitoring', 'User empowerment'],
      color: 'text-orange-400',
      category: 'Support',
      marketPrice: '$1,500/month',
      savings: '$600/month',
      demoUrl: 'https://demo.ziontechgroup.com/it-support',
      caseStudy: 'https://ziontechgroup.com/case-studies/it-support-enterprise',
      supportEmail: 'support@ziontechgroup.com',
      technologies: ['ServiceNow', 'Jira', 'Zendesk', 'Remote Desktop', 'Ticketing Systems']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services',
      icon: Briefcase,
      price: '$2,200/month',
      features: ['IT Strategy', 'Digital Transformation', 'Technology Assessment', 'Vendor Management', 'Compliance Consulting', 'Risk Assessment'],
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Future-proofing'],
      color: 'text-indigo-400',
      category: 'Consulting',
      marketPrice: '$3,800/month',
      savings: '$1,600/month',
      demoUrl: 'https://demo.ziontechgroup.com/it-consulting',
      caseStudy: 'https://ziontechgroup.com/case-studies/it-consulting-transformation',
      supportEmail: 'consulting@ziontechgroup.com',
      technologies: ['ITIL', 'COBIT', 'TOGAF', 'Agile', 'Scrum', 'Lean']
    },
    {
      title: 'Data Center Services',
      description: 'Enterprise data center design, implementation, and management',
      icon: Building,
      price: '$3,500/month',
      features: ['Data Center Design', 'Power & Cooling', 'Physical Security', 'Environmental Monitoring', 'Disaster Recovery', 'Compliance'],
      benefits: ['99.99% uptime', 'Energy efficiency', 'Scalable infrastructure', 'Compliance ready'],
      color: 'text-yellow-400',
      category: 'Infrastructure',
      marketPrice: '$5,500/month',
      savings: '$2,000/month',
      demoUrl: 'https://demo.ziontechgroup.com/data-center',
      caseStudy: 'https://ziontechgroup.com/case-studies/data-center-enterprise',
      supportEmail: 'datacenter@ziontechgroup.com',
      technologies: ['HVAC', 'UPS', 'Fire Suppression', 'Access Control', 'Environmental Monitoring']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      price: '$2,800/month',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Maintenance & Support'],
      benefits: ['Native performance', 'Cross-platform efficiency', 'App store success', 'Ongoing support'],
      color: 'text-pink-400',
      category: 'Development',
      marketPrice: '$4,500/month',
      savings: '$1,700/month',
      demoUrl: 'https://demo.ziontechgroup.com/mobile-development',
      caseStudy: 'https://ziontechgroup.com/case-studies/mobile-app-startup',
      supportEmail: 'mobile@ziontechgroup.com',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Cloud Computing', count: itServices.filter(s => s.category === 'Cloud Computing').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 250% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all IT infrastructure and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all IT services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class IT engineers and architects with proven track records'
    }
  ];

  const caseStudies = [
    {
      title: 'Cloud Migration Success',
      description: 'Migrated enterprise infrastructure to AWS, reducing costs by 60% and improving performance by 40%.',
      company: 'Fortune 500 Company',
      results: ['60% cost reduction', '40% performance improvement', '$3M annual savings'],
      link: '/case-studies/cloud-migration'
    },
    {
      title: 'Cybersecurity Implementation',
      description: 'Deployed comprehensive security framework, achieving 99.9% threat detection and zero breaches.',
      company: 'Financial Services Firm',
      results: ['99.9% threat detection', 'Zero security breaches', 'SOC 2 compliance'],
      link: '/case-studies/cybersecurity-banking'
    },
    {
      title: 'DevOps Transformation',
      description: 'Implemented CI/CD pipelines, reducing deployment time by 80% and increasing developer productivity by 50%.',
      company: 'SaaS Startup',
      results: ['80% faster deployments', '50% productivity increase', '90% error reduction'],
      link: '/case-studies/devops-saas'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud computing, cybersecurity, DevOps, and infrastructure management. Transform your technology infrastructure with our expert solutions."
        keywords={['IT services', 'cloud computing', 'cybersecurity', 'DevOps', 'infrastructure', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="IT Services">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Comprehensive Technology Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your technology infrastructure with our comprehensive IT services. From cloud computing and cybersecurity 
              to DevOps and infrastructure management, we deliver enterprise-grade solutions that drive business success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get IT Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">9+</div>
                <div className="text-sm text-gray-300">IT Service Categories</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$15,000+</div>
                <div className="text-sm text-gray-300">Monthly Savings</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">IT Support</div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="cyber-card px-6 py-3 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-white font-medium">{category.name}</span>
                  <span className="text-cyan-400 ml-2">({category.count})</span>
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className={`text-3xl font-bold neon-text ${service.color}`}>{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">
                      Save {service.savings}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a 
                      href={service.link} 
                      className={`w-full px-4 py-3 text-center block transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900 rounded-lg`}
                    >
                      Learn More
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a 
                        href={service.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center px-3 py-2 text-sm text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Demo
                      </a>
                      <a 
                        href={service.caseStudy}
                        className="text-center px-3 py-2 text-sm text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Case Study
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{study.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">Results:</div>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={study.link}
                    className="text-cyan-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Read Full Case Study →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our IT services today and build a robust, scalable technology foundation for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
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

export default ITServicesPage;