import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  StarIcon, 
  Search,
  Rocket,
  Currency
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
      description: 'Intelligent chatbots for customer service and support',
      price: 99,
      status: 'Available',
      features: ['Natural Language Processing', 'Multi-platform Support', 'Analytics Dashboard'],
      technologies: ['React', 'Node.js', 'OpenAI API']
    },
    {
      id: 2,
      name: 'Web Development',
      category: 'Development',
      description: 'Custom web applications and websites',
      price: 149,
      status: 'Available',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization'],
      technologies: ['React', 'Next.js', 'TypeScript']
    },
    {
      id: 3,
      name: 'Cloud Infrastructure',
      category: 'Infrastructure',
      description: 'Scalable cloud solutions and migration',
      price: 199,
      status: 'Available',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Monitoring'],
      technologies: ['Docker', 'Kubernetes', 'Terraform']
    }
  ];

  const categories = ['all', 'AI Solutions', 'Development', 'Infrastructure'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions':
        return '🤖';
      case 'Development':
        return '💻';
      case 'Infrastructure':
        return '☁️';
      default:
        return '🔧';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'text-green-400';
      case 'Coming Soon':
        return 'text-yellow-400';
      case 'Limited':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price - b.price;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
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
            Professional services solutions for modern businesses.
          </p>
        </div>

        {/* Service Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <CheckCircleIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{services.length}+</h3>
            <p className="text-gray-300">Services Available</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <ClockIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-300">Support Available</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
            <StarIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
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
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
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
            <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  ${service.price}/month
                </div>
                <div className="text-sm text-gray-400">Starting price</div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded">
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
            <p className="text-gray-300 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We offer custom solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
            >
              Get Custom Quote
              <Rocket className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link 
              to="/pricing" 
              className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
            >
              View Pricing
              <Currency className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}