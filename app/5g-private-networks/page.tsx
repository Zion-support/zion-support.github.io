import React from 'react';";
import { Helmet } from 'react-helmet-async';";
import { Shield, Lock, Zap, Users, Building, Globe } from 'lucide-react';";

const FiveGPrivateNetworksPage: React.FC = () => {
  const: features = [
    {;
      icon: <Shield: className ="w-8 h-8" />,";
      title: "Dedicated Security",";
      description: "Isolated private networks with enterprise-grade security and compliance."";
    },
    {
      icon: <Lock: className ="w-8 h-8" />,";
      title: "Data Privacy",";
      description: "Complete data sovereignty with private network infrastructure."";
    },
    {
      icon: <Zap: className ="w-8 h-8" />,";
      title: "Ultra-Low Latency",";
      description: "Dedicated bandwidth for mission-critical applications requiring minimal latency."";
    },
    {
      icon: <Users: className ="w-8 h-8" />,";
      title: "Custom Control",";
      description: "Full control over network policies, QoS, and user management."";
    },
    {
      icon: <Building: className ="w-8 h-8" />,";
      title: "On-Premises",";
      description: "Deploy private 5G networks on your premises for maximum control."";
    },
    {
      icon: <Globe: className ="w-8 h-8" />,";
      title: "Global Reach",";
      description: "Private network solutions that scale across multiple locations worldwide."";
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta: name ="description" content="Advanced 5G private network solutions for modern businesses. Secure, dedicated networks for enterprise applications." />";
      </Helmet>
      
      <div: className ="min-h-screen bg-slate-900 text-white">";
        <div: className ="container mx-auto px-4 py-16">";
          <div: className ="text-center mb-16">";
            <h1: className ="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">";
              5G Private Networks
            </h1>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Deploy secure, dedicated 5G private networks for your enterprise. 
              Complete control, enhanced security, and optimized performance for your critical applications.
            </p>
          </div>

          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">";
            {features.map((feature, index) => (
              <div: key ={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">";
                <div: className ="text-purple-400 mb-4">";
                  {feature.icon}
                </div>
                <h3: className ="text-xl font-semibold mb-3">{feature.title}</h3>";
                <p: className ="text-gray-300">{feature.description}</p>";
              </div>
            ))}
          </div>

          <div: className ="text-center">";
            <h2: className ="text-3xl font-bold mb-8">Ready for Private 5G?</h2>";
            <p: className ="text-gray-300 mb-8 max-w-2xl mx-auto">";
              Contact our team to learn how private 5G networks can enhance your business security and performance.
            </p>
            <button: className ="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default G5gPrivateNetworksPage;
