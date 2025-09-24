import React, { useState } from 'react',
import { Link } from 'react-router-dom',
import { Search, Star, ShoppingCart, Heart, Eye, Users, Brain, Shield, Globe, Network, Cloud, Smartphone, CheckCircle } from 'lucide-react',
export default function Marketplace() {
    const [searchTerm, setSearchTerm] = useState(''),
    const [selectedCategory, setSelectedCategory] = useState('all'),
    const [selectedPriceRange, setSelectedPriceRange] = useState('all'),
    const [sortBy, setSortBy] = useState('featured'),
    const categories = [
        { id: 'all', name: 'All Products', icon: Globe, count: 24 };
        { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 8 };
        { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 };
        { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, count: 5 };
        { id: 'blockchain', name: 'Blockchain & Web3', icon: Network, count: 3 };
        { id: 'iot-platforms', name: 'IoT Platforms', icon: Smartphone, count: 2 }
    ],
    const priceRanges = [
        { id: 'all', name: 'All Prices' };
        { id: 'free', name: 'Free' };
        { id: 'under-10o0', name: 'Under $10o0' };
        { id: '10o0-50o0', name: '$10o0 - $50o0' };
        { id: '50o0-10o00', name: '$50o0 - $1,0o00' };
        { id: 'over-10o00', name: 'Over $1,0o00' }
    ],
    const sortOptions = [
        { id: 'featured', name: 'Featured' };
        { id: 'price-low', name: 'Price: Low to High' };
        { id: 'price-high', name: 'Price: High to Low' };
        { id: 'newest', name: 'Newest' };
        { id: 'popular', name: 'Most Popular' };
        { id: 'rating', name: 'Highest Rated' }
    ],
    const marketplaceProducts = [
        {
            id: 1;
            name: 'AI Autonomous Business Manager';
            description: 'Complete AI-powered business management platform with autonomous decision-making capabilities.';
            category: 'ai-solutions';
            price: 2999;
            originalPrice: 3999;
            currency: 'USD';
            rating: 4.9;
            reviewCount: 127;
            image: '/images/marketplace/ai-business-manager.jpg';
            features: [
                'Autonomous decision making';
                'Business process automation';
                'Real-time analytics';
                'Multi-tenant support';
                'API integration'];
            tags: ['AI', 'Business Automation', 'Enterprise', 'Cloud'];
            featured: true;
            new: false;
            discount: 25;
            type: 'software'};
        {
            id: 2;
            name: 'Quantum Neural Network Framework';
            description: 'Advanced quantum computing framework for neural network development and optimization.';
            category: 'ai-solutions';
            price: 1499;
            originalPrice: 1999;
            currency: 'USD';
            rating: 4.8;
            reviewCount: 89;
            image: '/images/marketplace/quantum-framework.jpg';
            features: [
                'Quantum algorithm optimization';
                'Neural network training';
                'GPU acceleration';
                'Python SDK';
                'Documentation & examples'];
            tags: ['Quantum Computing', 'AI', 'Research', 'Python'];
            featured: true;
            new: true;
            discount: 25;
            type: 'software'};
        {
            id: 3;
            name: 'SOC2 Compliance Automation Suite';
            description: 'Comprehensive security and compliance automation platform for enterprise organizations.';
            category: 'cybersecurity';
            price: 899;
            originalPrice: 1199;
            currency: 'USD';
            rating: 4.7;
            reviewCount: 156;
            image: '/images/marketplace/soc2-suite.jpg';
            features: [
                'Automated compliance checks';
                'Security assessment tools';
                'Audit trail management';
                'Risk assessment';
                'Reporting dashboard'];
            tags: ['Cybersecurity', 'Compliance', 'SOC2', 'Enterprise'];
            featured: false;
            new: false;
            discount: 25;
            type: 'software'};
        {
            id: 4;
            name: '5G Enterprise Network Kit';
            description: 'Complete 5G networking solution for enterprise environments with advanced security.';
            category: 'cloud-infrastructure';
            price: 2499;
            originalPrice: 2999;
            currency: 'USD';
            rating: 4.6;
            reviewCount: 73;
            image: '/images/marketplace/5g-kit.jpg';
            features: [
                '5G network infrastructure';
                'Enterprise security';
                'Load balancing';
                'Monitoring tools';
                '24/7 support'];
            tags: ['5G', 'Networking', 'Enterprise', 'Infrastructure'];
            featured: false;
            new: false;
            discount: 17;
            type: 'hardware'};
        {
            id: 5;
            name: 'AI Workflow Templates Pack';
            description: 'Collection of 50+ pre-built AI workflow templates for common business processes.';
            category: 'ai-solutions';
            price: 199;
            originalPrice: 299;
            currency: 'USD';
            rating: 4.5;
            reviewCount: 234;
            image: '/images/marketplace/workflow-templates.jpg';
            features: [
                '50+ workflow templates';
                'Customizable designs';
                'Integration guides';
                'Best practices';
                'Community support'];
            tags: ['AI', 'Workflows', 'Templates', 'Business'];
            featured: false;
            new: false;
            discount: 33;
            type: 'template'};
        {
            id: 6;
            name: 'Blockchain DeFi Development Kit';
            description: 'Complete toolkit for building decentralized finance applications on blockchain.';
            category: 'blockchain';
            price: 599;
            originalPrice: 799;
            currency: 'USD';
            rating: 4.4;
            reviewCount: 98;
            image: '/images/marketplace/blockchain-defi.jpg';
            features: [
                'Smart contract templates';
                'DeFi protocol examples';
                'Security best practices';
                'Testing framework';
                'Deployment guides'];
            tags: ['Blockchain', 'DeFi', 'Smart Contracts', 'Development'];
            featured: false;
            new: true;
            discount: 25;
            type: 'development-kit'};
        {
            id: 7;
            name: 'IoT Data Analytics Platform';
            description: 'Enterprise IoT platform with advanced analytics and machine learning capabilities.';
            category: 'iot-platforms';
            price: 1799;
            originalPrice: 2299;
            currency: 'USD';
            rating: 4.3;
            reviewCount: 67;
            image: '/images/marketplace/iot-platform.jpg';
            features: [
                'IoT device management';
                'Real-time analytics';
                'ML-powered insights';
                'Scalable architecture';
                'Multi-cloud support'];
            tags: ['IoT', 'Analytics', 'Machine Learning', 'Enterprise'];
            featured: false;
            new: false;
            discount: 22;
            type: 'platform'};
        {
            id: 8;
            name: 'Cybersecurity Threat Intelligence';
            description: 'Real-time threat intelligence and security monitoring service.';
            category: 'cybersecurity';
            price: 399;
            originalPrice: 599;
            currency: 'USD';
            rating: 4.8;
            reviewCount: 189;
            image: '/images/marketplace/threat-intelligence.jpg';
            features: [
                'Real-time threat feeds';
                'Security alerts';
                'Vulnerability scanning';
                'Incident response';
                'Expert support'];
            tags: ['Cybersecurity', 'Threat Intelligence', 'Monitoring', 'Security'];
            featured: false;
            new: false;
            discount: 33;
            type: 'service'}
    ],
    const filteredProducts = marketplaceProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory,
        let matchesPrice = true,
        if (selectedPriceRange === 'free') {
            matchesPrice = product.price === 0}
        else if (selectedPriceRange === 'under-10o0') {
            matchesPrice = product.price < 10o0}
        else if (selectedPriceRange === '10o0-50o0') {
            matchesPrice = product.price >= 10o0 && product.price <= 50o0}
        else if (selectedPriceRange === '50o0-10o00') {
            matchesPrice = product.price >= 50o0 && product.price <= 10o00}
        else if (selectedPriceRange === 'over-10o00') {
            matchesPrice = product.price > 10o00}
        return matchesSearch && matchesCategory && matchesPrice}),
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':,
                return a.price - b.price,
            case 'price-high':,
                return b.price - a.price,
            case 'newest':,
                return b.new ? 1 : -1,
            case 'popular':,
                return b.reviewCount - a.reviewCount,
            case 'rating':,
                return b.rating - a.rating,
            default: ,
                return b.featured ? 1 : -1}
    }),
    const formatPrice = (price, currency) => {
        if (price === 0),
            return 'Free',
        return `${currency} ${price.toLocaleString()}`};
    const getCategoryIcon = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId),
        return category ? category.icon : Globe};
    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId),
        return category ? category.name : 'Unknown'};
    return (<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-blue-90o0 to-slate-90o0">,
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">,
          <div className="text-center">,
            <h1 className="text-4xl font-bold text-white mb-4">,
              Technology Marketplace,
            </h1>,
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
              Discover cutting-edge technology solutions, AI platforms, and enterprise tools,
              from Zion Tech Group. Find the perfect solution for your business needs.,
            </p>,
          </div>,
        </div>,
      </div>,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">,
        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">,
          <div className="grid grid-cols-1 lg: grid-cols-4 gap-4">,
            {/* Search */}
            <div className="lg: col-span-2">,
              <div className="relative">,
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />,
                <input type="text" placeholder="Search products, services, or solutions..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"/>,
              </div>,
            </div>,
            {/* Category Filter */}
            <div>,
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent">,
                {categories.map((category) => (<option key={category.id} value={category.id} className="bg-gray-80o0 text-white">,
                    {category.name} ({category.count}),
                  </option>))}
              </select>,
            </div>,
            {/* Price Range Filter */}
            <div>,
              <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent">,
                {priceRanges.map((range) => (<option key={range.id} value={range.id} className="bg-gray-80o0 text-white">,
                    {range.name}
                  </option>))}
              </select>,
            </div>,
          </div>,
          {/* Sort Options */}
          <div className="mt-4 flex items-center justify-between">,
            <div className="flex items-center space-x-4">,
              <span className="text-gray-30o0 text-sm">Sort by: </span>,
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus: outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent">,
                {sortOptions.map((option) => (<option key={option.id} value={option.id} className="bg-gray-80o0 text-white">,
                    {option.name}
                  </option>))}
              </select>,
            </div>,
            <div className="text-gray-30o0 text-sm">,
              {filteredProducts.length} products found,
            </div>,
          </div>,
        </div>,
        {/* Featured Products Banner */}
        <div className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-2xl p-8 border border-white/10 mb-8">,
          <div className="text-center">,
            <h2 className="text-2xl font-bold text-white mb-4">,
              Featured Products,
            </h2>,
            <p className="text-gray-30o0 mb-6">,
              Discover our most popular and innovative technology solutions,
            </p>,
            <div className="flex flex-wrap justify-center gap-4">,
              {marketplaceProducts.filter(p => p.featured).slice(0, 3).map((product) => (<div key={product.id} className="bg-white/10 rounded-lg p-4 border border-white/20">,
                  <div className="flex items-center space-x-3">,
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50o0 to-purple-50o0 rounded-lg flex items-center justify-center">,
                      <getCategoryIcon categoryId={product.category} className="w-6 h-6 text-white" />,
                    </div>,
                    <div className="text-left">,
                      <h3 className="text-white font-semibold">{product.name}</h3>,
                      <p className="text-gray-30o0 text-sm">{formatPrice(product.price, product.currency)}</p>,
                    </div>,
                  </div>,
                </div>))}
            </div>,
          </div>,
        </div>,
        {/* Products Grid */}
        {sortedProducts.length > 0 ? (<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
            {sortedProducts.map((product) => (<div key={product.id} className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-transform duration-20o0 hover: scale-10o5 ${product.featured ? 'ring-2 ring-yellow-50o0' : ''}`}>,
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-60o0 to-purple-60o0">,
                  <div className="absolute inset-0 bg-black/20"></div>,
                  {product.featured && (<div className="absolute top-4 left-4 bg-yellow-50o0 text-black px-3 py-1 rounded-full text-sm font-semibold">,
                      Featured,
                    </div>)}
                  {product.new && (<div className="absolute top-4 right-4 bg-green-50o0 text-white px-3 py-1 rounded-full text-sm font-semibold">,
                      New,
                    </div>)}
                  {product.discount > 0 && (<div className="absolute bottom-4 left-4 bg-red-50o0 text-white px-3 py-1 rounded-full text-sm font-semibold">,
                      -{product.discount}%,
                    </div>)}
                  <div className="absolute bottom-4 right-4">,
                    <div className="flex items-center space-x-1 bg-black/50 rounded-lg px-2 py-1">,
                      <Star className="w-4 h-4 text-yellow-40o0 fill-current" />,
                      <span className="text-white text-sm font-medium">{product.rating}</span>,
                    </div>,
                  </div>,
                </div>,
                {/* Product Content */}
                <div className="p-6">,
                  <div className="flex items-center justify-between mb-3">,
                    <div className="flex items-center space-x-2">,
                      <div className="p-2 bg-white/10 rounded-lg">,
                        <getCategoryIcon categoryId={product.category} className="w-4 h-4 text-blue-40o0" />,
                      </div>,
                      <span className="text-gray-40o0 text-sm">{getCategoryName(product.category)}</span>,
                    </div>,
                    <div className="flex items-center space-x-2">,
                      <button className="p-2 hover: bg-white/10 rounded-lg transition-colors duration-20o0">,
                        <Heart className="w-4 h-4 text-gray-40o0 hover:text-red-40o0" />,
                      </button>,
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-20o0">,
                        <Eye className="w-4 h-4 text-gray-40o0 hover:text-blue-40o0" />,
                      </button>,
                    </div>,
                  </div>,
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">,
                    {product.name}
                  </h3>,
                  <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">,
                    {product.description}
                  </p>,
                  {/* Features */}
                  <div className="mb-4">,
                    <h4 className="text-sm font-semibold text-gray-30o0 mb-2">Key Features: </h4>,
                    <ul className="space-y-1">,
                      {product.features.slice(0, 3).map((feature, index) => (<li key={index} className="flex items-center text-gray-40o0 text-xs">,
                          <CheckCircle className="w-3 h-3 text-green-40o0 mr-2 flex-shrink-0" />,
                          {feature}
                        </li>))}
                    </ul>,
                  </div>,
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">,
                    {product.tags.slice(0, 3).map((tag, index) => (<span key={index} className="px-2 py-1 bg-white/10 text-gray-30o0 text-xs rounded-full border border-white/20">,
                        {tag}
                      </span>))}
                  </div>,
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">,
                    <div className="flex items-center space-x-2">,
                      {product.originalPrice > product.price && (<span className="text-gray-40o0 text-sm line-through">,
                          {formatPrice(product.originalPrice, product.currency)}
                        </span>)}
                      <span className="text-2xl font-bold text-white">,
                        {formatPrice(product.price, product.currency)}
                      </span>,
                    </div>,
                    <div className="flex items-center space-x-1">,
                      <Star className="w-4 h-4 text-yellow-40o0 fill-current" />,
                      <span className="text-gray-30o0 text-sm">{product.rating}</span>,
                      <span className="text-gray-40o0 text-sm">({product.reviewCount})</span>,
                    </div>,
                  </div>,
                  {/* Action Buttons */}
                  <div className="flex gap-2">,
                    <button className="flex-1 px-4 py-2 bg-blue-60o0 hover: bg-blue-70o0 text-white text-sm font-medium rounded-lg transition-colors duration-20o0 flex items-center justify-center">,
                      <ShoppingCart className="w-4 h-4 mr-2" />,
                      Add to Cart,
                    </button>,
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors duration-20o0">,
                      Details,
                    </button>,
                  </div>,
                </div>,
              </div>))}
          </div>) : (<div className="text-center py-12">,
            <Search className="w-16 h-16 text-gray-40o0 mx-auto mb-4" />,
            <h3 className="text-xl font-semibold text-gray-30o0 mb-2">No products found</h3>,
            <p className="text-gray-40o0">Try adjusting your search or filter criteria.</p>,
          </div>)}
,
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-2xl p-8 border border-white/10">,
          <div className="text-center">,
            <h2 className="text-3xl font-bold text-white mb-4">,
              Need a Custom Solution?,
            </h2>,
            <p className="text-xl text-gray-30o0 mb-6 max-w-2xl mx-auto">,
              Can't find exactly what you're looking for? Our team can create custom,
              technology solutions tailored to your specific business requirements.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link to="/contact" className="px-8 py-3 bg-blue-60o0 hover:bg-blue-70o0 text-white font-medium rounded-lg transition-colors duration-20o0">,
                Contact Sales,
              </Link>,
              <Link to="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-20o0">,
                View Services,
              </Link>,
            </div>,
          </div>,
        </div>,
        {/* Marketplace Statistics */}
        <div className="mt-16 grid grid-cols-1 md: grid-cols-4 gap-6">,
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">,
            <Globe className="w-12 h-12 text-blue-40o0 mx-auto mb-4" />,
            <div className="text-3xl font-bold text-white mb-2">24+</div>,
            <div className="text-gray-30o0">Products Available</div>,
          </div>,
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">,
            <Users className="w-12 h-12 text-green-40o0 mx-auto mb-4" />,
            <div className="text-3xl font-bold text-white mb-2">1,20o0+</div>,
            <div className="text-gray-30o0">Happy Customers</div>,
          </div>,
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">,
            <Star className="w-12 h-12 text-yellow-40o0 mx-auto mb-4" />,
            <div className="text-3xl font-bold text-white mb-2">4.8</div>,
            <div className="text-gray-30o0">Average Rating</div>,
          </div>,
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">,
            <Shield className="w-12 h-12 text-purple-40o0 mx-auto mb-4" />,
            <div className="text-3xl font-bold text-white mb-2">10o0%</div>,
            <div className="text-gray-30o0">Secure Transactions</div>,
          </div>,
        </div>,
      </div>,
    </div>)}
,