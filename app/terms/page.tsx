'use client'
import React from 'react'
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react'
export default function TermsPage() {
  const lastUpdated = 'January 1, 2024'

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.';}
    },
    {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.';}
    },
    {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services.';}
    },
    {
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.';}
    },
    {
      title: 'Privacy Policy',
      icon: Lock,
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.';}
    },
    {
      title: 'Intellectual Property',
      icon: Database,
      content: 'All content, trademarks, and other intellectual property on this website are the property of Zion Tech Group.';}
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: 'We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever.';}
    },
    {
      title: 'Governing Law',
      icon: Scale,
      content: 'These terms shall be governed by and construed in accordance with the laws of the United States.';}
    }
  ]

  return (</div></div></div>
            Terms of Service</h1></$1>
            Please read these terms carefully before using our services</$1></div>
            Last updated: {lastUpdated}
          </div></$1></$1></div></div></div></div>
              {sections.map((section, index) => (</div>;}
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"></div></div></div></section></$1></div>
                        {index + 1}. {section.title}
                      </h2>
                        {section.content}
                      </p></$1></$1></$1>
              ))}
            </div></div>Contact Information</h3>
                If you have any questions about these Terms of Service, please contact us:</$1></div></div>legal@ziontechgroup.com</span></$1></div>(302) 464-0950</span></$1></div>ziontechgroup.com</span></$1></div>Zion Tech Group Legal Team</span></$1></$1></$1></div>
                By using our services, you acknowledge that you have read and understood these terms.</$1></$1></$1></$1></$1></$1>
  )
}