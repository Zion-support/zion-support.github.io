import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Cpu,
  Zap,
  Shield,
  Brain,
  Target,
  CheckCircle,
  Globe,
  Activity,
  Lock,
  Gauge
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const QuantumComputingSolutionsPage = () => {
  const features = [
    {
      title: "Quantum Processing",
      description: "Harness quantum computing power for complex calculations and optimization problems",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Quantum Security",
      description: "Unbreakable quantum encryption and secure communication protocols",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Advanced AI algorithms powered by quantum computing principles",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum algorithms",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and small quantum projects",
      features: [
        "Basic quantum processing",
        "10 quantum algorithms",
        "Standard quantum security",
        "Basic optimization tools",
        "Email support",
        "Quantum simulation"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for enterprises and advanced quantum applications",
      features: [
        "Advanced quantum processing",
        "50+ quantum algorithms",
        "Full quantum security suite",
        "Advanced optimization",
        "Priority support",
        "API access",
        "Custom quantum circuits",
        "Quantum machine learning"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large organizations and government agencies",
      features: [
        "Unlimited quantum processing",
        "Unlimited algorithms",
        "Military-grade quantum security",
        "Full quantum optimization",
        "24/7 dedicated support",
        "Full API access",
        "Custom quantum hardware",
        "White-label solution",
        "SLA guarantee",
        "Dedicated quantum team"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Quantum Speed",
      description: "Process complex calculations exponentially faster than classical computers",
      speed: "10^9x",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution",
      security: "100%",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Optimization Accuracy",
      description: "Solve optimization problems with near-perfect accuracy",
      accuracy: "99.9%",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Quantum Coherence",
      description: "Maintain quantum states for extended computation periods",
      coherence: "99.7%",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "10^9x", label: "Processing Speed", icon: <Cpu className="w-6 h-6" /> },
    { number: "100%", label: "Security Level", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "Quantum Algorithms", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Quantum Monitoring", icon: <Globe className="w-6 h-6" /> }
  ];

export default function QuantumComputingSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Quantum Computing Solutions solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Quantum Computing Solutions</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive quantum computing solutions solutions designed to meet your business needs.
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