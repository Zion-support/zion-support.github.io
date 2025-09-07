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
  StarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

const stats = [
  { label: 'Companies Served', value: '500+' },
  { label: 'Projects Completed', value: '1,200+' },
  { label: 'Years of Experience', value: '10+' },
  { label: 'Countries', value: '25+' },
];

const features = [
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
    name: 'Enterprise IT',
    description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation solutions.',
    href: '/services/it-services',
    icon: ShieldCheckIcon,
    color: 'purple',
  },
];

const testimonials = [
  {
    content: "Zion Tech Group transformed our AI infrastructure completely. Their solutions increased our efficiency by 300%.",
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8">
              <RocketLaunchIcon className="h-4 w-4 mr-2" />
              Trusted by 500+ companies worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build and scale with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI
              </span>,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Micro SaaS
              </span>{' '}
              and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Enterprise IT
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We design, build and operate production-grade platforms: AI copilots, data/ML pipelines,
              automation, cloud infrastructure, and secure micro SaaS products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions that drive real business results across AI, micro SaaS, and IT services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-100 mb-6`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <Link
                  href={feature.href}
                  className={`inline-flex items-center text-${feature.color}-600 font-semibold hover:text-${feature.color}-700 transition-colors`}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with compliance certifications and audit trails.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 mb-6">
                <ChartBarIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">Solutions that grow with your business and handle enterprise-scale loads.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 mb-6">
                <CpuChipIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-600">Tailored solutions designed specifically for your unique requirements.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-orange-100 mb-6">
                <UserGroupIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">24/7 enterprise support with dedicated account managers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
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
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
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
      </div>
=======
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg" aria-labelledby="why-choose-heading">
        <div className="text-center mb-16">
          <h2 id="why-choose-heading" className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            We combine technical expertise with business acumen to deliver
            solutions that drive real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Key advantages and benefits">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              Fast Delivery
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Rapid development and deployment with agile methodologies
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Enterprise-grade security and 99.9% uptime guarantee
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
              Custom Solutions
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Tailored solutions that fit your specific business needs
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
              24/7 Support
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Round-the-clock technical support and maintenance
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our AI-powered solutions to drive innovation and growth.
            Let's build something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}