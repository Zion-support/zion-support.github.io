import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Network, 
  Cpu, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Target,
  Handshake,
  Lightbulb
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Rocket },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'iot', name: 'IoT & Edge', icon: Chip },
    { id: 'sustainable', name: 'Sustainable Tech', icon: Leaf }
  ];

  const services = [
    // AI Solutions
    {
      id: 'ai-autonomous-business-operations',
      title: 'AI Autonomous Business Operations',
      description: 'Automate complex business processes with intelligent AI agents that learn and adapt to your operations.',
      category: 'ai',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Process Automation', 'Intelligent Decision Making', '24/7 Operations', 'Continuous Learning'],
      price: 'Custom Pricing'
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      category: 'ai',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Real-time Monitoring'],
      price: 'From $2,500/month'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics',
      description: 'Transform healthcare data into actionable insights for better patient outcomes.',
      category: 'ai',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      features: ['Patient Analytics', 'Predictive Modeling', 'Clinical Insights', 'Compliance Ready'],
      price: 'From $3,000/month'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Optimize your supply chain with AI-powered forecasting and demand planning.',
      category: 'ai',
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
      price: 'From $2,000/month'
    },

    // Cloud & DevOps
    {
      id: 'cloud-infrastructure-devops',
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions with automated deployment and management.',
      category: 'cloud',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      features: ['Multi-cloud Strategy', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting'],
      price: 'From $1,500/month'
    },
    {
      id: 'cloud-finops-optimizer',
      title: 'Cloud FinOps Optimizer',
      description: 'Optimize cloud costs and improve financial governance across your organization.',
      category: 'cloud',
      icon: Coins,
      color: 'from-green-500 to-teal-500',
      features: ['Cost Optimization', 'Resource Management', 'Budget Controls', 'ROI Analysis'],
      price: 'From $1,200/month'
    },

    // Cybersecurity
    {
      id: 'zero-trust-network-access',
      title: 'Zero Trust Network Access',
      description: 'Implement modern security architecture with zero-trust principles.',
      category: 'security',
      icon: Lock,
      color: 'from-red-500 to-pink-500',
      features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
      price: 'From $2,800/month'
    },
    {
      id: 'security-headers-csp',
      title: 'Security Headers & CSP',
      description: 'Protect your web applications with advanced security headers and content security policies.',
      category: 'security',
      icon: ShieldCheck,
      color: 'from-orange-500 to-red-500',
      features: ['Security Headers', 'Content Security Policy', 'XSS Protection', 'HTTPS Enforcement'],
      price: 'From $800/month'
    },

    // Data & Analytics
    {
      id: 'data-analytics',
      title: 'Data Analytics Platform',
      description: 'Transform raw data into actionable business intelligence and insights.',
      category: 'data',
      icon: BarChart,
      color: 'from-indigo-500 to-purple-500',
      features: ['Data Visualization', 'Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards'],
      price: 'From $1,800/month'
    },
    {
      id: 'ai-data-governance-platform',
      title: 'AI Data Governance Platform',
      description: 'Ensure data quality, compliance, and governance with AI-powered tools.',
      category: 'data',
      icon: Database,
      color: 'from-teal-500 to-blue-500',
      features: ['Data Quality', 'Compliance Management', 'Data Lineage', 'Privacy Controls'],
      price: 'From $2,200/month'
    },

    // Quantum Computing
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum mechanics for complex computational problems.',
      category: 'quantum',
      icon: Atom,
      color: 'from-purple-500 to-indigo-500',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research Support'],
      price: 'Custom Pricing'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'AI-Quantum Hybrid Platform',
      description: 'Combine classical AI with quantum computing for unprecedented computational power.',
      category: 'quantum',
      icon: Cpu,
      color: 'from-violet-500 to-purple-500',
      features: ['Hybrid Algorithms', 'Quantum ML', 'Optimization', 'Research Platform'],
      price: 'Custom Pricing'
    },

    // IoT & Edge
    {
      id: 'iot-edge-computing',
      title: 'IoT & Edge Computing',
      description: 'Build intelligent edge networks for real-time data processing and decision making.',
      category: 'iot',
      icon: Chip,
      color: 'from-cyan-500 to-blue-500',
      features: ['Edge Processing', 'Real-time Analytics', 'Device Management', 'Scalable Architecture'],
      price: 'From $1,600/month'
    },
    {
      id: 'ai-iot-edge-computing',
      title: 'AI IoT Edge Computing',
      description: 'Intelligent edge computing with AI-powered decision making and automation.',
      category: 'iot',
      icon: Wifi,
      color: 'from-blue-500 to-indigo-500',
      features: ['AI at the Edge', 'Autonomous Decision Making', 'Predictive Maintenance', 'Real-time Processing'],
      price: 'From $2,000/month'
    },

    // Sustainable Technology
    {
      id: 'sustainable-technology',
      title: 'Sustainable Technology Solutions',
      description: 'Green technology solutions for a more sustainable future.',
      category: 'sustainable',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Green Infrastructure', 'Sustainability Reporting'],
      price: 'From $1,500/month'
    },
    {
      id: 'ai-sustainable-technology',
      title: 'AI Sustainable Technology',
      description: 'AI-powered solutions for environmental sustainability and green technology.',
      category: 'sustainable',
      icon: Sparkles,
      color: 'from-emerald-500 to-teal-500',
      features: ['Smart Energy Management', 'Environmental Monitoring', 'Sustainable AI', 'Green Analytics'],
      price: 'From $2,000/month'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Cutting-edge AI solutions, quantum computing, and innovative technology services to transform your business.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-700 font-medium">500+ Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <Icon className="h-12 w-12" />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={`/services/${service.id}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our cutting-edge technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
