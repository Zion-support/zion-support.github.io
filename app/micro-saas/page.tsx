import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users, 
  Mail, 
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSAASServices = [
    {
      id: 1,
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform with 50+ templates, multi-language support, and SEO optimization.",
      features: [
        "50+ Content Templates",
        "Multi-language Support",
        "SEO Optimization",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Social Media Integration"
      ],
      pricing: {
        starter: { price: 29, period: "month", features: ["10,000 words/month", "5 templates", "Basic SEO"] },
        pro: { price: 79, period: "month", features: ["50,000 words/month", "All templates", "Advanced SEO", "API Access"] },
        enterprise: { price: 199, period: "month", features: ["Unlimited words", "Custom templates", "White-label", "Priority support"] }
      },
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      category: "Content Creation",
      marketPrice: "$49-199/month",
      savings: "40%"
    },
    {
      id: 2,
      name: "Smart Analytics Dashboard",
      description: "Real-time business intelligence platform with predictive analytics, custom reports, and automated insights.",
      features: [
        "Real-time Analytics",
        "Predictive Insights",
        "Custom Dashboards",
        "Automated Reports",
        "Data Visualization",
        "API Integration"
      ],
      pricing: {
        starter: { price: 39, period: "month", features: ["5 data sources", "Basic reports", "Email alerts"] },
        pro: { price: 99, period: "month", features: ["20 data sources", "Advanced analytics", "Custom dashboards"] },
        enterprise: { price: 299, period: "month", features: ["Unlimited sources", "AI insights", "White-label", "Dedicated support"] }
      },
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      category: "Analytics",
      marketPrice: "$79-299/month",
      savings: "35%"
    },
    {
      id: 3,
      name: "Automated Email Marketing",
      description: "AI-driven email marketing automation with advanced segmentation, A/B testing, and behavioral triggers.",
      features: [
        "AI Segmentation",
        "A/B Testing",
        "Behavioral Triggers",
        "Template Library",
        "Deliverability Optimization",
        "Advanced Analytics"
      ],
      pricing: {
        starter: { price: 19, period: "month", features: ["1,000 contacts", "5 campaigns", "Basic automation"] },
        pro: { price: 59, period: "month", features: ["10,000 contacts", "Unlimited campaigns", "Advanced automation"] },
        enterprise: { price: 149, period: "month", features: ["100,000 contacts", "AI optimization", "Custom integrations"] }
      },
      icon: Mail,
      color: "from-green-500 to-emerald-500",
      category: "Marketing",
      marketPrice: "$39-149/month",
      savings: "50%"
    },
    {
      id: 4,
      name: "Cloud Security Monitor",
      description: "Comprehensive cloud security monitoring with threat detection, compliance reporting, and automated response.",
      features: [
        "Threat Detection",
        "Compliance Monitoring",
        "Automated Response",
        "Security Reports",
        "Multi-cloud Support",
        "24/7 Monitoring"
      ],
      pricing: {
        starter: { price: 49, period: "month", features: ["1 cloud account", "Basic monitoring", "Email alerts"] },
        pro: { price: 129, period: "month", features: ["5 cloud accounts", "Advanced monitoring", "Automated response"] },
        enterprise: { price: 299, period: "month", features: ["Unlimited accounts", "Custom rules", "Dedicated support"] }
      },
      icon: Shield,
      color: "from-red-500 to-orange-500",
      category: "Security",
      marketPrice: "$99-299/month",
      savings: "45%"
    },
    {
      id: 5,
      name: "AI Customer Support Bot",
      description: "Intelligent customer support automation with natural language processing and seamless human handoff.",
      features: [
        "Natural Language Processing",
        "Multi-channel Support",
        "Human Handoff",
        "Knowledge Base Integration",
        "Sentiment Analysis",
        "Custom Training"
      ],
      pricing: {
        starter: { price: 39, period: "month", features: ["100 conversations", "Basic responses", "Email support"] },
        pro: { price: 89, period: "month", features: ["1,000 conversations", "Advanced AI", "Multi-channel"] },
        enterprise: { price: 199, period: "month", features: ["Unlimited conversations", "Custom training", "Priority support"] }
      },
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      category: "Customer Service",
      marketPrice: "$79-199/month",
      savings: "40%"
    },
    {
      id: 6,
      name: "Smart Project Management",
      description: "AI-powered project management with predictive scheduling, resource optimization, and automated reporting.",
      features: [
        "Predictive Scheduling",
        "Resource Optimization",
        "Automated Reporting",
        "Team Collaboration",
        "Progress Tracking",
        "Risk Assessment"
      ],
      pricing: {
        starter: { price: 29, period: "month", features: ["5 projects", "10 team members", "Basic features"] },
        pro: { price: 79, period: "month", features: ["50 projects", "50 team members", "Advanced features"] },
        enterprise: { price: 199, period: "month", features: ["Unlimited projects", "Unlimited members", "Custom features"] }
      },
      icon: Target,
      color: "from-yellow-500 to-orange-500",
      category: "Productivity",
      marketPrice: "$59-199/month",
      savings: "35%"
    },
    {
      id: 7,
      name: "AI Code Assistant",
      description: "Intelligent code generation and review platform with multi-language support and automated testing.",
      features: [
        "Code Generation",
        "Code Review",
        "Multi-language Support",
        "Automated Testing",
        "Documentation Generation",
        "Security Scanning"
      ],
      pricing: {
        starter: { price: 49, period: "month", features: ["1,000 lines/month", "5 languages", "Basic review"] },
        pro: { price: 99, period: "month", features: ["10,000 lines/month", "20 languages", "Advanced review"] },
        enterprise: { price: 249, period: "month", features: ["Unlimited lines", "All languages", "Custom models"] }
      },
      icon: Cpu,
      color: "from-cyan-500 to-blue-500",
      category: "Development",
      marketPrice: "$99-249/month",
      savings: "30%"
    },
    {
      id: 8,
      name: "Smart Inventory Management",
      description: "AI-driven inventory optimization with demand forecasting, automated reordering, and waste reduction.",
      features: [
        "Demand Forecasting",
        "Automated Reordering",
        "Waste Reduction",
        "Multi-location Support",
        "Supplier Integration",
        "Cost Optimization"
      ],
      pricing: {
        starter: { price: 39, period: "month", features: ["1 location", "100 SKUs", "Basic forecasting"] },
        pro: { price: 89, period: "month", features: ["5 locations", "1,000 SKUs", "Advanced forecasting"] },
        enterprise: { price: 199, period: "month", features: ["Unlimited locations", "Unlimited SKUs", "Custom algorithms"] }
      },
      icon: Database,
      color: "from-teal-500 to-green-500",
      category: "Operations",
      marketPrice: "$79-199/month",
      savings: "40%"
    }
  ];

  const categories = ["All", "Content Creation", "Analytics", "Marketing", "Security", "Customer Service", "Productivity", "Development", "Operations"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="holographic">Revolutionary</span>
            <br />
            <span className="text-white">Micro SAAS Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge micro SAAS solutions. 
            Real services, proven results, and unbeatable pricing.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">Micro SAAS Services</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{service.category}</div>
                    <div className="text-xs text-green-400 font-semibold">{service.savings} Savings</div>
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Pricing</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Starter</span>
                      <span className="text-lg font-bold text-white">${service.pricing.starter.price}/{service.pricing.starter.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Pro</span>
                      <span className="text-lg font-bold text-cyan-400">${service.pricing.pro.price}/{service.pricing.pro.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Enterprise</span>
                      <span className="text-lg font-bold text-purple-400">${service.pricing.enterprise.price}/{service.pricing.enterprise.period}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full futuristic-btn group">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="cyber-card p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our <span className="holographic">Micro SAAS Solutions</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise-grade micro SAAS solutions at startup-friendly prices, 
              with unmatched support and continuous innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">
                Get up and running in minutes, not months. Our solutions are designed for instant deployment and immediate value.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven ROI</h3>
              <p className="text-gray-300">
                Our clients see an average 300% ROI within the first year. Real results, real savings, real growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Support</h3>
              <p className="text-gray-300">
                24/7 support, dedicated account managers, and white-glove service. We're here when you need us.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="futuristic-btn text-lg px-8 py-4"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-cyan-500 hover:bg-cyan-500/20 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;