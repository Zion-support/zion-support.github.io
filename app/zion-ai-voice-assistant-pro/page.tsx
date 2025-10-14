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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
      <Helmet>
        <title>Zion AI Voice Assistant Pro | Zion Tech Group</title>
        <meta name="description" content="Professional AI Voice Assistant Pro services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center mb-16">;
          <h1 className="text-5xl font-bold text-white mb-6">;
            Zion AI Voice Assistant Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>;
          </h1>;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
            Advanced AI-powered solutions for modern businesses.;
          </p>;
        </div>;
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;
            <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Features</h3>;
            <p className="text-gray-300 mb-4">;
              Cutting-edge AI technology for enhanced business operations.;
            </p>;
            <ul className="text-sm text-gray-400 space-y-2">;
              <li>• Machine learning</li>;
              <li>• Predictive analytics</li>;
              <li>• Automated processes</li>;
            </ul>;
          </div>;
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;
            <h3 className="text-xl font-semibold text-white mb-4">Smart Integration</h3>;
            <p className="text-gray-300 mb-4">;
              Seamless integration with your existing business systems.;
            </p>;
            <ul className="text-sm text-gray-400 space-y-2">;
              <li>• API integration</li>;
              <li>• Data synchronization</li>;
              <li>• Real-time updates</li>;
            </ul>;
          </div>;
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;
            <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>;
            <p className="text-gray-300 mb-4">;
              Round-the-clock support for all your business needs.;
            </p>;
            <ul className="text-sm text-gray-400 space-y-2">;
              <li>• Expert support</li>;
              <li>• Quick response</li>;
              <li>• Proactive monitoring</li>;
            </ul>;
          </div>;
        </div>;
        <div className="text-center">;
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">;
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>;
            <p className="text-gray-300 mb-6">;
              Our AI experts are ready to help you implement cutting-edge solutions.;
            </p>;
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">;
              Get Started Today;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>)}
