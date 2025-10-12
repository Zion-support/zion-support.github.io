'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Eye } from 'lucide-react';

const AiVideoAnalysisPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Video Analysis"
      description="Intelligent video content analysis for security, marketing, and business intelligence."
      icon={Eye}
      features={["Object Detection","Facial Recognition","Motion Analysis","Content Moderation","Video Search","Real-time Monitoring"]}
      benefits={["Enhanced Security","Content Insights","Automated Monitoring","Better Analytics"]}
      pricing="$699/month"
      category="AI"
      color="from-rose-500 to-pink-600"
    />
  );
};

export default AiVideoAnalysisPage;
