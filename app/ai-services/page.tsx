import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Monitor,
  Award,
  Sparkles,
  Settings,
  TrendingUp,
  Smartphone,
  Globe,
  FileText,
  MessageSquare,
  Eye,
  Lock
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServicesPage = () => {
  const services = [
    {
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies tailored to your business needs with expert consulting and implementation roadmaps.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["AI readiness assessment", "Strategy development", "ROI analysis", "Implementation roadmap"],
      price: "From $5,000"
    },
    {
      title: "Machine Learning Development",
      description: "Custom machine learning models and algorithms designed to solve your specific business challenges and optimize processes.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Custom ML models", "Data preprocessing", "Model training", "Performance optimization"],
      price: "From $10,000"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and automated content generation.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Text analysis", "Sentiment analysis", "Chatbots", "Content generation"],
      price: "From $7,500"
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis solutions for object detection, facial recognition, and automated visual inspection.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Object detection", "Facial recognition", "Image classification", "Video analysis"],
      price: "From $8,500"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced predictive models to forecast trends, customer behavior, and business outcomes with high accuracy.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Demand forecasting", "Customer churn prediction", "Risk assessment", "Trend analysis"],
      price: "From $6,000"
    },
    {
      title: "AI Automation & RPA",
      description: "Intelligent automation solutions to streamline workflows, reduce manual tasks, and improve operational efficiency.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Process automation", "Workflow optimization", "RPA implementation", "Task automation"],
      price: "From $4,500"
    }
  ];

  const pricingPlans = [
    {
      name: "AI Starter Package",
      price: "$15,000",
      period: "one-time",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "AI strategy consultation",
        "Basic ML model development",
        "Data analysis & insights",
        "Implementation support",
        "30 days training",
        "Documentation & handover"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "AI Professional Suite",
      price: "$35,000",
      period: "one-time",
      description: "Comprehensive AI solutions for growing businesses",
      features: [
        "Advanced AI strategy",
        "Custom ML model development",
        "NLP or Computer Vision solution",
        "Predictive analytics",
        "3 months support",
        "Team training",
        "Performance monitoring",
        "Scalability planning"
      ],
      popular: true,
      cta: "Start Now"
    },
    {
      name: "AI Enterprise Platform",
      price: "Custom",
      period: "pricing",
      description: "Complete AI transformation for large organizations",
      features: [
        "End-to-end AI strategy",
        "Multiple AI solutions",
        "Custom integrations",
        "Dedicated AI team",
        "Ongoing support & maintenance",
        "Advanced analytics",
        "White-label solutions",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechFlow Solutions",
      role: "CTO",
      content: "Zion Tech Group's AI services transformed our operations. We achieved 60% efficiency gains and 40% cost reduction in just 6 months.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Thompson",
      company: "DataDriven Inc.",
      role: "VP of Analytics",
      content: "Their machine learning models are incredibly accurate. Our prediction accuracy improved by 85% and we can now make data-driven decisions with confidence.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "Innovation Labs",
      role: "Head of R&D",
      content: "The AI automation solutions saved us 20 hours per week on manual tasks. Our team can now focus on strategic initiatives instead of repetitive work.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const stats = [
    { number: "85%", label: "Prediction Accuracy", icon: <Target className="w-6 h-6" /> },
    { number: "60%", label: "Efficiency Gains", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "40%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "200+", label: "AI Projects Delivered", icon: <Brain className="w-6 h-6" /> }
  ];

  const aiTechnologies = [
    {
      name: "Machine Learning",
      description: "Supervised and unsupervised learning algorithms for pattern recognition and prediction",
      applications: ["Predictive modeling", "Classification", "Clustering", "Recommendation systems"],
      icon: <Brain className="w-8 h-8" />
    },
    {
      name: "Deep Learning",
      description: "Neural networks for complex pattern recognition and decision making",
      applications: ["Image recognition", "Natural language processing", "Speech recognition", "Autonomous systems"],
      icon: <Settings className="w-8 h-8" />
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered text and language understanding and generation",
      applications: ["Chatbots", "Sentiment analysis", "Text summarization", "Language translation"],
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      name: "Computer Vision",
      description: "AI systems that can interpret and understand visual information",
      applications: ["Object detection", "Facial recognition", "Medical imaging", "Quality control"],
      icon: <Eye className="w-8 h-8" />
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare AI",
      description: "Medical imaging analysis, drug discovery, and patient care optimization",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Financial AI",
      description: "Fraud detection, risk assessment, and algorithmic trading",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Retail AI",
      description: "Customer analytics, inventory optimization, and personalized recommendations",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Manufacturing AI",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Settings className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Artificial Intelligence Solutions | Zion Tech Group"
        description="Transform your business with our comprehensive AI services. Machine learning, NLP, computer vision, predictive analytics, and AI automation. Expert AI consulting and implementation."
        keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI automation, AI consulting, AI development, AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">#1 AI Solutions Provider</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              AI Services & Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Harness the power of artificial intelligence to transform your business. 
            From strategy to implementation, we deliver cutting-edge AI solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#consultation"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Free AI Consultation
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From strategy to implementation, we provide end-to-end AI solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* AI Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies to deliver powerful solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {tech.name}
                </h3>
                <p className="text-gray-300 text-sm text-center mb-4">
                  {tech.description}
                </p>
                <ul className="space-y-1">
                  {tech.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-xs text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions designed for specific industries and use cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {solution.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible AI Service Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI solution package for your business needs. Custom solutions available for enterprise clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by AI Leaders Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming with our AI solutions
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
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
      <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a free AI consultation and discover how artificial intelligence can 
              revolutionize your business operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Free Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/micro-saas"
                variant="outline"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Explore AI Solutions
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;