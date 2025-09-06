

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';

  Rocket,;
  Settings,;
} from 'lucide-react';

export default function AISeosuitePage() {
  const features = [


export default function AISeosuitePage() {
  const features = [
    {
      icon: <Search className='w-8 h-8 text-white' />
      title: 'AI Keyword Research'
      description:
        'Discover high-value keywords using advanced AI algorithms that analyze search patterns and competition.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
      gradient: 'from-blue-400 to-cyan-500'
    }
    {
      icon: <TrendingUp className='w-8 h-8 text-white' />
      title: 'Ranking Analytics'
      description:
        'Track your search rankings in real-time with comprehensive analytics and competitor insights.'
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'
    }
    {
      icon: <Target className='w-8 h-8 text-white' />
      title: 'Content Optimization'
      description:
        'AI-powered content analysis and optimization suggestions to improve search visibility.'
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Technical SEO'
      description:
        'Comprehensive technical SEO audits with actionable recommendations for improvement.'
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
      gradient: 'from-orange-400 to-red-500'
    }
    {
      icon: <Globe className='w-8 h-8 text-white' />
      title: 'Local SEO'
      description:
        'Optimize for local search with location-based keyword research and citation management.'
      color: 'bg-gradient-to-br from-teal-500 to-blue-600'
      gradient: 'from-teal-400 to-blue-500'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Automated Reports'
      description:

import { Search, TrendingUp, Target, BarChart3, Globe, Zap, Users, CheckCircle, ArrowRight, Play, Star, Eye, Brain, Shield, Lock, Sparkles, ChartBar, Lightbulb, Rocket, Settings } from 'lucide-react';

        'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
    },;
  ];




export default function AISeosuitePage() {
  const features = [
    {



  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$39'
      period: '/month'
      description: 'Perfect for small websites and blogs'
      features: [

        'Up to 5 websitesBasic keyword researchMonthly site auditsEmail supportBasic reportingMobile app access'
      ];
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    };
    {
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Eye,
  Brain,
  Shield,
  Lock,
  Sparkles,
  ChartBar,
  Lightbulb,
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of businesses who are already ranking higher and driving more organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl">;
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Button>;
            <Button
              href="#demo"
              variant="outline"
              size="lg"


              Watch Demo;
            </Button>;
          </div>;
        </div>;
      </section>;


}
}
