import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Our Services - Zion Tech Group',
  description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
};

<<<<<<< HEAD
export default function ServicePage() {
  return <ComprehensiveServicesShowcase2025 />;
=======
export default function ServicesPage() {
  const services = [
    {
      title: 'AI & Machine Learning',
      href: '/services/ai-services',
      description: 'Intelligent automation, predictive analytics, and custom AI models.',
      icon: '🤖',
      category: 'AI Solutions'
    },
    {
      title: 'Micro SaaS Development',
      href: '/services/micro-saas',
      description: 'Scalable, secure micro SaaS products for specific business challenges.',
      icon: '🚀',
      category: 'Development'
    },
    {
      title: 'Cloud Infrastructure',
      href: '/services/cloud-services',
      description: 'Scalable cloud solutions, DevOps, and infrastructure management.',
      icon: '☁️',
      category: 'Infrastructure'
    },
    {
      title: 'Blockchain Solutions',
      href: '/services/blockchain',
      description: 'Smart contracts, DeFi platforms, and blockchain integration.',
      icon: '⛓️',
      category: 'Blockchain'
    },
    {
      title: 'Data Analytics',
      href: '/services/data-analytics',
      description: 'Transform raw data into actionable insights with advanced analytics.',
      icon: '📊',
      category: 'Analytics'
    },
    {
      title: 'Cybersecurity',
      href: '/services/cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🔒',
      category: 'Security'
    },
    {
      title: 'Project Management',
      href: '/services/project-management',
      description: 'AI-powered project management and team collaboration tools.',
      icon: '📋',
      category: 'Management'
    },
    {
      title: 'E-commerce Solutions',
      href: '/services/ecommerce-platform',
      description: 'Complete e-commerce platforms with AI-powered features.',
      icon: '🛒',
      category: 'E-commerce'
    },
    {
      title: 'Mobile Development',
      href: '/services/mobile-development',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
      category: 'Mobile'
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business. 
            From AI-powered automation to complete digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            All Services
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                </div>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution 
            that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9451
}