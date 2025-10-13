import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BarChart3, Shield, Star, CheckCircle, Users, TrendingUp, Globe, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business intelligence platform with real-time dashboards and predictive analytics for data-driven decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "From $299/month",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"],
      featured: true
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity protection with AI-powered threat detection and automated response systems.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "From $499/month",
      features: ["Threat detection", "Automated response", "Security monitoring", "Incident management"],
      featured: true
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with advanced encryption and seamless file synchronization across devices.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "From $199/month",
      features: ["Secure storage", "File sync", "Advanced encryption", "Multi-device access"],
      featured: false
    },
    {
      title: "Zion AI Voice Assistant Pro",
      description: "Intelligent voice assistant with natural language processing and multi-language support for business automation.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "From $399/month",
      features: ["Voice commands", "Natural language", "Multi-language", "Business automation"],
      featured: true
    },
    {
      title: "Zion AI Content Studio",
      description: "AI-powered content creation platform for generating high-quality text, images, and multimedia content.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "From $249/month",
      features: ["Content generation", "Image creation", "SEO optimization", "Brand consistency"],
      featured: false
    },
    {
      title: "Zion AI Customer Insights",
      description: "Advanced customer analytics platform with AI-powered insights and behavioral prediction for better customer engagement.",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      price: "From $349/month",
      features: ["Customer analytics", "Behavior prediction", "Engagement insights", "ROI tracking"],
      featured: false
    }
  ];

  const benefits = [
    "Ready-to-use solutions",
    "No technical setup required",
    "Scalable architecture",
    "24/7 expert support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Transform your business with our comprehensive micro SAAS solutions. Ready-to-use software for analytics, security, content creation, and more."
        keywords="micro SAAS, business software, ready-to-use solutions, analytics, security, content creation, business automation"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive micro SAAS solutions. 
            Ready-to-use software that requires no technical setup and delivers immediate results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our most popular micro SAAS solutions designed to solve specific business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.filter(product => product.featured).map((product, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-transform duration-300 relative"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{product.price}</span>
                  <FuturisticButton
                    href="/contact"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Learn More
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* All Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete range of micro SAAS solutions for every business need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4`}>
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-sm">{product.price}</span>
                  <FuturisticButton
                    href="/contact"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Learn More
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of ready-to-use software solutions designed for modern businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-gray-300 text-sm md:text-base leading-relaxed">{benefit}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start using our micro SAAS solutions today and experience immediate results. 
            No technical setup required, just instant business transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Your Journey
            </FuturisticButton>
            <FuturisticButton
              href="/pricing"
              variant="outline"
              size="lg"
              icon={<Star className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;