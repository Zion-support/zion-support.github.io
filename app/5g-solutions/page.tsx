import React from 'react';;
import SEOHead from '../components/SEOHead';
import { Wifi, CheckCircle, Network, Cpu, Smartphone } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "5G Implementation",";
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.",";
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"],";
      price: "From $5,999",";
      marketPrice: "$12,999-49,999",";
      popular: true,
      icon: <Wifi className ="w-8 h-8" />,";
      benefits: "Deploy 5G networks 60% faster than industry average"",
    },
    {
      name: "5G Network Infrastructure",";
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",";
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"],";
      price: "From $4,999",";
      marketPrice: "$9,999-39,999",";
      popular: false,
      icon: <Network className ="w-8 h-8" />,";
      benefits: "Achieve 99.9% network uptime with our infrastructure"",
    },
    {
      name: "5G IoT Solutions",";
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.",";
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Edge computing", "Security protocols", "Scalable architecture"],";
      price: "From $3,999",";
      marketPrice: "$7,999-29,999",";
      popular: true,
      icon: <Cpu className ="w-8 h-8" />,";
      benefits: "Connect up to 1M devices per square kilometer"",
    },
    {
      name: "5G Mobile Solutions",";
      description: "Advanced mobile applications and services optimized for 5G networks.",";
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"],";
      price: "From $2,999",";
      marketPrice: "$5,999-19,999",";
      popular: false,
      icon: <Smartphone className ="w-8 h-8" />,";
      benefits: "Achieve sub-1ms latency for real-time applications"",
    }
  ];

  return (
    <>
      <SEOHead title ="5G Solutions - Zion Tech Group"";
        description="Comprehensive 5G network solutions including implementation, infrastructure, IoT connectivity, and mobile applications."";
        keywords="5G solutions, 5G implementation, 5G infrastructure, 5G IoT, 5G mobile, network deployment"";
      />
      
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";
        {/* Hero Section */}
        <div className ="relative overflow-hidden">";
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">";
            <div className ="text-center">";
              <h1 className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                5G Solutions
              </h1>
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",
                Transform your business with our comprehensive 5G solutions. From network implementation to IoT connectivity, we deliver cutting-edge 5G technology.
              </p>
              <div className ="flex flex-col sm: flex-row gap-4 justify-center">";
                <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
                  Get Started
                </button>
                <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">",
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className ="py-24">";
          <div className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
            <div className ="text-center mb-16">";
              <h2 className ="text-4xl font-bold mb-4">Our 5G Solutions</h2>";
              <p className ="text-xl text-gray-300">Comprehensive 5G services tailored to your business needs</p>";
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">",
              {solutions.map((solution, index) => (
                <div key ={index} className={`bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors relative ${solution.popular ? 'ring-2 ring-purple-400'  ''}`}>";
                  {solution.popular && (
                    <div className ="absolute -top-3 left-1/2 transform -translate-x-1/2">";
                      <span className ="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">";
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className ="text-blue-400 mb-4">{solution.icon}</div>";
                  <h3 className ="text-2xl font-semibold mb-2">{solution.name}</h3>";
                  <p className ="text-gray-300 mb-4">{solution.description}</p>";
                  
                  <div className ="mb-6">";
                    <div className ="flex items-baseline gap-2 mb-2">";
                      <span className ="text-3xl font-bold text-white">{solution.price}</span>";
                      <span className ="text-gray-400 line-through">{solution.marketPrice}</span>";
                    </div>
                    <p className ="text-sm text-green-400 font-semibold">{solution.benefits}</p>";
                  </div>
                  
                  <ul className ="space-y-2 mb-6">";
                    {solution.features.map((feature, featureIndex) => (
                      <li key ={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">";
                        <CheckCircle className ="w-4 h-4 text-green-400 flex-shrink-0" />";
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className ="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">",
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";
          <div className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";
            <h2 className ="text-4xl font-bold mb-4">Ready to Deploy 5G?</h2>";
            <p className ="text-xl text-gray-300 mb-8">";
              Contact our experts to discuss your 5G requirements and get a customized solution.
            </p>
            <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  ),
};

export default FiveGSolutionsPage;