import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Dna, 
  Microscope, 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  Target, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Activity,
  Beaker,
  Stethoscope,
  Syringe
} from 'lucide-react';

const AdvancedBiotechAI2026: React.FC = () => {
  return (
                </div>
              </div>
    <>
      <Helmet>
        <title>Advanced Biotech AI 2026 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary biotechnology solutions powered by AI including gene therapy, neural regeneration, and cellular rejuvenation for 2026." />
        <meta name="keywords" content="Biotech AI, Gene Therapy, Neural Regeneration, Longevity Medicine, Precision Medicine, Synthetic Biology" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                <Dna className="w-4 h-4 mr-2" />
                ADVANCED BIOTECH AI 2026
                <Dna className="w-4 h-4 ml-2" />
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                The Future of Medicine
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Revolutionary biotechnology powered by artificial intelligence. 
                Cure diseases, enhance human capabilities, and extend life through cutting-edge biotech solutions.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center">
                  Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Schedule Consultation
            </div>
          </div>
        </div>
        {/* Achievements Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
                  <achievement.icon className="w-8 h-8 mx-auto mb-4 text-green-400" />
                  <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                  <div className="text-green-200 text-sm">{achievement.label}</div>
            ))}
        {/* Solutions Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Biotech Solutions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our cutting-edge biotechnology solutions powered by advanced AI
            </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biotechSolutions.map((solution, index) => (
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300 group"
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                
                <div className="mb-4">
                  <span className="text-sm text-green-300 font-semibold">{solution.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{solution.price}</div>
                  <button className={`bg-gradient-to-r ${solution.color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
        {/* Case Studies Section */}
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              Real-world success stories from our revolutionary biotech treatments
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
                className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30"
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-green-400">
                    <Activity className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{study.results}</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{study.patients}</span>
        {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl p-12 text-center border border-green-400/30">
            <h2 className="text-4xl font-bold mb-6">Transform Your Health Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of patients who have experienced life-changing results with our 
              revolutionary biotechnology solutions. The future of medicine is here.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                Start Treatment <Syringe className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Free Consultation
        </section>
        <section className="text-center">
                Learn More
              </a>
      </div>
    </div>
  );
};
export default AdvancedBiotechAI2026;
