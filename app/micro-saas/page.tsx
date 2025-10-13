import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Target, 
  Globe, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Video,
  MessageSquare,
  TrendingUp,
  Database,
  Eye,
  Settings,
  Award,
  Clock,
  Cloud,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: "Zion AI Video Generator",
      description: "Create professional videos in minutes with AI-powered script generation, voice synthesis, and smart editing",
      icon: <Video className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-video-generator",
      features: ["Script generation", "Voice synthesis", "Auto editing", "50+ languages"],
      featured: true,
      category: "AI-Powered Tools"
    },
    {
      title: "Zion AI Customer Insights",
      description: "Transform customer data into actionable insights with AI-powered analytics and predictive behavior modeling",
      icon: <Brain className="w-8 h-8" />,
      price: "From $49/month",
      link: "/zion-ai-customer-insights",
      features: ["Sentiment analysis", "Predictive analytics", "Real-time insights", "Multi-channel integration"],
      featured: true,
      category: "AI-Powered Tools"
    },
    {
      title: "Zion AI Cybersecurity Suite Pro",
      description: "Enterprise-grade AI-powered cybersecurity with advanced threat detection and automated incident response",
      icon: <Shield className="w-8 h-8" />,
      price: "From $299/month",
      link: "/zion-ai-cybersecurity-suite-pro",
      features: ["Threat detection", "Zero-trust architecture", "Automated response", "Compliance automation"],
      featured: true,
      category: "Security Solutions"
    },
    {
      title: "Zion AI Business Intelligence Pro",
      description: "AI-powered business intelligence platform with predictive analytics and natural language queries",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $199/month",
      link: "/zion-ai-business-intelligence-pro",
      features: ["Predictive analytics", "Real-time dashboards", "Natural language queries", "Custom AI models"],
      featured: true,
      category: "Analytics & BI"
    },
    {
      title: "Zion Analytics Pro",
      description: "Advanced analytics dashboard with real-time data visualization and automated reporting",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $99/month",
      link: "/zion-analytics-pro",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "API integration"],
      featured: false,
      category: "Analytics & BI"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive security monitoring and threat protection for small to medium businesses",
      icon: <Shield className="w-8 h-8" />,
      price: "From $149/month",
      link: "/zion-security-shield",
      features: ["24/7 monitoring", "Threat detection", "Incident response", "Compliance reporting"],
      featured: false,
      category: "Security Solutions"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      icon: <Cloud className="w-8 h-8" />,
      price: "From $49/month",
      link: "/zion-cloud-vault",
      features: ["End-to-end encryption", "Unlimited storage", "File sharing", "Version control"],
      featured: false,
      category: "Cloud Solutions"
    },
    {
      title: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      icon: <Users className="w-8 h-8" />,
      price: "From $79/month",
      link: "/zion-ai-crm-pro",
      features: ["Lead scoring", "Automated follow-ups", "Sales forecasting", "Contact management"],
      featured: false,
      category: "Business Tools"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing materials",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $59/month",
      link: "/zion-content-studio",
      features: ["Content generation", "SEO optimization", "Multi-format output", "Brand consistency"],
      featured: false,
      category: "Content & Marketing"
    },
    {
      title: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      icon: <Target className="w-8 h-8" />,
      price: "From $149/month",
      link: "/zion-ai-marketing-automation-pro",
      features: ["Campaign automation", "Personalization", "A/B testing", "Performance analytics"],
      featured: false,
      category: "Content & Marketing"
    },
    {
      title: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      icon: <Calendar className="w-8 h-8" />,
      price: "From $89/month",
      link: "/zion-ai-project-manager-pro",
      features: ["Task automation", "Resource optimization", "Progress tracking", "Team collaboration"],
      featured: false,
      category: "Business Tools"
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization across multiple platforms and databases",
      icon: <Database className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-data-sync",
      features: ["Real-time sync", "Data validation", "Error handling", "Multi-platform support"],
      featured: false,
      category: "Data Management"
    }
  ];

  const categories = [
    { name: "AI-Powered Tools", icon: <Brain className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { name: "Analytics & BI", icon: <BarChart3 className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "Security Solutions", icon: <Shield className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
    { name: "Cloud Solutions", icon: <Cloud className="w-5 h-5" />, color: "from-cyan-500 to-blue-500" },
    { name: "Business Tools", icon: <Settings className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
    { name: "Content & Marketing", icon: <MessageSquare className="w-5 h-5" />, color: "from-pink-500 to-purple-500" },
    { name: "Data Management", icon: <Database className="w-5 h-5" />, color: "from-indigo-500 to-purple-500" }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "No complex setup or lengthy implementation. Get started in minutes with our plug-and-play solutions.",
      icon: <Zap className="w-6 h-6" />,
      stats: "5-minute setup"
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business. Our micro SAAS solutions scale seamlessly as your needs evolve.",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "Unlimited scaling"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team to ensure your success with our solutions.",
      icon: <Clock className="w-6 h-6" />,
      stats: "24/7 availability"
    },
    {
      title: "Regular Updates",
      description: "Continuous improvements and new features delivered automatically to keep you ahead of the competition.",
      icon: <Settings className="w-6 h-6" />,
      stats: "Monthly updates"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions have transformed our operations. We've increased productivity by 50% and reduced costs by 30%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered tools are incredibly powerful and easy to use. We've saved thousands of hours with automation.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion's micro SAAS solutions are our secret weapon for success.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50%", label: "Average Time Savings", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Ready-to-Use Business Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions. AI-powered tools, analytics, security, and business automation solutions ready to deploy in minutes." />
        <meta name="keywords" content="micro SAAS, business tools, AI solutions, analytics, security, automation, ready-to-use software, business software" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
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
            Transform your business with our comprehensive collection of micro SAAS solutions. 
            AI-powered tools, analytics, security, and automation solutions ready to deploy in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#solutions"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
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
              Our micro SAAS solutions are designed for modern businesses that need powerful tools without the complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {benefit.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our micro SAAS solutions by category to find exactly what your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SAAS solutions designed to transform your business operations and drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-center mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center mb-4">
                  <span className="text-purple-400 font-semibold text-lg">{service.price}</span>
                </div>
                <FuturisticButton
                  href={service.link}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Learn More
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using our micro SAAS solutions to transform their business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses using our micro SAAS solutions to automate processes, gain insights, and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Free trial • No setup fees • 24/7 support</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;