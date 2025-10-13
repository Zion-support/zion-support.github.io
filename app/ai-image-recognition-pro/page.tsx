import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import FuturisticButton from '../components/FuturisticButton';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Target } from 'lucide-react';

const AIImageRecognitionPro = () => {
  const features = [
    {
      title: "Object Detection",
      description: "Identify and classify objects in images with high accuracy",
      icon: <Eye className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Facial Recognition",
      description: "Advanced facial recognition and analysis capabilities",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Text Extraction",
      description: "Extract text from images using OCR technology",
      icon: <Scan className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Scene Analysis",
      description: "Understand and analyze complex scenes and contexts",
      icon: <Image className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "99.2% recognition accuracy",
    "Real-time processing",
    "Multi-format support",
    "Advanced security",
    "Scalable infrastructure",
    "Easy integration"
  ];

export default function AiImageRecognitionProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Image Recognition Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Image Recognition Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Image Recognition Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai image recognition pro solutions designed to meet your business needs.
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

}