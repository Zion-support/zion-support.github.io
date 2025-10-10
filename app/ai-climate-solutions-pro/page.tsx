'use client';
import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Wind, 
  Sun, 
  Droplets, 
  TreePine, 
  Recycle, 
  Zap, 
  BarChart, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Globe,
  Cpu,
  Database,
  FileText,
  Smartphone,
  Mail,
  MapPin,
  Phone,
  Thermometer,
  CloudRain,
  Mountain,
  Waves
} from 'lucide-react';

const AIClimateSolutionsProPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const solutions = [
    {
      icon: Wind,
      title: 'AI-Powered Wind Energy Optimization',
      description: 'Maximize wind farm efficiency with predictive analytics and smart grid integration',
      features: [
        'Predictive wind pattern analysis',
        'Turbine performance optimization',
        'Grid integration management',
        'Maintenance scheduling',
        'Energy storage optimization',
        'Real-time monitoring'
      ],
      impact: '35% increase in energy output',
      pricing: 'Starting at $15,000/month',
      category: 'Renewable Energy'
    },
    {
      icon: Sun,
      title: 'Solar Panel AI Management System',
      description: 'Intelligent solar panel monitoring and optimization for maximum efficiency',
      features: [
        'Panel performance tracking',
        'Shading analysis',
        'Cleaning optimization',
        'Fault detection',
        'Energy forecasting',
        'ROI optimization'
      ],
      impact: '28% improvement in efficiency',
      pricing: 'Starting at $8,000/month',
      category: 'Solar Technology'
    },
    {
      icon: TreePine,
      title: 'Carbon Footprint AI Tracker',
      description: 'Comprehensive carbon tracking and reduction strategies for businesses',
      features: [
        'Real-time carbon monitoring',
        'Emission source identification',
        'Reduction recommendations',
        'Compliance reporting',
        'Offset tracking',
        'Sustainability scoring'
      ],
      impact: '45% reduction in carbon footprint',
      pricing: 'Starting at $5,000/month',
      category: 'Carbon Management'
    },
    {
      icon: Droplets,
      title: 'Smart Water Management AI',
      description: 'Intelligent water usage optimization and conservation systems',
      features: [
        'Water usage analytics',
        'Leak detection',
        'Conservation recommendations',
        'Quality monitoring',
        'Predictive maintenance',
        'Cost optimization'
      ],
      impact: '40% reduction in water usage',
      pricing: 'Starting at $6,000/month',
      category: 'Water Conservation'
    },
    {
      icon: Recycle,
      title: 'Waste Management AI Platform',
      description: 'Smart waste sorting, recycling optimization, and circular economy solutions',
      features: [
        'Automated waste sorting',
        'Recycling optimization',
        'Waste reduction strategies',
        'Circular economy tracking',
        'Compliance monitoring',
        'Cost analysis'
      ],
      impact: '60% increase in recycling rates',
      pricing: 'Starting at $7,000/month',
      category: 'Waste Management'
    },
    {
      icon: Thermometer,
      title: 'Climate Risk Assessment AI',
      description: 'Advanced climate risk analysis and adaptation strategies for businesses',
      features: [
        'Climate risk modeling',
        'Vulnerability assessment',
        'Adaptation planning',
        'Insurance optimization',
        'Scenario analysis',
        'Regulatory compliance'
      ],
      impact: '50% better risk mitigation',
      pricing: 'Starting at $12,000/month',
      category: 'Risk Management'
    }
  ];

  const pricingPlans = [
    {
      name: 'Climate Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses starting their sustainability journey',
      features: [
        'Basic carbon tracking',
        'Energy monitoring',
        'Simple reporting',
        'Email support',
        'Up to 5 locations',
        'Monthly sustainability reports'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Climate Professional',
      price: '$7,500',
      period: '/month',
      description: 'Comprehensive solution for medium-sized enterprises',
      features: [
        'Advanced AI analytics',
        'Multi-location monitoring',
        'Custom reporting',
        'Priority support',
        'API integration',
        'Up to 25 locations',
        'Real-time alerts',
        'Compliance tracking'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Climate Enterprise',
      price: '$25,000',
      period: '/month',
      description: 'Complete climate solution for large corporations',
      features: [
        'Full AI suite access',
        'Unlimited locations',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label options',
        'On-premise deployment',
        'SLA guarantee',
        'Training & consulting',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: BarChart,
      title: 'Measurable Impact',
      description: 'Track and measure your environmental impact with precise AI analytics',
      stat: '85% of clients see measurable improvements within 3 months'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Stay ahead of environmental regulations with automated compliance monitoring',
      stat: '100% compliance rate across all environmental standards'
    },
    {
      icon: Zap,
      title: 'Cost Savings',
      description: 'Reduce operational costs while improving environmental performance',
      stat: 'Average 30% reduction in environmental costs'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Contribute to global climate goals with data-driven sustainability strategies',
      stat: 'Over 1M tons of CO2 reduced by our clients'
    }
  ];

  const caseStudies = [
    {
      company: 'GreenTech Manufacturing',
      industry: 'Manufacturing',
      challenge: 'High energy consumption and carbon emissions',
      solution: 'Implemented AI-powered energy optimization and carbon tracking',
      results: ['40% reduction in energy costs', '60% decrease in carbon emissions', 'ROI of 300% in 18 months'],
      image: '/images/case-studies/greentech.jpg'
    },
    {
      company: 'EcoRetail Chain',
      industry: 'Retail',
      challenge: 'Waste management and sustainability compliance',
      solution: 'Deployed smart waste management and recycling optimization AI',
      results: ['70% increase in recycling rates', '50% reduction in waste costs', 'Full compliance with regulations'],
      image: '/images/case-studies/ecoretail.jpg'
    },
    {
      company: 'Sustainable Energy Corp',
      industry: 'Energy',
      challenge: 'Optimizing renewable energy production',
      solution: 'AI-powered wind and solar optimization systems',
      results: ['35% increase in energy output', '25% reduction in maintenance costs', '99.5% uptime'],
      image: '/images/case-studies/sustainable-energy.jpg'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-medium">AI Climate Solutions Pro</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"> AI Climate Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of AI to combat climate change, optimize sustainability, and build a greener future. 
              Our comprehensive climate solutions help businesses reduce their environmental impact while improving profitability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Wind className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Renewable Energy AI</span>
              </div>
              <div className="flex items-center space-x-2 bg-teal-500/20 px-4 py-2 rounded-lg">
                <Recycle className="w-5 h-5 text-teal-400" />
                <span className="text-white font-medium">Waste Management</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-500/20 px-4 py-2 rounded-lg">
                <BarChart className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">Carbon Tracking</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-bold hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-105 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-bold hover:bg-green-400 hover:text-white transition-all inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Climate Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered climate solutions cover every aspect of environmental sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="text-sm text-green-400 font-medium">{solution.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-green-400">{solution.impact}</div>
                  <div className="text-sm text-gray-400">{solution.pricing}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Climate Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and measurable impact for businesses committed to sustainability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Climate Impact Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your sustainability goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700' 
                    : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from companies that have transformed their environmental impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-green-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make a Climate Impact?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join the fight against climate change with AI-powered solutions that deliver measurable results. 
            Start your sustainability transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-green-100">
            <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
            <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIClimateSolutionsProPage;