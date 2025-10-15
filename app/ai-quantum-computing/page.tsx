import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Cpu, Brain, Atom, Users, Award, Globe, Lock, TrendingUp, Monitor, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SEOOptimizer from "../../components/SEOOptimizer";

export default function AiQuantumComputing() {
  const features = [
    "Quantum machine learning algorithms for complex optimization",
    "Quantum simulation for drug discovery and materials science",
    "Quantum cryptography for ultra-secure communications",
    "Quantum annealing for combinatorial optimization problems",
    "Quantum neural networks for pattern recognition",
    "Quantum error correction and fault tolerance",
    "Hybrid quantum-classical computing workflows",
    "Quantum cloud access with real quantum hardware",
    "Advanced quantum algorithm development",
    "Quantum state preparation and manipulation",
    "Quantum entanglement and teleportation protocols",
    "Custom quantum circuit design and optimization"
  ];

  // const benefits = [
  //   "Solve problems 1000x faster than classical computers",
  //   "Breakthrough discoveries in science and medicine",
  //   "Unbreakable quantum encryption for data security",
  //   "Revolutionary optimization for complex systems"
  // ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "Perfect for academic research and small-scale quantum experiments",
      features: [
        "Up to 100 quantum circuit executions",
        "Basic quantum algorithms library",
        "Quantum simulator access",
        "Email support",
        "Basic documentation",
        "5 user accounts",
        "Standard quantum gates"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Ideal for large organizations and commercial quantum applications",
      features: [
        "Up to 1,000 quantum circuit executions",
        "Advanced quantum algorithms library",
        "Real quantum hardware access",
        "Priority support",
        "Advanced documentation",
        "25 user accounts",
        "Custom quantum gates",
        "API access",
        "Quantum error correction",
        "Dedicated quantum resources"
      ],
      popular: true
    },
    {
      name: "Quantum Lab",
      price: "$29,999",
      period: "/month",
      description: "For quantum research institutions and cutting-edge applications",
      features: [
        "Unlimited quantum circuit executions",
        "Complete quantum algorithms library",
        "Exclusive quantum hardware access",
        "24/7 dedicated support",
        "Custom quantum development",
        "Unlimited user accounts",
        "Custom quantum processors",
        "Advanced API access",
        "Quantum entanglement protocols",
        "Dedicated quantum scientists",
        "White-label quantum solutions",
        "On-premise quantum deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Institute",
      role: "Chief Quantum Scientist",
      content: "Zion's quantum computing platform has accelerated our research by years. We've made breakthrough discoveries in quantum chemistry that would have been impossible with classical computers.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Pharmaceutical Corp",
      role: "Head of R&D",
      content: "The quantum simulation capabilities are extraordinary. We've discovered new drug compounds and optimized molecular structures in weeks instead of years.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "Financial Services",
      role: "Quantitative Analyst",
      content: "Quantum optimization has revolutionized our portfolio management. We're achieving returns that were theoretically impossible with classical algorithms.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Simulate molecular interactions and discover new pharmaceutical compounds",
      icon: <Atom className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Optimization",
      description: "Optimize complex portfolios and risk management strategies",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cryptography",
      description: "Develop unbreakable quantum encryption and secure communications",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning",
      description: "Train quantum neural networks for advanced pattern recognition",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

const AiQuantumComputingPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="ai-quantum-computing - Zion Tech Group"
        description="Zion Tech Group ai-quantum-computing service page"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">ai-quantum-computing</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default AiQuantumComputingPage;
