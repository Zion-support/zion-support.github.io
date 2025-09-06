import React from 'react';
import { Metadata } from 'next';
import { 
  LightBulbIcon,
  CpuChipIcon,
  CogIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI Solutions | Zion Tech Group - Enterprise AI Platforms',
  description: 'Comprehensive AI solutions for enterprise transformation. Custom AI platforms, machine learning models, and intelligent automation.',
  keywords: 'AI solutions, enterprise AI, machine learning, artificial intelligence, AI platforms, intelligent automation',
};

const flagshipSolutions = [
  {
    name: 'ZionAI Enterprise Platform',
    description: 'A comprehensive AI platform that integrates machine learning, natural language processing, and predictive analytics into a single, powerful solution.',
    icon: CpuChipIcon,
    features: [
      'Real-time data processing',
      'Advanced ML models',
      'Natural language understanding',
      'Predictive analytics',
      'API-first architecture',
      'Scalable cloud deployment'
    ],
    href: '/services/ai-platform'
  },
  {
    name: 'Intelligent Automation Suite',
    description: 'End-to-end automation platform that streamlines business processes using AI-powered decision making and workflow optimization.',
    icon: CogIcon,
    features: [
      'Process automation',
      'Intelligent routing',
      'Exception handling',
      'Performance monitoring',
      'Custom workflows',
      'Integration capabilities'
    ],
    href: '/services/automation-suite'
  },
  {
    name: 'AI Analytics Engine',
    description: 'Advanced analytics platform that transforms raw data into actionable insights using cutting-edge AI and machine learning techniques.',
    icon: ChartBarIcon,
    features: [
      'Real-time analytics',
      'Predictive modeling',
      'Data visualization',
      'Custom dashboards',
      'Automated reporting',
      'Anomaly detection'
    ],
    href: '/services/analytics-engine'
  },
  {
    name: 'Secure AI Gateway',
    description: 'Enterprise-grade security and governance platform for AI systems, ensuring compliance and protecting sensitive data.',
    icon: ShieldCheckIcon,
    features: [
      'Data encryption',
      'Access controls',
      'Audit logging',
      'Compliance monitoring',
      'Threat detection',
      'Privacy protection'
    ],
    href: '/services/ai-security'
  }
];

const industryApplications = [
  {
    name: 'Healthcare',
    icon: UserGroupIcon,
    description: 'AI-powered solutions for medical diagnosis, drug discovery, and patient care optimization.',
    useCases: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance']
  },
  {
    name: 'Finance',
    icon: ChartBarIcon,
    description: 'Intelligent financial services including fraud detection, risk assessment, and algorithmic trading.',
    useCases: ['Fraud Detection', 'Credit Scoring', 'Algorithmic Trading', 'Risk Management']
  },
  {
    name: 'Manufacturing',
    icon: CogIcon,
    description: 'Smart manufacturing solutions with predictive maintenance, quality control, and supply chain optimization.',
    useCases: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation']
  },
  {
    name: 'Retail',
    icon: GlobeAltIcon,
    description: 'Personalized customer experiences with recommendation engines, inventory management, and demand forecasting.',
    useCases: ['Recommendation Engines', 'Inventory Optimization', 'Customer Analytics', 'Price Optimization']
  }
];

const implementationSteps = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.',
    icon: LightBulbIcon
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.',
    icon: CpuChipIcon
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.',
    icon: CogIcon
  },
  {
    step: '04',
    title: 'Deployment & Training',
    description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.',
    icon: RocketLaunchIcon
  },
  {
    step: '05',
    title: 'Optimization & Support',
    description: 'Ongoing monitoring, optimization, and support to ensure continued success and ROI.',
    icon: ChartBarIcon
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with our comprehensive AI solutions that streamline 
              operations and drive unprecedented growth and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Flagship Solutions */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flagship AI Platforms
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {flagshipSolutions.map((solution) => (
              <div key={solution.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-x-3 mb-4">
                  <solution.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={solution.href}
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transforming Every Sector
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI solutions are designed to adapt and excel across diverse industries, 
            delivering measurable results and competitive advantages.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {industryApplications.map((industry) => (
              <div key={industry.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <industry.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                  {industry.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Implementation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Proven Process
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From initial assessment to ongoing optimization, we guide you through every step 
            of your AI transformation journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
            {implementationSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700"></div>
                )}
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4">
                    <step.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's discuss how our AI solutions can accelerate your growth and give you a 
            competitive edge in your industry.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}