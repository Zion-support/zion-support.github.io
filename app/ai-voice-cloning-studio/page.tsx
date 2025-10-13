import React from 'react';
import { 
  Mic, 
  Play, 
  Settings, 
  Users, 
  Zap, 
  CheckCircle, 
  Brain,
  Volume2,
  FileAudio,
  Globe
} from 'lucide-react';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Play, Settings, Users, Zap, CheckCircle, Brain, Volume2, FileAudio, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Pause } from 'lucide-react';
import { Download } from 'lucide-react';
import { Upload } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Play } from 'lucide-react';
import { Volume2 } from 'lucide-react';
import { Mic } from 'lucide-react';

const AIVoiceCloningStudioPage = () => {
  const features = [
    {
      title: "Real-time Voice Cloning",
      description: "Clone any voice with just 3 seconds of audio sample using advanced neural networks",
      icon: <Mic className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 50+ languages with native accent preservation",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Emotion Control",
      description: "Add emotions like happiness, sadness, excitement to cloned voices",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "High-Quality Output",
      description: "Studio-quality audio output up to 48kHz sample rate",
      icon: <Volume2 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "100 voice clones per month",
        "5 minutes audio generation",
        "Basic voice emotions",
        "Standard quality (24kHz)",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for content creators and businesses",
      features: [
        "500 voice clones per month",
        "30 minutes audio generation",
        "Advanced voice emotions",
        "High quality (48kHz)",
        "Priority support",
        "API access",
        "Custom voice training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited voice clones",
        "Unlimited audio generation",
        "All voice emotions",
        "Studio quality (48kHz)",
        "24/7 dedicated support",
        "Full API access",
        "Custom model training",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Create voiceovers for videos, podcasts, and audiobooks",
      icon: <FileAudio className="w-6 h-6" />
    },
    {
      title: "Accessibility",
      description: "Generate speech for visually impaired users",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Gaming",
      description: "Create unique character voices for games",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Education",
      description: "Generate multilingual educational content",
      icon: <Brain className="w-6 h-6" />
    }
  ];

export default function AiVoiceCloningStudioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Voice Cloning Studio - Zion Tech Group</title>
        <meta name="description" content="Ai Voice Cloning Studio solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Voice Cloning Studio</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai voice cloning studio solutions designed to meet your business needs.
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
};


}