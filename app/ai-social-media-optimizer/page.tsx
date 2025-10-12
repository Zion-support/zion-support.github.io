'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp, Target, Brain, BarChart, Calendar, Instagram, Twitter, Facebook, Youtube, Linkedin, Video } from 'lucide-react';

const AISocialMediaOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Social Media Optimizer - Zion Tech Group</title>
        <meta name="description" content="Boost your social media presence with AI-powered content generation, scheduling, and analytics. Increase engagement by up to 300% with our intelligent social media optimization platform." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                AI Social Media Optimizer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your social media presence with AI-powered content generation, smart scheduling, and advanced analytics. 
              Increase engagement by up to 300% and save 10+ hours per week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo"
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISocialMediaOptimizerPage;
