'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Users, TrendingUp, Phone, Mail, MapPin, Clock, BarChart, Target, Lock, Cpu, Server, Network, HardDrive, Monitor, Wifi, FileText, Code, Search, Globe as GlobeIcon, Smartphone as SmartphoneIcon, CreditCard, Calendar, FileText as FileTextIcon, Search as SearchIcon, Globe as GlobeIcon2, Smartphone as SmartphoneIcon2, CreditCard as CreditCardIcon, Calendar as CalendarIcon, Lock as LockIcon, BarChart as BarChartIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Settings as SettingsIcon, Database as DatabaseIcon, Cloud as CloudIcon, Shield as ShieldIcon, Zap as ZapIcon } from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  link: string;
  benefits: string[];
}

const ItServicesPage: React.FC = () => {
  const itServices: ITService[] = [
    // Core IT Services
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration to AWS, Azure, or Google Cloud with 99.9% uptime guarantee and 24/7 expert support.',
      features: ['Zero Downtime Migration', 'Multi-cloud Support', 'Cost Optimization', 'Security Compliance', '24/7 Monitoring'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true,
      link: '/cloud-migration',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and flexibility', 'Enhance security and compliance']
    },
    {
      id: '2',
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Automated Response', 'Compliance Monitoring', 'Risk Analysis'],
      price: 'Starting at $799/month',
      category: 'Security',
      popular: true,
      link: '/cybersecurity-suite',
      benefits: ['Protect against 99.9% of threats', 'Reduce security incidents by 85%', 'Ensure regulatory compliance']
    },
    {
      id: '3',
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration'],
      price: 'Starting at $599/month',
      category: 'Development',
      popular: false,
      link: '/devops-cicd',
      benefits: ['Reduce deployment time by 80%', 'Improve code quality', 'Enable faster time-to-market']
    },
    {
      id: '4',
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, migration, and management with AI-powered performance tuning.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'Starting at $399/month',
      category: 'Data Management',
      popular: false,
      link: '/database-management',
      benefits: ['Improve database performance by 60%', 'Reduce downtime by 90%', 'Ensure data integrity']
    },
    {
      id: '5',
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,299/month',
      category: 'Development',
      popular: false,
      link: '/web-development',
      benefits: ['Create modern, scalable web apps', 'Improve user experience', 'Optimize for search engines']
    },
    {
      id: '6',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with AI integration and modern UX design.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: false,
      link: '/mobile-app-development',
      benefits: ['Reach customers on all devices', 'Improve user engagement', 'Increase business visibility']
    },
    {
      id: '7',
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: false,
      link: '/process-automation',
      benefits: ['Reduce manual work by 70%', 'Improve accuracy and consistency', 'Free up staff for strategic tasks']
    },
    {
      id: '8',
      icon: Users,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'Managed Services',
      popular: true,
      link: '/managed-it-services',
      benefits: ['Reduce IT costs by 30%', 'Improve system reliability', 'Focus on core business']
    },
    // Advanced IT Services
    {
      id: '9',
      icon: BarChart,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'Consulting',
      popular: false,
      link: '/it-consulting',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Plan for future growth']
    },
    {
      id: '10',
      icon: Network,
      title: 'Network Solutions',
      description: 'Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.',
      features: ['Network Design', 'VPN Solutions', 'Load Balancing', 'Security Implementation', '24/7 Monitoring'],
      price: 'Starting at $699/month',
      category: 'Infrastructure',
      popular: false,
      link: '/network-solutions',
      benefits: ['Improve network performance', 'Enhance security', 'Enable remote work']
    },
    {
      id: '11',
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery.',
      features: ['Automated Backups', 'Instant Recovery', 'Disaster Recovery', 'Data Encryption', 'Compliance'],
      price: 'Starting at $199/month',
      category: 'Data Protection',
      popular: false,
      link: '/data-backup-recovery',
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity']
    },
    {
      id: '12',
      icon: Monitor,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations.',
      features: ['Real-time Monitoring', 'Performance Alerts', 'Optimization Recommendations', 'Capacity Planning', 'Trend Analysis'],
      price: 'Starting at $299/month',
      category: 'Monitoring',
      popular: false,
      link: '/it-performance-monitoring',
      benefits: ['Prevent system failures', 'Optimize performance', 'Reduce downtime']
    },
    {
      id: '13',
      icon: Server,
      title: 'IT Infrastructure Setup',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,499/month',
      category: 'Infrastructure',
      popular: false,
      link: '/it-infrastructure-setup',
      benefits: ['Build reliable IT foundation', 'Ensure scalability', 'Implement best practices']
    },
    {
      id: '14',
      icon: Lock,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with AI-powered threat detection and automated response.',
      features: ['24/7 Monitoring', 'AI Threat Detection', 'Automated Response', 'Incident Management', 'Compliance Reporting'],
      price: 'Starting at $499/month',
      category: 'Security',
      popular: false,
      link: '/security-monitoring',
      benefits: ['Detect threats in real-time', 'Respond to incidents faster', 'Maintain compliance']
    },
    {
      id: '15',
      icon: FileText,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization.',
      features: ['Asset Tracking', 'Maintenance Scheduling', 'Cost Optimization', 'License Management', 'Depreciation Tracking'],
      price: 'Starting at $149/month',
      category: 'Asset Management',
      popular: false,
      link: '/it-asset-management',
      benefits: ['Optimize asset utilization', 'Reduce costs', 'Ensure compliance']
    },
    {
      id: '16',
      icon: Wifi,
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance.',
      features: ['99.9% Uptime', 'SSL Certificates', 'CDN Integration', 'Regular Updates', 'Performance Monitoring'],
      price: 'Starting at $49/month',
      category: 'Hosting',
      popular: false,
      link: '/website-hosting',
      benefits: ['Ensure website availability', 'Improve performance', 'Maintain security']
    },
    {
      id: '17',
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and remote control.',
      features: ['Device Security', 'App Management', 'Remote Control', 'Policy Enforcement', 'Data Protection'],
      price: 'Starting at $99/month',
      category: 'Mobile Management',
      popular: false,
      link: '/mobile-device-management',
      benefits: ['Secure mobile devices', 'Control app access', 'Protect corporate data']
    },
    {
      id: '18',
      icon: Shield,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting.',
      features: ['Regulatory Compliance', 'Audit Trails', 'Compliance Reporting', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Compliance',
      popular: false,
      link: '/compliance-audit-services',
      benefits: ['Meet regulatory requirements', 'Reduce audit risks', 'Maintain documentation']
    },
    {
      id: '19',
      icon: Users,
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users.',
      features: ['Custom Training Programs', 'End-user Support', 'Technical Documentation', 'Video Tutorials', 'Certification'],
      price: 'Starting at $199/month',
      category: 'Training',
      popular: false,
      link: '/it-training-support',
      benefits: ['Improve team skills', 'Reduce support tickets', 'Increase productivity']
    },
    {
      id: '20',
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives.',
      features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management', 'Quality Assurance'],
      price: 'Starting at $399/month',
      category: 'Project Management',
      popular: false,
      link: '/it-project-management',
      benefits: ['Ensure project success', 'Manage resources effectively', 'Deliver on time and budget']
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Development', 'Data Management', 'Mobile Development', 'Automation', 'Managed Services', 'Consulting', 'Infrastructure', 'Data Protection', 'Monitoring', 'Asset Management', 'Hosting', 'Mobile Management', 'Compliance', 'Training', 'Project Management'];

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system reliability and uptime',
    'Enhance security and compliance',
    'Enable digital transformation',
    'Scale infrastructure as you grow',
    'Focus on core business activities',
    'Access to latest technologies',
    '24/7 expert support and monitoring'
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered IT solutions'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Guaranteed system availability'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Client Rating',
      description: 'Highly rated by our clients'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock IT support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting for businesses of all sizes." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, network solutions, data backup, IT support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
              From cloud migration to cybersecurity, we deliver comprehensive technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of IT services designed to solve specific business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver IT solutions that drive real business value and measurable results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How We Deliver IT Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful IT implementation and maximum ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>
                <p className="text-gray-300">We analyze your current IT infrastructure and create a comprehensive plan for improvement.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">Our experts implement the IT solutions with minimal disruption to your business operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Support & Optimization</h3>
                <p className="text-gray-300">We provide ongoing support and continuously optimize your IT infrastructure for peak performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your IT needs and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
