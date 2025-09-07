<<<<<<< HEAD
import Link from 'next/link';


// Simple ServiceCard component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
export const metadata = { 
=======
export const metadata = {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI solutions including machine learning, natural language processing, computer vision, and intelligent automation.',
  keywords: 'AI services, machine learning, NLP, computer vision, automation, artificial intelligence'
};

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Let our AI experts help you implement cutting-edge solutions that drive real business value.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          Get Started Today
        </a>
        <a
          href="/services"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          View All Services
        </a>
      </div>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions to transform your business. From machine learning to intelligent automation, 
            we deliver cutting-edge AI technologies that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureItem
            icon="🤖"
            title="Machine Learning"
            description="Custom ML models that learn from your data to make predictions and automate decisions."
            benefits={[
              "Predictive analytics",
              "Pattern recognition",
              "Automated decision making",
              "Continuous learning"
            ]}
          />
          <FeatureItem
            icon="💬"
            title="Natural Language Processing"
            description="AI that understands and processes human language for chatbots, analysis, and automation."
            benefits={[
              "Chatbot development",
              "Sentiment analysis",
              "Text summarization",
              "Language translation"
            ]}
          />
          <FeatureItem
            icon="👁️"
            title="Computer Vision"
            description="AI that can see and interpret visual data for image recognition and analysis."
            benefits={[
              "Image classification",
              "Object detection",
              "Facial recognition",
              "Quality inspection"
            ]}
          />
          <FeatureItem
            icon="⚡"
            title="Process Automation"
            description="Intelligent automation that streamlines workflows and reduces manual work."
            benefits={[
              "Workflow optimization",
              "Task automation",
              "Data processing",
              "System integration"
            ]}
          />
          <FeatureItem
            icon="📊"
            title="Data Analytics"
            description="AI-powered analytics that extract insights from complex datasets."
            benefits={[
              "Pattern discovery",
              "Trend analysis",
              "Anomaly detection",
              "Business intelligence"
            ]}
          />
          <FeatureItem
            icon="🔮"
            title="Predictive Modeling"
            description="Advanced models that forecast future trends and outcomes for better planning."
            benefits={[
              "Demand forecasting",
              "Risk assessment",
              "Market prediction",
              "Resource optimization"
            ]}
          />
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our AI specialists have years of experience in machine learning, deep learning, and AI implementation across various industries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Every AI solution is tailored to your specific business needs, ensuring maximum impact and ROI.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                We've helped hundreds of companies implement AI solutions that deliver measurable business value.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous monitoring, optimization, and support to ensure your AI solutions perform at their best.
              </p>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechCard
              title="Large Language Models"
              description="GPT-4, Claude, Llama, and custom fine-tuned models"
              icon="🧠"
            />
            <TechCard
              title="Vector Databases"
              description="Pinecone, Weaviate, Chroma for semantic search"
              icon="🔍"
            />
            <TechCard
              title="ML Frameworks"
              description="TensorFlow, PyTorch, Scikit-learn, Hugging Face"
              icon="⚡"
            />
            <TechCard
              title="Cloud Platforms"
              description="AWS, GCP, Azure with GPU acceleration"
              icon="☁️"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Plan
              name="AI Discovery"
              price="$5k–$12k"
              features={[
                "2–3 weeks consultation",
                "Use case design",
                "Technology selection",
                "Implementation roadmap",
                "Proof of concept"
              ]}
            />
            <Plan
              name="Pilot"
              price="$15k–$45k"
              features={[
                "4–8 weeks development",
                "RAG / agent MVP",
                "Evaluation framework",
                "Safety guardrails",
                "Performance dashboards"
              ]}
              popular={true}
            />
            <Plan
              name="Production"
              price="$50k+"
              features={[
                "Hardened infrastructure",
                "Monitoring & alerting",
                "SLA guarantees",
                "Cost optimization",
                "Ongoing maintenance"
              ]}
            />
          </div>
        </div>

        <section className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to implement AI in your business?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's discuss your AI needs and create a solution that delivers measurable results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </section>
    </div>
  );
}


function SolutionCard({ title, description, features, pricing }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-gray-900">{pricing}</div>
    </div>
  );
}

function TechCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function Plan({ name, price, features, popular = false }: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
=======
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to implement AI in your business? Let's discuss your project.
          </p>
          <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto">
            <p>📞 +1-302-464-0950</p>
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
        </div>

        <CTA />
      </div>
    </div>
  );
}