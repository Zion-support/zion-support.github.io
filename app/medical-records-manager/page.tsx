'use client';

import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
    <>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
=======
import { Helmet } from 'react-helmet-async';
import {Shield, FileText, Users, Lock, BarChart, CheckCircle, ArrowRight, Zap, Brain} from 'lucide-react';
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
  return (<React.Fragment>
      <Helmet />
    <>
      <Helmet>
        <title>Medical Records Manager | Zion Tech Group - Secure Healthcare Data Management</title>
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>Medical Records Manager | Zion Tech Group - Secure Healthcare Data Management</title>
        <meta name="description" content="Secure, HIPAA-compliant medical records management system with AI-powered insights. Streamline healthcare data management and improve patient care." />
        <meta name="keywords" content="medical records management, HIPAA compliance, healthcare data, patient records, medical software, healthcare analytics" />
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <section className="py-20px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">,</h1>
                Medical Records Manager,
  </
              <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Secure, HIPAA-compliant medical records management system with AI-powered insights to streamline healthcare data management and improve patient care.</p>
            </div>
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">,</div>
              {features.map((feature, index) => (
                <div;
                  key={index}className="bg-white/5backdrop-blur-lgrounded-2xlp-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">,</div>
                  <div className="w-16h-16bg-gradient-to-rfrom-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8h-8text-white" />
                  </div>
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )};

<<<<<<< HEAD
export default PagePage;
=======
export default MedicalRecordsManagerPage;
  </h1>
  )
}
export default MedicalRecordsManagerPage
  </h1>
                <$2 />
                  key={index}
                  className="bg-white/5backdrop-blur-lgrounded-2xlp-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16h-16bg-gradient-to-rfrom-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8h-8text-white" />
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
  )
}
export default MedicalRecordsManagerPage</div></div></div></p></p></h1></h3></section>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
