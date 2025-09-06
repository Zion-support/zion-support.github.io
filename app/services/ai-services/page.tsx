import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
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
            features={["Code generation", "Bug detection", "Performance optimization", "Learning assistance"]}
          />
          <AIServiceCard
            title="AI Social Media Scheduler"
            description="Intelligent social media scheduling with AI-powered content generation and optimal timing."
            href="/services/ai-social-scheduler"
            icon="📱"
            pricing="From $49/month"
            features={["Content generation", "Optimal timing", "Performance analytics", "Cross-platform management"]}
          />
          <AIServiceCard
            title="AI Project Manager"
            description="Intelligent project management with AI-powered task automation and predictive analytics."
            href="/services/ai-project-manager"
            icon="📊"
            pricing="From $199/month"
            features={["Task automation", "Predictive analytics", "Team optimization", "Smart scheduling"]}
          />
          <AIServiceCard
            title="AI Customer Support"
            description="Intelligent customer support automation with AI chatbots and sentiment analysis."
            href="/services/ai-customer-support"
            icon="💬"
            pricing="From $299/month"
            features={["AI chatbots", "Sentiment analysis", "Multilingual support", "Smart routing"]}
          />
          <AIServiceCard
            title="AI Data Analytics"
            description="Advanced AI-powered data analytics with predictive modeling and real-time insights."
            href="/services/ai-data-analytics"
            icon="📈"
            pricing="From $399/month"
            features={["Predictive analytics", "Real-time dashboards", "Automated insights", "Natural language queries"]}
          />
          <AIServiceCard
            title="AI Content Generator"
            description="AI-powered content creation for blogs, marketing materials, and social media posts."
            href="/services/ai-content-generator"
            icon="✍️"
            pricing="From $149/month"
            features={["Blog writing", "Marketing copy", "Social media posts", "SEO optimization"]}
          />
        </div>
      </section>
    </div>
  );
}

function AIServiceCard({
  title,
  description,
  href,
  icon,
  pricing,
  features
}: {
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
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="text-lg font-semibold text-blue-600 mb-4">{pricing}</div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </Link>
  );
}