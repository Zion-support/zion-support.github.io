import React from 'react';
import { Calendar, Users, Zap, Brain, Shield, CheckCircle, Star, Phone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AISchedulerPage: React.FC = () => {
  const _features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that automatically finds the best meeting times based on availability, preferences, and time zones.',
      benefit: 'Save 5+ hours per week'
    },
    {
      icon: Brain,
      title: 'Intelligent Coordination',
      description: 'Automatically coordinate with multiple participants, considering their schedules and preferences.',
      benefit: 'Eliminate scheduling conflicts'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'One-click booking with automatic calendar updates and meeting room reservations.',
      benefit: 'Reduce booking time by 80%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">AI Scheduler</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Intelligent scheduling solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AISchedulerPage;