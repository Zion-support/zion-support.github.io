import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Search, BookOpen, Zap, TrendingUp, Users, Globe, ArrowRight, Cpu, Database, Network } from 'lucide-react';

const AIAutonomousResearchAssistant: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <Helmet>
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered research assistant for autonomous research and analysis" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Autonomous Research Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered research assistant that autonomously conducts research, 
            analyzes data, and provides comprehensive insights across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">Autonomous Research</h3>
            <p className="text-gray-600">AI that independently conducts research and analysis</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-gray-600">Advanced data processing and pattern recognition</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Insight Generation</h3>
            <p className="text-gray-600">Comprehensive insights and recommendations</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousResearchAssistant;
