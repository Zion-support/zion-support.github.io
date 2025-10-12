'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const ZionAiRecruitmentProPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Recruitment Pro"
      description="Intelligent recruitment platform with AI-powered candidate screening and matching."
      icon={Users}
      features={["Resume Screening","Candidate Matching","Interview Scheduling","Skill Assessment","Background Checks","Analytics Dashboard"]}
      benefits={["Faster Hiring","Better Matches","Reduced Bias","Improved Efficiency"]}
      pricing="$249/month"
      category="MicroSAAS"
      color="from-blue-500 to-indigo-600"
    />
  );
};

export default ZionAiRecruitmentProPage;
