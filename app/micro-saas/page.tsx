import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Monitor,
  Smartphone,
  Globe,
  Database,
  Code,
  Settings,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Mail
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions - Zion Tech Group",
    "description": "Comprehensive collection of ready-to-use micro SAAS solutions for modern businesses",
    "url": "https://ziontechgroup.com/micro-saas",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Zion AI Analytics Pro",
          "description": "AI-powered business intelligence platform"
        },
        {
          "@type": "SoftwareApplication", 
          "name": "Zion AI CRM Pro",
          "description": "Intelligent customer relationship management"
        }
      ]
    }
  };

  const microSaasSolutions = [
    {
      name: "Zion AI Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-ai-analytics-pro",
      category: "Analytics",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API integration"],
      rating: 4.9,
      users: "2,500+",
      featured: true
    },
    {
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      category: "CRM",
      features: ["Lead scoring", "Automation", "Pipeline management", "Integration"],
      rating: 4.8,
      users: "1,800+",
      featured: true
    },
    {
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered content generation and editing tools",
      price: "From $149/month",
      icon: <Monitor className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      category: "Content",
      features: ["AI video generation", "Auto-editing", "Templates", "Export options"],
      rating: 4.7,
      users: "1,200+",
      featured: true
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation with AI-powered customization and payment tracking",
      price: "From $99/month",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/zion-ai-invoice-generator",
      category: "Finance",
      features: ["Auto-generation", "Payment tracking", "Customization", "Tax calculation"],
      rating: 4.6,
      users: "950+",
      featured: false
    },
    {
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics and insights powered by advanced AI algorithms",
      price: "From $179/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-customer-insights",
      category: "Analytics",
      features: ["Customer segmentation", "Behavior analysis", "Predictive insights", "Reports"],
      rating: 4.8,
      users: "1,400+",
      featured: false
    },
    {
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis for better communication and engagement",
      price: "From $129/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer",
      category: "Communication",
      features: ["Sentiment analysis", "Performance metrics", "Optimization tips", "A/B testing"],
      rating: 4.5,
      users: "800+",
      featured: false
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "Intelligent inventory management with predictive analytics and automation",
      price: "From $249/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      category: "Operations",
      features: ["Predictive analytics", "Auto-reordering", "Cost optimization", "Integration"],
      rating: 4.7,
      users: "1,100+",
      featured: false
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all touchpoints",
      price: "From $159/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      category: "Analytics",
      features: ["Real-time tracking", "Multi-channel analysis", "Alerts", "Reporting"],
      rating: 4.6,
      users: "700+",
      featured: false
    },
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced AI voice assistant for business automation and customer service",
      price: "From $199/month",
      icon: <Smartphone className="w-8 h-8" />,
      link: "/zion-ai-voice-assistant-pro",
      category: "Automation",
      features: ["Voice commands", "Integration", "Customization", "Analytics"],
      rating: 4.8,
      users: "1,300+",
      featured: true
    },
    {
      name: "Zion AI Code Reviewer",
      description: "AI-powered code review and quality assurance for development teams",
      price: "From $179/month",
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-code-reviewer",
      category: "Development",
      features: ["Code analysis", "Security checks", "Performance optimization", "Team collaboration"],
      rating: 4.7,
      users: "900+",
      featured: false
    },
    {
      name: "Zion AI Social Media Manager",
      description: "Comprehensive social media management with AI-powered content and scheduling",
      price: "From $149/month",
      icon: <Globe className="w-8 h-8" />,
      link: "/zion-ai-social-media-manager",
      category: "Marketing",
      features: ["Content generation", "Scheduling", "Analytics", "Multi-platform"],
      rating: 4.6,
      users: "1,600+",
      featured: false
    },
    {
      name: "Zion AI Performance Optimizer",
      description: "AI-driven performance optimization for websites and applications",
      price: "From $199/month",
      icon: <Settings className="w-8 h-8" />,
      link: "/zion-ai-performance-optimizer",
      category: "Performance",
      features: ["Speed optimization", "SEO enhancement", "Monitoring", "Automation"],
      rating: 4.8,
      users: "1,200+",
      featured: true
    }
  ];

  const categories = [
    { name: "All", count: microSaasSolutions.length, active: true },
    { name: "Analytics", count: microSaasSolutions.filter(s => s.category === "Analytics").length, active: false },
    { name: "CRM", count: microSaasSolutions.filter(s => s.category === "CRM").length, active: false },
    { name: "Content", count: microSaasSolutions.filter(s => s.category === "Content").length, active: false },
    { name: "Finance", count: microSaasSolutions.filter(s => s.category === "Finance").length, active: false },
    { name: "Marketing", count: microSaasSolutions.filter(s => s.category === "Marketing").length, active: false },
    { name: "Development", count: microSaasSolutions.filter(s => s.category === "Development").length, active: false },
    { name: "Performance", count: microSaasSolutions.filter(s => s.category === "Performance").length, active: false }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "15,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <FuturisticBackgroundEnhanced>
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Tools"
        description="Discover our comprehensive collection of micro SAAS solutions designed for modern businesses. AI-powered tools for analytics, CRM, content creation, and more."
        keywords="micro saas, business tools, AI solutions, software as a service, business automation, productivity tools"
        canonical="https://ziontechgroup.com/micro-saas"
        structuredData={structuredData}
      />
      
      <main id="main-content" role="main" aria-label="Micro SAAS Solutions">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <FuturisticTextEnhanced
              variant="display"
              size="6xl"
              gradient={true}
              animated={true}
              glow={true}
              neon={true}
              className="mb-6 leading-tight"
            >
              Micro SAAS Solutions
            </FuturisticTextEnhanced>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Transform your business with our comprehensive collection of AI-powered micro SAAS solutions. 
              Ready-to-use tools that integrate seamlessly into your workflow.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive collection of AI-powered micro SAAS solutions designed to streamline your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasSolutions.map((solution, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="relative overflow-hidden"
                >
                  <Link
                    to={solution.link}
                    className="block"
                    aria-label={`Learn more about ${solution.name}`}
                  >
                    {solution.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {solution.name}
                        </h3>
                        <p className="text-cyan-400 font-medium">{solution.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(solution.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-300 ml-2">{solution.rating} ({solution.users} users)</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {solution.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full"
                        >
                          {feature}
                        </span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
              Start your digital transformation journey today.
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
                Get Started Today
              </FuturisticButtonEnhanced>
              <FuturisticButtonEnhanced
                href="/demo"
                variant="outline"
                size="lg"
                icon={Sparkles}
                iconPosition="right"
                glowColor="purple"
                neon={true}
                animated={true}
              >
                Schedule Demo
              </FuturisticButtonEnhanced>
            </div>
          </div>
        </section>
      </main>
    </FuturisticBackgroundEnhanced>
  );
};

export default MicroSaasPage;