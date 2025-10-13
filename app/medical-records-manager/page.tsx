'use client';';
import React from 'react';';';
import {Helmet}}from 'react-helmet-async';';';
import {Shield, FileText, Users, Lock, BarChart, CheckCircle, ArrowRight, Zap, Brain}}from 'lucide-react';';';
const MedicalRecordsManagerPage: React.FC = () => {,;
const features = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: FileText,
      title: 'Digital Records Management','
      description: 'Secure, organized digital storage and management of patient medical records with easy access and search capabilities.'},'
    {icon: Shield,
      title: 'HIPAA Compliance','
      description: 'Fully compliant with HIPAA regulations and healthcare data security standards to protect patient privacy.',},'
    {icon: Brain,
      title: 'AI-Powered Insights','
      description: 'AI analysis of medical records to identify patterns, trends, and potential health risks for better patient care.'},'
    {icon: Users,
      title: 'Multi-Provider Access','
      description: 'Secure access for multiple healthcare providers with role-based permissions and audit trails.',},'
    {icon: BarChart,
      title: 'Analytics Dashboard','
      description: 'Comprehensive analytics on patient data, treatment outcomes, and healthcare metrics for informed decision-making.'},'
    {icon: Lock,
      title: 'Advanced Security','
    <>
<Helmet>
<title>Medical Records Manager | Zion Tech Group - Secure Healthcare Data Management</title>
<meta name="description"Secure, HIPAA-compliant medical records management system with AI-powered insights. Streamline healthcare data management and improve patient care." />"keywords" content=" />"
<div className="
<section className="py-20 px-4"max-w-7 xl mx-auto"
<div className="
<h1 className="text-4 xl md: text-6 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"
</div>
<div className="
              {features.map((feature, index) => (
  // TODO: Add parameters
)
                <div;
                  key={index}className="bg-white/5 backdrop-blur-lg rounded-2 xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300"w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6"
<feature.icon className="
<h3 className="text-xl font-bold text-white mb-4"text-gray-300"
              ))}
            </div></div>
</section></div>
</>;
export default MedicalRecordsManagerPage;
  </h1>
