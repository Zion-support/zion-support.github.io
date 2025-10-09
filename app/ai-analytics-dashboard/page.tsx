'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, BarChart4, TrendingUp as TrendingUpIcon, PieChart as PieChartIcon2, LineChart as LineChartIcon, Activity as ActivityIcon2, Target as TargetIcon2, Users as UsersIcon2, Clock as ClockIcon2, Calendar as CalendarIcon2, FileText as FileTextIcon2, Settings as SettingsIcon2, Search as SearchIcon2, Bot as BotIcon2, Palette as PaletteIcon2, Camera as CameraIcon2, Music as MusicIcon2, Video as VideoIcon2, Gamepad2 as Gamepad2Icon2, ShoppingCart as ShoppingCartIcon2, CreditCard as CreditCardIcon2, Building as BuildingIcon2, Factory as FactoryIcon2, Car as CarIcon2, Plane as PlaneIcon2, Ship as ShipIcon2, Train as TrainIcon2, Home as HomeIcon2, Heart as HeartIcon2, Stethoscope as StethoscopeIcon2, GraduationCap as GraduationCapIcon2, Briefcase as BriefcaseIcon2, Wrench as WrenchIcon2, Hammer as HammerIcon2, Paintbrush as PaintbrushIcon2, Scissors as ScissorsIcon2, BookOpen as BookOpenIcon2, Calculator as CalculatorIcon2, Calendar as CalendarIcon2, Clock3 as Clock3Icon2, Compass as CompassIcon2, Navigation as NavigationIcon2, PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2, Activity as ActivityIcon3, Zap as LightningIcon2, Target as CrosshairIcon2, Shield as SecurityIcon2, Users as PeopleIcon2, Star as StarIcon2, CheckCircle as CheckIcon2, ArrowRight as ArrowIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as LocationIcon2 } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and predictions from your data using advanced AI algorithms',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend forecasting']
    },
    {
      icon: BarChart4,
      title: 'Real-time Dashboards',
      description: 'Comprehensive dashboards with real-time data visualization and monitoring',
      benefits: ['Live data updates', 'Custom dashboards', 'Interactive charts']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Track and monitor business goals with AI-powered progress analysis',
      benefits: ['KPI monitoring', 'Goal setting', 'Progress alerts']
    },
    {
      icon: Users,
      title: 'User Analytics',
      description: 'Deep insights into user behavior and engagement patterns',
      benefits: ['User segmentation', 'Behavior analysis', 'Engagement metrics']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate automated reports with AI-powered insights and recommendations',
      benefits: ['Scheduled reports', 'Custom templates', 'Smart recommendations']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with advanced data protection and compliance',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified']
    }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Website traffic analysis' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM data integration' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce analytics' },
    { name: 'Facebook Ads', icon: '📘', description: 'Social media advertising' },
    { name: 'Google Ads', icon: '🔍', description: 'Search advertising' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard AI insights',
        'Email support',
        'Mobile app access',
        '30-day data retention'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '20 data sources',
        'Advanced dashboards',
        'Full AI analytics suite',
        'Priority support',
        'API access',
        'Team collaboration',
        'Custom reports',
        '1-year data retention'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI features',
        '24/7 dedicated support',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager',
        'Unlimited data retention'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Thompson',
      role: 'Data Analyst',
      company: 'DataCorp Solutions',
      content: 'AI Analytics Dashboard has revolutionized our data analysis. The AI insights have helped us identify opportunities worth $2M+.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Park',
      role: 'Marketing Director',
      company: 'Growth Marketing Co',
      content: 'The predictive analytics are incredibly accurate. We\'ve improved our campaign ROI by 180% using the AI recommendations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'TechStart Inc',
      content: 'Finally, a dashboard that makes sense of our complex data. The AI insights have transformed our decision-making process.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Optimize sales and customer experience with AI-powered e-commerce analytics',
      benefits: ['200% increase in conversion', '150% better customer insights', '90% faster decision making']
    },
    {
      industry: 'SaaS',
      description: 'Track user engagement and optimize product performance with advanced metrics',
      benefits: ['300% improvement in retention', '250% better user insights', '95% data accuracy']
    },
    {
      industry: 'Marketing',
      description: 'Measure campaign performance and optimize marketing spend with AI insights',
      benefits: ['180% better ROI', '220% more leads', '85% cost reduction']
    },
    {
      industry: 'Finance',
      description: 'Monitor financial performance and predict market trends with AI analytics',
      benefits: ['150% better forecasting', '200% risk reduction', '95% compliance rate']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BarChart4 className="w-4 h-4" />
            <span>AI-Powered Business Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Analytics Dashboard
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium cyber-glow">
            Intelligent Business Intelligence Platform
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your data into actionable insights with AI-powered analytics, real-time dashboards, 
            and predictive intelligence. Make data-driven decisions 10x faster with our advanced platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Decisions</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">200%</div>
              <div className="text-gray-300">Better Insights</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connect all your data sources in one powerful AI-driven platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{integration.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
              <div className="text-sm text-gray-400">{integration.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to unlock insights from your data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Industry Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Proven results across multiple industries and business types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                {useCase.industry}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="text-center">
                    <div className="text-lg font-bold text-blue-400">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your analytics needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-blue-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
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

              <a
                href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their data analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Data Analysis?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI Analytics Dashboard to make better decisions, 
            identify opportunities, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsDashboardPage;