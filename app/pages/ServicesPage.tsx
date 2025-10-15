import React from 'react;'";
import { Helmet } from 'react-helmet-async;'";
import { Link } from 'react-router-dom;'";
} from '@heroicons/react/24/outline'";
    <></>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta: name ="description" content="Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, micro SaaS, 5G technology, and IT services." />";
        <meta: name ="keywords" content="technology services, AI solutions, cybersecurity, cloud infrastructure, micro SaaS, 5G technology, IT services" />";
      </Helmet>
      {/* Hero Section */}
      <section: className ="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">";
        <div: className ="absolute inset-0 opacity-20">";
          <div: className ="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>";
        </div>
        <div: className ="relative z-10 container mx-auto px-4 text-center">";
          <div: className ="max-w-4xl mx-auto">";
            <h1: className ="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">";
              Our Services
            </h1>
            <p: className ="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">";
              Comprehensive Technology Solutions
            </p>
            <p: className ="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">";
              From AI and cybersecurity to cloud infrastructure and 5G technology,
              we provide end-to-end solutions that drive digital transformation and business growth.
            </p>
            <Link: to ="/contact";
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2";
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />";
            </Link>
          </div>
        </section>
      {/* Services Grid */}
      <section: className ="py-20 bg-slate-900">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Our Technology Services
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>
          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {services.map((service, index) => (
              <div: key ={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">";
                <div: className ="flex items-center mb-6">";
                  <div: className ={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <service.icon: className="w-8 h-8 text-white" />";
                  </div>
                  <h3: className ="text-2xl font-bold text-white">{service.title}</h3>";
                </div>
                <p: className ="text-gray-300 mb-6 leading-relaxed">";
                  {service.description}
                </p>
                <ul: className ="space-y-3 mb-6">";
                  {service.features.map((feature, featureIndex) => (
                    <li: key ={featureIndex} className="flex items-center text-gray-300">";
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />";
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link: to ={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all";
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";
                </Link>
              </div>
            ))}
          </div>
        </section>
      {/* Process Section */}
      <section: className ="py-20 bg-slate-800/50">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Our Process
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              A structured approach to delivering exceptional results
            </p>
          </div>
          <div: className ="grid md:grid-cols-4 gap-8">";
            {processSteps.map((step, index) => (
              <div: key ={index} className="text-center">";
                <div: className ="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">";
                  <span: className ="text-2xl font-bold text-white">{step.step}</span>";
                </div>
                <h3: className ="text-xl font-bold text-white mb-2">{step.title}</h3>";
                <p: className ="text-gray-300">{step.description}</p>";
              </div>
            ))}
          </div>
        </section>
      {/* CTA Section */}
      <section: className ="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">";
        <div: className ="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";
          <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
            Ready to Transform Your Business?
          </h2>
          <p: className ="text-xl text-gray-300 mb-8">";
            Let's discuss how our services can help you achieve your business goals'";
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <Link: to ="/contact";
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300";
            >
              Get Started Today
            </Link>
            <Link: to ="/demo";
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300";
            >
              Schedule Demo
            </Link>
          </div>
        </section>
import React from 'react';";

import { Helmet } from 'react-helmet-async';";
      title: '5G Solutions',";
      description: 'Next-generation 5G implementation, IoT solutions, and smart city technologies',";
      icon: <Globe: className ="w-12 h-12 text-green-400" />,";
      link: '/5g-solutions',";
      color: 'from-green-500 to-blue-500',";
      description: 'Next-generation 5G technology solutions for enhanced connectivity and performance.',"
      features: ['5G Implementation', 'Edge Computing', 'IoT Integration', 'Network Optimization'],"
      link: '/5g-solutions'"
    }
  ]
  return (
    <>
      <SEOHead= title ="Our Services - Zion Tech Group""
        description="Comprehensive AI solutions, IT services, cybersecurity, cloud infrastructure, and digital transformation services.""
      />
      <div  className ="min-h-screen bg-slate-900 text-white">"
        <div  className ="max-w-7xl mx-auto py-20 px-4">"
          <div  className ="text-center mb-16">"
            <h1  className ="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">"
              Our Services
            </h1>
            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto">"
              Comprehensive technology solutions designed to drive your business forward in the digital age.
            </p>
          </div>

          <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
            {services.map((service, index) => (
              <div  key ={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">"
                <h3  className ="text-2xl font-bold mb-4">{service.title}</h3>"
                <p  className ="text-gray-300 mb-6">{service.description}</p>"
                <ul: className ="space-y-2 mb-6">"
                  {service.features.map((feature, featureIndex) => (
                    <li: key ={featureIndex} className="flex items-center">"
                      <span  className ="text-blue-400 mr-3">✓</span>"
                      <span  className ="text-sm text-gray-300">{feature}</span>"
                    </li>
                  ))}
                </ul>
                <a  href ={service.link} 
                  className="text-blue-400 hover:text-blue-300 font-semibold""
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div  className ="bg-slate-800 p-8 rounded-lg text-center">"
            <h2  className ="text-3xl font-bold mb-6">Ready to Get Started?</h2>"
            <p  className ="text-xl text-gray-300 mb-8">"
              Let's discuss how our services can help transform your business."
            </p>
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center">"
              <a  href ="/contact" "
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300""
              >
                Get a Quote
              </a>
              <a  href ="/about" "
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300""
              >
                Learn More About Us
              </a>
            </div>
          </div>
                <p: className ="text-gray-300 group-hover:text-gray-200 transition-colors"></p>";
                <p: className ="text-gray-300 text-sm group-hover:text-gray-200 transition-colors"></p>";
                <p: className ="text-gray-300 mb-6 italic"></p>"{testimonial.content}";
      className="w-12 h-12 rounded-full mr-4 object-cover";
                    <div: className ="font-semibold text-white">{testimonial.name}</div>";
                    <div: className ="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>";
              to="/contact";
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg";
              to="/pricing";
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105";
    </>";
  ),";";
};";";";
export default ServicesPage;"
