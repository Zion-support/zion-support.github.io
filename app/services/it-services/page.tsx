import React from 'react';
import Link from 'next/link';

interface ITServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, and security solutions. Engineered for uptime and efficiency.'
};

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
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
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
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions engineered for uptime, efficiency, and scalability. 
          From cloud migration to DevOps, we keep your infrastructure running smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ITService
          title="Cloud Migration"
          description="Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency."
          price="Starting at $15,000"
          features={[
            "AWS/Azure/GCP migration",
            "Zero-downtime deployment",
            "Cost optimization",
            "Security hardening"
          ]}
          benefits={[
            "Reduced infrastructure costs",
            "Improved scalability",
            "Enhanced security",
            "Better performance"
          ]}
          icon="☁️"
          href="/contact"
        />
        
        <ITService
          title="DevOps & CI/CD"
          description="Implement modern DevOps practices with automated pipelines and continuous deployment."
          price="Starting at $8,000"
          features={[
            "CI/CD pipeline setup",
            "Infrastructure as Code",
            "Automated testing",
            "Monitoring & alerting"
          ]}
          benefits={[
            "Faster deployments",
            "Reduced errors",
            "Improved collaboration",
            "Better reliability"
          ]}
          icon="🚀"
          href="/contact"
        />
        
        <ITService
          title="Site Reliability Engineering"
          description="Ensure maximum uptime and performance with comprehensive SRE practices."
          price="Starting at $12,000"
          features={[
            "Performance monitoring",
            "Incident response",
            "Capacity planning",
            "Reliability metrics"
          ]}
          benefits={[
            "99.9% uptime guarantee",
            "Proactive issue detection",
            "Reduced downtime",
            "Better user experience"
          ]}
          icon="⚡"
          href="/contact"
        />
        
        <ITService
          title="Security Solutions"
          description="Comprehensive security implementation to protect your infrastructure and data."
          price="Starting at $10,000"
          features={[
            "Security assessment",
            "Vulnerability scanning",
            "Access control",
            "Compliance management"
          ]}
          benefits={[
            "Enhanced security posture",
            "Regulatory compliance",
            "Risk mitigation",
            "Peace of mind"
          ]}
          icon="🔒"
          href="/contact"
        />
        
        <ITService
          title="Infrastructure Management"
          description="Complete infrastructure management with 24/7 monitoring and support."
          price="Starting at $5,000/month"
          features={[
            "24/7 monitoring",
            "Proactive maintenance",
            "Performance optimization",
            "Technical support"
          ]}
          benefits={[
            "Reduced operational overhead",
            "Expert management",
            "Predictable costs",
            "Focus on core business"
          ]}
          icon="🛠️"
          href="/contact"
        />
        
        <ITService
          title="Web Development"
          description="Modern web applications built with the latest technologies and best practices."
          price="Starting at $8,000"
          features={[
            "Frontend development",
            "Backend development",
            "Full-stack solutions",
            "Mobile responsiveness"
          ]}
          benefits={[
            "Modern user experience",
            "Scalable architecture",
            "SEO optimization",
            "Cross-platform compatibility"
          ]}
          icon="🌐"
          href="/contact"
        />
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how we can help you build a robust, scalable, and secure IT infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Assessment
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}