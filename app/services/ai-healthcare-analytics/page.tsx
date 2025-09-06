import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Healthcare Analytics | Zion Tech Group',
  description: 'Advanced healthcare AI for predictive diagnostics, treatment optimization, and clinical decision support. HIPAA compliant with 25% better patient outcomes. Starting at $2,999/month.',
  keywords: 'AI healthcare analytics, predictive diagnostics, clinical decision support, HIPAA compliant, medical AI, healthcare technology'
};

export default function AIHealthcareAnalyticsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Healthcare Analytics
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform healthcare delivery with AI-powered analytics, predictive diagnostics, and clinical decision support. Improve patient outcomes by 25% while maintaining HIPAA compliance and data security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Analytics Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Healthcare Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology designed specifically for healthcare organizations to improve patient care and operational efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔬"
            title="Predictive Diagnostics"
            description="AI analyzes patient data to predict diseases and conditions before they become critical"
            benefits={[
              "Early disease detection",
              "Risk stratification",
              "Symptom analysis",
              "Treatment recommendations"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Clinical Decision Support"
            description="Real-time AI assistance for healthcare providers to make better clinical decisions"
            benefits={[
              "Evidence-based recommendations",
              "Drug interaction alerts",
              "Treatment protocols",
              "Diagnostic assistance"
            ]}
          />
          <FeatureCard
            icon="🏥"
            title="Patient Monitoring"
            description="Continuous monitoring of patient vitals and health metrics with AI-powered alerts"
            benefits={[
              "Real-time monitoring",
              "Anomaly detection",
              "Alert systems",
              "Trend analysis"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Population Health Analytics"
            description="Analyze population health trends and identify at-risk groups for preventive care"
            benefits={[
              "Population insights",
              "Risk identification",
              "Preventive care planning",
              "Resource allocation"
            ]}
          />
          <FeatureCard
            icon="💊"
            title="Drug Discovery Support"
            description="AI-powered analysis to accelerate drug discovery and development processes"
            benefits={[
              "Molecular analysis",
              "Clinical trial optimization",
              "Side effect prediction",
              "Efficacy modeling"
            ]}
          />
          <FeatureCard
            icon="🛡️"
            title="HIPAA Compliance"
            description="Enterprise-grade security and compliance with healthcare data protection standards"
            benefits={[
              "HIPAA compliance",
              "Data encryption",
              "Access controls",
              "Audit trails"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare-Specific Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored pricing for healthcare organizations of all sizes with compliance and security guarantees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Clinic"
            price="$2,999"
            period="month"
            description="Perfect for small clinics and private practices"
            features={[
              "Up to 1,000 patients",
              "Basic AI analytics",
              "Clinical decision support",
              "HIPAA compliance",
              "Email support",
              "Basic reporting"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Hospital"
            price="$9,999"
            period="month"
            description="Most popular for hospitals and health systems"
            features={[
              "Up to 10,000 patients",
              "Advanced AI features",
              "Predictive diagnostics",
              "Population health analytics",
              "Priority support",
              "Custom integrations",
              "API access"
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$29,999"
            period="month"
            description="For large health systems and networks"
            features={[
              "Unlimited patients",
              "Full AI suite",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Advanced security",
              "Custom development"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Healthcare Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI Healthcare Analytics delivers measurable improvements in patient outcomes and operational efficiency.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard
            number="25%"
            label="Better Outcomes"
            description="Improvement in patient outcomes"
          />
          <MetricCard
            number="40%"
            label="Faster Diagnosis"
            description="Reduction in diagnostic time"
          />
          <MetricCard
            number="60%"
            label="Cost Reduction"
            description="Decrease in healthcare costs"
          />
          <MetricCard
            number="99.9%"
            label="Uptime"
            description="System reliability and availability"
          />
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Security</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade security and compliance designed specifically for healthcare organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComplianceCard
            title="HIPAA Compliant"
            description="Full compliance with HIPAA regulations for patient data protection"
            icon="🛡️"
          />
          <ComplianceCard
            title="SOC 2 Type II"
            description="Certified security controls and data protection measures"
            icon="🔒"
          />
          <ComplianceCard
            title="FDA Approved"
            description="FDA-approved AI algorithms for clinical decision support"
            icon="✅"
          />
          <ComplianceCard
            title="ISO 27001"
            description="International standard for information security management"
            icon="🌐"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world applications of AI in healthcare settings across different specialties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            title="Emergency Medicine"
            description="AI-powered triage and rapid diagnosis in emergency departments"
            benefits={[
              "Faster triage",
              "Critical case identification",
              "Resource optimization",
              "Outcome prediction"
            ]}
            icon="🚨"
          />
          <UseCaseCard
            title="Radiology"
            description="AI-assisted image analysis and diagnostic support for radiologists"
            benefits={[
              "Image analysis",
              "Anomaly detection",
              "Diagnostic accuracy",
              "Workflow optimization"
            ]}
            icon="📷"
          />
          <UseCaseCard
            title="Cardiology"
            description="Predictive analytics for cardiovascular disease and treatment optimization"
            benefits={[
              "Risk assessment",
              "Treatment planning",
              "Outcome prediction",
              "Monitoring alerts"
            ]}
            icon="❤️"
          />
          <UseCaseCard
            title="Oncology"
            description="AI-powered cancer detection, staging, and treatment recommendations"
            benefits={[
              "Early detection",
              "Staging accuracy",
              "Treatment optimization",
              "Prognosis prediction"
            ]}
            icon="🎗️"
          />
          <UseCaseCard
            title="Mental Health"
            description="AI-driven mental health assessment and treatment planning"
            benefits={[
              "Symptom analysis",
              "Risk assessment",
              "Treatment recommendations",
              "Progress monitoring"
            ]}
            icon="🧠"
          />
          <UseCaseCard
            title="Chronic Care"
            description="Long-term monitoring and management of chronic conditions"
            benefits={[
              "Continuous monitoring",
              "Medication adherence",
              "Lifestyle recommendations",
              "Complication prevention"
            ]}
            icon="🩺"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare with AI?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join leading healthcare organizations using AI to improve patient outcomes and operational efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Analytics - Free Demo"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, cta, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Analytics - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function ComplianceCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description, benefits, icon }: {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}