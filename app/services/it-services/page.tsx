import React from 'react';
import Link from 'next/link';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, and security solutions. Engineered for uptime and efficiency.'
};

interface ITServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

function ITService({ title, description, price, features, benefits, icon, href }: ITServiceProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg font-bold text-blue-600">{price}</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default function ITServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services designed to modernize your infrastructure, 
            accelerate development, and ensure maximum uptime and security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ITService
            title="Cloud Migration"
            description="Seamlessly migrate your infrastructure to the cloud with zero downtime"
            price="From $25,000"
            features={["AWS/Azure/GCP migration", "Zero-downtime deployment", "Cost optimization", "Security hardening"]}
            benefits={["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance"]}
            icon="☁️"
            href="/contact"
          />
          
          <ITService
            title="DevOps & CI/CD"
            description="Implement modern DevOps practices and automated deployment pipelines"
            price="From $15,000"
            features={["CI/CD pipelines", "Infrastructure as Code", "Monitoring & alerting", "Container orchestration"]}
            benefits={["Faster deployments", "Reduced errors", "Better collaboration", "Improved reliability"]}
            icon="🚀"
            href="/contact"
          />
          
          <ITService
            title="Site Reliability Engineering"
            description="Build resilient systems with SRE practices and monitoring"
            price="From $20,000"
            features={["SLO/SLI definition", "Error budget management", "Incident response", "Performance optimization"]}
            benefits={["Higher uptime", "Faster incident resolution", "Proactive monitoring", "Better user experience"]}
            icon="⚡"
            href="/contact"
          />
          
          <ITService
            title="Infrastructure Management"
            description="Comprehensive infrastructure management and optimization services"
            price="From $12,000"
            features={["24/7 monitoring", "Performance tuning", "Capacity planning", "Security updates"]}
            benefits={["Reduced downtime", "Lower costs", "Better performance", "Enhanced security"]}
            icon="🏗️"
            href="/contact"
          />
          
          <ITService
            title="Security & Compliance"
            description="Comprehensive security solutions and compliance management"
            price="From $18,000"
            features={["Security audits", "Compliance management", "Vulnerability scanning", "Incident response"]}
            benefits={["Enhanced security", "Compliance assurance", "Risk reduction", "Peace of mind"]}
            icon="🔒"
            href="/contact"
          />
          
          <ITService
            title="Web Development"
            description="Modern web applications built with the latest technologies"
            price="From $10,000"
            features={["Frontend development", "Backend development", "Full-stack solutions", "API development"]}
            benefits={["Modern user experience", "Scalable architecture", "Mobile responsive", "SEO optimized"]}
            icon="🌐"
            href="/contact"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Modernize Your IT?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our IT services can transform your infrastructure and accelerate your business.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Assessment
          </Link>
        </div>
      </div>
    </main>
  );
}