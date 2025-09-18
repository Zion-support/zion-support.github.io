import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Sparkles, Zap, Brain, Atom } from 'lucide-react';
const RevolutionaryServicesBanner2025: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const revolutionaryServices = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Development',
      description: 'AI systems with genuine consciousness and self-awareness',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      badge: 'Revolutionary',
      price: 'Starting at $50K'
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: '1000x faster processing with quantum algorithms',
      icon: Atom,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Breakthrough',
      price: 'Starting at $75K'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Systems',
      description: 'Direct brain-computer interfaces for thought control',
      icon: Zap,
      color: 'from-green-500 to-teal-600',
      badge: 'Future Tech',
      price: 'Starting at $30K'
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % revolutionaryServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [revolutionaryServices.length]);
  const current = revolutionaryServices[currentService];
  const IconComponent = current.icon;
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black mb-4 animate-bounce">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Services 2025
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our groundbreaking AI and quantum computing services that are reshaping the technological landscape.
          </p>
        </div>
        {/* Featured Service Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className={`p-6 rounded-2xl bg-gradient-to-r ${current.color} shadow-2xl`}>
                    <IconComponent className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      {current.badge}
                    </Badge>
                    <span className="text-2xl font-bold text-yellow-400">
                      {current.price}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">
                    {current.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {current.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                      Schedule Demo
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Service Indicators */}
        <div className="flex justify-center gap-3 mb-8">
          {revolutionaryServices.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentService 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">1000x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">AI Operations</div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started with Revolutionary AI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );

};

export default RevolutionaryServicesBanner2025;
