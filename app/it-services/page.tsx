'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, HardDrive, Lock, FileText, Activity, ArrowRight, Code, Cog, Globe, Users, Target, Award, Rocket, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure & Cloud Services
    {
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      icon: HardDrive,
      features: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '24/7 support'],
      price: 'Starting at $800/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologies: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
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
    // Cybersecurity Services
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: Shield,
      features: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      price: 'Starting at $2,500/month',
      category: 'Security',
      benefits: ['Prevent 99.9% of threats', 'Reduce response time by 80%', 'Compliance assurance', '24/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      icon: Lock,
      features: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      price: 'Starting at $1,800/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Simplified access', 'Compliance ready', 'Reduced risk'],
      technologies: ['Okta', 'Azure AD', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Database & Analytics
    {
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and 24/7 monitoring.',
      icon: Database,
      features: ['Database design', 'Performance optimization', 'Migration services', 'Backup & recovery', 'Monitoring', 'Security hardening'],
      price: 'Starting at $1,200/month',
      category: 'Database',
      benefits: ['Improved performance', 'Enhanced security', 'Reduced downtime', 'Cost optimization'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence & Analytics',
      description: 'Transform your data into actionable insights with advanced BI solutions and real-time analytics.',
      icon: Activity,
      features: ['Data visualization', 'Real-time dashboards', 'Predictive analytics', 'Data warehousing', 'ETL processes', 'Custom reporting'],
      price: 'Starting at $2,000/month',
      category: 'Analytics',
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Competitive advantage', 'Cost savings'],
      technologies: ['Tableau', 'Power BI', 'QlikView', 'Looker', 'Apache Spark', 'Hadoop'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // DevOps & Automation
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Streamline your development process with automated CI/CD pipelines and infrastructure as code.',
      icon: Settings,
      features: ['CI/CD setup', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Automated testing'],
      price: 'Starting at $1,800/month',
      category: 'DevOps',
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration', 'Enhanced security'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Automation & Orchestration',
      description: 'Automate repetitive tasks and streamline IT operations with intelligent automation solutions.',
      icon: Cog,
      features: ['Process automation', 'Workflow orchestration', 'Task scheduling', 'Error handling', 'Monitoring', 'Reporting'],
      price: 'Starting at $1,500/month',
      category: 'Automation',
      benefits: ['Reduced manual work', 'Improved accuracy', 'Faster execution', 'Cost savings'],
      technologies: ['Ansible', 'Puppet', 'Chef', 'PowerShell', 'Python', 'RPA Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Database', 'Analytics', 'DevOps', 'Automation'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From infrastructure management to cybersecurity, we provide comprehensive IT solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href="/contact"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our experts help you modernize your IT environment with cutting-edge solutions and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;