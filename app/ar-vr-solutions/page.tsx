'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Monitor } from 'lucide-react';

const ArVrSolutionsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AR/VR Solutions"
      description="Immersive augmented and virtual reality solutions for training, entertainment, and business applications."
      icon={Monitor}
      features={["AR Applications","VR Experiences","Mixed Reality","3D Content","Interactive Design","Multi-platform Support"]}
      benefits={["Immersive Experience","Better Training","Enhanced Engagement","Innovative Solutions"]}
      pricing="$1,499/month"
      category="Emerging"
      color="from-pink-500 to-rose-600"
    />
  );
};

export default ArVrSolutionsPage;
