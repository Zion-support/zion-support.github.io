'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Eye } from 'lucide-react';

const AiComputerVisionPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Computer Vision"
      description="Advanced computer vision solutions for image recognition, object detection, and visual analysis."
      icon={Eye}
      features={["Image Recognition","Object Detection","Facial Recognition","Quality Control","Visual Search","Augmented Reality"]}
      benefits={["Automated Visual Tasks","Improved Accuracy","Real-time Processing","Cost Reduction"]}
      pricing="$599/month"
      category="AI"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default AiComputerVisionPage;
