import React from 'react';
import Link from 'next/link';
import { 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Services | Zion Tech Group - AI, Micro SaaS & IT Solutions',
  description: 'Explore our comprehensive portfolio of AI services, micro SaaS development, and enterprise IT solutions. Transform your business with cutting-edge technology.',
  keywords: 'AI services, micro SaaS, IT solutions, business automation, cloud infrastructure, cybersecurity, data analytics, project management, enterprise solutions',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Services | Zion Tech Group',
    description: 'Explore our comprehensive portfolio of AI services, micro SaaS development, and enterprise IT solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Zion Tech Group',
    description: 'Explore our comprehensive portfolio of AI services, micro SaaS development, and enterprise IT solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    name: 'AI Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence solutions including machine learning, NLP, and computer vision.',
    href: '/services/ai-services',
    icon: CpuChipIcon,
    color: 'blue',
  },
  {
    name: 'Micro SaaS Development',
    description: 'Build and launch your next micro SaaS product with our full-stack development expertise and rapid deployment capabilities.',
    href: '/services/micro-saas',
    icon: RocketLaunchIcon,
    color: 'green',
  },
  {
    name: 'Enterprise IT Services',
    description: 'Comprehensive IT solutions including cloud migration, cybersecurity, infrastructure management, and digital transformation.',
    href: '/services/it-services',
    icon: ShieldCheckIcon,
    color: 'purple',
  },
  {
    name: 'Data Analytics',
    description: 'Turn your data into actionable insights with our advanced analytics solutions and business intelligence tools.',
    href: '/services/data-analytics',
    icon: ChartBarIcon,
    color: 'indigo',
  },
];

const features = [
  {
    title: 'Expert Team',
    description: 'Our team of experienced developers and AI specialists bring years of industry expertise to every project.',
    icon: '👥',
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'We use the latest technologies and frameworks to build scalable, secure, and high-performance solutions.',
    icon: '⚡',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance to ensure your solutions run smoothly.',
    icon: '🛠️',
  },
  {
    title: 'Proven Track Record',
    description: 'Successfully delivered 1000+ projects for clients across various industries and business sizes.',
    icon: '🏆',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive AI solutions, micro SaaS development, and enterprise IT services 
              designed to transform your business and drive growth.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our services can transform your business.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contact Sales
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className={`text-${service.color}-600 hover:text-${service.color}-800 font-semibold flex items-center`}
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}