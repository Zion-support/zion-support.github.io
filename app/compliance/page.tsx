'use client';

import React from 'react';
import {  FileText, Lock, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations',
      status: 'Certified',
      icon: Shield
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system certification',
      status: 'Certified',
      icon: Lock
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data',
      status: 'Compliant',
      icon: FileText
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: Users
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: Award
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: Globe
    }
  ];

  const features = [
    {
      title: 'Comprehensive Auditing',
      description: 'Regular internal and external audits to ensure ongoing compliance with all standards.'
    },
    {
      title: 'Data Protection',
      description: 'Advanced encryption and security measures to protect sensitive data and privacy.'
    },
    {
      title: 'Documentation',
      description: 'Complete documentation of policies, procedures, and compliance measures.'
    },
    {
      title: 'Training Programs',
      description: 'Regular training for all staff on compliance requirements and best practices.'
    }
  ];

  const benefits = [
    'Reduced risk of data breaches and security incidents',
    'Enhanced customer trust and confidence',
    'Competitive advantage in regulated industries',
    'Reduced legal and regulatory risks',
    'Improved operational efficiency',
    'Better data governance and management',
    'Streamlined audit processes',
    'Continuous compliance monitoring'
  ];

  return (
    <div>

    <>
      <Helmet>
  
        <title>Compliance - Security & Regulatory Compliance | Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>

      <div>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h1>
  
                <span>
  
                  Compliance &
                </span>
                <br>
  
                <span className="text-white">Security Standards</span>
              </h1>
              <p>
  
                We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
              </p>
              <div>
  
                <button>
  
                  View Certifications
                  <ArrowRight>
  
                </button>
                <button>
  
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Our Compliance Certifications
              </h2>
              <p>
  
                We maintain compliance with the most stringent security and regulatory standards.
              </p>
            </div>
            <div>
  
              {complianceStandards.map((standard, index) => (
                <div>
  
                  <div>
  
                    <standard>
  
                    <div>
  
                      <h3 className="text-xl font-semibold text-white">{standard.name}</h3>
                      <span>
  
                        {standard.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Our Compliance Program
              </h2>
              <p>
  
                Comprehensive approach to maintaining the highest standards of security and compliance.
              </p>
            </div>
            <div>
  
              {features.map((feature, index) => (
                <div>
  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Benefits of Our Compliance Program
              </h2>
              <p>
  
                Experience the advantages of working with a fully compliant technology partner.
              </p>
            </div>
            <div>
  
              {benefits.map((benefit, index) => (
                <div>
  
                  <CheckCircle>
  
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Questions About Our Compliance?
            </h2>
            <p>
  
              Contact our compliance team to learn more about our security standards and certifications.
            </p>
            <div>
  
              <button>
  
                <Shield>
  
                View Certifications
              </button>
              <button>
  
                <FileText>
  
                Download Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompliancePage;