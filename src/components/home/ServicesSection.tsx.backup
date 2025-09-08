import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Cpu, Rocket, Users, TrendingUp, Zap, Target, Sparkles } from 'lucide-react';

<<<<<<< HEAD
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={service.path}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}