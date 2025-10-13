<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Box } from 'lucide-react';
import { Mic } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f

const ARVRDevelopmentPage = () => {
  const features = [
    {
      title: "Immersive AR Experiences",
      description: "Create stunning augmented reality applications that blend digital content with the real world",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Virtual Reality Worlds",
      description: "Build immersive VR environments and experiences for training, entertainment, and business",
      icon: <Box className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mixed Reality Solutions",
      description: "Combine AR and VR technologies for next-generation mixed reality experiences",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cross-Platform Development",
      description: "Deploy across all major AR/VR platforms including Meta, Apple, and Microsoft",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

export default function Page() {
}

}}