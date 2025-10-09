import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Server, Database, BarChart, Users, Phone, CheckCircle } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with 99.9% uptime guarantee and global availability.',
      icon: Cloud,
      features: ['Cloud migration', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization', 'Multi-cloud strategy'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Reduced costs', 'Improved scalability', 'Enhanced security', 'Better performance'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions with real-time threat detection and automated response.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance reporting', 'Penetration testing'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', 'Peace of mind'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Firewalls', 'Intrusion Detection']
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and maintenance for optimal performance.',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Monitoring', 'Security hardening'],
      price: 'Starting at $1,200/month',
      category: 'Data',
      benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Cost savings'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring.',
      icon: Server,
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & alerting', 'Container orchestration', 'Version control', 'Automated testing'],
      price: 'Starting at $1,800/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Improved quality'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible']
    },
    {
      title: 'Business Intelligence',
      description: 'Data analytics and business intelligence solutions for informed decision-making.',
      icon: BarChart,
      features: ['Data visualization', 'Report generation', 'Predictive analytics', 'Dashboard creation', 'Data warehousing', 'ETL processes'],
      price: 'Starting at $1,600/month',
      category: 'Analytics',
      benefits: ['Data-driven insights', 'Better decisions', 'Improved efficiency', 'Competitive advantage'],
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Spark', 'Python', 'R']
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and helpdesk services for uninterrupted business operations.',
      icon: Users,
      features: ['24/7 support', 'Remote assistance', 'Ticket management', 'System monitoring', 'User training', 'Documentation'],
      price: 'Starting at $800/month',
      category: 'Support',
      benefits: ['Reduced downtime', 'Expert assistance', 'Proactive monitoring', 'User satisfaction'],
      technologies: ['ServiceNow', 'Jira', 'Zendesk', 'Remote Desktop', 'Monitoring Tools', 'Ticketing Systems']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to optimize your infrastructure, enhance security, 
            and drive business growth with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT environment 
              that supports your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call for Assessment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ItServicesPage;