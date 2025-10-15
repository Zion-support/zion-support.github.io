import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, CheckCircle, Clock, DollarSign } from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      id: 1,
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics.",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      category: "Analytics",
      rating: 4.9,
      reviews: 234,
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom dashboard creation",
        "Automated reporting",
        "Multi-source data integration"
      ],
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: 2,
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response.",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      category: "Security",
      rating: 4.8,
      reviews: 189,
      features: [
        "AI threat detection",
        "Automated incident response",
        "Security monitoring",
        "Compliance reporting",
        "Real-time alerts"
      ],
      link: "/zion-security-shield",
      featured: true
    },
    {
      id: 3,
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability.",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      category: "Storage",
      rating: 4.7,
      reviews: 156,
      features: [
        "End-to-end encryption",
        "Unlimited storage",
        "File sharing",
        "Version control",
        "Team collaboration"
      ],
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      id: 4,
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation.",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      category: "CRM",
      rating: 4.8,
      reviews: 201,
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Customer insights",
        "Sales forecasting",
        "Integration management"
      ],
      link: "/zion-ai-crm-pro",
      featured: true
    },
    {
      id: 5,
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration.",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      category: "Marketing",
      rating: 4.7,
      reviews: 178,
      features: [
        "AI content generation",
        "Multi-channel campaigns",
        "Customer segmentation",
        "Performance analytics",
        "A/B testing"
      ],
      link: "/zion-ai-marketing-automation-pro",
      featured: true
    },
    {
      id: 6,
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation.",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      category: "Project Management",
      rating: 4.6,
      reviews: 145,
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Progress tracking",
        "Team collaboration",
        "Risk assessment"
      ],
      link: "/zion-ai-project-manager-pro",
      featured: true
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, active: true },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length, active: false },
    { name: "Storage", count: microSaasServices.filter(s => s.category === "Storage").length, active: false },
    { name: "CRM", count: microSaasServices.filter(s => s.category === "CRM").length, active: false },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length, active: false },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length, active: false }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category.name
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group relative"
            >
              {service.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-cyan-400 font-semibold">{service.price}</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                  {service.category}
                </span>
              </div>

              <Link
                to={service.link}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-500/20 flex items-center justify-center">
              <Zap className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No solutions found</h3>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with Micro SAAS?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get started with our micro SAAS solutions today. No complex setup, 
            no lengthy implementation - just powerful tools that work immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Monitor className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
