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
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Server className="w-6 h-6 text-cyan-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-emerald-400" /> },
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-orange-400" /> }
  ]

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s IT services have been exceptional. Their cloud migration was seamless and our systems have never been more secure and efficient.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Financial Services',
      content: 'The cybersecurity solutions they implemented have given us complete peace of mind. Our data is protected and our compliance requirements are fully met.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'E-commerce Platform',
      content: 'Their API development and integration services helped us connect all our systems seamlessly. The performance improvements have been remarkable.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">;
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center">;
          <h1 className="text-4xl font-bold text-gray-900 mb-8">;
            Page;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            Professional page solutions tailored to your business needs.;
          </p>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-blue-900 mb-2">;
                Expert Solutions;
              </h3>;
              <p className="text-blue-700">;
                Our team of experts delivers cutting-edge page solutions.;
              </p>;
            </div>;
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-green-900 mb-2">;
                Custom Implementation;
              </h3>;
              <p className="text-green-700">;
                Tailored page implementations for your specific requirements.;
              </p>;
            </div>;
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;
                24/7 Support;
              </h3>;
              <p className="text-purple-700">;
                Round-the-clock support for all your page needs.;
              </p>;
            </div>;
          </div>;
          <div className="mt-12">;
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
              Get Started Today;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>)}
