import { Helmet } from "react-helmet-async";
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { TrendingUp } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Lock } from 'lucide-react';

export default function AIQuantumComputingPage() {
  const testimonials = [
    { name: "John Doe", role: "CEO", company: "Tech Corp", content: "Great service!", rating: 5, avatar: "/api/placeholder/64/64" }
  ];
  const features = [
    "Quantum Algorithm Development",
    "Quantum Circuit Optimization",
    "Quantum Error Correction",
    "Quantum Machine Learning",
    "Quantum Cryptography",
    "Quantum Simulation"
  ];

  const applications = [
    "Drug Discovery & Molecular Simulation",
    "Financial Modeling & Risk Analysis",
    "Cryptography & Security",
    "Optimization Problems",
    "Machine Learning & AI",
    "Climate Modeling"
  ];
  
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

export default function AiQuantumComputingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Quantum Computing - Zion Tech Group</title>
        <meta name="description" content="Ai Quantum Computing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Quantum Computing</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai quantum computing solutions designed to meet your business needs.
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
}

}