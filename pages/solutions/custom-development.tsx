import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
<<<<<<< HEAD
import { Code, Zap, Shield, Users, ArrowRight, CheckCircle, Star, Clock } from 'lucide-react';
=======
import { Code, Database, Cloud, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> main
import Link from 'next/link';
import { motion } from 'framer-motion';

const CustomDevelopment: NextPage = () => {
<<<<<<< HEAD
  const features = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from scratch to meet your specific business requirements and workflows.',
      benefits: ['Scalable architecture', 'Custom functionality', 'Integration capabilities', 'Future-proof design']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick development of prototypes and MVPs to validate ideas and accelerate time-to-market.',
      benefits: ['Fast iteration', 'Cost-effective validation', 'User feedback integration', 'Quick pivots']
    },
    {
      icon: Shield,
      title: 'Enterprise Applications',
      description: 'Robust, secure enterprise-grade applications designed for large-scale operations and compliance.',
      benefits: ['High security', 'Compliance ready', 'Scalable infrastructure', '24/7 support']
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Extend your development team with our expert developers and technical specialists.',
      benefits: ['Expert talent', 'Flexible engagement', 'Knowledge transfer', 'Seamless integration']
=======
  const services = [
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern frameworks and technologies to meet your specific business requirements.',
      features: ['React/Next.js Development', 'Vue.js Applications', 'Angular Solutions', 'Progressive Web Apps']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Custom database design and optimization to ensure your data is structured, secure, and performant.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery']
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Applications',
      description: 'Scalable applications designed for cloud environments with microservices architecture and containerization.',
      features: ['Microservices Architecture', 'Container Orchestration', 'Serverless Functions', 'Auto-scaling']
    },
    {
      icon: Shield,
      title: 'Security-First Development',
      description: 'Applications built with security as a core principle, implementing best practices and compliance standards.',
      features: ['Security Auditing', 'Compliance Implementation', 'Penetration Testing', 'Secure Coding Practices']
>>>>>>> main
    }
  ];

  const technologies = [
<<<<<<< HEAD
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'Python & Django', category: 'Backend' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'AWS & Azure', category: 'Cloud' },
    { name: 'Docker & Kubernetes', category: 'DevOps' },
    { name: 'GraphQL & REST APIs', category: 'API' },
    { name: 'Microservices Architecture', category: 'Architecture' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed development roadmap.',
      duration: '1-2 weeks'
=======
    'React & Next.js', 'Node.js & Express', 'Python & Django', 'Java & Spring',
    'C# & .NET', 'PHP & Laravel', 'Ruby on Rails', 'Go & Gin',
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
    'AWS', 'Azure', 'Google Cloud', 'Docker & Kubernetes'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed development roadmap.'
>>>>>>> main
    },
    {
      step: '02',
      title: 'Design & Architecture',
<<<<<<< HEAD
      description: 'Our team designs the system architecture, user interface, and technical specifications.',
      duration: '2-3 weeks'
=======
      description: 'Our team designs the system architecture and creates wireframes and prototypes for your approval.'
>>>>>>> main
    },
    {
      step: '03',
      title: 'Development & Testing',
<<<<<<< HEAD
      description: 'Agile development process with continuous testing, code reviews, and quality assurance.',
      duration: '4-12 weeks'
=======
      description: 'We build your application using agile methodologies with continuous testing and quality assurance.'
>>>>>>> main
    },
    {
      step: '04',
      title: 'Deployment & Support',
<<<<<<< HEAD
      description: 'Seamless deployment to production with ongoing maintenance and support services.',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CTO',
      content: 'Zion Tech Group delivered an exceptional custom platform that transformed our operations. Their attention to detail and technical expertise exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Enterprise Solutions',
      role: 'VP of Engineering',
      content: 'The team augmentation service was seamless. Their developers integrated perfectly with our team and delivered high-quality code consistently.',
      rating: 5
=======
      description: 'We deploy your application and provide ongoing maintenance, updates, and technical support.'
>>>>>>> main
    }
  ];

  return (
    <MainLayout
      title="Custom Development Solutions - Zion Tech Group"
<<<<<<< HEAD
      description="Transform your ideas into powerful custom software solutions. Expert development services for web applications, mobile apps, and enterprise systems."
      keywords="custom development, software development, web applications, mobile apps, enterprise software, custom solutions"
=======
      description="Professional custom development services for web applications, mobile apps, and enterprise solutions. Tailored to your business needs."
      keywords="custom development, web applications, mobile apps, enterprise solutions, software development"
>>>>>>> main
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
<<<<<<< HEAD
            className="text-4xl md:text-5xl font-bold mb-6"
=======
            className="text-5xl md:text-6xl font-bold mb-6"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            Custom Development Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
=======
            Custom Development
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
<<<<<<< HEAD
            Transform your unique ideas into powerful, scalable software solutions. 
            Our expert development team delivers custom applications that drive business growth and innovation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
=======
            Transform your ideas into powerful, scalable applications with our custom development expertise. 
            From concept to deployment, we deliver solutions that drive your business forward.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
<<<<<<< HEAD
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Studies
=======
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Start Your Project
            </Link>
            <Link href="/solutions" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              View All Solutions
>>>>>>> main
            </Link>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive custom development solutions tailored to your business needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern, proven technologies and frameworks to build robust, scalable applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-gray-800 mb-2">{tech.name}</h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and successful project delivery.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
=======
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive custom development services tailored to your specific needs and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our custom development solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
=======
      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, scalable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
>>>>>>> main
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Build Your Custom Solution?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your project requirements and create a custom development plan that delivers results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
=======
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
              Get Started Today
            </Link>
            <Link href="/solutions" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              Explore All Solutions
            </Link>
          </div>
>>>>>>> main
        </div>
      </section>
    </MainLayout>
  );
};

export default CustomDevelopment;