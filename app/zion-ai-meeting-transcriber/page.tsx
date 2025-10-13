import React from 'react';
import { Link } from "react-router-dom";
import { 
  Mic, 
  FileText, 
  Download, 
  Share2, 
  Clock, 
  Users, 
  Brain, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Play,
  Pause,
  Volume2,
  Languages,
  Search,
  Filter,
  BarChart3,
  TrendingUp,
  Shield,
  Cloud,
  Smartphone,
  Monitor,
  Headphones,
  Calendar,
  MessageSquare,
  Target,
  Award,
  Globe,
  Mail,
  Phone
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const ZionAIMeetingTranscriberPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Meeting Transcriber Pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Advanced AI-powered meeting transcription service with real-time processing, multi-language support, and intelligent analytics.",
    "url": "https://ziontechgroup.com/zion-ai-meeting-transcriber",
    "offers": {
      "@type": "Offer",
      "price": "29.99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127"
    }
  };

  const features = [
    {
      icon: <Mic className="w-6 h-6 text-cyan-400" />,
      title: "Real-Time Transcription",
      description: "Live transcription with 99.2% accuracy using advanced speech recognition AI"
    },
    {
      icon: <Languages className="w-6 h-6 text-purple-400" />,
      title: "Multi-Language Support",
      description: "Supports 50+ languages with automatic language detection and translation"
    },
    {
      icon: <Brain className="w-6 h-6 text-green-400" />,
      title: "AI-Powered Insights",
      description: "Extract key points, action items, and sentiment analysis from meetings"
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: "Smart Summaries",
      description: "Automatically generate meeting summaries and follow-up action items"
    },
    {
      icon: <Search className="w-6 h-6 text-yellow-400" />,
      title: "Searchable Archives",
      description: "Search through all your meeting transcripts with intelligent keyword matching"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-red-400" />,
      title: "Analytics Dashboard",
      description: "Track meeting patterns, speaking time, and engagement metrics"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29.99",
      period: "per month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 hours of transcription",
        "5 languages supported",
        "Basic AI insights",
        "Cloud storage (10GB)",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79.99",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Unlimited transcription",
        "All 50+ languages",
        "Advanced AI analytics",
        "Cloud storage (100GB)",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199.99",
      period: "per month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited cloud storage",
        "Dedicated account manager",
        "Custom AI training",
        "On-premise deployment",
        "SLA guarantee",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager, TechCorp",
      content: "Zion AI Meeting Transcriber has revolutionized our team meetings. The real-time transcription and AI insights help us stay focused and productive.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, StartupXYZ",
      content: "The multi-language support is incredible. We have international teams and this tool makes communication seamless across all languages.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Operations Director, Global Inc",
      content: "The analytics dashboard gives us valuable insights into our meeting patterns. We've improved our meeting efficiency by 40%.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Meeting Transcriber Pro - Real-Time Meeting Transcription & Analytics"
        description="Advanced AI-powered meeting transcription service with real-time processing, multi-language support, and intelligent analytics. Transform your meetings with 99.2% accuracy."
        keywords="AI meeting transcription, real-time transcription, meeting analytics, speech recognition, multi-language support, business productivity"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="relative py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">AI-Powered Transcription</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion AI Meeting
              </span>
              <br />
              <span className="text-white">Transcriber Pro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your meetings with real-time AI transcription, intelligent insights, and multi-language support. 
              Boost productivity with 99.2% accuracy and advanced analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </FuturisticButton>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">99.2% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">50+ Languages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Real-Time Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">AI Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Modern Teams</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your meetings into actionable insights and improved productivity.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your team. All plans include our core features with no hidden fees.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}
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
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="#contact"
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Meeting Transcriber Pro.
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400">{testimonial.role}</div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="p-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-2 border-cyan-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teams already using Zion AI Meeting Transcriber Pro to boost productivity and improve meeting outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us: +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAIMeetingTranscriberPage;