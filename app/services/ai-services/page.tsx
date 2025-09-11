export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Custom AI solutions including LLM apps, RAG, agents, fine-tuning, and MLOps.',
};

function Item({ title, description, price }: { title: string; description: string; price: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-blue-600 font-semibold">{price}</p>
    </div>
  );
}

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom AI solutions that transform your business with intelligent automation, 
            machine learning, and advanced analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Item 
            title="Applied AI" 
            description="Custom AI solutions tailored to your specific business needs and challenges."
            price="Starting at $25k"
          />
          <Item 
            title="LLM Applications" 
            description="Large language model integration for chatbots, content generation, and analysis."
            price="Starting at $15k"
          />
          <Item 
            title="RAG Systems" 
            description="Retrieval-augmented generation for intelligent document processing and Q&A systems."
            price="Starting at $20k"
          />
          <Item 
            title="AI Agents" 
            description="Autonomous AI agents that can perform complex tasks and decision-making."
            price="Starting at $30k"
          />
          <Item 
            title="Fine-tuning" 
            description="Custom model training and fine-tuning for domain-specific applications."
            price="Starting at $10k"
          />
          <Item 
            title="MLOps" 
            description="Complete machine learning operations pipeline for production AI systems."
            price="Starting at $35k"
          />
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}