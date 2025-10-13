<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Monitor, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Eye, Hand } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIHolographicWorkspace = () => {
  const features = [
    {
      title: "3D Holographic Display",
      description: "Immersive 3D holographic interface that projects data and applications into your physical space.",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Remote Collaboration",
      description: "Seamless collaboration with team members in shared holographic workspaces from anywhere in the world.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into interactive 3D visualizations that you can manipulate with gestures.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Gesture Control",
      description: "Control your holographic workspace with natural hand gestures and eye tracking technology.",
      icon: <Hand className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "3D holographic projection technology",
    "Real-time remote collaboration tools",
    "Gesture and eye-tracking controls",
    "Interactive 3D data visualization",
    "Spatial audio and haptic feedback",
    "Multi-user virtual meeting rooms",
    "3D file and document management",
    "Augmented reality integration",
    "Virtual whiteboard and sketching",
    "3D model manipulation and editing",
    "Spatial computing applications",
    "Immersive presentation capabilities"
  ];

  const pricingPlans = [
    {
      name: "Holographic Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for individuals exploring holographic workspace technology",
      features: [
        "Basic 3D holographic display",
        "Single-user workspace",
        "Gesture control interface",
        "Basic data visualization",
        "Email support",
        "10GB holographic storage"
      ],
      popular: false
    },
    {
      name: "Holographic Professional",
      price: "$799",
      period: "/month",
      description: "Advanced features for teams and professionals",
      features: [
        "All Starter features",
        "Multi-user collaboration",
        "Advanced 3D visualization",
        "Spatial audio integration",
        "Priority support",
        "100GB holographic storage",
        "API access",
        "Custom workspace templates"
      ],
      popular: true
    },
    {
      name: "Holographic Enterprise",
      price: "$1,599",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "All Professional features",
        "Unlimited users",
        "Custom holographic applications",
        "White-label interface",
        "Dedicated support team",
        "Unlimited holographic storage",
        "Advanced security protocols",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Alex Thompson",
      company: "Future Tech Labs",
      role: "Research Director",
      content: "The holographic workspace has revolutionized how we collaborate. The 3D data visualization capabilities are absolutely mind-blowing.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Rodriguez",
      company: "Design Innovation Co.",
      role: "Creative Director",
      content: "Working in 3D space has completely changed our design process. We can now visualize and iterate on concepts in ways we never thought possible.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "James Chen",
      company: "Global Engineering Solutions",
      role: "CTO",
      content: "The remote collaboration features are incredible. Our distributed team feels like they're working in the same room, even across continents.",
      rating: 5,
      avatar: "JC"
    }
  ];

  const stats = [
    { number: "360°", label: "Field of View", icon: <Eye className="w-6 h-6" /> },
    { number: "4K", label: "Holographic Resolution", icon: <Monitor className="w-6 h-6" /> },
    { number: "50+", label: "Concurrent Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b119

export default function AiHolographicWorkspacePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Holographic Workspace - Zion Tech Group</title>
        <meta name="description" content="Ai Holographic Workspace solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Holographic Workspace</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai holographic workspace solutions designed to meet your business needs.
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
<<<<<<< HEAD
};

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
