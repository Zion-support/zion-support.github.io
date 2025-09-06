import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group - Comprehensive AI Solutions',
  description: 'Complete AI services including machine learning, natural language processing, computer vision, and AI automation. Transform your business with cutting-edge artificial intelligence.',
};

export default function AIServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive artificial intelligence solutions to transform your business. From machine learning 
          to natural language processing, we deliver cutting-edge AI that drives real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get AI Consultation - Free
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      </section>

      {/* AI Service Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
            title="AI Code Assistant"
            description="Intelligent code generation, debugging, and optimization powered by advanced AI."
            href="/services/ai-code-assistant"
            icon="🤖"
            pricing="From $99/month"
            features={["Code generation", "Bug detection", "Performance optimization", "Learning assistance"]
          />
          <AIServiceCard
            title="AI Social Media Scheduler"
            description="Intelligent social media scheduling with AI-powered content generation and optimal timing."
            href="/services/ai-social-scheduler"
            icon="📱"
            pricing="From $49/month"
            features={["Content generation", "Optimal timing", "Performance analytics", "Cross-platform management"]
          />
          <AIServiceCard
            title="AI Project Manager"
            description="Intelligent project management with AI-powered task automation and predictive analytics."
            href="/services/ai-project-manager"
            icon="📊"
            pricing="From $199/month"
            features={["Task automation", "Predictive analytics", "Team optimization", "Smart scheduling"]
          />
          <AIServiceCard
            title="AI Customer Support"
            description="Intelligent customer support automation with AI chatbots and sentiment analysis."
            href="/services/ai-customer-support"
            icon="💬"
            pricing="From $299/month"
            features={["AI chatbots", "Sentiment analysis", "Multilingual support", "Smart routing"]
          />
          <AIServiceCard
            title="AI Data Analytics"
            description="Advanced AI-powered data analytics with predictive modeling and real-time insights."
            href="/services/ai-data-analytics"
            icon="📈"
            pricing="From $399/month"
            features={["Predictive analytics", "Real-time dashboards", "Automated insights", "Natural language queries"]
          />
          <AIServiceCard
            title="AI Content Generator"
            description="AI-powered content creation for blogs, marketing materials, and social media posts."
            href="/services/ai-content-generator"
            icon="✍️"
            pricing="From $149/month"
            features={["Blog writing", "Marketing copy", "Social media posts", "SEO optimization"]
          />
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <TechCard name="Machine Learning" icon="🧠" />
          <TechCard name="Natural Language Processing" icon="💬" />
          <TechCard name="Computer Vision" icon="👁️" />
          <TechCard name="Deep Learning" icon="🔬" />
          <TechCard name="Neural Networks" icon="🕸️" />
          <TechCard name="Reinforcement Learning" icon="🎯" />
        </div>
      </section>

      {/* AI Solutions by Industry */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Solutions by Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            icon="🏦"
            title="Financial Services"
            description="AI solutions for fraud detection, risk assessment, and algorithmic trading."
            solutions={["Fraud detection", "Risk modeling", "Algorithmic trading", "Credit scoring"]
          />
          <IndustryCard
            icon="🛒"
            title="E-commerce"
            description="AI-powered recommendation engines, inventory optimization, and customer analytics."
            solutions={["Recommendation engines", "Inventory optimization", "Customer analytics", "Price optimization"]
          />
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="AI solutions for medical diagnosis, drug discovery, and patient care optimization."
            solutions={["Medical diagnosis", "Drug discovery", "Patient monitoring", "Treatment optimization"]
          />
          <IndustryCard
            icon="🏭"
            title="Manufacturing"
            description="AI for predictive maintenance, quality control, and supply chain optimization."
            solutions={["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]
          />
          <IndustryCard
            icon="🎓"
            title="Education"
            description="AI-powered personalized learning, student assessment, and educational content generation."
            solutions={["Personalized learning", "Student assessment", "Content generation", "Learning analytics"]
          />
          <IndustryCard
            icon="🏠"
            title="Real Estate"
            description="AI solutions for property valuation, market analysis, and investment optimization."
            solutions={["Property valuation", "Market analysis", "Investment optimization", "Property matching"]
          />
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Analysis"
            description="Understand your business needs and data requirements for optimal AI solution design."
          />
          <ProcessStep
            step="2"
            title="Data Preparation"
            description="Clean, process, and prepare your data for AI model training and optimization."
          />
          <ProcessStep
            step="3"
            title="Model Development"
            description="Develop and train custom AI models tailored to your specific use case and requirements."
          />
          <ProcessStep
            step="4"
            title="Deployment & Monitoring"
            description="Deploy your AI solution and provide ongoing monitoring, maintenance, and optimization."
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven AI Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="500+"
            label="AI Projects Delivered"
            description="Successfully completed AI implementations"
          />
          <MetricCard
            number="95%"
            label="Accuracy Rate"
            description="Average accuracy of our AI models"
          />
          <MetricCard
            number="300%"
            label="ROI Improvement"
            description="Average return on investment for clients"
          />
          <MetricCard
            number="24/7"
            label="Support Available"
            description="Round-the-clock AI model monitoring"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 1,000+ businesses that have revolutionized their operations with our AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-blue-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
}

function AIServiceCard({ title, description, href, icon, pricing, features }: {
  title: string;
  description: string;
  href: string;
  icon: string;
  pricing: string;
  features: string[];
}) {
  return (
    <Link
      href={href}
      className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-semibold text-gray-900">{name}</div>
    </div>
  );
}

function IndustryCard({ icon, title, description, solutions }: {
  icon: string;
  title: string;
  description: string;
  solutions: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {solutions.map((solution, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}