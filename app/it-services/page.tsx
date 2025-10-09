import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Cloud, Server, Database, Network, Monitor } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
        'Cloud Migration Services',
        'Disaster Recovery Planning',
        'Security Implementation',
        '24/7 Technical Support'
      ],
      benefits: [
        'Reduce downtime by 99.9%',
        'Improve system performance',
        'Enhance security posture',
        'Lower operational costs'
      ],
      marketPrice: '$3,000-8,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes']
    },
    {
      title: 'Cloud Computing Solutions',
      description: 'Complete cloud migration, optimization, and management services for modern businesses.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration & Implementation',
        'Cost Optimization',
        'Security & Compliance',
        'Performance Monitoring',
        'Auto-scaling Solutions'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability',
        'Enhance security',
        'Increase flexibility'
      ],
      marketPrice: '$2,500-6,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'Kubernetes']
    },
    {
      title: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions to protect your business from evolving threats.',
      icon: '🔒',
      price: '$2,500/month',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Compliance Implementation',
        'Security Training',
        'Incident Response Planning'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure compliance',
        'Reduce security risks',
        'Improve security posture'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption']
    },
    {
      title: 'Data Management & Analytics',
      description: 'Advanced data management, analytics, and business intelligence solutions.',
      icon: '📊',
      price: '$1,800/month',
      features: [
        'Data Warehousing',
        'ETL/ELT Processes',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics',
        'Data Governance'
      ],
      benefits: [
        'Make data-driven decisions',
        'Improve business insights',
        'Optimize operations',
        'Enhance customer experience'
      ],
      marketPrice: '$3,000-7,000/month',
      category: 'Data & Analytics',
      technologies: ['Snowflake', 'BigQuery', 'Tableau', 'Power BI', 'Python', 'R']
    },
    {
      title: 'Network Solutions',
      description: 'Complete network design, implementation, and management for optimal connectivity.',
      icon: '🌐',
      price: '$1,200/month',
      features: [
        'Network Design & Planning',
        'Wireless Solutions',
        'VPN Implementation',
        'Load Balancing',
        'Network Monitoring',
        'Performance Optimization'
      ],
      benefits: [
        'Improve network performance',
        'Enhance connectivity',
        'Reduce downtime',
        'Optimize bandwidth usage'
      ],
      marketPrice: '$2,000-5,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Meraki', 'SD-WAN']
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Professional IT support and helpdesk services for seamless operations.',
      icon: '🛠️',
      price: '$800/month',
      features: [
        '24/7 Technical Support',
        'Remote Assistance',
        'Hardware & Software Support',
        'User Training',
        'Issue Resolution',
        'Preventive Maintenance'
      ],
      benefits: [
        'Reduce IT downtime',
        'Improve user productivity',
        'Lower support costs',
        'Enhance user satisfaction'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'SCCM', 'Active Directory']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services including infrastructure management, cloud solutions, cybersecurity, and data analytics. Transform your business with our expert IT support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud computing, cybersecurity, data analytics, network solutions, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Professional IT Solutions for Modern Businesses
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
                Transform your business with our comprehensive IT services including infrastructure management, 
                cloud solutions, cybersecurity, and data analytics. We provide expert support to keep your 
                technology running smoothly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our IT Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href="/contact"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors inline-block"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-4 bg-gray-800/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose Zion Tech Group?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300">Certified professionals with years of experience in IT solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300">Track record of successful IT implementations and optimizations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300">Serving clients worldwide with local expertise</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today for a free consultation and discover how our IT services 
                can help your business thrive in the digital age.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Free Consultation
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