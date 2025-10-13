<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
import { Calendar, Brain, Users, Zap, CheckCircle, Star, Award, BarChart3, Target, Sparkles, TrendingUp, Monitor, FileText, MessageSquare, Workflow, Shield, Lightbulb, GitBranch, Timer } from 'lucide-react';
=======
import React from 'react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import { Helmet } from 'react-helmet-async';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { FileText } from 'lucide-react';

const ZionAIProjectManagerProPage = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "per user/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 projects",
        "Basic AI task management",
        "5 team members",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$49",
      period: "per user/month",
      description: "Most popular for growing teams",
      features: [
        "Unlimited projects",
        "Advanced AI features",
        "Unlimited team members",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "API access",
        "Integration tools",
        "Time tracking",
        "Resource management"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per user/month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support",
        "White-label options",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Software Development",
      description: "Manage agile sprints, code reviews, and deployment pipelines with AI-powered sprint planning and bug tracking",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Marketing Campaigns",
      description: "Plan and execute multi-channel marketing campaigns with AI-optimized content scheduling and performance tracking",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Event Planning",
      description: "Coordinate complex events with AI-powered vendor management, timeline optimization, and resource allocation",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Construction Projects",
      description: "Manage construction timelines, resource allocation, and compliance tracking with industry-specific AI models",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Research & Development",
      description: "Track R&D milestones, manage experiments, and optimize research workflows with AI-powered insights",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Client Services",
      description: "Deliver exceptional client projects with AI-optimized resource planning and automated progress reporting",
      icon: <Users className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const aiCapabilities = [
    {
      title: "Intelligent Task Prioritization",
      description: "AI analyzes task dependencies, deadlines, and team capacity to automatically prioritize tasks for optimal project flow",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Timeline Management",
      description: "Machine learning algorithms predict project completion dates and identify potential delays before they occur",
      icon: <Timer className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Resource Optimization",
      description: "AI automatically assigns tasks to the most suitable team members based on skills, availability, and workload",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Risk Assessment",
      description: "Continuous monitoring and analysis of project risks with AI-powered early warning systems and mitigation strategies",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Intelligent Reporting",
      description: "Generate comprehensive project reports, stakeholder updates, and performance analytics automatically",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks, approvals, and notifications to streamline project management processes",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

export default function ZionAiProjectManagerProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Project Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Project Manager Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Project Manager Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai project manager pro solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


}