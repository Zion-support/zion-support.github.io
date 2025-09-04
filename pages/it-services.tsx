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
        'Cost optimization and FinOps practices',
        'Disaster recovery and backup solutions'
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
        'Penetration testing and vulnerability assessments',
        'Security monitoring and incident response',
        'Identity and access management (IAM)',
        'Data encryption and privacy protection'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '8-16 weeks',
      category: 'Security'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise network solutions',
      icon: Network,
      features: [
        'Network design and architecture',
        'Wireless network design and optimization',
        'Network security and firewall management',
        'Network monitoring and performance tuning',
        'VPN and remote access solutions',
        'Network documentation and training'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '4-10 weeks',
      category: 'Infrastructure'
    },
    {
      title: 'Help Desk & Support',
      description: '24/7 technical support and help desk services for your organization',
      icon: Users,
      features: [
        '24/7 technical support',
        'Remote desktop and troubleshooting',
        'Software installation and updates',
        'Hardware procurement and management',
        'User training and documentation',
        'Incident management and escalation'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '2-6 weeks',
      category: 'Support'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Data warehousing, analytics, and business intelligence solutions',
      icon: Database,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Data governance and quality management',
        'Real-time analytics and reporting',
        'Machine learning data preparation'
      ],
      pricing: '$3,000 - $18,000/month',
      delivery: '6-14 weeks',
      category: 'Analytics'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code',
      icon: Settings,
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Monitoring and logging solutions',
        'Automated testing and quality gates',
        'DevSecOps and security integration'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '6-16 weeks',
      category: 'DevOps'
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-6">
                <Server className="h-12 w-12 text-green-600 mr-4" />
                <Award className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-green-600">IT Services</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Information Technology Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive IT services that keep your business running smoothly. From cloud infrastructure 
                to cybersecurity, we provide end-to-end technology solutions.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get Started
                </Link>
                <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
                  View Pricing <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our IT Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer a comprehensive range of IT services designed to meet your business needs
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {itServices.map((service) => (
                  <div key={service.title} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <service.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                      {service.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{service.description}</p>
                      <p className="mt-6">
                        <Link href="/contact" className="text-sm font-semibold leading-6 text-green-600">
                          Learn more <span aria-hidden="true">→</span>
                        </Link>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let us help you build a robust, secure, and scalable IT infrastructure that supports your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400">
                  Your trusted partner for comprehensive IT services and technology solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/solutions" className="text-gray-400 hover:text-white">Solutions</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2">
                  <p className="text-gray-400">+1 302 464 0950</p>
                  <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}