import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecuritySolutions = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];
import { Eye, AlertTriangle, Users, Database, Check } from 'lucide-react';
export default function CybersecuritySolutionsPage() {
  const services = [
    {
      title: "Security Assessment"Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="Vulnerability scanning", ", "Risk assessment"Compliance audit"],
      price: ",
    },
    {
      title: "Threat Detection"Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="AI-powered detection", ", "Automated response"Threat intelligence"],
      price: ",
    },
    {
      title: "Identity Management"Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="Multi-factor authentication", ", "Access governance"Privileged access"],
      price: ",
    },
    {
      title: "Data Protection"Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="Data encryption", ", "Data loss prevention"Compliance monitoring"],
      price: ",
    }
  ];

  const pricingPlans = [
    {
      name: "Essential"$2,999",
      period: ",
      description: "Basic security protection for small to medium businesses"Security assessment",
        ",
        "Email security"Firewall management",
        ",
        "Monthly reports"Professional",
      price: ",
      period: "/month"Advanced security solutions for growing businesses",
      features: [
        ",
        "Advanced threat detection"Identity management",
        ",
        "Priority support"Weekly reports",
        ",
        "Security training"Enterprise",
      price: ",
      period: "/month"Complete security suite for large organizations",
      features: [
        ",
        "AI-powered threat detection"Advanced identity management",
        ",
        "24/7 dedicated support"Real-time reporting",
        ",
        "Dedicated security team"Compliance management"
      ],
      popular: false,
    }
  ];
import React from 'react';
import { Helmet } from 'react-helmet-async';

  return (
    <div className="description" content=" />
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CybersecuritySolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="Advanced cybersecurity solutions solutions by Zion Tech Group"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6"text-2 xl font-semibold text-white mb-4"text-gray-300 mb-6"space-y-2 mb-6"flex items-center text-gray-300"w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"text-cyan-400 font-semibold"bg-white rounded-lg shadow-md p-6"text-xl font-semibold text-gray-900 mb-4"text-gray-600"bg-white rounded-lg shadow-md p-6"text-xl font-semibold text-gray-900 mb-4"text-gray-600"text-2 xl font-bold text-white mb-2"text-4 xl font-bold text-cyan-400 mb-2"text-gray-300"text-gray-300 mt-4"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"container mx-auto px-4 py-20"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl"bg-slate-800 p-8 rounded-lg"text-2 xl font-bold text-white mb-4"text-gray-300"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-6"text-xl text-gray-600 mb-8">
            Advanced cybersecurity solutions solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
