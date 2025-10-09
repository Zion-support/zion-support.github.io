import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Cloud Migration & Optimization',
        'Disaster Recovery Planning',
        'Security Implementation',
        'Performance Optimization'
      ],
      benefits: [
        'Reduce downtime by 99.9%',
        'Improve system performance by 50%',
        'Lower operational costs by 30%',
        'Enhance security posture'
      ],
      marketPrice: '$3,000-5,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'VMware', 'Cisco', 'Dell', 'HP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'Cloud Services & Migration',
      description: 'Complete cloud transformation services including migration, optimization, and ongoing management.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Services',
        'Multi-Cloud Management',
        'Cost Optimization',
        'Security & Compliance',
        '24/7 Monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance disaster recovery',
        'Increase operational efficiency'
      ],
      marketPrice: '$2,500-4,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced cybersecurity services to protect your organization from evolving threats.',
      icon: '🛡️',
      price: '$2,500/month',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Compliance & Governance',
        'Security Training',
        'Incident Response'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure compliance requirements',
        'Reduce security risks by 90%',
        'Improve security awareness'
      ],
      marketPrice: '$4,000-7,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Identity Management', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamline development and operations with modern DevOps practices and automation.',
      icon: '⚙️',
      price: '$1,800/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Automated Testing',
        'Deployment Automation'
      ],
      benefits: [
        'Accelerate software delivery',
        'Improve code quality',
        'Reduce deployment errors',
        'Increase team productivity'
      ],
      marketPrice: '$2,500-4,500/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Kubernetes', 'Docker', 'Ansible', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'Database Services',
      description: 'Comprehensive database design, optimization, and management services.',
      icon: '🗄️',
      price: '$1,200/month',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Backup & Recovery',
        'Data Migration',
        'Security Hardening',
        'Monitoring & Maintenance'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data integrity',
        'Reduce downtime',
        'Optimize costs'
      ],
      marketPrice: '$1,800-3,500/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'Network Services',
      description: 'Complete network design, implementation, and management solutions.',
      icon: '🌐',
      price: '$1,600/month',
      features: [
        'Network Design & Planning',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'VPN Implementation',
        'Network Security',
        'Performance Monitoring'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security',
        'Reduce connectivity issues',
        'Optimize bandwidth usage'
      ],
      marketPrice: '$2,200-4,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Ubiquiti', 'Palo Alto'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, DevOps, and more. Transform your technology infrastructure with our expert solutions." />
        <meta name="keywords" content="IT services, infrastructure management, cloud migration, cybersecurity, DevOps, database services, network services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Comprehensive Technology Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your technology infrastructure with our comprehensive IT services. From infrastructure management 
              to cloud migration, cybersecurity to DevOps, we provide end-to-end solutions to keep your business running smoothly.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">99.9% Uptime</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Guaranteed system availability and reliability</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">☁️</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Cloud Expertise</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Multi-cloud migration and optimization</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">⚙️</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">24/7 Support</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Round-the-clock monitoring and support</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to transform your technology infrastructure and drive business success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all inline-block"
                    >
                      Get Started Now
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      {service.contactInfo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our IT services can revolutionize your technology operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
              >
                Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;