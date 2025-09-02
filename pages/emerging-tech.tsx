import React from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { 
  Brain, 
  Cloud, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Rocket, 
  Code, 
  Globe, 
  Cpu,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

const EmergingTech: React.FC = () => {
  const technologies = [
    {
      name: 'Artificial Intelligence',
      description: 'Advanced AI solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      status: 'Available Now',
      features: ['Machine Learning Models', 'NLP Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      icon: Cpu,
      status: 'Coming Soon',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Blockchain & Web3',
      description: 'Decentralized applications and blockchain infrastructure solutions.',
      icon: Network,
      status: 'Available Now',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'DApp Development'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Edge Computing',
      description: 'Distributed computing infrastructure for real-time data processing.',
      icon: Globe,
      status: 'Available Now',
      features: ['IoT Integration', 'Real-time Processing', 'Low Latency', 'Distributed Systems'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Augmented Reality',
      description: 'AR solutions for immersive user experiences and business applications.',
      icon: Rocket,
      status: 'In Development',
      features: ['AR Applications', '3D Visualization', 'Interactive Experiences', 'Mobile AR'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Cybersecurity AI',
      description: 'AI-powered security solutions for threat detection and prevention.',
      icon: Shield,
      status: 'Available Now',
      features: ['Threat Detection', 'Automated Response', 'Security Analytics', 'Risk Assessment'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology solutions.',
      icon: TrendingUp
    },
    {
      title: 'Future-Proof Solutions',
      description: 'Build with technologies that will remain relevant for years to come.',
      icon: Star
    },
    {
      title: 'Expert Implementation',
      description: 'Our team of experts ensures successful deployment and integration.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Emerging Technologies - Zion Tech Group"
        description="Explore cutting-edge technologies including AI, quantum computing, blockchain, and more. Stay ahead with Zion Tech Group's emerging tech solutions."
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Emerging Technologies
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover and implement cutting-edge technologies that will transform your business. 
            From AI and quantum computing to blockchain and AR, we help you stay ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Explore Technologies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emerging Technologies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the latest technologies that are shaping the future of business and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${tech.color} mr-4`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                      <Badge 
                        variant={tech.status === 'Available Now' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {tech.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={tech.status !== 'Available Now'}
                >
                  {tech.status === 'Available Now' ? 'Learn More' : tech.status}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Emerging Tech Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner with us to leverage the latest technologies and gain a competitive edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Embrace the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how emerging technologies can transform your business and give you a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergingTech;