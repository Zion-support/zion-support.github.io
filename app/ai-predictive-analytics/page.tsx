'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, PieChart, Activity, AlertCircle, Settings, Users2, Target as TargetIcon, BarChart3, Clock3, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Compass, Globe2, Map, Navigation as NavigationIcon, TrendingDown, TrendingUp as TrendingUpIcon, BarChart4, LineChart, PieChart as PieChartIcon, Activity as ActivityIcon, Target as TargetIcon2, Zap as ZapIcon, Brain as BrainIcon, Cpu as CpuIcon, Database as DatabaseIcon, Cloud as CloudIcon, Globe as GlobeIcon, Users as UsersIcon, MessageSquare as MessageSquareIcon, Eye as EyeIcon, Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Calendar as CalendarIcon2, FileText as FileTextIcon2, GitBranch as GitBranchIcon, PieChart as PieChartIcon2, Activity as ActivityIcon2, AlertCircle as AlertCircleIcon, Settings as SettingsIcon2, Users2 as Users2Icon, Target as TargetIcon3, BarChart3 as BarChart3Icon, Clock3 as Clock3Icon, DollarSign as DollarSignIcon, Award as AwardIcon, Lock as LockIcon, Database as DatabaseIcon2, Cloud as CloudIcon2, Code as CodeIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon3, BarChart as BarChartIcon2, FileText as FileTextIcon3, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon3, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon, Navigation as NavigationIcon2, TrendingDown as TrendingDownIcon } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    'Advanced machine learning algorithms for accurate predictions',
    'Real-time data processing and analysis',
    'Custom predictive models for your specific industry',
    'Automated anomaly detection and alerting',
    'Interactive dashboards and visualizations',
    'API integration with 100+ data sources',
    'Automated report generation and scheduling',
    'Multi-dimensional data analysis and correlation',
    'Predictive maintenance and optimization',
    'Risk assessment and mitigation strategies'
  ];

  const benefits = [
    'Increase prediction accuracy by 85%',
    'Reduce operational costs by 30%',
    'Improve decision-making speed by 60%',
    'Prevent costly failures and downtime',
    'Optimize resource allocation and planning',
    'Save 40+ hours per week on data analysis',
    'Enhance competitive advantage',
    'Drive data-driven business growth'
  ];

  const pricing = [
    {
      name: 'Analyst',
      price: '$299/month',
      description: 'Perfect for data analysts',
      features: [
        'Up to 10 data sources',
        'Basic predictive models',
        'Standard visualizations',
        'Email support',
        'Monthly reports',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 data sources',
        'Advanced AI models',
        'Custom dashboards',
        'Priority support',
        'Real-time alerts',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,199/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label dashboards',
        'Dedicated support',
        'Advanced security',
        'Custom training',
        'Multi-tenant support',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const integrations = [
    'Google Analytics', 'Salesforce', 'HubSpot', 'Microsoft Power BI', 'Tableau', 'Qlik',
    'Amazon Web Services', 'Google Cloud', 'Microsoft Azure', 'Snowflake', 'Databricks',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Zapier'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Predictive Analytics Platform - Zion Tech Group"
        description="Advanced AI-powered predictive analytics with machine learning algorithms, real-time processing, and custom models. Increase prediction accuracy by 85% and reduce costs by 30%."
        keywords={['AI predictive analytics', 'machine learning', 'data analytics', 'predictive modeling', 'business intelligence', 'data science']}
        canonicalUrl="https://ziontechgroup.com/ai-predictive-analytics"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Predictive Analytics Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Advanced predictive analytics powered by artificial intelligence
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your data into actionable insights with AI-powered predictive analytics. 
                Increase prediction accuracy by 85% while reducing operational costs by 30%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Advanced AI Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Measurable Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">
                      {benefit.split(' ')[0]}
                    </div>
                    <div className="text-gray-300">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Flexible Pricing Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricing.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                      className="w-full cyber-button text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Seamless Data Integration
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Connect with your existing data sources, analytics tools, and business applications for a unified analytics experience.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-2xl mb-2">🔗</div>
                    <div className="text-white font-medium">{integration}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Unlock the Power of Predictive Analytics?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading companies already using AI to predict the future and drive business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIPredictiveAnalyticsPage;