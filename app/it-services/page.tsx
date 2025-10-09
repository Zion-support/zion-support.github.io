'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, HardDrive, Lock, FileText, Activity, ArrowRight, Code, Cog, Globe, Users, Target, Award, Rocket, Mail, Phone, Brain, Zap, BarChart, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure & Cloud Services
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      popular: true
    },
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
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      popular: true
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      icon: Lock,
      features: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      price: 'Starting at $1,800/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Simplified access', 'Compliance ready', 'Reduced risk'],
      technologies: ['Okta', 'Azure AD', 'Ping Identity', 'CyberArk', 'SailPoint'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Database & Data Management
    {
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including setup, optimization, backup, and performance tuning.',
      icon: Database,
      features: ['Database setup', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,200/month',
      category: 'Data Management',
      benefits: ['Improved performance', 'Data security', 'Reduced downtime', 'Cost optimization'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      icon: BarChart,
      features: ['Data warehousing', 'ETL processes', 'Dashboard creation', 'Predictive analytics', 'Machine learning', 'Real-time reporting'],
      price: 'Starting at $2,000/month',
      category: 'Data Management',
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Competitive advantage', 'Cost reduction'],
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Spark', 'Python', 'R'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // DevOps & Automation
    {
      title: 'DevOps & CI/CD Implementation',
      description: 'Streamline your development process with automated CI/CD pipelines and DevOps best practices.',
      icon: Code,
      features: ['CI/CD setup', 'Automated testing', 'Deployment automation', 'Infrastructure as code', 'Monitoring', 'Team training'],
      price: 'Starting at $1,800/month',
      category: 'DevOps',
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration', 'Higher quality'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      popular: true
    },
    {
      title: 'IT Automation & Orchestration',
      description: 'Automate repetitive IT tasks and processes to improve efficiency and reduce human error.',
      icon: Zap,
      features: ['Process automation', 'Workflow orchestration', 'Script development', 'Integration setup', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,500/month',
      category: 'DevOps',
      benefits: ['Increased efficiency', 'Reduced errors', 'Cost savings', 'Better compliance'],
      technologies: ['Ansible', 'Puppet', 'Chef', 'PowerShell', 'Python', 'REST APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // Network & Infrastructure
    {
      title: 'Network Infrastructure Design',
      description: 'Design and implement secure, scalable network infrastructure for your organization.',
      icon: Globe,
      features: ['Network design', 'Security implementation', 'Performance optimization', 'Monitoring setup', 'Documentation', 'Training'],
      price: 'Starting at $2,200/month',
      category: 'Infrastructure',
      benefits: ['Secure connectivity', 'Improved performance', 'Scalable design', 'Reduced complexity'],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'SD-WAN', 'Wireless'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Help Desk',
      description: 'Comprehensive IT support services with 24/7 help desk and technical assistance.',
      icon: Users,
      features: ['24/7 help desk', 'Remote support', 'On-site assistance', 'Ticket management', 'Knowledge base', 'User training'],
      price: 'Starting at $800/month',
      category: 'Support',
      benefits: ['Faster resolution', 'Reduced downtime', 'User satisfaction', 'Cost efficiency'],
      technologies: ['ServiceNow', 'Jira Service Desk', 'Remote Desktop', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    // AI & Emerging Technologies
    {
      title: 'AI Infrastructure & Implementation',
      description: 'Deploy and manage AI/ML infrastructure with GPU clusters, model deployment, and monitoring.',
      icon: Brain,
      features: ['GPU cluster setup', 'Model deployment', 'MLOps implementation', 'Performance monitoring', 'Scaling', 'Security'],
      price: 'Starting at $3,000/month',
      category: 'AI/ML',
      benefits: ['Faster AI deployment', 'Scalable infrastructure', 'Cost optimization', 'Better performance'],
      technologies: ['NVIDIA GPUs', 'TensorFlow', 'PyTorch', 'Kubernetes', 'MLflow', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      popular: true
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with business goals and digital transformation.',
      icon: Target,
      features: ['IT strategy', 'Technology assessment', 'Digital transformation', 'Vendor selection', 'Implementation planning', 'Change management'],
      price: 'Starting at $2,500/month',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      technologies: ['Enterprise Architecture', 'Cloud Strategy', 'Security Frameworks', 'Best Practices'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Data Management', 'DevOps', 'Support', 'AI/ML', 'Consulting'];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Projects Completed', value: '1,200+' },
    { icon: TrendingUp, label: 'Uptime Guarantee', value: '99.9%' },
    { icon: Globe, label: 'Countries Served', value: '25+' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      role: 'CTO',
      content: 'Zion Tech Group transformed our infrastructure. We went from 70% uptime to 99.9% with their cloud migration services.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Financial Services',
      role: 'IT Director',
      content: 'Their cybersecurity implementation prevented multiple attacks. The ROI on their security services is incredible.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Manufacturing',
      role: 'Operations Manager',
      content: 'The DevOps implementation reduced our deployment time from 4 hours to 15 minutes. Our development team is much more productive.',
      rating: 5
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Comprehensive Technology Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, 
              we provide end-to-end technology solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                  {service.popular && (
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT infrastructure 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ITServicesPage;