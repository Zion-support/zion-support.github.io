import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Server, Settings, Database, BarChart, Users, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

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
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Firewalls', 'Intrusion Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and comprehensive support.',
      icon: Server,
      features: ['Server management', 'Network setup', 'Security hardening', 'Backup solutions', 'Performance monitoring', 'Disaster recovery'],
      price: 'Starting at $999/month',
      category: 'Infrastructure',
      benefits: ['High availability', 'Scalable solutions', 'Cost efficiency', 'Expert support'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory', 'Exchange'],
      color: 'text-green-400'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      icon: Settings,
      features: ['CI/CD pipelines', 'Automated testing', 'Infrastructure as Code', 'Monitoring', 'Deployment automation', 'Performance optimization'],
      price: 'Starting at $1,200/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration', 'Better quality'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, migration, and management with AI-powered performance tuning.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Migration services', 'Backup & recovery', 'Security hardening', 'Monitoring'],
      price: 'Starting at $800/month',
      category: 'Data',
      benefits: ['Optimized performance', 'Data security', 'Reduced downtime', 'Cost efficiency'],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX and backend integration.',
      icon: Smartphone,
      features: ['Native iOS/Android', 'Cross-platform development', 'UI/UX design', 'Backend integration', 'App store deployment', 'Maintenance'],
      price: 'Starting at $3,000/month',
      category: 'Development',
      benefits: ['Modern mobile experience', 'Cross-platform compatibility', 'Scalable architecture', 'User engagement'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Firebase'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network security solutions including firewall management, VPN setup, and monitoring.',
      icon: Lock,
      features: ['Firewall management', 'VPN setup', 'Network monitoring', 'Intrusion detection', 'Access control', 'Security auditing'],
      price: 'Starting at $1,000/month',
      category: 'Security',
      benefits: ['Secure network infrastructure', 'Threat prevention', 'Compliance', '24/7 monitoring'],
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'OpenVPN', 'WireGuard', 'SNMP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence',
      description: 'Data analytics and business intelligence solutions to drive informed decision-making.',
      icon: BarChart,
      features: ['Data visualization', 'Dashboard creation', 'Report automation', 'Predictive analytics', 'KPI tracking', 'Data integration'],
      price: 'Starting at $1,800/month',
      category: 'Analytics',
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Competitive advantage', 'Cost savings'],
      technologies: ['Power BI', 'Tableau', 'QlikView', 'Python', 'R', 'SQL Server'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business objectives and drive digital transformation.',
      icon: Users,
      features: ['Technology assessment', 'Strategic planning', 'Digital transformation', 'Process optimization', 'Change management', 'Training'],
      price: 'Starting at $150/hour',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Technology roadmap', 'Process improvement', 'Competitive advantage'],
      technologies: ['Enterprise Architecture', 'ITIL', 'Agile', 'DevOps', 'Cloud Strategy', 'Security Frameworks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'Data', 'Analytics', 'Consulting'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and business intelligence solutions."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'database management', 'business intelligence', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to support and optimize your business infrastructure. 
              From cloud migration to cybersecurity, we provide end-to-end solutions.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Category: {service.category}</div>
                  </div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our IT services can optimize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
};

export default ITServicesPage;
