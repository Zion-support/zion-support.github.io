import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Meeting Assistant | Zion Tech Group',
  description: 'Intelligent meeting automation with real-time transcription, action item extraction, and automated follow-ups.',
  keywords: 'AI meeting assistant, meeting automation, transcription, action items, meeting productivity'
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

const ContactSection: React.FC = () => (
  <section className="py-12 bg-purple-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss how our AI Meeting Assistant can help your business succeed.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Assistant Inquiry"
        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default function ServicePage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Meeting Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Intelligent meeting automation with real-time transcription, action item extraction, and automated follow-ups.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Meeting Assistant Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Professional Service"
            description="Expert solutions designed to meet your specific requirements."
            icon="🤖"
          />
          <FeatureCard
            title="24/7 Support"
            description="Round-the-clock assistance to ensure your success."
            icon="🛠️"
          />
          <FeatureCard
            title="Custom Solutions"
            description="Tailored approaches that fit your unique business model."
            icon="⚙️"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}