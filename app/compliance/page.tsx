import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { FileText } from 'lucide-react';

export default function page() {

  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls for service organizations",
      status: "Certified",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      status: "Certified",
      icon: <Lock className="w-8 h-8" />
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data",
      status: "Compliant",
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      status: "Compliant",
      icon: <FileText className="w-8 h-8" />
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      status: "Compliant",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act compliance",
      status: "Compliant",
      icon: <Users className="w-8 h-8" />
  ];

  const services = [
    {
      title: "Compliance Assessment",
      description: "Comprehensive evaluation of your current compliance posture and gap analysis",
      features: ["Risk Assessment", "Gap Analysis", "Remediation Planning", "Documentation Review"]
    },
    {
      title: "Policy Development",
      description: "Custom policies and procedures tailored to your industry and regulatory requirements",
      features: ["Policy Creation", "Procedure Documentation", "Training Materials", "Implementation Support"]
    },
    {
      title: "Audit Support",
      description: "Expert guidance and support throughout the audit process",
      features: ["Pre-Audit Preparation", "Audit Management", "Evidence Collection", "Remediation Support"]
    },
    {
      title: "Ongoing Monitoring",
      description: "Continuous monitoring and maintenance of compliance programs",
      features: ["Regular Assessments", "Policy Updates", "Training Programs", "Incident Response"]
  ];
export default function CompliancePage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Compliance solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Compliance</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive compliance solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}