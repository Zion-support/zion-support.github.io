'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Cpu } from 'lucide-react';

const AiAutonomousSystemsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Autonomous Systems"
      description="Self-operating AI systems for autonomous vehicles, robotics, and intelligent automation."
      icon={Cpu}
      features={["Autonomous Navigation","Decision Making","Sensor Integration","Machine Learning","Safety Systems","Real-time Processing"]}
      benefits={["Autonomous Operation","Reduced Human Error","24/7 Operation","Cost Efficiency"]}
      pricing="Custom Pricing"
      category="Emerging"
      color="from-orange-500 to-red-600"
    />
  );
};

export default AiAutonomousSystemsPage;
