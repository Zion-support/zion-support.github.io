import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Sparkles,
  Monitor,
  Database,
  Smartphone,
  Target,
  Brain,
  Cpu,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SocialMediaSchedulerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Social Media Scheduler - Zion Tech Group | AI-Powered Social Media Management"
        description="AI-powered social media scheduling and management tool with content optimization, engagement analytics, and automated posting."
        keywords="social media scheduler, social media management, content scheduling, social media analytics, social media automation"
        canonical="https://ziontechgroup.com/social-media-scheduler"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text text-4xl md:text-6xl lg:text-7xl font-bold">
              Social Media Scheduler
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            AI-powered social media scheduling and management tool with content optimization, 
            engagement analytics, and automated posting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-pink-500/25 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SocialMediaSchedulerPage;