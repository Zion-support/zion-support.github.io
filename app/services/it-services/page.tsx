import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'

import Link from "next/link";"

export const metadata = {
  }
  "title": 'It Services - Zion Tech Group','
  "description": 'Professional it services solutions for your business needs.','
};

export default function ItServicesPage() {
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            It Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional it services solutions designed to meet your business requirements,
and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">"
          {/* Features Grid */}
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16">"
            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">⚡</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>"
              <p className="text-gray-600">"
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">🔒</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>"
              <p className="text-gray-600">"
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 "hover":shadow-xl transition-shadow">"
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">"
                <span className="text-3xl">📈</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>"
              <p className="text-gray-600">"
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">"
            <h2 className="text-3xl font-bold text-gray-900 mb-6">"
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">"
              Contact us today to discuss your it services requirements,
and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
              <Link,
href="/contact""
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold "hover":bg-blue-700 transition-colors inline-flex items-center""
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />"
              </Link>
              <Link,
href="/services""
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold "hover":border-blue-400 "hover":text-blue-600 transition-colors""
              >
                View All Services
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
            <p className="text-gray-300">
              Seamlessly integrate with your existing systems and workflows.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
            <p className="text-gray-300">
              Grow with your business with our flexible and scalable platform.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our it services services can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, cybersecurity, and infrastructure management. Enterprise-grade solutions for modern businesses.'
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
import React from 'react';
import Link from 'next/link';

export const metadata = {
  }
  "title": "IT Services | Zion Tech Group","
  "description": "Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-scale solutions.","
import React from 'react';'

export const metadata = { 
  }
  "title": 'IT Services | Zion Tech Group','
  "description": 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.','
  "keywords": 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE''
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready for Reliable IT Solutions?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss your IT needs and how we can build a resilient and efficient infrastructure for your business.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
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
);

export default function ITServicesPage() {
}
return (;
    <div className="animate-fade-in">"
      <div className="text-center mb-16">"
        <h1 className="text-4xl font-bold text-gray-900 mb-6">"
    <div className="space-y-16">"
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">"
        <h1 className="text-4xl "md":text-6xl font-bold text-gray-900 mb-6">"
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">"
          Comprehensive IT solutions for modern businesses. 
          From cloud migration to cybersecurity, we keep your technology infrastructure running smoothly.
        </p>
        <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
          <a,
href=""mailto":kleber@ziontechgroup.com?subject=IT Services Inquiry""
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-blue-700 transition-colors""
          >
            Get IT Consultation
          </a>
          <a,
href=""tel":+13024640950""
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold "hover":bg-blue-600 "hover":text-white transition-colors""
          >
            Call +1 302 464 0950
          </a>
        </div>

        </div>
      </div>

      <div className="text-center mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>"
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">"
          We follow a proven methodology to deliver successful IT solutions and transformations.
        </p>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
          <ProcessStep,
step="1""
            title="Assessment & Planning""
            description="Analyze current infrastructure, identify gaps, and create a comprehensive IT strategy."" />
          <ProcessStep,
step="2""
            title="Implementation & Migration""
            description="Execute the plan with minimal disruption, ensuring smooth transitions and optimal performance."" />
          <ProcessStep,
step="3""
            title="Management & Optimization""
            description="Provide ongoing support, monitoring, and continuous optimization for peak performance."" />
        </div>
      </div>

      <CTA />
    </div>
  );

}

function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free IT consultation and discover how our services can transform your technology landscape.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );

}
        </div>
      </div>
    </div>
  );
}

        </div>
      </div>

      <div className="text-center mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>"
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">"
          We follow a proven methodology to deliver successful IT solutions and transformations.
        </p>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
          <ProcessStep,
step="1""
            title="Assessment & Planning""
            description="Analyze current infrastructure, identify gaps, and create a comprehensive IT strategy."" />
          <ProcessStep,
step="2""
            title="Implementation & Migration""
            description="Execute the plan with minimal disruption, ensuring smooth transitions and optimal performance."" />
          <ProcessStep,
step="3""
            title="Management & Optimization""
            description="Provide ongoing support, monitoring, and continuous optimization for peak performance."" />
        </div>
      </div>

      <CTA />
    </div>
  );

}

function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free IT consultation and discover how our services can transform your technology landscape.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );

      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to deliver reliable and efficient IT solutions.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="text-center mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>"
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">"
          We follow a proven methodology to deliver successful IT solutions and transformations.
        </p>
        <div className="grid grid-cols-1 "md":grid-cols-3 gap-8">"
          <ProcessStep,
step="1""
            title="Assessment & Planning""
            description="Analyze current infrastructure, identify gaps, and create a comprehensive IT strategy."" />
          <ProcessStep,
step="2""
            title="Implementation & Migration""
            description="Execute the plan with minimal disruption, ensuring smooth transitions and optimal performance."" />
          <ProcessStep,
step="3""
            title="Management & Optimization""
            description="Provide ongoing support, monitoring, and continuous optimization for peak performance."" />
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Industry Solutions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IndustryCard
            title="Healthcare"
            description="HIPAA-compliant infrastructure and secure data management"
            icon="🏥"
          />
          <IndustryCard
            title="Financial Services"
            description="PCI DSS compliance and high-availability trading systems"
            icon="🏦"
          />
          <IndustryCard
            title="E-commerce"
            description="Scalable platforms for high-traffic online stores"
            icon="🛒"
          />
          <IndustryCard
            title="SaaS Platforms"
            description="Multi-tenant architecture and API management"
            icon="💻"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITPricingPlan 
            name="IT Assessment" 
            price="$4k–$10k" 
            duration="2 weeks"
            features={[
              "Infrastructure audit",
              "Security assessment",
              "Performance analysis",
              "Cost optimization review",
              "Strategic roadmap"
            ]}
            popular={false}
          />
          <ITPricingPlan 
            name="Implementation" 
            price="$15k–$50k" 
            duration="4–8 weeks"
            features={[
              "Infrastructure setup",
              "CI/CD pipeline implementation",
              "Monitoring & alerting",
              "Security hardening",
              "3 months support"
            ]}
            popular={true}
          />
          <ITPricingPlan 
            name="Managed Services" 
            price="$5k+/mo" 
            duration="Ongoing"
            features={[
              "24/7 monitoring & support",
              "SLO management",
              "Cost optimization",
              "Security updates",
              "Monthly reporting"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

function FeatureItem() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="text-4xl mb-4 text-green-600">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function ProcessStep() {
}
return (;
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">"
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">"
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600">{description}</p>"
    </div>
  );
}

function CTA() {
}
return (;
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">"
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">"
        Contact us today for a free IT consultation and discover how our services can transform your technology landscape.
      </p>
      <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
        <a,
href=""tel":+13024640950""
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
        >
          Call +1 302 464 0950
        </a>
        <a,
href=""mailto":kleber@ziontechgroup.com""
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">"
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}

=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key IT Service Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized services to cover all aspects of your business technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Cloud Services"
            description="Migration, optimization, and management of cloud infrastructure (AWS, Azure, GCP)."
            icon="☁️"
          />
          <FeatureCard
            title="Cybersecurity"
            description="Robust security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <FeatureCard
            title="DevOps & SRE"
            description="Automating development workflows and ensuring system reliability and scalability."
            icon="🚀"
          />
          <FeatureCard
            title="Infrastructure Management"
            description="Proactive monitoring, maintenance, and support for your IT systems."
            icon="🖥️"
          />
          <FeatureCard
            title="Enterprise Solutions"
            description="Custom software development and integration for complex business needs."
            icon="🏢"
          />
          <FeatureCard
            title="IT Consulting"
            description="Expert guidance on technology strategy, digital transformation, and IT governance."
            icon="🤝"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
