<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Network, Cloud, Shield, Zap, Database, Smartphone, Globe, ArrowRight, CheckCircle, Users, Award } from 'lucide-react';

const services = [
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "IT Services",
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],
    pricing: "Starting at $1,500/month"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],
    pricing: "Starting at $2,000/month"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps automation for modern applications",
    icon: Globe,
    href: "/cloud-solutions",
    features: ["AWS/Azure/GCP Migration", "Container Orchestration", "Serverless Architecture", "Cloud Security", "Auto-scaling", "Cost Optimization"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
    icon: Smartphone,
    href: "/mobile-development",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps", "Mobile UI/UX", "App Store Optimization"],
    pricing: "Starting at $3,000/month"
  }
];

const stats = [
  { number: '235+', label: 'Services Available' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, IT solutions, micro SaaS platforms, cybersecurity, and cloud services. Expert solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cybersecurity, cloud solutions, mobile development, technology consulting" />
      </Head>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
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
=======
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From AI development to cloud solutions, we provide end-to-end technology services 
              that drive business growth and digital transformation.
            </p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your core technology needs.
=======
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services to help your business thrive in the digital age.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
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
=======
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
          </div>
        </div>
      </section>

      {/* Process Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
=======
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
<<<<<<< HEAD
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
=======
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and understand your business goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Planning</h3>
              <p className="text-gray-600">We create a detailed project plan with timelines and milestones.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Development</h3>
              <p className="text-gray-600">We build your solution using cutting-edge technologies and best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Deployment</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support to ensure optimal performance.</p>
            </div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
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
=======
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Contact Us Today
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get a Quote
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
            </Link>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </Layout>
=======
    </>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-f1b5
  );
}