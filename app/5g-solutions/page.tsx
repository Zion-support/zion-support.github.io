
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3 } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "5G Implementation",
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.",
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"],
      price: "From $5,999",
      marketPrice: "$12,999-49,999",
      popular: true,
      icon: <Wifi className="w-8 h-8" />,
      benefits: "Deploy 5G networks 60% faster than industry average"
    },
    {
      name: "5G Network Infrastructure",
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"],
      price: "From $4,999",
      marketPrice: "$9,999-39,999",
      popular: false,
      icon: <Network className="w-8 h-8" />,
      benefits: "Achieve 99.9% network uptime with our infrastructure"
    },
    {
      name: "5G IoT Solutions",
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.",
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Edge computing", "Security protocols", "Scalable architecture"],
      price: "From $3,999",
      marketPrice: "$7,999-29,999",
      popular: true,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Connect up to 1M devices per square kilometer"
    },
    {
      name: "5G Mobile Solutions",
      description: "Advanced mobile applications and services optimized for 5G networks.",
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"],
      price: "From $2,999",
      marketPrice: "$5,999-19,999",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
      benefits: "Deliver ultra-low latency mobile experiences"
    },
    {
      name: "5G Data Analytics",
      description: "Advanced analytics platform for 5G network performance and user behavior insights.",
      features: ["Real-time monitoring", "Predictive analytics", "Network optimization", "User insights", "Performance metrics", "Custom dashboards"],
      price: "From $1,999",
      marketPrice: "$3,999-14,999",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Optimize network performance with AI-driven insights"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, infrastructure, IoT connectivity, and mobile applications." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Advanced 5G Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology. Our comprehensive solutions 
              deliver ultra-fast connectivity, low latency, and massive device support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  solution.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {solution.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="text-purple-400 mb-4">
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-white">{solution.price}</span>
                    <span className="text-gray-400 line-through">{solution.marketPrice}</span>
                  </div>
                  <p className="text-green-400 text-sm font-medium">
                    {solution.benefits}
                  </p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Our 5G Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ultra-Low Latency</h3>
                <p className="text-gray-300">Sub-millisecond response times for real-time applications</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade encryption and security protocols</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Massive Connectivity</h3>
                <p className="text-gray-300">Support for millions of devices per square kilometer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;