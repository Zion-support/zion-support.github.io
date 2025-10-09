import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Server, Database, BarChart, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      title: "Cloud Migration Services",
      description: "Comprehensive cloud migration, setup, and optimization services for AWS, Azure, and Google Cloud.",
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      category: "Infrastructure",
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity solutions with real-time threat detection and automated response.",
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance reporting', 'Penetration testing'],
      category: "Security",
      benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', 'Peace of mind'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Firewalls', 'Intrusion Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: "IT Infrastructure",
      description: "Enterprise-grade IT infrastructure with 99.9% uptime guarantee and comprehensive support.",
      icon: Server,
      features: ['Network setup', 'Server management', 'Backup solutions', 'Disaster recovery', 'Performance monitoring', '24/7 support'],
      category: "Infrastructure",
      benefits: ['Reliable infrastructure', 'Reduced downtime', 'Improved efficiency', 'Cost savings'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory', 'Exchange'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: "Database Management",
      description: "Expert database design, optimization, and management services for all major database platforms.",
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration services', 'Security hardening', 'Monitoring'],
      category: "Data",
      benefits: ['Optimized performance', 'Data security', 'Reduced costs', 'Improved reliability'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our comprehensive BI solutions.",
      icon: BarChart,
      features: ['Data visualization', 'Dashboard creation', 'Report automation', 'Predictive analytics', 'KPI tracking', 'Custom solutions'],
      category: "Analytics",
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Better insights', 'Competitive advantage'],
      technologies: ['Power BI', 'Tableau', 'QlikView', 'Python', 'R', 'SQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions and optimize your IT investments.",
      icon: Users,
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Cost optimization', 'Digital transformation', 'Change management'],
      category: "Consulting",
      benefits: ['Strategic guidance', 'Cost savings', 'Risk mitigation', 'Competitive advantage'],
      technologies: ['IT Strategy', 'Architecture Design', 'Process Optimization', 'Technology Evaluation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and business intelligence solutions." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to transform your business with cutting-edge technology and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-400 mt-4">
                  {service.contactInfo}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your IT needs and discover how our expert services can help your business thrive.
            </p>
            <a
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;