import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, web development, mobile apps, data analytics, and cybersecurity solutions. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="IT services, cloud infrastructure, web development, mobile development, data analytics, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">IT Services</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Comprehensive IT services and solutions to modernize your infrastructure and accelerate digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* IT Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.itSolutions.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-green-600 font-semibold">{service.marketPrice}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-blue-500 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Link 
                    to={`/${service.id}`} 
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                  <a 
                    href={`tel:${service.contactInfo.phone}`}
                    className="border border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use the latest technologies and frameworks to deliver cutting-edge IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'AWS', icon: '☁️', category: 'Cloud' },
                { name: 'Azure', icon: '🔵', category: 'Cloud' },
                { name: 'Google Cloud', icon: '🌐', category: 'Cloud' },
                { name: 'React', icon: '⚛️', category: 'Frontend' },
                { name: 'Node.js', icon: '🟢', category: 'Backend' },
                { name: 'Python', icon: '🐍', category: 'Backend' },
                { name: 'Docker', icon: '🐳', category: 'DevOps' },
                { name: 'Kubernetes', icon: '⚙️', category: 'DevOps' },
                { name: 'MongoDB', icon: '🍃', category: 'Database' },
                { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
                { name: 'Redis', icon: '🔴', category: 'Database' },
                { name: 'Elasticsearch', icon: '🔍', category: 'Search' }
              ].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries We Serve Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our IT solutions are tailored to meet the unique needs of various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  industry: 'Healthcare',
                  description: 'HIPAA-compliant solutions for medical practices and hospitals',
                  icon: '🏥',
                  solutions: ['EMR Systems', 'Telemedicine', 'Patient Portals', 'Data Security']
                },
                {
                  industry: 'Finance',
                  description: 'Secure financial technology solutions and compliance',
                  icon: '🏦',
                  solutions: ['Banking Apps', 'Payment Systems', 'Risk Management', 'Compliance']
                },
                {
                  industry: 'E-commerce',
                  description: 'Scalable online platforms and payment processing',
                  icon: '🛒',
                  solutions: ['Online Stores', 'Payment Gateways', 'Inventory Management', 'Analytics']
                },
                {
                  industry: 'Education',
                  description: 'Learning management systems and educational technology',
                  icon: '🎓',
                  solutions: ['LMS Platforms', 'Student Portals', 'Online Learning', 'Assessment Tools']
                }
              ].map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.industry}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver high-quality IT solutions on time and within budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Discovery & Planning',
                  description: 'We analyze your requirements and create a detailed project plan',
                  icon: '🔍'
                },
                {
                  step: '2',
                  title: 'Design & Architecture',
                  description: 'Our team designs the solution architecture and user interface',
                  icon: '🎨'
                },
                {
                  step: '3',
                  title: 'Development & Testing',
                  description: 'We build and thoroughly test your solution using agile methodology',
                  icon: '⚙️'
                },
                {
                  step: '4',
                  title: 'Deployment & Support',
                  description: 'We deploy your solution and provide ongoing maintenance and support',
                  icon: '🚀'
                }
              ].map((process, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow text-center">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">{process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let our IT experts help you transform your technology stack and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6 text-green-100">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;