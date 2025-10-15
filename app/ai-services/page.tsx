import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, CheckCircle, Clock, DollarSign } from 'lucide-react';

const AIServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered business intelligence solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Real-time data analytics",
        "Predictive modeling",
        "Custom dashboard creation",
        "Automated reporting",
        "Data visualization"
      ],
      pricing: "From $2,999/month",
      category: "Analytics",
      rating: 4.9,
      reviews: 234,
      link: "/ai-business-intelligence"
    },
    {
      id: 2,
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation platform.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Blog post generation",
        "Social media content",
        "Email marketing campaigns",
        "Product descriptions",
        "SEO-optimized content"
      ],
      pricing: "From $1,499/month",
      category: "Content",
      rating: 4.8,
      reviews: 189,
      link: "/ai-content-generation"
    },
    {
      id: 3,
      title: "AI Customer Support",
      description: "Enhance customer experience with intelligent chatbots and automated support systems.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "24/7 chatbot support",
        "Natural language processing",
        "Multi-language support",
        "Sentiment analysis",
        "Escalation to human agents"
      ],
      pricing: "From $999/month",
      category: "Customer Service",
      rating: 4.7,
      reviews: 156,
      link: "/ai-customer-support"
    },
    {
      id: 4,
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered threat detection and automated security responses.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Threat detection",
        "Anomaly detection",
        "Automated incident response",
        "Security monitoring",
        "Compliance reporting"
      ],
      pricing: "From $3,499/month",
      category: "Security",
      rating: 4.9,
      reviews: 278,
      link: "/ai-cybersecurity"
    },
    {
      id: 5,
      title: "AI Voice Assistant",
      description: "Build intelligent voice assistants for your business with natural language understanding.",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "Voice command processing",
        "Natural language understanding",
        "Multi-platform integration",
        "Custom voice training",
        "Real-time transcription"
      ],
      pricing: "From $2,199/month",
      category: "Voice",
      rating: 4.6,
      reviews: 134,
      link: "/ai-voice-assistant"
    },
    {
      id: 6,
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent workflow automation solutions.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Process automation",
        "Task scheduling",
        "Workflow optimization",
        "Integration management",
        "Performance monitoring"
      ],
      pricing: "From $1,799/month",
      category: "Automation",
      rating: 4.8,
      reviews: 201,
      link: "/ai-workflow-automation"
    }
  ];

  const categories = ["All", "Analytics", "Content", "Customer Service", "Security", "Voice", "Automation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
              AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experience, and drive innovation across all departments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
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
                <span className="text-cyan-400 font-semibold">{service.pricing}</span>
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
              <Brain className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our AI experts help you identify the best solutions for your specific needs. 
            Get a free consultation and custom implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Free Consultation
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

export default AIServicesPage;
