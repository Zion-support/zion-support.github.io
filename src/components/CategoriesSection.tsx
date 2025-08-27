import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Shield, Cloud, Globe, Zap, Database, Network, Cpu, Smartphone, Lock, TrendingUp } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  features: string[];
  badge?: string;
}

const categories: Category[] = [
  {
    id: 'ai-analytics',
    title: 'AI & Analytics',
    description: 'Cutting-edge artificial intelligence and advanced analytics solutions',
    icon: <Brain className="h-8 w-8" />,
    color: 'from-purple-500 to-pink-500',
    link: '/services/ai-analytics',
    features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
    badge: 'Popular'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: <Shield className="h-8 w-8" />,
    color: 'from-red-500 to-orange-500',
    link: '/services/cybersecurity',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and streamlined development operations',
    icon: <Cloud className="h-8 w-8" />,
    color: 'from-blue-500 to-cyan-500',
    link: '/services/cloud-devops',
    features: ['AWS/Azure/GCP', 'Containerization', 'CI/CD', 'Infrastructure as Code']
  },
  {
    id: 'iot-edge',
    title: 'IoT & Edge Computing',
    description: 'Connected devices and edge computing solutions for smart environments',
    icon: <Smartphone className="h-8 w-8" />,
    color: 'from-green-500 to-emerald-500',
    link: '/services/iot-edge',
    features: ['Sensor Networks', 'Edge Processing', 'Real-time Analytics', 'Device Management']
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Next-generation quantum algorithms and quantum machine learning',
    icon: <Cpu className="h-8 w-8" />,
    color: 'from-indigo-500 to-purple-500',
    link: '/services/quantum-computing',
    features: ['Quantum Algorithms', 'Quantum ML', 'Optimization', 'Research & Development'],
    badge: 'New'
  },
  {
    id: 'blockchain',
    title: 'Blockchain & DeFi',
    description: 'Distributed ledger technology and decentralized finance solutions',
    icon: <Lock className="h-8 w-8" />,
    color: 'from-yellow-500 to-orange-500',
    link: '/services/blockchain',
    features: ['Smart Contracts', 'DeFi Protocols', 'NFTs', 'Enterprise Solutions']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights',
    icon: <Database className="h-8 w-8" />,
    color: 'from-teal-500 to-blue-500',
    link: '/services/data-analytics',
    features: ['Big Data Processing', 'Business Intelligence', 'Data Visualization', 'Statistical Analysis']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation consulting and implementation',
    icon: <TrendingUp className="h-8 w-8" />,
    color: 'from-pink-500 to-rose-500',
    link: '/services/digital-transformation',
    features: ['Strategy Consulting', 'Process Optimization', 'Change Management', 'Technology Integration']
  }
];

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Service Categories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From AI and cybersecurity to cloud computing and quantum solutions, we offer comprehensive 
            technology services to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  {category.badge && (
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {category.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-slate-300">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <ul className="space-y-2 mb-4">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <div className="px-6 pb-6">
                <Link to={category.link}>
                  <Button variant="outline" className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;