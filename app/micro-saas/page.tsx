import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  Clock,
  Globe,
  Target,
  TrendingUp,
  Award,
  Brain,
  Monitor,
  Smartphone,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import LazyImage from '../components/LazyImage';

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
      features: ["AI Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"]
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true,
      features: ["End-to-End Encryption", "Unlimited Storage", "Global CDN", "Backup & Recovery"]
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: true,
      features: ["AI Lead Scoring", "Automated Workflows", "Customer Insights", "Integration Hub"]
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      features: ["AI Content Generation", "Multi-channel Campaigns", "Predictive Analytics", "A/B Testing"]
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Code className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      featured: true,
      features: ["AI Task Prioritization", "Resource Optimization", "Progress Tracking", "Team Collaboration"]
    },
    {
      name: "Zion AI Video Generator",
      description: "AI-powered video creation platform with automated editing and professional templates",
      price: "From $79/month",
      icon: <Monitor className="w-8 h-8" />,
      link: "/zion-ai-video-generator",
      featured: false,
      features: ["AI Video Creation", "Professional Templates", "Auto-editing", "Multi-format Export"]
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation with AI-powered pricing optimization and payment tracking",
      price: "From $49/month",
      icon: <Database className="w-8 h-8" />,
      link: "/zion-ai-invoice-generator",
      featured: false,
      features: ["Auto Invoice Generation", "AI Pricing Optimization", "Payment Tracking", "Tax Compliance"]
    },
    {
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics platform with sentiment analysis and behavioral predictions",
      price: "From $129/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-customer-insights",
      featured: false,
      features: ["Sentiment Analysis", "Behavioral Predictions", "Customer Segmentation", "Churn Prevention"]
    },
    {
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis with spam detection, sentiment analysis, and response suggestions",
      price: "From $39/month",
      icon: <Mail className="w-8 h-8" />,
      link: "/zion-ai-email-analyzer",
      featured: false,
      features: ["Spam Detection", "Sentiment Analysis", "Response Suggestions", "Email Optimization"]
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-driven inventory management with demand forecasting and automated reordering",
      price: "From $89/month",
      icon: <TrendingUp className="w-8 h-8" />,
      link: "/zion-smart-inventory-optimizer",
      featured: false,
      features: ["Demand Forecasting", "Auto Reordering", "Inventory Optimization", "Cost Reduction"]
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with automated alerts",
      price: "From $59/month",
      icon: <Star className="w-8 h-8" />,
      link: "/zion-ai-customer-sentiment-tracker",
      featured: false,
      features: ["Real-time Monitoring", "Multi-channel Analysis", "Automated Alerts", "Trend Analysis"]
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Instant Deployment",
      description: "Ready-to-use solutions that can be deployed immediately without complex setup",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business from startup to enterprise scale",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "AI-Powered Intelligence",
      description: "Every solution includes advanced AI capabilities for maximum efficiency",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cost-Effective",
      description: "Affordable pricing with no hidden fees or long-term contracts required",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Tools"
        description="Discover our comprehensive collection of micro SAAS solutions designed for immediate deployment. AI-powered tools for analytics, security, marketing, and more."
        keywords="micro saas, business tools, ai solutions, ready-to-use software, business automation, productivity tools"
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
            No complex setup, no lengthy implementations - just powerful tools that work from day one.
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our micro SAAS solutions are designed for businesses that need powerful tools without the complexity. 
              Get up and running in minutes, not months.
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
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
              Our most popular and powerful solutions, ready for immediate deployment.
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.filter(service => service.featured).map((service, index) => (
              <FuturisticCard key={index} className="group relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
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
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={service.link}
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of micro SAAS solutions designed for every business need.
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
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
            Choose from our comprehensive collection of micro SAAS solutions and start transforming your business operations today. 
            No complex setup, no lengthy implementations - just powerful tools that work.
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
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;