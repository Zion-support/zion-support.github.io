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
      benefits: "Achieve sub-1ms latency for real-time applications"
    },
    {
      name: "5G Data Analytics",
      description: "Advanced analytics platform for 5G network performance and user behavior insights.",
      features: ["Real-time analytics", "Predictive modeling", "Performance metrics", "User insights", "Network optimization", "Custom dashboards"],
      price: "From $1,999",
      marketPrice: "$3,999-14,999",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Improve network efficiency by 40% with data-driven insights"
    },
    {
      name: "5G Edge Computing",
      description: "Edge computing solutions that bring processing power closer to 5G users and devices.",
      features: ["Edge servers", "Local processing", "Reduced latency", "Bandwidth optimization", "Security protocols", "Scalable deployment"],
      price: "From $3,499",
      marketPrice: "$6,999-24,999",
      popular: true,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Reduce latency by 80% with edge computing"
    }
  ];

  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Ultra-Fast Speeds",
      description: "Experience speeds up to 10 Gbps with our 5G solutions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Low Latency",
      description: "Achieve sub-millisecond latency for real-time applications"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security protocols for all 5G implementations"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee with comprehensive monitoring"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, IoT connectivity, and mobile applications. Transform your business with cutting-edge 5G technology." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                5G Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with cutting-edge 5G technology. From network implementation 
                to IoT solutions, we deliver the future of connectivity today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">
                  <span className="text-blue-400 font-semibold">Up to 10 Gbps</span>
                </div>
                <div className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">
                  <span className="text-purple-400 font-semibold">Sub-1ms Latency</span>
                </div>
                <div className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">
                  <span className="text-green-400 font-semibold">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our 5G Solutions?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our 5G solutions are designed to deliver unmatched performance, reliability, and scalability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our 5G Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of 5G solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`p-8 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  solution.popular 
                    ? 'border-blue-500 bg-blue-900/20' 
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-blue-400">
                      {solution.icon}
                    </div>
                    {solution.popular && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-400">{solution.price}</span>
                      <span className="text-gray-400 line-through">{solution.marketPrice}</span>
                    </div>
                    <p className="text-green-400 text-sm font-semibold">{solution.benefits}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with 5G?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the 5G revolution and unlock new possibilities for your business. 
              Our experts are ready to help you implement the perfect 5G solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;