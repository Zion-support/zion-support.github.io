import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  }[];
}
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
