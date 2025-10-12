'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Calendar, TrendingUp, Target, Brain, BarChart, Clock, Zap, DollarSign, Shield, Globe, Settings } from 'lucide-react';

const AIProjectManagementProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize project management with AI-powered automation, intelligent scheduling, and predictive analytics. Increase team productivity by 350% and reduce project delays by 80%." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Project Management Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionize project management with AI-powered automation, intelligent scheduling, and predictive analytics. 
              Increase team productivity by 350% and reduce project delays by 80%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo"
                className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">350%</div>
                <div className="text-gray-400 text-sm">Productivity Increase</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">80%</div>
                <div className="text-gray-400 text-sm">Fewer Delays</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">25K+</div>
                <div className="text-gray-400 text-sm">Teams Using</div>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-400 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIProjectManagementProPage;
