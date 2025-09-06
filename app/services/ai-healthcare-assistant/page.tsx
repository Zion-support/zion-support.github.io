import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Healthcare Assistant | Zion Tech Group - Intelligent Medical AI Platform',
  description: 'Revolutionary AI-powered healthcare assistant with medical diagnosis support, patient monitoring, drug interaction checking, and clinical decision support.',
  keywords: 'AI healthcare, medical AI, healthcare assistant, clinical decision support, medical diagnosis, patient monitoring, healthcare automation'
};

export default function AIHealthcareAssistantPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Healthcare Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform healthcare delivery with our AI-powered medical assistant. 
          Enhance diagnosis accuracy, improve patient outcomes, and streamline clinical workflows with cutting-edge artificial intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Assistant Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Medical AI Demo
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Medical AI Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI healthcare assistant combines medical expertise with advanced machine learning to support clinical decision-making.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🩺"
            title="Clinical Decision Support"
            description="AI-powered diagnostic assistance that analyzes symptoms, medical history, and test results to suggest potential diagnoses and treatment options."
            features={[
              "Symptom analysis",
              "Differential diagnosis",
              "Treatment recommendations",
              "Drug interaction checking",
              "Evidence-based medicine"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Medical Image Analysis"
            description="Advanced computer vision for radiology, pathology, and dermatology with 95%+ accuracy in image interpretation and anomaly detection."
            features={[
              "X-ray analysis",
              "MRI/CT interpretation",
              "Pathology slides",
              "Dermatology images",
              "Anomaly detection"
            ]}
          />
          <FeatureCard
            icon="💊"
            title="Drug Interaction Checker"
            description="Real-time medication interaction analysis with comprehensive database covering prescription drugs, OTC medications, and supplements."
            features={[
              "Drug interaction alerts",
              "Dosage optimization",
              "Allergy checking",
              "Contraindication warnings",
              "Pharmacokinetic analysis"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Patient Monitoring"
            description="Continuous health monitoring using wearable devices and IoT sensors with AI-powered trend analysis and early warning systems."
            features={[
              "Vital signs tracking",
              "Trend analysis",
              "Early warning alerts",
              "Remote monitoring",
              "Health score calculation"
            ]}
          />
          <FeatureCard
            icon="📋"
            title="Electronic Health Records"
            description="Intelligent EHR system with natural language processing for automated documentation, coding, and clinical note generation."
            features={[
              "Voice-to-text transcription",
              "Automated coding",
              "Clinical note generation",
              "Data extraction",
              "Quality assurance"
            ]}
          />
          <FeatureCard
            icon="🔬"
            title="Research & Analytics"
            description="Advanced analytics platform for medical research, population health studies, and clinical trial optimization."
            features={[
              "Population health analysis",
              "Clinical trial matching",
              "Outcome prediction",
              "Research insights",
              "Epidemiological studies"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare-Grade Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            HIPAA-compliant AI healthcare solutions with transparent pricing and comprehensive support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Clinic"
            price="$1,500"
            period="per month"
            description="Perfect for small clinics and private practices"
            features={[
              "Up to 10 providers",
              "Basic AI features",
              "EHR integration",
              "Drug interaction checking",
              "Email support",
              "HIPAA compliance"
            ]}
            popular={false}
          />
          <PricingCard
            name="Hospital"
            price="$5,000"
            period="per month"
            description="Ideal for hospitals and large medical centers"
            features={[
              "Unlimited providers",
              "Advanced AI analytics",
              "Medical image analysis",
              "Patient monitoring",
              "Priority support",
              "Custom integrations",
              "24/7 support"
            ]}
            popular={true}
          />
          <PricingCard
            name="Health System"
            price="$15,000"
            period="per month"
            description="Complete solution for healthcare systems and networks"
            features={[
              "Multi-site deployment",
              "Custom AI models",
              "Research platform",
              "Dedicated support",
              "Advanced security",
              "API access",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Compliance & Security</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with healthcare-grade security and compliance standards to protect patient data and ensure regulatory adherence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ComplianceCard
            icon="🔒"
            title="HIPAA Compliant"
            description="Full HIPAA compliance with encryption, access controls, and audit trails"
          />
          <ComplianceCard
            icon="🛡️"
            title="SOC 2 Type II"
            description="SOC 2 Type II certified with comprehensive security controls"
          />
          <ComplianceCard
            icon="🏥"
            title="FDA Guidelines"
            description="Designed following FDA guidelines for medical software"
          />
          <ComplianceCard
            icon="🌍"
            title="Global Standards"
            description="Compliant with international healthcare data protection standards"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Healthcare Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI healthcare assistant has improved patient outcomes and operational efficiency across various medical specialties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessCard
            hospital="Regional Medical Center"
            specialty="Emergency Medicine"
            improvement="35% faster diagnosis"
            description="Reduced average diagnosis time from 45 minutes to 29 minutes in emergency department"
          />
          <SuccessCard
            hospital="Cardiology Clinic"
            specialty="Cardiology"
            improvement="28% accuracy improvement"
            description="Improved ECG interpretation accuracy from 78% to 100% with AI assistance"
          />
          <SuccessCard
            hospital="Radiology Group"
            specialty="Radiology"
            improvement="40% faster reporting"
            description="Reduced radiology report turnaround time from 24 hours to 14.4 hours"
          />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Healthcare ROI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how AI healthcare assistant can improve patient outcomes and reduce operational costs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Without AI Assistant</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Diagnosis time (minutes):</span>
                  <span className="font-semibold">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Diagnostic accuracy:</span>
                  <span className="font-semibold">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Documentation time:</span>
                  <span className="font-semibold">30 min/patient</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Missed diagnoses:</span>
                  <span className="font-semibold">12%</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Daily Patient Capacity:</span>
                    <span className="text-red-600">16 patients</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">With AI Assistant</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Faster diagnosis:</span>
                  <span className="font-semibold text-green-600">29 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Improved accuracy:</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auto documentation:</span>
                  <span className="font-semibold text-green-600">10 min/patient</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reduced errors:</span>
                  <span className="font-semibold text-green-600">3%</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Daily Patient Capacity:</span>
                    <span className="text-green-600">24 patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Additional Daily Value</h3>
              <div className="text-3xl font-bold text-blue-600">8 More Patients</div>
              <p className="text-blue-700">50% increase in patient capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare Delivery?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule a personalized demo and discover how AI can enhance your medical practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Healthcare Assistant - Demo Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Medical AI Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=AI Healthcare Assistant - ${name} Plan Inquiry`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ComplianceCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function SuccessCard({ hospital, specialty, improvement, description }: {
  hospital: string;
  specialty: string;
  improvement: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{hospital}</h3>
      <p className="text-sm text-gray-600 mb-3">{specialty}</p>
      <div className="text-2xl font-bold text-blue-600 mb-3">{improvement}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}