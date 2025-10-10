'use client';
import React from 'react';
import { ArrowRight, Star, Zap, Shield, Brain, Globe, Users, BarChart, Settings, Calendar, FileText, DollarSign, Package, Monitor, Wifi, MessageSquare, Target, Eye, Mic, Workflow, Heart, TrendingUp, Award, Rocket, Layers, Code, Database, Smartphone, Lock, Cpu, Cloud, Mail, Phone, MapPin } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to transform your business operations.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your specific needs.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security measures to protect your digital assets and data.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics tools.'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI & IT Solutions
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover how our cutting-edge technology can revolutionize your operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center gap-2 mx-auto">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
