import React from 'react';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Smartphone,
  ArrowRight'
=======
  Brain, Cloud, 
  Shield, Database, 
  Code, Smartphone,
  ArrowRight
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  Brain, Cloud,
  Shield, Database,
  Code, Smartphone,
  ArrowRight } from 'lucide-react';
const ServicesSection: React.FC = () => {
  const services = [{
      icon: Brain, title: 'AI Services',
      description: 'Machine learning, natural language processing, and AI-powered automation solutions.', features: ['Machine Learning Models', 'NLP Solutions', 'AI Automation', 'Predictive Analytics'], link: '/ai-services'},
<<<<<<< HEAD
    {
      icon: Cloud, title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.', features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Solutions', 'Monitoring'], link: '/cloud-services'},
    {
      icon: Shield, title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.', features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'], link: '/cybersecurity'},
    {
      icon: Database, title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision making.', features: ['Data Visualization', 'Business Intelligence', 'ETL Processes', 'Reporting'], link: '/data-analytics'},
    {
      icon: Code, title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.', features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'], link: '/custom-development'},
    {
      icon: Smartphone, title: 'Micro SaaS',
      description: 'Lightweight, focused software solutions that solve specific business problems.',
      features: ['Rapid Development', 'Cost-Effective', 'Scalable', 'User-Friendly'], link: '/micro-saas'}
  ]
  return(
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
=======
    {
      icon: Cloud, title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.', features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Solutions', 'Monitoring'], link: '/cloud-services'},
    {
      icon: Shield, title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.', features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'], link: '/cybersecurity'},
    {
      icon: Database, title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision making.', features: ['Data Visualization', 'Business Intelligence', 'ETL Processes', 'Reporting'], link: '/data-analytics'},
    {
      icon: Code, title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.', features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'], link: '/custom-development'},
=======
>>>>>>> main
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
<<<<<<< HEAD
    {
      ico,
    n: Brain,
      title: 'AI Services',
      description: 'Machine learning, natural language processing, and AI-powered automation solutions.',
      features: ['Machine Learning Models', 'NLP Solutions', 'AI Automation', 'Predictive Analytics'],
      link: '/ai-services'
    },
=======
  {
      icon: Brain,
      title: 'AI Services',
      description: 'Machine learning, natural language processing, and AI-powered automation solutions.',
      features: ['Machine Learning Models,NLP Solutions,AI Automation,Predictive Analytics'],
      link: '/ai-services'},
>>>>>>> main
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
<<<<<<< HEAD
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization'],
      link: '/cloud-services'
    },
=======
      features: ['Cloud Migration,Infrastructure Setup,DevOps Solutions,Monitoring'],
      link: '/cloud-services'},
>>>>>>> main
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
<<<<<<< HEAD
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      link: '/cybersecurity'
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Data analytics, warehousing, and business intelligence solutions.',
      features: ['Data Analytics', 'Data Warehousing', 'Business Intelligence', 'Data Visualization'],
      link: '/data-solutions'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Node.js', 'API Development', 'Progressive Web Apps'],
      link: '/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      link: '/mobile-apps'
    }
  ];

<<<<<<< HEAD
  const containerVariants = {
    hidden: { opacit,
    y: 0 },
    visible: {
      opacit,
    y: 1,
      transition: {
        staggerChildre,
    n: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacit,
    y: 0, y: 20 },
    visible: {
      opacit,
    y: 1,
      y: 0,
      transition: {
        duratio,
    n: 0.5
      }
    }
  };

  return ('
    <section className="py-20 bg-gray-50">"
=======
  return (
    <section className="py-20 bg-gray-50">
>>>>>>> main
      <div className="container mx-auto px-4">
=======
      features: ['Security Audits,Penetration Testing,Compliance,Incident Response'],
      link: '/cybersecurity'},
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision making.',
      features: ['Data Visualization,Business Intelligence,ETL Processes,Reporting'],
      link: '/data-analytics'},
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: ['Web Applications,Mobile Apps,API Development,System Integration'],
      link: '/custom-development'},
>>>>>>> main
    {
      icon: Smartphone, title: 'Micro SaaS',
      description: 'Lightweight, focused software solutions that solve specific business problems.',
<<<<<<< HEAD
      features: ['Rapid Development', 'Cost-Effective', 'Scalable', 'User-Friendly'], link: '/micro-saas'}
  ]
  return(
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
=======
      features: ['Rapid Development,Cost-Effective,Scalable,User-Friendly'],
      link: '/micro-saas'}
  ]
  return(
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
>>>>>>> main
>>>>>>> main
>>>>>>> main
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}"
          className="text-center mb-16"
<<<<<<< HEAD
        >"
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>"
=======
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
>>>>>>> main
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

<<<<<<< HEAD
        <motion.div
          variants={containerVariants}"
          initial="hidden""
          whileInView="visible"
          viewport={{ once: true }}"
          className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>"
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">"
                    <service.icon className="w-6 h-6 text-white" />
                  </div>"
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>"
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>"
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">"
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
<<<<<<< HEAD
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={service.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
=======
              <Card className='h-full hover:shadow-lg transition-shadow duration-300 group'>
                <CardHeader>
                  <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <service.icon className='h-6 w-6 text-white' />
                  </div>
                  <CardTitle className='text-xl'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 mb-4'>{service.description}</p>
                  <ul className='space-y-2 mb-6'>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center text-sm text-gray-500'>
                        <div className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-2'></div>
>>>>>>> main
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                  <Button"
                    variant="outline""
                    className="w-full group"
                    onClick={() => window.location.href = service.link}
                  >
                    Learn More"
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
=======
                  <Button
<<<<<<< HEAD
                    variant='outline';
                    className='w-full group-hover: bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors'>
=======
                    variant='outline'
<<<<<<< HEAD
                    className='w-full group-hover: bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors'>
=======
                    className='w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors'>
>>>>>>> main
>>>>>>> main
                    Learn More
                    <ArrowRight className='ml-2 h-4 w-4' />
>>>>>>> main
                  </Button>
                </CardContent>
              </Card>
>>>>>>> main
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;"