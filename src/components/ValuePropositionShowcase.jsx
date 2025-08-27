import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Award, 
  Zap, 
  Shield, 
  Brain, 
  Rocket, 
  Globe,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';
const valueMetrics = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Average ROI",
    value: "350%",
    description: "Our customers see an average return on investment within 6-12 months",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Market Position",
    value: "Top 5%",
    description: "Competing with enterprise solutions at fraction of the cost",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Setup Time",
    value: "1-2 Weeks",
    description: "From contract to full implementation in record time",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Rating",
    value: "99.9%",
    description: "Enterprise-grade security with zero compromise",
    color: "from-red-500 to-pink-600"
  }
];
const competitiveAdvantages = [
  {
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms that continuously improve performance and provide predictive insights",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Cloud-Native Architecture",
    description: "Built for scale with automatic scaling, high availability, and global distribution",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Enterprise Integration",
    description: "Seamless integration with existing systems and workflows through comprehensive APIs",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "24/7 Expert Support",
    description: "Round-the-clock technical support from certified professionals and AI assistants",
    icon: <Users className="w-6 h-6" />,
    color: "from-orange-500 to-red-600"
  }
];
const marketComparison = [
  {
    category: "AI Business Intelligence",
    competitors: ["Tableau", "Power BI", "Looker"],
    competitorPricing: ["$70/user/month", "$9.99/user/month", "$30/user/month"],
    ourPricing: "$299/month",
    savings: "Up to 80%",
    advantage: "AI-powered insights, natural language queries, predictive analytics"
  },
  {
    category: "Customer Success Platform",
    competitors: ["Gainsight", "Totango", "ChurnZero"],
    competitorPricing: ["$500/user/month", "$500/user/month", "$500/user/month"],
    ourPricing: "$349/month",
    savings: "Up to 90%",
    advantage: "AI-powered predictions, affordable pricing, easy setup"
  },
  {
    category: "Zero-Trust Security",
    competitors: ["Palo Alto Networks", "CrowdStrike", "Zscaler"],
    competitorPricing: ["$50,000/year", "$100,000/year", "$50,000/year"],
    ourPricing: "$599/month",
    savings: "Up to 85%",
    advantage: "AI-powered detection, comprehensive zero-trust implementation"
  }
];
const successStories = [
  {
    company: "TechCorp Solutions",
    industry: "SaaS",
    challenge: "Manual customer onboarding taking 3+ weeks",
    solution: "AI Customer Success Hub",
    results: "Reduced onboarding time by 70%, increased customer satisfaction by 45%",
    roi: "280% in 8 months"
  },
  {
    company: "Global Manufacturing Inc",
    industry: "Manufacturing",
    challenge: "Inefficient supply chain causing 15% cost overruns",
    solution: "AI Supply Chain Optimizer",
    results: "Reduced costs by 22%, improved delivery times by 35%",
    roi: "320% in 12 months"
  },
  {
    company: "FinTech Innovations",
    industry: "Financial Services",
    challenge: "Manual financial reporting taking 40+ hours weekly",
    solution: "AI Financial Analyst Pro",
    results: "Automated 90% of reporting, improved accuracy by 99.5%",
    roi: "400% in 6 months"
  }
];
export function ValuePropositionShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unmatched Value & ROI
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Experience enterprise-grade solutions at micro SAAS prices. Our AI-powered services deliver 
            exceptional value with proven returns that transform your business operations.
          </p>
        </motion.div>
        {/* Value Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {valueMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white`}
                variants={cardVariants}
                whileHover={{ scale: 1.1 }}
              >
                {metric.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
              <h4 className="text-lg font-semibold text-zion-cyan mb-2">{metric.title}</h4>
              <p className="text-zion-cyan-light text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Competitive Advantages */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {advantage.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{advantage.title}</h4>
                <p className="text-zion-cyan-light">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Market Comparison */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competitive Pricing Analysis
          </h3>
          <div className="space-y-6">
            {marketComparison.map((comparison, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
                variants={cardVariants}
                whileHover={{ y: -3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-bold text-white mb-2">{comparison.category}</h4>
                    <div className="text-zion-cyan-light text-sm">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>Our Solution</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="text-zion-cyan-light text-sm mb-2">Competitors:</div>
                    <div className="space-y-1">
                      {comparison.competitors.map((competitor, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className="text-white">{competitor}</span>
                          <span className="text-zion-cyan-light">{comparison.competitorPricing[idx]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 text-center">
                    <div className="text-zion-cyan-light text-sm mb-1">Our Price:</div>
                    <div className="text-2xl font-bold text-zion-cyan">{comparison.ourPricing}</div>
                    <div className="text-green-400 text-sm font-medium">{comparison.savings} savings</div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="text-zion-cyan-light text-sm mb-2">Key Advantage:</div>
                    <p className="text-white text-sm">{comparison.advantage}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Success Stories */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Real Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-1">{story.company}</h4>
                  <span className="text-zion-cyan text-sm">{story.industry}</span>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-zion-cyan font-semibold mb-2">Challenge:</h5>
                  <p className="text-zion-cyan-light text-sm mb-3">{story.challenge}</p>
                  
                  <h5 className="text-zion-cyan font-semibold mb-2">Solution:</h5>
                  <p className="text-zion-cyan-light text-sm mb-3">{story.solution}</p>
                  
                  <h5 className="text-zion-cyan font-semibold mb-2">Results:</h5>
                  <p className="text-zion-cyan-light text-sm mb-3">{story.results}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-lg border border-green-500/30">
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">{story.roi}</div>
                    <div className="text-green-300 text-sm">Return on Investment</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 p-8 rounded-2xl border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Unmatched Value?
            </h3>
            <p className="text-zion-cyan-light mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already transforming their operations with our revolutionary services. 
              Get started today and see the difference AI-powered solutions can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Transformation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-zion-slate-dark text-zion-cyan px-8 py-3 rounded-lg font-medium border border-zion-cyan/30 hover:bg-zion-slate hover:border-zion-cyan/50 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-zion-cyan-light text-sm">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}