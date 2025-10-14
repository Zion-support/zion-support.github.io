import { Helmet  } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle  } from 'lucide-react';
  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
    },
    {
      category: 'Usage Data',
      icon: Database,
    },
    {
      category: 'Technical Data',
      icon: Server,
    }
  ];
  const purposes = [
    {
    }
  ];
  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    },
    {
      title: 'Restriction',
      description: 'Limit how we process your data',
      icon: Lock
    },
    {
      title: 'Objection',
      description: 'Object to certain types of processing',
      icon: Shield
    }
  ]

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }

  return (
    <div className="min-h-screen pt-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="text-cyan-400">Privacy Policy</span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Your privacy is important to us. Learn how we protect your data.
          </p>
                </div>
      </div>
                </div>
  );
};

export default PrivacyPage;
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PrivacyPage: React.FC  = () => {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
                </div>
        </div>
                </section>
                {/* Content Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-8"></div>
            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300"></p>
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300"></p>
                We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300"></p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300"></p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300"></p>
                If you have any questions about this Privacy Policy, please contact us at privacy@ziontechgroup.com
              </p>
                </div>
          </div>
                </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPage
;