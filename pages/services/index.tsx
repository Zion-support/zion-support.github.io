import type { NextPage } from 'next';
import Head from 'next/head';
import { serviceCategories, getServicesByCategory } from '../../utils/data/services';

const ServicesPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>Our Services - Zion Tech Group | Comprehensive IT & AI Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of IT services, AI solutions, and micro SAAS platforms. From AI development to cloud migration, we deliver cutting-edge technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT consulting, cloud migration, web development, mobile apps, cybersecurity, blockchain, SaaS development, Zion Tech Group" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From AI-powered chatbots to enterprise cloud migration, we deliver innovative technology solutions 
            that drive business growth and digital transformation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#services" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Services
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getServicesByCategory(category.id).length} services available
                </p>
                <a 
                  href={`#${category.id}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Services →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services by Category */}
      {serviceCategories.map((category) => (
        <section key={category.id} id={category.id} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {category.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional {category.name.toLowerCase()} to accelerate your business growth
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {getServicesByCategory(category.id).map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-blue-600">
                            ${service.pricing.from.toLocaleString()}
                          </span>
                          {service.pricing.to && (
                            <span className="text-gray-600"> - ${service.pricing.to.toLocaleString()}</span>
                          )}
                          <span className="text-gray-600"> {service.pricing.currency}</span>
                        </div>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {service.pricing.type}
                        </span>
                      </div>
                      {service.pricing.details && (
                        <p className="text-sm text-gray-600 mt-2">{service.pricing.details}</p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 5).map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Delivery & Support */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-semibold text-gray-800">Delivery:</span>
                        <p className="text-gray-600">{service.estimatedDelivery}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Support:</span>
                        <p className="text-gray-600">{service.support}</p>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Contact Information:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-600 w-16">Phone:</span>
                          <a href={`tel:${service.contactInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 w-16">Email:</span>
                          <a href={`mailto:${service.contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 w-16">Website:</span>
                          <a href={service.contactInfo.website} className="text-blue-600 hover:text-blue-800">
                            {service.contactInfo.website}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4">
                      <a 
                        href={`mailto:${service.contactInfo.email}?subject=Quote Request for ${service.title}`}
                        className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Get Quote
                      </a>
                      <a 
                        href={`tel:${service.contactInfo.phone}`}
                        className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and commitment to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with years of experience in cutting-edge technologies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Agile development methodology ensuring timely project delivery
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing and quality control processes for reliable solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our technology solutions can drive your business forward. 
            Contact us today for a free consultation.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;