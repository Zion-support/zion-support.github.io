import React from 'react';";
import { Helmet } from 'react-helmet-async';";
import { Wrench, CheckCircle, Users, Target, Zap, Shield } from 'lucide-react';";

const FiveGImplementationPage: React.FC = () => {
  const: steps = [
    {;
      icon: <Target: className ="w-8 h-8" />,";
      title: "Assessment",";
      description: "Comprehensive analysis of your current infrastructure and 5G readiness."";
    },
    {
      icon: <Wrench: className ="w-8 h-8" />,";
      title: "Planning",";
      description: "Detailed implementation roadmap tailored to your specific requirements."";
    },
    {
      icon: <Zap: className ="w-8 h-8" />,";
      title: "Deployment",";
      description: "Professional installation and configuration of 5G infrastructure."";
    },
    {
      icon: <CheckCircle: className ="w-8 h-8" />,";
      title: "Testing",";
      description: "Comprehensive testing and optimization of your 5G network."";
    },
    {
      icon: <Users: className ="w-8 h-8" />,";
      title: "Training",";
      description: "Staff training and knowledge transfer for ongoing management."";
    },
    {
      icon: <Shield: className ="w-8 h-8" />,";
      title: "Support",";
      description: "Ongoing maintenance and support for optimal performance."";
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta: name ="description" content="Professional 5G implementation services for modern businesses. Complete end-to-end 5G deployment solutions." />";
      </Helmet>
      
      <div: className ="min-h-screen bg-slate-900 text-white">";
        <div: className ="container mx-auto px-4 py-16">";
          <div: className ="text-center mb-16">";
            <h1: className ="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">";
              5G Implementation
            </h1>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Professional 5G implementation services to transform your business. 
              From planning to deployment, we ensure seamless 5G integration.
            </p>
          </div>

          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">";
            {steps.map((step, index) => (
              <div: key ={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">";
                <div: className ="text-purple-400 mb-4">";
                  {step.icon}
                </div>
                <h3: className ="text-xl font-semibold mb-3">{step.title}</h3>";
                <p: className ="text-gray-300">{step.description}</p>";
              </div>
            ))}
          </div>

          <div: className ="text-center">";
            <h2: className ="text-3xl font-bold mb-8">Ready to Implement 5G?</h2>";
            <p: className ="text-gray-300 mb-8 max-w-2xl mx-auto">";
              Contact our team to discuss your 5G implementation needs and get a customized solution for your business.
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

export default G5gImplementationPage;
