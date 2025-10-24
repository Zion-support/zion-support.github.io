
'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Zap, Target } from 'lucide-react';

const services = [
  {
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence to transform your business operations',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    stats: '40% efficiency boost',
    link: '/ai-services',
  },
  {
    title: 'IT Services',
    description: 'Comprehensive technology solutions including cloud infrastructure and cybersecurity',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    stats: '99.9% uptime',
    link: '/it-services',
  },
  {
    title: 'Performance Optimization',
    description: 'Advanced performance monitoring and optimization for maximum efficiency',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    stats: '3x faster',
    link: '/performance',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality assurance to ensure reliable solutions',
    icon: <Target className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500',
    stats: '100% tested',
    link: '/quality',
  },
];


export default function HomePage() {
  return (
