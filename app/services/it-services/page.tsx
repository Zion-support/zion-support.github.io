import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group",
<<<<<<< HEAD
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-scale solutions.",
=======
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.",
  keywords: "IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
};

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
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

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function ITServicesPage() {
  return (
<<<<<<< HEAD
    <div className="animate-fade-in">
=======
    <div className="max-w-6xl mx-auto px-4 py-12">
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">☁️</span>
          </div>
<<<<<<< HEAD
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
          </div>
        </div>
      </div>
    </div>
  );
}
=======
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Cloud Migration
          </h3>
          <p className="text-gray-600">
            Seamless cloud migration services to modernize your infrastructure.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            DevOps
          </h3>
          <p className="text-gray-600">
            Complete DevOps solutions for faster, more reliable software delivery.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Cybersecurity
          </h3>
          <p className="text-gray-600">
            Advanced cybersecurity solutions to protect your business from threats.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your IT Infrastructure?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your IT needs and implement comprehensive solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
