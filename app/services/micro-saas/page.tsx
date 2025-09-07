import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ChartBarIcon, 
  CogIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group - Custom SaaS Development',
  description: 'Build scalable micro SaaS products that solve specific business challenges. Custom web applications, APIs, and cloud-native solutions.',
  keywords: 'micro SaaS, SaaS development, custom web applications, API development, cloud solutions, software as a service',
};

const microSaasServices = [
  {
    name: 'AI-Powered Business Tools',
    description: 'Intelligent micro SaaS applications that automate specific business processes using AI and machine learning.',
    icon: CpuChipIcon,
    features: [
      'AI-powered automation',
      'Custom machine learning models',
      'Real-time data processing',
      'Intelligent decision making',
      'Scalable cloud architecture',
      'API-first design'
    ],
    pricing: '$25,000 - $100,000',
    timeline: '8-16 weeks',
    examples: ['AI Content Generator', 'Smart Analytics Dashboard', 'Automated Report Builder', 'Intelligent CRM'],
    href: '/services/ai-powered-tools'
  },
  {
    name: 'Productivity & Collaboration Tools',
    description: 'Specialized tools that enhance team productivity and streamline collaboration workflows.',
    icon: UserGroupIcon,
    features: [
      'Real-time collaboration',
      'Task management systems',
      'Document sharing and editing',
      'Team communication tools',
      'Project tracking',
      'Integration capabilities'
    ],
    pricing: '$15,000 - $60,000',
    timeline: '6-12 weeks',
    examples: ['Team Workspace', 'Project Management Hub', 'Document Collaboration', 'Meeting Scheduler'],
    href: '/services/productivity-tools'
  },
  {
    name: 'E-commerce & Marketplace Solutions',
    description: 'Custom e-commerce platforms and marketplace solutions tailored to specific industries or niches.',
    icon: CurrencyDollarIcon,
    features: [
      'Custom shopping experiences',
      'Payment processing integration',
      'Inventory management',
      'Order tracking systems',
      'Multi-vendor support',
      'Mobile-responsive design'
    ],
    pricing: '$30,000 - $120,000',
    timeline: '10-20 weeks',
    examples: ['Niche Marketplace', 'B2B E-commerce', 'Subscription Platform', 'Auction Site'],
    href: '/services/ecommerce-solutions'
  },
  {
    name: 'Data Analytics & Visualization Tools',
    description: 'Specialized analytics platforms that transform complex data into actionable business insights.',
    icon: ChartBarIcon,
    features: [
      'Custom dashboards',
      'Real-time data visualization',
      'Advanced analytics',
      'Report generation',
      'Data export capabilities',
      'Interactive charts and graphs'
    ],
    pricing: '$20,000 - $80,000',
    timeline: '8-16 weeks',
    examples: ['Business Intelligence Tool', 'Sales Analytics Platform', 'Performance Dashboard', 'Custom Reports'],
    href: '/services/analytics-tools'
  },
  {
    name: 'Automation & Workflow Tools',
    description: 'Intelligent automation platforms that streamline business processes and reduce manual work.',
    icon: CogIcon,
    features: [
      'Workflow automation',
      'Integration with existing systems',
      'Custom triggers and actions',
      'Error handling and logging',
      'Scalable processing',
      'User-friendly interface'
    ],
    pricing: '$18,000 - $70,000',
    timeline: '6-14 weeks',
    examples: ['Email Automation', 'Data Processing Tool', 'Invoice Automation', 'Lead Management'],
    href: '/services/automation-tools'
  },
  {
    name: 'Industry-Specific Solutions',
    description: 'Tailored micro SaaS applications designed for specific industries and use cases.',
    icon: DocumentTextIcon,
    features: [
      'Industry-specific features',
      'Compliance and security',
      'Custom integrations',
      'Specialized workflows',
      'Regulatory compliance',
      'Expert domain knowledge'
    ],
    pricing: '$35,000 - $150,000',
    timeline: '12-24 weeks',
    examples: ['Healthcare Management', 'Legal Case Management', 'Real Estate Platform', 'Educational Tools'],
    href: '/services/industry-solutions'
  }
];

const techStack = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Material-UI'],
    description: 'Modern, responsive user interfaces'
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Go', 'Rust', 'PostgreSQL', 'MongoDB'],
    description: 'Scalable, high-performance backends'
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    description: 'Cloud-native, scalable infrastructure'
  },
  {
    category: 'AI & ML',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face', 'Pinecone'],
    description: 'Intelligent, AI-powered features'
  }
];

const developmentProcess = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business needs and define the perfect micro SaaS solution.',
    icon: RocketLaunchIcon
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Create user-friendly interfaces and scalable technical architecture.',
    icon: DocumentTextIcon
  },
  {
    step: '03',
    title: 'Development & Integration',
    description: 'Build your micro SaaS with modern technologies and seamless integrations.',
    icon: CpuChipIcon
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description: 'Rigorous testing and smooth deployment to production environments.',
    icon: ShieldCheckIcon
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'Go live with ongoing support, monitoring, and continuous improvements.',
    icon: CloudIcon
  }
];

const benefits = [
  {
    title: 'Rapid Time to Market',
    description: 'Get your micro SaaS to market quickly with our agile development process.',
    icon: '⚡'
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one with cloud-native design.',
    icon: '📈'
  },
  {
    title: 'Cost-Effective',
    description: 'Lower development costs compared to traditional enterprise software.',
    icon: '💰'
  },
  {
    title: 'Focused Solutions',
    description: 'Solve specific problems with targeted, purpose-built applications.',
    icon: '🎯'
  }
];

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Build focused, scalable micro SaaS products that solve specific business challenges. 
              From concept to launch, we deliver solutions that drive real value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Micro SaaS
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Micro SaaS Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized micro SaaS applications designed to solve specific business problems with modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.pricing}</div>
                      <div className="text-sm opacity-90">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-purple-100 leading-relaxed">{service.description}</p>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Example Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((example, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center w-full justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors"
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

      {/* Technology Stack */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, scalable, and maintainable micro SaaS applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack) => (
              <div key={stack.category} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                <p className="text-gray-600 mb-4">{stack.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro SaaS offers unique advantages for businesses looking to solve specific problems efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful micro SaaS products on time and on budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 text-xl font-bold">
                    {step.step}
                  </div>
                  {index < developmentProcess.length - 1 && (
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
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Micro SaaS?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's turn your idea into a successful micro SaaS product. Our team has built 200+ 
            micro SaaS applications that serve thousands of users worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
=======
export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-green-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Micro SaaS?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's build your next revenue-generating micro SaaS product together.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
        className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function MicroSaaSPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Build and launch your next micro SaaS product with our comprehensive development services.
          From AI-powered tools to productivity apps, we help you create revenue-generating solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Your SaaS Project
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to deliver successful micro SaaS products that generate revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step={1}
            title="Idea Validation & Strategy"
            description="Refining your micro SaaS idea, market research, and business model development."
          />
          <ProcessStep
            step={2}
            title="Development & MVP Launch"
            description="Agile development, rapid prototyping, and launching a Minimum Viable Product."
          />
          <ProcessStep
            step={3}
            title="Growth & Optimization"
            description="User feedback integration, feature expansion, and continuous performance optimization."
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Micro SaaS We Build</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized tools designed to solve specific problems for niche markets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="AI-Powered Tools"
            description="Leveraging AI for automation, content generation, and intelligent insights."
            icon="🤖"
          />
          <FeatureCard
            title="Productivity Apps"
            description="Streamlining workflows, task management, and team collaboration."
            icon="🚀"
          />
          <FeatureCard
            title="Marketing Automation"
            description="Automating email campaigns, social media, and lead generation processes."
            icon="📧"
          />
          <FeatureCard
            title="Business Intelligence"
            description="Providing dashboards and reports for data-driven decision making."
            icon="📊"
          />
          <FeatureCard
            title="Niche Utilities"
            description="Solving specific, underserved problems for targeted audiences."
            icon="🛠️"
          />
          <FeatureCard
            title="Integration Tools"
            description="Connecting disparate systems and automating data flow between applications."
            icon="🔗"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}