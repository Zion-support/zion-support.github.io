'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import FuturisticHero from './components/FuturisticHero';
import FuturisticServiceCard from './components/FuturisticServiceCard';
import FuturisticBackground from './components/FuturisticBackground';
import FuturisticText from './components/FuturisticText';
import FuturisticButton from './components/FuturisticButton';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  Brain,
  Zap,
  BarChart3,
  MessageSquare,
  Eye,
  Settings,
  Network,
  FileText,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      price: 'From $199/mo',
      originalPrice: 'From $399/mo',
      description: 'Advanced artificial intelligence and machine learning solutions to transform your business operations.',
      features: [
        'AI Chatbot Enterprise',
        'Computer Vision Solutions',
        'Content Generation Pro',
        'Analytics Dashboard',
        'Automation Platform',
        'Blockchain Integration'
      ],
      benefits: [
        'Reduce operational costs by 60%',
        'Improve efficiency by 80%',
        '24/7 intelligent automation',
        'Scalable AI infrastructure'
      ],
      category: 'Artificial Intelligence',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      popular: true,
      href: '/ai-solutions'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      price: 'From $1,500/mo',
      originalPrice: 'From $2,500/mo',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      features: [
        'Threat Detection & Response',
        'Security Assessment',
        'Penetration Testing',
        'Vulnerability Management',
        'Compliance Management',
        '24/7 Security Monitoring'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure compliance',
        'Reduce security risks',
        'Maintain business continuity'
      ],
      category: 'Security',
      icon: <ShieldCheckIcon className="w-8 h-8 text-green-400" />,
      popular: true,
      href: '/cybersecurity'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      price: 'From $2,500/mo',
      originalPrice: 'From $4,000/mo',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      features: [
        'Multi-cloud Architecture',
        'Infrastructure as Code',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery',
        'Security & Compliance',
        'Cost Optimization'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability',
        'Enhance security',
        'Increase reliability'
      ],
      category: 'Infrastructure',
      icon: <CloudIcon className="w-8 h-8 text-blue-400" />,
      popular: false,
      href: '/cloud-solutions'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      price: 'From $29/mo',
      originalPrice: 'From $59/mo',
      description: 'Innovative micro SAAS applications designed to solve specific business challenges.',
      features: [
        'Task Manager Pro',
        'Analytics Dashboard',
        'Customer Support Hub',
        'Inventory Manager',
        'Social Media Scheduler',
        'Expense Tracker Pro'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Streamline operations',
        'Reduce manual work',
        'Scale with business growth'
      ],
      category: 'Micro SAAS',
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      popular: true,
      href: '/micro-saas-solutions'
    },
    {
      id: 'it-solutions',
      name: 'IT Solutions',
      price: 'From $2,000/mo',
      originalPrice: 'From $3,500/mo',
      description: 'Comprehensive technology solutions designed to accelerate your digital transformation.',
      features: [
        'Web Development',
        'Mobile App Development',
        'Database Management',
        'Network Infrastructure',
        'System Integration',
        'IT Consulting'
      ],
      benefits: [
        'Modernize technology stack',
        'Improve efficiency',
        'Enhance security',
        'Support business growth'
      ],
      category: 'IT Services',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      popular: false,
      href: '/it-solutions'
    },
    {
      id: '5g-solutions',
      name: '5G Solutions',
      price: 'From $3,000/mo',
      originalPrice: 'From $5,000/mo',
      description: 'Next-generation 5G network solutions for ultra-fast connectivity and IoT applications.',
      features: [
        '5G Network Infrastructure',
        'Edge Computing',
        'IoT Solutions',
        'Smart City Applications',
        'Private Networks',
        'Mobile Applications'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'Massive IoT support',
        'Future-ready infrastructure'
      ],
      category: '5G Technology',
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      popular: false,
      href: '/5g-solutions'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Industry Expertise',
    'Proven Results',
    'Custom Implementation',
    'AI-Powered Solutions',
    'Real-time Analytics',
    'Cloud-Native Architecture',
    'Enterprise Security'
  ];

  const stats = [
    { number: '1,000+', label: 'Projects Completed' },
    { number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Countries Served' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, machine learning, artificial intelligence, micro SAAS, 5G solutions"
      />
      
      {/* Hero Section */}
      <FuturisticHero
        title="Zion Tech Group"
        subtitle="Advanced AI & IT Solutions"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services that drive innovation and growth."
        primaryAction={{
          text: "Get Started Today",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Learn More",
          href: "/about"
        }}
        stats={stats}
        features={features}
      />

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 sm:p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors group">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how our solutions can accelerate your digital transformation and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;