import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users2,
  Phone,
  Mail,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

const INNOVATIVE_SERVICES_DATA = [
  {
    id: "quantum-computing-platform",
    title: "Quantum Computing Platform",
    category: "Quantum Computing",
    startingPrice: "$15,000",
    marketRange: "$15,000 - $50,000",
    roi: "500-1000%",
    delivery: "8-12 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$1.9B",
    competitors: ["IBM Quantum", "Google Quantum", "Amazon Braket"],
    innovationLevel: "Cutting Edge",
    bestFor: "Research, Pharma, Finance"
  },
  {
    id: "enterprise-blockchain-platform",
    title: "Enterprise Blockchain Platform",
    category: "Blockchain & Web3",
    startingPrice: "$8,500",
    marketRange: "$8,500 - $25,000",
    roi: "300-600%",
    delivery: "6-10 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$19.9B",
    competitors: ["ConsenSys", "Chainalysis", "Alchemy"],
    innovationLevel: "Advanced",
    bestFor: "Finance, Supply Chain, Healthcare"
  },
  {
    id: "carbon-tracking-platform",
    title: "Carbon Tracking & ESG Platform",
    category: "Green Tech",
    startingPrice: "$4,200",
    marketRange: "$4,200 - $12,000",
    roi: "200-400%",
    delivery: "4-6 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$8.4B",
    competitors: ["Watershed", "Normative", "Persefoni"],
    innovationLevel: "Advanced",
    bestFor: "Corporations, Investment Firms, Government"
  },
  {
    id: "satellite-data-platform",
    title: "Satellite Data & Analytics Platform",
    category: "Space Tech",
    startingPrice: "$12,000",
    marketRange: "$12,000 - $35,000",
    roi: "400-800%",
    delivery: "10-16 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$5.6B",
    competitors: ["Planet Labs", "Maxar", "BlackSky"],
    innovationLevel: "Cutting Edge",
    bestFor: "Agriculture, Urban Planning, Insurance"
  },
  {
    id: "neurotech-platform",
    title: "Neurotechnology Platform",
    category: "Neurotechnology",
    startingPrice: "$25,000",
    marketRange: "$25,000 - $75,000",
    roi: "600-1200%",
    delivery: "12-20 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$17.1B",
    competitors: ["Neuralink", "Kernel", "CTRL-labs"],
    innovationLevel: "Cutting Edge",
    bestFor: "Healthcare, Research, Medical Devices"
  },
  {
    id: "robotics-automation-platform",
    title: "Advanced Robotics & Automation Platform",
    category: "Robotics",
    startingPrice: "$18,000",
    marketRange: "$18,000 - $50,000",
    roi: "350-700%",
    delivery: "8-14 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$43.8B",
    competitors: ["ABB", "KUKA", "FANUC"],
    innovationLevel: "Advanced",
    bestFor: "Manufacturing, Logistics, Automotive"
  },
  {
    id: "digital-twin-platform",
    title: "Digital Twin & Simulation Platform",
    category: "Digital Twin",
    startingPrice: "$9,500",
    marketRange: "$9,500 - $28,000",
    roi: "250-500%",
    delivery: "6-10 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$86.1B",
    competitors: ["Siemens", "GE Digital", "PTC"],
    innovationLevel: "Advanced",
    bestFor: "Smart Cities, Industrial, Real Estate"
  },
  {
    id: "metaverse-platform",
    title: "Metaverse & Virtual Reality Platform",
    category: "Metaverse",
    startingPrice: "$7,500",
    marketRange: "$7,500 - $22,000",
    roi: "300-600%",
    delivery: "8-12 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$74.4B",
    competitors: ["Meta", "Roblox", "Decentraland"],
    innovationLevel: "Advanced",
    bestFor: "Events, Marketing, Education, Real Estate"
  },
  {
    id: "quantum-cybersecurity",
    title: "Quantum Cybersecurity Platform",
    category: "Cybersecurity",
    startingPrice: "$11,000",
    marketRange: "$11,000 - $32,000",
    roi: "400-800%",
    delivery: "6-10 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$376.3B",
    competitors: ["CrowdStrike", "SentinelOne", "Palo Alto Networks"],
    innovationLevel: "Advanced",
    bestFor: "Finance, Government, Healthcare, Energy"
  },
  {
    id: "autonomous-ai-platform",
    title: "Autonomous AI Platform",
    category: "AI & Machine Learning",
    startingPrice: "$16,000",
    marketRange: "$16,000 - $45,000",
    roi: "500-1000%",
    delivery: "10-16 weeks",
    features: {
      "AI Integration": true,
      "Real-time Processing": true,
      "Multi-platform Support": true,
      "API Access": true,
      "24/7 Support": true,
      "Custom Development": true,
      "Training & Documentation": true,
      "Compliance Ready": true
    },
    marketSize: "$190.6B",
    competitors: ["DataRobot", "H2O.ai", "Dataiku"],
    innovationLevel: "Cutting Edge",
    bestFor: "Finance, Manufacturing, E-commerce, Healthcare"
  }
];

const CONTACT_INFO = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com"
};

export function InnovativeServicesComparisonTable() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const categories = ['all', ...new Set(INNOVATIVE_SERVICES_DATA.map(service => service.category))];
  
  const filteredServices = INNOVATIVE_SERVICES_DATA
    .filter(service => 
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (searchTerm === '' || 
       service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.bestFor.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.startingPrice.replace('$', '').replace(',', '')) - 
                 parseFloat(b.startingPrice.replace('$', '').replace(',', ''));
        case 'roi':
          return parseFloat(a.roi.split('-')[0]) - parseFloat(b.roi.split('-')[0]);
        case 'delivery':
          return parseInt(a.delivery.split('-')[0]) - parseInt(b.delivery.split('-')[0]);
        case 'marketSize':
          return parseFloat(a.marketSize.replace('$', '').replace('B', '')) - 
                 parseFloat(b.marketSize.replace('$', '').replace('B', ''));
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const featureKeys = [
    "AI Integration",
    "Real-time Processing", 
    "Multi-platform Support",
    "API Access",
    "24/7 Support",
    "Custom Development",
    "Training & Documentation",
    "Compliance Ready"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovative Services Comparison
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Compare our cutting-edge micro SAAS solutions across different categories, pricing tiers, and innovation levels. 
            Find the perfect solution for your business needs.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              {CONTACT_INFO.phone}
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              {CONTACT_INFO.email}
            </a>
            <a 
              href={CONTACT_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Website
            </a>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="title">Name</option>
                <option value="price">Price</option>
                <option value="roi">ROI</option>
                <option value="delivery">Delivery Time</option>
                <option value="marketSize">Market Size</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Table */}
        <div className="bg-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white sticky left-0 bg-slate-700 z-10">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Starting Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Market Range</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">ROI</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Delivery</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Market Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Innovation Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Best For</th>
                  {featureKeys.map((feature) => (
                    <th key={feature} className="px-6 py-4 text-center text-sm font-semibold text-white">
                      {feature}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredServices.map((service, index) => (
                  <tr key={service.id} className={`hover:bg-slate-700 transition-colors ${index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-750'}`}>
                    <td className="px-6 py-4 sticky left-0 bg-inherit z-10">
                      <div>
                        <h3 className="font-semibold text-white">{service.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <a 
                            href={`tel:${CONTACT_INFO.phone}`}
                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                          >
                            Get Quote
                          </a>
                          <a 
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="text-xs bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded transition-colors"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {service.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-400 font-semibold">{service.startingPrice}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-blue-400">{service.marketRange}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-400 font-semibold">{service.roi}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-purple-400">{service.delivery}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-cyan-400">{service.marketSize}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        service.innovationLevel === 'Cutting Edge' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {service.innovationLevel === 'Cutting Edge' && <Star className="h-3 w-3 mr-1" />}
                        {service.innovationLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-300">{service.bestFor}</span>
                    </td>
                    {featureKeys.map((feature) => (
                      <td key={feature} className="px-6 py-4 text-center">
                        {service.features[feature] ? (
                          <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{filteredServices.length}</div>
            <div className="text-slate-300">Total Services</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              ${Math.min(...filteredServices.map(s => parseFloat(s.startingPrice.replace('$', '').replace(',', '')))).toLocaleString()}
            </div>
            <div className="text-slate-300">Lowest Starting Price</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {Math.max(...filteredServices.map(s => parseInt(s.roi.split('-')[0])))}+%
            </div>
            <div className="text-slate-300">Highest ROI</div>
            </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {filteredServices.filter(s => s.innovationLevel === 'Cutting Edge').length}
            </div>
            <div className="text-slate-300">Cutting Edge Services</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Choose Your Innovation Path?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our expert team is ready to help you select and implement the perfect solution for your business needs. 
            Get personalized recommendations and start your transformation journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call for Consultation
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-5 w-5 mr-2" />
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}