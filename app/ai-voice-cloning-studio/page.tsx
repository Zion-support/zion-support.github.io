
  Play, 
  Settings, 
  Users, 
  Zap, 
  CheckCircle, 
  Brain,
  Volume2,
  FileAudio,
  Globe  } from 'lucide-react';
 } from 'lucide-react';

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
      popular: false;
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
      popular: true;
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
      popular: false;
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
}