import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Award, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Brain,
  Building,
  Server,
  Lightbulb
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  bestFor: string;
  color: string;
}

interface MarketAnalysis {
  category: string;
  ourPrice: number;
  marketPrice: string;
  savings: string;
  roi: string;
  competitiveAdvantage: string;
}

export function ComprehensivePricingComparison() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'emerging-technology', name: 'Emerging Technology', icon: Lightbulb, color: 'from-zion-purple to-zion-orange' },
    { id: 'industry-solutions', name: 'Industry Solutions', icon: Building, color: 'from-zion-blue to-zion-green' },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server, color: 'from-zion-cyan to-zion-blue' }
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$800 - $2,000",
      features: [
        "Core functionality",
        "Standard support",
        "Basic integrations",
        "Community forum access",
        "Documentation"
      ],
      bestFor: "Small businesses and startups",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      name: "Professional",
      price: "$2,000 - $5,000",
      features: [
        "Advanced features",
        "Priority support",
        "Custom integrations",
        "Dedicated account manager",
        "Training sessions"
      ],
      bestFor: "Growing companies and teams",
      color: "from-zion-purple to-zion-pink"
    },
    {
      name: "Enterprise",
      price: "$5,000 - $25,000",
      features: [
        "Full feature set",
        "24/7 dedicated support",
        "Custom development",
        "SLA guarantees",
        "On-site implementation"
      ],
      bestFor: "Large enterprises and organizations",
      color: "from-zion-orange to-zion-red"
    }
  ];

  const marketAnalysis: MarketAnalysis[] = [
    {
      category: "AI & Analytics",
      ourPrice: 1800,
      marketPrice: "$3,000 - $8,000",
      savings: "40-60%",
      roi: "200-400%",
      competitiveAdvantage: "Advanced AI models, real-time processing, custom training"
    },
    {
      category: "Cybersecurity",
      ourPrice: 3200,
      marketPrice: "$5,000 - $15,000",
      savings: "35-55%",
      roi: "300-500%",
      competitiveAdvantage: "AI-powered threat detection, zero-trust architecture, compliance automation"
    },
    {
      category: "Quantum Computing",
      ourPrice: 8000,
      marketPrice: "$15,000 - $50,000",
      savings: "45-70%",
      roi: "300-500%",
      competitiveAdvantage: "Hybrid classical-quantum workflows, quantum algorithms, research partnerships"
    },
    {
      category: "Emerging Technology",
      ourPrice: 4200,
      marketPrice: "$8,000 - $25,000",
      savings: "40-65%",
      competitiveAdvantage: "Cutting-edge research, early access to new technologies, expert consultation"
    },
    {
      category: "Industry Solutions",
      ourPrice: 3800,
      marketPrice: "$6,000 - $20,000",
      savings: "35-60%",
      roi: "250-400%",
      competitiveAdvantage: "Industry expertise, custom solutions, regulatory compliance"
    },
    {
      category: "IT Infrastructure",
      ourPrice: 2200,
      marketPrice: "$4,000 - $12,000",
      savings: "40-65%",
      roi: "200-350%",
      competitiveAdvantage: "Modern architecture, automation, scalability, cost optimization"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_MICRO_SAAS_SERVICES_2025
    : INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  const totalMarketValue = filteredServices.reduce((sum, service) => {
    const marketPrice = service.marketPrice.split(' - ')[1]?.replace(/[$,]/g, '') || '0';
    return sum + parseInt(marketPrice);
  }, 0);

  const totalOurPrice = filteredServices.reduce((sum, service) => sum + service.price, 0);
  const totalSavings = ((totalMarketValue - totalOurPrice) / totalMarketValue * 100).toFixed(0);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-responsive font-bold mb-6">
            <span className="text-gradient">Comprehensive Pricing</span>
            <br />
            <span className="text-white">& Market Analysis</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
            Discover how our innovative services provide exceptional value compared to market alternatives, 
            with transparent pricing and proven ROI across all technology categories.
          </p>
        </motion.div>

        {/* Category Selection */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Flexible Pricing Tiers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className="card-futuristic text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {tier.name === "Professional" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-purple to-zion-pink text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">{tier.name}</h4>
                <div className="text-3xl font-bold text-zion-cyan mb-6">{tier.price}</div>
                <div className="text-zion-slate-light mb-6">per month</div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-sm text-zion-slate-light mb-6">
                  <strong className="text-white">Best for:</strong> {tier.bestFor}
                </div>
                
                <button className="btn-futuristic w-full">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Analysis */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Market Analysis & Competitive Advantage
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketAnalysis.map((analysis, index) => (
              <motion.div
                key={analysis.category}
                className="card-futuristic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{analysis.category}</h4>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${analysis.ourPrice.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">Our Price</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-zion-slate-light/10 rounded-lg">
                    <div className="text-lg font-bold text-zion-green">{analysis.savings}</div>
                    <div className="text-sm text-zion-slate-light">Savings</div>
                  </div>
                  <div className="text-center p-3 bg-zion-slate-light/10 rounded-lg">
                    <div className="text-lg font-bold text-zion-purple">{analysis.roi}</div>
                    <div className="text-sm text-zion-slate-light">ROI</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-zion-slate-light mb-2">Market Price: <span className="text-white">{analysis.marketPrice}</span></div>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-zion-cyan mb-2">Competitive Advantage:</h5>
                  <p className="text-sm text-zion-slate-light">{analysis.competitiveAdvantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Statistics */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                {filteredServices.length}
              </div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">
                ${totalMarketValue.toLocaleString()}
              </div>
              <div className="text-zion-slate-light">Total Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-green mb-2">
                {totalSavings}%
              </div>
              <div className="text-zion-slate-light">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-orange mb-2">
                $2.5B+
              </div>
              <div className="text-zion-slate-light">Market Opportunity</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h4 className="text-2xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Proven ROI</h5>
                  <p className="text-sm text-zion-slate-light">Average 200-500% return on investment across all services</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-zion-purple mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Market Leadership</h5>
                  <p className="text-sm text-zion-slate-light">Cutting-edge technology solutions ahead of market trends</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-zion-green mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Cost Efficiency</h5>
                  <p className="text-sm text-zion-slate-light">40-70% cost savings compared to market alternatives</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}