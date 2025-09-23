export const metadata = {
  title: "HealthTech Solutions | Zion Tech Group",
  description:
    "Complete healthcare technology solutions including EHR systems, telemedicine platforms, medical AI, and HIPAA-compliant healthcare applications."};

export default function HealthTechPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            HealthTech Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete healthcare technology solutions including EHR systems,
            telemedicine platforms, medical AI, and HIPAA-compliant healthcare
            applications.
          </p>
        </div>

        {/* HealthTech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <HealthTechCategory
            title="Electronic Health Records (EHR)"
            icon="📋"
            description="Comprehensive EHR systems and patient data management"
            services={[
              "Patient records management",
              "Clinical documentation",
              "Interoperability standards",
              "Data migration",
              "Custom workflows",
              "Integration APIs"]}
            pricing="$75,000 - $400,000"
            marketSize="$28B"
          />
          <HealthTechCategory
            title="Telemedicine Platforms"
            icon="📹"
            description="Complete telemedicine and virtual care solutions"
            services={[
              "Video consultations",
              "Remote monitoring",
              "Appointment scheduling",
              "Prescription management",
              "Patient portals",
              "Mobile applications"]}
            pricing="$50,000 - $250,000"
            marketSize="$185B"
          />
          <HealthTechCategory
            title="Medical AI & Diagnostics"
            icon="🧠"
            description="AI-powered medical diagnostics and decision support"
            services={[
              "Medical image analysis",
              "Diagnostic algorithms",
              "Clinical decision support",
              "Predictive analytics",
              "Drug discovery",
              "Treatment recommendations"]}
            pricing="$100,000 - $500,000"
            marketSize="$45B"
          />
          <HealthTechCategory
            title="Healthcare Analytics"
            icon="📊"
            description="Healthcare data analytics and business intelligence"
            services={[
              "Population health analytics",
              "Clinical outcomes analysis",
              "Cost optimization",
              "Quality metrics",
              "Predictive modeling",
              "Real-time dashboards"]}
            pricing="$60,000 - $300,000"
            marketSize="$12B"
          />
          <HealthTechCategory
            title="Patient Engagement"
            icon="👥"
            description="Patient portal and engagement solutions"
            services={[
              "Patient portals",
              "Mobile health apps",
              "Wearable integration",
              "Health education",
              "Appointment management",
              "Communication tools"]}
            pricing="$40,000 - $200,000"
            marketSize="$8B"
          />
          <HealthTechCategory
            title="Medical Device Integration"
            icon="🔬"
            description="Medical device integration and IoT solutions"
            services={[
              "Device connectivity",
              "Data collection",
              "Real-time monitoring",
              "Alert systems",
              "Integration APIs",
              "Compliance management"]}
            pricing="$80,000 - $400,000"
            marketSize="$15B"
          />
        </div>

        {/* Additional HealthTech Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <HealthTechService
            title="Pharmacy Management System"
            description="Complete pharmacy management and prescription solutions"
            features={[
              "Inventory management",
              "Prescription processing",
              "Insurance verification",
              "Patient counseling",
              "Drug interaction checks",
              "Compliance reporting"]}
            pricing="$45,000 - $225,000"
            icon="💊"
          />
          <HealthTechService
            title="Healthcare CRM & Marketing"
            description="Healthcare customer relationship management and marketing"
            features={[
              "Patient relationship management",
              "Marketing automation",
              "Lead generation",
              "Appointment reminders",
              "Patient surveys",
              "Analytics dashboard"]}
            pricing="$35,000 - $175,000"
            icon="📈"
          />
          <HealthTechService
            title="Mental Health Platform"
            description="Digital mental health and wellness solutions"
            features={[
              "Therapy sessions",
              "Mood tracking",
              "Meditation apps",
              "Crisis intervention",
              "Peer support",
              "Progress monitoring"]}
            pricing="$55,000 - $275,000"
            icon="🧘"
          />
          <HealthTechService
            title="Clinical Trial Management"
            description="Clinical trial management and research platforms"
            features={[
              "Trial design",
              "Patient recruitment",
              "Data collection",
              "Compliance tracking",
              "Reporting tools",
              "Integration APIs"]}
            pricing="$90,000 - $450,000"
            icon="🔬"
          />
          <HealthTechService
            title="Healthcare Billing & Revenue Cycle"
            description="Healthcare billing and revenue cycle management"
            features={[
              "Claims processing",
              "Insurance verification",
              "Payment processing",
              "Denial management",
              "Financial reporting",
              "Compliance tracking"]}
            pricing="$65,000 - $325,000"
            icon="💰"
          />
          <HealthTechService
            title="Wearable Health Integration"
            description="Wearable device integration and health monitoring"
            features={[
              "Device connectivity",
              "Health data collection",
              "Real-time monitoring",
              "Alert systems",
              "Data visualization",
              "Integration APIs"]}
            pricing="$45,000 - $225,000"
            icon="⌚"
          />
        </div>

        {/* Compliance & Security */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            HIPAA Compliance & Security
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Data Encryption
              </h4>
              <p className="text-gray-600 text-sm">
                End-to-end encryption for all patient data
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Access Controls
              </h4>
              <p className="text-gray-600 text-sm">
                Role-based access and audit trails
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                HIPAA Certified
              </h4>
              <p className="text-gray-600 text-sm">
                Full compliance with healthcare regulations
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Healthcare?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our HealthTech experts will help you build secure, HIPAA-compliant
            healthcare solutions that improve patient outcomes and streamline
            operations.
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
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthTechCategory({
  title,
  icon,
  description,
  services,
  pricing,
  marketSize}: {
  title: string;
  icon: string;
  description: string;
  services: string[];
  pricing: string;
  marketSize: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {services.map((service) => (
          <li key={service} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {service}
          </li>
        ))}
      </ul>
      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-600">{pricing}</span>
          <span className="text-sm text-gray-500">Market: {marketSize}</span>
        </div>
      </div>
    </div>
  );
}

function HealthTechService({
  title,
  description,
  features,
  pricing,
  icon}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="text-gray-600 space-y-1 mb-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}
