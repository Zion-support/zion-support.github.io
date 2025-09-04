import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  Settings,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Cpu,
  HardDrive,
  Wifi,
  Code,
  Terminal,
  FileText,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Brain,
  Target
} from 'lucide-react';

export default function ITServices() {
  const title = 'IT Services — Zion Tech Group';
  const description = 'Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions.';

  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design and implementation',
        'Legacy system migration and modernization',
        'Serverless computing and containerization',
        'Auto-scaling and load balancing',
        'Cloud security and compliance',
        'Cost optimization and monitoring'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions and compliance management',
      icon: Shield,
      features: [
        'Zero-trust security architecture',
        'SOC 2, GDPR, HIPAA compliance automation',
        'Penetration testing and vulnerability assessment',
        'Security monitoring and incident response',
        'Employee security training',
        '24/7 security operations center'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '6-16 weeks',
      category: 'Security Services'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise networks',
      icon: Network,
      features: [
        'Network design and architecture',
        'Wireless and wired infrastructure',
        'SD-WAN and network virtualization',
        'Network security and firewalls',
        'Performance optimization',
        '24/7 network monitoring'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '4-10 weeks',
      category: 'Infrastructure Services'
    },
    {
      title: 'Technical Support & Helpdesk',
      description: '24/7 technical support and helpdesk services',
      icon: Users,
      features: [
        'Multi-tier support structure',
        'Remote desktop and troubleshooting',
        'Knowledge base and documentation',
        'User training and onboarding',
        'Proactive issue resolution',
        'Service level agreements (SLAs)'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '2-6 weeks',
      category: 'Support Services'
    },
    {
      title: 'DevOps & Automation',
      description: 'Automated deployment pipelines and infrastructure as code',
      icon: Settings,
      features: [
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Configuration management',
        'Automated testing and deployment',
        'Monitoring and alerting',
        'Disaster recovery automation'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '4-12 weeks',
      category: 'Automation Services'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: [
        'Digital strategy and roadmap',
        'Legacy system modernization',
        'Cloud-native application development',
        'Process automation and optimization',
        'Change management and training',
        'Performance monitoring and optimization'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '12-24 weeks',
      category: 'Transformation Services'
    },
    {
      title: 'IT Management & Monitoring',
      description: 'Comprehensive IT management and monitoring services',
      icon: Monitor,
      features: [
        'IT infrastructure monitoring',
        'Performance optimization',
        'Capacity planning and scaling',
        'Incident management and resolution',
        'Asset management and tracking',
        'Compliance and audit support'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '4-10 weeks',
      category: 'Management Services'
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
    { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
    { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
    { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and maintenance',
      icon: Clock,
      stat: '99.9%'
    },
    {
      title: 'Cost Savings',
      description: 'Optimized infrastructure and processes',
      icon: Zap,
      stat: '40%'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade protection',
      icon: Shield,
      stat: '100%'
    },
    {
      title: 'Scalability',
      description: 'Flexible and scalable solutions',
      icon: TrendingUp,
      stat: 'Unlimited'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive IT Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{service.pricing}</span>
                  <span>{service.delivery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and platforms for optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <tech.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Proven results and exceptional service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-2">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-600">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive IT services and experience the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}