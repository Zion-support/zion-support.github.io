'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Calendar } from 'lucide-react';

const ZionAiMeetingAssistantPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Meeting Assistant"
      description="AI-powered meeting management with automated scheduling and note-taking."
      icon={Calendar}
      features={["Smart Scheduling","Meeting Notes","Action Items","Follow-up Reminders","Integration APIs","Analytics Dashboard"]}
      benefits={["Better Meetings","Automated Notes","Follow-up Tracking","Time Saving"]}
      pricing="$119/month"
      category="MicroSAAS"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default ZionAiMeetingAssistantPage;
