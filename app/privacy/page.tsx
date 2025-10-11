import React from 'react';;
import { Helmet; } from 'react-helmet-async';
import Navigation from '../components/Navigation';;
import Footer from '../components/Footer';;
import { Shield;, Eye, Database, Server, Mail, Phone, MapPin, CheckCircle, User, Edit, Trash2 } from 'lucide-react';
const PrivacyPage: React.FC = () => {;
const dataTypes = [;
    {}
category: 'Personal Information'},;
icon: User,;
description: 'Name, email, phone number, and other identifying information'
    },
    {;
category: 'Contact Information',;
icon: Database,;
description: 'Name, email, phone number, and contact details'
    },
    {;
category: 'Usage Data',;
icon: Server,;
description: 'How you interact with our services and website'
    },
    {;
category: 'Technical Data',;
icon: Server,;
description: 'IP address, browser type, device information, and cookies'
    }
  ];
const purposes = [;
    {;
title: 'Service Provision',;
description: 'To provide and maintain our AI and IT services',;
icon: CheckCircle
    },
    {;
title: 'Communication',;
description: 'To respond to inquiries and provide customer support',;
icon: CheckCircle
    },
    {;
title: 'Improvement',;
description: 'To analyze usage patterns and improve our services',;
icon: CheckCircle
    },
    {;
title: 'Legal Compliance',;
description: 'To comply with applicable laws and regulations',;
icon: CheckCircle
    }
  ];
const rights = [;
    {;
title: 'Access',;
description: 'Request access to your personal data',;
icon: Eye
    },
    {;
title: 'Rectification',;
description: 'Correct inaccurate or incomplete data',;
icon: Edit
    },
    {;
title: 'Erasure',;
description: 'Request deletion of your personal data',;
icon: Trash2
    },
    {;
title: 'Portability',;
description: 'Receive your data in a structured format',;
icon: Database
    }
  ];
const contactInfo={;;
email: 'privacy@ziontechgroup.com',;
phone: '+1 (302) 464-0950',;
address: '364 E Main St STE 1008, Middletown, DE 19709'}
;
const contactInfo={;;
email: 'privacy@ziontechgroup.com',;
phone: '+1 (302) 464-0950',;
address: '364 E Main St STE 1008, Middletown, DE 19709'}
;
return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about how Zion Tech Group protects your privacy and handles your personal data in compliance with GDPR and other privacy regulations." /></meta>
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, privacy rights, data security" /></meta>
      <Navigation /></Navigation>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl m,
      d:text-6xl font-bold text-white mb-6">;
Privacy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.

          <div className="flex items-center justify-center text-cyan-400"></div>
            <Shield className="w-6 h-6 mr-2" /></Shield>
            <span className="font-semibold">Last updated: {new Date().toLocaleDateString()}</span>



      {/* Data Collection Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Information We Collect

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We collect information to provide better services to our users


          <div className="grid grid-cols-1 m,
      d:grid-cols-3 gap-8"></div>
            {dataTypes.map((type), index) => ()
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6"></div>
                  <type.ico,
      n: className="w-8 h-8 text-white" /></type>
                <h3 className="text-xl font-bold text-white mb-4">{type.category}</h3>
                <p className="text-gray-300">{type.description}</p>

            ))},
    {/* Purposes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl m,
      d:text-4xl font-bold text-white mb-4">;
How We Use Your Information

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
We use your information for specific, legitimate purposes


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            {purposes.map((purpose), index) => ()
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex items-start"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"></div>
                    <purpose.ico,
      n: className="w-6 h-6 text-white" /></purpose>
                  <div></div>
                    <h3 className="text-xl font-bold text-white mb-2">{purpose.title}</h3>
                    <p className="text-gray-300">{purpose.description}</p>



            ))},
    {/* Rights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
Your Privacy Rights

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
You have control over your personal data


          <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
            {rights.map((right), index) => ()
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"></div>
                  <right.ico,
      n: className="w-8 h-8 text-white" /></right>
                <h3 className="text-xl font-bold text-white mb-4">{right.title}</h3>
                <p className="text-gray-300">{right.description}</p>

            ))},
    {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
Questions About Privacy?

            <p className="text-xl text-gray-300 mb-8">;
Contact our privacy team for any questions or concerns about your data

            <div className="grid grid-cols-1 m,
      d:grid-cols-3 gap-8 mb-8"></div>
              <div className="flex items-center justify-center"></div>
                <Mail className="w-6 h-6 text-cyan-400 mr-3" /></Mail>
                <span className="text-white">{contactInfo.email}</span>

              <div className="flex items-center justify-center"></div>
                <Phone className="w-6 h-6 text-cyan-400 mr-3" /></Phone>
                <span className="text-white">{contactInfo.phone}</span>

              <div className="flex items-center justify-center"></div>
                <MapPin className="w-6 h-6 text-cyan-400 mr-3" /></MapPin>
                <span className="text-white text-sm">{contactInfo.address}</span>


            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hove,
      r:scale-105">;
Contact Privacy Team




      <Footer /></Footer>
  )
}
;
export default PrivacyPage