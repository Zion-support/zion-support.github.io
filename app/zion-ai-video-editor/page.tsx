'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Eye } from 'lucide-react';

const ZionAiVideoEditorPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Video Editor"
      description="AI-powered video editing platform with automated editing and intelligent features."
      icon={Eye}
      features={["Auto Editing","Smart Cuts","Color Correction","Audio Enhancement","Text Overlay","Export Options"]}
      benefits={["Professional Quality","Save Time","Easy to Use","Consistent Results"]}
      pricing="$149/month"
      category="MicroSAAS"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default ZionAiVideoEditorPage;
