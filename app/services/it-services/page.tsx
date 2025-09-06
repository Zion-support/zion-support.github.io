import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  CloudIcon, 
  ShieldCheckIcon, 
  CogIcon, 
  ServerIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'IT Services | Zion Tech Group - Cloud, DevOps & Infrastructure Solutions',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure management, cloud computing, system administration',
};

const itServices = [
  {
    name: 'Cloud Migration & Management',
    description: 'Seamless migration to AWS, Azure, or GCP with ongoing cloud infrastructure management and optimization.',
    icon: CloudIcon,
    features: [
      'Multi-cloud strategy and migration',
      'Infrastructure as Code (IaC)',
      'Cost optimization and monitoring',
      'Disaster recovery planning',
      'Auto-scaling and load balancing',
      '24/7 cloud monitoring'
    ],
    pricing: '$10,000 - $50,000',
    timeline: '2-8 weeks',
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance'],
    href: '/services/cloud-migration'
  },
  {
    name: 'DevOps & CI/CD Implementation',
    description: 'Streamline your development workflow with automated CI/CD pipelines, containerization, and infrastructure automation.',
    icon: CogIcon,
    features: [
      'CI/CD pipeline setup',
      'Docker containerization',
      'Kubernetes orchestration',
      'Infrastructure automation',
      'Monitoring and logging',
      'Security scanning integration'
    ],
    pricing: '$15,000 - $60,000',
    timeline: '4-12 weeks',
    benefits: ['Faster Deployments', 'Reduced Errors', 'Better Collaboration', 'Improved Quality'],
    href: '/services/devops-cicd'
  },
  {
    name: 'Cybersecurity & Compliance',
    description: 'Comprehensive security solutions to protect your infrastructure, data, and ensure regulatory compliance.',
    icon: ShieldCheckIcon,
    features: [
      'Security audits and assessments',
      'Penetration testing',
      'Compliance consulting (SOC2, GDPR, HIPAA)',
      'Security monitoring and incident response',
      'Employee security training',
      'Vulnerability management'
    ],
    pricing: '$8,000 - $40,000',
    timeline: '2-6 weeks',
    benefits: ['Enhanced Security Posture', 'Regulatory Compliance', 'Risk Mitigation', 'Peace of Mind'],
    href: '/services/cybersecurity'
  },
  {
    name: 'Infrastructure Management',
    description: 'Complete infrastructure management including servers, networks, databases, and monitoring systems.',
    icon: ServerIcon,
    features: [
      'Server administration and maintenance',
      'Network design and management',
      'Database administration',
      'Backup and disaster recovery',
      'Performance monitoring and optimization',
      'Proactive maintenance and updates'
    ],
    pricing: '$5,000 - $25,000/month',
    timeline: 'Ongoing',
    benefits: ['Reduced Downtime', 'Improved Performance', 'Cost Savings', 'Expert Management'],
    href: '/services/infrastructure-management'
  },
  {
    name: 'Database Services',
    description: 'Database design, optimization, migration, and management services for all major database platforms.',
    icon: ChartBarIcon,
    features: [
      'Database design and architecture',
      'Performance tuning and optimization',
      'Data migration and consolidation',
      'Backup and recovery strategies',
      'Security hardening',
      'Monitoring and alerting'
    ],
    pricing: '$12,000 - $45,000',
    timeline: '3-10 weeks',
    benefits: ['Better Performance', 'Data Security', 'Reduced Costs', 'Improved Reliability'],
    href: '/services/database-services'
  },
  {
    name: 'IT Consulting & Strategy',
    description: 'Strategic IT consulting to align technology with business goals and optimize your IT infrastructure.',
    icon: ComputerDesktopIcon,
    features: [
      'IT strategy and roadmap development',
      'Technology assessment and recommendations',
      'Digital transformation planning',
      'Cost-benefit analysis',
      'Vendor evaluation and selection',
      'Change management support'
    ],
    pricing: '$5,000 - $30,000',
    timeline: '2-8 weeks',
    benefits: ['Strategic Alignment', 'Cost Optimization', 'Technology Roadmap', 'Informed Decisions'],
    href: '/services/it-consulting'
  }
];

const technologies = [
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'DigitalOcean', 'Linode'],
    description: 'Multi-cloud expertise'
  },
  {
    category: 'DevOps Tools',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
    description: 'Modern automation tools'
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse'],
    description: 'All major database systems'
  },
  {
    category: 'Monitoring',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'DataDog', 'Splunk'],
    description: 'Comprehensive monitoring solutions'
  }
];

const supportTiers = [
  {
    name: 'Basic Support',
    price: '$2,000/month',
    features: [
      'Business hours support (9 AM - 5 PM EST)',
      'Email and phone support',
      'Monthly health checks',
      'Basic monitoring',
      'Emergency response within 4 hours'
    ],
    ideal: 'Small businesses with basic IT needs'
  },
  {
    name: 'Professional Support',
    price: '$5,000/month',
    features: [
      'Extended hours support (7 AM - 9 PM EST)',
      'Priority phone and email support',
      'Weekly health checks',
      'Advanced monitoring and alerting',
      'Emergency response within 2 hours',
      'Monthly strategy calls'
    ],
    ideal: 'Growing businesses with critical IT systems'
  },
  {
    name: 'Enterprise Support',
    price: '$10,000/month',
    features: [
      '24/7 support coverage',
      'Dedicated account manager',
      'Daily health checks',
      'Comprehensive monitoring',
      'Emergency response within 1 hour',
      'Weekly strategy calls',
      'Custom SLA agreements'
    ],
    ideal: 'Large enterprises with mission-critical systems'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description: 'Comprehensive analysis of your current IT infrastructure and identification of improvement opportunities.',
    icon: ChartBarIcon
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Create a detailed IT strategy and roadmap aligned with your business objectives.',
    icon: ComputerDesktopIcon
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute the planned improvements with minimal disruption to your business operations.',
    icon: WrenchScrewdriverIcon
  },
  {
    step: '04',
    title: 'Monitoring & Optimization',
    description: 'Continuous monitoring and optimization to ensure peak performance and reliability.',
    icon: GlobeAltIcon
  }
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management. 
              Keep your systems running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get IT Consultation
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* IT Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.pricing}</div>
                      <div className="text-sm opacity-90">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-green-100 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, index) => (
                        <span key={index} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center w-full justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest technologies and tools to deliver cutting-edge IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.category} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.items.map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Tiers */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IT Support Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support plan that best fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div key={tier.name} className={`bg-white rounded-2xl shadow-lg p-8 ${index === 1 ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600 text-sm">{tier.ideal}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    index === 1 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our IT Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering IT solutions that align with your business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <div className="inline-flex p-3 rounded-full bg-gray-100 mb-4">
                  <step.icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your IT needs and create a solution that improves performance, security, and cost-effectiveness. 
            Our team has managed IT infrastructure for 500+ businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get IT Assessment
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}