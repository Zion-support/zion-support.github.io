import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Brain, Users, BarChart3, Award, Zap, ArrowRight, CheckCircle, Star, GraduationCap, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIEducationProPage = () => {
  const features = [
    {
      title: "AI-Powered Learning",
      description: "Personalized learning paths with AI that adapts to each student's pace and learning style",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Personalized curriculum", "Adaptive learning", "Real-time feedback"]
    },
    {
      title: "Intelligent Tutoring",
      description: "AI tutors that provide 24/7 support, answer questions, and guide students through complex topics",
      icon: <GraduationCap className="w-8 h-8" />,
      benefits: ["24/7 availability", "Instant help", "Step-by-step guidance"]
    },
    {
      title: "Progress Analytics",
      description: "Advanced analytics to track student progress, identify learning gaps, and predict performance",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance tracking", "Learning insights", "Predictive analytics"]
    },
    {
      title: "Automated Assessment",
      description: "AI-powered assessment tools that create, grade, and provide feedback on assignments and tests",
      icon: <Award className="w-8 h-8" />,
      benefits: ["Auto-grading", "Instant feedback", "Bias-free assessment"]
    }
  ];

  const pricing = [
    {
      name: "Education Starter",
      price: "$199",
      period: "per month",
      description: "Basic AI education tools for small schools",
      features: [
        "Up to 100 students",
        "Basic AI tutoring",
        "Progress tracking",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Education Professional",
      price: "$599",
      period: "per month",
      description: "Advanced AI education for medium institutions",
      features: [
        "Up to 500 students",
        "Advanced AI tutoring",
        "Comprehensive analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Education Enterprise",
      price: "$1,999",
      period: "per month",
      description: "Complete AI education platform for large institutions",
      features: [
        "Unlimited students",
        "Full AI suite",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "K-12 Education",
      description: "AI-powered learning platforms for elementary and high school students",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Higher Education",
      description: "Advanced AI tools for universities and colleges",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Corporate Training",
      description: "AI-driven employee training and development programs",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Online Learning",
      description: "AI-enhanced online courses and virtual classrooms",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Zion AI Education Pro | AI-Powered Learning Platform</title>
        <meta name="description" content="Revolutionary AI-powered education platform. Personalized learning, intelligent tutoring, progress analytics, and automated assessment." />
        <meta name="keywords" content="AI education, educational AI, learning platform, AI tutoring, personalized learning, education technology" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-education-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Education</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion AI Education Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform education with AI-powered personalized learning, intelligent tutoring, 
            and comprehensive analytics for students and educators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<BookOpen className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#features"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Explore Features
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Education Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered education solutions designed to enhance learning 
              outcomes and streamline educational processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Education Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is revolutionizing education across all levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Education AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI education solution for your institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/25' 
                  : 'border-white/20 hover:border-blue-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands of educators already using our AI solutions to enhance 
            learning outcomes and streamline educational processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<BookOpen className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas-services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View All Solutions
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIEducationProPage;