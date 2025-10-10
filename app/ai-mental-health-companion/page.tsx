import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Brain, 
  MessageCircle, 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Users,
  Shield,
  Clock,
  Award,
  Target,
  Sparkles,
  Zap,
  FileText,
  BarChart,
  Settings,
  Download,
  Phone,
  Mail,
  Star,
  Activity,
  BookOpen,
  Smile
} from 'lucide-react';

const AIMentalHealthCompanionPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Therapy Sessions",
      description: "Personalized therapy sessions with advanced AI that adapts to your needs and progress",
      price: "$39/month"
    },
    {
      icon: Heart,
      title: "Mood Tracking & Analytics",
      description: "Comprehensive mood tracking with insights and patterns to help you understand yourself better",
      price: "$19/month"
    },
    {
      icon: MessageCircle,
      title: "24/7 Emotional Support",
      description: "Always-available AI companion for immediate emotional support and crisis intervention",
      price: "$29/month"
    },
    {
      icon: Calendar,
      title: "Wellness Planning",
      description: "Personalized wellness plans with daily activities, meditation, and self-care routines",
      price: "$24/month"
    },
    {
      icon: Users,
      title: "Group Support Sessions",
      description: "Connect with others in moderated group sessions and peer support communities",
      price: "$34/month"
    },
    {
      icon: Shield,
      title: "Privacy & Confidentiality",
      description: "End-to-end encryption and HIPAA compliance ensure your mental health data stays private",
      price: "$29/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$29",
      period: "/month",
      description: "Perfect for personal mental health support",
      features: [
        "Unlimited AI therapy sessions",
        "Mood tracking & analytics",
        "24/7 emotional support",
        "Basic wellness plans",
        "Meditation & mindfulness",
        "Progress tracking",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      description: "Comprehensive mental health support with advanced features",
      features: [
        "Everything in Individual",
        "Group support sessions",
        "Advanced analytics",
        "Custom wellness plans",
        "Crisis intervention",
        "Priority support",
        "Family sharing (up to 4 people)",
        "Professional therapist matching"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "$99",
      period: "/month",
      description: "Complete mental health support for the whole family",
      features: [
        "Everything in Premium",
        "Up to 6 family members",
        "Parental controls",
        "Child-specific features",
        "Family wellness plans",
        "Dedicated family support",
        "24/7 crisis support",
        "Professional consultations"
      ],
      popular: false
    }
  ];

  const therapyTypes = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      icon: Brain,
      description: "Evidence-based therapy to help change negative thought patterns and behaviors",
      benefits: [
        "Identify negative thought patterns",
        "Develop coping strategies",
        "Improve emotional regulation",
        "Build resilience"
      ]
    },
    {
      title: "Mindfulness & Meditation",
      icon: Heart,
      description: "Guided meditation and mindfulness practices for stress reduction and inner peace",
      benefits: [
        "Reduce stress and anxiety",
        "Improve focus and concentration",
        "Enhance emotional well-being",
        "Better sleep quality"
      ]
    },
    {
      title: "Crisis Intervention",
      icon: Shield,
      description: "Immediate support during mental health crises with professional-grade interventions",
      benefits: [
        "24/7 crisis support",
        "Immediate professional help",
        "Safety planning",
        "Emergency resources"
      ]
    },
    {
      title: "Group Therapy",
      icon: Users,
      description: "Connect with others facing similar challenges in moderated group sessions",
      benefits: [
        "Peer support and connection",
        "Shared experiences",
        "Reduced isolation",
        "Community building"
      ]
    }
  ];

  const benefits = [
    {
      title: "Accessible Mental Health Care",
      description: "Get professional-quality mental health support anytime, anywhere",
      icon: Heart,
      stats: "24/7 availability"
    },
    {
      title: "Personalized Treatment",
      description: "AI adapts to your unique needs and provides customized therapy approaches",
      icon: Brain,
      stats: "95% user satisfaction"
    },
    {
      title: "Privacy & Confidentiality",
      description: "Your mental health data is protected with bank-level security",
      icon: Shield,
      stats: "HIPAA compliant"
    },
    {
      title: "Cost-Effective Care",
      description: "Affordable mental health support without compromising on quality",
      icon: TrendingUp,
      stats: "80% cost savings"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "This AI companion has been a game-changer for my anxiety. The personalized approach and 24/7 availability have made such a difference in my daily life.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Student",
      content: "As a college student dealing with stress and depression, this app has provided me with the support I needed. The group sessions helped me feel less alone.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Working Mother",
      content: "The family plan has been perfect for our household. It's helped both me and my teenagers manage our mental health better together.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <Helmet>
        <title>AI Mental Health Companion - 24/7 Emotional Support | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Get 24/7 mental health support with our AI companion. Personalized therapy, mood tracking, crisis intervention, and group support. Starting at $29/month." 
        />
        <meta 
          name="keywords" 
          content="AI mental health, therapy app, emotional support, mental wellness, CBT, mindfulness, crisis intervention, mental health companion" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Mental Health
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Mental Health
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Companion
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your personal AI companion for mental health support. Get 24/7 emotional support, 
              personalized therapy sessions, and evidence-based interventions to improve your 
              mental well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Now
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50k+</div>
                <div className="text-gray-300">Lives Improved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">HIPAA</div>
                <div className="text-gray-300">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Mental Health
              <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Support
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Mental Health Companion provides everything you need for your mental 
              wellness journey with personalized, evidence-based support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-pink-400 font-bold text-lg">{feature.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Evidence-Based
              <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Therapy Approaches
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI companion uses proven therapeutic methods to provide effective 
              mental health support tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapyTypes.map((therapy, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <therapy.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{therapy.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{therapy.description}</p>
                    
                    <ul className="space-y-2">
                      {therapy.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Mental Health Companion?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users who have improved their mental health with our 
              AI-powered companion and evidence-based therapeutic approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Users
              <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from real people who have transformed their mental health 
              with our AI companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Affordable Mental Health
              <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Care
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your mental health needs. 
              All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-pink-500 shadow-lg shadow-pink-500/25' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-pink-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white transform hover:scale-105'
                    : 'border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Mental Health
            <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't face your mental health challenges alone. Our AI companion is here 
            to support you 24/7 with personalized, evidence-based care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Support
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMentalHealthCompanionPage;