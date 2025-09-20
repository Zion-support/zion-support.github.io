<<<<<<< HEAD
import { Link  } from 'react-router-dom';
export default function Page() {
}}}
import { motion, AnimatePresence  } from 'framer-motion';

export default function Page() {
,
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Automation',
      description: 'Automated customer service with intelligent chatbots, ticket routing, and sentiment analysis.',
      category: 'customer-support',
      features: ['Intelligent Chatbots', 'Automated Ticket Routing', 'Sentiment Analysis', '24/7 Support'],
      pricing: { starter: 79, professional: 199, enterprise: 399 },
      icon: Users,
      route: '/services/ai-customer-support-automation',
      status: 'active'
    },
    {
      id: 'ai-financial-analytics',
      name: 'AI Financial Analytics Platform',
      description: 'Advanced financial forecasting, risk assessment, and compliance monitoring powered by AI.',
      category: 'finance',
      features: ['Financial Forecasting', 'Risk Assessment', 'Compliance Monitoring', 'Real-time Analytics'],
      pricing: { starter: 149, professional: 399, enterprise: 799 },
      icon: TrendingUp,
      route: '/services/ai-financial-analytics',
      status: 'active'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent audience segmentation, content personalization, and multi-channel campaign orchestration.',
      category: 'marketing',
      features: ['Audience Segmentation', 'Content Personalization', 'Multi-channel Campaigns', 'ROI Optimization'],
      pricing: { starter: 129, professional: 349, enterprise: 699 },
      icon: Globe,
      route: '/services/ai-marketing-automation',
      status: 'active'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics Engine',
      description: 'Advanced data processing, pattern recognition, and predictive modeling for business intelligence.',
      category: 'analytics',
      features: ['Data Processing', 'Pattern Recognition', 'Predictive Modeling', 'Business Intelligence'],
      pricing: { starter: 199, professional: 499, enterprise: 999 },
      icon: Database,
      route: '/services/ai-data-analytics',
      status: 'beta'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Intelligent threat detection, automated response, and proactive security monitoring.',
      category: 'security',
      features: ['Threat Detection', 'Automated Response', 'Security Monitoring', 'Incident Prevention'],
      pricing: { starter: 179, professional: 449, enterprise: 899 },
      icon: Shield,
      route: '/services/ai-cybersecurity',
      status: 'coming-soon'
    }
  ];

    return matchesCategory && matchesSearch});

      case 'price':
        return a.pricing.starter - b.pricing.starter;
      case 'popularity':
        return 0; // Default sorting
      default:
        return 0}
  });

      case 'beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'coming-soon':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800'}
  };

      case 'beta':
        return 'Beta';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'Unknown'}
  };

  return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20

}}
          animate = {
  { opacity: 1,
  y: 0

}}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font - bold text-white mb-6">
            AI Services Hub
        <motion.div
          initial = {
  { opacity: 0,
  y: 20

}}
          animate = {
  { opacity: 1,
  y: 0

}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div  className="flex flex - col lg:flex - row gap-6 items - center justify -between">
            {/* Search Bar */}
            <div  className="relative flex - 1 max - w-md">

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={ (e) => setSortBy(e.target.value as 'name' | 'price' | 'popularity') }
              className="px-4 py-3 bg-white / 10 backdrop - blur - sm border border-white / 20 rounded-lg text-white focus:outline - none focus:ring - 2 focus:ring - purple -500"
            >
              <option value="popularity">Most Popular</option>
              <option value="name">Name A - Z</option>
              <option value="price">Price: Low to High</option>
            </select>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20

}}
          animate = {
  { opacity: 1,
  y: 0

}}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div  className="flex flex - wrap gap-4 justify -center">
            {categories.map((category) => (<button     key={category.id}
                onClick={ () => setSelectedCategory(category.id) }
                className={`flex items - center gap-2 px-6 py-3 rounded-full border transition - all duration - 300 ${selectedCategory === category.id
                    ? 'bg-purple - 600 border-purple - 500 text-white'
                    : 'bg-white / 10 border-white / 20 text-gray - 300 hover:bg-white / 20'
                }`}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20

}}
          animate = {
  { opacity: 1,
  y: 0

}}
          transition={{ delay: 0.4 }}
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8"
        >
          <AnimatePresence>
            {sortedServices.map((service, index) => (<motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20

}}
                animate = {
  { opacity: 1,
  y: 0

}}
                exit = {
  { opacity: 0,
  y: -20

}}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white / 5 backdrop - blur - sm border border-white / 10 rounded-2xl p - 6 hover:bg-white / 10 transition - all duration - 300 hover:border-purple -500 / 50"
              >
                {/* Status Badge */}
                <div  className="absolute top - 4 right -4">
                  <span className={`px-3 py-1 rounded-full text-xs font - medium ${service.status === 'active' ? 'bg-green - 500 / 20 text-green - 400' :
                    service.status === 'beta' ? 'bg-yellow-500 / 20 text-yellow-400' :
                    'bg-gray - 500 / 20 text-gray - 400'
                  }`}>
                    {service.status === 'active' ? 'Active' : service.status === 'beta' ? 'Beta' : 'Coming Soon'}
                  </span>
                </div>

                {/* Service Icon */}
                <div  className="mb-4">
                  <div  className="w-16 h-16 bg-gradient - to - br from - purple - 500 to - blue - 500 rounded-2xl flex items - center justify - center group - hover:scale - 110 transition - transform duration -300">
                    <service.icon className="w-8 h-8 text-white" />
        {/* Call to Action */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20

}}
          animate = {
  { opacity: 1,
  y: 0

}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div  className="bg-gradient - to - r from - purple - 600 / 20 to - blue - 600 / 20 backdrop - blur - sm border border-purple - 500 / 30 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray - 300 mb-8 max - w-2xl mx -auto">
              Our AI - powered solutions are designed to streamline operations, boost productivity, and drive growth.Get started today and experience the future of business automation.</p>
            <div  className="flex flex - col sm:flex - row gap-4 justify -center">
              <button     className="px-8 py-4 bg-gradient - to - r from - purple - 600 to - blue - 600 text-white font - semibold rounded-lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 flex items - center gap-2">
                <Rocket className="w-5 h-5" />
                Get Started
              </button>
              <button     className="px-8 py-4 bg-white / 10 backdrop - blur - sm border border-white / 20 text-white font - semibold rounded-lg hover:bg-white / 20 transition - all duration -300">
                Schedule Demo;
              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;) ;
};
=======
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Advanced AI Services Hub
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our cutting-edge AI-powered solutions designed to transform your business operations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"  />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="p-6">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                        {getStatusText(service.status)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4 line-clamp-3">{service.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500"  />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-900 mb-2">Starting at:</h4>
                  <div className="text-2xl font-bold text-blue-600">${service.pricing.starter}/mo</div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4"  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto"  />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No services found</h3>
            <p className="text-slate-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )};

export default AdvancedAIServicesHub;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
