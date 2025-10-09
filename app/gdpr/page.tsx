import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 neon-text">
            GDPR Compliance
          </h1>
          
          <div className="cyber-card hologram-card p-8">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Our Commitment to GDPR</h2>
                <p className="text-gray-300 leading-relaxed">
                  Zion Tech Group is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). 
                  We have implemented comprehensive data protection measures to safeguard your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Your Rights Under GDPR</h2>
                <div className="space-y-4">
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Access</h3>
                    <p className="text-gray-300 text-sm">
                      You have the right to request access to your personal data and receive a copy of the data we hold about you.
                    </p>
                  </div>
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Rectification</h3>
                    <p className="text-gray-300 text-sm">
                      You can request correction of inaccurate or incomplete personal data.
                    </p>
                  </div>
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Erasure</h3>
                    <p className="text-gray-300 text-sm">
                      You have the right to request deletion of your personal data under certain circumstances.
                    </p>
                  </div>
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Data Portability</h3>
                    <p className="text-gray-300 text-sm">
                      You can request a copy of your data in a structured, machine-readable format.
                    </p>
                  </div>
                  <div className="cyber-card p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Right to Object</h3>
                    <p className="text-gray-300 text-sm">
                      You can object to processing of your personal data for marketing purposes or legitimate interests.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Data We Collect</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We collect and process the following types of personal data:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Business information (company name, job title)</li>
                  <li>Website usage data and analytics</li>
                  <li>Communication preferences</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Legal Basis for Processing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We process your personal data based on the following legal grounds:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Consent:</strong> When you have given clear consent for processing</li>
                  <li><strong>Contract:</strong> When processing is necessary for contract performance</li>
                  <li><strong>Legitimate Interest:</strong> When we have a legitimate business interest</li>
                  <li><strong>Legal Obligation:</strong> When required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, 
                  alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in our privacy policy 
                  or as required by law. When data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Exercising Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To exercise any of your GDPR rights, please contact us at:
                </p>
                <div className="cyber-card p-4">
                  <p className="text-gray-300">
                    <strong>Email:</strong> <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a><br/>
                    <strong>Phone:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a><br/>
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Data Protection Officer</h2>
                <p className="text-gray-300 leading-relaxed">
                  We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. 
                  You can contact our DPO at <a href="mailto:dpo@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">dpo@ziontechgroup.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Complaints</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint 
                  with your local data protection authority or the Information Commissioner's Office (ICO).
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPRPage;
