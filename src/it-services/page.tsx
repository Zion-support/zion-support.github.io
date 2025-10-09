'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      color: 'text-blue-400'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and ensure compliance.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Compliance', 'Security training'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Compliance assurance', 'Risk reduction', 'Peace of mind'],
      technologies: ['SIEM', 'Firewalls', 'Antivirus', 'Encryption', 'VPN', 'MFA'],
      color: 'text-red-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Settings,
      features: ['CI/CD pipelines', 'Automated testing', 'Container orchestration', 'Monitoring setup', 'Infrastructure as code', 'Deployment automation'],
      price: 'Starting at $1,800/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration', 'Better quality'],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      color: 'text-green-400'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management with AI-powered performance tuning.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration', 'Monitoring'],
      price: 'Starting at $1,200/month',
      category: 'Data',
      benefits: ['Better performance', 'Data security', 'Reliable backups', 'Optimized queries'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      color: 'text-purple-400'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee.',
      icon: Cpu,
      features: ['Server management', 'Network setup', 'Security hardening', 'Backup solutions', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,000/month',
      category: 'Infrastructure',
      benefits: ['High availability', 'Scalability', 'Security', 'Reliability'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Cisco', 'Fortinet'],
      color: 'text-cyan-400'
    },
    {
      title: 'Network Solutions',
      description: 'Network design, implementation, and monitoring solutions for optimal connectivity.',
      icon: Wifi,
      features: ['Network design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security', 'Optimization'],
      price: 'Starting at $1,300/month',
      category: 'Infrastructure',
      benefits: ['Better connectivity', 'Improved security', 'Faster speeds', 'Reliable network'],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Ubiquiti', 'Meraki'],
      color: 'text-indigo-400'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for all your IT needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your critical data and infrastructure'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 40% cost reduction and 99.9% uptime for our clients'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to certified professionals with years of experience in enterprise IT'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions. Expert IT support for modern businesses."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'IT infrastructure', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Comprehensive IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Expert IT solutions for modern businesses
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, our expert IT team provides comprehensive solutions 
                to keep your business running smoothly and securely in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </section>

            {/* Services Grid */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-center mb-6">
                      <service.icon className={`w-16 h-16 mx-auto mb-4 ${service.color}`} />
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className={`text-2xl font-bold ${service.color} mb-4`}>{service.price}</div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-300">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <a
                        href={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our IT Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="cyber-card p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get started with our IT services today and experience the difference expert support can make.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button px-8 py-4 text-lg font-semibold"
                  >
                    Call (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="cyber-button px-8 py-4 text-lg font-semibold"
                    style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;
