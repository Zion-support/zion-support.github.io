import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Languages, Brain, FileText, Clock, Target, CheckCircle, Globe, Zap } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function AITranslationServicePage() {
  const features = [
    {
      icon: <Languages className="w-6 h-6 text-blue-400" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with high accuracy translation'
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI-Powered',
      description: 'Advanced neural machine translation with context understanding'
    }
}