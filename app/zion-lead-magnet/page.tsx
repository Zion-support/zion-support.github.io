'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Target } from 'lucide-react';

const ZionLeadMagnetPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Lead Magnet"
      description="AI-powered lead generation platform with automated nurturing and conversion optimization."
      icon={Target}
      features={["Lead Capture","Automated Nurturing","Scoring System","Email Campaigns","Analytics Dashboard","A/B Testing"]}
      benefits={["More Leads","Higher Conversion","Automated Nurturing","Better ROI"]}
      pricing="$179/month"
      category="MicroSAAS"
      color="from-yellow-500 to-orange-600"
    />
  );
};

export default ZionLeadMagnetPage;
