'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, UserCheck, MessageCircle, TrendingUp as TrendingUpIcon, BarChart as BarChartIcon, Settings as SettingsIcon, Database as DatabaseIcon, Shield as ShieldIcon, Clock as ClockIcon, Users as UsersIcon, Target as TargetIcon, BarChart3 as BarChart3Icon, FileText as FileTextIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavIcon2, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon } from 'lucide-react';

const AiCustomerInsightsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Sentiment Analysis',
      description: 'Analyze customer emotions and sentiment across all touchpoints with 98% accuracy',
      benefits: ['Real-time sentiment tracking', 'Multi-language support', 'Emotion detection', 'Trend analysis']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Predict customer behavior, churn risk, and lifetime value using advanced ML models',
      benefits: ['Churn prediction', 'LTV forecasting', 'Behavior patterns', 'Risk scoring']
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value',
      benefits: ['Dynamic segmentation', 'Persona creation', 'Targeted campaigns', 'Personalization']
    },
    {
      icon: MessageCircle,
      title: 'Conversation Intelligence',
      description: 'Extract insights from customer conversations across all channels',
      benefits: ['Call analysis', 'Chat insights', 'Email sentiment', 'Social listening']
    },
    {
      icon: Target,
      title: 'Recommendation Engine',
      description: 'AI-powered product and service recommendations to increase engagement',
      benefits: ['Product recommendations', 'Content suggestions', 'Upsell opportunities', 'Cross-sell insights']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor customer satisfaction, engagement, and business impact metrics',
      benefits: ['Satisfaction scores', 'Engagement metrics', 'ROI tracking', 'KPI monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 customer records',
        'Basic sentiment analysis',
        'Standard reporting',
        'Email support',
        'Core integrations',
        'Mobile dashboard',
        'Basic segmentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing businesses and mid-market companies',
      features: [
        'Up to 100,000 customer records',
        'Advanced AI analytics',
        'Predictive modeling',
        'Priority support',
        'Advanced integrations',
        'Custom dashboards',
        'API access',
        'Advanced segmentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'Comprehensive solution for large enterprises',
      features: [
        'Unlimited customer records',
        'Full AI suite',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Compliance features',
        'Training & onboarding'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Create personalized shopping experiences with AI-driven customer insights and recommendations',
      icon: ShoppingCart,
      benefits: ['Increased conversion rates', 'Higher average order value', 'Improved customer satisfaction', 'Reduced cart abandonment']
    },
    {
      title: 'SaaS Customer Success',
      description: 'Optimize customer success with predictive analytics and churn prevention strategies',
      icon: Cloud,
      benefits: ['Reduced churn rates', 'Increased retention', 'Better onboarding', 'Proactive support']
    },
    {
      title: 'Financial Services',
      description: 'Enhance customer experience in banking and fintech with intelligent insights and fraud detection',
      icon: CreditCard,
      benefits: ['Risk assessment', 'Fraud prevention', 'Personalized offers', 'Regulatory compliance']
    },
    {
      title: 'Healthcare & Wellness',
      description: 'Improve patient engagement and outcomes with AI-powered health insights and recommendations',
      icon: Heart,
      benefits: ['Patient engagement', 'Health outcomes', 'Treatment optimization', 'Preventive care']
    }
  ];

  const benefits = [
    {
      metric: '35%',
      description: 'Increase in Customer Retention',
      icon: Users
    },
    {
      metric: '50%',
      description: 'Improvement in Conversion Rates',
      icon: TrendingUp
    },
    {
      metric: '60%',
      description: 'Reduction in Churn Rate',
      icon: Shield
    },
    {
      metric: '45%',
      description: 'Boost in Customer Lifetime Value',
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Customer Insights - Zion Tech Group"
        description="Unlock the power of customer data with AI-driven insights, predictive analytics, and intelligent personalization."
        keywords={["AI customer insights","customer analytics","predictive analytics","customer segmentation","sentiment analysis","personalization"]}
        canonicalUrl="https://ziontechgroup.com/ai-customer-insights"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Customer Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of customer data with AI-driven insights, predictive analytics, and intelligent personalization. 
              Transform customer relationships and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Customer Insights platform delivers measurable improvements across all key metrics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand and engage your customers better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-cyan-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to healthcare, our AI Customer Insights adapts to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-purple-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-purple-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and customer data volume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-cyan-400/60 ring-2 ring-cyan-400/20' 
                  : 'border-gray-600/50'
              } hover:border-cyan-400/40 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI Customer Insights to drive growth and customer satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiCustomerInsightsPage;