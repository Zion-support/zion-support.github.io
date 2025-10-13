import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cloud, BarChart3, Users, Award, ArrowRight, CheckCircle, Star, Globe, Smartphone, Monitor } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "Advanced analytics platform with AI-powered insights and real-time reporting",
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting"
      ],
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution with advanced threat detection and automated response",
      features: [
        "Advanced threat detection",
        "Automated incident response",
        "24/7 monitoring",
        "Compliance reporting"
      ],
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      featured: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      features: [
        "End-to-end encryption",
        "Unlimited storage",
        "Version control",
        "Team collaboration"
      ],
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      id: "zion-ai-crm-pro",
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Customer insights",
        "Sales forecasting"
      ],
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: false
    },
    {
      id: "zion-ai-marketing-automation-pro",
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      features: [
        "Predictive content generation",
        "Multi-channel campaigns",
        "A/B testing automation",
        "ROI optimization"
      ],
      price: "From $149/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: false
    },
    {
      id: "zion-ai-project-manager-pro",
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Risk assessment",
        "Progress tracking"
      ],
      price: "From $99/month",
      icon: <Monitor className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      featured: false
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "All our micro SAAS solutions are ready to use immediately with no complex setup required.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Scalable Solutions",
      description: "Grow with confidence knowing our solutions scale with your business needs.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "AI-Powered",
      description: "Leverage artificial intelligence to automate processes and gain valuable insights.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability you can trust for your business.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS - Zion Tech Group | Ready-to-Use Solutions"
        description="Discover our comprehensive collection of micro SAAS solutions. Ready-to-deploy software that can transform your business operations immediately."
        keywords="micro SAAS, software solutions, business automation, ready-to-use, SaaS products, business tools"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our collection of ready-to-use micro SAAS solutions. 
            Deploy powerful software tools that can revolutionize your operations in minutes, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              to="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              to="/demo"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our micro SAAS solutions are designed to deliver immediate value with minimal setup time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular micro SAAS solutions that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                  product.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {product.featured && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-purple-400 font-bold text-xl">{product.price}</span>
                </div>
                
                <FuturisticButton
                  to={product.link}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
            Start your transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              to="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Get Started Now
            </FuturisticButton>
            <FuturisticButton
              to="/pricing"
              variant="outline"
              size="lg"
              icon={<Star className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Free trial available • No setup fees • 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;