<<<<<<< HEAD
<<<<<<< HEAD
import { Metadata } from 'next';
import Link from "next/link";
import React from 'react';

export const metadata: Metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI development, micro SaaS solutions, FinTech applications, HealthTech innovations, and EdTech platforms. Transform your business with cutting-edge technology."
};

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
            label="Projects Delivered"
            description="Successful implementations"
          />
          <StatCard 
            number="$2B+" 
            label="Market Value Created"
            description="For our clients"
          />
          <StatCard 
            number="99.9%" 
            label="Uptime Guarantee"
            description="Reliable performance"
          />
          <StatCard 
            number="24/7" 
            label="Expert Support"
            description="Always available"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="Custom AI solutions including LLMs, RAG systems, and automation"
          bullets={[
            "Custom LLM development",
            "RAG systems",
            "AI automation",
          ]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/fintech"
          title="FinTech"
          description="Financial technology solutions with compliance and security"
          bullets={[
            "Payment processing",
            "Compliance solutions",
            "Risk management",
          ]}
          icon="💰"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
          description="Comprehensive security solutions and threat protection"
          bullets={[
            "Security assessments",
            "Threat detection",
            "Compliance audits",
          ]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
          description="Business intelligence and data-driven insights"
          bullets={[
            "Real-time dashboards",
            "Predictive analytics",
            "Data visualization",
          ]}
          icon="📊"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Complete IT infrastructure and support solutions"
          bullets={[
            "Cloud migration",
            "System administration",
            "Technical support",
          ]}
          icon="💻"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create a custom solution that drives real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Email Us
          </a>
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import React from 'react';


export const metadata = {
<<<<<<< HEAD
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.',
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  title: 'Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions',
  description: 'Comprehensive technology services including AI development, micro SaaS solutions, financial technology, healthcare technology, and educational technology. Transform your business with cutting-edge solutions.',
  keywords: 'AI services, micro SaaS, FinTech, HealthTech, EdTech, technology solutions, software development, digital transformation'
};

export default function ServicePage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive technology solutions to accelerate your digital transformation. 
          From AI development to micro SaaS products, we deliver enterprise-grade solutions that drive real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD

function StatCard({ number, label, description }: { 
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function ServiceCard({ 
  href, 
  title, 
  description, 
  bullets, 
  icon 
}: { 
  href: string; 
  title: string; 
  description: string; 
  bullets: string[]; 
  icon: string; 
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
