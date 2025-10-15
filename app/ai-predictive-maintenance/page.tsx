import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wrench, 
  AlertTriangle, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  DollarSign,
  Shield,
  Zap,
  TrendingUp,
  Settings
} from 'lucide-react';

const AiPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "AI algorithms analyze equipment data to predict failures before they occur"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Early Warning System",
      description: "Real-time alerts and notifications when equipment shows signs of potential failure"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Maintenance Scheduling",
      description: "Intelligent scheduling of maintenance tasks based on predicted failure timelines"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Continuous optimization of equipment performance and efficiency"
    }
  ];

  const solutions = [
    {
      title: "Manufacturing Equipment",
      description: "Predictive maintenance for industrial machinery, production lines, and manufacturing equipment",
      price: "From $299/month",
      features: ["Vibration analysis", "Temperature monitoring", "Oil analysis", "Performance tracking"],
      benefits: ["30% reduction in downtime", "25% cost savings", "Improved safety", "Extended equipment life"]
    },
    {
      title: "Fleet Management",
      description: "AI-powered maintenance for vehicles, trucks, and transportation fleets",
      price: "From $199/month",
      features: ["Engine diagnostics", "Tire monitoring", "Fuel efficiency", "Driver behavior analysis"],
      benefits: ["40% fewer breakdowns", "20% fuel savings", "Reduced maintenance costs", "Better safety records"]
    },
    {
      title: "Building Systems",
      description: "Smart maintenance for HVAC, electrical, and building infrastructure systems",
      price: "From $149/month",
      features: ["HVAC monitoring", "Electrical load analysis", "Water system tracking", "Energy optimization"],
      benefits: ["35% energy savings", "Reduced utility costs", "Improved comfort", "Extended system life"]
    },
    {
      title: "Data Center Infrastructure",
      description: "Predictive maintenance for servers, cooling systems, and data center equipment",
      price: "From $399/month",
      features: ["Server health monitoring", "Cooling system analysis", "Power usage tracking", "Network performance"],
      benefits: ["99.9% uptime", "Reduced cooling costs", "Prevented data loss", "Optimized performance"]
    },
    {
      title: "Renewable Energy",
      description: "Maintenance optimization for solar panels, wind turbines, and renewable energy systems",
      price: "From $249/month",
      features: ["Panel efficiency tracking", "Turbine performance", "Weather correlation", "Output optimization"],
      benefits: ["15% increased output", "Reduced maintenance", "Better ROI", "Environmental benefits"]
    },
    {
      title: "Healthcare Equipment",
      description: "Predictive maintenance for medical devices, imaging equipment, and hospital systems",
      price: "From $349/month",
      features: ["Device monitoring", "Calibration tracking", "Usage analytics", "Compliance reporting"],
      benefits: ["Improved patient care", "Reduced downtime", "Compliance assurance", "Cost optimization"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Reduce maintenance costs by up to 40% through predictive scheduling and optimization"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Minimize Downtime",
      description: "Prevent unexpected failures and reduce unplanned downtime by up to 50%"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Safety",
      description: "Improve workplace safety by identifying potential hazards before they cause accidents"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Increased Efficiency",
      description: "Optimize equipment performance and extend asset lifespan through intelligent maintenance"
    }
  ];

  const industries = [
    "Manufacturing", "Transportation", "Healthcare", "Energy",
    "Data Centers", "Construction", "Mining", "Agriculture",
    "Aviation", "Maritime", "Oil & Gas", "Utilities"
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group | Smart Maintenance Solutions</title>
        <meta name="description" content="Revolutionary AI-powered predictive maintenance solutions for manufacturing, fleet management, buildings, and more. Reduce costs by 40% and downtime by 50%." />
        <meta name="keywords" content="predictive maintenance, ai maintenance, equipment monitoring, fleet management, manufacturing, iot sensors, machine learning" />
        <meta property="og:title" content="AI Predictive Maintenance - Zion Tech Group" />
        <meta property="og:description" content="Smart maintenance solutions powered by AI" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Predictive Maintenance</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your maintenance operations with AI-powered predictive analytics. 
                Prevent failures before they happen and optimize equipment performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced AI Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our predictive maintenance platform uses cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored predictive maintenance solutions for every industry
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Proven Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{solution.price}</span>
                    </div>
                    <p className="text-sm text-gray-400">Starting price • ROI typically 3-6 months</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI Predictive Maintenance?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative benefits of intelligent maintenance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are used across diverse industries worldwide
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven ROI & Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our clients see measurable results within months
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-cyan-400 mb-4">40%</div>
                <div className="text-xl text-white mb-2">Cost Reduction</div>
                <div className="text-gray-300">Average maintenance cost savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-cyan-400 mb-4">50%</div>
                <div className="text-xl text-white mb-2">Downtime Reduction</div>
                <div className="text-gray-300">Fewer unplanned equipment failures</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl font-bold text-cyan-400 mb-4">25%</div>
                <div className="text-xl text-white mb-2">Extended Life</div>
                <div className="text-gray-300">Equipment lifespan improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your maintenance needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10 assets
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic predictive analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email alerts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Standard reporting
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/40 ring-2 ring-cyan-500/20 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 50 assets
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time alerts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited assets
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Full AI capabilities
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    SLA guarantee
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Maintenance Operations?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join industry leaders who have reduced costs by 40% and downtime by 50% with our 
                AI-powered predictive maintenance solutions. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPredictiveMaintenancePage;