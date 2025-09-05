import * as React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
import {
  Brain,
  Cloud,
  Database,
  Shield,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Cpu
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions and machine learning models',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting',
        'Model deployment & scaling'
      ],
      href: '/ai-services',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure for your business',
      icon: Cloud,
      features: [
        'Cloud migration & strategy',
        'Multi-cloud architecture',
        'Serverless computing',
        'Container orchestration',
        'Cloud security & compliance',
        '24/7 monitoring & support'
      ],
      href: '/cloud-solutions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Comprehensive IT solutions to keep your business running smoothly',
      icon: Cpu,
      features: [
        'Network infrastructure',
        'System administration',
        'IT support & maintenance',
        'Security implementation',
        'Backup & disaster recovery',
        'Technology consulting'
      ],
      href: '/it-services',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'database-solutions',
      title: 'Database Solutions',
      description: 'Optimize your data management with our database expertise',
      icon: Database,
      features: [
        'Database design & optimization',
        'Data migration services',
        'Performance tuning',
        'Backup & recovery solutions',
        'Data warehousing',
        'Real-time analytics'
      ],
      href: '/database-solutions',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions',
      icon: Shield,
      features: [
        'Security assessment & auditing',
        'Threat detection & response',
        'Identity & access management',
        'Compliance & governance',
        'Security training',
        'Incident response planning'
      ],
      href: '/security',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business needs',
      icon: Code,
      features: [
        'Web application development',
        'Mobile app development',
        'API development & integration',
        'Legacy system modernization',
        'Microservices architecture',
        'Quality assurance & testing'
      ],
      href: '/custom-development',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

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
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, IT solutions, micro SaaS platforms, cybersecurity, and cloud services. Expert solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cybersecurity, cloud solutions, mobile development, technology consulting" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From AI development to cloud solutions, we provide end-to-end technology services 
              that drive business growth and digital transformation.
            </p>
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            </Link>
          </div>
        </div>
      </section>
    </>
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

                    <div className="p-6">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
    </MainLayout>
  );
}