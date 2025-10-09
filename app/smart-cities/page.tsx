'use client';
import React from 'react';
import { Building, Wifi, Shield, Zap, Users, Award, CheckCircle, Phone, Globe, Cpu, BarChart } from 'lucide-react';

const SmartCitiesPage: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Infrastructure',
      description: 'IoT-enabled infrastructure monitoring and management systems',
      icon: Building,
      features: ['Traffic Management', 'Energy Optimization', 'Waste Management', 'Water Systems'],
      price: '$5,000/month',
      color: 'text-blue-400'
    },
    {
      title: 'Digital Governance',
      description: 'Citizen engagement and government service digitization',
      icon: Users,
      features: ['Citizen Portals', 'Digital Services', 'E-Voting Systems', 'Public Feedback'],
      price: '$3,500/month',
      color: 'text-green-400'
    },
    {
      title: 'Smart Security',
      description: 'AI-powered surveillance and emergency response systems',
      icon: Shield,
      features: ['Video Analytics', 'Emergency Response', 'Crime Prevention', 'Public Safety'],
      price: '$4,200/month',
      color: 'text-red-400'
    },
    {
      title: 'Data Analytics',
      description: 'City-wide data collection and intelligent analytics platform',
      icon: BarChart,
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Resource Optimization', 'Decision Support'],
      price: '$2,800/month',
      color: 'text-purple-400'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Smart Cities Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Building the Future of Urban Living
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your city into a smart, sustainable, and efficient urban environment 
              with our comprehensive smart city solutions powered by AI and IoT.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Smart City Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <solution.icon className={`w-8 h-8 ${solution.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${solution.color}`}>{solution.price}</div>
                    <button className="cyber-button px-4 py-2 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build a Smart City?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our smart city solutions can transform your urban environment 
              and improve the quality of life for your citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SmartCitiesPage;
