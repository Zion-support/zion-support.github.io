import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HealthTech Solutions | Zion Tech Group',
  description: 'Comprehensive HealthTech solutions including telemedicine, electronic health records, medical AI, and healthcare analytics for modern healthcare delivery.',
};

export default function HealthTechPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              HealthTech Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with innovative HealthTech solutions.
              From telemedicine to medical AI, we build secure, HIPAA-compliant technology that improves patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our HealthTech Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our HealthTech Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions that improve patient care, streamline operations, and enhance medical outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HealthTechServiceCard
              title="Electronic Health Records (EHR)"
              description="Comprehensive EHR system with patient management, clinical documentation, and interoperability features."
              features={[
                'Patient record management',
                'Clinical documentation',
                'Interoperability (HL7, FHIR)',
                'Prescription management',
                'Appointment scheduling',
                'HIPAA compliance & security',
              ]}
              pricing="$75,000-400,000"
              marketSize="$28.1B EHR market"
              icon="📋"
            />
            <HealthTechServiceCard
              title="Telemedicine Platform"
              description="Complete telemedicine solution with video consultations, remote monitoring, and virtual care management."
              features={[
                'Video consultation platform',
                'Remote patient monitoring',
                'Virtual waiting rooms',
                'Prescription management',
                'Insurance verification',
                'Multi-language support',
              ]}
              pricing="$50,000-250,000"
              marketSize="$185.6B telemedicine market"
              icon="📹"
            />
            <HealthTechServiceCard
              title="Medical AI & Diagnostics"
              description="AI-powered diagnostic tools with medical image analysis, symptom checking, and treatment recommendations."
              features={[
                'Medical image analysis (X-ray, MRI, CT)',
                'Symptom checker AI',
                'Diagnostic assistance',
                'Treatment recommendations',
                'Drug interaction checking',
                'Clinical decision support',
              ]}
              pricing="$100,000-500,000"
              marketSize="$7.8B medical AI market"
              icon="🤖"
            />
            <HealthTechServiceCard
              title="Healthcare Analytics Platform"
              description="Advanced healthcare analytics with population health management, predictive modeling, and outcome tracking."
              features={[
                'Population health analytics',
                'Predictive health modeling',
                'Outcome tracking & reporting',
                'Cost analysis & optimization',
                'Quality metrics dashboard',
                'Risk stratification',
              ]}
              pricing="$60,000-300,000"
              marketSize="$4.2B healthcare analytics market"
              icon="📊"
            />
            <HealthTechServiceCard
              title="Patient Portal & Engagement"
              description="Comprehensive patient portal with appointment scheduling, health records access, and communication tools."
              features={[
                'Appointment scheduling',
                'Health records access',
                'Secure messaging',
                'Prescription refills',
                'Lab results viewing',
                'Health education content',
              ]}
              pricing="$40,000-200,000"
              marketSize="$2.8B patient engagement market"
              icon="👤"
            />
            <HealthTechServiceCard
              title="Medical Device Integration"
              description="IoT platform for medical device connectivity, data collection, and real-time monitoring."
              features={[
                'Medical device connectivity',
                'Real-time data collection',
                'Alert & notification system',
                'Data visualization',
                'Integration with EHR systems',
                'Remote device management',
              ]}
              pricing="$80,000-400,000"
              marketSize="$5.8B medical IoT market"
              icon="🏥"
            />
            <HealthTechServiceCard
              title="Pharmacy Management System"
              description="Complete pharmacy management with inventory control, prescription processing, and patient care tools."
              features={[
                'Inventory management',
                'Prescription processing',
                'Insurance verification',
                'Drug interaction checking',
                'Patient counseling tools',
                'Compliance reporting',
              ]}
              pricing="$45,000-225,000"
              marketSize="$3.4B pharmacy management market"
              icon="💊"
            />
            <HealthTechServiceCard
              title="Healthcare CRM & Marketing"
              description="Healthcare-specific CRM with patient relationship management, marketing automation, and engagement tracking."
              features={[
                'Patient relationship management',
                'Marketing automation',
                'Appointment reminders',
                'Patient satisfaction surveys',
                'Referral tracking',
                'Campaign analytics',
              ]}
              pricing="$35,000-175,000"
              marketSize="$2.1B healthcare CRM market"
              icon="📞"
            />
            <HealthTechServiceCard
              title="Mental Health Platform"
              description="Digital mental health platform with therapy sessions, mood tracking, and wellness programs."
              features={[
                'Virtual therapy sessions',
                'Mood & symptom tracking',
                'Wellness programs',
                'Crisis intervention tools',
                'Provider matching',
                'Progress monitoring',
              ]}
              pricing="$55,000-275,000"
              marketSize="$4.2B digital mental health market"
              icon="🧠"
            />
            <HealthTechServiceCard
              title="Clinical Trial Management"
              description="Comprehensive clinical trial platform with patient recruitment, data collection, and regulatory compliance."
              features={[
                'Patient recruitment tools',
                'Electronic data capture (EDC)',
                'Regulatory compliance',
                'Site management',
                'Data monitoring',
                'Trial analytics',
              ]}
              pricing="$90,000-450,000"
              marketSize="$6.8B clinical trial management market"
              icon="🔬"
            />
            <HealthTechServiceCard
              title="Healthcare Billing & Revenue Cycle"
              description="Automated healthcare billing with claims processing, payment collection, and revenue optimization."
              features={[
                'Claims processing automation',
                'Payment collection',
                'Insurance verification',
                'Denial management',
                'Revenue cycle analytics',
                'Compliance monitoring',
              ]}
              pricing="$65,000-325,000"
              marketSize="$3.7B healthcare billing market"
              icon="💰"
            />
            <HealthTechServiceCard
              title="Wearable Health Integration"
              description="Platform for integrating wearable health devices with healthcare systems and patient monitoring."
              features={[
                'Wearable device integration',
                'Health data aggregation',
                'Real-time monitoring',
                'Alert systems',
                'Trend analysis',
                'Provider dashboards',
              ]}
              pricing="$45,000-225,000"
              marketSize="$2.9B wearable health market"
              icon="⌚"
            />
            <HealthTechServiceCard
              title="Healthcare Supply Chain"
              description="Healthcare supply chain management with inventory optimization, demand forecasting, and cost control."
              features={[
                'Inventory optimization',
                'Demand forecasting',
                'Supplier management',
                'Cost control & analysis',
                'Compliance tracking',
                'Automated reordering',
              ]}
              pricing="$50,000-250,000"
              marketSize="$2.3B healthcare supply chain market"
              icon="📦"
            />
            <HealthTechServiceCard
              title="Medical Imaging Platform"
              description="Advanced medical imaging platform with AI analysis, storage, and sharing capabilities."
              features={[
                'Medical image storage & management',
                'AI-powered image analysis',
                'DICOM compliance',
                'Image sharing & collaboration',
                'Diagnostic tools',
                'Integration with PACS',
              ]}
              pricing="$70,000-350,000"
              marketSize="$4.8B medical imaging market"
              icon="🖼️"
            />
            <HealthTechServiceCard
              title="Healthcare Compliance & Risk Management"
              description="Comprehensive compliance management with risk assessment, audit trails, and regulatory reporting."
              features={[
                'Compliance monitoring',
                'Risk assessment tools',
                'Audit trail management',
                'Regulatory reporting',
                'Policy management',
                'Training & certification',
              ]}
              pricing="$40,000-200,000"
              marketSize="$1.9B healthcare compliance market"
              icon="🛡️"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our HealthTech Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our HealthTech Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine healthcare expertise with cutting-edge technology to deliver secure, compliant, and patient-focused solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="HIPAA Compliant"
              description="Full HIPAA compliance with encryption, audit trails, and secure data handling for patient privacy protection."
            />
            <FeatureCard
              title="Healthcare Expertise"
              description="Deep understanding of healthcare workflows, regulations, and industry best practices."
            />
            <FeatureCard
              title="Interoperability"
              description="Seamless integration with existing healthcare systems using HL7, FHIR, and other standards."
            />
            <FeatureCard
              title="Patient-Centric Design"
              description="User-friendly interfaces designed for both healthcare providers and patients."
            />
          </div>
        </div>
      </section>

      {/* HealthTech Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">HealthTech Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect HealthTech package for your healthcare organization's needs and compliance requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HealthTechPricingCard
              name="HealthTech MVP"
              price="$50,000 - $150,000"
              duration="12-24 weeks"
              features={[
                'Core healthcare functionality',
                'HIPAA compliance implementation',
                'Basic patient management',
                'Appointment scheduling',
                'Electronic health records',
                'Mobile-responsive design',
              ]}
              bestFor="Small practices and clinics"
            />
            <HealthTechPricingCard
              name="Enterprise HealthTech"
              price="$150,000 - $500,000"
              duration="24-48 weeks"
              features={[
                'Full-featured healthcare platform',
                'Advanced AI & analytics',
                'Multi-location support',
                'Third-party integrations',
                'Advanced security & compliance',
                '24/7 monitoring & support',
                'Custom workflow automation',
              ]}
              bestFor="Hospitals and large healthcare systems"
              popular={true}
            />
            <HealthTechPricingCard
              name="Custom HealthTech Solution"
              price="$500,000+"
              duration="Custom timeline"
              features={[
                'Bespoke healthcare solution',
                'Advanced medical AI integration',
                'Custom compliance requirements',
                'Multi-tenant architecture',
                'White-label customization',
                'Dedicated support team',
                'Ongoing development & maintenance',
              ]}
              bestFor="Large healthcare enterprises"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our HealthTech solutions can improve patient care, streamline operations, and enhance medical outcomes.
            Our team has delivered 150+ successful HealthTech projects serving 2M+ patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function HealthTechServiceCard({
  title,
  description,
  features,
  pricing,
  marketSize,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  marketSize: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-blue-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function HealthTechPricingCard({
  name,
  price,
  duration,
  features,
  bestFor,
  popular = false,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
