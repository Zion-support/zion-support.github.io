import React from "react";
import Navigation from '../components/Navigation';import Footer from '../components/Footer';import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';export const dynamic = 'force-dynamic';
const FiveGImplementationPage: "React.FC = () => {
  ;
const features = [
    {      icon: Brain",      title: "'AI-Powered Intelligence'",      description: "'Advanced AI algorithms that provide intelligent insights and recommendations.'",      benefits: "['Smart recommendations'", 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },    {      icon: "Zap",      title: "'Lightning Fast Performance'",      description: "'Optimized for speed and efficiency with cutting-edge technology.'",      benefits: "['Ultra-fast processing'", 'Low latency', 'High throughput', 'Scalable architecture']
    },    {      icon: "Shield",      title: "'Enterprise Security'",      description: "'Bank-level security with advanced encryption and compliance.'",      benefits: "['End-to-end encryption'", 'GDPR compliant', 'SOC 2 certified', 'Regular audits']
    }
  ];
  return (    <div className="min-h-screen bg-gray-50>
      <Navigation />      <main className="pt-20"">        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700>          <div className="max-w-7xl mx-auto px-4 sm: "px-6 lg:px-8"">            <div className="text-center>              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"">
                5G Implementation Solutions              </h1>              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto>
                Transform your business with cutting-edge 5G technology and AI-powered solutions
              </p>              <div className="flex flex-col sm:flex-row gap-4 justify-center"">                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors>
                  Get Started                </button>                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>        <section className="py-20>          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"">            <div className="text-center mb-16>              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"">
                Why Choose Our 5G Solutions?              </h2>              <p className="text-xl text-gray-600 max-w-3xl mx-auto>
                Our comprehensive 5G implementation services help you stay ahead of the competition
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"">              {features.map((feature", index) => (                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover: "shadow-xl transition-shadow>                  <div className="flex items-center mb-4"">                    <feature.icon className="h-8 w-8 text-blue-600 mr-3 />                    <h3 className="text-xl font-semibold text-gray-900"">{feature.title"}</h3>                  </div>                  <p className="text-gray-600 mb-4>{feature.description}</p>                  <ul className="space-y-2"">                    {feature.benefits.map((benefit, benefitIndex) => (                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600>                        <Check className="h-4 w-4 text-green-500 mr-2"" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FiveGImplementationPage;
