import Link from 'next/link';'
import { ArrowRightIcon } from '@heroicons/react/24/outline';'
export const metadata = {
  }
  "title": 'Ai Services - Zion Tech Group','
  "description": 'Professional ai services solutions for your business needs.'};'
export default function AiServicesPage() {
}
import React from 'react';'
import Link from 'next/link';'
export const metadata = {
  }
  "title": 'AI Services | Zion Tech Group','
  "description": 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.','
  "keywords": 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting''
};
interface AIServiceProps {
  }
  "icon": string;
  "title": string;
  "description": string;
  "features": string[];
  "price": string;
}) {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2 mb-4">"
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>"
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600 mb-4">{price}</div>"
      <a,
href=""mailto":kleber@ziontechgroup.com?subject=AI "Service": {title}""
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg "hover":bg-blue-700 transition-colors""
      >
        Get Started
      </a>
    </div>
  );
  "price": string;
}) {
}
export default function AIServicesPage() {
}
return (;
    <div className="space-y-16">"
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">"
        <h1 className="text-4xl "md":text-5xl font-bold text-gray-900 mb-6">"
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">"
          Transform your business with our comprehensive AI services including custom LLM development,
          RAG systems, AI agents, computer vision, and MLOps solutions.
        </p>
        <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
          <a,
href=""mailto":kleber@ziontechgroup.com?subject=AI Services Inquiry""
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-green-700 transition-colors""
          >
            Get AI Consultation
          </a>
          <a,
href=""tel":+13024640950""
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-green-600 "hover":text-white transition-colors""
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>
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
              Contact us today to discuss your ai services requirements,
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
import Link from "next/link";"
export const metadata = {
  }
  "title": "AI Services | Zion Tech Group","
  "description": "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications."};"
function FeatureItem() {
}
return (;
    <div className="bg-white rounded-lg shadow-md p-6 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">"
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default function AIServicesPage() {
}
return (;
    <div className="animate-fade-in">"
      <div className="text-center mb-16">"
        <h1 className="text-4xl font-bold text-gray-900 mb-6">"
          AI Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
          Transform your business with cutting-edge artificial intelligence solutions. From custom LLM development to intelligent automation, we deliver AI that drives real business value.
        </p>
      </div>
      <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16">"
        <FeatureItem,
icon="🤖""
          title="Custom LLM Development""
          description="Build and deploy custom large language models tailored to your specific business needs and data.""
          benefits={[
            "Domain-specific training","
            "Fine-tuned performance","
            "Custom embeddings","
            "Deployment optimization""
          ]} />
        <FeatureItem,
icon="🔍""
          title="RAG Systems""
          description="Retrieval-Augmented Generation systems that combine your knowledge base with AI for accurate, contextual responses.""
          benefits={[
            "Knowledge base integration","
            "Context-aware responses","
            "Source attribution","
            "Real-time updates""
          ]} />
        <FeatureItem,
icon="🎯""
          title="AI Agents""
          description="Intelligent agents that can perform complex tasks, make decisions, and interact with your systems autonomously.""
          benefits={[
            "Task automation","
            "Decision making","
            "Multi-step workflows","
            "Continuous learning""
          ]} />
        <FeatureItem,
icon="👁️""
          title="Computer Vision""
          description="Advanced image and video analysis capabilities for object detection, classification, and visual understanding.""
          benefits={[
            "Object detection","
            "Image classification","
            "Video analysis","
            "Real-time processing""
          ]} />
        <FeatureItem,
icon="📊""
          title="Data Analytics""
          description="AI-powered analytics that extract insights from complex datasets and provide actionable business intelligence.""
          benefits={[
            "Pattern discovery","
            "Trend analysis","
            "Anomaly detection","
            "Business intelligence""
          ]} />
        <FeatureItem,
icon="🔮""
          title="Predictive Modeling""
          description="Advanced models that forecast future trends and outcomes for better planning and decision making.""
          benefits={[
            "Demand forecasting","
            "Risk assessment","
            "Market prediction","
            "Resource optimization""
          ]} />
      </div>
      <div className="bg-blue-50 rounded-lg p-8 mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Services?</h2>"
        <div className="grid grid-cols-1 "md":grid-cols-2 gap-8">"
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>"
            <p className="text-gray-600 mb-4">"
              Our AI specialists have deep expertise in machine learning, deep learning, and AI system architecture.
              We stay at the forefront of AI research and development.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>"
            <p className="text-gray-600 mb-4">"
              We've successfully delivered AI solutions for businesses across various industries,'
              driving measurable improvements in efficiency, accuracy, and ROI.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>"
            <p className="text-gray-600 mb-4">"
              Our AI systems are designed to scale with your business, handling increasing data volumes,
and complexity while maintaining performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>"
            <p className="text-gray-600 mb-4">"
              We provide continuous monitoring, optimization, and support to ensure your AI systems,
continue to deliver value as your business evolves.;
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">"
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business with AI?</h2>"
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">"
          Let's discuss how our AI services can solve your specific challenges and drive your business forward.'
        </p>
        <a,
href="/contact""
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-blue-700 transition-colors""
        >
          Get Started Today
        </a>
        <div className="mt-8">"
          <Link,
href="/services""
            className="text-blue-600 "hover":text-blue-800 font-medium""
          >
            View All Services
          </Link>
      <div className="mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Development Process</h2>"
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-8">"
          <ProcessStep,
step="1""
            title="Discovery & Analysis""
            description="Understand your business needs, data sources, and AI requirements through comprehensive analysis."" />
          <ProcessStep,
step="2""
            title="Solution Design""
            description="Design custom AI architecture and select the most appropriate technologies and approaches."" />
          <ProcessStep,
step="3""
            title="Development & Training""
            description="Build, train, and optimize AI models using your data and business-specific requirements."" />
          <ProcessStep,
step="4""
            title="Deployment & Support""
            description="Deploy the solution in your environment and provide ongoing support and optimization."" />
      {/* Services Section */}
      <section className="py-16">"
        <div className="max-w-6xl mx-auto">"
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">"
            Our AI Services
          </h2>
          <div className="grid "md":grid-cols-2 "lg":grid-cols-3 gap-8">"
            <AIService,
icon="🧠""
              title="Custom LLM Development""
              description="Build and deploy custom large language models tailored to your specific business needs and use cases.""
              features={[
                "Fine-tuned models for your domain","
                "Custom training pipelines","
                "API integration and deployment","
                "Performance optimization""
              ]} />
            <AIService,
icon="🔍""
              title="RAG Systems""
              description="Implement Retrieval-Augmented Generation systems for accurate, context-aware AI responses.""
              features={[
                "Vector database integration","
                "Semantic search capabilities","
                "Context-aware responses","
                "Real-time data integration""
              ]} />
            <AIService,
icon="🤖""
              title="AI Agents""
              description="Develop intelligent AI agents that can perform complex tasks and interact with your systems autonomously.""
              features={[
                "Multi-step task execution","
                "Tool integration and usage","
                "Autonomous decision making","
                "Human-AI collaboration""
              ]} />
            <AIService,
icon="👁️""
              title="Computer Vision""
              description="Implement computer vision solutions for image recognition, object detection, and visual analysis.""
              features={[
                "Image classification and detection","
                "Real-time video processing","
                "Custom model training","
                "Edge deployment optimization""
              ]} />
            <AIService,
icon="⚙️""
              title="MLOps Solutions""
              description="Complete machine learning operations pipeline for model deployment, monitoring, and maintenance.""
              features={[
                "Model versioning and tracking","
                "Automated deployment pipelines","
                "Performance monitoring","
                "A/B testing frameworks""
              ]} />
            <AIService,
icon="💼""
              title="AI Consulting""
              description="Strategic AI consulting to help you identify opportunities and develop AI roadmaps for your business.""
              features={[
                "AI strategy development","
                "Technology assessment","
                "Implementation planning","
                "ROI analysis and optimization""
              ]} />
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
              Contact us today to discuss your ai services requirements,
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
import Link from "next/link";"
export const metadata = {
  }
  "title": "AI Services | Zion Tech Group","
  "description": "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications."};"
function FeatureItem() {
}
return (;
    <div className="bg-white rounded-lg shadow-md p-6 "hover":shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">"
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>"
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function AIServicesPage() {
}
return (;
    <div className="animate-fade-in">"
      <div className="text-center mb-16">"
        <h1 className="text-4xl font-bold text-gray-900 mb-6">"
          AI Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
          Transform your business with cutting-edge artificial intelligence solutions. From custom LLM development to intelligent automation, we deliver AI that drives real business value.
        </p>
      </div>
      <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8 mb-16">"
        <FeatureItem,
icon="🤖""
          title="Custom LLM Development""
          description="Build and deploy custom large language models tailored to your specific business needs and data.""
          benefits={[
            "Domain-specific training","
            "Fine-tuned performance","
            "Custom embeddings","
            "Deployment optimization""
          ]} />
        <FeatureItem,
icon="🔍""
          title="RAG Systems""
          description="Retrieval-Augmented Generation systems that combine your knowledge base with AI for accurate, contextual responses.""
          benefits={[
            "Knowledge base integration","
            "Context-aware responses","
            "Source attribution","
            "Real-time updates""
          ]} />
        <FeatureItem,
icon="🎯""
          title="AI Agents""
          description="Intelligent agents that can perform complex tasks, make decisions, and interact with your systems autonomously.""
          benefits={[
            "Task automation","
            "Decision making","
            "Multi-step workflows","
            "Continuous learning""
          ]} />
        <FeatureItem,
icon="👁️""
          title="Computer Vision""
          description="Advanced image and video analysis capabilities for object detection, classification, and visual understanding.""
          benefits={[
            "Object detection","
            "Image classification","
            "Video analysis","
            "Real-time processing""
          ]} />
        <FeatureItem,
icon="📊""
          title="Data Analytics""
          description="AI-powered analytics that extract insights from complex datasets and provide actionable business intelligence.""
          benefits={[
            "Pattern discovery","
            "Trend analysis","
            "Anomaly detection","
            "Business intelligence""
          ]} />
        <FeatureItem,
icon="🔮""
          title="Predictive Modeling""
          description="Advanced models that forecast future trends and outcomes for better planning and decision making.""
          benefits={[
            "Demand forecasting","
            "Risk assessment","
            "Market prediction","
            "Resource optimization""
          ]} />
      </div>
      <div className="bg-blue-50 rounded-lg p-8 mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Services?</h2>"
        <div className="grid grid-cols-1 "md":grid-cols-2 gap-8">"
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>"
            <p className="text-gray-600 mb-4">"
              Our AI specialists have deep expertise in machine learning, deep learning, and AI system architecture.
              We stay at the forefront of AI research and development.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>"
            <p className="text-gray-600 mb-4">"
              We've successfully delivered AI solutions for businesses across various industries,'
              driving measurable improvements in efficiency, accuracy, and ROI.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>"
            <p className="text-gray-600 mb-4">"
              Our AI systems are designed to scale with your business, handling increasing data volumes,
and complexity while maintaining performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>"
            <p className="text-gray-600 mb-4">"
              We provide continuous monitoring, optimization, and support to ensure your AI systems,
continue to deliver value as your business evolves.;
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">"
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business with AI?</h2>"
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">"
          Let's discuss how our AI services can solve your specific challenges and drive your business forward.'
        </p>
        <a,
href="/contact""
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold "hover":bg-blue-700 transition-colors""
        >
          Get Started Today
        </a>
        <div className="mt-8">"
          <Link,
href="/services""
            className="text-blue-600 "hover":text-blue-800 font-medium""
          >
            View All Services
          </Link>
        </div>
      </section>
      <div className="mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Packages</h2>"
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">"
          <AIServiceCard,
icon="🚀""
            title="AI Starter Package""
            description="Perfect for businesses looking to get started with AI. Includes basic AI integration and simple automation.""
            features={["Basic AI integration", "Simple automation", "Data analysis", "3 months support"]}"
            price="Starting at $5,000"" />
          <AIServiceCard,
icon="💼""
            title="AI Professional Package""
            description="Comprehensive AI solutions for growing businesses. Includes custom models and advanced automation.""
            features={["Custom AI models", "Advanced automation", "RAG systems", "6 months support"]}"
            price="Starting at $15,000"" />
          <AIServiceCard,
icon="🏢""
            title="AI Enterprise Package""
            description="Full-scale AI transformation for large enterprises. Includes complete AI infrastructure and ongoing support.""
            features={["Complete AI infrastructure", "Custom development", "24/7 support", "Ongoing optimization"]}"
            price="Custom pricing"" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">"
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>"
        <p className="text-xl mb-8">"
          Let&apos;s discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
        </p>
        <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
          <a,
href=""tel":+13024640950""
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold "hover":bg-gray-100 transition-colors""
          >
            Call +1 302 464 0950
          </a>
          <a,
href=""mailto":kleber@ziontechgroup.com""
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-blue-600 transition-colors""
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-sm">"
          <p>"Address": 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>"Email": kleber@ziontechgroup.com</p>
        </div>
      </div>
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">"
        <div className="max-w-6xl mx-auto">"
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">"
            Why Choose Our AI Services?
          </h2>
          <div className="grid "md":grid-cols-2 "lg":grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="text-4xl mb-4">🎯</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>"
              <p className="text-gray-600">Tailored AI solutions for your specific business needs</p>"
            </div>
            <div className="text-center">"
              <div className="text-4xl mb-4">⚡</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>"
              <p className="text-gray-600">Rapid deployment and integration</p>"
            </div>
            <div className="text-center">"
              <div className="text-4xl mb-4">🔒</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>"
              <p className="text-gray-600">Bank-level security and compliance</p>"
            </div>
            <div className="text-center">"
              <div className="text-4xl mb-4">📈</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>"
              <p className="text-gray-600">500+ successful AI implementations</p>"
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white text-center rounded-lg">"
        <div className="max-w-4xl mx-auto">"
          <h2 className="text-3xl font-bold mb-6">"
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8">"
            Let our AI experts help you identify opportunities and implement solutions that drive real business value.
          </p>
          <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
            <a,
href=""mailto":kleber@ziontechgroup.com?subject=AI Services Consultation""
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold "hover":bg-gray-100 transition-colors""
            >
              Start Your AI Journey
            </a>
            <a,
href=""tel":+13024640950""
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-green-600 transition-colors""
            >
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm">"
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
function AIService() {
}
return (;
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 "hover":shadow-lg transition-shadow">"
      <div className="text-3xl mb-4">{icon}</div>"
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">"
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>"
            {feature}
          </li>
        ))}
      </ul>
      <div className="mb-16">"
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Service Packages</h2>"
        <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8">"
          <AIServiceCard,
icon="🚀""
            title="AI Starter Package""
            description="Perfect for businesses looking to get started with AI. Includes basic AI integration and simple automation.""
            features={["Basic AI integration", "Simple automation", "Data analysis", "3 months support"]}"
            price="Starting at $5,000"" />
          <AIServiceCard,
icon="💼""
            title="AI Professional Package""
            description="Comprehensive AI solutions for growing businesses. Includes custom models and advanced automation.""
            features={["Custom AI models", "Advanced automation", "RAG systems", "6 months support"]}"
            price="Starting at $15,000"" />
          <AIServiceCard,
icon="🏢""
            title="AI Enterprise Package""
            description="Full-scale AI transformation for large enterprises. Includes complete AI infrastructure and ongoing support.""
            features={["Complete AI infrastructure", "Custom development", "24/7 support", "Ongoing optimization"]}"
            price="Custom pricing"" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">"
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>"
        <p className="text-xl mb-8">"
          Let&apos;s discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
        </p>
        <div className="flex flex-col "sm":flex-row gap-4 justify-center">"
          <a,
href=""tel":+13024640950""
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold "hover":bg-gray-100 transition-colors""
          >
            Call +1 302 464 0950
          </a>
          <a,
href=""mailto":kleber@ziontechgroup.com""
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold "hover":bg-white "hover":text-blue-600 transition-colors""
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-sm">"
          <p>"Address": 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>"Email": kleber@ziontechgroup.com</p>
    </div>
  );
}