'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Cpu } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Quantum Computing"
      description="Next-generation quantum computing solutions for complex problem solving and optimization."
      icon={Cpu}
      features={["Quantum Algorithms","Optimization Problems","Cryptography","Simulation","Machine Learning","Research Support"]}
      benefits={["Exponential Speed","Complex Problem Solving","Future Technology","Competitive Advantage"]}
      pricing="Custom Pricing"
      category="Emerging"
      color="from-violet-500 to-purple-600"
    />
  );
};

export default QuantumComputingPage;
