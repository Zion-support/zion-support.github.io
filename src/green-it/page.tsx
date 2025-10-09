import React, { useState } from 'react';
import { Leaf, Recycle, Zap, Globe, Target, CheckCircle, ArrowRight, Phone, Mail, Award, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GreenITPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('solutions');

  const _tabs = [
    {
      id: 'solutions',
      label: 'Green Solutions',
      icon: Leaf
    },
    {
      id: 'benefits',
      label: 'Benefits',
      icon: Target
    },
    {
      id: 'certifications',
      label: 'Certifications',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Green IT Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sustainable technology solutions that reduce environmental impact while improving efficiency and performance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12">
            {_tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 m-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'solutions' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Leaf className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Energy-Efficient Infrastructure</h3>
                <p className="text-gray-300 mb-4">Optimize your IT infrastructure for maximum energy efficiency and reduced carbon footprint.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    40% energy reduction
                  </li>
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Smart cooling systems
                  </li>
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Renewable energy integration
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Recycle className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sustainable Hardware</h3>
                <p className="text-gray-300 mb-4">Eco-friendly hardware solutions with extended lifecycle and recyclable components.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Recyclable materials
                  </li>
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Extended warranties
                  </li>
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Carbon-neutral shipping
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Zap className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Green Software</h3>
                <p className="text-gray-300 mb-4">Optimized software solutions that minimize resource consumption and environmental impact.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Low-power algorithms
                  </li>
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Efficient data processing
                  </li>
                  <li className="flex items-center text-green-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Cloud optimization
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Environmental Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Reduced Carbon Footprint</h4>
                      <p className="text-gray-300">Significantly lower CO2 emissions through efficient technology solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Energy Conservation</h4>
                      <p className="text-gray-300">Up to 50% reduction in energy consumption through smart optimization.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Waste Reduction</h4>
                      <p className="text-gray-300">Minimize electronic waste through sustainable hardware practices.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Business Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Cost Savings</h4>
                      <p className="text-gray-300">Reduce operational costs through energy efficiency and optimized resource usage.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Compliance</h4>
                      <p className="text-gray-300">Meet environmental regulations and sustainability standards.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Brand Reputation</h4>
                      <p className="text-gray-300">Enhance your brand image with sustainable technology practices.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">ISO 14001</h3>
                <p className="text-gray-300">Environmental Management System Certification</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">ENERGY STAR</h3>
                <p className="text-gray-300">Energy Efficiency Certification</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">LEED</h3>
                <p className="text-gray-300">Leadership in Energy and Environmental Design</p>
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Go Green?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your IT infrastructure with sustainable solutions that benefit both your business and the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <Leaf className="h-5 w-5 mr-2" />
                Start Your Green Journey
              </a>
              <a 
                href="/demo" 
                className="bg-transparent text-green-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-400 hover:bg-green-400 hover:text-white transition-colors flex items-center justify-center"
              >
                <Globe className="h-5 w-5 mr-2" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GreenITPage;