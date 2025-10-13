import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield, Cloud, Globe, Star, Award, Mail, Phone, MapPin, Code, Palette, Rocket, Users } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';

const ZionAIMobileAppBuilderPro = () => {
  const features = [
    {
      title: "AI-Powered App Generation",
      description: "Create native mobile apps with AI assistance - just describe your idea and watch it come to life",
      icon: <Code className="w-6 h-6" />,
      benefits: ["Natural language to code", "Auto-generated UI", "Smart component suggestions"]
    },
    {
      title: "Visual Drag-and-Drop Builder",
      description: "Build beautiful mobile apps without coding using our intuitive visual interface",
      icon: <Palette className="w-6 h-6" />,
      benefits: ["No-code development", "Real-time preview", "Component library"]
    },
    {
      title: "Cross-Platform Deployment",
      description: "Deploy to iOS, Android, and web with a single codebase and one-click publishing",
      icon: <Rocket className="w-6 h-6" />,
      benefits: ["Native performance", "Single codebase", "App store ready"]
    },
    {
      title: "Advanced Analytics Integration",
      description: "Built-in analytics, crash reporting, and user behavior tracking",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["User analytics", "Crash reporting", "Performance monitoring"]
    },
    {
      title: "Cloud Backend Services",
      description: "Complete backend infrastructure with databases, authentication, and APIs",
      icon: <Cloud className="w-6 h-6" />,
      benefits: ["Auto-scaling", "Real-time sync", "Push notifications"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption, biometric authentication, and compliance",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["End-to-end encryption", "Biometric auth", "GDPR compliant"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for individuals and small businesses getting started",
      features: [
        "1 app project",
        "Basic templates",
        "Standard support",
        "iOS & Android",
        "Basic analytics",
        "Community forum"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with multiple app needs",
      features: [
        "5 app projects",
        "Premium templates",
        "Priority support",
        "All platforms",
        "Advanced analytics",
        "Custom branding",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with enterprise requirements",
      features: [
        "Unlimited apps",
        "Custom templates",
        "24/7 dedicated support",
        "White-label solution",
        "Enterprise analytics",
        "Custom integrations",
        "SLA guarantee",
        "On-premise option"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "StartupFlow Inc.",
      role: "Founder & CEO",
      content: "We built our entire mobile app in 2 weeks using Zion AI Mobile App Builder Pro. The AI assistance was incredible!",
      rating: 5
    },
    {
      name: "Alex Thompson",
      company: "RetailTech Solutions",
      role: "CTO",
      content: "The cross-platform deployment saved us months of development time. Our app is now live on both stores.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "HealthTech Innovations",
      role: "Product Manager",
      content: "The visual builder made it so easy to iterate and test different designs. Our user engagement increased by 300%.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Development" },
    { number: "95%", label: "Code Reduction" },
    { number: "3", label: "Platforms Supported" },
    { number: "24/7", label: "Support Available" }
  ];

  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Build powerful online stores with payment processing and inventory management",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["Payment integration", "Inventory sync", "Order tracking"]
    },
    {
      title: "Social Media Apps",
      description: "Create engaging social platforms with real-time messaging and content sharing",
      icon: <Users className="w-6 h-6" />,
      features: ["Real-time chat", "Media sharing", "User profiles"]
    },
    {
      title: "Business Apps",
      description: "Develop productivity tools and business management applications",
      icon: <Zap className="w-6 h-6" />,
      features: ["CRM integration", "Task management", "Reporting"]
    },
    {
      title: "Gaming Apps",
      description: "Build immersive games with advanced graphics and multiplayer support",
      icon: <Rocket className="w-6 h-6" />,
      features: ["3D graphics", "Multiplayer", "In-app purchases"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion AI Mobile App Builder Pro - No-Code Mobile App Development | Zion Tech Group"
        description="Build native mobile apps without coding using AI-powered visual builder. Cross-platform deployment, enterprise security, cloud backend. Starting at $199/month."
        keywords="mobile app builder, no-code app development, cross-platform apps, AI app generation, mobile app development, app builder, native apps"
        canonical="https://ziontechgroup.com/zion-ai-mobile-app-builder-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Smartphone className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 AI Mobile App Builder 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Mobile App Builder Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build native mobile apps without coding using AI-powered visual builder. 
            Deploy to iOS, Android, and web with a single codebase and enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Building Free
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Smartphone className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful App Development Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to build, deploy, and scale mobile applications with AI assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Build Any Type of App
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to gaming, create any mobile application with our versatile platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((appType, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {appType.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {appType.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {appType.description}
                </p>
                <ul className="space-y-1">
                  {appType.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start building your app today with our flexible pricing plans. All plans include 14-day free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Start Free Trial
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients have built with Zion AI Mobile App Builder Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6 group hover:scale-105 transition-all duration-300">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your App?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of developers and businesses already using Zion AI Mobile App Builder Pro to create amazing mobile applications. 
            Start building your app today with our free trial.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
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
              Start Building Free
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas"
              variant="outline"
              size="lg"
              icon={<Smartphone className="w-5 h-5" />}
            >
              View All Micro SAAS
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIMobileAppBuilderPro;