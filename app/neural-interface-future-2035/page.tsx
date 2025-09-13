import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Users, Target, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Neural Interface Future 2035: The Next Generation of Brain-Computer Interfaces',
  description: 'Explore the future of neural interfaces by 2035. Discover non-invasive brain-computer interfaces, thought-controlled AI, and cognitive augmentation technologies.',
  keywords: 'neural interfaces, brain-computer interfaces, BCI, cognitive augmentation, neural AI, 2035',
};

const neuralTechnologies = [
  {
    title: 'Non-Invasive Neural Interfaces',
    description: 'Advanced EEG and fNIRS systems for seamless brain-computer communication',
    icon: <Brain className="h-6 w-6" />,
    features: [
      'Real-time neural signal processing',
      'Wireless brain-computer communication',
      'High-resolution neural imaging',
      'Portable neural interface devices'
    ]
  },
  {
    title: 'Thought-Controlled AI',
    description: 'Direct mental control of artificial intelligence systems and applications',
    icon: <Zap className="h-6 w-6" />,
    features: [
      'Mental command recognition',
      'AI system control via thoughts',
      'Neural pattern interpretation',
      'Intent-based AI interaction'
    ]
  },
  {
    title: 'Cognitive Augmentation',
    description: 'Enhancing human cognitive abilities through neural interface technology',
    icon: <Users className="h-6 w-6" />,
    features: [
      'Memory enhancement systems',
      'Cognitive load reduction',
      'Attention optimization',
      'Mental performance boosting'
    ]
  },
  {
    title: 'Neural AI Integration',
    description: 'Seamless integration between human neural networks and AI systems',
    icon: <Target className="h-6 w-6" />,
    features: [
      'Hybrid human-AI decision making',
      'Neural network collaboration',
      'Shared cognitive processing',
      'Augmented intelligence systems'
    ]
  }
];

const applications = [
  {
    domain: 'Healthcare',
    description: 'Medical diagnosis, therapy, and rehabilitation through neural interfaces',
    icon: <Shield className="h-5 w-5" />,
    examples: [
      'Stroke rehabilitation',
      'Mental health treatment',
      'Pain management',
      'Cognitive therapy'
    ]
  },
  {
    domain: 'Education',
    description: 'Enhanced learning through direct neural information transfer',
    icon: <Brain className="h-5 w-5" />,
    examples: [
      'Accelerated learning',
      'Skill transfer',
      'Knowledge augmentation',
      'Memory enhancement'
    ]
  },
  {
    domain: 'Entertainment',
    description: 'Immersive experiences through neural interface technology',
    icon: <Globe className="h-5 w-5" />,
    examples: [
      'Virtual reality control',
      'Emotional gaming',
      'Neural storytelling',
      'Immersive experiences'
    ]
  },
  {
    domain: 'Communication',
    description: 'Direct mind-to-mind and mind-to-machine communication',
    icon: <Users className="h-5 w-5" />,
    examples: [
      'Telepathic communication',
      'AI conversation',
      'Language translation',
      'Thought sharing'
    ]
  }
];

export default function NeuralInterfaceFuture2035() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-green-600 border-green-200">
            Neural Interface Future 2035
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Neural Interface Revolution:
            <span className="text-green-600 block">2035 and Beyond</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the future of brain-computer interfaces by 2035. Explore non-invasive neural interfaces, 
            thought-controlled AI, and cognitive augmentation technologies that will transform human-AI interaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Explore Neural Interfaces
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Download Research
            </Button>
          </div>
        </div>
      </section>

      {/* Neural Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionary Neural Interface Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies that will enable seamless human-AI interaction by 2035
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {neuralTechnologies.map((technology, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-lg text-green-600 group-hover:bg-green-200 transition-colors">
                      {technology.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{technology.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {technology.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {technology.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neural Interface Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How neural interfaces will transform various domains by 2035
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      {app.icon}
                    </div>
                    <CardTitle className="text-xl">{app.domain}</CardTitle>
                  </div>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {app.examples.map((example, exampleIndex) => (
                      <Badge key={exampleIndex} variant="secondary" className="text-green-600 bg-green-100">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Roadmap */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neural Interface Development Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The timeline for neural interface advancement through 2035
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2025
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Enhanced EEG Systems</h3>
                  <p className="text-gray-600">
                    Improved non-invasive neural interfaces with higher resolution and real-time processing
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2030
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Thought-Controlled AI</h3>
                  <p className="text-gray-600">
                    First commercial thought-controlled AI systems and applications
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2035
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Seamless Neural Integration</h3>
                  <p className="text-gray-600">
                    Widespread adoption of neural interfaces for everyday human-AI interaction
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Neural Interface Future
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the neural interface revolution and be part of the future where human minds 
            seamlessly connect with artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Explore Neural Interface Tech
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Join Beta Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}