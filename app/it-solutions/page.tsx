import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  ChartBarIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud with 99.9% uptime guarantee.',
      href: '/cloud-infrastructure',
      icon: CloudIcon,
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      pricing: '$1,200/month',
      category: 'Cloud Services',
      popular: true
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection, vulnerability assessment, and compliance management.',
      href: '/cybersecurity',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
      pricing: '$2,000/month',
      category: 'Security'
    },
    {
      title: 'Network Infrastructure',
      description: 'Robust network design, implementation, and management for optimal performance and security.',
      href: '/network-infrastructure',
      icon: GlobeAltIcon,
      features: ['Network Design', 'Performance Optimization', 'Security Hardening', '24/7 Monitoring'],
      pricing: '$1,500/month',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes with automated pipelines and container orchestration.',
      href: '/devops-services',
      icon: CogIcon,
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging'],
      pricing: '$2,800/month',
      category: 'DevOps'
    },
    {
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery.',
      href: '/data-center-services',
      icon: ServerIcon,
      features: ['Colocation Services', 'Managed Hosting', 'Backup Solutions', 'Disaster Recovery'],
      pricing: '$3,500/month',
      category: 'Data Center'
    },
    {
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for seamless IT operations.',
      href: '/it-support',
      icon: UserGroupIcon,
      features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
      pricing: '$1,800/month',
      category: 'Support'
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for unified operations.',
      href: '/system-integration',
      icon: WrenchScrewdriverIcon,
      features: ['API Integration', 'Legacy System Migration', 'Data Synchronization', 'Custom Connectors'],
      pricing: '$2,200/month',
      category: 'Integration'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business objectives and digital transformation.',
      href: '/it-consulting',
      icon: BriefcaseIcon,
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],
      pricing: '$1,600/month',
      category: 'Consulting'
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      href: '/backup-recovery',
      icon: ShieldCheckIcon,
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Compliance Reporting'],
      pricing: '$1,400/month',
      category: 'Data Protection'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete lifecycle management of IT assets including procurement, deployment, and disposal.',
      href: '/it-asset-management',
      icon: ChartBarIcon,
      features: ['Asset Tracking', 'License Management', 'Lifecycle Planning', 'Cost Optimization'],
      pricing: '$1,200/month',
      category: 'Asset Management'
    },
    {
      title: 'Mobile Device Management',
      description: 'Secure management of mobile devices and applications across your organization.',
      href: '/mobile-device-management',
      icon: GlobeAltIcon,
      features: ['Device Enrollment', 'App Management', 'Security Policies', 'Remote Wipe'],
      pricing: '$1,000/month',
      category: 'Mobile Management'
    },
    {
      title: 'IT Documentation',
      description: 'Comprehensive documentation services for systems, processes, and procedures.',
      href: '/it-documentation',
      icon: DocumentTextIcon,
      features: ['System Documentation', 'Process Mapping', 'User Guides', 'Technical Specifications'],
      pricing: '$800/month',
      category: 'Documentation'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'DevOps', 'Data Center', 'Support', 'Integration', 'Consulting', 'Data Protection', 'Asset Management', 'Mobile Management', 'Documentation'];

  const itCapabilities = [
    {
      title: 'Cloud Computing',
      description: 'Multi-cloud strategies, migration services, and cloud-native application development',
      icon: CloudIcon
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including threat detection, compliance, and incident response',
      icon: ShieldCheckIcon
    },
    {
      title: 'Infrastructure Management',
      description: 'End-to-end infrastructure design, implementation, and ongoing management services',
      icon: ServerIcon
    },
    {
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines, infrastructure as code, and automated deployment processes',
      icon: CogIcon
    },
    {
      title: 'Data Management',
      description: 'Data backup, recovery, migration, and analytics solutions for business intelligence',
      icon: ChartBarIcon
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for unified operations',
      icon: WrenchScrewdriverIcon
    }
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and maintenance to minimize system downtime and disruptions',
      icon: ClockIcon
    },
    {
      title: 'Enhanced Security',
      description: 'Comprehensive security measures to protect your data and infrastructure',
      icon: ShieldCheckIcon
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize IT costs through efficient resource utilization and strategic planning',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business needs and requirements',
      icon: ChartBarIcon
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'MongoDB', 'PostgreSQL', 'Redis', 'Nginx', 'Apache', 'Linux', 'Windows Server', 'VMware', 'Hyper-V'
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group | Comprehensive IT Services & Infrastructure</title>
        <meta name="description" content="Complete IT solutions including cloud infrastructure, cybersecurity, DevOps, system integration, and IT support. Starting from $800/month." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, DevOps, system integration, IT support, data center, network management" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Complete IT solutions including cloud infrastructure, cybersecurity, DevOps, system integration, and IT support." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT services and infrastructure solutions to keep your business running smoothly, 
            securely, and efficiently with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Free IT Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View IT Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT expertise across all major technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itCapabilities.map((capability, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Our IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven IT solutions that deliver reliability, security, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services designed to meet all your technology needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Includes setup, monitoring & support</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={service.href} 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Work With</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry-standard tools to deliver exceptional IT solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to successful IT implementation and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Assessment & Planning</h3>
              <p className="text-gray-300">
                Comprehensive IT assessment and strategic planning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Design & Architecture</h3>
              <p className="text-gray-300">
                Custom IT architecture design and solution planning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Implementation</h3>
              <p className="text-gray-300">
                Professional implementation and configuration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">4. Monitoring & Support</h3>
              <p className="text-gray-300">
                Ongoing monitoring, maintenance, and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can improve your infrastructure, security, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Free IT Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              Schedule IT Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;