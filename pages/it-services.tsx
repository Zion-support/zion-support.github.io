import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Monitor, 
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Server,
  Settings,
  Lock,
  Zap,
  Users,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Laptop,
  Building,
  BarChart3,
  Code,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Headphones
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const itServices = [
  {
    title: 'Cloud Migration & Management',
    description: 'Seamless migration to cloud platforms with ongoing management and optimization.',
    icon: Cloud,
    features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
    pricing: '$5,000 - $50,000 project',
    category: 'Cloud Services',
    popular: true,
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security measures to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$3,000 - $25,000 project',
    category: 'Security',
    popular: true,
    benefits: ['Data Protection', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network solutions.',
    icon: Network,
    features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Performance Optimization'],
    pricing: '$2,000 - $15,000 project',
    category: 'Infrastructure',
    popular: false,
    benefits: ['Improved Connectivity', 'Enhanced Security', 'Better Performance', 'Scalable Solutions']
  },
  {
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance services.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
    pricing: '$2,500 - $20,000 project',
    category: 'Data Management',
    popular: false,
    benefits: ['Data Integrity', 'Improved Performance', 'Better Security', 'Reduced Downtime']
  },
  {
    title: 'IT Support & Maintenance',
    description: '24/7 technical support and proactive maintenance for your IT systems.',
    icon: Monitor,
    features: ['24/7 Support', 'Proactive Monitoring', 'System Updates', 'Troubleshooting'],
    pricing: '$500 - $5,000/month',
    category: 'Support',
    popular: true,
    benefits: ['Reduced Downtime', 'Faster Issue Resolution', 'Proactive Maintenance', 'Cost Savings']
  },
  {
    title: 'Server Management',
    description: 'Complete server setup, configuration, and ongoing management.',
    icon: Server,
    features: ['Server Setup', 'Configuration', 'Monitoring', 'Maintenance'],
    pricing: '$1,500 - $10,000 project',
    category: 'Infrastructure',
    popular: false,
    benefits: ['Reliable Performance', 'Enhanced Security', 'Better Resource Utilization', 'Reduced Costs']
  }
];

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    role: 'CTO',
    content: 'Zion Tech Group transformed our IT infrastructure. Their cloud migration service was seamless and resulted in 40% cost savings.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'FinanceFlow Ltd.',
    role: 'IT Director',
    content: 'Outstanding cybersecurity implementation. Our systems are now more secure than ever, and their support team is always available.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'StartupXYZ',
    role: 'Founder',
    content: 'Perfect for our growing startup. They set up our entire IT infrastructure and continue to provide excellent support.',
    rating: 5
  }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Data Management', 'Support'];
  
  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <Layout title="IT Services - Zion Tech Group">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive IT services to keep your business running smoothly and securely
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Learn More
                </motion.button>
              </div>
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, we provide comprehensive IT solutions tailored to your business needs.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <span className="text-sm text-blue-600 font-medium">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-blue-600">
                        {service.pricing}
                      </span>
                      {service.popular && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free consultation and let's discuss how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  View Our Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}