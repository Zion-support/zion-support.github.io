import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Star, 
  Search,
  Rocket,
  DollarSign
} from 'lucide-react';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      name: 'AI Chatbot Development',
      category: 'AI Solutions',
      price: '$99/month',
      status: 'Available',
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability'],
      technologies: ['Python', 'TensorFlow', 'OpenAI API']
    },
    {
      id: 2,
      name: 'AI Content Generator',
      category: 'AI Solutions',
      price: '$149/month',
      status: 'Available',
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions'],
      technologies: ['GPT-4', 'React', 'Node.js']
    },
    {
      id: 3,
      name: 'AI Analytics Dashboard',
      category: 'Analytics',
      price: '$199/month',
      status: 'Available',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports'],
      technologies: ['React', 'D3.js', 'Python']
    },
    {
      id: 4,
      name: 'Cloud Infrastructure Setup',
      category: 'Infrastructure',
      price: '$299/month',
      status: 'Available',
      features: ['AWS/Azure Setup', 'Auto-scaling', 'Security Configuration'],
      technologies: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 5,
      name: 'Mobile App Development',
      category: 'Development',
      price: '$399/month',
      status: 'Available',
      features: ['iOS & Android', 'Cross-platform', 'Native Performance'],
      technologies: ['React Native', 'Flutter', 'Swift']
    }
  ];

  const categories = ['all', 'AI Solutions', 'Analytics', 'Infrastructure', 'Development'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return '🤖';
      case 'Analytics': return '📊';
      case 'Infrastructure': return '☁️';
      case 'Development': return '💻';
      default: return '🔧';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'text-green-400';
      case 'Coming Soon': return 'text-yellow-400';
      case 'Beta': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const sortedServices = services
    .filter(service => 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || service.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'price': return a.price.localeCompare(b.price);
        case 'category': return a.category.localeCompare(b.category);
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional services solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{services.length}+</h3>
            <p className="text-gray-300">Services Available</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-300">Support Available</p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {getCategoryIcon(category)} {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <DollarSign className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl p-8 border border-cyan-500/20">
            <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-6">
              We can create tailored solutions that perfectly fit your business requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                <DollarSign className="mr-2 w-5 h-5" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}