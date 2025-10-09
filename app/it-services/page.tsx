'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, Server, Network, Cpu, HardDrive, Wifi, Lock, Monitor, Smartphone, Globe, Zap, Users, BarChart, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      price: '$1,299/month',
      description: 'Complete cloud migration and management services with AWS, Azure, and Google Cloud expertise',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Configuration', '24/7 Monitoring', 'Auto-scaling'],
      benefits: ['Reduce infrastructure costs by 40%', '99.9% uptime guarantee', 'Seamless migration', 'Enhanced security'],
      marketPrice: '$2,500-6,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/cloud-services',
      popular: true
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity Solutions',
      price: '$1,799/month',
      description: 'Comprehensive cybersecurity with AI-powered threat detection, prevention, and incident response',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Management'],
      benefits: ['99.9% threat detection rate', 'Zero-day attack prevention', 'Automated response', '24/7 security monitoring'],
      marketPrice: '$3,500-10,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'XDR', 'Firewall', 'IDS/IPS', 'AI Security'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/cybersecurity',
      popular: true
    },
    {
      icon: Server,
      title: 'Enterprise IT Infrastructure',
      price: '$999/month',
      description: 'Complete IT infrastructure management with enterprise-grade servers, networks, and storage solutions',
      features: ['Server Management', 'Network Design', 'Storage Solutions', 'Backup & Recovery', 'Disaster Recovery', 'Performance Optimization'],
      benefits: ['99.9% uptime guarantee', 'Scalable infrastructure', 'Reduced downtime', 'Cost optimization'],
      marketPrice: '$2,000-5,000/month',
      category: 'Infrastructure',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'SAN/NAS', 'Load Balancers'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-infrastructure',
      popular: true
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      price: '$899/month',
      description: 'Expert database design, optimization, and management with AI-powered performance tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Monitoring & Maintenance'],
      benefits: ['50% performance improvement', 'Zero data loss', 'Automated backups', '24/7 monitoring'],
      marketPrice: '$1,500-4,000/month',
      category: 'Database Services',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/database-services',
      popular: true
    },
    {
      icon: Network,
      title: 'Network Design & Management',
      price: '$1,099/month',
      description: 'Advanced network solutions including design, implementation, monitoring, and optimization',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security', 'Performance Optimization'],
      benefits: ['Improved network performance', 'Enhanced security', 'Reduced downtime', 'Cost savings'],
      marketPrice: '$2,200-5,500/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS', 'VPN'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/network-services',
      popular: true
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD Solutions',
      price: '$1,199/month',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Release Management'],
      benefits: ['50% faster deployments', 'Reduced errors', 'Automated testing', 'Continuous monitoring'],
      marketPrice: '$2,400-6,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/devops',
      popular: true
    },
    {
      icon: Monitor,
      title: 'IT Support & Help Desk',
      price: '$699/month',
      description: '24/7 IT support and help desk services with rapid response and resolution',
      features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training', 'System Maintenance'],
      benefits: ['24/7 availability', 'Rapid response times', 'Proactive maintenance', 'User satisfaction'],
      marketPrice: '$1,400-3,500/month',
      category: 'Support Services',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'SCCM', 'Active Directory'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-support',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      price: '$599/month',
      description: 'Comprehensive mobile device management and security for enterprise mobility',
      features: ['Device Management', 'Security Policies', 'App Management', 'Remote Wipe', 'Compliance Monitoring', 'User Training'],
      benefits: ['Enhanced mobile security', 'Centralized management', 'Compliance assurance', 'Cost optimization'],
      marketPrice: '$1,200-3,000/month',
      category: 'Mobile Management',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'AirWatch', 'Jamf', 'Samsung Knox'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/mobile-management',
      popular: true
    },
    {
      icon: Globe,
      title: 'Web Development & Hosting',
      price: '$799/month',
      description: 'Professional web development and hosting services with modern technologies and security',
      features: ['Web Development', 'Hosting Services', 'SSL Certificates', 'CDN Setup', 'Performance Optimization', 'Security Hardening'],
      benefits: ['Modern web solutions', 'High performance', 'Enhanced security', 'SEO optimization'],
      marketPrice: '$1,600-4,000/month',
      category: 'Web Services',
      technologies: ['React', 'Node.js', 'WordPress', 'Drupal', 'AWS', 'CloudFlare'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/web-development',
      popular: true
    },
    {
      icon: BarChart,
      title: 'IT Consulting & Strategy',
      price: '$1,499/month',
      description: 'Strategic IT consulting to align technology with business objectives and drive digital transformation',
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis'],
      benefits: ['Strategic alignment', 'Technology optimization', 'Digital transformation', 'Improved efficiency'],
      marketPrice: '$3,000-8,000/month',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Lean', 'Six Sigma', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/it-consulting',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Proven Expertise',
      description: '15+ years of experience with Fortune 500 companies and enterprise clients'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: '24/7 support with average response time of 15 minutes for critical issues'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all IT infrastructure and data'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Certified IT professionals with specialized expertise in multiple technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg hologram-effect">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to optimize your technology infrastructure, enhance security, and drive business growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card data-stream cyber-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 cyber-rotate">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white neon-text">{service.title}</h3>
                    <p className="text-cyan-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and experience the difference professional technology management can make.
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
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;
