'use client';

import React, { Suspense } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ServiceCardSkeleton } from '../src/components/LoadingStates';
import LazyImage from './components/LazyImage';
import AnimatedCounter from './components/AnimatedCounter';
import Navigation from './components/Navigation';
import OptimizedImage from './components/OptimizedImage';
import EnhancedLoading from './components/EnhancedLoading';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import {
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  Cpu, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Monitor, 
  Server, 
  Wifi, 
  HardDrive, 
  Terminal, 
  GitBranch,
  Layers,
  Workflow,
  Bot,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  Star as StarIcon,
  Quote,
  User,
  Building,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Calendar,
  Clock as ClockIcon,
  DollarSign,
  PieChart,
  BarChart3,
  LineChart,
  Activity,
  Zap as ZapIcon,
  Target as TargetIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Wifi as WifiIcon,
  HardDrive as HardDriveIcon,
  Terminal as TerminalIcon,
  GitBranch as GitBranchIcon,
  Layers as LayersIcon,
  Workflow as WorkflowIcon,
  Bot as BotIcon,
  Sparkles as SparklesIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  Clock as ClockIcon2,
  CheckCircle2 as CheckCircle2Icon,
  ArrowUpRight as ArrowUpRightIcon,
  ChevronRight as ChevronRightIcon,
  Play as PlayIcon,
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  StarIcon as StarIcon2,
  Quote as QuoteIcon,
  User as UserIcon,
  Building as BuildingIcon,
  MapPinIcon as MapPinIcon2,
  PhoneIcon as PhoneIcon2,
  MailIcon as MailIcon2,
  Calendar as CalendarIcon,
  ClockIcon as ClockIcon3,
  DollarSign as DollarSignIcon,
  PieChart as PieChartIcon,
  BarChart3 as BarChart3Icon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon
} from 'lucide-react';

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
    <div className="absolute inset-0 bg-black/20" />
    
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Transform Your Business with
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Unlock the power of artificial intelligence with our comprehensive suite of enterprise solutions. 
          From quantum computing to advanced analytics, we help businesses achieve unprecedented growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            Get Started Today
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
            Watch Demo
            <Play className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Main HomePage Component
const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Zion Tech Group - AI-Powered Enterprise Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities."
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <HeroSection />
        
        {/* Additional sections would go here */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">AI Expertise</h3>
                <p className="text-gray-300">
                  Our team of AI experts delivers cutting-edge solutions that drive real business value.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-grade security and compliance standards protect your data and operations.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">
                  Get up and running quickly with our streamlined implementation process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <PerformanceMonitor />
    </ErrorBoundary>
  );
};

export default HomePage;