import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Smartphone, 
  BarChart3,
  Database,
  Lock,
  Zap,
  Globe,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = [
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'web', name: 'Web Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, color: 'from-indigo-500 to-purple-500' },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart3, color: 'from-yellow-500 to-orange-500' }
  ];

  const services = {
    ai: [
      {
        title: 'AI-Powered Chatbots',
        description: 'Intelligent conversational AI that understands context and provides human-like responses.',
        features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', '24/7 Availability'],
        price: 'Starting at $2,999',
        duration: '2-4 weeks',
        icon: Brain,
        popular: true
      },
      {
        title: 'Machine Learning Models',
        description: 'Custom ML models tailored to your specific business needs and data.',
        features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing'],
        price: 'Starting at $4,999',
        duration: '4-6 weeks',
        icon: Target,
        popular: false
      },
      {
        title: 'Computer Vision Solutions',
        description: 'Advanced image and video analysis for automation and insights.',
        features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Process Automation'],
        price: 'Starting at $3,999',
        duration: '3-5 weeks',
        icon: Lightbulb,
        popular: false
      }
    ],
    web: [
      {
        title: 'Modern Web Applications',
        description: 'Scalable, responsive web applications built with the latest technologies.',
        features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Fast Loading'],
        price: 'Starting at $1,999',
        duration: '2-3 weeks',
        icon: Code,
        popular: true
      },
      {
        title: 'E-commerce Platforms',
        description: 'Complete online store solutions with payment integration and inventory management.',
        features: ['Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
        price: 'Starting at $3,499',
        duration: '3-4 weeks',
        icon: Globe,
        popular: false
      },
      {
        title: 'Enterprise Portals',
        description: 'Custom business portals for internal operations and client management.',
        features: ['User Management', 'Role-based Access', 'Document Management', 'Workflow Automation'],
        price: 'Starting at $5,999',
        duration: '4-6 weeks',
        icon: Users,
        popular: false
      }
    ],
    cloud: [
      {
        title: 'Cloud Migration',
        description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime.',
        features: ['Zero Downtime Migration', 'Cost Optimization', 'Security Compliance', 'Performance Monitoring'],
        price: 'Starting at $2,499',
        duration: '1-2 weeks',
        icon: Cloud,
        popular: true
      },
      {
        title: 'DevOps & CI/CD',
        description: 'Automated deployment pipelines and infrastructure management.',
        features: ['Automated Deployments', 'Infrastructure as Code', 'Monitoring & Alerting', 'Scalability'],
        price: 'Starting at $1,999',
        duration: '2-3 weeks',
        icon: Zap,
        popular: false
      },
      {
        title: 'Microservices Architecture',
        description: 'Scalable microservices architecture for modern applications.',
        features: ['Service Decomposition', 'API Gateway', 'Load Balancing', 'Container Orchestration'],
        price: 'Starting at $4,999',
        duration: '4-6 weeks',
        icon: TrendingUp,
        popular: false
      }
    ],
    security: [
      {
        title: 'Security Audits',
        description: 'Comprehensive security assessment and vulnerability testing.',
        features: ['Penetration Testing', 'Code Review', 'Infrastructure Audit', 'Compliance Check'],
        price: 'Starting at $1,499',
        duration: '1-2 weeks',
        icon: Shield,
        popular: true
      },
      {
        title: 'Identity & Access Management',
        description: 'Secure authentication and authorization systems.',
        features: ['Multi-factor Authentication', 'Single Sign-On', 'Role Management', 'Audit Logging'],
        price: 'Starting at $2,999',
        duration: '2-3 weeks',
        icon: Lock,
        popular: false
      },
      {
        title: 'Data Protection',
        description: 'Advanced data encryption and privacy compliance solutions.',
        features: ['End-to-end Encryption', 'GDPR Compliance', 'Data Backup', 'Privacy Controls'],
        price: 'Starting at $3,999',
        duration: '3-4 weeks',
        icon: Database,
        popular: false
      }
    ],
    mobile: [
      {
        title: 'iOS & Android Apps',
        description: 'Native mobile applications for iOS and Android platforms.',
        features: ['Native Performance', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
        price: 'Starting at $3,999',
        duration: '4-6 weeks',
        icon: Smartphone,
        popular: true
      },
      {
        title: 'Cross-Platform Apps',
        description: 'React Native and Flutter apps for faster development and deployment.',
        features: ['Single Codebase', 'Faster Development', 'Cost Effective', 'Easy Maintenance'],
        price: 'Starting at $2,999',
        duration: '3-4 weeks',
        icon: Globe,
        popular: false
      },
      {
        title: 'Progressive Web Apps',
        description: 'Web apps that work like native applications.',
        features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Easy Installation'],
        price: 'Starting at $1,999',
        duration: '2-3 weeks',
        icon: Zap,
        popular: false
      }
    ],
    analytics: [
      {
        title: 'Business Intelligence',
        description: 'Data visualization and reporting dashboards for better decision making.',
        features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Predictive Analytics'],
        price: 'Starting at $2,499',
        duration: '2-3 weeks',
        icon: BarChart3,
        popular: true
      },
      {
        title: 'Data Pipeline Setup',
        description: 'Automated data collection, processing, and storage systems.',
        features: ['Data Integration', 'ETL Processes', 'Data Warehousing', 'Quality Monitoring'],
        price: 'Starting at $3,999',
        duration: '3-4 weeks',
        icon: Database,
        popular: false
      },
      {
        title: 'Machine Learning Analytics',
        description: 'Advanced analytics using machine learning algorithms.',
        features: ['Predictive Modeling', 'Anomaly Detection', 'Recommendation Systems', 'Automated Insights'],
        price: 'Starting at $4,999',
        duration: '4-6 weeks',
        icon: TrendingUp,
        popular: false
      }
    ]
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire digital infrastructure. The results exceeded our expectations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'Their AI solutions helped us automate 80% of our customer support. Incredible team!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions',
      role: 'IT Director',
      content: 'Professional, reliable, and innovative. They delivered our cloud migration flawlessly.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Award-Winning Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI and machine learning to cloud infrastructure and cybersecurity, 
            we provide end-to-end technology solutions that drive business growth.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {services[activeCategory as keyof typeof services].map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 relative group"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>

                <div className="space-y-4 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">Duration: {service.duration}</div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveServicesShowcase;