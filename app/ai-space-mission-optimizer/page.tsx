import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Rocket,
  Satellite,
  Orbit,
  Zap,
  Target,
  CheckCircle,
  Globe,
  Activity,
  Navigation,
  Gauge
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AISpaceMissionOptimizerPage = () => {
  const features = [
    {
      title: "Mission Planning AI",
      description: "AI-powered mission planning with optimal trajectory calculations and resource allocation",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Optimization",
      description: "Continuous mission optimization based on real-time data and changing conditions",
      icon: <Activity className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Satellite Management",
      description: "Comprehensive satellite constellation management and coordination",
      icon: <Satellite className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk analysis for space missions with collision avoidance",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Mission Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small satellite missions and research projects",
      features: [
        "Basic mission planning",
        "5 satellite tracking",
        "Standard trajectory optimization",
        "Basic risk assessment",
        "Email support",
        "Mission reports"
      ],
      popular: false
    },
    {
      name: "Mission Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for commercial satellite operators and space agencies",
      features: [
        "Advanced mission planning",
        "50 satellite tracking",
        "Real-time optimization",
        "Advanced risk modeling",
        "Priority support",
        "API access",
        "Custom algorithms",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Mission Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large space organizations and government agencies",
      features: [
        "Unlimited mission planning",
        "Unlimited satellite tracking",
        "AI-powered optimization",
        "Full risk management",
        "24/7 dedicated support",
        "Full API access",
        "Custom AI models",
        "White-label solution",
        "SLA guarantee",
        "Dedicated mission control"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Trajectory Optimization",
      description: "Calculate optimal flight paths with 99.9% fuel efficiency",
      accuracy: "99.9%",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      title: "Collision Avoidance",
      description: "Real-time collision detection and avoidance maneuvers",
      accuracy: "99.8%",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Resource Management",
      description: "Optimize fuel, power, and payload allocation",
      accuracy: "97.5%",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Mission Success Rate",
      description: "Increase mission success rates with AI optimization",
      accuracy: "94.2%",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "99.9%", label: "Trajectory Accuracy", icon: <Rocket className="w-6 h-6" /> },
    { number: "50ms", label: "Real-Time Processing", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Satellites Tracked", icon: <Satellite className="w-6 h-6" /> },
    { number: "24/7", label: "Mission Monitoring", icon: <Globe className="w-6 h-6" /> }
  ];

export default function AiSpaceMissionOptimizerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Space Mission Optimizer - Zion Tech Group</title>
        <meta name="description" content="Ai Space Mission Optimizer solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Space Mission Optimizer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai space mission optimizer solutions designed to meet your business needs.
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
