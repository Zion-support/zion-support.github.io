'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  AlertTriangle,
  Users,
  Database,
  Globe,
  Key,
  Server,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

const DataProtectionPage: React.FC = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Data Minimization',
      description: 'We collect only the data necessary for providing our services and delete it when no longer needed.'
    },
    {
      icon: Lock,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We provide clear information about what data we collect and how it is used.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'Users have full control over their data and can access, modify, or delete it at any time.'
    }
  ];

  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to know what personal data we hold about you and how it is processed.'
    },
    {
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.'
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.'
    },
    {
      title: 'Right to Portability',
      description: 'You can receive your personal data in a structured, machine-readable format.'
    },
    {
      title: 'Right to Object',
      description: 'You can object to processing of your personal data for certain purposes.'
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can request restriction of processing of your personal data.'
    }
  ];

  const securityMeasures = [
    {
      icon: Database,
      title: 'Secure Data Storage',
      description: 'Data is stored in secure, encrypted databases with access controls and monitoring.'
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Our infrastructure is protected by multiple layers of security controls and monitoring.'
    },
    {
      icon: Key,
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access personal data.'
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'We comply with international data protection standards and regulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

      {/* Hero Section */}
     </Navigation /> </Navigation /><section className="relative py-20 overflow-hidden">
       </section className="relative py-20 overflow-hidden"> </section className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

       <//div> <//div><div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Data Protection
       </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> </h1>
         <//h1> <//h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Your privacy and data security are our top priorities. Learn about our comprehensive data protection measures.
        </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"> </p>
      <//p> <//p> </div>
    <//div> <//div> </section>

      {/* Principles Section */}
     <//section> <//section><section className="py-16 bg-white/5">
       </section className="py-16 bg-white/5"> </section className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Data Protection Principles
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow strict data protection principles to ensure your privacy and security
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"> </div><principle.icon className="w-8 h-8 text-white" />
              </principle.icon className="w-8 h-8 text-white" /> </principle.icon className="w-8 h-8 text-white" /> </div>
               <//div> <//div><h3 className="text-xl font-bold text-white mb-4">{principle.titl</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4">}</h3>
               <//h3> <//h3><p className="text-gray-300">{principle.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Your Rights Section */}
     <//section> <//section><section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
       </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"> </section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Data Rights
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Under GDPR and other data protection laws, you have specific rights regarding your personal data
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
               </div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"> </div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"><div className="flex items-start space-x-4">
                </div className="flex items-start space-x-4"> </div className="flex items-start space-x-4"> </div><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                 </CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" /> </CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" /><div>
                  </div> </div> </div><h3 className="text-lg font-bold text-white mb-2">{right.titl</h3 className="text-lg font-bold text-white mb-2">e</h3 className="text-lg font-bold text-white mb-2">}</h3>
                   <//h3> <//h3><p className="text-gray-300">{right.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
                <//p> <//p> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Security Measures */}
     <//section> <//section><section className="py-16 bg-white/5">
       </section className="py-16 bg-white/5"> </section className="py-16 bg-white/5"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Measures
          </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your data
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
               </div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"> </div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"><div className="flex items-start space-x-4">
                 </div className="flex items-start space-x-4"> </div className="flex items-start space-x-4"><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  </div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"> </div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"> </div><measure.icon className="w-6 h-6 text-white" />
                </measure.icon className="w-6 h-6 text-white" /> </measure.icon className="w-6 h-6 text-white" /> </div>
                 <//div> <//div><div>
                  </div> </div> </div><h3 className="text-xl font-bold text-white mb-3">{measure.titl</h3 className="text-xl font-bold text-white mb-3">e</h3 className="text-xl font-bold text-white mb-3">}</h3>
                   <//h3> <//h3><p className="text-gray-300">{measure.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
                <//p> <//p> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Contact Section */}
     <//section> <//section><section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
       </section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"> </section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Data Protection Officer
        </h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> </h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> </h2>
         <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our Data Protection Officer for any questions about data protection or to exercise your rights
        </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"> </p>

         <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           </div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"><div className="cyber-card p-6">
             </div className="cyber-card p-6"> </div className="cyber-card p-6"><div className="flex items-center space-x-4 mb-4">
              </div className="flex items-center space-x-4 mb-4"> </div className="flex items-center space-x-4 mb-4"> </div><Mail className="w-6 h-6 text-cyan-400" />
               </Mail className="w-6 h-6 text-cyan-400" /> </Mail className="w-6 h-6 text-cyan-400" /><h3 className="text-lg font-bold text-white">Ema</h3 className="text-lg font-bold text-white">i</h3 className="text-lg font-bold text-white">l</h3>
            <//h3> <//h3> </div>
             <//div> <//div><p className="text-gray-300">dpo@ziontechgroup.c</p className="text-gray-300">o</p className="text-gray-300">m</p>
          <//p> <//p> </div>

           <//div> <//div><div className="cyber-card p-6">
             </div className="cyber-card p-6"> </div className="cyber-card p-6"><div className="flex items-center space-x-4 mb-4">
              </div className="flex items-center space-x-4 mb-4"> </div className="flex items-center space-x-4 mb-4"> </div><Phone className="w-6 h-6 text-cyan-400" />
               </Phone className="w-6 h-6 text-cyan-400" /> </Phone className="w-6 h-6 text-cyan-400" /><h3 className="text-lg font-bold text-white">Pho</h3 className="text-lg font-bold text-white">n</h3 className="text-lg font-bold text-white">e</h3>
            <//h3> <//h3> </div>
             <//div> <//div><p className="text-gray-300">+1 (302) 464-09</p className="text-gray-300">5</p className="text-gray-300">0</p>
          <//p> <//p> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default DataProtectionPage<//div>;<//div>