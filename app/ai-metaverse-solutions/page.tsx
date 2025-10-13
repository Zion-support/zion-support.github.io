import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  CheckCircle,
  Eye,
  Headphones,
  Globe,
  Target,
  TrendingUp,
  Settings,
  Lightbulb,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Cpu,
  Database,
  Lock,
  Monitor
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIMetaverseSolutionsPage = () => {
  const features = [
    {
      title: "AI-Powered Virtual Worlds",
      description: "Create immersive, intelligent virtual environments that adapt and evolve based on user behavior and preferences",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      benefits: ["Dynamic world generation", "Intelligent NPCs", "Real-time adaptation"]
    },
    {
      title: "Virtual Reality AI Assistants",
      description: "Deploy AI-powered virtual assistants within the metaverse for customer service, guidance, and interaction",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Natural language processing", "Emotional intelligence", "Context awareness"]
    },
    {
      title: "Metaverse Analytics & Insights",
      description: "Advanced analytics platform to understand user behavior, engagement patterns, and optimize virtual experiences",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Real-time analytics", "Predictive insights", "Behavioral analysis"]
    },
    {
      title: "AI Content Generation",
      description: "Automatically generate 3D assets, virtual environments, and interactive content using advanced AI algorithms",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["3D asset creation", "Procedural generation", "Content optimization"]
    }
  ];

  const useCases = [
    {
      industry: "Virtual Events & Conferences",
      description: "Host immersive virtual events with AI-powered networking, personalized experiences, and intelligent matchmaking",
      icon: <Users className="w-6 h-6" />,
      results: "300% increase in engagement, 85% user satisfaction"
    },
    {
      industry: "Virtual Real Estate",
      description: "AI-powered virtual property management, automated valuation, and intelligent property recommendations",
      icon: <Home className="w-6 h-6" />,
      results: "50% faster property sales, 40% higher conversion rates"
    },
    {
      industry: "Virtual Training & Education",
      description: "Immersive learning environments with AI tutors, personalized curricula, and adaptive learning paths",
      icon: <GraduationCap className="w-6 h-6" />,
      results: "60% faster learning, 90% knowledge retention"
    },
    {
      industry: "Virtual Commerce",
      description: "AI-powered virtual shopping experiences with personalized recommendations and virtual try-ons",
      icon: <ShoppingCart className="w-6 h-6" />,
      results: "200% increase in sales, 70% customer satisfaction"
    }
  ];

  const pricing = [
    {
      plan: "Metaverse Starter",
      price: "$1,999",
      period: "per month",
      description: "Perfect for small businesses entering the metaverse",
      features: [
        "Basic virtual world creation",
        "Up to 100 concurrent users",
        "Standard AI features",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      plan: "Metaverse Professional",
      price: "$7,999",
      period: "per month",
      description: "Ideal for growing companies with advanced metaverse needs",
      features: [
        "Advanced virtual world creation",
        "Up to 1,000 concurrent users",
        "Full AI capabilities",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      plan: "Metaverse Enterprise",
      price: "$24,999",
      period: "per month",
      description: "For large enterprises requiring maximum metaverse capabilities",
      features: [
        "Unlimited virtual worlds",
        "Unlimited concurrent users",
        "Custom AI development",
        "24/7 dedicated support",
        "Enterprise analytics",
        "White-label solutions",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "10M+", label: "Virtual Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "AI Features", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Metaverse Solutions | Zion Tech Group - Next-Gen Virtual Worlds"
        description="Build immersive metaverse experiences with AI. Virtual worlds, VR assistants, metaverse analytics, and AI content generation. Transform your digital presence today!"
        keywords="metaverse, virtual reality, AI metaverse, virtual worlds, VR AI, metaverse analytics, virtual assistants, 3D AI, immersive experiences"
        canonical="https://ziontechgroup.com/ai-metaverse-solutions"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Metaverse Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI-Powered Metaverse
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create immersive virtual worlds with intelligent AI systems. 
            Build, manage, and optimize metaverse experiences that engage users like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Enter the Metaverse
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Metaverse AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to create, manage, and optimize 
              immersive virtual worlds and metaverse experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Metaverse Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered metaverse solutions are transforming industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 text-sm font-medium">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Metaverse Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect metaverse solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Metaverse?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join the metaverse revolution and create immersive virtual experiences that engage your audience. 
              Contact our metaverse experts today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Building
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Rocket className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIMetaverseSolutionsPage;