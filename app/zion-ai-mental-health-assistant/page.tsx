import { ArrowRight, CheckCircle, Star, Heart, Brain, Users, Shield, Zap, Database, Eye, Download, Upload, Search, Filter, Bell, MessageSquare, Calendar, PieChart, LineChart, BarChart, Activity, AlertTriangle, CheckCircle2, XCircle, Info, ExternalLink, Mail, Phone, MapPin, Play, Download as DownloadIcon, Upload as UploadIcon, Settings, Lock, RefreshCw, Smartphone, Target, FileText, Code, Database as DatabaseIcon, Smile, Frown, Meh, TrendingUp, Clock, Award, BookOpen, Lightbulb, Target as TargetIcon, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiMentalHealthAssistant() {
  const features = [
    {
      title: "AI Mood Tracking",
      description: "Advanced mood analysis using natural language processing and behavioral patterns to track mental wellness.",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Daily mood tracking", "Pattern recognition", "Personalized insights", "Progress visualization"]
    },
    {
      title: "Personalized Therapy Sessions",
      description: "AI-powered therapy sessions tailored to individual needs with evidence-based therapeutic approaches.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["CBT techniques", "Mindfulness exercises", "Crisis intervention", "Progress tracking"]
    },
    {
      title: "Stress Management Tools",
      description: "Comprehensive stress reduction techniques including breathing exercises, meditation, and relaxation methods.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Guided meditation", "Breathing exercises", "Stress monitoring", "Relaxation techniques"]
    },
    {
      title: "Sleep Optimization",
      description: "AI-driven sleep analysis and personalized recommendations to improve sleep quality and mental health.",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["Sleep tracking", "Sleep hygiene tips", "Circadian optimization", "Sleep quality scoring"]
    },
    {
      title: "Crisis Support System",
      description: "24/7 AI-powered crisis intervention with immediate support and professional resource connections.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["24/7 availability", "Crisis detection", "Emergency resources", "Professional referrals"]
    },
    {
      title: "Wellness Analytics",
      description: "Comprehensive mental health analytics and insights to track progress and identify improvement areas.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Progress tracking", "Trend analysis", "Goal setting", "Achievement recognition"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal Wellness",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals starting their mental wellness journey",
      features: [
        "Basic mood tracking",
        "Daily check-ins",
        "Stress management tools",
        "Sleep optimization",
        "Basic analytics",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Mental Health Pro",
      price: "$79",
      period: "/month",
      description: "Advanced features for comprehensive mental wellness",
      features: [
        "AI therapy sessions",
        "Advanced mood analytics",
        "Crisis support",
        "Personalized recommendations",
        "Progress tracking",
        "Priority support",
        "Family sharing",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise Wellness",
      price: "$299",
      period: "/month",
      description: "Complete mental health solution for organizations",
      features: [
        "Unlimited users",
        "Team wellness analytics",
        "Manager dashboards",
        "Custom integrations",
        "24/7 support",
        "White-label options",
        "Compliance reporting",
        "Custom implementation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Improve Mental Wellness by 60%",
      description: "Users report significant improvements in mood, stress levels, and overall mental health.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Reduce Stress by 45%",
      description: "AI-powered stress management techniques help users achieve better work-life balance.",
      icon: <Heart className="w-8 h-8 text-blue-500" />
    },
    {
      title: "24/7 Mental Health Support",
      description: "Always-available AI assistant provides support whenever you need it most.",
      icon: <Shield className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Evidence-Based Therapy",
      description: "Scientifically-proven therapeutic techniques delivered through AI technology.",
      icon: <Brain className="w-8 h-8 text-blue-500" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Manager",
      company: "TechStart Inc",
      content: "This AI assistant has been a game-changer for my mental health. The personalized therapy sessions and mood tracking have helped me manage stress much better.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      title: "Software Engineer",
      company: "InnovateCorp",
      content: "The crisis support feature is incredible. Having 24/7 access to mental health support has given me peace of mind during difficult times.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Clinical Psychologist",
      company: "Wellness Center",
      content: "I recommend this platform to my patients. The AI-powered insights are surprisingly accurate and the therapeutic techniques are evidence-based.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Mental Health Assistant - AI-Powered Wellness & Therapy</title>
        <meta name="description" content="Transform your mental wellness with AI-powered therapy, mood tracking, and stress management. 24/7 mental health support with Zion AI Mental Health Assistant." />
        <meta name="keywords" content="AI mental health, therapy assistant, mood tracking, stress management, wellness, mental wellness, AI therapy, crisis support" />
        <meta property="og:title" content="Zion AI Mental Health Assistant - AI-Powered Wellness Platform" />
        <meta property="og:description" content="Improve your mental wellness by 60% with AI-powered therapy, mood tracking, and 24/7 mental health support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-mental-health-assistant" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Mental Health Assistant - AI-Powered Wellness" />
        <meta name="twitter:description" content="Transform your mental wellness with AI-powered therapy and 24/7 mental health support." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Heart className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">AI-Powered Mental Wellness</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Mental Health Assistant
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your mental wellness with AI-powered therapy, mood tracking, and 24/7 mental health support. 
                Evidence-based techniques delivered through intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>HIPAA compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Mental Wellness Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered mental health solutions designed to support your wellness journey with personalized care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Mental Wellness
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of users who have improved their mental health with our AI-powered platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Wellness Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to support your mental wellness journey at every stage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'border border-gray-600 hover:border-gray-500 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Mental Wellness Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how individuals and organizations are improving mental health with our platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Mental Wellness?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your mental wellness journey today with AI-powered therapy and 24/7 support. 
              Your mental health matters, and we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}