
import { Helmet } from 'react-helmet-async';
import { Wifi, CheckCircle, ArrowRight, Network, Cpu } from 'lucide-react';

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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G network implementation, infrastructure, and IoT solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              5G Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge 5G technology. Our comprehensive solutions deliver ultra-fast connectivity, low latency, and massive device connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="text-cyan-400">
                  {solution.icon}
                </div>
                {solution.popular && (
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{solution.name}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-white">{solution.price}</span>
                  <span className="text-gray-400 line-through">{solution.marketPrice}</span>
                </div>
                <p className="text-cyan-400 text-sm font-medium">{solution.benefits}</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutionsPage;
