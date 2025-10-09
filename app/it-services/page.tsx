'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, HardDrive, Lock, FileText, Activity, ArrowRight, Code, Cog, Globe, Users, Target, Award, Rocket, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      icon: HardDrive,
      features: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '24/7 support'],
      price: 'Starting at $800/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologies: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', 'Support'],
      price: 'Starting at $1,200/month',
      category: 'Cloud Services',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Enhanced security', 'Global availability'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Compliance', 'Training'],
      price: 'Starting at $1,500/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance support', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'Firewalls', 'IDS/IPS', 'Penetration Testing', 'SOC'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management with AI-powered performance tuning and security.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Monitoring', 'Migration'],
      price: 'Starting at $1,000/month',
      category: 'Data Services',
      benefits: ['Optimized performance', 'Enhanced security', 'Reduced downtime', 'Cost savings'],
      technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring solutions.',
      icon: Settings,
      features: ['CI/CD pipelines', 'Automated testing', 'Container orchestration', 'Monitoring setup', 'Infrastructure as code', 'Support'],
      price: 'Starting at $1,200/month',
      category: 'DevOps',
      benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services with AI-powered ticket routing and resolution.',
      icon: Users,
      features: ['24/7 support', 'Ticket management', 'Remote assistance', 'Knowledge base', 'SLA compliance', 'Reporting'],
      price: 'Starting at $800/month',
      category: 'Support',
      benefits: ['Reduced downtime', 'Improved productivity', 'Better user experience', 'Cost savings'],
      technologies: ['ServiceNow', 'Jira Service Desk', 'Zendesk', 'Remote Desktop', 'Chatbots', 'AI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Data Services', count: itServices.filter(s => s.category === 'Data Services').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure, security, cloud migration, DevOps, and 24/7 support. Enterprise-grade solutions for modern businesses."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'infrastructure', 'database management', 'IT support']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <span
                key={category.name}
                className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
              >
                {category.name} ({category.count})
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 cyber-card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <span className="text-cyan-400 text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <p className="text-sm text-gray-400">{service.contactInfo}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
              <p className="text-gray-300">Advanced security measures to protect your data and systems</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support for your IT infrastructure</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with years of experience in IT solutions</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and customized IT solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-slate-800 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center border border-cyan-500/30"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITServicesPage;
