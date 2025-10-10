'use client';
import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react'
export default function TermsPage() {;
const lastUpdated = 'January 1, 2024';
  ;
const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.']
    },
    {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.']
    },
    {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services.']
    },
    {
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.']
    },
    {
      title: 'Privacy Policy',
      icon: Lock,
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.']
    },
    {
      title: 'Intellectual Property',
      icon: Database,
      content: 'All content, trademarks, and other intellectual property on this website are the property of Zion Tech Group.']
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: 'We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever.']
    },
    {
      title: 'Governing Law',
      icon: Scale,
      content: 'These terms shall be governed by and construed in accordance with the laws of the United States.';);
  ];
  return (
    <div>
      <div>
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6"></h1>
            Terms of Service</h1>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"></p>
            Please read these terms carefully before using our services
          </p>
          <div>
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div className="space-y-8"></div>
              {sections.map((section, index) => (</div>
                <div>
                  <div>
                    <div>
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
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

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4"></h>Contact Information</h3>
              <p className="text-gray-700 mb-6"></p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div>
                <div>
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>legal@ziontechgroup.com</span>
                </div>
                <div>
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>(302) 464-0950</span>
                </div>
                <div>
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>ziontechgroup.com</span>
                </div>
                <div>
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>Zion Tech Group Legal Team</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500"></p>
                By using our services, you acknowledge that you have read and understood these terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ););