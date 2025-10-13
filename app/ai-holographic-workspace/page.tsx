<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function aiHolographicWorkspace() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Holographic Workspace - Zion Tech Group</title>
        <meta name="description" content="Ai Holographic Workspace solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Holographic Workspace</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function AiHolographicWorkspacePage() {
=======

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Hand } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
const AIHolographicWorkspace = () => {
  const features = [
    {,
    title: "3D Holographic Display",
        description: "Immersive 3D holographic interface that projects data and applications into your physical space.",
        icon: <Monitor className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500"
    },
    {,
    title: "Remote Collaboration",
        description: "Seamless collaboration with team members in shared holographic workspaces from anywhere in the world.",
        icon: <Users className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500"
    },
    {,
    title: "Data Visualization",
        description: "Transform complex data into interactive 3D visualizations that you can manipulate with gestures.",
        icon: <BarChart3 className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500"
    },
    {,
    title: "Gesture Control",
        description: "Control your holographic workspace with natural hand gestures and eye tracking technology.",
        icon: <Hand className="w-8 h-8" />,
        color: "from-orange-500 to-red-500"
    }

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

  const pricingPlans = [
    {,
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
<<<<<<< HEAD
        popular: false
=======
      popular: false;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    },
    {,
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
<<<<<<< HEAD
        popular: true
=======
      popular: true;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    },
    {,
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
<<<<<<< HEAD
        popular: false
=======
      popular: false;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    }

  const testimonials = [
    {,
    name: "Dr. Alex Thompson",
        company: "Future Tech Labs",
        role: "Research Director",
        content: "The holographic workspace has revolutionized how we collaborate. The 3D data visualization capabilities are absolutely mind-blowing.",
        rating: 5,
        avatar: "AT"
    },
    {,
    name: "Maria Rodriguez",
        company: "Design Innovation Co.",
        role: "Creative Director",
        content: "Working in 3D space has completely changed our design process. We can now visualize and iterate on concepts in ways we never thought possible.",
        rating: 5,
        avatar: "MR"
    },
    {,
    name: "James Chen",
        company: "Global Engineering Solutions",
        role: "CTO",
        content: "The remote collaboration features are incredible. Our distributed team feels like they're working in the same room, even across continents.",
        rating: 5,
        avatar: "JC"
    }

  const stats = [
    { number: "360°", label: "Field of View", icon: <Eye className="w-6 h-6" /> },
    { number: "4K", label: "Holographic Resolution", icon: <Monitor className="w-6 h-6" /> },
    { number: "50+", label: "Concurrent Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> }

import React from 'react';

export default function Page() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Holographic Workspace - Zion Tech Group</title>
        <meta name="description" content="Advanced ai holographic workspace solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
<<<<<<< HEAD
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Holographic Workspace
=======

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Page
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function AiholographicworkspacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Holographic Workspace</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
<<<<<<< HEAD
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { Monitor, ArrowRight, CheckCircle, Star, Shield, BarChart3, Users, Eye, Hand } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
