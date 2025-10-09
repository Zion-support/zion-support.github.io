import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Server, 
  Settings, 
  Shield, 
  Zap, 
  Brain,
  Target,
  TrendingUp,
  Users,
  Database,
  Smartphone,
  Globe,
  Clock,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  Activity,
  FileText,
  BarChart,
  Lock,
  RefreshCw,
  Monitor,
  HardDrive
} from 'lucide-react';

const SystemAdminPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Intelligent system monitoring that uses machine learning to predict issues, optimize performance, and automatically resolve common problems.',
      benefits: ['Predictive maintenance', 'Auto-healing systems', 'Performance optimization', 'Anomaly detection']
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive management of servers, networks, storage, and cloud resources with centralized control and automation.',
      benefits: ['Centralized management', 'Automated provisioning', 'Resource optimization', 'Capacity planning']
    },
    {
      icon: Shield,
      title: 'Security Administration',
      description: 'Advanced security administration including user access management, vulnerability patching, and compliance monitoring.',
      benefits: ['Access control', 'Security patching', 'Compliance monitoring', 'Threat prevention']
    },
    {
      icon: Zap,
      title: 'Automated Operations',
      description: 'Fully automated system operations including backups, updates, maintenance, and disaster recovery procedures.',
      benefits: ['Automated backups', 'Scheduled maintenance', 'Disaster recovery', 'Update management']
    }
  ];

  const adminServices = [
    {
      title: 'Server Administration',
      description: 'Complete server management including Windows, Linux, and cloud servers.',
      price: 'Starting at $299/month',
      features: ['OS management', 'Performance tuning', 'Security hardening', 'Backup management'],
      icon: Server
    },
    {
      title: 'Network Administration',
      description: 'Network infrastructure management including routers, switches, and firewalls.',
      price: 'Starting at $399/month',
      features: ['Network monitoring', 'Traffic optimization', 'Security configuration', 'Troubleshooting'],
      icon: Globe
    },
    {
      title: 'Database Administration',
      description: 'Database management and optimization for SQL Server, MySQL, PostgreSQL, and more.',
      price: 'Starting at $499/month',
      features: ['Performance tuning', 'Backup & recovery', 'Security management', 'Capacity planning'],
      icon: Database
    },
    {
      title: 'Cloud Administration',
      description: 'Cloud infrastructure management across AWS, Azure, and Google Cloud.',
      price: 'Starting at $599/month',
      features: ['Multi-cloud management', 'Cost optimization', 'Security configuration', 'Auto-scaling'],
      icon: Cloud
    }
  ];

  const systemTypes = [
    { name: 'Windows Servers', description: 'Windows Server administration and optimization', coverage: '100%' },
    { name: 'Linux Systems', description: 'Linux server management and administration', coverage: '100%' },
    { name: 'Cloud Infrastructure', description: 'AWS, Azure, and GCP administration', coverage: '100%' },
    { name: 'Virtualization', description: 'VMware, Hyper-V, and container management', coverage: '95%' },
    { name: 'Network Equipment', description: 'Cisco, Juniper, and enterprise networking', coverage: '90%' },
    { name: 'Storage Systems', description: 'SAN, NAS, and cloud storage management', coverage: '95%' }
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA-compliant system administration for medical facilities' },
    { name: 'Finance', description: 'PCI DSS compliant system management for financial institutions' },
    { name: 'E-commerce', description: 'High-availability system administration for online businesses' },
    { name: 'Manufacturing', description: 'Industrial system management with IoT integration' },
    { name: 'Education', description: 'Campus-wide system administration for schools and universities' },
    { name: 'Government', description: 'Secure system administration for government agencies' }
  ];

  const stats = [
    { number: '99.9%', label: 'System Uptime', icon: Clock },
    { number: '50%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Monitoring Coverage', icon: Activity },
    { number: '15min', label: 'Response Time', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Server className="w-4 h-4 mr-2" />
            AI-Powered System Administration
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            System Administration
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive system administration services powered by AI and automation. Keep your infrastructure running smoothly with intelligent monitoring, automated maintenance, and proactive problem resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
            >
              Get System Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              System Administration Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered system administration platform provides comprehensive infrastructure management and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Administration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive system administration services for all your infrastructure needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adminServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              System Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support all major operating systems, platforms, and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{system.name}</h3>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {system.coverage}
                  </span>
                </div>
                <p className="text-gray-300">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized system administration solutions for different industries and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Administration Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for system administration services. All plans include 24/7 monitoring and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$299<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic server monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic maintenance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Backup management
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$599<span className="text-lg text-green-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  AI-powered monitoring
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  24/7 support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Automated maintenance
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Security management
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Performance optimization
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-white text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">Custom<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI administration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated team
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-site support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-glove service
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all text-center block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Optimize Your Infrastructure
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI-powered system administration keep your infrastructure running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-600 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemAdminPage;