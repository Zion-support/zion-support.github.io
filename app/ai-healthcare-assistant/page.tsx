import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope, Brain, Shield, BarChart3, Clock, CheckCircle, Star, ArrowRight, Zap, Target, Calendar, Users, Activity, AlertTriangle, Award, FileText, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIHealthcareAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Symptom Analysis",
      description: "Advanced AI analyzes symptoms and provides preliminary health assessments with accuracy rates above 95%"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Virtual Health Monitoring",
      description: "Continuous monitoring of vital signs and health metrics with real-time alerts and recommendations"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Health Plans",
      description: "AI-generated personalized wellness and treatment plans based on individual health profiles"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Preventive Care",
      description: "Proactive health recommendations and early warning systems to prevent serious health issues"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Health Analytics",
      description: "Comprehensive health data analysis with trends, patterns, and predictive health insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Doctor Connect",
      description: "Seamless connection with healthcare professionals and specialists when needed"
    }
  ];

  const healthCategories = [
    { name: "General Health", icon: "🏥", description: "Overall wellness and preventive care" },
    { name: "Mental Health", icon: "🧠", description: "AI-powered mental wellness support" },
    { name: "Chronic Conditions", icon: "🩺", description: "Management of diabetes, hypertension, etc." },
    { name: "Fitness & Nutrition", icon: "💪", description: "Personalized fitness and diet plans" },
    { name: "Women's Health", icon: "👩", description: "Specialized women's health monitoring" },
    { name: "Pediatric Care", icon: "👶", description: "Child health monitoring and guidance" }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 19,
      period: "month",
      description: "Essential health monitoring for individuals",
      features: [
        "Basic Symptom Analysis",
        "Health Tracking Dashboard",
        "Monthly Health Reports",
        "Email Support",
        "Mobile App Access",
        "Basic Health Tips"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 49,
      period: "month",
      description: "Comprehensive health management for families",
      features: [
        "Advanced AI Analysis",
        "Family Health Dashboard",
        "Weekly Health Reports",
        "Priority Support",
        "Doctor Consultation",
        "Health Goal Tracking",
        "Medication Reminders",
        "Emergency Alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 99,
      period: "month",
      description: "Advanced healthcare for organizations",
      features: [
        "Premium AI Analysis",
        "Multi-User Dashboard",
        "Daily Health Reports",
        "24/7 Support",
        "Specialist Consultations",
        "Custom Health Programs",
        "Integration with EHR",
        "White-label Options",
        "API Access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "City Medical Center",
      role: "Chief Medical Officer",
      content: "Zion AI Healthcare Assistant has transformed our patient care. The AI analysis accuracy is remarkable, helping us catch potential issues early and improve patient outcomes.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Rodriguez",
      company: "HealthTech Startup",
      role: "CEO",
      content: "As someone with diabetes, this AI assistant has been life-changing. The continuous monitoring and personalized recommendations have helped me manage my condition better than ever.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Chen",
      company: "Family Practice",
      role: "Family Physician",
      content: "The integration with our practice has been seamless. Our patients love the convenience, and we've seen a 40% reduction in unnecessary office visits.",
      rating: 5,
      avatar: "EC"
    }
  ];

  const stats = [
    { number: "95%", label: "Diagnosis Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "40%", label: "Reduced Hospital Visits", icon: <Heart className="w-6 h-6" /> },
    { number: "500K+", label: "Lives Improved", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Health Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Healthcare Assistant - Zion Tech Group"
        description="Revolutionary AI-powered healthcare platform with symptom analysis, health monitoring, and personalized medical recommendations. Transform healthcare with cutting-edge technology."
        keywords="AI healthcare, medical AI, health monitoring, symptom analysis, telemedicine, digital health, healthcare technology, medical diagnosis"
        canonical="/ai-healthcare-assistant"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Healthcare Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Healthcare Assistant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize healthcare with AI-powered symptom analysis, health monitoring, and personalized medical recommendations. 
            Get 24/7 health support and early detection with cutting-edge artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
            >
              Watch Demo
              <Stethoscope className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Healthcare Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to revolutionize healthcare with accurate diagnosis, 
              continuous monitoring, and personalized treatment recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Health Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered healthcare solutions for every aspect of your health and wellness
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {healthCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
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
              Choose Your Health Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the plan that best fits your healthcare needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what medical professionals say about our AI Healthcare Assistant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of users already using AI Healthcare Assistant to improve their health and wellness. 
            Start your free health assessment today and experience the future of healthcare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
            >
              Schedule Consultation
              <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAssistantPage;
