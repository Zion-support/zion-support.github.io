import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Globe, 
  Zap, 
  Users, 
  Server, 
  Database, 
  Code,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export function EnhancedQuickAccess() {
  const quickAccessItems = [
    {
      title: "AI Solutions",
      description: "Machine Learning, NLP, Computer Vision",
      icon: Brain,
      href: "/services/ai",
      color: "from-zion-cyan to-zion-blue",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      rating: 4.9,
      reviewCount: 156
    },
    {
      title: "IT Infrastructure",
      description: "Enterprise IT & Network Solutions",
      icon: Shield,
      href: "/services/infrastructure",
      color: "from-zion-purple to-zion-cyan",
      features: ["Network Security", "Cloud Migration", "Disaster Recovery"],
      rating: 4.8,
      reviewCount: 89
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud Management & Automation",
      icon: Globe,
      href: "/services/cloud",
      color: "from-zion-blue to-zion-purple",
      features: ["Multi-Cloud Management", "CI/CD Pipelines", "Infrastructure as Code"],
      rating: 4.9,
      reviewCount: 234
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use Business Solutions",
      icon: Zap,
      href: "/services/micro-saas",
      color: "from-zion-cyan to-zion-purple",
      features: ["Business Automation", "Customer Management", "Analytics Dashboard"],
      rating: 4.7,
      reviewCount: 312
    }
  ];

  const stats = [
    { label: "Active Clients", value: "500+", icon: Users },
    { label: "Services Delivered", value: "1000+", icon: CheckCircle },
    { label: "Success Rate", value: "99.9%", icon: Star },
    { label: "Global Reach", value: "25+", icon: TrendingUp }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 cyber-grid"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quick Access to
            <span className="block text-gradient"> Premium Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Get instant access to our most popular AI and IT solutions. 
            Transform your business with cutting-edge technology in minutes.
          </p>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickAccessItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zion-blue-dark/30 to-zion-slate-dark/30 border border-zion-blue-light/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-zion-slate-light">
                    {item.rating} ({item.reviewCount})
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={item.href}
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 text-zion-cyan rounded-lg font-medium hover:from-zion-cyan/30 hover:to-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-zion-cyan group-hover:to-zion-purple group-hover:text-white"
              >
                Explore
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {stat.value}
                </div>
                <div className="text-zion-slate-light text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-zion-slate-light mb-6 text-lg">
            Need a custom solution? Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-glow"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}