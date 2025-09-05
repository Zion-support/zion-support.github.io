import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Award, 
  Clock, 
  Globe 
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions to transform your business',
    icon: Brain,
    services: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: '$2,000 - $15,000/month',
    link: '/ai-services',
    color: 'blue'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions to keep your business running smoothly',
    icon: Network,
    services: ['Cloud Infrastructure', 'Cybersecurity', 'Network Management', 'System Administration'],
    pricing: '$1,000 - $10,000/month',
    link: '/it-services',
    color: 'green'
  },
  {
    title: 'Micro SaaS',
    description: 'Focused tools that solve specific business problems with powerful features',
    icon: Target,
    services: ['Workflow Automation', 'Content Generation', 'Social Media Management', 'Analytics Dashboard'],
    pricing: '$29 - $299/month',
    link: '/micro-saas',
    color: 'purple'
  }
];

const industries = [
  { name: 'Healthcare', icon: Users, description: 'AI-powered healthcare solutions' },
  { name: 'Finance', icon: BarChart3, description: 'Financial technology and security' },
  { name: 'Manufacturing', icon: Target, description: 'Industrial automation and AI' },
  { name: 'Retail', icon: Globe, description: 'E-commerce and customer experience' },
  { name: 'Education', icon: Brain, description: 'Educational technology solutions' },
  { name: 'Government', icon: Shield, description: 'Secure government solutions' }
];

const benefits = [
  {
    icon: Zap,
    title: 'Faster Implementation',
    description: 'Get your solutions up and running quickly with our streamlined processes.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance to protect your data and systems.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated support team with deep expertise in AI and technology.'
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Track record of successful implementations and satisfied clients.'
  }
];

export default function ServicesOverview() {
  return (
    <>
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of our AI, IT, and micro SaaS services designed to transform your business with cutting-edge technology." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business 
                with AI, IT services, and micro SaaS tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of technology services and solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className={`w-8 h-8 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="text-xl font-bold text-blue-600 mb-4">{category.pricing}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={category.link}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-${category.color}-600 text-white rounded-lg hover:bg-${category.color}-700 transition-colors font-semibold`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are tailored for various industries and use cases.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional value through our expertise, innovation, and commitment to your success.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
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
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}