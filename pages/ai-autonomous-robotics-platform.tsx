import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Layout from '../components/layout/Layout';

import { Bot, Cpu, Zap, Target, Users, Globe, Brain, Rocket, Shield } from 'lucide-react';

const AIAutonomousRoboticsPlatform: React.FC = () => {
  const platformComponents = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Autonomous Robots",
      description: "Self-navigating robots with advanced AI decision-making capabilities"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Control System",
      description: "Centralized AI brain managing all robotic operations and coordination"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Advanced visual processing for object recognition and navigation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Power Management",
      description: "Intelligent energy optimization and autonomous charging systems"
    }
  ];

  const capabilities = [
    "Autonomous navigation and pathfinding",
    "Real-time obstacle detection and avoidance",
    "Multi-robot coordination and swarm intelligence",
    "Adaptive learning and behavior modification",
    "Human-robot collaboration and safety protocols",
    "Remote monitoring and control systems",
    "Predictive maintenance and self-diagnostics",
    "Scalable deployment across multiple environments"
  ];

  const applications = [
    {
      industry: "Manufacturing",
      useCases: ["Assembly Lines, Quality Control, Material Handling, Warehouse Automation""
    },
    {
      industry: "Healthcare",
      useCases: ["Surgical Assistance, Patient Care, Medical Supply Delivery, Sanitization""
    },
    {
      industry: "Agriculture",
      useCases: ["Crop Monitoring, Harvesting, Soil Analysis, Pest Control""
    },
    {
      industry: "Logistics",
      useCases: ["Package Sorting, Inventory Management, Last-Mile Delivery, Storage Optimization""
    }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const ai-autonomous-robotics-platform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ai-autonomous-robotics-platform | Zion Tech Group</title>
        <meta name="description" content="ai-autonomous-robotics-platform - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ai-autonomous-robotics-platform</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ai-autonomous-robotics-platform;