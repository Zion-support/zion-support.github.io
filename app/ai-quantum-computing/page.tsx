import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Atom, Monitor, Phone } from 'lucide-react';
import SEOOptimizer from "../components/SEOOptimizer";

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
    }
}