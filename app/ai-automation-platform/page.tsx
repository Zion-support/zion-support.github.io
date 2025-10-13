import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function aiAutomationPlatform() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Ai Automation Platform solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
=======
import {
  BarChart3,
  Cloud,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Settings,
  Workflow,
  Target
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AIAutomationPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI automation platform for business process optimization" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Automation Platform</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}