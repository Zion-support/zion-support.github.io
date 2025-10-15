import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BarChart3, Mic, Camera, Headphones, Calculator, Clock, Calendar, Package, Receipt, ClipboardList, Workflow, ArrowRight, CheckCircle, Star, Zap, Shield, Users, Globe } from "lucide-react";

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting",
      price: "From $299/month",
      originalPrice: "$499/month",
      discount: "40% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time dashboard analytics",
        "Predictive business insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 25%",
        "Reduce reporting time by 80%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: "zion-ai-voice-assistant-pro",
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice AI with natural language processing, multi-language support, and custom voice training",
      price: "From $199/month",
      originalPrice: "$349/month",
      discount: "43% OFF",
      icon: <Mic className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Natural language processing",
        "Multi-language support (50+ languages)",
        "Custom voice training",
        "Real-time transcription",
        "Voice command automation",
        "Integration with 100+ apps",
        "Custom wake words",
        "Advanced analytics"
      ],
      benefits: [
        "Improve productivity by 40%",
        "Reduce manual tasks by 60%",
        "24/7 voice assistance",
        "Seamless integration"
      ],
      category: "AI & Automation",
      rating: 4.8,
      reviews: 892,
      link: "/zion-ai-voice-assistant-pro",
      featured: true
    },
    {
      id: "zion-video-editor-pro",
      name: "Zion Video Editor Pro",
      description: "Professional video editing platform with AI-powered features, templates, and cloud collaboration",
      price: "From $149/month",
      originalPrice: "$249/month",
      discount: "40% OFF",
      icon: <Camera className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: [
        "AI-powered video editing",
        "Professional templates library",
        "Cloud-based collaboration",
        "4K/8K video support",
        "Advanced color grading",
        "Audio enhancement tools",
        "Motion graphics library",
        "One-click social media export"
      ],
      benefits: [
        "Create professional videos 10x faster",
        "Reduce editing time by 70%",
        "No technical skills required",
        "Collaborate with team members"
      ],
      category: "Creative Tools",
      rating: 4.7,
      reviews: 634,
      link: "/zion-video-editor-pro",
      featured: false
    }
  ];

  const categories = [
    { name: "Analytics", count: 12, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "AI & Automation", count: 18, icon: <Zap className="w-5 h-5" /> },
    { name: "Creative Tools", count: 8, icon: <Camera className="w-5 h-5" /> },
    { name: "Productivity", count: 15, icon: <Workflow className="w-5 h-5" /> },
    { name: "Communication", count: 6, icon: <Users className="w-5 h-5" /> },
    { name: "Security", count: 9, icon: <Shield className="w-5 h-5" /> }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Deployment",
      description: "Get up and running in minutes, not months. Our micro SaaS solutions are ready to use immediately."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, data encryption, and regular security audits."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scalability",
      description: "Scale from startup to enterprise with our cloud-native architecture and global CDN."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team to ensure your success."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Ready-to-use tools for analytics, automation, and productivity." />
        <meta name="keywords" content="micro saas, business tools, analytics, automation, productivity, ready-to-use software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Package className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Micro SaaS Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Micro SaaS
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-white">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use business tools that solve specific problems. No development time, no technical complexity - just powerful solutions that work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the perfect solution for your specific business needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} solutions</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and powerful micro SaaS solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold ml-2">
                        {service.discount}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for modern businesses that need powerful tools without the complexity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of micro SaaS solutions and start seeing results immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;