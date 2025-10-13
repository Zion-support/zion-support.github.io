import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  Zap,
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Clock,
  Globe
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const MicroSaasPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions - Zion Tech Group",
    "description": "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools.",
    "url": "https://ziontechgroup.com/micro-saas",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Zion Analytics Pro",
          "description": "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "299",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  const microSaasSolutions = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/zion-analytics-pro",
      featured: true,
      category: "Analytics",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API integration"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      link: "/zion-security-shield",
      featured: true,
      category: "Security",
      features: ["Threat detection", "Automated response", "Compliance monitoring", "24/7 monitoring"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      link: "/zion-cloud-vault",
      featured: true,
      category: "Storage",
      features: ["End-to-end encryption", "Unlimited storage", "File sharing", "Version control"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      link: "/zion-ai-crm-pro",
      featured: true,
      category: "CRM",
      features: ["Lead scoring", "Automation", "Pipeline management", "Email integration"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: true,
      category: "Marketing",
      features: ["Content generation", "Multi-channel", "A/B testing", "Analytics"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      link: "/zion-ai-project-manager-pro",
      featured: true,
      category: "Project Management",
      features: ["Task prioritization", "Resource allocation", "Time tracking", "Team collaboration"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Zion AI Code Assistant Pro",
      description: "AI-powered code generation and review tool with intelligent suggestions and automated testing",
      price: "From $199/month",
      icon: <Brain className="w-8 h-8" />,
      link: "/zion-ai-code-assistant-pro",
      featured: false,
      category: "Development",
      features: ["Code generation", "Code review", "Automated testing", "Documentation"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Zion AI Content Studio Pro",
      description: "AI-powered content creation platform with automated writing, editing, and optimization",
      price: "From $149/month",
      icon: <Zap className="w-8 h-8" />,
      link: "/zion-ai-content-studio-pro",
      featured: false,
      category: "Content",
      features: ["Automated writing", "SEO optimization", "Multi-format", "Collaboration"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const categories = [
    { name: "Analytics", icon: <BarChart3 className="w-5 h-5" />, count: 8 },
    { name: "Security", icon: <Shield className="w-5 h-5" />, count: 6 },
    { name: "Marketing", icon: <Target className="w-5 h-5" />, count: 12 },
    { name: "Development", icon: <Brain className="w-5 h-5" />, count: 10 },
    { name: "Productivity", icon: <Zap className="w-5 h-5" />, count: 15 },
    { name: "Storage", icon: <Cloud className="w-5 h-5" />, count: 4 }
  ];

  const benefits = [
    {
      title: "Instant Deployment",
      description: "Get up and running in minutes with our pre-configured solutions",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "AI-Powered",
      description: "Leverage cutting-edge AI technology for better results",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business with flexible pricing and features",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions transformed our operations. We deployed 3 solutions in one week and saw immediate results.",
      rating: 5,
      solution: "Zion Analytics Pro"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered features are incredible. Our productivity increased by 40% within the first month.",
      rating: 5,
      solution: "Zion AI CRM Pro"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Best investment we've made. The marketing automation tools are game-changing.",
      rating: 5,
      solution: "Zion AI Marketing Automation Pro"
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software"
            description="Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools. Transform your business with our AI-powered micro SAAS solutions."
            keywords="micro saas, software solutions, business automation, AI tools, productivity software, business intelligence, marketing automation, project management"
            canonical="https://ziontechgroup.com/micro-saas"
            structuredData={structuredData}
          />

          <main id="main-content" role="main" aria-label="Micro SAAS Solutions">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
                  <Zap className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400 text-sm font-medium">60+ Micro SAAS Solutions</span>
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
                  Ready-to-use software solutions that can transform your business operations immediately. 
                  Deploy powerful AI-powered tools in minutes, not months.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={Zap}
                    iconPosition="left"
                    glowColor="purple"
                    neon={true}
                    animated={true}
                  >
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#solutions"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left"
                    glowColor="cyan"
                    neon={true}
                    animated={true}
                  >
                    Explore Solutions
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Categories Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Solutions by Category
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Find the perfect solution for your business needs across different categories
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {categories.map((category, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      glowColor={index % 2 === 0 ? 'purple' : 'cyan'}
                      hoverEffect={true}
                      animated={true}
                      className="cursor-pointer text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                        {category.icon}
                      </div>
                      <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.count} solutions</p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Featured Solutions */}
            <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Featured Solutions
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our most popular and powerful micro SAAS solutions
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {microSaasSolutions.map((solution, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      glowColor={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'cyan' : 'pink'}
                      hoverEffect={true}
                      animated={true}
                      neon={true}
                      className="relative overflow-hidden"
                    >
                      {solution.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                      
                      <Link to={solution.link} className="block">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                            {solution.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                              {solution.name}
                            </h3>
                            <p className="text-purple-400 font-medium">{solution.price}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {solution.description}
                        </p>
                        
                        <div className="mb-4">
                          <span className="inline-block px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                            {solution.category}
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {solution.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </FuturisticCardEnhanced>
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
                    Experience the benefits of our AI-powered, ready-to-deploy solutions
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    What Our Customers Say
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See how our micro SAAS solutions are transforming businesses
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div className="mb-2">
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                        <div className="text-xs text-purple-400 mt-1">Using {testimonial.solution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                    Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                    Start your free trial today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <FuturisticButtonEnhanced
                      href="/contact"
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right"
                      glowColor="purple"
                      neon={true}
                      animated={true}
                    >
                      Start Free Trial
                    </FuturisticButtonEnhanced>
                    <FuturisticButtonEnhanced
                      href="/demo"
                      variant="outline"
                      size="lg"
                      icon={Globe}
                      iconPosition="right"
                      glowColor="cyan"
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
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default MicroSaasPage;