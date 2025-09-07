import React from 'react';


export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'
import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-scale solutions.",
};

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive IT solutions for modern businesses. 
          From cloud migration to cybersecurity, we keep your technology infrastructure running smoothly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive operational efficiency. From cloud migration to DevOps automation, we deliver enterprise-grade IT services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our IT Solutions</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="☁️"
              title="Cloud Migration & Management"
              description="Seamlessly migrate your infrastructure to AWS, Azure, or GCP with zero downtime and optimized performance."
              benefits={["Zero-downtime migration", "Cost optimization", "Multi-cloud support", "24/7 monitoring"]}
            />
            <FeatureItem
              icon="⚙️"
              title="DevOps & SRE"
              description="Implement CI/CD pipelines, infrastructure as code, and site reliability engineering practices."
              benefits={["Automated deployments", "Infrastructure as Code", "Performance monitoring", "Incident response"]}
            />
            <FeatureItem
              icon="🔒"
              title="Cybersecurity & Compliance"
              description="Comprehensive security solutions including threat detection, vulnerability management, and compliance."
              benefits={["Threat detection", "Security audits", "Compliance management", "Incident response"]}
            />
            <FeatureItem
              icon="🖥️"
              title="Infrastructure Management"
              description="End-to-end infrastructure management including servers, networks, and data centers."
              benefits={["Server management", "Network optimization", "Data center operations", "Capacity planning"]}
            />
            <FeatureItem
              icon="📊"
              title="IT Consulting & Strategy"
              description="Strategic IT consulting to align technology with business objectives and drive digital transformation."
              benefits={["Technology strategy", "Digital transformation", "IT governance", "Change management"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for IT?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🚀"
              title="Proven Track Record"
              description="Successfully delivered 500+ IT projects with 99.9% uptime and 300% average ROI for our clients."
            />
            <BenefitCard
              icon="🔧"
              title="Expert Team"
              description="Certified professionals with deep expertise in cloud platforms, DevOps, and enterprise technologies."
            />
            <BenefitCard
              icon="⚡"
              title="Rapid Implementation"
              description="Fast deployment and implementation with minimal disruption to your business operations."
            />
            <BenefitCard
              icon="🛡️"
              title="Enterprise Security"
              description="Bank-grade security measures and compliance with industry standards and regulations."
            />
export const metadata = {
  title: 'It Services | Zion Tech Group',
  description: 'Professional it services services for your business needs.',
  keywords: 'it-services, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            It Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional it services services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored it services solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your it services solutions run smoothly.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a proven methodology to deliver successful IT solutions and transformations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Assessment & Planning"
            description="Analyze current infrastructure, identify gaps, and create a comprehensive IT strategy."
          />
          <ProcessStep
            step="2"
            title="Implementation & Migration"
            description="Execute the plan with minimal disruption, ensuring smooth transitions and optimal performance."
          />
          <ProcessStep
            step="3"
            title="Management & Optimization"
            description="Provide ongoing support, monitoring, and continuous optimization for peak performance."
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free IT consultation and discover how our services can transform your technology landscape.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
    </div>
  );
}