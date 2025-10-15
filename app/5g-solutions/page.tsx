
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, Cpu } from 'lucide-react';

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
      price: "From $8,999",
      marketPrice: "$15,999-59,999",
      popular: false,
      icon: <Zap className="w-8 h-8" />,
      benefits: "99.9% network uptime guarantee"
    },
    {
      name: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and IoT devices.",
      features: ["Edge server deployment", "Real-time processing", "IoT integration", "Data analytics", "Security protocols", "Scalable architecture"],
      price: "From $12,999",
      marketPrice: "$25,999-99,999",
      popular: true,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Sub-1ms latency for critical applications"
    },
    {
      name: "5G Security Solutions",
      description: "Comprehensive security framework for 5G networks and connected devices.",
      features: ["Network security", "Device authentication", "Data encryption", "Threat monitoring", "Compliance management", "Incident response"],
      price: "From $6,999",
      marketPrice: "$13,999-49,999",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      benefits: "Military-grade security for enterprise networks"
    },
    {
      name: "5G IoT Integration",
      description: "Seamless integration of IoT devices with 5G networks for smart city and industrial applications.",
      features: ["Device connectivity", "Data management", "Analytics platform", "Remote monitoring", "Predictive maintenance", "Custom dashboards"],
      price: "From $9,999",
      marketPrice: "$19,999-79,999",
      popular: false,
      icon: <Globe className="w-8 h-8" />,
      benefits: "Connect up to 1 million devices per square kilometer"
    },
    {
      name: "5G Performance Optimization",
      description: "Advanced optimization services to maximize 5G network performance and efficiency.",
      features: ["Network tuning", "Capacity planning", "Quality optimization", "Interference management", "Coverage analysis", "Performance reporting"],
      price: "From $4,999",
      marketPrice: "$9,999-29,999",
      popular: false,
      icon: <Zap className="w-8 h-8" />,
      benefits: "Increase network efficiency by up to 40%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, edge computing, security, and IoT integration. Transform your business with cutting-edge 5G technology." />
        <meta name="keywords" content="5G solutions, 5G implementation, edge computing, IoT integration, network security, 5G infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our comprehensive 5G solutions. From network implementation to edge computing, we deliver cutting-edge technology that drives innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${solution.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {solution.price}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      {solution.marketPrice}
                    </div>
                    <div className="text-sm text-green-600 font-medium mt-1">
                      {solution.benefits}
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business with 5G?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our 5G experts to discuss your specific requirements and get a customized solution that fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;