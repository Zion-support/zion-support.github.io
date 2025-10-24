<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Activity } from 'lucide-react';
import { FileText } from 'lucide-react';

const CybersecuritySolutions = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="w-8 h-8" />,
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      price: "From $2,499/assessment"
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Threat intelligence"],
      price: "From $1,999/month"
    },
    {
      title: "Identity Management",
      description: "Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Single sign-on", "Access governance", "Privileged access"],
      price: "From $1,299/month"
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup security", "Data loss prevention", "Compliance monitoring"],
      price: "From $1,799/month"
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
      cta: "Get Started"
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
      cta: "Get Started"
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
      cta: "Contact Sales"
    }
  ];
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

<<<<<<< HEAD
export default function CybersecuritySolutionsPage() {

  const capabilities = [
    {
      title: "AI-Powered Security",
      description: "Advanced threat detection and prevention using artificial intelligence",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and incident response",
      icon: <CheckCircle className="w-8 h-8" />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
=======
import React  from 'react';
const CybersecuritySolutionsPage: React.FC = () => {
  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity solutions for businesses" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional cybersecurity solutions coming soon.
          </p>
=======
export default function CybersecuritysolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity solutions services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cybersecurity Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cybersecurity solutions services coming soon.</p>
          
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
          <Link
<<<<<<< HEAD
            to="/contact"
<<<<<<< HEAD
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Cybersecurity Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional cybersecurity solutions services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive cybersecurity solutions solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
      </div>
        </div>
      </div>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        </div>
      </div>
<<<<<<< HEAD
=======
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
}
=======

<<<<<<< HEAD
const CybersecuritySolutionsPage: React.FC = () => {return (
    <>
      <title>CybersecuritySolutions - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
export default CybersecuritySolutionsPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
