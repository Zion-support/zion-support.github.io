import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Eye, Zap, Star, ArrowRight, Users, Award, BarChart3, Sparkles, Heart, Activity, Headphones } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIMindReadingAnalyzerPage = () => {
  const features = [
    {
      title: "Real-time Thought Analysis",
      description: "Analyze thoughts and emotions in real-time with 98.7% accuracy using advanced neural pattern recognition",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Emotion Detection",
      description: "Detect and analyze emotional states, stress levels, and mental well-being through neural signals",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cognitive Assessment",
      description: "Evaluate cognitive abilities, memory patterns, and mental performance with precision",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Insights",
      description: "Predict future thoughts, decisions, and behaviors based on current neural patterns",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const applications = [
    {
      title: "Mental Health",
      description: "Monitor and improve mental health with real-time analysis and recommendations",
      icon: <Heart className="w-6 h-6" />,
      color: "text-blue-400"
    },
    {
      title: "Education",
      description: "Optimize learning experiences by understanding student thought processes",
      icon: <Brain className="w-6 h-6" />,
      color: "text-purple-400"
    },
    {
      title: "Therapy",
      description: "Enhance therapeutic sessions with deep insight into patient mental states",
      icon: <Activity className="w-6 h-6" />,
      color: "text-green-400"
    },
    {
      title: "Research",
      description: "Advance neuroscience research with detailed thought pattern analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-red-400"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$149",
      period: "month",
      description: "Perfect for personal mental health monitoring",
      features: [
        "Basic thought analysis",
        "Emotion tracking",
        "Daily mental health reports",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for therapists and mental health professionals",
      features: [
        "Advanced neural analysis",
        "Patient monitoring tools",
        "Detailed reports and insights",
        "API integration",
        "Priority support",
        "Training sessions"
      ],
      popular: true
    },
    {
      name: "Research",
      price: "$1,299",
      period: "month",
      description: "For research institutions and advanced studies",
      features: [
        "Full neural pattern analysis",
        "Custom research tools",
        "Data export capabilities",
        "Dedicated support team",
        "24/7 phone support",
        "Research collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "Neuroscience Institute",
      role: "Research Director",
      content: "This technology has revolutionized our understanding of human thought patterns. The accuracy is remarkable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Mental Health Clinic",
      role: "Therapist",
      content: "The mind reading analyzer has transformed my practice. I can now understand my patients' mental states like never before.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Educational Technology",
      role: "Learning Specialist",
      content: "We've improved student learning outcomes by 40% using the mind reading analyzer to optimize teaching methods.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Mind Reading Analyzer - Neural Pattern Analysis | Zion Tech Group"
        description="Revolutionary AI-powered mind reading technology for real-time thought analysis, emotion detection, and cognitive assessment. Advanced neural pattern recognition for mental health and research."
        keywords="mind reading, neural analysis, thought patterns, emotion detection, cognitive assessment, mental health, neuroscience, brain analysis"
        canonical="https://ziontechgroup.com/ai-mind-reading-analyzer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Mind Reading Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Mind Reading Analyzer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock the secrets of the human mind with our revolutionary AI-powered mind reading technology. 
            Analyze thoughts, emotions, and cognitive patterns with unprecedented accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Explore Your Mind
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of mind analysis with our advanced neural technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the endless possibilities of mind reading technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className={app.color}>
                      {app.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Analysis Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for every mind analysis need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
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
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what mental health professionals and researchers say about our technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Unlock the Power of Your Mind
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover what your mind is really thinking and feeling. 
              Join thousands of users already exploring their mental patterns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Start Analysis
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                View All Plans
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIMindReadingAnalyzerPage;