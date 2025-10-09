import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, RefreshCw, Database, Smartphone, Calendar, FileText, PieChart, Settings, Bell, Search, Filter, Download, Upload, Share2, Link2, Plus, Minus, Edit, Trash2, Save, Send, Archive, Tag, User, Building, CreditCard, ShoppingCart, Package, Truck, Headphones, HelpCircle, BookOpen, Lightbulb, Rocket, Crown, Gem, Heart, ThumbsUp, MessageCircle, Video, Camera, Mic, HeadphonesIcon, Wifi, Bluetooth, Battery, Wrench, Hammer, Screwdriver, Paintbrush, Palette, Scissors, Ruler, Calculator, Calendar as CalendarIcon, Clock as ClockIcon, Map, Navigation, Compass, Flag, Home, Building2, Factory, Store, Bank, Hospital, School, University, Church, Mosque, Library, Museum, Theater, Stadium, Airport, Train, Bus, Car, Bike, Plane, Ship, Rocket as RocketIcon, Satellite, Telescope, Microscope, Flask, Beaker, TestTube, Atom, DNA, Virus, Bacteria, Cell, Organ, Heart as HeartIcon, Brain as BrainIcon, Eye as EyeIcon, Ear, Nose, Mouth, Hand, Finger, Foot, Leg, Arm, Chest, Back, Stomach, Liver, Kidney, Lung, Stomach as StomachIcon, Intestine, Bone, Muscle, Skin, Hair, Nail, Tooth, Tongue, Lip, Cheek, Chin, Forehead, Jaw, Neck, Shoulder, Elbow, Wrist, Hip, Knee, Ankle, Heel, Toe, Thumb, Index, Middle, Ring, Pinky, Palm, Knuckle, Joint, Tendon, Ligament, Nerve, Vein, Artery, Capillary, Blood, Plasma, Platelet, WhiteBloodCell, RedBloodCell, Hemoglobin, Oxygen, CarbonDioxide, Nitrogen, Hydrogen, Helium, Lithium, Beryllium, Boron, Carbon, Nitrogen as NitrogenIcon, Oxygen as OxygenIcon, Fluorine, Neon, Sodium, Magnesium, Aluminum, Silicon, Phosphorus, Sulfur, Chlorine, Argon, Potassium, Calcium, Scandium, Titanium, Vanadium, Chromium, Manganese, Iron, Cobalt, Nickel, Copper, Zinc, Gallium, Germanium, Arsenic, Selenium, Bromine, Krypton, Rubidium, Strontium, Yttrium, Zirconium, Niobium, Molybdenum, Technetium, Ruthenium, Rhodium, Palladium, Silver, Cadmium, Indium, Tin, Antimony, Tellurium, Iodine, Xenon, Cesium, Barium, Lanthanum, Cerium, Praseodymium, Neodymium, Promethium, Samarium, Europium, Gadolinium, Terbium, Dysprosium, Holmium, Erbium, Thulium, Ytterbium, Lutetium, Hafnium, Tantalum, Tungsten, Rhenium, Osmium, Iridium, Platinum, Gold, Mercury, Thallium, Lead, Bismuth, Polonium, Astatine, Radon, Francium, Radium, Actinium, Thorium, Protactinium, Uranium, Neptunium, Plutonium, Americium, Curium, Berkelium, Californium, Einsteinium, Fermium, Mendelevium, Nobelium, Lawrencium, Rutherfordium, Dubnium, Seaborgium, Bohrium, Hassium, Meitnerium, Darmstadtium, Roentgenium, Copernicium, Nihonium, Flerovium, Moscovium, Livermorium, Tennessine, Oganesson } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Live data visualization with instant updates and interactive dashboards for immediate insights.',
      benefits: ['Monitor KPIs in real-time', 'Make instant decisions', 'Track performance live']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms analyze your data to provide actionable insights and predictions.',
      benefits: ['Predict future trends', 'Identify opportunities', 'Automate reporting']
    },
    {
      icon: PieChart,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards with drag-and-drop widgets tailored to your business needs.',
      benefits: ['Customize your view', 'Focus on what matters', 'Improve productivity']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced forecasting models to predict sales, customer behavior, and market trends.',
      benefits: ['Forecast with 95% accuracy', 'Plan for the future', 'Reduce risks']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and monitor business goals with automated progress tracking and alerts.',
      benefits: ['Stay on track', 'Achieve objectives', 'Measure success']
    },
    {
      icon: Share2,
      title: 'Team Collaboration',
      description: 'Share insights and reports with your team through integrated collaboration tools.',
      benefits: ['Improve communication', 'Align teams', 'Share knowledge']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        'Mobile app',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 20 data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Up to 10 users',
        'Advanced reporting',
        'Data export'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Full AI suite',
        'White-label options',
        '24/7 support',
        'Custom integrations',
        'Unlimited users',
        'Advanced security',
        'Dedicated manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'DataCorp Solutions',
      role: 'CEO',
      content: 'The AI analytics dashboard has revolutionized how we make decisions. We can now see patterns we never noticed before and predict trends with incredible accuracy.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'GrowthTech',
      role: 'Data Analyst',
      content: 'The real-time analytics feature is game-changing. We can respond to market changes instantly and stay ahead of the competition.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'InnovateLabs',
      role: 'VP of Operations',
      content: 'The predictive analytics helped us increase revenue by 35% in just 6 months. The insights are incredibly accurate and actionable.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and custom reporting. Transform your data into actionable business intelligence." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting, data insights" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics-dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Analytics Dashboard
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform Your Data Into Actionable Business Intelligence
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
                Advanced AI-powered analytics platform that provides real-time insights, 
                predictive analytics, and custom dashboards. Make data-driven decisions 
                with 95% accuracy and increase business performance by 40%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  Get Free Demo
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-gray-300">Prediction Accuracy</div>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300">Performance Increase</div>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-gray-300">Data Sources</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Powerful Analytics Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Choose Your Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
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
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI analytics to make smarter decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPage;