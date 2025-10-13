import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar, 
  Video, 
  FileText, 
  Mail, 
  Package, 
  TrendingUp, 
  Zap, 
  Brain, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Sparkles,
  Monitor,
  Smartphone,
  Globe
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
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
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"]
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true,
      features: ["End-to-End Encryption", "Unlimited Storage", "File Sharing", "Version Control"]
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: true,
      features: ["Lead Scoring", "Automation", "Pipeline Management", "Customer Insights"]
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
      features: ["Task Prioritization", "Resource Allocation", "Timeline Management", "Team Collaboration"]
    },
    {
      name: "Zion AI Video Generator",
      description: "AI-powered video creation platform with automated editing and professional templates",
      price: "From $79/month",
      icon: <Video className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      features: ["Auto Editing", "Templates", "Voice Synthesis", "Multi-format Export"]
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Smart invoice generation with automated billing and payment tracking",
      price: "From $49/month",
      icon: <FileText className="w-8 h-8" />,
      link: "/zion-ai-invoice-generator",
      features: ["Auto Generation", "Payment Tracking", "Tax Calculation", "Multi-currency"]
    },
    {
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis for sentiment, intent, and response optimization",
      price: "From $89/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer",
      features: ["Sentiment Analysis", "Intent Detection", "Response Suggestions", "Performance Metrics"]
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-driven inventory management with demand forecasting and automated reordering",
      price: "From $129/month",
      icon: <Package className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      features: ["Demand Forecasting", "Auto Reordering", "Stock Optimization", "Cost Analysis"]
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment analysis across all touchpoints and channels",
      price: "From $119/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      features: ["Real-time Analysis", "Multi-channel", "Alert System", "Trend Reports"]
    },
    {
      name: "Zion AI Performance Optimizer",
      description: "AI-powered performance monitoring and optimization for applications and websites",
      price: "From $159/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-ai-performance-optimizer",
      features: ["Performance Monitoring", "Auto Optimization", "Bottleneck Detection", "Speed Reports"]
    }
  ];

  const categories = [
    {
      name: "Analytics & Intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      count: "8 solutions",
      description: "Data-driven insights and business intelligence"
    },
    {
      name: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      count: "6 solutions",
      description: "Cybersecurity and regulatory compliance"
    },
    {
      name: "Marketing & Sales",
      icon: <Target className="w-6 h-6" />,
      count: "12 solutions",
      description: "Customer acquisition and retention"
    },
    {
      name: "Productivity & Operations",
      icon: <Zap className="w-6 h-6" />,
      count: "15 solutions",
      description: "Workflow automation and efficiency"
    },
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      count: "20 solutions",
      description: "Artificial intelligence and automation"
    },
    {
      name: "Communication & Collaboration",
      icon: <Users className="w-6 h-6" />,
      count: "7 solutions",
      description: "Team collaboration and communication"
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Monitor className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our operations. We implemented 5 tools in one week and saw immediate productivity gains.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered analytics and automation tools are incredibly powerful. We've saved thousands of hours with their solutions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion's micro SAAS platform is our go-to for all business automation needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Discover our comprehensive collection of micro SAAS solutions designed for immediate deployment. AI-powered tools for analytics, security, marketing, and productivity."
        keywords="micro SAAS, business software, AI tools, analytics, security, marketing automation, productivity tools, ready-to-use solutions"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">60+ Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
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

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our micro SAAS solutions are organized into categories to help you find exactly what you need
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{category.count}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {category.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and powerful solutions, ready for immediate deployment
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-xs">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our micro SAAS solutions
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>
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
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              Explore All Services
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;