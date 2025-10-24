import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 

  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  Brain, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Database,
  Settings,
  Sparkles,
  Lightbulb,
  CheckCircle,
  TrendingDown,
  Monitor
} from "lucide-react";
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export default function AIAnalyticsPage() {
  return (
    <div>
<<<<<<< HEAD
      <h1>Page Content</h1>
=======
      <Head>
        <title>Ai Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Analytics
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-analytics services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
  const analyticsStats = [
    { number: "40%", label: "Faster Decision Making", icon: <Zap className="w-6 h-6" /> },
    { number: "85%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "60%", label: "Cost Reduction", icon: <TrendingDown className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechCorp",
      content: "Zion's AI analytics platform has revolutionized how we process and understand our data. The insights are incredible!",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc",
      content: "The predictive analytics capabilities have helped us make better business decisions and reduce costs significantly.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    }
  ];
  const features = [
    {
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time with our advanced AI algorithms and machine learning models.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Interactive charts", "Custom dashboards", "Mobile-responsive", "Export capabilities"]
    }
  ];