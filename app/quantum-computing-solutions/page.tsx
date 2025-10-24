'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Cpu, Zap, Shield, Brain, Target, CheckCircle, Globe, Activity, Lock, Gauge } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { PieChart } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { Activity } from 'lucide-react';
  Zap, 
  Shield, 
  Brain, 
  Target, 
  CheckCircle, 
  Globe,
  Activity,
  Lock,
  Gauge
} from 'lucide-react';
const QuantumComputingSolutionsPage = () => {
  const features = [
    {
      title: "Quantum Processing",
      description: "Harness quantum computing power for complex calculations and optimization problems",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Quantum Security",
      description: "Unbreakable quantum encryption and secure communication protocols",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Advanced AI algorithms powered by quantum computing principles",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum algorithms",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
  ];

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
};

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function QuantumcomputingsolutionsPage() {
  return (
export default function QuantumcomputingsolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional quantum computing solutions services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Quantum Computing Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional quantum computing solutions services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional quantum computing solutions services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Quantum Computing Solutions</h1>
        <p className="text-lg text-gray-300 mb-8">Professional quantum computing solutions services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
