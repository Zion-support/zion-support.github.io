
import React from 'react;
import Link from next/link';

export const metadata = {
  title: 'IT Services | Zion Tech Group,
  description: Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'

}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center>
    <div className=text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3>{title}</h3>
    <p className=text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center>
    <div className=w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2>{title}</h3>
    <p className=text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-blue-600 rounded-lg text-white text-center>
    <h2 className=text-3xl font-bold mb-4">Ready for Reliable IT Solutions?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto>
      Let's discuss your IT needs and how we can build a resilient and efficient infrastructure for your business.
    </p>
    <div className=flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry
        className=bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950
        className=border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm>
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function ITServicesPage() {
  return (

    <div className=space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg>
        <h1 className=text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto>
          Comprehensive IT solutions for modern businesses.
          From cloud migration to cybersecurity, we keep your technology infrastructure running smoothly.
        </p>
        <div className=flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry
            className=bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Consultation
          </a>
          <a
            href="tel:+13024640950
            className=border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12>
        <div className=text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4>Our IT Service Process</h2>
          <p className=text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to deliver reliable and efficient IT solutions.
          </p>
          <a
            href="/contact
            className=bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
          <ProcessStep
            step={1}
            title=Assessment & Strategy"
            description="Understanding your current IT landscape and defining a strategic roadmap.
          />
          <ProcessStep
            step={2}
            title=Implementation & Migration"
            description="Executing solutions, including cloud migration and system integration.
          />
          <ProcessStep
            step={3}
            title=Optimization & Support"
            description="Continuous monitoring, performance optimization, and ongoing technical support.

          />
        </div>
      </section>


      <section className=py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12>
          <h2 className=text-3xl font-bold text-gray-900 mb-4">Key IT Service Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto>
            Specialized services to cover all aspects of your business technology.
          </p>
        </div>
        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Cloud Services
            description=Migration, optimization, and management of cloud infrastructure (AWS, Azure, GCP)."
            icon="☁️
          />
          <FeatureCard
            title=Cybersecurity"
            description="Robust security solutions, threat detection, and compliance management.
            icon=🔒"
          />
          <FeatureCard
            title="DevOps & SRE
            description=Automating development workflows and ensuring system reliability and scalability."
            icon="🚀
          />
          <FeatureCard
            title=Infrastructure Management"
            description="Proactive monitoring, maintenance, and support for your IT systems.
            icon=🖥️"
          />
          <FeatureCard
            title="Enterprise Solutions
            description=Custom software development and integration for complex business needs."
            icon="🏢
          />
          <FeatureCard
            title=IT Consulting"
            description="Expert guidance on technology strategy, digital transformation, and IT governance.
            icon=🤝"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
