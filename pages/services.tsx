import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Code, Database, Smartphone, Server, Lock, BarChart3 } from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    category: "AI Services",
    icon: Brain,
    color: "blue",
    description: "80+ cutting-edge AI solutions",
    services: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Computer Vision & Image Recognition",
      "Predictive Analytics",
      "AI Chatbots & Virtual Assistants",
      "Quantum AI Solutions"
    ],
    href: "/ai-services"
  },
  {
    category: "IT Services",
    icon: Network,
    color: "green",
    description: "70+ comprehensive IT solutions",
    services: [
      "Cloud Infrastructure & Migration",
      "Cybersecurity & Zero-Trust Architecture",
      "DevOps & CI/CD Implementation",
      "System Integration & Modernization",
      "IT Consulting & Strategy",
      "Quantum Computing Solutions"
    ],
    href: "/it-services"
  },
  {
    category: "Micro SaaS",
    icon: Cloud,
    color: "purple",
    description: "85+ innovative micro SaaS platforms",
    services: [
      "Custom SaaS Development",
      "API Development & Integration",
      "Multi-tenant Architecture",
      "Subscription Management",
      "Real-time Analytics",
      "Scalable Cloud Solutions"
    ],
    href: "/micro-saas"
  }
];

const additionalServices = [
  {
    title: "Web Development",
    icon: Code,
    description: "Modern, responsive web applications built with cutting-edge technologies"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps for iOS and Android"
  },
  {
    title: "Database Solutions",
    icon: Database,
    description: "Scalable database design, optimization, and migration services"
  },
  {
    title: "Cloud Services",
    icon: Server,
    description: "Complete cloud infrastructure setup, management, and optimization"
  },
  {
    title: "Security Services",
    icon: Lock,
    description: "Comprehensive cybersecurity solutions and compliance management"
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    description: "Business intelligence and data analytics solutions"
  }
];

export default function ServicesPage() {
  return (
    <Layout
      title="Our Services - AI, IT & Micro SaaS Solutions"
      description="Explore our comprehensive range of AI services, IT solutions, and micro SaaS platforms. 235+ services designed to transform your business."
      keywords="AI services, IT services, micro SaaS, web development, mobile apps, cloud solutions, cybersecurity"
      ogTitle="Our Services - Zion Tech Group"
      ogDescription="Discover our 235+ technology services designed to accelerate your digital transformation."
      ogUrl="https://ziontechgroup.com/services"
    >

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              235+ Technology Solutions
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From AI-powered solutions to comprehensive IT services and innovative micro SaaS platforms, 
              we provide everything you need to transform your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three comprehensive categories covering all aspects of modern technology needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-${service.color}-100 p-3 rounded-lg mr-4`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.category}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700 font-semibold`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your core technology needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime guarantee"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "95+ certified professionals with 15+ years experience"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your needs and define project requirements"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop a comprehensive solution strategy and roadmap"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the solution with agile development methodology"
              },
              {
                step: "04",
                title: "Support",
                description: "Provide ongoing maintenance and optimization services"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can transform your business. 
            Get a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}