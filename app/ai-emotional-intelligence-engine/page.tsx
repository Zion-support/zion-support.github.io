import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, ArrowRight, Star, CheckCircle, Clock, Users, Award, TrendingUp, Cpu, Database, Globe, Sparkles, Heart, Eye, MessageCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIEmotionalIntelligenceEnginePage = () => {
  const features = [
    {
      title: "Real-time Emotion Detection",
      description: "Advanced AI analyzes facial expressions, voice tone, and text sentiment to detect emotions in real-time",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Multi-modal analysis", "Real-time processing", "95% accuracy rate"]
    },
    {
      title: "Emotional Response Generation",
      description: "Generate contextually appropriate emotional responses for customer service, chatbots, and virtual assistants",
      icon: <MessageCircle className="w-6 h-6" />,
      benefits: ["Natural responses", "Context awareness", "Empathy modeling"]
    },
    {
      title: "Emotional Analytics Dashboard",
      description: "Comprehensive analytics on emotional patterns, customer satisfaction, and team sentiment",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Sentiment trends", "Team insights", "Predictive analytics"]
    },
    {
      title: "Personalized Interactions",
      description: "Adapt communication style and approach based on individual emotional profiles and preferences",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Individual profiling", "Adaptive communication", "Relationship building"]
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Enhance customer interactions with emotionally intelligent responses and proactive support",
      impact: "Increase satisfaction by 45%",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "HR & Team Management",
      description: "Monitor team morale, detect burnout, and improve workplace emotional well-being",
      impact: "Reduce turnover by 30%",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Sales & Marketing",
      description: "Understand customer emotions to create more effective campaigns and sales strategies",
      impact: "Boost conversion by 35%",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Mental Health Support",
      description: "Provide early detection of emotional distress and recommend appropriate support resources",
      impact: "Improve well-being by 50%",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 interactions/month",
        "Basic emotion detection",
        "Email support",
        "Standard analytics",
        "API access",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "per month",
      description: "Ideal for growing companies and teams",
      features: [
        "Up to 10,000 interactions/month",
        "Advanced emotion detection",
        "Priority support",
        "Advanced analytics & insights",
        "Full API access",
        "Custom integrations",
        "Team management tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited interactions",
        "Premium emotion detection",
        "24/7 dedicated support",
        "Custom analytics & reporting",
        "White-label solutions",
        "On-premise deployment",
        "Custom AI training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "CustomerFirst Solutions",
      role: "Customer Experience Director",
      content: "The emotional intelligence engine has transformed our customer service. We can now respond to customer emotions in real-time, leading to much higher satisfaction rates.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "TechStart Inc.",
      role: "HR Director",
      content: "This tool has been invaluable for our team management. We can detect when team members are stressed or need support, helping us create a better workplace culture.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "HealthTech Solutions",
      role: "Mental Health Coordinator",
      content: "The early detection capabilities have helped us identify team members who need support before issues become serious. It's like having an emotional wellness guardian.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Emotional Intelligence Engine - Emotion Detection & Response AI | Zion Tech Group"
        description="Revolutionary AI-powered emotional intelligence platform for emotion detection, response generation, and emotional analytics. Transform customer service and team management."
        keywords="emotional intelligence AI, emotion detection, sentiment analysis, customer service AI, team management, emotional analytics, AI empathy"
        canonical="https://ziontechgroup.com/ai-emotional-intelligence-engine"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-pink-400 mr-2" />
            <span className="text-pink-400 text-sm font-medium">Revolutionary Emotional AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              AI Emotional Intelligence Engine
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's most advanced emotional intelligence AI platform. Detect emotions, generate empathetic responses, 
            and build deeper connections with customers and teams through artificial emotional intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Emotion detection accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">45%</div>
              <div className="text-gray-300 text-sm">Customer satisfaction increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">Real-time</div>
              <div className="text-gray-300 text-sm">Emotion processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-gray-300 text-sm">Team turnover reduction</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Emotional AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge emotional intelligence powered by advanced machine learning and natural language processing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transformative Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how emotional intelligence AI is revolutionizing human interactions across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-pink-400 font-semibold">{useCase.impact}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for every emotional intelligence need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-pink-500/50 ring-2 ring-pink-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-pink-400 mb-2">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                  <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how emotional intelligence AI is transforming human interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Emotional Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your interactions with AI-powered emotional intelligence and build deeper connections
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Heart className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-pink-400">kleber@ziontechgroup.com</span> | <span className="text-pink-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIEmotionalIntelligenceEnginePage;