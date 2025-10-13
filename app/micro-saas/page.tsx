import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Award,
  Lock,
  Settings,
  PieChart,
  FileText,
  Video,
  Image,
  MessageSquare,
  Calendar,
  ShoppingCart,
  CreditCard,
  Truck,
  Wifi,
  Camera,
  Headphones,
  Mic,
  Palette,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Heart,
  ThumbsUp,
  Eye
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import StructuredData from '../components/StructuredData';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';
import LazyImage from '../components/LazyImage';
import EnhancedLoadingSpinner from '../components/EnhancedLoadingSpinner';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const MicroSaasPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions - Zion Tech Group",
    "description": "Ready-to-use software solutions for immediate deployment including AI analytics, security, and productivity tools.",
    "url": "https://ziontechgroup.com/micro-saas",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Zion Analytics Pro",
          "description": "AI-powered business intelligence platform",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web"
        }
      ]
    }
  };

  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      category: "AI Analytics",
      link: "/zion-ai-analytics-pro",
      featured: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Tools"],
      category: "Security",
      link: "/zion-security-shield",
      featured: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      features: ["End-to-End Encryption", "Unlimited Storage", "File Sharing", "Version Control"],
      category: "Storage",
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-8 h-8" />,
      features: ["Lead Scoring", "Automation", "Pipeline Management", "Analytics"],
      category: "CRM",
      link: "/zion-ai-crm-pro",
      featured: true
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      features: ["Content Generation", "Multi-channel", "A/B Testing", "Analytics"],
      category: "Marketing",
      link: "/zion-ai-marketing-automation-pro",
      featured: true
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $99/month",
      icon: <Calendar className="w-8 h-8" />,
      features: ["Task Management", "Resource Planning", "Time Tracking", "Reporting"],
      category: "Project Management",
      link: "/zion-ai-project-manager-pro",
      featured: true
    }
  ];

  const benefits = [
    {
      title: "Ready to Use",
      description: "Deploy immediately with pre-configured solutions",
      icon: <Zap className="w-6 h-6" />,
      stat: "Instant deployment"
    },
    {
      title: "Cost Effective",
      description: "Pay only for what you use with flexible pricing",
      icon: <DollarSign className="w-6 h-6" />,
      stat: "Up to 70% savings"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs",
      icon: <Cloud className="w-6 h-6" />,
      stat: "Unlimited scaling"
    }
  ];

  const categories = [
    'All',
    'AI Analytics',
    'AI CRM',
    'AI Content',
    'AI Video',
    'Security',
    'Storage',
    'Marketing',
    'Project Management'
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '25,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Analytics Pro transformed our data insights. We increased our conversion rate by 40% in just 3 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'CTO',
      content: 'The micro SAAS solutions are incredibly powerful and easy to implement. We\'ve saved thousands of hours with their automation tools.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.',
      rating: 5
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackground>
          <EnhancedSEO
            title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software"
            description="Ready-to-use software solutions for immediate deployment including AI analytics, security, and productivity tools. Transform your business with our micro SAAS platform."
            keywords="micro saas, software solutions, AI analytics, business intelligence, cybersecurity, cloud storage, CRM, marketing automation, project management"
            canonical="https://ziontechgroup.com/micro-saas"
            structuredData={structuredData}
          />
          
          <StructuredData type="WebPage" data={structuredData} />

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
                  <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Software Solutions</span>
                </div>
                
                <FuturisticText
                  variant="display"
                  size="6xl"
                  gradient={true}
                  animated={true}
                  glow={true}
                  neon={true}
                  className="mb-6 leading-tight"
                >
                  Micro SAAS Solutions
                </FuturisticText>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Ready-to-use software solutions that can transform your business operations immediately. 
                  Deploy powerful AI-powered tools without the complexity of custom development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButton
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
                  </FuturisticButton>
                  <FuturisticButton
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
                    Why Choose Micro SAAS?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Our micro SAAS solutions are designed for immediate deployment with maximum impact and minimum complexity.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <FuturisticCard
                      key={index}
                      glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                      hoverEffect={true}
                      animated={true}
                      neon={true}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                        <p className="text-gray-300 mb-4">{benefit.description}</p>
                        <div className="text-cyan-400 font-medium">{benefit.stat}</div>
                      </div>
                    </FuturisticCard>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Products Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Featured Micro SAAS Solutions
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Ready-to-use software solutions that can transform your business operations immediately.
                  </p>
                  
                  {/* Category Filter */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <FuturisticCard
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
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                          {product.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                        <div className="text-cyan-400 font-bold text-lg mb-4">{product.price}</div>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <FuturisticButton
                          href={product.link}
                          variant="outline"
                          size="sm"
                          icon={ArrowRight}
                          iconPosition="right"
                          glowColor="cyan"
                          neon={true}
                          animated={true}
                        >
                          Learn More
                        </FuturisticButton>
                      </div>
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
                    See what our clients say about our micro SAAS solutions
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
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
                    </div>
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
                  Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                  Start your digital transformation journey today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
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
                  </FuturisticButton>
                  <FuturisticButton
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
                  </FuturisticButton>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackground>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default MicroSaasPage;