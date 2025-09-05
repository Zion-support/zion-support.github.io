import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, CheckCircle, ArrowRight, Phone, Mail, BarChart3, Lock, RefreshCw, Server, Database, Globe, Users } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const services = [
  {
    icon: Code,
    title: 'Custom Web Applications',
    description: 'Tailored web applications built to your exact specifications',
    features: ['Responsive design', 'Cross-browser compatibility', 'Performance optimization', 'SEO-friendly']
  },
  {
    icon: Zap,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['Native performance', 'Cross-platform compatibility', 'App store optimization', 'Push notifications']
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Robust server-side solutions and API development',
    features: ['RESTful APIs', 'GraphQL endpoints', 'Database design', 'Microservices architecture']
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Custom database design and optimization for your specific needs',
    features: ['Schema design', 'Query optimization', 'Data migration', 'Backup strategies']
  },
  {
    icon: Shield,
    title: 'Security Implementation',
    description: 'Comprehensive security measures for your custom applications',
    features: ['Authentication systems', 'Data encryption', 'Security audits', 'Compliance standards']
  },
  {
    icon: BarChart3,
    title: 'Analytics Integration',
    description: 'Custom analytics and reporting solutions for business insights',
    features: ['Real-time dashboards', 'Custom metrics', 'Data visualization', 'Automated reporting']
  }
];

const technologies = [
  {
    category: 'Frontend',
    technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'PHP']
  },
  {
    category: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse']
  },
  {
    category: 'Cloud',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    category: 'DevOps',
    technologies: ['CI/CD', 'GitLab', 'Jenkins', 'Ansible', 'Prometheus', 'Grafana']
  }
];

const process = [
  {
    step: 'Discovery',
    description: 'Understanding your requirements and business goals',
    duration: '1-2 weeks',
    activities: ['Requirements gathering', 'Technical analysis', 'Project planning', 'Resource allocation']
  },
  {
    step: 'Design',
    description: 'Creating detailed technical specifications and UI/UX designs',
    duration: '2-3 weeks',
    activities: ['System architecture', 'UI/UX design', 'Database design', 'API specification']
  },
  {
    step: 'Development',
    description: 'Building your custom solution with regular updates',
    duration: '4-12 weeks',
    activities: ['Agile development', 'Code reviews', 'Testing', 'Regular demos']
  },
  {
    step: 'Testing',
    description: 'Comprehensive testing to ensure quality and reliability',
    duration: '1-2 weeks',
    activities: ['Unit testing', 'Integration testing', 'User acceptance testing', 'Performance testing']
  },
  {
    step: 'Deployment',
    description: 'Launching your solution with full support and documentation',
    duration: '1 week',
    activities: ['Production deployment', 'User training', 'Documentation', 'Go-live support']
  },
  {
    step: 'Maintenance',
    description: 'Ongoing support and continuous improvement',
    duration: 'Ongoing',
    activities: ['Bug fixes', 'Feature updates', 'Performance monitoring', 'Security updates']
  }
];

const pricingModels = [
  {
    name: 'Fixed Price',
    description: 'Perfect for well-defined projects with clear requirements',
    price: 'From $10,000',
    features: [
      'Fixed timeline and budget',
      'Detailed project scope',
      'Milestone-based payments',
      'Change request process'
    ],
    ideal: 'Clear requirements, defined scope'
  },
  {
    name: 'Time & Materials',
    description: 'Flexible pricing based on actual work performed',
    price: '$75-150/hour',
    features: [
      'Pay only for work done',
      'Flexible scope changes',
      'Regular progress reports',
      'Transparent billing'
    ],
    ideal: 'Evolving requirements, agile development',
    popular: true
  },
  {
    name: 'Dedicated Team',
    description: 'Dedicated development team for long-term projects',
    price: 'From $15,000/month',
    features: [
      'Dedicated team members',
      'Full project management',
      'Regular communication',
      'Scalable team size'
    ],
    ideal: 'Long-term projects, ongoing development'
  }
];

export default function CustomDevelopmentPage() {
  return (
    <MainLayout
      title="Custom Development - Zion Tech Group"
      description="Custom software development services. We build tailored solutions including web applications, mobile apps, and backend systems to meet your specific business needs."
      keywords="custom development, custom software, web applications, mobile apps, backend development, software development"
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
                Custom Development That{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Fits Your Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Tailored software solutions built specifically for your business needs. 
                From web applications to mobile apps, we create custom solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Development Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in building custom software solutions that address your unique 
                business challenges and requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-indigo-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
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

        {/* Technologies Section */}
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
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with the latest technologies and frameworks to build modern, 
                scalable, and maintainable solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven development process that ensures quality, transparency, 
                and successful project delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.step}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="mb-4">
                    <span className="text-sm text-indigo-600 font-semibold">Duration: {step.duration}</span>
                  </div>
                  <ul className="space-y-1">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 text-indigo-500 mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                Flexible Pricing Models
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the pricing model that best fits your project needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingModels.map((model, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-lg shadow-lg border-2 ${
                    model.popular ? 'border-indigo-500 scale-105' : 'border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {model.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      {model.price}
                    </div>
                    <p className="text-gray-600 mb-2">{model.description}</p>
                    <p className="text-sm text-indigo-600 font-semibold">{model.ideal}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      model.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-indigo-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-indigo-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}