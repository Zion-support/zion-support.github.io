import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, BarChart3, Shield, Zap, Star, CheckCircle, AlertTriangle, Clock, Users, ArrowRight, Sparkles, Brain, Settings, TrendingUp, Activity } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AiPredictiveMaintenancePage = () => {
  const features = [
    {
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms predict equipment failures before they occur, reducing downtime and maintenance costs",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of equipment health with IoT sensors and real-time data analysis",
      icon: <Activity className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Maintenance Scheduling",
      description: "Intelligent scheduling of maintenance activities based on predicted failure risks and operational requirements",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cost Optimization",
      description: "Optimize maintenance costs by balancing preventive and corrective maintenance strategies",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Predict equipment failures in production lines, reduce unplanned downtime, and optimize maintenance schedules",
      icon: <Settings className="w-6 h-6" />,
      savings: "Up to 40% reduction in maintenance costs"
    },
    {
      title: "Transportation",
      description: "Monitor vehicle health, predict component failures, and optimize fleet maintenance operations",
      icon: <Activity className="w-6 h-6" />,
      savings: "Up to 35% reduction in breakdowns"
    },
    {
      title: "Energy & Utilities",
      description: "Predict power plant equipment failures, optimize grid maintenance, and ensure reliable energy delivery",
      icon: <Zap className="w-6 h-6" />,
      savings: "Up to 50% reduction in outages"
    },
    {
      title: "Healthcare",
      description: "Monitor medical equipment health, predict failures, and ensure patient safety through proactive maintenance",
      icon: <Shield className="w-6 h-6" />,
      savings: "Up to 30% reduction in equipment downtime"
    }
  ];

  const stats = [
    { number: "40%", label: "Average Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Reduction in Unplanned Downtime", icon: <Clock className="w-6 h-6" /> },
    { number: "500+", label: "Equipment Assets Monitored", icon: <Wrench className="w-6 h-6" /> },
    { number: "99.5%", label: "Prediction Accuracy", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Predictive Maintenance - Intelligent Equipment Monitoring & Maintenance | Zion Tech Group"
        description="Advanced AI-powered predictive maintenance solutions that predict equipment failures, reduce downtime, and optimize maintenance costs across industries."
        keywords="predictive maintenance, AI maintenance, equipment monitoring, maintenance optimization, IoT sensors, machine learning, maintenance scheduling, cost reduction"
        canonical="https://ziontechgroup.com/ai-predictive-maintenance"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">AI-Powered Predictive Maintenance</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
              AI Predictive Maintenance
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your maintenance operations with AI-powered predictions that prevent equipment failures, 
            reduce downtime, and optimize maintenance costs across your entire organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#contact"
              variant="primary"
              size="lg"
              icon={<Wrench className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Maintenance Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI-powered platform provides comprehensive predictive maintenance capabilities that help you 
              prevent failures, optimize costs, and improve operational efficiency.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }}>
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="orange"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our predictive maintenance solutions are tailored to meet the unique needs of different industries 
              and equipment types.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }} className="max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="orange"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="text-orange-400 font-semibold text-sm">
                    {industry.savings}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Maintenance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your predictive maintenance needs and discover how AI can 
              help you reduce costs, prevent failures, and optimize your maintenance operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Free Consultation
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                size="lg"
                icon={<Wrench className="w-5 h-5" />}
              >
                Call Now
              </FuturisticButton>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Get in touch with our maintenance experts</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300 transition-colors">
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AiPredictiveMaintenancePage;