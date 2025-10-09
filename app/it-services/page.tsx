import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, HardDrive, Lock, FileText, Activity, ArrowRight, Code, Cog, Globe, Users, Target, Award, Rocket, Mail, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and incident response.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance', 'Training'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk reduction', 'Peace of mind'],
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'Encryption', 'IAM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Complete database administration, optimization, and migration services for all major database platforms.',
      icon: Database,
      features: ['Database administration', 'Performance optimization', 'Backup & recovery', 'Migration', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,200/month',
      category: 'Database',
      benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Cost optimization'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {itServices.map((service, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">{service.price}</div>
                <a 
                  href="/contact" 
                  className="cyber-button inline-flex items-center px-6 py-3 text-sm font-medium"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and discover how our IT services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary px-8 py-4 text-lg font-semibold flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;