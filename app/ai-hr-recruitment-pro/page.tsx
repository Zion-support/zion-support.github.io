<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function aiHrRecruitmentPro() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Hr Recruitment Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Hr Recruitment Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Hr Recruitment Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function AiHrRecruitmentProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Hr Recruitment Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced ai hr recruitment pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Hr Recruitment Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function AihrrecruitmentproPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Hr Recruitment Pro</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Sparkles, CheckCircle, Star, Target, Brain, Shield } from 'lucide-react';
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const AIHRRecruitmentProPage = () => {
  const benefits = [
    "Reduce hiring time by 60%",
    "Improve candidate quality by 40%",
    "Automate 80% of screening tasks",
    "Reduce bias in hiring decisions",
    "Streamline interview scheduling",
    "Enhance candidate experience"
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Screening",
      description: "Advanced AI algorithms screen resumes and identify the best candidates automatically",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Matching",
      description: "Intelligent matching system connects candidates with the right roles based on skills and culture fit",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Interview Automation",
      description: "Automated interview scheduling and AI-powered interview analysis for consistent evaluation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bias Reduction",
      description: "AI-driven tools help reduce unconscious bias and ensure fair hiring practices",
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 job postings",
        "Basic AI screening",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 job postings",
        "Advanced AI screening",
        "Priority support",
        "Advanced analytics",
        "Interview automation",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited job postings",
        "Custom AI models",
        "Dedicated support team",
        "White-label solution",
        "SLA guarantee",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director",
      company: "TechCorp",
      content: "Zion AI HR Recruitment Pro has transformed our hiring process. We've reduced time-to-hire by 60%.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Talent Acquisition Manager",
      company: "InnovateLabs",
      content: "The AI screening is incredibly accurate. We're finding better candidates faster than ever before.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "People Operations",
      company: "StartupHub",
      content: "The bias reduction tools have helped us build a more diverse and inclusive team.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI HR Recruitment Pro",
    "description": "AI-powered HR recruitment platform with intelligent screening and bias reduction",
    "url": "https://ziontechgroup.com/ai-hr-recruitment-pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "199",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="AI HR Recruitment Pro - Zion Tech Group"
            description="Revolutionize your hiring process with AI-powered recruitment tools, intelligent screening, and bias reduction for better talent acquisition."
            keywords="AI HR recruitment, talent acquisition, AI screening, bias reduction, interview automation, hiring optimization"
            canonical="https://ziontechgroup.com/ai-hr-recruitment-pro"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">AI-Powered HR Recruitment</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Zion AI HR Recruitment Pro
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Revolutionize your hiring process with AI-powered recruitment tools, intelligent screening, 
                  and bias reduction for superior talent acquisition.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#pricing"
                    variant="primary"
                    size="lg"
                    icon={Users}
                    iconPosition="left">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#demo"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Watch Demo
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Powerful HR Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of AI to streamline your recruitment process and find the best talent.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your HR recruitment needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by HR Professionals
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what HR professionals are saying about Zion AI HR Recruitment Pro
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
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
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of HR professionals using Zion AI HR Recruitment Pro 
                  to find and hire the best talent. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={Users}
                    iconPosition="right">
                    Schedule Demo
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default AIHRRecruitmentProPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
