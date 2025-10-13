import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Mic } from 'lucide-react';

const AIVoiceAssistantProPage = () => {
  const benefits = [
    "Reduce response time by 90%",
    "Increase customer satisfaction by 60%",
    "Handle 95% of inquiries automatically",
    "Support 50+ languages natively",
    "24/7 availability and consistency",
    "Seamless integration with existing systems"
  ];

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Recognition",
      description: "Advanced speech-to-text with 99% accuracy in multiple languages."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Understand context and intent for more natural conversations."
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Text-to-Speech",
      description: "High-quality voice synthesis with customizable voices."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Conversational AI",
      description: "Engage in natural, context-aware conversations."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customizable Commands",
      description: "Create custom voice commands for your specific needs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Security",
      description: "Enterprise-grade security with data encryption and privacy controls."
    }
  ];

  const benefits = [
    "95% accuracy in voice recognition",
    "Multi-language support",
    "Real-time processing",
    "Custom voice training",
    "Integration with existing systems",
    "24/7 availability"
  ];
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

export default function AiVoiceAssistantProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Voice Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Voice Assistant Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Voice Assistant Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai voice assistant pro solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
