import React from 'react';
import Layout from '../../components/Layout';

const MicroSaaSPage: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />, title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes, not months. Our micro SaaS solutions are designed for quick deployment.'
    }, {
      icon: <Users className="w-8 h-8" />, title: 'Scalable Solutions',
      description: 'Start small and grow as your business expands. Our solutions scale with your needs.'
    }, {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security', description: 'Bank-level security with SOC 2 compliance, ensuring your data is always protected.'
    }, {
      icon: <Star className="w-8 h-8" />,
      title: 'Proven Results', description: 'Track record of successful implementations with measurable ROI for our clients.'
    }
  ];

  return (
    <Layout 
      title="Micro SaaS Development - Zion Tech Group" 
      description="Build and launch successful micro SaaS applications with our comprehensive development services. From idea validation to scaling, we help you succeed."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Turn your innovative ideas into successful micro SaaS applications. We provide end-to-end development services from concept to launch and scaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your SaaS Journey
              </a>
              <a 
                href="/pricing" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    <a 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Development Process</h2>
            <div className="space-y-8">
              {developmentProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Micro SaaS Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Time to Market</h3>
                <p className="text-gray-600">Rapid development and deployment to get your SaaS to market quickly and start generating revenue.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Focused</h3>
                <p className="text-gray-600">Built-in monetization strategies and payment systems to ensure your SaaS generates sustainable revenue.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">Cloud-native architecture designed to scale with your user base and business growth.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's turn your innovative idea into a successful micro SaaS application. Our expert team is ready to help you from concept to launch.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Building Today
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Let&apos;s discuss how our micro SaaS solutions can help streamline your operations ''
            and drive growth for your business.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="tel:+13024640950">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                Call +1 302 464 0950
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )};

export default MicroSaaSPage;