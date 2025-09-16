<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { 
  Brain, 
  Network, 
  Cloud, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  TrendingUp, 
  Clock, 
  DollarSign,
  BarChart3,
  Settings,
  Code,
  Database,
  Server,
  MessageSquare,
  FileText,
  Mic,
  Search,
  Calendar,
  Package,
  ClipboardList,
  ShoppingCart
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const services-extended: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>services-extended | Zion Tech Group</title>
        <meta name="description" content="services-extended - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">services-extended</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default services-extended;