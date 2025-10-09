'use client';

import React, { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Star, 
  CheckCircle, 
  Play, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  BarChart,
  Cpu,
  Globe,
  Lock,
  Database,
  Smartphone,
  Code,
  MessageSquare,
  Eye,
  Settings,
  Wifi,
  Server,
  HardDrive,
  FileText,
  PieChart,
  Activity,
  Lightning,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Headphones,
  Monitor,
  Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headset,
  Gamepad2,
  Network,
  Security,
  Data,
  Analytics,
  Growth,
  Team,
  Achievement,
  Rating,
  Time,
  Goal,
  Success,
  Next,
  Start,
  Magic,
  Call,
  Email,
  Location,
  DollarSign,
  Calendar,
  CheckCircle as Check
} from 'lucide-react';

// Pricing Plans Data
const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with AI',
    price: '$2,999',
    period: '/month',
    popular: false,
    features: [
      'Up to 3 AI services',
      'Basic machine learning models',
      'Email support',
      'Standard integrations',
      'Basic analytics dashboard',
      '5 team members',
      'Monthly reporting',
      '99.9% uptime guarantee'
    ],
    limitations: [
      'Limited to 3 concurrent projects',
      'Basic AI models only',
      'Standard support hours'
    ],
    cta: 'Start Free Trial',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses with advanced AI needs',
    price: '$7,999',
    period: '/month',
    popular: true,
    features: [
      'Up to 10 AI services',
      'Advanced AI models & custom training',
      'Priority support (24/7)',
      'All integrations & APIs',
      'Advanced analytics & reporting',
      'Unlimited team members',
      'Custom workflows',
      '99.99% uptime guarantee',
      'Dedicated account manager',
      'Monthly strategy sessions'
    ],
    limitations: [
      'Up to 10 concurrent projects',
      'Standard custom model training'
    ],
    cta: 'Start Free Trial',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex AI requirements',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'Unlimited AI services',
      'Custom AI model development',
      'Dedicated support team',
      'Custom integrations',
      'Enterprise analytics & BI',
      'Unlimited everything',
      'White-label solutions',
      '99.999% uptime SLA',
      'Dedicated infrastructure',
      'Weekly strategy sessions',
      'Custom security compliance',
      'On-site training & support'
    ],
    limitations: [],
    cta: 'Contact Sales',
    color: 'from-purple-500 to-pink-600'
  }
];

// Micro SAAS Pricing
const microSaasPricing = [
  {
    name: 'AI Project Manager Pro',
    price: '$299',
    period: '/month',
    features: ['AI-powered scheduling', 'Resource optimization', 'Risk prediction', 'Real-time analytics'],
    popular: true
  },
  {
    name: 'AI Social Media Manager',
    price: '$199',
    period: '/month',
    features: ['AI content generation', 'Optimal posting times', 'Multi-platform management', 'Engagement analytics'],
    popular: true
  },
  {
    name: 'AI Analytics Dashboard',
    price: '$399',
    period: '/month',
    features: ['AI-powered insights', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
    popular: false
  },
  {
    name: 'AI Email Marketing Suite',
    price: '$149',
    period: '/month',
    features: ['AI personalization', 'A/B testing', 'Campaign optimization', 'Advanced segmentation'],
    popular: true
  },
  {
    name: 'AI Customer Support Bot',
    price: '$249',
    period: '/month',
    features: ['24/7 automated support', 'Natural language processing', 'Human handoff', 'Multi-language support'],
    popular: true
  },
  {
    name: 'AI Code Review Assistant',
    price: '$179',
    period: '/month',
    features: ['Automated code analysis', 'Security scanning', 'Performance optimization', 'Best practices'],
    popular: false
  }
];

// IT Services Pricing
const itServicesPricing = [
  {
    name: 'Cloud Infrastructure',
    price: 'Starting at $2,999',
    period: '/month',
    features: ['Multi-cloud migration', 'Infrastructure as Code', 'Auto-scaling', '99.9% uptime'],
    popular: true
  },
  {
    name: 'Cybersecurity Suite',
    price: 'Starting at $1,999',
    period: '/month',
    features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Compliance management'],
    popular: true
  },
  {
    name: 'DevOps Automation',
    price: 'Starting at $1,499',
    period: '/month',
    features: ['CI/CD pipeline', 'Automated testing', 'Infrastructure automation', 'Monitoring setup'],
    popular: false
  },
  {
    name: 'Database Management',
    price: 'Starting at $999',
    period: '/month',
    features: ['Performance tuning', 'Automated backups', 'Data migration', '24/7 monitoring'],
    popular: false
  },
  {
    name: 'Managed IT Services',
    price: 'Starting at $1,799',
    period: '/month',
    features: ['24/7 help desk', 'Proactive monitoring', 'Patch management', 'Security monitoring'],
    popular: true
  },
  {
    name: 'IT Consulting',
    price: '$300',
    period: '/hour',
    features: ['IT strategy planning', 'Technology assessment', 'Digital transformation', 'Vendor selection'],
    popular: false
  }
];

// Pricing Card Component
const PricingCard = memo(({ plan, isMicroSaas = false, isITService = false }: { plan: any; isMicroSaas?: boolean; isITService?: boolean }) => (
  <div className={`cyber-card p-8 h-full relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
      <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
      <div className="flex items-baseline justify-center">
        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
        <span className="text-gray-400 ml-1">{plan.period}</span>
      </div>
    </div>
    
    <div className="space-y-4 mb-8">
      {plan.features.map((feature: string, index: number) => (
        <div key={index} className="flex items-center text-sm text-gray-300">
          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
          {feature}
        </div>
      ))}
    </div>

    {plan.limitations && plan.limitations.length > 0 && (
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-yellow-400 mb-3">Limitations:</h4>
        <div className="space-y-2">
          {plan.limitations.map((limitation: string, index: number) => (
            <div key={index} className="flex items-center text-sm text-gray-400">
              <div className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></div>
              {limitation}
            </div>
          ))}
        </div>
      </div>
    )}
    
    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
      plan.popular 
        ? `bg-gradient-to-r ${plan.color} text-white hover:opacity-90`
        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
    }`}>
      {plan.cta}
    </button>
  </div>
));

// Pricing Toggle Component
const PricingToggle = memo(({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: (value: boolean) => void }) => (
  <div className="flex items-center justify-center mb-12">
    <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
    <button
      onClick={() => setIsAnnual(!isAnnual)}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isAnnual ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
    <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
      Annual <span className="text-green-400 text-sm">(Save 20%)</span>
    </span>
  </div>
));

// ROI Calculator Component
const ROICalculator = memo(() => {
  const [inputs, setInputs] = useState({
    currentRevenue: 1000000,
    currentCosts: 800000,
    expectedEfficiency: 30,
    implementationCost: 50000
  });

  const calculateROI = () => {
    const currentProfit = inputs.currentRevenue - inputs.currentCosts;
    const efficiencyGain = inputs.currentCosts * (inputs.expectedEfficiency / 100);
    const newCosts = inputs.currentCosts - efficiencyGain;
    const newProfit = inputs.currentRevenue - newCosts;
    const profitIncrease = newProfit - currentProfit;
    const roi = ((profitIncrease - inputs.implementationCost) / inputs.implementationCost) * 100;
    
    return {
      currentProfit: Math.round(currentProfit),
      newProfit: Math.round(newProfit),
      profitIncrease: Math.round(profitIncrease),
      roi: Math.round(roi),
      paybackPeriod: Math.round(inputs.implementationCost / (profitIncrease / 12))
    };
  };

  const results = calculateROI();

  return (
    <div className="cyber-card p-8">
      <h3 className="text-2xl font-bold text-white mb-6 cyber-text">
        <span className="holographic-text">ROI Calculator</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Current Annual Revenue
            </label>
            <input
              type="number"
              value={inputs.currentRevenue}
              onChange={(e) => setInputs({...inputs, currentRevenue: Number(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Current Annual Costs
            </label>
            <input
              type="number"
              value={inputs.currentCosts}
              onChange={(e) => setInputs({...inputs, currentCosts: Number(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Expected Efficiency Gain (%)
            </label>
            <input
              type="number"
              value={inputs.expectedEfficiency}
              onChange={(e) => setInputs({...inputs, expectedEfficiency: Number(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Implementation Cost
            </label>
            <input
              type="number"
              value={inputs.implementationCost}
              onChange={(e) => setInputs({...inputs, implementationCost: Number(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="cyber-card p-6">
            <h4 className="text-lg font-semibold text-cyan-400 mb-4">Projected Results</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Current Profit:</span>
                <span className="text-white font-semibold">${results.currentProfit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">New Profit:</span>
                <span className="text-green-400 font-semibold">${results.newProfit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Profit Increase:</span>
                <span className="text-cyan-400 font-semibold">${results.profitIncrease.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">ROI:</span>
                <span className="text-yellow-400 font-semibold">{results.roi}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Payback Period:</span>
                <span className="text-purple-400 font-semibold">{results.paybackPeriod} months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Main Pricing Page Component
export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeTab, setActiveTab] = useState('ai-services');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pricing - Zion Tech Group',
    description: 'Transparent pricing for AI services, IT solutions, and micro SAAS tools',
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com'
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Services Pricing Plans</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the plan that fits your business needs with free trials available."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, enterprise pricing, business solutions cost"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 cyber-grid neural-network-bg overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 cyber-text">
              <span className="holographic-text neon-pulse">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transparent pricing for AI services, IT solutions, and micro SAAS tools. 
              Choose the plan that fits your business needs.
            </p>
          </div>
        </section>

        {/* Pricing Tabs */}
        <section className="py-12 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'ai-services', label: 'AI Services', icon: Brain },
                { id: 'it-services', label: 'IT Services', icon: Cloud },
                { id: 'micro-saas', label: 'Micro SAAS', icon: Zap }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {activeTab === 'ai-services' && (
              <>
                <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {pricingPlans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                  ))}
                </div>
              </>
            )}

            {activeTab === 'it-services' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {itServicesPricing.map((service, index) => (
                  <PricingCard key={index} plan={service} isITService={true} />
                ))}
              </div>
            )}

            {activeTab === 'micro-saas' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {microSaasPricing.map((service, index) => (
                  <PricingCard key={index} plan={service} isMicroSaas={true} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ROICalculator />
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
              <span className="holographic-text">Need a Custom Quote?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Every business is unique. Contact us for a personalized quote tailored to your specific needs and requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Call (302) 464-0950
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Email kleber@ziontechgroup.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}