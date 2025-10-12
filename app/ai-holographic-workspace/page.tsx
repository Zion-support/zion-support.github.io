'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Monitor } from 'lucide-react';

const AiHolographicWorkspacePage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Holographic Workspace"
      description="Immersive holographic work environments powered by AI for enhanced collaboration and productivity."
      icon={Monitor}
      features={["Holographic Displays","Spatial Computing","AI Interaction","Collaborative Tools","3D Visualization","Gesture Control"]}
      benefits={["Immersive Experience","Better Collaboration","Enhanced Productivity","Future of Work"]}
      pricing="$2,999/month"
      category="Emerging"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default AiHolographicWorkspacePage;
