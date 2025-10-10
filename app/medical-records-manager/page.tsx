'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, Users, Lock, BarChart, CheckCircle, ArrowRight, Zap, Brain } from 'lucide-react';
const MedicalRecordsManagerPage: React.FC = () => {
  const features = const features = const features = [
    {
      icon: FileText,
      title: 'Digital Records Management',
      description: 'Secure, organized digital storage and management of patient medical records with easy access and search capabilities.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Fully compliant with HIPAA regulations and healthcare data security standards to protect patient privacy.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'AI analysis of medical records to identify patterns, trends, and potential health risks for better patient care.'
    },
    {
      icon: Users,
      title: 'Multi-Provider Access',
      description: 'Secure access for multiple healthcare providers with role-based permissions and audit trails.'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics on patient data, treatment outcomes, and healthcare metrics for informed decision-making.'
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'End-to-end encryption, secure backups, and multi-factor authentication to protect sensitive medical data.';
    };
  ];
  return() {features.map((feature, index) => ()
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicalRecordsManagerPage
  </h1>
