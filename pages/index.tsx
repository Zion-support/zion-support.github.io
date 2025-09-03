import React from 'react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'AI Services',
      description: 'Transform your business with cutting-edge AI solutions including customer support automation, predictive analytics, and content generation.',
      href: '/ai-services',
      icon: '🤖'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and infrastructure modernization.',
      href: '/it-services',
      icon: '☁️'
    },
    {
      title: 'Micro SaaS',
      description: 'Specialized software solutions that solve specific business problems with rapid deployment and easy integration.',
      href: '/micro-saas',
      icon: '⚡'
    }
  ];

  const features = [
    'Expert team with 10+ years experience',
    'Cutting-edge technology solutions',
    '24/7 support and monitoring',
    'Scalable and secure architectures',
    'Proven track record of success',
    'Custom solutions for every need'
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion Tech Group</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.href} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                We combine deep technical expertise with business acumen to deliver solutions 
                that not only work but drive real business value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6">Let&apos;s discuss how our technology solutions can help you achieve your goals.</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Custom solutions</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Ongoing support</span>
                </div>
              </div>
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-gray-100 transition-colors">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
