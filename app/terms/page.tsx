'use client';
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Terms of Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Terms and conditions for using our services.
          </p>
          <div></div>
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      <div></div>
        <div></div>
          <div></div>
            <div className="space-y-8"></div>
              {sections.map((section, index) => (</div>
                <div></div>
                  <div></div>
                    <div></div>
                      <section.icon className="h-6 w-6 text-blue-600" />
        </section>
                    </div>
                    <div></div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3"></h2>
                        {index + 1}. {section.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed"></p>
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ));
            </div>

            <div></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4"></h>Contact Information</h3>
              <p className="text-gray-700 mb-6"></p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div></div>
                <div></div>
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>legal@ziontechgroup.com</span>
                </div>
                <div></div>
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>(302) 464-0950</span>
                </div>
                <div></div>
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>ziontechgroup.com</span>
                </div>
                <div></div>
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>Zion Tech Group Legal Team</span>
                </div>
              </div>
            </div>

            <div></div>
              <p className="text-sm text-gray-500"></p>
                By using our services, you acknowledge that you have read and understood these terms.
              </p>
            </div>
          </div>
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

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300">
                Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-gray-300">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-gray-300">
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
              <p className="text-gray-300">
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
