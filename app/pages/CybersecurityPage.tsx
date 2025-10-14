import React from "react";
import SEO from "../components/SEO";
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function CybersecurityPage() {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: "Advanced Threat Protection",
      description: "Comprehensive security solutions to protect against malware, ransomware, and advanced persistent threats.",
      features: ["Real-time threat detection", "Behavioral analysis", "Automated response", "24/7 monitoring"]
    },
    {
      icon: LockClosedIcon,
      title: "Data Encryption",
      description: "End-to-end encryption solutions to protect your sensitive data at rest and in transit.",
      features: ["Data encryption", "Key management", "Secure communication", "Compliance support"]
    },
    {
      icon: EyeIcon,
      title: "Security Monitoring",
      description: "Continuous monitoring and analysis of your security posture to identify and respond to threats.",
      features: ["24/7 monitoring", "Threat intelligence", "Incident response", "Security reporting"]
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Risk Assessment",
      description: "Comprehensive security assessments to identify vulnerabilities and improve your security posture.",
      features: ["Vulnerability scanning", "Penetration testing", "Security audits", "Compliance checks"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Cybersecurity - Zion Tech Group"
        description="Professional cybersecurity services by Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Cybersecurity
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity solutions
            designed to keep your data and systems secure.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our cybersecurity services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}