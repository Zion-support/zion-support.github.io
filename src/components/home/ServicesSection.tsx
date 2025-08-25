import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  BarChart3,
  Zap,
  Rocket,
  Cpu,
  Lock,
  Globe,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

<<<<<<< HEAD
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  path: string;
  features: string[];
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: string;
  popular?: boolean;
  gradient: string;
}

const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      icon: Brain,
      path: '/ai-solutions',
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      category: 'AI & ML',
      difficulty: 'Advanced',
      duration: '8-12 weeks',
      price: 'From $25,000',
      popular: true,
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Streamline your development and deployment processes with modern cloud infrastructure.',
      icon: Cloud,
      path: '/cloud-devops',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'],
      category: 'Infrastructure',
      difficulty: 'Intermediate',
      duration: '6-10 weeks',
      price: 'From $18,000',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and compliance frameworks.',
      icon: Shield,
      path: '/services/cybersecurity',
      features: ['Security Audits', 'Penetration Testing', 'SOC2 Compliance', 'Incident Response'],
      category: 'Security',
      difficulty: 'Advanced',
      duration: '4-8 weeks',
      price: 'From $20,000',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'micro-saas',
      title: 'Micro-SaaS Solutions',
      description: 'Custom software solutions designed to streamline operations and boost productivity.',
      icon: Code,
      path: '/services/micro-saas-solutions',
      features: ['Custom Development', 'API Integration', 'User Management', 'Analytics Dashboard'],
      category: 'Software',
      difficulty: 'Intermediate',
      duration: '10-16 weeks',
      price: 'From $30,000',
      popular: true,
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'quantum-tech',
      title: 'Quantum Technology',
      description: 'Explore the future of computing with quantum algorithms and quantum-safe cryptography.',
      icon: Cpu,
      path: '/services/quantum-technology',
      features: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Simulation', 'Research & Development'],
      category: 'Emerging Tech',
      difficulty: 'Advanced',
      duration: '12-20 weeks',
      price: 'From $50,000',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization tools.',
      icon: BarChart3,
      path: '/services/data-analytics',
      features: ['Data Mining', 'Business Intelligence', 'Real-time Analytics', 'Predictive Modeling'],
      category: 'Analytics',
      difficulty: 'Intermediate',
      duration: '6-12 weeks',
      price: 'From $22,000',
      gradient: 'from-teal-600 to-green-600'
    }
  ];

  const categories = ['all', 'AI & ML', 'Infrastructure', 'Security', 'Software', 'Emerging Tech', 'Analytics'];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
=======
const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions that transform business operations",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Machine Learning Models"],
    path: "/ai-solutions",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets",
    features: ["Threat Detection", "Incident Response", "Compliance Management", "Security Audits"],
    path: "/services/cybersecurity",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Cpu,
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and robust IT infrastructure management",
    features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Performance Optimization"],
    path: "/services/cloud-devops",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies for modern businesses",
    features: ["Process Automation", "Legacy Modernization", "Change Management", "ROI Optimization"],
    path: "/digital-transformation",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Users,
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise software and integration services",
    features: ["ERP Systems", "CRM Integration", "Data Analytics", "Business Intelligence"],
    path: "/enterprise-solutions",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Data-driven insights and analytics to drive strategic decisions",
    features: ["Data Warehousing", "Real-time Dashboards", "Predictive Modeling", "KPI Tracking"],
    path: "/services/business-intelligence",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Emerging Technologies",
    description: "Cutting-edge solutions in quantum computing, edge AI, and neuromorphic computing",
    features: ["Quantum Computing", "Edge AI", "Neuromorphic Computing", "6G Networks"],
    path: "/emerging-tech",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Target,
    title: "Industry Solutions",
    description: "Specialized AI solutions for healthcare, finance, manufacturing, and retail industries",
    features: ["Healthcare AI", "Financial Technology", "Smart Manufacturing", "Retail Intelligence"],
    path: "/comprehensive-services-overview",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Sparkles,
    title: "Micro-SaaS Services",
    description: "Scalable software-as-a-service solutions for growing businesses",
    features: ["Custom Development", "API Integration", "User Management", "Analytics Dashboard"],
    path: "/services/micro-saas-solutions",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Rocket,
    title: "Innovative Services Hub",
    description: "Comprehensive portfolio of cutting-edge AI and technology solutions",
    features: ["AI-Powered Services", "Specialized IT Solutions", "Emerging Technologies", "Enterprise Platforms"],
    path: "/innovative-services",
    color: "from-violet-500 to-purple-600"
  }
];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From AI-powered automation to quantum computing, we deliver cutting-edge solutions that drive innovation and growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Services' : category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredService === service.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                </div>
              )}

              {/* Service Card */}
              <Link to={service.path}>
                <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Meta */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Award className="w-4 h-4 mr-2" />
                        <span>{service.difficulty}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-2xl font-bold text-white mb-6">
                      {service.price}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                        Learn More
                      </span>
                      <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;