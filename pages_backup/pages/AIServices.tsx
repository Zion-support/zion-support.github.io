<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Database,
  Cpu,
  Network,
  Target,
  Rocket
} from 'lucide-react';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AIServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>AIServices | Zion Tech Group</title>
        <meta name="description" content="AIServices - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">AIServices</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default AIServices;