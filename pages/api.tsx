import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  }
];

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries"]
    },
    {
      title: "High Performance",
      description: "Fast, reliable APIs built for scale and speed",
      icon: Zap,
      features: ["Low Latency", "High Throughput", "Global CDN"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with authentication and encryption",
      icon: Shield,
      features: ["OAuth 2.0", "API Keys", "SSL/TLS Encryption"]
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's AI, IT, and micro SAAS services. Developer-friendly APIs with detailed guides and examples." />
        <meta name="keywords" content="API documentation, developer resources, REST API, GraphQL, webhooks, SDK" />
        <meta property="og:title" content="API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Developer-friendly APIs with comprehensive documentation and examples for all our services." />
        <meta property="og:url" content="https://ziontechgroup.com/api" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for all our services. 
                Developer-friendly APIs with detailed guides, examples, and SDKs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#getting-started" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:+13024640950" className="hover:text-blue-300">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">Developer Support Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section id="getting-started" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering comprehensive 
                functionality and excellent developer experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our API Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive API solutions designed for modern applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our developer support team to get started with our APIs 
                and integrate our services into your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Developer Support
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}