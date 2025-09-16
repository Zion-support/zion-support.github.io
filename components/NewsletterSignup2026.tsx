<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

import { 
  Mail
  CheckCircle
  X
  Sparkles,
  Bell,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Brain,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const NewsletterSignup2026 = () => {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);
  const [errorsetError] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(', ');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve2000));
      
      // Simulate success
      setIsSubscribed(true);
      setEmail(', ');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Brain,
      title: 'AI Breakthrough Alerts',
      description: 'Get notified about the latest AI breakthroughs and research'
    },
    {
      icon: TrendingUp,
      title: 'Trending Content',
      description: 'Weekly digest of the most popular and trending articles'
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'AI-powered content recommendations based on your interests'
    },
    {
      icon: Zap,
      title: 'Exclusive Early Access',
      description: 'Be the first to access new content and features'
    }
  ];

  const stats = [
    { number: '50K+'label: 'Subscribers' },
    { number: '4.9/5'label: 'Rating' },
    { number: '24/7'label: 'Updates' },
    { number: '100%'label: 'Free' }
  ];

  if (!isVisible || isDismissed) return null;
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const NewsletterSignup2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewsletterSignup2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NewsletterSignup2026;