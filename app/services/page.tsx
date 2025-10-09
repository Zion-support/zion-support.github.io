import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart3, 
  Users, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  HardDrive,
  Search,
  Filter,
  TrendingUp,
  ShoppingCart,
  MessageCircle,
  Target,
  Database
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', price: '$1,500/month' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', price: '$199/month' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', price: '$399/month' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: '24/7 AI customer service', price: '$199/month' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Automated sales processes', price: '$299/month' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'AI-powered data insights', price: '$199/month' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation', price: '$199/month' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', price: '$1,999/month' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', price: '$1,499/month' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms', price: '$999/month' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'AI mobile applications', price: '$2,999/project' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'AI-powered cloud solutions', price: '$1,299/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', price: '$299/month' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure', price: '$999/month' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions', price: '$499/month' },
        { name: 'Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'Cloud migration & setup', price: '$1,299/month' },
        { name: 'DevOps', path: '/ai-workflow-automation', description: 'DevOps automation', price: '$799/month' },
        { name: 'Database Services', path: '/ai-data-analytics', description: 'Database management', price: '$599/month' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure', price: '$699/month' },
        { name: 'Help Desk Support', path: '/it-services', description: '24/7 technical support', price: '$399/month' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-600',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ ready-to-use apps', price: '$79/month' },
        { name: 'Developer Tools', path: '/micro-saas', description: 'AI-powered dev tools', price: '$99/month' },
        { name: 'Business Apps', path: '/micro-saas', description: 'Productivity applications', price: '$149/month' },
        { name: 'Marketing Tools', path: '/micro-saas', description: 'Marketing automation', price: '$199/month' },
        { name: 'Analytics Tools', path: '/micro-saas', description: 'Business intelligence', price: '$179/month' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', price: 'Custom' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', price: 'Custom' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', price: 'Custom' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', price: 'Custom' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights', price: '$799/month' },
        { name: 'Robotics', path: '/robotics', description: 'Robotic solutions', price: 'Custom' }
      ]
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Increase productivity by 60%',
    'Improve customer satisfaction by 50%',
    'Scale effortlessly with AI automation',
    'Access to latest technologies',
    '24/7 expert support and monitoring'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Micro SAAS Apps' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Complete Service Portfolio
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive AI & IT Services
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From AI-powered solutions to enterprise IT services, we provide everything your business 
            needs to thrive in the digital age. Choose from our extensive portfolio of cutting-edge 
            technologies and expert services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className={`text-lg font-bold ${category.color} mb-4`}>{service.price}</div>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let our expert team help you choose the right services for your business needs. 
              Contact us today for a free consultation and custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;