import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { Users } from 'lucide-react';
import { Clock } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Code } from 'lucide-react';
import { Database } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { PieChart } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Wifi } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Advanced Features',
      description: 'Cutting-edge technology for maximum efficiency'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">;
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI chatbot builder solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center">;
          <h1 className="text-4xl font-bold text-gray-900 mb-4">;
            AI Chatbot Builder;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            Advanced AI chatbot builder solutions by Zion Tech Group;
          </p>;
        </div>;
        <div className="max-w-4xl mx-auto">;
          <div className="bg-white rounded-lg shadow-md p-8">;
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>;
            <p className="text-gray-600">;
              This page is under development. Please check back later for updates.;
            </p>;
          </div>;
        </div>;
      </div>;
    </div>)}
