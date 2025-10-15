<<<<<<< HEAD

ursor/fix-errors-and-merge-to-main-9be1
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

const CybersecuritySolutions = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="w-8 h-8" />,
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      price: "From $2,499/assessment",
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Threat intelligence"],
      price: "From $1,999/month",
    },
    {
      title: "Identity Management",
      description: "Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Single sign-on", "Access governance", "Privileged access"],
      price: "From $1,299/month",
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup security", "Data loss prevention", "Compliance monitoring"],
      price: "From $1,799/month",
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$2,999",
      period: "/month",
      description: "Basic security protection for small to medium businesses",
      features: [
        "Security assessment",
        "Basic threat monitoring",
        "Email security",
        "Firewall management",
        "Standard support",
        "Monthly reports"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Advanced security solutions for growing businesses",
      features: [
        "Comprehensive security assessment",
        "Advanced threat detection",
        "Identity management",
        "Data protection",
        "Priority support",
        "Weekly reports",
        "Incident response",
        "Security training"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "Full security audit",
        "AI-powered threat detection",
        "Advanced identity management",
        "Comprehensive data protection",
        "24/7 dedicated support",
        "Real-time reporting",
        "Custom security policies",
        "Dedicated security team",
        "Compliance management"
      ],
      popular: false,
    }
  ];

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
>>>>>>> main
import React from 'react;'
import { Helmet } from 'react-helmet-async;'
'use client;''
export default function Page() {
>>>>>>> main
  return (
    <div className="min-h-screen bg-white">""
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />""
      </Helmet>
      <div className="container mx-auto px-4 py-16">;""
        <div className="text-center">;""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">;""
            Page;
          </h1>
          <p className="text-xl text-gray-600 mb-8">;""
            Professional page solutions tailored to your business needs.;
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">;""
                Expert Solutions;
              </h3>
              <p className="text-blue-700">;""
                Our team of experts delivers cutting-edge page solutions.;
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-green-900 mb-2">;""
                Custom Implementation;
              </h3>
              <p className="text-green-700">;""
                Tailored page implementations for your specific requirements.;
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;""
                24/7 Support;
              </h3>
              <p className="text-purple-700">;""
                Round-the-clock support for all your page needs.;
              </p>
            </div>
          </div>
          <div className="mt-12">;""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;""
              Get Started Today;
            </button>
          </div>
        </div>
      </div>
    </div>
  );}
}''
=======
import SEOHead from '../components/SEOHead';

const CybersecuritySolutionsPage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="Page - Zion Tech Group"
        description="Professional page solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page</h1>
          <pclassName="text-gray-300">

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="cybersecurity-solutions - Zion Tech Group - Zion Tech Group"";
        description="Zion Tech Group cybersecurity-solutions service page"";
      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">cybersecurity-solutions - Zion Tech Group</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
        </div>
      </div>
    </>
  ),
};

>>>>>>> main
>>>>>>> main
