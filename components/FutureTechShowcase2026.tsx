import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ArrowRight, Sparkles, Globe, Cpu, Database, Network, Shield, Zap } from 'lucide-react';

const FutureTechShowcase2026: React.FC = () => {
  const futureTechnologies = [
    {
      id: 'quantum-ai-fusion',
      title: 'Quantum-AI Fusion Computing',
      description: 'Revolutionary computing that combines quantum mechanics with artificial intelligence for unprecedented processing power.',
      icon: <Cpu className="w-8 h-8" />,
      category: 'Quantum Computing',
      status: 'Beta',
      impact: 'High',
      link: '/quantum-ai-fusion',
      features: ['1000x faster processing', 'Unbreakable encryption', 'Real-time optimization']
    },
    {
      id: 'neural-network-evolution',
      title: 'Self-Evolving Neural Networks',
      description: 'AI systems that continuously improve and adapt without human intervention, creating truly autonomous intelligence.',
      icon: <Network className="w-8 h-8" />,
      category: 'Machine Learning',
      status: 'Active',
      impact: 'Revolutionary',
      link: '/neural-network-evolution',
      features: ['Auto-optimization', 'Continuous learning', 'Adaptive architecture']
    },
    {
      id: 'blockchain-ai-consensus',
      title: 'AI-Powered Blockchain Consensus',
      description: 'Next-generation blockchain technology with AI-driven consensus mechanisms for enhanced security and efficiency.',
      icon: <Database className="w-8 h-8" />,
      category: 'Blockchain',
      status: 'Development',
      impact: 'High',
      link: '/blockchain-ai-consensus',
      features: ['AI consensus', 'Smart contracts', 'Decentralized governance']
    },
    {
      id: 'quantum-encryption',
      title: 'Quantum-Proof Encryption',
      description: 'Advanced encryption methods that remain secure even against quantum computer attacks.',
      icon: <Shield className="w-8 h-8" />,
      category: 'Cybersecurity',
      status: 'Production',
      impact: 'Critical',
      link: '/quantum-encryption',
      features: ['Quantum-resistant', 'Zero-trust security', 'Future-proof']
    },
    {
      id: 'ai-climate-solutions',
      title: 'AI Climate Change Solutions',
      description: 'Artificial intelligence systems designed to combat climate change through predictive modeling and optimization.',
      icon: <Globe className="w-8 h-8" />,
      category: 'Environmental',
      status: 'Active',
      impact: 'Global',
      link: '/ai-climate-solutions',
      features: ['Climate prediction', 'Carbon optimization', 'Renewable energy']
    },
    {
      id: 'brain-computer-interface',
      title: 'Neural Brain-Computer Interface',
      description: 'Direct communication between the human brain and AI systems for enhanced cognitive capabilities.',
      icon: <Sparkles className="w-8 h-8" />,
      category: 'Biotechnology',
      status: 'Research',
      impact: 'Transformative',
      link: '/brain-computer-interface',
      features: ['Thought control', 'Memory enhancement', 'Cognitive augmentation']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-100 text-green-800 border-green-200';
      case 'Active': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Beta': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Development': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Research': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Transformative': return 'text-purple-600';
      case 'Revolutionary': return 'text-red-600';
      case 'Critical': return 'text-orange-600';
      case 'High': return 'text-blue-600';
      case 'Global': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">FUTURE TECHNOLOGY SHOWCASE 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 The Future of Technology is Here
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore groundbreaking technologies that will shape the next decade. From quantum computing to neural interfaces, 
            discover the innovations that will revolutionize how we live, work, and interact with technology.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {futureTechnologies.map((tech) => (
            <Card key={tech.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                    {tech.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={`${getStatusColor(tech.status)} text-xs`}>
                      {tech.status}
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white">
                      {tech.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-300 transition-colors">
                  {tech.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {tech.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tech.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Level */}
                <div className="mb-4">
                  <span className="text-sm text-gray-400">Impact Level: </span>
                  <span className={`font-semibold ${getImpactColor(tech.impact)}`}>
                    {tech.impact}
                  </span>
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <Link href={tech.link}>
                    Explore Technology
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">
              🌟 Ready to Shape the Future?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our exclusive community of innovators, researchers, and technology leaders who are building the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <Link href="/future-tech-research">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Join Research Program
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/technology-consulting">
                  <Globe className="w-5 h-5 mr-2" />
                  Get Technology Consulting
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTechShowcase2026;