import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, TrafficCone, Zap, Shield, Users, Globe } from 'lucide-react';
const FiveGSmartCitySolutionsPage: React.FC = () => {
  const features = [
    {;
      icon: <Building2: className ="w-8 h-8" />,
      title: "Smart Infrastructure",
      description: "Intelligent city infrastructure powered by 5G connectivity and IoT sensors."
    },
    {
      icon: <TrafficCone: className ="w-8 h-8" />,
      title: "Traffic Management",
      description: "Real-time traffic monitoring and optimization for reduced congestion and emissions."
    },
    {
      icon: <Zap: className ="w-8 h-8" />,
      title: "Energy Efficiency",
      description: "Smart grid management and energy optimization for sustainable city operations."
    },
    {
      icon: <Shield: className ="w-8 h-8" />,
      title: "Public Safety",
      description: "Advanced surveillance and emergency response systems for enhanced public safety."
    },
    {
      icon: <Users: className ="w-8 h-8" />,
      title: "Citizen Services",
      description: "Digital citizen services and smart governance for improved quality of life."
    },
    {
      icon: <Globe: className ="w-8 h-8" />,
      title: "Environmental Monitoring",
      description: "Real-time environmental monitoring and sustainability tracking systems."
    }
  ];
  return (
    <>
      <Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta: name ="description" content="Advanced 5G smart city solutions for modern businesses. Transform cities with intelligent infrastructure and IoT connectivity." />
      </Helmet>
      <div: className ="min-h-screen bg-slate-900 text-white">
        <div: className ="container mx-auto px-4 py-16">
          <div: className ="text-center mb-16">
            <h1: className ="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              5G Smart City Solutions
            </h1>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your city into a smart, connected, and sustainable urban environment with our comprehensive 5G solutions. 
              Enhance citizen services, optimize resources, and improve quality of life.
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
            <h2: className ="text-3xl font-bold mb-8">Ready to Build Smart Cities?</h2>
            <p: className ="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to learn how our 5G smart city solutions can transform your urban environment and improve citizen experiences.
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
export default G5gSmartCitySolutionsPage;