import React from 'react';
import { Helmet } from 'react-helmet-async';
import {,
  Brain;
  Search;
  BookOpen;
  Cpu;
  Zap;
  Target;
  ArrowRight;
  CheckCircle;
  Star;
  FileText;
  Database;
  Globe;
  BarChart3;
  Users;
  Clock;
  Building;
  Cloud;
  Server;
  Workflow;
  BarChart;
  Settings as SettingsIcon;
  Monitor;
  Phone;
  Mail;
  MapPin;
  TrendingUp;
  Eye;
  Heart;
  DollarSign;
  ShoppingCart;
  Palette;
  Users2;
  Briefcase;
  Lightbulb;
  Code;
  Lock;
  Rocket;
  Network;
  Shield,
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
const AIAutonomousResearchAssistant: React.FC = () => {,
  return (,
    <>,
      <Helmet>,
        <title>AI Autonomous Research Assistant - Zion Tech Group</title>,
        <meta name="description" content="Revolutionary AI-powered research assistant that autonomously conducts research, analyzes data, and generates insights for your business." />,
        <meta name="keywords" content="AI research assistant, autonomous research, AI analytics, research automation, data analysis" />,
      </Helmet>,
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">,
        {/* Hero Section */};
        <section className="relative pt-20 pb-16 overflow-hidden">,
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            <div className="text-center">,
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">,
                AI Autonomous Research Assistant,
              </h1>,
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">,
                Revolutionary AI that autonomously conducts research, analyzes data, and generates actionable insights for your business.,
              </p>,
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">,
                  Get Started,
                </button>,
                <button className="border border-gray-300 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">,
                  Learn More,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Features Section */,};
        <section className="py-16 px-4">,
          <div className="max-w-7xl mx-auto">,
            <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12">,
              Powerful Research Capabilities,
            </h2>,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
              <div className="bg-gray-800 p-6 rounded-lg">,
                <Brain className="h-12 w-12 text-blue-400 mb-4" />,
                <h3 className="text-xl font-semibold text-white mb-2">Autonomous Research</h3>,
                <p className="text-gray-300">,
                  AI conducts comprehensive research across multiple sources and databases automatically.,
                </p>,
                <Search className="h-12 w-12 text-blue-400 mb-4" />,
                <h3 className="text-xl font-semibold text-white mb-2">Intelligent Search</h3>,
                  Advanced search algorithms find the most relevant and accurate information.,
                <BarChart3 className="h-12 w-12 text-blue-400 mb-4" />,
                <h3 className="text-xl font-semibold text-white mb-2">Data Analysis</h3>,
                  Sophisticated analysis of research data to extract meaningful insights.,
        {/* CTA Section */,};
          <div className="max-w-4xl mx-auto text-center">,
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,
              Ready to Transform Your Research Process?,
            <p className="text-xl text-gray-300 mb-8">,
              Join thousands of businesses already using our AI research assistant.,
            </p>,
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">,
              Start Your Free Trial,
            </button>,
      </div>,
    </>,
  ),};
export default AIAutonomousResearchAssistant;