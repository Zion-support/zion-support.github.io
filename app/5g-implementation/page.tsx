'use client';
import {Helmet} from 'react-helmet-async';
import { Wifi, BarChart, Brain, Target, Zap, Shield, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FiveGImplementationPage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Ultra-Fast Connectivity',
      description: 'Experience lightning-fast 5G speeds with ultra-low latency for seamless connectivity.',
      benefits: ['10x Faster Speeds', 'Ultra-Low Latency', 'Massive Device Capacity', 'Enhanced Reliability']
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Real-time data analytics and insights powered by 5G infrastructure.',
      benefits: ['Real-Time Processing', 'Predictive Analytics', 'Smart Insights', 'Data Optimization']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Seamless integration with AI and machine learning capabilities.',
      benefits: ['Edge Computing', 'AI Processing', 'Smart Automation', 'Intelligent Networks']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Implementation',
      description: 'Targeted 5G deployment strategies for maximum efficiency and coverage.',
      benefits: ['Strategic Planning', 'Coverage Optimization', 'Cost Efficiency', 'Scalable Solutions']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Boost',
      description: 'Significant performance improvements across all connected applications.',
      benefits: ['Enhanced Performance', 'Faster Response Times', 'Improved User Experience', 'Optimized Workflows']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and compliance for 5G networks.',
      benefits: ['Advanced Security', 'Compliance Ready', 'Data Protection', 'Network Security']
    }
<<<<<<< HEAD
  ];

const FiveGImplementationPage: React.FC = () => {
=======
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-6202
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5g Implementation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional 5g implementation services delivered by experienced professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Expert Solutions</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Professional 5g implementation services delivered by experienced professionals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Quality Assurance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Fast Delivery
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Custom Solutions
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Advanced Technology</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Cutting-edge tools and technologies to deliver superior results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Latest Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Modern Methods
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Scalable Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Future-Ready
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Proven Results</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Track record of successful projects and satisfied clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  High Success Rate
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Client Satisfaction
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Ongoing Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Continuous Improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};