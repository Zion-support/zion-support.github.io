import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import Head from 'next/head';
import { Brain, Cloud, Zap, Shield, BarChart3, Code, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      category: "AI Services",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      services: [
        {
          name: "AI Content Creation Tools",
          description: "AI-powered tools for generating high-quality content including blog posts, social media updates, and marketing materials.",
          price: "$299/month",
          features: ["Automated content generation", "Brand voice consistency", "Multi-platform publishing", "SEO optimization"]
        },
        {
          name: "AI Email Automation",
          description: "Intelligent email responder that reads and responds to emails, handling inquiries and flagging important messages.",
          price: "$199/month",
          features: ["Smart email routing", "Automated responses", "Priority flagging", "Analytics dashboard"]
        },
        {
          name: "AI Business Intelligence",
          description: "Advanced analytics platform providing insights and predictions for better business decision-making.",
          price: "$499/month",
          features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "Data visualization"]
        }
      ]
    },
    {
      category: "IT Services",
      icon: Cloud,
      color: "from-green-500 to-blue-600",
      services: [
        {
          name: "Cloud Infrastructure Management",
          description: "Complete cloud infrastructure setup, management, and optimization for maximum performance and cost efficiency.",
          price: "$599/month",
          features: ["24/7 monitoring", "Auto-scaling", "Security management", "Cost optimization"]
        },
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive cybersecurity services including threat detection, prevention, and incident response.",
          price: "$799/month",
          features: ["Threat monitoring", "Vulnerability assessment", "Incident response", "Compliance management"]
        },
        {
          name: "Network Infrastructure",
          description: "Design, implementation, and maintenance of robust network infrastructure for businesses of all sizes.",
          price: "$899/month",
          features: ["Network design", "Implementation", "24/7 support", "Performance optimization"]
        }
      ]
=======
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Code, Database, Smartphone, Server, Lock, BarChart3 } from 'lucide-react';
import Layout from '../components/Layout';

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
        'Cloud security & compliance',
        '24/7 monitoring & support'
      ],
      href: '/cloud-solutions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
>>>>>>> pr-11935
    },
    {
      category: "Micro SaaS",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      services: [
        {
          name: "Business Process Automation",
          description: "Custom automation solutions to streamline your business processes and increase efficiency.",
          price: "$399/month",
          features: ["Workflow automation", "Integration services", "Custom dashboards", "Performance tracking"]
        },
        {
          name: "Customer Relationship Management",
          description: "Advanced CRM system with AI-powered insights and automation capabilities.",
          price: "$299/month",
          features: ["Contact management", "Sales pipeline", "AI insights", "Email integration"]
        },
        {
          name: "Project Management Suite",
          description: "Comprehensive project management platform with team collaboration and resource planning tools.",
          price: "$199/month",
          features: ["Task management", "Team collaboration", "Resource planning", "Progress tracking"]
        }
      ]
    }
  ];

<<<<<<< HEAD
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI services, IT solutions, and micro SaaS applications designed to transform your business." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <section key={categoryIndex} className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-colors">
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                          {service.price}
                        </div>
                      </div>
=======
  const serviceCategories = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive solutions for large organizations',
      services: ['AI Strategy', 'Cloud Migration', 'Digital Transformation', 'Security Consulting'],
      href: '/enterprise-solutions'
    },
    {
      title: 'Startup Solutions',
      description: 'Scalable solutions for growing businesses',
      services: ['MVP Development', 'Cloud Infrastructure', 'AI Integration', 'Growth Consulting'],
      href: '/startup-solutions'
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for different industries',
      services: ['Healthcare', 'Finance', 'E-commerce', 'Manufacturing'],
      href: '/industries'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <MainLayout
      title="Our Services - Zion Tech Group"
      description="Discover our comprehensive range of technology services including AI solutions, cloud services, cybersecurity, and custom development. Transform your business with our expertise."
      keywords="AI services, cloud solutions, cybersecurity, custom development, IT services, technology consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions to transform your business and drive growth. 
                From AI and cloud services to cybersecurity and custom development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services designed to meet your business needs 
                and drive digital transformation.
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`p-6 ${service.bgColor}`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-white ${service.iconColor}`}>
                          <service.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 ml-4">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
>>>>>>> pr-11935

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center">
                          Get Started
                        </Link>
                        <Link href="/pricing" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center">
                          View Pricing
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and get a customized solution
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </>
=======

        {/* Service Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right solution category for your business size and industry needs.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={category.href}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                      Explore Category
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Certified professionals with years of experience'
                  },
                  {
                    icon: Zap,
                    title: 'Fast Delivery',
                    description: 'Agile development with rapid deployment'
                  },
                  {
                    icon: Shield,
                    title: 'Secure & Reliable',
                    description: 'Enterprise-grade security and 99.9% uptime'
                  },
                  {
                    icon: Globe,
                    title: 'Global Support',
                    description: '24/7 support across multiple time zones'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help you achieve your business goals. 
                Get a free consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> pr-11935
  );
}