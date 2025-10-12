import React from 'react';
import { CheckCircle, ArrowRight, Smartphone, Globe, Brain, Shield, Database, Code, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Climate Solutions Pro',
      description: 'Advanced AI-powered climate monitoring and sustainability solutions for businesses.',
      features: ['Carbon footprint tracking', 'Sustainability reporting', 'Climate risk assessment', 'Green energy optimization', 'Environmental compliance', 'Real-time monitoring'],
      price: 'Starting at $199/month',
      link: '/ai-climate-solutions-pro',
      popular: true
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Specialized Solutions',
      description: 'Focused micro-SaaS applications designed for specific business needs and industries.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost-Effective',
      description: 'Affordable pricing models that provide excellent value for small to medium businesses.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Easy Integration',
      description: 'Seamless integration with your existing systems and workflows.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business and adapt to changing needs.'
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'EcoTech Solutions',
      content: 'The AI Climate Solutions Pro has helped us track and reduce our carbon footprint by 40%. It\'s an essential tool for any environmentally conscious business.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Green Energy Corp',
      content: 'This micro-SaaS solution provides exactly what we need for sustainability reporting. The interface is intuitive and the insights are valuable.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Sustainable Future Inc',
      content: 'The climate monitoring features are outstanding. We can now make data-driven decisions about our environmental impact.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group | Specialized Software Solutions</title>
        <meta name="description" content="Discover our micro SaaS services including AI climate solutions and specialized software applications designed for specific business needs." />
        <meta name="keywords" content="micro SaaS, specialized software, climate solutions, business applications, software as a service" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Specialized software solutions designed for specific business needs. 
                Our micro SaaS applications provide focused functionality with enterprise-grade quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Focused applications that solve specific business challenges
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {service.price}
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SaaS Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver focused solutions that provide maximum value for your specific needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Micro SaaS Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join businesses that trust Zion Tech Group for their specialized software needs. 
              Get started today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}