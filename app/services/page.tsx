import Link from "next/link";


export const metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value."
};




export const metadata = {
  title:
    "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description:
    "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
  keywords:
    "AI services, micro SaaS, IT services, FinTech, HealthTech, EdTech, cloud migration, DevOps, SRE, enterprise software"
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From
          AI-powered micro SaaS to enterprise FinTech platforms, we deliver
          measurable outcomes with 99.9% uptime, bank-grade security, and 24/7
          expert support.
        </p>
      </div>
ursor/automate-test-improve-and-merge-code-646c

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard
            number="500+"
            label="Successful Projects"
            description="Delivered worldwide"
          />
          <StatCard
            number="$2B+"
            label="Combined Market Value"
            description="Generated for clients"
          />
          <StatCard
            number="99.9%"
            label="Uptime Guarantee"
            description="Enterprise reliability"
          />
          <StatCard
            number="300%"
            label="Average ROI"
            description="Client return on investment"
          />
        </div>
      </div>

      {/* Core Services Grid */}
ursor/automate-test-improve-and-merge-code-646c
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[
            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling"
            "Revenue optimization & scaling",
ursor/automate-test-improve-and-merge-code-646c
          ]}

          icon="🚀"
          pricing="From $2,999/month"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"

ursor/automate-test-improve-and-merge-code-646c
          description="Advanced AI solutions including LLM applications, RAG systems, and enterprise AI platforms"
          bullets={[
            "15+ AI service categories",
            "Custom LLM development",
            "Enterprise AI integration"
          ]}

ursor/automate-test-improve-and-merge-code-646c
          icon="🤖"
          pricing="From $5,000/project"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"

ursor/automate-test-improve-and-merge-code-646c
          description="Comprehensive IT solutions including cloud migration, DevOps, security, and infrastructure management"
          bullets={[
            "15+ IT service categories",
            "Cloud migration & optimization",
            "24/7 monitoring & support"
          ]}
          icon="⚙️"
          pricing="From $3,000/month"
        />
        <ServiceCard
          href="/services/fintech"
          title="FinTech Solutions"
          description="Complete financial technology solutions including digital banking, payment processing, and trading platforms"
          bullets={[
            "15+ FinTech service categories",
            "Bank-grade security & compliance",
            "Real-time payment processing"
          ]}
          icon="💳"
          pricing="From $25,000/project"
        />
        <ServiceCard
          href="/services/healthtech"
          title="HealthTech Solutions"
          description="Healthcare technology solutions including EHR systems, telemedicine platforms, and medical AI"
          bullets={[
            "15+ HealthTech service categories",
            "HIPAA-compliant solutions",
            "Medical AI & diagnostics"
          ]}
          icon="🏥"
          pricing="From $40,000/project"
        />
        <ServiceCard
          href="/services/edtech"
          title="EdTech Solutions"
          description="Educational technology platforms including LMS systems, virtual classrooms, and AI-powered learning"
          bullets={[
            "15+ EdTech service categories",
            "Personalized learning AI",
            "Multi-platform compatibility"
          ]}
          icon="🎓"
          pricing="From $30,000/project"
        />
        <ServiceCard

          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security"
          bullets={[
            "Smart contracts development",
            "DeFi protocols & DApps",
            "Web3 integration & consulting"
          ]}
          icon="⛓️"
          pricing="From $15,000/project"
        />
        <ServiceCard
          href="/services/automation-solutions"
          title="Automation Solutions"
          description="RPA, workflow automation, and AI-powered automation for maximum efficiency"
          bullets={[
            "Process automation",
            "Workflow optimization",
            "AI-powered automation"
          ]}
          icon="⚡"

          pricing="From $2,500/month"

            "AI automation"
          ]}
          icon="⚡"
          pricing="From $2,500/month"
ursor/automate-test-improve-and-merge-code-646c
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"

ursor/automate-test-improve-and-merge-code-646c
          description="Business intelligence, predictive analytics, and data engineering for data-driven decisions"
          bullets={[
            "BI dashboards",
            "Predictive analytics",
            "Data engineering"
            "Data engineering",
ursor/automate-test-improve-and-merge-code-646c
          ]}
          icon="📊"
          pricing="From $4,000/month"
        />
      </div>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50 rounded-xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-specific solutions and cutting-edge technologies to address unique business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              href="/services/ai-chatbot"
              title="AI Chatbot Platform"
              description="Intelligent conversational AI for customer support and engagement"
              bullets={[
                "Natural language processing",
                "Multi-channel integration",
                "Custom training & deployment"
              ]}
              icon="💬"
              pricing="From $1,500/month"
            />
            <ServiceCard
              href="/services/ai-content-generation"
              title="AI Content Generation"
              description="Automated content creation for marketing, blogs, and social media"
              bullets={[
                "SEO-optimized content",
                "Multi-language support",
                "Brand voice customization"
              ]}
              icon="✍️"
              pricing="From $800/month"
            />
            <ServiceCard
              href="/services/ai-analytics-dashboard"
              title="AI Analytics Dashboard"
              description="Real-time business intelligence with predictive insights"
              bullets={[
                "Real-time data visualization",
                "Predictive analytics",
                "Custom KPI tracking"
              ]}
              icon="📈"
              pricing="From $2,200/month"
            />
            <ServiceCard
              href="/services/ai-project-management"
              title="AI Project Management"
              description="Intelligent project tracking and resource optimization"
              bullets={[
                "Smart task prioritization",
                "Resource allocation AI",
                "Progress prediction"
              ]}
              icon="📋"
              pricing="From $1,800/month"
            />
            <ServiceCard
              href="/services/ai-customer-support"
              title="AI Customer Support"
              description="Automated customer service with human-like interactions"
              bullets={[
                "24/7 automated support",
                "Sentiment analysis",
                "Escalation management"
              ]}
              icon="🎧"
              pricing="From $1,200/month"
            />
            <ServiceCard
              href="/services/ai-marketing-automation"
              title="AI Marketing Automation"
              description="Intelligent marketing campaigns and lead nurturing"
              bullets={[
                "Behavioral targeting",
                "A/B testing automation",
                "ROI optimization"
              ]}
              icon="📢"
              pricing="From $2,500/month"
            />
            <ServiceCard
              href="/services/ai-financial-analytics"
              title="AI Financial Analytics"
              description="Advanced financial modeling and risk assessment"
              bullets={[
                "Risk prediction models",
                "Fraud detection",
                "Investment analysis"
              ]}
              icon="💰"
              pricing="From $3,500/month"
            />
            <ServiceCard
              href="/services/ai-inventory-management"
              title="AI Inventory Management"
              description="Smart inventory optimization and demand forecasting"
              bullets={[
                "Demand forecasting",
                "Automated reordering",
                "Waste reduction"
              ]}
              icon="📦"
              pricing="From $1,600/month"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scalable, secure, and robust solutions designed for large organizations and enterprise needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              href="/services/cloud-migration"
              title="Cloud Migration"
              description="Seamless migration to AWS, Azure, or GCP with zero downtime"
              bullets={[
                "Multi-cloud strategy",
                "Data migration automation",
                "Cost optimization"
              ]}
              icon="☁️"
              pricing="From $15,000/project"
            />
            <ServiceCard
              href="/services/cybersecurity"
              title="Cybersecurity Suite"
              description="Comprehensive security solutions and compliance management"
              bullets={[
                "Security assessment",
                "Threat detection",
                "Compliance automation"
              ]}
              icon="🔒"
              pricing="From $8,000/month"
            />
            <ServiceCard
              href="/services/devops-automation"
              title="DevOps Automation"
              description="CI/CD pipelines, infrastructure as code, and automated deployments"
              bullets={[
                "CI/CD pipeline setup",
                "Infrastructure automation",
                "Monitoring & alerting"
              ]}
              icon="🔄"
              pricing="From $5,000/month"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}

      {/* Statistics Section */}
ursor/automate-test-improve-and-merge-code-646c
      <section className="py-16 bg-gray-50 rounded-xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results for
              businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              number="500+"
              label="Successful Projects"
              description="Delivered across 15+ industries"
            />
            <StatCard
              number="$2B+"
              label="Combined Market Value"
              description="Generated for our clients"
            />
            <StatCard
              number="99.9%"
              label="Uptime Guarantee"
              description="With 24/7 monitoring & support"
            />
            <StatCard
              number="300%"
              label="Average ROI"
              description="For our technology solutions"
            />
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
  pricing
  pricing,
ursor/automate-test-improve-and-merge-code-646c
}: {

  href: string;
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
  keywords: "AI services, micro SaaS, IT services, FinTech, HealthTech, EdTech, cloud migration, DevOps, SRE, enterprise software, blockchain, cybersecurity"
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  features: string[];
  pricing: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >

ursor/automate-test-improve-and-merge-code-646c
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </Link>
  );
}

function StatCard({
  number,
  label,
  description
}: {}

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

function StatCard({ number, label, description }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>

ursor/automate-test-improve-and-merge-code-646c
  );
}

function ServiceCard({ title, description, href, icon, features, pricing }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">

        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.
      </p>

        Join 500+ successful businesses that trust Zion Tech Group for their
        technology needs. Get a free consultation and discover how our solutions
        can drive 300% ROI and accelerate your growth.
      </p>
ursor/automate-test-improve-and-merge-code-646c
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-blue-600">{pricing}</span>
        <Link
          href={href}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard 
            number="500+" 
            label="Successful Projects" 
            description="Delivered worldwide" 
          />
          <StatCard 
            number="$2B+" 
            label="Combined Market Value" 
            description="Generated for clients" 
          />
          <StatCard 
            number="99.9%" 
            label="Uptime Guarantee" 
            description="Enterprise reliability" 
          />
          <StatCard 
            number="24/7" 
            label="Expert Support" 
            description="Always available" 
          />
        </div>
      </div>

      {/* Core Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Solutions"
            description="Cutting-edge artificial intelligence solutions for automation, analytics, and intelligent decision making."
            href="/ai-services"
            icon="🤖"
            features={[
              "AI chatbots & assistants",
              "Machine learning models",
              "Natural language processing",
              "Computer vision",
              "Predictive analytics"
            ]}
            pricing="From $5,000/month"
          />
          <ServiceCard
            title="Micro SaaS"
            description="End-to-end product development with billing, auth, analytics and growth optimization."
            href="/micro-saas"
            icon="🚀"
            features={[
              "Custom SaaS development",
              "Payment integration",
              "User authentication",
              "Analytics dashboard",
              "API development"
            ]}
            pricing="From $10,000/month"
          />
          <ServiceCard
            title="IT Services"
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions."
            href="/it-services"
            icon="💻"
            features={[
              "Cloud migration",
              "DevOps & CI/CD",
              "Infrastructure management",
              "Security solutions",
              "24/7 support"
            ]}
            pricing="From $3,000/month"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">
          Let's discuss how we can help transform your business with our technology solutions.
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
        <div className="mt-6 text-sm opacity-90">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import { 
  LightBulbIcon,
  CpuChipIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.'
};

const services = [
  {
    name: 'AI Solutions',
    description: 'Custom AI models, automation, and intelligent systems that transform your business operations.',
    icon: LightBulbIcon,
    color: 'blue',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI Automation',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants'
    ],
    pricing: 'Starting at $15k',
    timeline: '4-8 weeks',
    href: '/services/ai-services'
  },
  {
    name: 'Micro SaaS',
    description: 'Scalable, secure micro SaaS products that solve specific business challenges.',
    icon: CpuChipIcon,
    color: 'purple',
    features: [
      'Custom Web Applications',
      'API Development',
      'Database Design',
      'User Management',
      'Payment Integration',
      'Analytics Dashboard'
    ],
    pricing: 'Starting at $25k',
    timeline: '6-12 weeks',
    href: '/services/micro-saas'
  },
  {
    name: 'IT Services',
    description: 'Cloud migration, DevOps, SRE, and infrastructure management for enterprise scale.',
    icon: GlobeAltIcon,
    color: 'green',
    features: [
      'Cloud Migration',
      'DevOps & SRE',
      'Infrastructure Management',
      'Security Consulting',
      'Monitoring & Alerting',
      'Disaster Recovery'
    ],
    pricing: 'Starting at $10k',
    timeline: '2-6 weeks',
    href: '/services/it-services'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project roadmap.',
    icon: LightBulbIcon
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our team builds your solution using cutting-edge technologies.',
    icon: CpuChipIcon
  },
  {
    step: '03',
    title: 'Testing & Deployment',
    description: 'Rigorous testing ensures your solution works perfectly in production.',
    icon: ShieldCheckIcon
  },
  {
    step: '04',
    title: 'Support & Maintenance',
    description: 'Ongoing support and updates to keep your solution running smoothly.',
    icon: UserGroupIcon
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered solutions to enterprise IT services, we deliver results that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className={`bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 p-8 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.pricing}</div>
                      <div className="text-sm opacity-90">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-blue-100 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className={`inline-flex items-center w-full justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-${service.color}-600 hover:bg-${service.color}-700 transition-colors`}
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

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project's success from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
