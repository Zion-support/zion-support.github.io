import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Code,
  Smartphone,
  Server
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'AI Services',
    icon: Brain,
    description: 'Cutting-edge artificial intelligence solutions that transform your business',
    href: '/ai-services',
    color: 'from-purple-500 to-pink-500',
    services: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scalable cloud infrastructure and migration services',
    href: '/cloud-solutions',
    color: 'from-blue-500 to-cyan-500',
    services: ['Cloud Migration', 'Infrastructure as Code', 'DevOps', 'Container Orchestration']
  },
  {
    title: 'Security Services',
    icon: Shield,
    description: 'Comprehensive cybersecurity solutions to protect your business',
    href: '/security',
    color: 'from-red-500 to-orange-500',
    services: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
  },
  {
    title: 'Performance Optimization',
    icon: Zap,
    description: 'Optimize your applications for maximum performance and efficiency',
    href: '/performance',
    color: 'from-yellow-500 to-orange-500',
    services: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Testing']
  },
  {
    title: 'Digital Transformation',
    icon: Globe,
    description: 'Transform your business with modern digital solutions',
    href: '/digital-transformation',
    color: 'from-green-500 to-teal-500',
    services: ['Process Automation', 'Legacy Modernization', 'API Development', 'Integration Services']
  },
  {
    title: 'Consulting',
    icon: Users,
    description: 'Expert guidance to help you make the right technology decisions',
    href: '/consulting',
    color: 'from-indigo-500 to-purple-500',
    services: ['Technology Strategy', 'Architecture Review', 'Vendor Selection', 'Project Management']
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your current systems and understand your business goals.',
    icon: Database
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive strategy tailored to your specific needs.',
    icon: Code
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We execute the solution with precision and attention to detail.',
    icon: Server
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'We continuously monitor and optimize for maximum performance.',
    icon: Zap
  }
];

export default function ServicesOverviewPage() {
  return (
    <>
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud solutions, security, and digital transformation." />
        <meta name="keywords" content="technology services, AI, cloud, security, digital transformation, consulting" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to meet your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={category.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="/consulting"
                  className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}