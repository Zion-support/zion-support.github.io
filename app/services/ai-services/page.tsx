<<<<<<< HEAD

import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group",
  description: "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",

};

export default function AIServicesPage() {
  return (

    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. From custom LLM development to intelligent automation, we deliver AI that drives real business value.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our AI Capabilities</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🧠"
              title="Custom LLM Development"
              description="Build and deploy large language models tailored to your specific business needs and use cases."
              benefits={["Custom model training", "Domain-specific optimization", "Cost-effective deployment", "Continuous learning"]}
            />
            <FeatureItem
              icon="🔍"
              title="RAG Systems & AI Agents"
              description="Implement Retrieval-Augmented Generation systems and intelligent agents for enhanced decision-making."
              benefits={["Real-time data access", "Context-aware responses", "Automated workflows", "Human-like interactions"]}
            />
            <FeatureItem
              icon="👁️"
              title="Computer Vision Solutions"
              description="Develop advanced computer vision applications for image recognition, object detection, and visual analysis."
              benefits={["Image classification", "Object detection", "Facial recognition", "Quality inspection"]}
            />
            <FeatureItem
              icon="⚙️"
              title="MLOps & Model Management"
              description="End-to-end machine learning operations including model deployment, monitoring, and lifecycle management."
              benefits={["Automated pipelines", "Model versioning", "Performance monitoring", "Scalable deployment"]}
            />
            <FeatureItem
              icon="🤖"
              title="AI Automation & Integration"
              description="Seamlessly integrate AI capabilities into your existing systems and workflows for maximum efficiency."
              benefits={["API integration", "Workflow automation", "Data processing", "System optimization"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for AI?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🚀"
              title="Proven Expertise"
              description="Our team has successfully delivered 500+ AI projects across various industries with measurable results."
            />
            <BenefitCard
              icon="💡"
              title="Innovation & Research"
              description="We stay at the forefront of AI technology, implementing the latest advances in machine learning and AI."
            />
            <BenefitCard
              icon="🔒"
              title="Enterprise-Grade Security"
              description="All our AI solutions are built with security and compliance in mind, ensuring your data remains protected."
            />
            <BenefitCard
              icon="📈"
              title="Measurable ROI"
              description="We focus on delivering AI solutions that provide clear, measurable business value and return on investment."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a structured approach to ensure successful AI implementation and adoption.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Strategy"
            description="Understand your business needs, data landscape, and define AI objectives."
          />
          <ProcessStep
            step="2"
            title="Development & Training"
            description="Build, train, and optimize AI models tailored to your specific requirements."
          />
          <ProcessStep
            step="3"
            title="Deployment & Optimization"
            description="Deploy AI solutions and continuously monitor and optimize performance."
          />

        </div>
      </div>

      <CTA />
    </div>
  );
}

=======
export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI solutions including machine learning, natural language processing, computer vision, and intelligent automation.',
  keywords: 'AI services, machine learning, NLP, computer vision, automation, artificial intelligence'
};

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
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
        </div>

        <CTA />
      </div>
    </div>
  );
}