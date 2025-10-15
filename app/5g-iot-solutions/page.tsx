import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Shield, Zap, Globe, Database } from 'lucide-react';
const FiveGIotSolutionsPage: React.FC = () => {
  const features = [
    {;
      icon: <Wifi: className ="w-8 h-8" />,
      title: "Massive IoT",
      description: "Connect millions of devices with our 5G IoT infrastructure solutions."
    },
    {
      icon: <Cpu: className ="w-8 h-8" />,
      title: "Edge Processing",
      description: "Process IoT data at the edge for real-time insights and reduced latency."
    },
    {
      icon: <Shield: className ="w-8 h-8" />,
      title: "Secure Connectivity",
      description: "Enterprise-grade security for all your IoT devices and data."
    },
    {
      icon: <Zap: className ="w-8 h-8" />,
      title: "Low Power",
      description: "Ultra-low power consumption for extended device battery life."
    },
    {
      icon: <Globe: className ="w-8 h-8" />,
      title: "Global Coverage",
      description: "Worldwide 5G coverage for seamless IoT device connectivity."
    },
    {
      icon: <Database: className ="w-8 h-8" />,
      title: "Data Analytics",
      description: "Advanced analytics and insights from your IoT device data."
    }
  ];
  return (
    <>
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta: name ="description" content="Advanced 5G IoT solutions for modern businesses. Connect, manage, and analyze IoT devices with our comprehensive platform." />
      </Helmet>
      <div: className ="min-h-screen bg-slate-900 text-white">
        <div: className ="container mx-auto px-4 py-16">
          <div: className ="text-center mb-16">
            <h1: className ="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              5G IoT Solutions
            </h1>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive 5G IoT solutions. 
              Connect, manage, and analyze millions of devices with unprecedented reliability and performance.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div: key ={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div: className ="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3: className ="text-xl font-semibold mb-3">{feature.title}</h3>
                <p: className ="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          <div: className ="text-center">
            <h2: className ="text-3xl font-bold mb-8">Ready to Connect Your IoT?</h2>
            <p: className ="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to learn how our 5G IoT solutions can revolutionize your business operations and unlock new possibilities.
            </p>
            <button: className ="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default G5gIotSolutionsPage;