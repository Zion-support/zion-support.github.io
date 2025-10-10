'use client';
import React from 'react';
import {  Helmet  } from 'react-helmet-async';
import {  Shield, FileText, Users, Lock, BarChart, CheckCircle, ArrowRight, Zap, Brain  } from 'lucide-react';
const MedicalRecordsManagerPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Digital Records Management',
      description: 'Secure, organized digital storage and management of patient medical records with easy access and search capabilities.'},
    {icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Fully compliant with HIPAA regulations and healthcare data security standards to protect patient privacy.'},
    {icon: Brain,
      title: 'AI-Powered Insights',
      description: 'AI analysis of medical records to identify patterns, trends, and potential health risks for better patient care.'},
    {icon: Users,
      title: 'Multi-Provider Access',
      description: 'Secure access for multiple healthcare providers with role-based permissions and audit trails.'},
    {icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics on patient data, treatment outcomes, and healthcare metrics for informed decision-making.'},
    {icon: Lock,
      title: 'Advanced Security',
      description: 'End-to-end encryption, secure backups, and multi-factor authentication to protect sensitive medical data.'}]
  return (
      <React.Fragment></React.Fragment>
      <Helmet />
        <title>Medical Records Manager | Zion Tech Group - Secure Healthcare Data Management</title>
        <meta name="description" content="Secure, HIPAA-compliant medical records management system with AI-powered insights. Streamline healthcare data management and improve patient care." />
        <meta name="keywords" content="medical records management, HIPAA compliance, healthcare data, patient records, medical software, healthcare analytics" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1>
                Medical Records Manager,
  </
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Secure, HIPAA-compliant medical records management system with AI-powered insights to streamline healthcare data management and improve patient care.</p>
              </p>
            </div>
            <div>
              {features.map((feature, index) => (
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default MedicalRecordsManagerPage;
  </h1>