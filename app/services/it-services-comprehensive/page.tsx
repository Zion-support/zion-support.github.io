import React from 'react';
import { Link } from 'react-router-dom';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Services & Solutions | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation solutions.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, digital transformation',
};

export default function ITServicesPage() {
  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration services with ongoing management and optimization for AWS, Azure, and Google Cloud',
      icon: '☁️',
      features: [
        'Multi-Cloud Strategy Development',
        'Automated Migration Tools',
        'Cost Optimization Analysis',
        'Security & Compliance Setup',
        'Performance Monitoring',
        'Disaster Recovery Planning'
      ],
      pricing: '$5,000 - $75,000/project',
      category: 'Cloud Services',
      marketPrice: '$3,000 - $50,000/project',
      benefits: [
        '40% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        'Scalable infrastructure',
        'Enhanced security posture'
      ],
      href: '/services/cloud-migration',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Cloud Migration Inquiry'
    },
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, monitoring, and deployment strategies',
      icon: '🔄',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing Integration',
        'Monitoring & Alerting',
        'Container Orchestration',
        'GitOps Implementation'
      ],
      pricing: '$3,000 - $40,000/project',
      category: 'DevOps',
      marketPrice: '$2,000 - $30,000/project',
      benefits: [
        '80% faster deployment cycles',
        '90% reduction in deployment errors',
        'Automated testing and validation',
        'Improved team collaboration'
      ],
      href: '/services/devops-implementation',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=DevOps Implementation Inquiry'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat assessment, penetration testing, and security monitoring',
      icon: '🔒',
      features: [
        'Security Assessment & Auditing',
        'Penetration Testing',
        'Security Monitoring & SIEM',
        'Incident Response Planning',
        'Compliance Management',
        'Security Training Programs'
      ],
      pricing: '$2,500 - $50,000/project',
      category: 'Cybersecurity',
      marketPrice: '$1,500 - $35,000/project',
      benefits: [
        '99.9% threat detection accuracy',
        '24/7 security monitoring',
        'Compliance with industry standards',
        'Reduced security incidents'
      ],
      href: '/services/cybersecurity-solutions',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Cybersecurity Solutions Inquiry'
    },
    {
      title: 'Infrastructure Management',
      description: 'Complete infrastructure management services including monitoring, maintenance, and optimization',
      icon: '🖥️',
      features: [
        '24/7 Infrastructure Monitoring',
        'Proactive Maintenance',
        'Performance Optimization',
        'Capacity Planning',
        'Backup & Recovery',
        'Hardware Lifecycle Management'
      ],
      pricing: '$1,500 - $15,000/month',
      category: 'Infrastructure',
      marketPrice: '$1,000 - $12,000/month',
      benefits: [
        '99.9% infrastructure uptime',
        'Proactive issue resolution',
        'Optimized performance',
        'Reduced operational costs'
      ],
      href: '/services/infrastructure-management',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Infrastructure Management Inquiry'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation services to modernize your business processes and technology stack',
      icon: '🚀',
      features: [
        'Digital Strategy Development',
        'Process Automation',
        'Legacy System Modernization',
        'Change Management',
        'Technology Roadmap Planning',
        'ROI Analysis & Optimization'
      ],
      pricing: '$200 - $500/hour',
      category: 'Digital Transformation',
      marketPrice: '$150 - $400/hour',
      benefits: [
        'Clear transformation roadmap',
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage'
      ],
      href: '/services/digital-transformation',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Digital Transformation Inquiry'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and performance tuning',
      icon: '🗄️',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Security Hardening',
        'Monitoring & Maintenance'
      ],
      pricing: '$2,000 - $25,000/project',
      category: 'Database Services',
      marketPrice: '$1,500 - $20,000/project',
      benefits: [
        '50% improvement in query performance',
        '99.9% data availability',
        'Automated backup systems',
        'Enhanced data security'
      ],
      href: '/services/database-management',
      contactLink: 'mailto:kleber@ziontechgroup.com?subject=Database Management Inquiry'
    }
  ];

  const technologies = [
    { name: 'AWS', description: 'Amazon Web Services', icon: '☁️' },
    { name: 'Azure', description: 'Microsoft Cloud Platform', icon: '🔵' },
    { name: 'Google Cloud', description: 'Google Cloud Platform', icon: '🔴' },
    { name: 'Docker', description: 'Containerization Platform', icon: '🐳' },
    { name: 'Kubernetes', description: 'Container Orchestration', icon: '⚙️' },
    { name: 'Terraform', description: 'Infrastructure as Code', icon: '🏗️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure, enhance security, and accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-green-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Ready to Modernize Your IT?</h3>
              <p className="text-green-100">Let's discuss your IT transformation needs</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <a href="tel:+13024640950" className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                📞 +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies We Work With */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Technologies We Master
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-blue-500 mr-2">📈</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">Our Pricing:</span>
                    <span className="font-bold text-green-600">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Market Average:</span>
                    <span className="text-sm text-gray-600">{service.marketPrice}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={service.href}
                      className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={service.contactLink}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IT Success Metrics */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our IT Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <h3 className="text-xl font-semibold mb-2">Uptime Guarantee</h3>
              <p className="text-gray-300">Average uptime across all managed infrastructure</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
              <p className="text-gray-300">Successful IT implementations and migrations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-300">Average cost savings for our clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-300">Round-the-clock technical support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our IT experts are ready to help you modernize your infrastructure, enhance security, and accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Schedule IT Consultation
            </a>
            <a 
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300">
                Leading IT services provider specializing in cloud migration, DevOps, cybersecurity, and digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">IT Services</h4>
              <div className="space-y-2">
                <Link to="/services/cloud-migration" className="block text-gray-300 hover:text-green-400">Cloud Migration</Link>
                <Link to="/services/devops-implementation" className="block text-gray-300 hover:text-green-400">DevOps</Link>
                <Link to="/services/cybersecurity-solutions" className="block text-gray-300 hover:text-green-400">Cybersecurity</Link>
                <Link to="/services/digital-transformation" className="block text-gray-300 hover:text-green-400">Digital Transformation</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}