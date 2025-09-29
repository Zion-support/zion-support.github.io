import React from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Cloud, 
  Lock, 
  TrendingUp, 
  Users,
  CheckCircle
} from 'lucide-react';

export default function ModernFeatures(): React.JSX.Element {
  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Lightning‑Fast Performance", description: "Optimized architectures with edge delivery and smart caching." },
    { icon: <Shield className="w-8 h-8" />, title: "Enterprise‑Grade Security", description: "Zero‑trust patterns, policy tests, and signed releases." },
    { icon: <Globe className="w-8 h-8" />, title: "Global Scale", description: "Multi‑region, multi‑cloud with instant rollbacks and budgets." },
    { icon: <Brain className="w-8 h-8" />, title: "AI‑Native", description: "Agents, evals, and telemetry wired to business outcomes." },
    { icon: <Cloud className="w-8 h-8" />, title: "Cloud‑Smart", description: "Cost‑aware routing, autoscaling, and workload placement." },
    { icon: <Lock className="w-8 h-8" />, title: "Privacy by Design", description: "On‑device redaction and least‑privilege data access." },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Measurable Impact", description: "Scorecards tied to KPIs and guardrails teams adopt." },
    { icon: <Users className="w-8 h-8" />, title: "Delightful UX", description: "Thoughtful interactions, accessibility, and fast paths." }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Modern Technology, <span className="text-blue-600">Exceptional Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies to deliver solutions that drive innovation, 
            efficiency, and growth for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">Proven Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">Cutting-Edge Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700 font-medium">Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}