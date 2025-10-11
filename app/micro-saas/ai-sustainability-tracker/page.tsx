'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  BarChart, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Brain,
  Settings,
  Users,
  Shield,
  Globe,
  FileText,
  Cpu,
  Heart,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Zap,
  Eye,
  Database
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiSustainabilityTrackerPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-cyan-400" />,
      title: "Carbon Footprint Tracking",
      description: "AI-powered carbon footprint calculation and tracking across all business operations with real-time monitoring and reporting."
    },
    {
      icon: <BarChart className="w-6 h-6 text-cyan-400" />,
      title: "Sustainability Analytics",
      description: "Advanced analytics dashboard providing insights into environmental impact, resource usage, and sustainability performance metrics."
    },
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: "Goal Setting & Tracking",
      description: "Set and track sustainability goals with AI-powered recommendations for achieving carbon neutrality and environmental targets."
    },
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms analyze your data to provide actionable recommendations for reducing environmental impact."
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Global Standards Compliance",
      description: "Ensure compliance with international sustainability standards including GRI, SASB, and UN SDGs reporting frameworks."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Automated Reporting",
      description: "Generate comprehensive sustainability reports automatically with customizable templates and stakeholder-specific views."
    }
  ];

  const sustainabilityAreas = [
    {
      title: "Energy Management",
      description: "Track and optimize energy consumption across facilities, identify inefficiencies, and implement renewable energy solutions.",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      metrics: ["Energy consumption", "Renewable energy %", "Energy efficiency", "Cost savings"]
    },
    {
      title: "Waste Reduction",
      description: "Monitor waste generation, implement circular economy principles, and track recycling and waste diversion rates.",
      icon: <Recycle className="w-8 h-8 text-cyan-400" />,
      metrics: ["Waste generated", "Recycling rate", "Waste diversion", "Circular economy score"]
    },
    {
      title: "Water Conservation",
      description: "Track water usage, identify conservation opportunities, and implement water-efficient practices across operations.",
      icon: <Droplets className="w-8 h-8 text-cyan-400" />,
      metrics: ["Water consumption", "Water efficiency", "Conservation measures", "Quality metrics"]
    },
    {
      title: "Supply Chain Sustainability",
      description: "Assess and improve supplier sustainability performance, track Scope 3 emissions, and promote ethical sourcing.",
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      metrics: ["Supplier score", "Scope 3 emissions", "Ethical sourcing", "Risk assessment"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 locations",
        "Basic carbon tracking",
        "Standard reporting",
        "Email support",
        "3 sustainability areas"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 locations",
        "Advanced AI insights",
        "Custom reporting",
        "Priority support",
        "All sustainability areas",
        "API integration",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited locations",
        "Full AI capabilities",
        "Custom development",
        "Dedicated support",
        "White-label options",
        "Advanced analytics",
        "Compliance tools"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Carbon Footprint by 40%",
      description: "AI-powered recommendations help identify and implement the most effective sustainability measures.",
      icon: <Leaf className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Save $50K+ Annually",
      description: "Optimize resource usage and reduce waste to achieve significant cost savings while improving sustainability.",
      icon: <DollarSign className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Meet ESG Requirements",
      description: "Ensure compliance with environmental, social, and governance reporting requirements and standards.",
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Improve Brand Reputation",
      description: "Demonstrate commitment to sustainability and attract environmentally conscious customers and investors.",
      icon: <Heart className="w-6 h-6 text-cyan-400" />
    }
  ];

  const useCases = [
    {
      title: "Manufacturing Company",
      description: "Reduced carbon emissions by 45% and saved $200K annually through AI-powered energy optimization and waste reduction strategies.",
      icon: <Settings className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Retail Chain",
      description: "Achieved carbon neutrality across 150+ stores by implementing AI-recommended sustainability measures and renewable energy solutions.",
      icon: <ShoppingCart className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Tech Startup",
      description: "Established comprehensive sustainability program from day one, achieving B-Corp certification within 12 months.",
      icon: <Cpu className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Sustainability Tracker - Environmental Impact Management | Zion Tech Group</title>
        <meta name="description" content="Track and optimize your environmental impact with AI-powered sustainability management. Carbon footprint tracking, ESG reporting, and actionable insights for sustainable business growth." />
        <meta name="keywords" content="sustainability tracker, carbon footprint, ESG reporting, environmental management, green business, sustainability analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-sustainability-tracker" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Powered Sustainability
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Sustainability
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Tracker</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business into a sustainable powerhouse with our AI-powered environmental impact management platform. 
              Track, optimize, and report on your sustainability journey with intelligent insights and automated reporting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Sustainability Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to track, manage, and optimize your environmental impact in one powerful platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Areas Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Track All Areas of Sustainability
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coverage of all environmental impact areas with AI-powered insights and recommendations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {sustainabilityAreas.map((area, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {area.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {area.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how companies are using AI Sustainability Tracker to achieve their environmental goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Sustainability Tracker?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join the growing number of businesses committed to sustainable growth and environmental responsibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Sustainable Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your sustainability goals and business size.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-gray-600 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your sustainability journey today with AI-powered insights and automated tracking that makes environmental responsibility simple and effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiSustainabilityTrackerPage;