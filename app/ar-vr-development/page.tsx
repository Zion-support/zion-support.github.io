import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Box } from 'lucide-react';
import { Mic } from 'lucide-react';
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
  ];

  return null;
};

export default function Page() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
}