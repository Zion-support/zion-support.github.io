<<<<<<< HEAD
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
=======
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
import React from 'react';
import Link from 'next/link';

interface ITServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

function ITService({ title, description, price, features, benefits, icon, href }: ITServiceProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, security, and infrastructure management. Engineered for uptime, efficiency, and scalability.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help you build, secure, and scale your infrastructure for maximum performance.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Architecture"
            description="Complete cloud migration with modern architecture patterns"
            features={["Multi-cloud strategy", "Container orchestration", "Serverless architecture", "Cost optimization", "Disaster recovery"]}
            price="$15k–$50k"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD Automation"
            description="End-to-end DevOps implementation with automated pipelines"
            features={["CI/CD pipelines", "Infrastructure as Code", "Automated testing", "Deployment automation", "Environment management"]}
            price="$10k–$35k"
            icon="🔄"
          />
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Proactive monitoring and reliability engineering"
            features={["SLO/SLI definition", "Error budget management", "Incident response", "Capacity planning", "Performance optimization"]}
            price="$20k–$60k"
            icon="📊"
          />
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security hardening and compliance management"
            features={["Security assessment", "Zero Trust architecture", "Vulnerability management", "Compliance auditing", "Security monitoring"]}
            price="$12k–$40k"
            icon="🔒"
          />
          <ITServiceCard
            title="Database & Data Management"
            description="Database optimization and data pipeline management"
            features={["Database migration", "Performance tuning", "Data backup & recovery", "Data pipeline automation", "Data governance"]}
            price="$8k–$25k"
            icon="🗄️"
          />
          <ITServiceCard
            title="Network & Infrastructure"
            description="Network design, optimization, and infrastructure management"
            features={["Network architecture", "Load balancing", "CDN implementation", "VPN & connectivity", "Infrastructure monitoring"]}
            price="$10k–$30k"
            icon="🌐"
          />
          <ITServiceCard
            title="API Development & Management"
            description="RESTful and GraphQL API development with comprehensive management"
            features={["API design", "Documentation", "Rate limiting", "Authentication", "Monitoring", "Version control"]}
            price="$12k–$35k"
            icon="🔌"
          />
          <ITServiceCard
            title="Microservices Architecture"
            description="Modern microservices implementation with container orchestration"
            features={["Service design", "Container orchestration", "Service mesh", "API gateway", "Monitoring", "Scaling"]}
            price="$25k–$70k"
            icon="🏗️"
          />
          <ITServiceCard
            title="Data Center & Colocation"
            description="Physical infrastructure management and data center optimization"
            features={["Hardware management", "Power optimization", "Cooling systems", "Physical security", "Uptime monitoring", "Disaster recovery"]}
            price="$15k–$45k"
            icon="🏢"
          />
          <ITServiceCard
            title="IT Service Management (ITSM)"
            description="Complete IT service delivery and support management"
            features={["Service desk", "Incident management", "Change management", "Asset management", "Knowledge base", "SLA management"]}
            price="$18k–$50k"
            icon="🎯"
          />
          <ITServiceCard
            title="Cloud Cost Optimization"
            description="Intelligent cloud spending optimization and cost management"
            features={["Cost analysis", "Resource optimization", "Reserved instances", "Auto-scaling", "Budget alerts", "Cost forecasting"]}
            price="$8k–$25k"
            icon="💰"
          />
          <ITServiceCard
            title="Disaster Recovery & Business Continuity"
            description="Comprehensive disaster recovery planning and implementation"
            features={["Backup strategies", "Recovery testing", "RTO/RPO planning", "Failover systems", "Documentation", "Training"]}
            price="$20k–$60k"
            icon="🔄"
          />
          <ITServiceCard
            title="IT Consulting & Strategy"
            description="Strategic IT planning and digital transformation consulting"
            features={["Technology roadmap", "Digital transformation", "IT governance", "Vendor evaluation", "Budget planning", "Risk assessment"]}
            price="$8k–$25k"
            icon="💡"
          />
          <ITServiceCard
            title="Cloud Security & Compliance"
            description="Advanced cloud security implementation and compliance management"
            features={["Cloud security architecture", "Compliance frameworks", "Identity management", "Data encryption", "Audit preparation", "Security monitoring"]}
            price="$15k–$45k"
            icon="🔐"
          />
          <ITServiceCard
            title="Application Performance Monitoring"
            description="Comprehensive APM solutions with real-time monitoring and optimization"
            features={["Real-time monitoring", "Performance analytics", "Error tracking", "User experience monitoring", "Alerting systems", "Performance optimization"]}
            price="$10k–$30k"
            icon="📈"
          />
          <ITServiceCard
            title="IT Asset Management"
            description="Complete IT asset lifecycle management and optimization"
            features={["Asset inventory", "License management", "Lifecycle tracking", "Cost optimization", "Compliance reporting", "Automated discovery"]}
            price="$12k–$35k"
            icon="📋"
          />
          <ITServiceCard
            title="Cloud Cost Management"
            description="Intelligent cloud spending optimization and budget management"
            features={["Cost analysis", "Budget forecasting", "Resource optimization", "Reserved instances", "Auto-scaling", "Cost alerts"]}
            price="$8k–$25k"
            icon="💰"
          />
          <ITServiceCard
            title="IT Support & Help Desk"
            description="24/7 IT support and help desk services for your organization"
            features={["24/7 support", "Remote assistance", "Ticket management", "Knowledge base", "User training", "SLA management"]}
            price="$3k–$15k/mo"
            icon="🎧"
          />
          <ITServiceCard
            title="Data Backup & Recovery"
            description="Comprehensive data protection and recovery solutions"
            features={["Automated backups", "Point-in-time recovery", "Cross-region replication", "Backup testing", "Recovery planning", "Compliance reporting"]}
            price="$10k–$30k"
            icon="💾"
          />
          <ITServiceCard
            title="IT Training & Documentation"
            description="Comprehensive IT training programs and technical documentation"
            features={["Technical training", "Process documentation", "User manuals", "Video tutorials", "Certification programs", "Knowledge transfer"]}
            price="$5k–$20k"
            icon="📚"
          />
          <ITServiceCard
            title="Mobile Device Management"
            description="Enterprise mobile device security and management solutions"
            features={["Device enrollment", "Policy enforcement", "App management", "Security controls", "Remote wipe", "Compliance monitoring"]}
            price="$8k–$25k"
            icon="📱"
          />
          <ITServiceCard
            title="IT Governance & Risk Management"
            description="IT governance framework and risk management implementation"
            features={["Governance framework", "Risk assessment", "Policy development", "Compliance monitoring", "Audit support", "Risk mitigation"]}
            price="$15k–$40k"
            icon="⚖️"
          />
          <ITServiceCard
            title="Cloud Migration Services"
            description="Complete cloud migration planning and execution services"
            features={["Migration planning", "Data migration", "Application migration", "Testing & validation", "Go-live support", "Post-migration optimization"]}
            price="$20k–$80k"
            icon="🚀"
          />
          <ITServiceCard
            title="IT Infrastructure Monitoring"
            description="Comprehensive infrastructure monitoring and alerting solutions"
            features={["Server monitoring", "Network monitoring", "Application monitoring", "Log analysis", "Alerting systems", "Performance dashboards"]}
            price="$8k–$25k"
            icon="📊"
          />
          <ITServiceCard
            title="IT Security Assessment"
            description="Comprehensive security assessment and penetration testing"
            features={["Vulnerability scanning", "Penetration testing", "Security audit", "Compliance assessment", "Risk analysis", "Remediation planning"]}
            price="$10k–$35k"
            icon="🔍"
          />
          <ITServiceCard
            title="IT Project Management"
            description="Professional IT project management and delivery services"
            features={["Project planning", "Resource management", "Timeline management", "Risk management", "Quality assurance", "Stakeholder communication"]}
            price="$12k–$40k"
            icon="📅"
          />
          <ITServiceCard
            title="Cloud Architecture Design"
            description="Custom cloud architecture design and implementation"
            features={["Architecture design", "Scalability planning", "Security design", "Cost optimization", "Performance tuning", "Documentation"]}
            price="$15k–$50k"
            icon="🏗️"
          />
          <ITServiceCard
            title="IT Compliance & Auditing"
            description="Compliance management and audit preparation services"
            features={["Compliance assessment", "Audit preparation", "Policy development", "Control implementation", "Documentation", "Training"]}
            price="$12k–$35k"
            icon="📋"
          />
          <ITServiceCard
            title="IT Vendor Management"
            description="IT vendor evaluation, selection, and relationship management"
            features={["Vendor evaluation", "Contract negotiation", "Performance monitoring", "Cost optimization", "Relationship management", "Risk assessment"]}
            price="$8k–$25k"
            icon="🤝"
          />
          <ITServiceCard
            title="IT Change Management"
            description="IT change management and release management services"
            features={["Change planning", "Impact analysis", "Risk assessment", "Testing coordination", "Deployment management", "Rollback planning"]}
            price="$10k–$30k"
            icon="🔄"
          />
          <ITServiceCard
            title="IT Capacity Planning"
            description="IT capacity planning and resource optimization services"
            features={["Capacity analysis", "Growth planning", "Resource optimization", "Performance modeling", "Cost forecasting", "Scaling strategies"]}
            price="$8k–$25k"
            icon="📈"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Cloud & Infrastructure" 
            details={[
              "AWS, GCP, Azure multi-cloud strategies",
              "Kubernetes orchestration and management",
              "Serverless architecture implementation",
              "Infrastructure as Code (Terraform, CloudFormation)",
              "Auto-scaling and load balancing",
              "Disaster recovery and backup solutions"
            ]} 
          />
          <Item 
            title="DevOps & SRE" 
            details={[
              "CI/CD pipeline design and implementation",
              "Comprehensive observability and monitoring",
              "Automated testing and quality gates",
              "Chaos engineering and resilience testing",
              "Incident response and post-mortem processes",
              "Performance optimization and capacity planning"
            ]} 
          />
          <Item 
            title="Security & Compliance" 
            details={[
              "Security hardening and vulnerability management",
              "Zero Trust network architecture",
              "Compliance auditing (SOC2, ISO27001, GDPR)",
              "Security monitoring and threat detection",
              "Identity and access management (IAM)",
              "Data protection and encryption"
            ]} 
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function ITServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="IT Assessment" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Comprehensive cloud review",
            "Security audit & assessment",
            "Performance analysis",
            "Cost optimization review",
            "Technology roadmap",
            "Implementation recommendations"
          ]} 
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Infrastructure as Code setup",
            "CI/CD pipeline implementation",
            "Monitoring & observability",
            "Security hardening",
            "Performance optimization",
            "Documentation & training"
          ]} 
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
        <div className="flex flex-wrap gap-1">
          {benefits.map((benefit, index) => (
            <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Quote Request - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
          duration="Ongoing"
          features={[
            "24/7 monitoring & on-call",
            "SLO management & reporting",
            "Cost optimization",
            "Security updates & patches",
            "Performance tuning",
            "Monthly health reports"
          ]} 
        />
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete IT infrastructure, cloud solutions, and digital transformation services to modernize your business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITService
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization"
            price="Starting at $5,000"
            features={[
              "Infrastructure assessment",
              "Migration planning & execution",
              "Data migration & validation",
              "Application modernization",
              "Cost optimization analysis"
            ]}
            benefits={["Reduced Costs", "Better Scalability", "Enhanced Security", "Improved Performance"]}
            icon="☁️"
            href="/services/cloud-migration"
          />
          <ITService
            title="DevOps & CI/CD"
            description="Automated deployment pipelines, infrastructure as code, and continuous integration"
            price="Starting at $3,000"
            features={[
              "CI/CD pipeline setup",
              "Infrastructure as code",
              "Container orchestration",
              "Automated testing",
              "Monitoring & alerting"
            ]}
            benefits={["Faster Deployments", "Reduced Errors", "Better Collaboration", "Automated Testing"]}
            icon="⚙️"
            href="/services/ci-cd-pipeline-builder"
          />
          <ITService
            title="Cybersecurity Suite"
            description="Comprehensive security assessment, implementation, and ongoing monitoring"
            price="Starting at $2,000"
            features={[
              "Security assessment & audit",
              "Penetration testing",
              "Vulnerability scanning",
              "Compliance management",
              "Security training & awareness"
            ]}
            benefits={["Enhanced Security", "Compliance", "Risk Reduction", "Peace of Mind"]}
            icon="🔒"
            href="/services/cybersecurity-suite"
          />
          <ITService
            title="Mobile Development"
            description="Native and cross-platform mobile app development for iOS and Android"
            price="Starting at $5,000"
            features={[
              "iOS & Android development",
              "Cross-platform solutions",
              "App store optimization",
              "Push notifications",
              "Analytics integration"
            ]}
            benefits={["Mobile Presence", "User Engagement", "Revenue Growth", "Brand Visibility"]}
            icon="📱"
            href="/services/mobile-development"
          />
          <ITService
            title="API Development"
            description="RESTful APIs, GraphQL, and microservices architecture for modern applications"
            price="Starting at $2,000"
            features={[
              "RESTful API design",
              "GraphQL implementation",
              "Microservices architecture",
              "API documentation",
              "Performance optimization"
            ]}
            benefits={["Better Integration", "Scalability", "Developer Experience", "Future-Proof"]}
            icon="🔗"
            href="/services/api-testing-suite"
          />
          <ITService
            title="Database Solutions"
            description="Database design, optimization, migration, and management services"
            price="Starting at $1,500"
            features={[
              "Database design & architecture",
              "Performance optimization",
              "Data migration",
              "Backup & recovery",
              "Monitoring & maintenance"
            ]}
            benefits={["Better Performance", "Data Security", "Scalability", "Reliability"]}
            icon="🗄️"
            href="/services/data-analytics"
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies and frameworks to deliver cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Azure", icon: "🔵", description: "Microsoft cloud" },
            { name: "Google Cloud", icon: "🌐", description: "Google platform" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Terraform", icon: "🏗️", description: "Infrastructure" },
            { name: "Jenkins", icon: "🔧", description: "CI/CD" },
            { name: "GitLab", icon: "🦊", description: "DevOps platform" },
            { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
            { name: "PostgreSQL", icon: "🐘", description: "SQL database" },
            { name: "Redis", icon: "🔴", description: "Caching" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all IT services. Choose the plan that fits your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Basic"
            price="$2,000"
            period="month"
            description="Essential IT services for small businesses"
            features={[
              "Basic cloud setup",
              "Email & office solutions",
              "Basic security measures",
              "Monthly maintenance",
              "Email support"
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Professional"
            price="$8,000"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Advanced cloud solutions",
              "DevOps implementation",
              "Security monitoring",
              "24/7 support",
              "Performance optimization",
              "Backup & recovery"
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$25,000"
            period="month"
            description="Complete IT transformation for large organizations"
            features={[
              "Custom infrastructure design",
              "Dedicated IT team",
              "Advanced security suite",
              "SLA guarantee",
              "Custom integrations",
              "White-label solutions"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure your IT infrastructure is robust, secure, and scalable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment & Planning",
              description: "We analyze your current IT infrastructure and create a comprehensive improvement plan."
            },
            {
              step: "02",
              title: "Design & Architecture",
              description: "Our experts design a scalable and secure IT architecture tailored to your needs."
            },
            {
              step: "03",
              title: "Implementation",
              description: "We implement the solution with minimal disruption to your business operations."
            },
            {
              step: "04",
              title: "Monitoring & Support",
              description: "Ongoing monitoring, maintenance, and support to ensure optimal performance."
            }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your IT infrastructure and drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Project Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your IT Transformation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
export const metadata = { title: 'IT Services | Zion Tech Group' } export default /**
 * ITServicesPage - Function description
 */
function ITServicesPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>IT Services</h1> <p style={{margin_top: 8, color: '#374151'}}>Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Cloud & Infra" details={["AWS / GCP / Azure", "Kubernetes", "Serverless", "IaC (Terraform)"]} /> <Item title="DevOps & SRE" details={["CI / CD", "Observability", "Autoscaling", "Chaos testing"]} /> <Item title="Security" details={["Hardening", "Zero Trust", "Vuln mgmt", "Compliance"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="Assessment" price="$4k–$10k" features={["2 weeks", "Cloud review", "Security audit", "Roadmap"]} /> <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks", "Infra as code", "CI / CD", "Monitoring"]} /> <Plan name="Managed" price="$5k+/mo" features={["24 / 7 on - call", "SLO mgmt", "Cost optimization", "Reports"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
}

function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Optimize Your IT Infrastructure?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can improve your infrastructure's reliability, security, and performance. 
          Our IT experts have managed 200+ enterprise systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Assessment - Free
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      {/* IT Service Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Management"
            description="Seamless cloud migration and ongoing management across AWS, Azure, and Google Cloud."
            icon="☁️"
            pricing="From $3,000/month"
            features={["Cloud strategy", "Migration planning", "Cost optimization", "24/7 monitoring"]
          />
          <ITServiceCard
            title="DevOps & CI/CD"
            description="Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code."
            icon="🔄"
            pricing="From $2,500/month"
            features={["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Automated testing"]
          />
          <ITServiceCard
            title="Cybersecurity Solutions"
            description="Comprehensive security services including threat detection, compliance, and incident response."
            icon="🔒"
            pricing="From $4,000/month"
            features={["Threat detection", "Security audits", "Compliance management", "Incident response"]
          />
          <ITServiceCard
            title="Infrastructure Management"
            description="Complete infrastructure management including servers, networks, and data centers."
            icon="🖥️"
            pricing="From $2,000/month"
            features={["Server management", "Network optimization", "Backup solutions", "Disaster recovery"]
          />
          <ITServiceCard
            title="Database Administration"
            description="Expert database management, optimization, and migration services for all major platforms."
            icon="🗄️"
            pricing="From $1,500/month"
            features={["Database optimization", "Migration services", "Performance tuning", "Backup & recovery"]
          />
          <ITServiceCard
            title="24/7 IT Support"
            description="Round-the-clock technical support and monitoring for your critical systems."
            icon="🛠️"
            pricing="From $1,200/month"
            features={["24/7 monitoring", "Help desk support", "Remote assistance", "On-site support"]
          />
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cloud Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CloudServiceCard
            provider="AWS"
            description="Amazon Web Services migration, optimization, and management"
            features={["EC2 management", "S3 optimization", "RDS administration", "Lambda functions"]
            pricing="From $2,500/month"
          />
          <CloudServiceCard
            provider="Microsoft Azure"
            description="Azure cloud services, migration, and hybrid cloud solutions"
            features={["VM management", "Azure SQL", "App Services", "Azure DevOps"]
            pricing="From $2,800/month"
          />
          <CloudServiceCard
            provider="Google Cloud"
            description="Google Cloud Platform services and multi-cloud management"
            features={["GKE management", "BigQuery", "Cloud Functions", "AI/ML services"]
            pricing="From $2,200/month"
          />
        </div>
      </section>

      {/* Security Services */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cybersecurity Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SecurityServiceCard
            title="Security Assessment"
            description="Comprehensive security evaluation and vulnerability assessment"
            icon="🔍"
            pricing="$5,000/assessment"
          />
          <SecurityServiceCard
            title="Penetration Testing"
            description="Ethical hacking and security testing to identify vulnerabilities"
            icon="🎯"
            pricing="$8,000/test"
          />
          <SecurityServiceCard
            title="Compliance Management"
            description="SOC2, GDPR, HIPAA, and other compliance requirements"
            icon="📋"
            pricing="$3,000/month"
          />
          <SecurityServiceCard
            title="Incident Response"
            description="24/7 security monitoring and incident response services"
            icon="🚨"
            pricing="$2,000/month"
          />
        </div>
      </section>

      {/* IT Solutions by Industry */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Solutions by Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            icon="🏦"
            title="Financial Services"
            description="Bank-grade security and compliance for financial institutions"
            solutions={["PCI DSS compliance", "Fraud detection", "High availability", "Disaster recovery"]
          />
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="HIPAA-compliant IT solutions for healthcare providers"
            solutions={["HIPAA compliance", "EHR systems", "Telemedicine", "Data encryption"]
          />
          <IndustryCard
            icon="🛒"
            title="E-commerce"
            description="Scalable infrastructure for online retail and marketplaces"
            solutions={["Auto-scaling", "CDN optimization", "Payment security", "Inventory systems"]
          />
          <IndustryCard
            icon="🏭"
            title="Manufacturing"
            description="IoT and industrial automation IT solutions"
            solutions={["IoT integration", "SCADA systems", "Predictive maintenance", "Supply chain"]
          />
          <IndustryCard
            icon="🎓"
            title="Education"
            description="IT infrastructure for educational institutions and e-learning"
            solutions={["LMS systems", "Student portals", "Virtual classrooms", "Campus networks"]
          />
          <IndustryCard
            icon="🏠"
            title="Real Estate"
            description="Property management and CRM IT solutions"
            solutions={["CRM systems", "Property databases", "Virtual tours", "Document management"]
          />
        </div>
      </section>

      {/* IT Support Tiers */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Support Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SupportTierCard
            name="Basic Support"
            price="$1,200"
            period="month"
            description="Essential IT support for small businesses"
            features={[
              "Email support (8x5)",
              "Remote assistance",
              "Basic monitoring",
              "Software updates",
              "Backup management"
            ]}
            popular={false}
          />
          <SupportTierCard
            name="Professional Support"
            price="$2,500"
            period="month"
            description="Comprehensive support for growing businesses"
            features={[
              "Phone & email support (24x7)",
              "Priority response",
              "Advanced monitoring",
              "Proactive maintenance",
              "Security management",
              "Cloud optimization"
            ]}
            popular={true}
          />
          <SupportTierCard
            name="Enterprise Support"
            price="$5,000"
            period="month"
            description="Full-service IT management for large organizations"
            features={[
              "Dedicated account manager",
              "24x7x365 support",
              "On-site technicians",
              "Custom solutions",
              "Strategic planning",
              "Compliance management"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven IT Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="99.9%"
            label="Uptime Guarantee"
            description="System availability and reliability"
          />
          <MetricCard
            number="500+"
            label="IT Projects Completed"
            description="Successfully delivered implementations"
          />
          <MetricCard
            number="50%"
            label="Cost Reduction"
            description="Average IT cost savings for clients"
          />
          <MetricCard
            number="24/7"
            label="Support Available"
            description="Round-the-clock technical assistance"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 2,000+ businesses that trust Zion Tech Group for their IT needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-blue-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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