import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Cloud, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Smartphone,
  Monitor,
  Target,
  Award,
  Sparkles,
  Brain,
  Settings,
  Globe,
  TrendingUp,
  Heart,
  MessageSquare,
  Eye,
  Lock,
  Activity,
  FileText,
  Calculator,
  Package,
  ShoppingCart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import StructuredData from '../components/StructuredData';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const MicroSAAS = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SAAS Solutions",
    "description": "Comprehensive collection of AI-powered micro SAAS solutions for business automation, analytics, and productivity",
    "url": "https://ziontechgroup.com/micro-saas",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const microSaasSolutions = [
    {
      name: "Zion AI Inventory Manager",
      description: "AI-powered inventory management with predictive analytics, automated reordering, and real-time tracking",
      price: "From $199/month",
      icon: <Package className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["95% forecast accuracy", "Automated reordering", "Real-time tracking", "Multi-channel sync"],
      link: "/zion-ai-inventory-manager",
      category: "Business Management",
      popular: true
    },
    {
      name: "Zion AI Accounting Suite",
      description: "AI-powered accounting software with automated bookkeeping, tax preparation, and financial insights",
      price: "From $149/month",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["99.5% accuracy", "Auto-categorization", "Tax preparation", "Multi-currency support"],
      link: "/zion-ai-accounting-suite",
      category: "Finance & Accounting",
      popular: true
    },
    {
      name: "Zion AI Customer Insights",
      description: "AI-powered customer analytics with behavioral insights, sentiment analysis, and predictive CLV",
      price: "From $179/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["35% retention increase", "95% prediction accuracy", "Real-time sentiment", "Cross-channel analytics"],
      link: "/zion-ai-customer-insights",
      category: "Customer Analytics",
      popular: true
    },
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API integration"],
      link: "/zion-analytics-pro",
      category: "Business Intelligence",
      popular: false
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["AI threat detection", "Automated response", "24/7 monitoring", "Compliance reporting"],
      link: "/zion-security-shield",
      category: "Cybersecurity",
      popular: false
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["End-to-end encryption", "Unlimited storage", "File sharing", "Version control"],
      link: "/zion-cloud-vault",
      category: "Cloud Storage",
      popular: false
    },
    {
      name: "Zion AI HR Assistant Pro",
      description: "AI-powered human resources management with recruitment, onboarding, and performance tracking",
      price: "From $249/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["AI recruitment", "Automated onboarding", "Performance tracking", "Employee analytics"],
      link: "/zion-ai-hr-assistant-pro",
      category: "Human Resources",
      popular: false
    },
    {
      name: "Zion AI Marketing Automation",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $199/month",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Content generation", "Multi-channel campaigns", "Lead scoring", "ROI optimization"],
      link: "/zion-ai-marketing-automation",
      category: "Marketing",
      popular: false
    },
    {
      name: "Zion AI E-commerce Optimizer",
      description: "AI-powered e-commerce optimization with product recommendations and conversion rate optimization",
      price: "From $179/month",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: ["Product recommendations", "Price optimization", "Inventory management", "Customer insights"],
      link: "/zion-ecommerce-optimizer",
      category: "E-commerce",
      popular: false
    },
    {
      name: "Zion AI Lead Scoring",
      description: "AI-powered lead qualification and scoring system for improved sales conversion",
      price: "From $149/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["Lead scoring", "Qualification automation", "Sales forecasting", "CRM integration"],
      link: "/zion-ai-lead-scoring",
      category: "Sales",
      popular: false
    },
    {
      name: "Zion AI Document Processor",
      description: "AI-powered document processing with OCR, data extraction, and automated workflows",
      price: "From $129/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["OCR processing", "Data extraction", "Workflow automation", "Document classification"],
      link: "/zion-ai-document-processor",
      category: "Document Management",
      popular: false
    },
    {
      name: "Zion AI Social Listener",
      description: "AI-powered social media monitoring and sentiment analysis across all platforms",
      price: "From $159/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: ["Multi-platform monitoring", "Sentiment analysis", "Trend detection", "Brand mention tracking"],
      link: "/zion-ai-social-listener",
      category: "Social Media",
      popular: false
    }
  ];

  const categories = [
    { name: "All Solutions", count: microSaasSolutions.length, active: true },
    { name: "Business Management", count: microSaasSolutions.filter(s => s.category === "Business Management").length, active: false },
    { name: "Finance & Accounting", count: microSaasSolutions.filter(s => s.category === "Finance & Accounting").length, active: false },
    { name: "Customer Analytics", count: microSaasSolutions.filter(s => s.category === "Customer Analytics").length, active: false },
    { name: "Cybersecurity", count: microSaasSolutions.filter(s => s.category === "Cybersecurity").length, active: false },
    { name: "Marketing", count: microSaasSolutions.filter(s => s.category === "Marketing").length, active: false }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "RetailMax Inc.",
      role: "Operations Manager",
      content: "Zion AI Inventory Manager reduced our stockouts by 85% and saved us $50,000 in the first quarter alone. The AI forecasting is incredibly accurate.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CEO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group"
        description="Comprehensive collection of AI-powered micro SAAS solutions for business automation, analytics, and productivity. 60+ solutions with 99.9% uptime."
        keywords="micro saas, business automation, AI tools, productivity software, business intelligence, customer analytics, inventory management"
        canonical="https://ziontechgroup.com/micro-saas"
        structuredData={structuredData}
      />
      
      <StructuredData type="WebPage" data={structuredData} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Micro SAAS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive collection of AI-powered micro SAAS solutions. 
            From inventory management to customer analytics, we have everything you need to automate and optimize.
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
              View All Demos
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

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  category.active
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                    : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <FuturisticCard key={index} className="group relative">
                {solution.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-3">
                    {solution.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{solution.price}</div>
                </div>
                <FuturisticButton
                  href={solution.link}
                  variant="outline"
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Business Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about our micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to automate, optimize, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                View All Demos
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSAAS;