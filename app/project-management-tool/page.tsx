import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Sparkles,
  Monitor,
  Database,
  Globe,
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

const ProjectManagementToolPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Project Management Tool - Zion Tech Group | AI-Powered Project Management"
        description="AI-powered project management tool with intelligent task prioritization, resource allocation, and automated progress tracking."
        keywords="project management, task management, AI project management, team collaboration, project tracking"
        canonical="https://ziontechgroup.com/project-management-tool"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text text-4xl md:text-6xl lg:text-7xl font-bold">
              Project Management Tool
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            AI-powered project management tool with intelligent task prioritization, 
            resource allocation, and automated progress tracking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
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

export default ProjectManagementToolPage;