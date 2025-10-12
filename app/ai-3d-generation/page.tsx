'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Box } from 'lucide-react';

const Ai3dGenerationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI 3D Generation"
      description="Revolutionary AI-powered 3D content creation and generation for immersive experiences."
      icon={Box}
      features={["3D Model Generation","Texture Creation","Animation Generation","VR/AR Content","Real-time Rendering","Custom Training"]}
      benefits={["Faster Creation","Cost Reduction","High Quality","Scalable Production"]}
      pricing="$1,999/month"
      category="Emerging"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default Ai3dGenerationPage;
