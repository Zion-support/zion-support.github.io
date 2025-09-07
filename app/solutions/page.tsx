<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  LightBulbIcon,
  CpuChipIcon, 
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Discover our comprehensive AI and technology solutions designed to transform your business operations.',
  keywords: 'AI solutions, technology solutions, business transformation, automation, innovation',
};

const flagshipSolutions = [
  {
    name: 'AI-Powered Analytics Platform',
    description: 'Transform raw data into actionable insights with our advanced AI analytics platform.',
    icon: CpuChipIcon,
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'Automated reporting'
    ],
    href: '/services/ai-analytics-platform'
  },
  {
    name: 'Intelligent Automation Suite',
    description: 'Streamline operations with our comprehensive automation solutions.',
    icon: CogIcon,
    features: [
      'Workflow automation',
      'Process optimization',
      'Error reduction',
      'Cost savings'
    ],
    href: '/services/automation-solutions'
  }
];

const industryApplications = [
  {
    name: 'Healthcare',
    description: 'AI-powered solutions for patient care, diagnostics, and operational efficiency.',
    icon: CpuChipIcon,
    useCases: [
      'Medical image analysis',
      'Patient data management',
      'Predictive health analytics',
      'Automated diagnostics'
    ]
  },
  {
    name: 'Finance',
    description: 'Advanced fintech solutions for risk management, fraud detection, and customer experience.',
    icon: CpuChipIcon,
    useCases: [
      'Fraud detection',
      'Risk assessment',
      'Algorithmic trading',
      'Customer insights'
    ]
  },
  {
    name: 'Manufacturing',
    description: 'Smart manufacturing solutions for quality control, predictive maintenance, and efficiency.',
    icon: CpuChipIcon,
    useCases: [
      'Quality control automation',
      'Predictive maintenance',
      'Supply chain optimization',
      'Production monitoring'
    ]
  },
  {
    name: 'Retail',
    description: 'Customer-centric solutions for personalization, inventory management, and sales optimization.',
    icon: CpuChipIcon,
    useCases: [
      'Personalized recommendations',
      'Inventory optimization',
      'Customer behavior analysis',
      'Price optimization'
    ]
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
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              AI Solutions for{' '}
              <span className="text-blue-400">Every Industry</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business operations and drive unprecedented growth and innovation.
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
                <Link
                  href={solution.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
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
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
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
            <Link
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
            >
              Get Started
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Services <span aria-hidden="true">→</span>
            </Link>
          </div>
=======
import Link from "next/link";

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SolutionCard
            title="AI-Powered Solutions"
            description="Leverage artificial intelligence to automate processes, gain insights, and enhance decision-making."
            icon="🤖"
            features={["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]}
            href="/services/ai-services"
          />
          <SolutionCard
            title="Micro SaaS Development"
            description="Build scalable, revenue-generating software products that solve specific business problems."
            icon="🚀"
            features={["Full-Stack Development", "Payment Integration", "User Management", "Analytics"]}
            href="/services/micro-saas"
          />
          <SolutionCard
            title="IT Infrastructure"
            description="Modernize your IT infrastructure with cloud migration, DevOps, and security solutions."
            icon="⚙️"
            features={["Cloud Migration", "DevOps & SRE", "Cybersecurity", "Infrastructure Management"]}
            href="/services/it-services"
          />
          <SolutionCard
            title="Blockchain Solutions"
            description="Implement decentralized solutions including DeFi, NFTs, and Web3 applications."
            icon="⛓️"
            features={["Smart Contracts", "DeFi Protocols", "NFT Marketplaces", "Web3 Apps"]}
            href="/services/blockchain-solutions"
          />
          <SolutionCard
            title="AI Automation"
            description="Automate business processes with intelligent workflows and robotic process automation."
            icon="⚡"
            features={["RPA", "Workflow Automation", "Process Mining", "Cognitive Automation"]}
            href="/services/ai-automation-suite"
          />
          <SolutionCard
            title="Data Analytics"
            description="Transform raw data into actionable insights with advanced analytics and business intelligence."
            icon="📊"
            features={["Business Intelligence", "Predictive Analytics", "Data Warehousing", "Real-time Dashboards"]}
            href="/services/data-analytics"
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our solutions can help you achieve your business goals and drive growth.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get Started Today
          </Link>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
