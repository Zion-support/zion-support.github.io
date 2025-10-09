import React from 'react';
import { Server, Shield, Cloud, Database, Network, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure solutions for scalable and secure business operations.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure optimization', 'Cost management', 'Security compliance', 'Monitoring & alerting', 'Disaster recovery'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with real-time threat detection and automated response.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance reporting', 'Penetration testing'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', 'Peace of mind'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'NGFW', 'WAF'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Expert database administration and optimization services for peak performance.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services', '24/7 monitoring'],
      price: 'Starting at $1,200/month',
      category: 'Database',
      benefits: ['Improved performance', 'Data security', 'Reduced downtime', 'Cost optimization'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Solutions',
      description: 'Robust network infrastructure design and management for seamless connectivity.',
      icon: Network,
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Troubleshooting', 'Upgrade planning', 'Vendor management'],
      price: 'Starting at $1,000/month',
      category: 'Networking',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Improved performance', 'Reduced complexity'],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'System Administration',
      description: 'Comprehensive system administration services for Windows and Linux environments.',
      icon: Settings,
      features: ['Server management', 'User administration', 'Security updates', 'Performance monitoring', 'Backup management', 'Disaster recovery'],
      price: 'Starting at $800/month',
      category: 'Administration',
      benefits: ['System reliability', 'Security compliance', 'Reduced downtime', 'Cost efficiency'],
      technologies: ['Windows Server', 'Linux', 'Active Directory', 'PowerShell', 'Bash', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const benefits = [
    '24/7 Expert Support',
    'Proactive Monitoring',
    'Scalable Solutions',
    'Cost Optimization',
    'Security First Approach',
    'Rapid Response Times'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services and solutions by Zion Tech Group." />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">IT Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT services and solutions that keep your business running smoothly and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Contact Us
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;