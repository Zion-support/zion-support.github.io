import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Server, Globe, BarChart, TrendingUp, Code, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions including migration, optimization, and management.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud', 'Cloud Security'],
      href: '/cloud-services',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions and threat detection.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Compliance', 'Incident Response'],
      href: '/cybersecurity',
    },
    {
      icon: Settings,
      title: 'DevOps',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation', 'Containerization'],
      href: '/devops',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and secure your databases with expert management and monitoring.',
      features: ['Database Optimization', 'Backup & Recovery', 'Performance Tuning', 'Security Hardening', 'Migration'],
      href: '/database',
    },
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Design, implement, and maintain robust IT infrastructure solutions.',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Virtualization', 'Disaster Recovery'],
      href: '/it-infrastructure',
    },
    {
      icon: Globe,
      title: 'Networking',
      description: 'Build and maintain secure, high-performance network infrastructure.',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
      href: '/networking',
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with powerful BI solutions.',
      features: ['Data Visualization', 'Reporting', 'Dashboards', 'Data Warehousing', 'Analytics'],
      href: '/business-intelligence',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Tools',
      description: 'Advanced analytics tools to help you understand and optimize your business performance.',
      features: ['Performance Analytics', 'User Behavior Analysis', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Monitoring'],
      href: '/analytics-tools',
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'Comprehensive development tools and platforms to accelerate your software development.',
      features: ['IDE Setup', 'Version Control', 'Testing Frameworks', 'Code Quality Tools', 'Deployment Automation'],
      href: '/developer-tools',
    },
    {
      icon: Target,
      title: 'Marketing Tools',
      description: 'Digital marketing tools and platforms to enhance your marketing efforts.',
      features: ['Campaign Management', 'Email Marketing', 'Social Media Tools', 'Analytics', 'Automation'],
      href: '/marketing-tools',
    },
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Minimize system downtime with proactive monitoring and maintenance.',
      percentage: '99.9%',
    },
    {
      title: 'Enhanced Security',
      description: 'Protect your business with enterprise-grade security solutions.',
      percentage: '100%',
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce IT costs through efficient resource utilization and automation.',
      percentage: '40%',
    },
    {
      title: 'Improved Performance',
      description: 'Optimize your systems for maximum performance and reliability.',
      percentage: '60%',
    },
  ];

  const technologies = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform',
    'Docker & Kubernetes',
    'Terraform & Ansible',
    'Jenkins & GitLab CI',
    'Prometheus & Grafana',
    'ELK Stack',
    'PostgreSQL & MySQL',
    'Redis & MongoDB',
    'React & Node.js',
    'Python & Java',
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud solutions, cybersecurity, DevOps, database management, and infrastructure. Expert IT support for your business."
        keywords={['IT services', 'cloud computing', 'cybersecurity', 'DevOps', 'infrastructure', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive IT Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                From cloud migration to cybersecurity, we provide end-to-end IT solutions 
                that keep your business running smoothly and securely. Our expert team 
                ensures your technology infrastructure is robust, scalable, and future-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get IT Support
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600">
                Our IT solutions deliver reliability, security, and performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-white">{benefit.percentage}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600">
                Complete IT solutions for every aspect of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-600">
                We use the latest and most reliable technologies to build your solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-gray-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Service Process
              </h2>
              <p className="text-xl text-gray-600">
                A systematic approach to delivering exceptional IT services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Assessment
                </h3>
                <p className="text-gray-600">
                  We analyze your current IT infrastructure and identify areas for improvement.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Planning
                </h3>
                <p className="text-gray-600">
                  We create a comprehensive plan tailored to your specific needs and goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Implementation
                </h3>
                <p className="text-gray-600">
                  We implement the solution with minimal disruption to your business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get IT Consultation
              </Link>
              <a
                href="tel:+1-302-464-0950"
                className="flex items-center justify-center space-x-2 bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>Call +1-302-464-0950</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;