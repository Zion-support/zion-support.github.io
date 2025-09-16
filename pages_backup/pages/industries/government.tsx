import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Head from 'next/head';
import Link from 'next/link';

import {
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Rocket,
  Lock,
  Activity,
  FileText,
  Database,
  Vote
} from 'lucide-react';
import Layout from '../../components/Layout';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const government: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>government | Zion Tech Group</title>
        <meta name="description" content="government - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">government</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default government;