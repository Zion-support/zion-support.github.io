import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Zap,
  Brain,
  Code,
  Database,
  Cloud,
  Shield,
  Server,
  Smartphone,
  Leaf,
  Building,
  Globe,
  Sparkles,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';

const mainCategories = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence",
    description: "Cutting-edge AI and machine learning solutions",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    subcategories: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "AI Consulting"],
    serviceCount: 45,
    rating: 4.9
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom software solutions and development services",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    subcategories: ["Web Development", "Mobile Apps", "Desktop Software", "API Development", "DevOps"],
    serviceCount: 67,
    rating: 4.8
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Data-driven insights and analytics solutions",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    subcategories: ["Data Analysis", "Business Intelligence", "Big Data", "Data Visualization", "Predictive Analytics"],
    serviceCount: 38,
    rating: 4.7
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps automation",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    subcategories: ["Cloud Migration", "DevOps", "Containerization", "Infrastructure as Code", "Monitoring"],
    serviceCount: 52,
    rating: 4.9
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security and compliance solutions",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    subcategories: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response", "Security Training"],
    serviceCount: 41,
    rating: 4.8
  },
  {
    id: "it-services",
    title: "IT Services",
    description: "Professional IT consulting and managed services",
    icon: Server,
    color: "from-yellow-500 to-orange-500",
    subcategories: ["IT Consulting", "Managed Services", "Network Management", "Support & Maintenance", "Project Management"],
    serviceCount: 73,
    rating: 4.7
  },
  {
    id: "hardware-equipment",
    title: "Hardware & Equipment",
    description: "IT hardware solutions and equipment management",
    icon: Server,
    color: "from-gray-500 to-slate-500",
    subcategories: ["Hardware Installation", "Equipment Management", "Maintenance", "Upgrades", "Disposal"],
    serviceCount: 29,
    rating: 4.6
  },
  {
    id: "mobile-iot",
    title: "Mobile & IoT",
    description: "Mobile applications and IoT solutions",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    subcategories: ["Mobile Apps", "IoT Development", "Wearables", "Smart Home", "Connected Devices"],
    serviceCount: 34,
    rating: 4.7
  },
  {
    id: "green-it",
    title: "Green IT",
    description: "Sustainable and energy-efficient IT solutions",
    icon: Leaf,
    color: "from-emerald-500 to-teal-500",
    subcategories: ["Energy Efficiency", "Sustainable Computing", "Green Data Centers", "Carbon Reduction", "Eco-friendly Solutions"],
    serviceCount: 18,
    rating: 4.8
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "End-to-end digital transformation services",
    icon: Building,
    color: "from-violet-500 to-purple-500",
    subcategories: ["Strategy", "Implementation", "Change Management", "Process Optimization", "Technology Modernization"],
    serviceCount: 56,
    rating: 4.9
  },
  {
    id: "blockchain-web3",
    title: "Blockchain & Web3",
    description: "Next-generation blockchain and Web3 solutions",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    subcategories: ["Blockchain Development", "Smart Contracts", "DeFi", "NFTs", "Web3 Applications"],
    serviceCount: 23,
    rating: 4.8
  },
  {
    id: "emerging-tech",
    title: "Emerging Tech",
    description: "Cutting-edge and experimental technologies",
    icon: Sparkles,
    color: "from-amber-500 to-yellow-500",
    subcategories: ["Quantum Computing", "AR/VR", "Robotics", "Biotech", "Space Tech"],
    serviceCount: 31,
    rating: 4.7
  }
];

const featuredServices = [
  {
    id: 1,
    name: "AI-Powered Business Intelligence",
    category: "ai-ml",
    description: "Transform your data into actionable insights with advanced AI algorithms",
    price: "$2,500",
    rating: 4.9,
    reviewCount: 127,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Enterprise Cloud Migration",
    category: "cloud-devops",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime",
    price: "$5,000",
    rating: 4.8,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Cybersecurity Assessment & Implementation",
    category: "cybersecurity",
    description: "Comprehensive security audit and implementation of best practices",
    price: "$3,200",
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  }
];

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = mainCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getCategoryIcon = (categoryId: string) => {
    const category = mainCategories.find(cat => cat.id === categoryId);
    return category ? <category.icon className="w-6 h-6" /> : <Zap className="w-6 h-6" />;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = mainCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              Categories
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of IT services and solutions across all major technology domains
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories or services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{category.rating}</span>
                    <span>•</span>
                    <span>{category.serviceCount} services</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {category.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Key Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.slice(0, 3).map((sub, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-zion-cyan/20 text-zion-cyan rounded-full">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <Link
                to={`/services/${category.id}`}
                className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200 group-hover:text-zion-cyan-light"
              >
                <span className="font-medium">Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and highly-rated services across all categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                      {mainCategories.find(cat => cat.id === service.category)?.title}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {getCategoryIcon(service.category)}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {service.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviewCount})</span>
                    </div>
                    <span className="text-lg font-bold text-white">{service.price}</span>
                  </div>

                  <Link
                    to={`/services/${service.category}/${service.id}`}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 flex items-center justify-center group-hover:scale-105"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Our team of experts can help you find the perfect solution or create a custom service tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue py-3 px-8 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Our Team
              </Link>
              <Link
                to="/request-quote"
                className="border border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
