import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Brain,
  Globe,
  Target,
  Calendar,
  Monitor
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      featured: true,
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"]
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      featured: true,
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Tools"]
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true,
      features: ["End-to-end Encryption", "Unlimited Storage", "File Sharing", "Version Control"]
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: true,
      features: ["Lead Scoring", "Automation", "Pipeline Management", "Analytics"]
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      features: ["Content Generation", "Multi-channel", "A/B Testing", "ROI Tracking"]
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      featured: true,
      features: ["Task Prioritization", "Resource Allocation", "Time Tracking", "Reporting"]
    }
  ];

  const categories = [
    {
      name: "AI-Powered Solutions",
      description: "Intelligent automation and machine learning tools",
      icon: <Brain className="w-6 h-6" />,
      count: "25+ Products"
    },
    {
      name: "Business Intelligence",
      description: "Analytics and data visualization tools",
      icon: <BarChart3 className="w-6 h-6" />,
      count: "15+ Products"
    },
    {
      name: "Security & Compliance",
      description: "Cybersecurity and regulatory compliance tools",
      icon: <Shield className="w-6 h-6" />,
      count: "12+ Products"
    },
    {
      name: "Productivity Tools",
      description: "Efficiency and workflow optimization tools",
      icon: <Zap className="w-6 h-6" />,
      count: "20+ Products"
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <FuturisticBackgroundEnhanced>
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Tools"
        description="Discover our comprehensive collection of micro SAAS solutions. Ready-to-use software tools for analytics, security, productivity, and business automation."
        keywords="micro saas, software tools, business automation, analytics, security, productivity, ready-to-use software"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <ResponsiveContainer>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">60+ Micro SAAS Solutions</span>
            </div>
            
            <FuturisticTextEnhanced
              variant="display"
              size="5xl"
              gradient={true}
              animated={true}
              glow={true}
              neon={true}
              className="mb-6"
            >
              Micro SAAS Solutions
            </FuturisticTextEnhanced>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              No complex setup, no lengthy implementation - just powerful tools that work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButtonEnhanced
                href="/contact"
                variant="primary"
                size="lg"
                icon={Sparkles}
                iconPosition="left"
                glowColor="cyan"
                neon={true}
                animated={true}
              >
                Get Started Today
              </FuturisticButtonEnhanced>
              <FuturisticButtonEnhanced
                href="/demo"
                variant="outline"
                size="lg"
                icon={Monitor}
                iconPosition="left"
                glowColor="purple"
                neon={true}
                animated={true}
              >
                Watch Demo
              </FuturisticButtonEnhanced>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Solution Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our micro SAAS solutions organized by category to find exactly what you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                  <div className="text-cyan-400 font-medium text-sm">{category.count}</div>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and powerful micro SAAS solutions, ready for immediate deployment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="relative overflow-hidden"
                >
                  {product.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <Link to={product.link} className="block">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-cyan-400 font-medium">{product.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions and start transforming your business operations today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButtonEnhanced
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  glowColor="cyan"
                  neon={true}
                  animated={true}
                >
                  Get Started Now
                </FuturisticButtonEnhanced>
                <FuturisticButtonEnhanced
                  href="/demo"
                  variant="outline"
                  size="lg"
                  icon={Monitor}
                  iconPosition="right"
                  glowColor="purple"
                  neon={true}
                  animated={true}
                >
                  Schedule Demo
                </FuturisticButtonEnhanced>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </FuturisticBackgroundEnhanced>
  );
};

export default MicroSaasPage;
