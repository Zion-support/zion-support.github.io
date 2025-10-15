import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3, CheckCircle, Star, Clock, DollarSign } from 'lucide-react';

const WebDevelopmentPage = () => {
  const services = [
    {
      id: 1,
      title: "Custom Web Applications",
      description: "Build powerful, scalable web applications tailored to your business needs with modern technologies.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "React/Next.js development",
        "Node.js backend services",
        "Database design & optimization",
        "API development & integration",
        "Responsive design"
      ],
      pricing: "From $5,999/project",
      category: "Development",
      rating: 4.9,
      reviews: 234
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: "Create stunning online stores with advanced features and seamless user experience.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Custom e-commerce platforms",
        "Payment gateway integration",
        "Inventory management",
        "Order processing system",
        "Mobile optimization"
      ],
      pricing: "From $7,999/project",
      category: "E-commerce",
      rating: 4.8,
      reviews: 189
    },
    {
      id: 3,
      title: "Progressive Web Apps",
      description: "Build fast, reliable, and engaging PWAs that work across all devices and platforms.",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Offline functionality",
        "Push notifications",
        "App-like experience",
        "Cross-platform compatibility",
        "Performance optimization"
      ],
      pricing: "From $4,999/project",
      category: "PWA",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      title: "API Development",
      description: "Create robust, scalable APIs that power your applications and integrate with third-party services.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "Authentication & authorization",
        "Rate limiting & security",
        "Documentation & testing"
      ],
      pricing: "From $2,999/project",
      category: "API",
      rating: 4.8,
      reviews: 201
    },
    {
      id: 5,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with our comprehensive maintenance and support services.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Regular updates & patches",
        "Security monitoring",
        "Performance optimization",
        "Backup & recovery",
        "24/7 technical support"
      ],
      pricing: "From $299/month",
      category: "Maintenance",
      rating: 4.9,
      reviews: 278
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Create beautiful, intuitive user interfaces that provide exceptional user experience.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Usability testing",
        "Design system creation"
      ],
      pricing: "From $3,999/project",
      category: "Design",
      rating: 4.7,
      reviews: 178
    }
  ];

  const categories = ["All", "Development", "E-commerce", "PWA", "API", "Maintenance", "Design"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredServices = services.filter(service => {
    return selectedCategory === "All" || service.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Web Development Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your ideas into powerful web applications with our expert development team. 
            From concept to deployment, we deliver exceptional results.
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
                to="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build Your Next Web Application?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our expert development team bring your vision to life. 
            Get a free consultation and detailed project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Code className="w-5 h-5 mr-2" />
              Start Your Project
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Award className="w-5 h-5 mr-2" />
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
