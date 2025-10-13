import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
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
  Shield
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const TaskAutomationWorkflowPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Task Automation Workflow - Zion Tech Group | AI-Powered Workflow Automation"
        description="AI-powered task automation and workflow management with intelligent routing, automated approvals, and process optimization."
        keywords="workflow automation, task automation, process automation, business process management, workflow optimization"
        canonical="https://ziontechgroup.com/task-automation-workflow"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text text-4xl md:text-6xl lg:text-7xl font-bold">
              Task Automation Workflow
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            AI-powered task automation and workflow management with intelligent routing, 
            automated approvals, and process optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-violet-500/25 hover:scale-105"
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

export default TaskAutomationWorkflowPage;