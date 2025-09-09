import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge AI solutions to transform your business",
      icon: Brain,
      services: [
        { name: "AI Model Development", href: "/services/ai-model-development", price: "Starting at $2,500/month" },
        { name: "Chatbot Development", href: "/services/ai-chatbot-development", price: "Starting at $1,200/month" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics", price: "Starting at $3,000/month" },
        { name: "Computer Vision", href: "/services/computer-vision", price: "Starting at $4,000/month" }
      ]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications",
      icon: Code,
      services: [
        { name: "React Applications", href: "/services/react-development", price: "Starting at $1,500/month" },
        { name: "Next.js Solutions", href: "/services/nextjs-development", price: "Starting at $2,000/month" },
        { name: "E-commerce Platforms", href: "/services/ecommerce-development", price: "Starting at $3,500/month" },
        { name: "Progressive Web Apps", href: "/services/pwa-development", price: "Starting at $2,800/month" }
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services",
      icon: Cloud,
      services: [
        { name: "AWS Migration", href: "/services/aws-migration", price: "Starting at $2,000/month" },
        { name: "Azure Solutions", href: "/services/azure-solutions", price: "Starting at $1,800/month" },
        { name: "Google Cloud Setup", href: "/services/gcp-setup", price: "Starting at $1,500/month" },
        { name: "DevOps Implementation", href: "/services/devops", price: "Starting at $2,500/month" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, web development, cloud solutions, and more." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-blue-600">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive technology solutions to accelerate your business growth
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.services.map((service) => (
                      <li key={service.name} className="flex items-center justify-between">
                        <Link 
                          href={service.href}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {service.name}
                        </Link>
                        <span className="text-sm text-gray-500">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;