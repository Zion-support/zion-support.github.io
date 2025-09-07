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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Transform your business with cutting-edge artificial intelligence solutions',
    icon: CpuChipIcon,
    color: 'blue',
    services: [
      { name: 'AI-Powered CRM', href: '/services/ai-powered-crm', description: 'Intelligent customer relationship management' },
      { name: 'AI Meeting Assistant', href: '/services/ai-meeting-assistant', description: 'Automated meeting transcription and insights' },
      { name: 'AI Services Suite', href: '/services/ai-services', description: 'Comprehensive AI solutions for business' },
    ]
  },
  {
    title: 'Micro SaaS Development',
    description: 'Build and launch your next micro SaaS product with our expertise',
    icon: RocketLaunchIcon,
    color: 'green',
    services: [
      { name: 'Micro SaaS Solutions', href: '/services/micro-saas', description: 'Custom micro SaaS development' },
      { name: 'SaaS Platform Development', href: '/services/saas', description: 'Full-stack SaaS platform creation' },
    ]
  },
  {
    title: 'Enterprise IT',
    description: 'Comprehensive IT services for enterprise-scale operations',
    icon: ShieldCheckIcon,
    color: 'purple',
    services: [
      { name: 'IT Services', href: '/services/it-services', description: 'Complete IT infrastructure management' },
      { name: 'Cloud Migration', href: '/services/cloud-migration', description: 'Seamless cloud infrastructure migration' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced security solutions' },
    ]
  },
  {
    title: 'Data & Analytics',
    description: 'Unlock insights from your data with advanced analytics solutions',
    icon: ChartBarIcon,
    color: 'orange',
    services: [
      { name: 'Predictive Analytics', href: '/services/predictive-analytics', description: 'AI-driven business forecasting' },
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Comprehensive data analysis solutions' },
    ]
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's AI solutions transformed our customer service operations. Response times improved by 300%.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    rating: 5,
  },
  {
    content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",
    author: "Michael Chen",
    role: "Founder, StartupXYZ",
    rating: 5,
  },
  {
    content: "Outstanding IT services and support. They helped us migrate to the cloud seamlessly.",
    author: "Emily Rodriguez",
    role: "IT Director, GlobalCorp",
    rating: 5,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions across AI, Micro SaaS, and Enterprise IT to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <Link
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Categories */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive solutions across multiple technology domains to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-${category.color}-100 mb-6`}>
                  <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
=======
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
>>>>>>> 5e681e2219508d3428abd320b27556dbdc787262
}