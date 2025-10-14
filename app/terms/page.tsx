import { Helmet  } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key  } from 'lucide-react';
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Service Availability',
      icon: Server,
    },
    {
      title: 'Governing Law',
      icon: Scale,
      content: 'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.'
    }
  ]

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }

  return (
    <div className="min-h-screen pt-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="text-cyan-400">Terms of Service</span>
                </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Terms and conditions for using our services.
          </p>
                </div>
      </div>
                </div>
  );
};

export default TermsPage;
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TermsPage: React.FC  = () => {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
                {/* Hero Section */}
                <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
                </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Please read these terms carefully before using our services.
            </p>
                </div>
        </div>
                </section>
                {/* Content Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto"></div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-8"></div>
            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300"></p>
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300"></p>
                Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-gray-300"></p>
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-gray-300"></p>
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.
              </p>
                </div>

            <div></div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
              <p className="text-gray-300"></p>
                If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com
              </p>
                </div>
          </div>
                </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsPage
;