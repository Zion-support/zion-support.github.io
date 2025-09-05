import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Rocket, BarChart3, Settings, Globe, Cloud, ArrowRight, CheckCircle, Star, Zap, Users, Brain, Network, Lock, TrendingUp, Clock, Award } from 'lucide-react';;

const solutions = [
  {
    title: 'Enterprise Solutions',
    icon: Shield,
    description: 'Comprehensive enterprise-grade solutions designed for large organizations with complex requirements.',
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Scalable Architecture',
      'Enterprise Security',
      '24/7 Support',
      'Custom Integration',
      'Compliance Management',
      'Advanced Analytics'
    ],
    benefits: [
      'Reduced Operational Costs',
      'Enhanced Security',
      'Improved Efficiency',
      'Better Compliance'
    ],
    pricing: 'Custom Pricing',
    timeline: '3-12 months',
    popular: true
  },
  {
    title: 'Startup Solutions',
    icon: Rocket,
    description: 'Rapid deployment solutions designed to help startups scale quickly and efficiently.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Rapid Deployment',
      'Cost-effective Pricing',
      'Scalable Infrastructure',
      'Quick Setup',
      'Essential Features',
      'Growth Support'
    ],
    benefits: [
      'Fast Time to Market',
      'Lower Initial Investment',
      'Scalable Growth',
      'Expert Guidance'
    ],
    pricing: 'Starting at $1,000/month',
    timeline: '2-8 weeks',
    popular: true
  },
  {
    title: 'Industry Solutions',
    icon: BarChart3,
    description: 'Specialized solutions tailored to specific industries and their unique requirements.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Industry Expertise',
      'Compliance Ready',
      'Specialized Features',
      'Domain Knowledge',
      'Best Practices',
      'Regulatory Support'
    ],
    benefits: [
      'Industry-specific Features',
      'Compliance Assurance',
      'Expert Knowledge',
      'Proven Results'
    ],
    pricing: 'Starting at $5,000/project',
    timeline: '1-6 months'
  },
  {
    title: 'Custom Development',
    icon: Settings,
    description: 'Fully customized solutions built from scratch to meet your specific business requirements.',
    color: 'from-orange-500 to-red-500',
    features: [
      '100% Custom Built',
      'Unique Requirements',
      'Full Control',
      'Advanced Features',
      'Integration Support',
      'Ongoing Maintenance'
    ],
    benefits: [
      'Perfect Fit',
      'Competitive Advantage',
      'Full Ownership',
      'Unlimited Customization'
    ],
    pricing: 'Starting at $25,000/project',
    timeline: '3-18 months'
  },
  {
    title: 'Digital Transformation',
    icon: Globe,
    description: 'Complete digital transformation solutions to modernize your business processes and operations.',
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Process Modernization',
      'Technology Integration',
      'Change Management',
      'Training & Support',
      'Performance Optimization',
      'Future-proofing'
    ],
    benefits: [
      'Modern Operations',
      'Improved Efficiency',
      'Better Customer Experience',
      'Competitive Edge'
    ],
    pricing: 'Starting at $50,000/project',
    timeline: '6-24 months'
  },
  {
    title: 'Cloud Migration',
    icon: Cloud,
    description: 'Seamless migration to cloud platforms with optimization and security best practices.',
    color: 'from-sky-500 to-cyan-500',
    features: [
      'Zero-downtime Migration',
      'Cost Optimization',
      'Security Hardening',
      'Performance Tuning',
      'Monitoring Setup',
      'Training & Support'
    ],
    benefits: [
      'Reduced Infrastructure Costs',
      'Improved Scalability',
      'Enhanced Security',
      'Better Performance'
    ],
    pricing: 'Starting at $15,000/project',
    timeline: '2-12 weeks'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your current systems, requirements, and business goals to understand your needs.',
    icon: Brain
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'We design a tailored solution architecture that meets your specific requirements and objectives.',
    icon: Settings
  },
  {
    step: '03',
    title: 'Development & Implementation',
    description: 'Our expert team develops and implements the solution with regular updates and quality checks.',
    icon: Network
  },
  {
    step: '04',
    title: 'Testing & Optimization',
    description: 'We thoroughly test the solution and optimize it for performance, security, and scalability.',
    icon: CheckCircle
  },
  {
    step: '05',
    title: 'Deployment & Support',
    description: 'We deploy the solution and provide ongoing support, training, and maintenance services.',
    icon: Rocket
  }
];

const technologies = [
  { name: 'AI & Machine Learning', icon: Brain, description: 'Advanced AI solutions' },
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP' },
  { name: 'Cybersecurity', icon: Shield, description: 'Enterprise security' },
  { name: 'Data Analytics', icon: BarChart3, description: 'Business intelligence' },
  { name: 'IoT & Edge', icon: Network, description: 'Connected systems' },
  { name: 'Blockchain', icon: Lock, description: 'Secure transactions' }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for enterprises, startups, and industries. Custom development, digital transformation, and cloud migration services." />
        <meta name="keywords" content="enterprise solutions, startup solutions, custom development, digital transformation, cloud migration, industry solutions" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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
              Technology{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to meet the unique needs of enterprises, startups, and industries across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Solution Consultation
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solution Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a wide range of technology solutions tailored to different business sizes, industries, and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-semibold text-blue-600">{solution.pricing}</div>
                      <div className="text-sm text-gray-500">Timeline: {solution.timeline}</div>
                    </div>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven 5-step process to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, scalable, and secure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-white transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right solution for your business needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}