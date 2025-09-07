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
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive AI, micro SaaS, and IT solutions to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions across multiple domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              href="/services/ai-services"
              title="AI Services"
              description="Custom AI solutions, machine learning models, and intelligent automation"
              icon={<CpuChipIcon className="h-8 w-8 text-blue-600" />}
            />
            
            <ServiceCard
              href="/services/micro-saas"
              title="Micro SaaS Development"
              description="End-to-end SaaS product development from concept to deployment"
              icon={<GlobeAltIcon className="h-8 w-8 text-green-600" />}
            />
            
            <ServiceCard
              href="/services/cloud-services"
              title="Cloud Services"
              description="Scalable cloud infrastructure and DevOps solutions"
              icon={<ChartBarIcon className="h-8 w-8 text-purple-600" />}
            />
            
            <ServiceCard
              href="/services/cybersecurity"
              title="Cybersecurity"
              description="Comprehensive security solutions and compliance consulting"
              icon={<ShieldCheckIcon className="h-8 w-8 text-red-600" />}
            />
            
            <ServiceCard
              href="/services/automation"
              title="Automation Services"
              description="RPA, workflow automation, and business process optimization"
              icon={<LightBulbIcon className="h-8 w-8 text-yellow-600" />}
            />
            
            <ServiceCard
              href="/services/consulting"
              title="Technology Consulting"
              description="Digital transformation, strategy, and architecture consulting"
              icon={<UserGroupIcon className="h-8 w-8 text-indigo-600" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can drive your success.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ href, title, description, icon }) {
  return (
    <Link
      href={href}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group"
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
        Learn more
        <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}