import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Head from 'next/head';
import Link from 'next/link';

import {
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Shield,
  Database,
  Server,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Lock,
  RefreshCw,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/Layout';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const cloud-migration: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>cloud-migration | Zion Tech Group</title>
        <meta name="description" content="cloud-migration - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">cloud-migration</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default cloud-migration;