'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Cpu } from 'lucide-react';

const AiEdgeComputingPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Edge Computing"
      description="Distributed AI processing at the edge for real-time decision making and reduced latency."
      icon={Cpu}
      features={["Real-time Processing","Low Latency","Offline Capability","Distributed Intelligence","Edge Analytics","IoT Integration"]}
      benefits={["Faster Response","Reduced Bandwidth","Better Privacy","Reliable Performance"]}
      pricing="$899/month"
      category="AI"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default AiEdgeComputingPage;
