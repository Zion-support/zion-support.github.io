<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Explore our comprehensive range of AI solutions, micro SaaS development, and IT services designed to accelerate your business growth.",
=======
import {

  LightBulbIcon,
  CpuChipIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const flagshipSolutions = [
  {
    name: 'AI Research Assistant',
    description: 'Revolutionary autonomous research platform that accelerates scientific discovery across all domains.',
    icon: LightBulbIcon,
    features: [
      'Natural Language ProcessingMulti-modal LearningReal-time CollaborationAdvanced Analytics'
    ],
    href: '/solutions/ai-autonomous-research'},
  {
    name: 'Quantum Neural Networks',
    description: 'Breakthrough quantum computing technology for next-generation AI applications.',
    icon: CpuChipIcon,
    features: [
      'Quantum SupremacyNeural Architecture SearchHybrid Classical-QuantumScalable Architecture'
    ],
    href: '/solutions/quantum-neural-networks'},
  {
    name: 'Autonomous Business Operations',
    description: 'Self-optimizing business processes that adapt and improve automatically.',
    icon: RocketLaunchIcon,
    features: [
      'Process AutomationPredictive AnalyticsContinuous OptimizationReal-time Monitoring'
    ],
    href: '/solutions/autonomous-business'},
  {
    name: 'IT Asset Management',
    description: 'Intelligent asset tracking and optimization for modern enterprise infrastructure.',
    icon: ShieldCheckIcon,
    features: [
      'Asset DiscoveryLifecycle ManagementSecurity ComplianceCost Optimization'
    ],
    href: '/solutions/it-asset-management'}]

const industryApplications = [
  {
    name: 'Healthcare',
    description: 'AI-powered diagnostics, drug discovery, and patient care optimization.',
    icon: UserGroupIcon,
    useCases: ['Medical Imaging AnalysisDrug DiscoveryPatient Risk AssessmentClinical Decision Support']},
  {
    name: 'Finance',
    description: 'Intelligent trading, risk assessment, and fraud detection systems.',
    icon: ChartBarIcon,
    useCases: ['Algorithmic TradingCredit Risk AnalysisFraud DetectionPortfolio Optimization']},
  {
    name: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization.',
    icon: CogIcon,
    useCases: ['Predictive MaintenanceQuality ControlSupply Chain OptimizationProduction Planning']},
  {
    name: 'Retail',
    description: 'Customer behavior analysis, inventory management, and personalized marketing.',
    icon: GlobeAltIcon,
    useCases: ['Customer AnalyticsInventory ManagementPersonalized MarketingDemand Forecasting']}]

  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.',
    icon: LightBulbIcon},
  {
    step: '02',
    title: 'Solution Design',
    description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.',
    icon: CpuChipIcon},
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.',
    icon: CogIcon},
  {
    step: '04',
    title: 'Deployment & Training',
    description: 'Seamless deployment with comprehensive training for your team to maximize solution adoption.',
    icon: RocketLaunchIcon},
  {

  {
    step: '01'
    title: 'Discovery & Assessment'
    description: 'We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.'
    icon: LightBulbIcon}
  {
    step: '02'
    title: 'Solution Design'
    description: 'Our experts design custom AI solutions tailored to your specific business needs and objectives.'
    icon: CpuChipIcon}
  {
    step: '03'
    title: 'Development & Testing'
    description: 'We develop and rigorously test your AI solution to ensure optimal performance and reliability.'
    icon: CogIcon}
  {

      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">

              AI Solutions for{' '}
              operations and drive unprecedented growth and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Flagship Solutions */}
      <div className=&quot;mx - auto max - w-7xl px - 6 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Our Solutions</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Flagship AI Platforms;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Revolutionary technology that pushes the boundaries of what's possible in artificial intelligence.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 2&quot;>;
            {flagship_solutions.map ((solution) => (
              <div key={solution.name} className=&quot;bg - white / 5 p - 8 rounded - 2xl backdrop - blur - sm hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                <div className=&quot;flex items - center gap - x-3 mb - 4&quot;>;
                  <solution.icon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  <h3 className=&quot;text - xl font - semibold text - white & quot;>{solution.name}</h3>;
                </div>;
                <p className=&quot;text - gray - 300 mb - 6&quot;>{solution.description}</p>;
                <div className=&quot;space - y-3 mb - 6&quot;>;
                  {solution.features.map ((feature) => (
                    <div key={feature} className=&quot;flex items - center gap - 2&quot;>;
                      <div className=&quot;h - 2 w - 2 bg - blue - 400 rounded - full & quot;></div>;
                      <span className=&quot;text - sm text - gray - 300 & quot;>{feature}</span>;
                    </div>))}
                </div>;
                <a;
                  href={solution.href}

                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}

          </div>;
        </div>;
      </div>;
      {/* Industry Applications */}

            Transforming Every Sector
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            Our AI solutions are designed to adapt and excel across diverse industries

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transforming Every Sector
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI solutions are designed to adapt and excel across diverse industries, 

<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Industries</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Transforming Every Sector;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Our AI solutions are designed to adapt and excel across diverse industries,
            delivering measurable results and competitive advantages.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 2&quot;>;
            {industry_applications.map ((industry) => (
              <div key={industry.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <industry.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {industry.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto mb - 4&quot;>{industry.description}</p>;
                  <div className=&quot;space - y-2 & quot;>;
                    {industry.use_cases.map ((use_case) => (
                      <div key={use_case} className=&quot;flex items - center gap - 2&quot;>;
                        <div className=&quot;h - 1.5 w - 1.5 bg - blue - 400 rounded - full & quot;></div>;
                        <span className=&quot;text - sm text - gray - 400 & quot;>{use_case}</span>;
                      </div>))}

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

                  </div>;
                </dd>;
              </div>;
            ))}
          </dl>;
        </div>;
      </div>;
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

<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Implementation</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Our Proven Process;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            From initial assessment to ongoing optimization, we guide you through every step;
            of your AI transformation journey.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <div className=&quot;grid max - w-xl grid - cols - 1 gap - 8 lg:max - w-none lg:grid - cols - 5&quot;>;
            {implementation_steps.map ((step, index) => (
              <div key={step.step} className=&quot;relative & quot;>;
                {index < implementation_steps.length - 1 && (
                  <div className=&quot;hidden lg:block absolute top - 8 left - 8 w - full h - 0.5 bg - gray - 700 & quot;></div>)}
                <div className=&quot;bg - white / 5 p - 6 rounded - 2xl backdrop - blur - sm text - center hover:bg - white / 10 transition - all duration - 300 hover:scale - 105 & quot;>;
                  <div className=&quot;mx - auto flex h - 16 w - 16 items - center justify - center rounded - full bg - blue - 600 / 20 mb - 4&quot;>;
                    <step.icon className=&quot;h - 8 w - 8 text - blue - 400 & quot; />;
                  </div>;
                  <div className=&quot;text - sm font - semibold text - blue - 400 mb - 2&quot;>{step.step}</div>;
                  <h3 className=&quot;text - lg font - semibold text - white mb - 2&quot;>{step.title}</h3>;
                  <p className=&quot;text - sm text - gray - 300 & quot;>{step.description}</p>;
                </div>;
              </div>))}

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
          </div>;
        </div>;
      </div>;
      {/* CTA section */}

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
            </Link>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
};

export default function SolutionsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
=======

>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and drive innovation.
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-6">
              Custom AI implementations that solve real business problems and drive efficiency.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
            <p className="text-gray-600 mb-6">
              Scalable software solutions designed for rapid deployment and growth.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Web Applications</li>
              <li>• Mobile Apps</li>
              <li>• API Development</li>
              <li>• Cloud Integration</li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive IT services to support your business infrastructure needs.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Cloud Migration</li>
              <li>• DevOps & SRE</li>
              <li>• Security Audits</li>
              <li>• System Monitoring</li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
=======
      </div>
    </div>
  )
}

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Technology Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Comprehensive solutions designed to address your specific business challenges and drive growth.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {solution.category}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Learn More
                </a>
              </div>

          </p>
        </div>
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <dl className=&quot;grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2&quot;>
            {industryApplications.map((industry) => (
              <div key={industry.name} className=&quot;flex flex-col group&quot;>
                <dt className=&quot;flex items-center gap-x-3 text-base font-semibold leading-7 text-white&quot;>
                  <industry.icon className=&quot;h-5 w-5 flex-none text-blue-400&quot; aria-hidden=&quot;true&quot; />
<div className=&quot;mx - auto mt - 32 max - w-7xl px - 6 sm:mt - 40 lg:px - 8&quot;>;
        <div className=&quot;mx - auto max - w-2xl lg:text - center & quot;>;
          <h2 className=&quot;text - base font - semibold leading - 7 text - blue - 400 & quot;>Industries</h2>;
          <p className=&quot;mt - 2 text - 3xl font - bold tracking - tight text - white sm:text - 4xl & quot;>;
            Transforming Every Sector;
          </p>;
          <p className=&quot;mt - 6 text - lg leading - 8 text - gray - 300 & quot;>;
            Our AI solutions are designed to adapt and excel across diverse industries,
            delivering measurable results and competitive advantages.;
          </p>;
        </div>;
        <div className=&quot;mx - auto mt - 16 max - w-2xl sm:mt - 20 lg:mt - 24 lg:max - w-none & quot;>;
          <dl className=&quot;grid max - w-xl grid - cols - 1 gap - x-8 gap - y-16 lg:max - w-none lg:grid - cols - 2&quot;>;
            {industry_applications.map ((industry) => (
              <div key={industry.name} className=&quot;flex flex - col group & quot;>;
                <dt className=&quot;flex items - center gap - x-3 text - base font - semibold leading - 7 text - white & quot;>;
                  <industry.icon className=&quot;h - 5 w - 5 flex - none text - blue - 400 & quot; aria - hidden=&quot;true & quot; />;
                  {industry.name}
                </dt>;
                <dd className=&quot;mt - 4 flex flex - auto flex - col text - base leading - 7 text - gray - 300 & quot;>;
                  <p className=&quot;flex - auto mb - 4&quot;>{industry.description}</p>;
                  <div className=&quot;space - y-2 & quot;>;
                    {industry.use_cases.map ((use_case) => (
                      <div key={use_case} className=&quot;flex items - center gap - 2&quot;>;
                        <div className=&quot;h - 1.5 w - 1.5 bg - blue - 400 rounded - full & quot;></div>;
                        <span className=&quot;text - sm text - gray - 400 & quot;>{use_case}</span>;
                      </div>))}
                  </div>;
                </dd>;
              </div>))}
          </dl>;
        </div>;
      </div>;
      {/* Implementation Process */}
            Our Proven Process
          </p>
          <p className=&quot;mt-6 text-lg leading-8 text-gray-300&quot;>
            From initial assessment to ongoing optimization, we guide you through every step
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
        <div className=&quot;mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none&quot;>
          <div className=&quot;grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5&quot;>
            {implementationSteps.map((step, index) => (
              <div key={step.step} className=&quot;relative&quot;>
                {index < implementationSteps.length - 1 && (
                  <div className=&quot;hidden lg:block absolute top-8 left-8 w-full h-0.5 bg-gray-700&quot;></div>
                )}
                <div className=&quot;bg-white/5 p-6 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-300 hover:scale-105&quot;>
                  <div className=&quot;mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 mb-4&quot;>
                    <step.icon className=&quot;h-8 w-8 text-blue-400&quot; />
                  </div>
                  <div className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>{step.step}</div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{step.title}</h3>
                  <p className=&quot;text-sm text-gray-300&quot;>{step.description}</p>
                </div>
              </div>

>>>>>>> 874273566b5ab11cb4989ad42a33c826f8981b98
        </div>
      </div>
    </div>
  )
}
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
            </Link>
            <a href="/services" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">
              View Services <span aria-hidden="true">→</span>
            </Link>
          </div>        </div>
      </div>
    </div>
  )

    </div>

  );
}