
import Link from 'next/link';
export const metadata = {title: "AI Services | Zion Tech Group - Advanced AI Solutions & Machine Learning",description: "Comprehensive AI services including custom LLM development, RAG systems, computer vision, NLP, predictive analytics, and enterprise AI integration. Expert AI solutions with 99.9% accuracy and 24/7 support.";
}export default function AIServicesPage() {return (<div className="animate-fade-in">;
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100">;
        <div className="max-w-4xl mx-auto px-4">;
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">;
            AI Services & Solutions;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            Transform your business with cutting-edge artificial intelligence. From custom LLM development to enterprise AI platforms,we deliver intelligent solutions that drive real results.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a;
              href="tel:+13024640950";
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
            >;
              Get AI Consultation;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors";
            >;
              Discuss Your AI Project;
            </a>;
          </div>;
        </div>;
      </section>;
      {/* AI Services Grid */}
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Service Categories</h2>;
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
              Comprehensive AI solutions tailored to your business needs, from development to deployment and maintenance.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {/* Custom LLM Development */}
            <AIServiceCard;
              title="Custom LLM Development";
              description="Build and deploy custom large language models tailored to your specific use case and data";
              features={[;
                "Fine-tuned models for your domain","Custom training on your data","API integration and deployment","Performance optimization";
              ]}
              pricing="From $15,000/project";
              icon="🧠";
              href="/services/ai-services/custom-llm";
            />;
            {/* RAG Systems */}
            <AIServiceCard;
              title="RAG Systems & Knowledge Bases";
              description="Retrieval-Augmented Generation systems that combine your data with AI for accurate, contextual responses";
              features={[;
                "Document processing & indexing","Vector database setup","Context-aware responses","Real-time knowledge updates";
              ]}
              pricing="From $8,000/project";
              icon="🔍";
              href="/services/ai-services/rag-systems";
            />;
            {/* Computer Vision */}
            <AIServiceCard;
              title="Computer Vision Solutions";
              description="Image and video analysis, object detection, and visual recognition systems";
              features={[;
                "Object detection & classification","Facial recognition systems","Medical image analysis","Real-time video processing";
              ]}
              pricing="From $12,000/project";
              icon="👁️";
              href="/services/ai-services/computer-vision";
            />;
            {/* Natural Language Processing */}
            <AIServiceCard;
              title="Natural Language Processing";
              description="Text analysis, sentiment analysis, and language understanding solutions";
              features={[;
                "Sentiment analysis","Text classification","Named entity recognition","Language translation";
              ]}
              pricing="From $6,000/project";
              icon="💬";
              href="/services/ai-services/nlp";
            />;
            {/* Predictive Analytics */}
            <AIServiceCard;
              title="Predictive Analytics & ML Models";
              description="Machine learning models for forecasting, risk assessment, and business intelligence";
              features={[;
                "Demand forecasting","Risk prediction models","Customer behavior analysis","Fraud detection systems";
              ]}
              pricing="From $10,000/project";
              icon="📊";
              href="/services/ai-services/predictive-analytics";
            />;
            {/* AI Chatbots */}
            <AIServiceCard;
              title="AI Chatbots & Virtual Assistants";
              description="Intelligent conversational AI for customer support, sales, and internal operations";
              features={[;
                "Multi-channel integration","Context-aware conversations","Human handoff capabilities","Analytics & insights";
              ]}
              pricing="From $3,000/month";
              icon="🤖";
              href="/services/ai-services/chatbots";
            />;
            {/* AI Automation */}
            <AIServiceCard;
              title="AI Process Automation";
              description="Intelligent automation for repetitive tasks and complex workflows";
              features={[;
                "Document processing automation","Email classification & routing","Data entry automation","Workflow optimization";
              ]}
              pricing="From $5,000/month";
              icon="⚡";
              href="/services/ai-services/automation";
            />;
            {/* AI Content Generation */}
            <AIServiceCard;
              title="AI Content Generation";
              description="Automated content creation for marketing, documentation, and creative writing";
              features={[;
                "Blog & article writing","Social media content","Product descriptions","Technical documentation";
              ]}
              pricing="From $2,000/month";
              icon="✍️";
              href="/services/ai-services/content-generation";
            />;
            {/* AI Analytics */}
            <AIServiceCard;
              title="AI-Powered Analytics";
              description="Intelligent data analysis and business intelligence with AI insights";
              features={[;
                "Automated report generation","Anomaly detection","Trend analysis","Custom dashboards";
              ]}
              pricing="From $4,000/month";
              icon="📈";
              href="/services/ai-services/analytics";
            />;
          </div>;
        </div>;
      </section>;
      {/* Industry-Specific AI Solutions */}
      <section className="py-16 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific AI Solutions</h2>;
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
              Specialized AI solutions designed for specific industries and use cases.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            <IndustryCard;
              title="Healthcare AI";
              description="Medical diagnosis, drug discovery, and patient care optimization";
              icon="🏥";
              pricing="From $25,000/project";
            />;
            <IndustryCard;
              title="Financial AI";
              description="Fraud detection, algorithmic trading, and risk assessment";
              icon="💳";
              pricing="From $20,000/project";
            />;
            <IndustryCard;
              title="E-commerce AI";
              description="Recommendation engines, price optimization, and inventory management";
              icon="🛒";
              pricing="From $15,000/project";
            />;
            <IndustryCard;
              title="Manufacturing AI";
              description="Predictive maintenance, quality control, and supply chain optimization";
              icon="🏭";
              pricing="From $18,000/project";
            />;
          </div>;
        </div>;
      </section>;
      {/* AI Development Process */}
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>;
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
              A proven methodology for delivering successful AI solutions that drive real business value.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <ProcessStep;
              step="1";
              title="Discovery & Analysis";
              description="Understanding your business needs, data landscape, and AI opportunities";
              icon="🔍";
            />;
            <ProcessStep;
              step="2";
              title="Data Preparation";
              description="Cleaning, processing, and preparing your data for AI model training";
              icon="📊";
            />;
            <ProcessStep;
              step="3";
              title="Model Development";
              description="Building, training, and optimizing AI models for your specific use case";
              icon="⚙️";
            />;
            <ProcessStep;
              step="4";
              title="Deployment & Monitoring";
              description="Deploying models to production and continuous monitoring for optimal performance";
              icon="🚀";
            />;
          </div>;
        </div>;
      </section>;
      {/* AI Capabilities & Technologies */}
      <section className="py-16 bg-blue-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technologies & Capabilities</h2>;
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
              We work with the latest AI technologies and frameworks to deliver cutting-edge solutions.;
            </p>;
          </div>;
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">;
            <TechCard name="OpenAI GPT" />;
            <TechCard name="Anthropic Claude" />;
            <TechCard name="Google Gemini" />;
            <TechCard name="TensorFlow" />;
            <TechCard name="PyTorch" />;
            <TechCard name="Hugging Face" />;
            <TechCard name="LangChain" />;
            <TechCard name="Pinecone" />;
            <TechCard name="Weaviate" />;
            <TechCard name="OpenAI API" />;
            <TechCard name="Azure AI" />;
            <TechCard name="AWS Bedrock" />;
          </div>;
        </div>;
      </section>;
      {/* Pricing & Packages */}
      <section className="py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Service Packages</h2>;
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
              Flexible pricing options to fit your budget and requirements.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <PricingCard;
              title="Starter AI";
              price="$5,000";
              period="per project";
              description="Perfect for small businesses getting started with AI";
              features={[;
                "Basic AI model development","Simple chatbot implementation","Data analysis & insights","2 weeks delivery","30 days support";
              ]}
              popular={false}
            />;
            <PricingCard;
              title="Professional AI";
              price="$15,000";
              period="per project";
              description="Comprehensive AI solutions for growing businesses";
              features={[;
                "Custom AI model development","Advanced RAG systems","Multi-channel integration","4-6 weeks delivery","90 days support","Performance optimization";
              ]}
              popular={true}
            />;
            <PricingCard;
              title="Enterprise AI";
              price="$50,000+";
              period="per project";
              description="Full-scale AI transformation for large organizations";
              features={[;
                "Complex AI platform development","Custom LLM training","Enterprise integration","8-12 weeks delivery","6 months support","Dedicated AI team","Ongoing optimization";
              ]}
              popular={false}
            />;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">;
        <div className="max-w-4xl mx-auto text-center px-4">;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready to Transform Your Business with AI?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8">;
            Get a free AI consultation and discover how artificial intelligence can accelerate your growth.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a;
              href="tel:+13024640950";
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors";
            >;
              Call +1 302 464 0950;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors";
            >;
              Email Us;
            </a>;
          </div>;
          <div className="mt-6 text-sm text-blue-100">;
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}function AIServiceCard() {import React from 'react';
export const metadata = {title: "AI Services & Solutions | Zion Tech Group",description:;
    "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",keywords:;
    "AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting";
}interface AIServiceProps  {title: string;
  description: string;
  price: string;
  features: string[];
  useCases: string[];
  icon: string;
  href: string;
}function AIService() {ursor/automate-test-improve-and-merge-code-646c;
  return (<a;
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white";
    >;
      <div className="text-4xl mb-4">{icon}</div>;
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">;
        {title}
      </h3>;
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>;
      <ul className="text-gray-600 space-y-2 mb-4">;
        {features.map((feature) => (<li key={feature} className="flex items-center text-sm">;
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>;
        ))}
      </ul>;
      <div className="text-lg font-semibold text-blue-600">;
        {pricing}</div>;
    </Link>;
  )}function IndustryCard() {return (<div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">;
      <div className="text-4xl mb-4">{icon}</div>;
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>;
      <p className="text-gray-600 text-sm mb-3">{description}</p>;
      <div className="text-blue-600 font-semibold">{pricing}</div>;
    </div>;
  )}function ProcessStep() {return (<div className="text-center">;
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
        <span className="text-2xl">{icon}</span>;
      </div>;
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">;
        {step}
      </div>;
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>;
      <p className="text-gray-600 text-sm">{description}</p>;
    </div>;
  )}function TechCard() {return (<div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">;
      <div className="text-sm font-medium text-gray-900">{name}</div>;
    </div>;
  )}function PricingCard() {return (<div className={`relative border rounded-xl p-8 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>;
      {popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">;
            Most Popular;
          </span>;
        </div>;
      )}
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>;
        <div className="text-4xl font-bold text-blue-600 mb-1">{price}</div>;
        <div className="text-gray-600">{period}</div>;
        <p className="text-gray-600 mt-4">{description}</p>;
      </div>;
      <ul className="space-y-3 mb-8">;
        {features.map((feature) => (<li key={feature} className="flex items-center">;
            <span className="text-green-500 mr-3">✓</span>;
            <span className="text-gray-600">{feature}</span>;
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300";
    >;
      <div className="flex items-center mb-4">;
        <span className="text-3xl mr-4">{icon}</span>;
        <div>;
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>;
          <div className="text-lg font-bold text-blue-600">{price}</div>;
        </div>;
      </div>;
      <p className="text-gray-600 mb-4">{description}</p>;
      <div className="mb-4">;
        <h4 className="text-sm font-semibold text-gray-900 mb-2">;
          Key Features:;
        </h4>;
        <ul className="space-y-1">;
          {features.map((feature, index) => (<li key={index} className="text-sm text-gray-600 flex items-center">;
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>;
              {feature}
            </li>;
          ))}
        </ul>;
      </div>;
      <div>;
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>;
        <div className="flex flex-wrap gap-1">;
          {useCases.map((useCase, index) => (<span;
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded";
            >;
              {useCase}
            </span>;
          ))}
        </div>;
      </div>;
    </a>;
  )}interface PricingTierProps  {name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}function PricingTier() {return (<div;
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >;
      {popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">;
            Most Popular;
          </span>;
        </div>;
      )}
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>;
        <div className="text-4xl font-bold text-blue-600 mb-2">;
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>;
        </div>;
        <p className="text-gray-600">{description}</p>;
      </div>;
      <ul className="space-y-3 mb-8">;
        {features.map((feature, index) => (<li key={index} className="flex items-center">;
            <svg;
              className="w-5 h-5 text-green-500 mr-3";
              fill="currentColor";
              viewBox="0 0 20 20";
            >;
              <path;
                fillRule="evenodd";
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z";
                clipRule="evenodd";
              />;
            </svg>;
            <span className="text-gray-700">{feature}</span>;
ursor/automate-test-improve-and-merge-code-646c;
          </li>;
        ))}
      </ul>;
      <a;
        href="tel:+13024640950";
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${popular;
            ? 'bg-blue-600 text-white hover:bg-blue-700';
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200';
        }`}
      >;
        Get Started;
      </a>;
    </div>;
  )}href="mailto:kleber@ziontechgroup.com?subject=AI Services - {name} Plan";
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${popular;
            ? "bg-blue-600 text-white hover:bg-blue-700";
            : "bg-gray-900 text-white hover:bg-gray-800";
        }`}
      >;
        {cta}
      </a>;
    </div>;
  )}export const metadata = {title: "AI Services | Zion Tech Group - Advanced AI Solutions & Machine Learning",description: "Comprehensive AI services including custom LLM development, RAG systems, computer vision, NLP, predictive analytics, and enterprise AI integration. Expert AI solutions with 99.9% accuracy and 24/7 support.";
export const metadata = {title: "AI Services & Solutions | Zion Tech Group",description:;
    "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",keywords: "AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting";
}export default function AIServicesPage() {return (<div className="animate-fade-in">;
      <section className="py-12">;
        <div className="text-center mb-16">;
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
            AI Services & Solutions;
          </h1>;
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">;
            Transform your business with cutting-edge AI solutions. From custom;
            LLM development to computer vision and MLOps, we deliver enterprise-grade;
            AI services that drive real business value.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <AIService;
            title="AI Chatbot Platform";
            description="Intelligent conversational AI that understands context and provides human-like responses";
            price="Starting at $2,500";
            features={[;
              "Natural language processing","Multi-channel support","Custom training data","Analytics dashboard","Integration APIs";
            ]}
            useCases={[;
              "Customer Support","Lead Generation","FAQ Automation","Sales Assistant";
            ]}
            icon="🤖";
            href="/services/ai-chatbot-platform";
          />;
          <AIService;
            title="AI Content Generator";
            description="Automated content creation using advanced language models for blogs, social media, and marketing";
            price="Starting at $1,500";
            features={[;
              "GPT-4 integration","SEO optimization","Brand voice training","Multi-format output","Plagiarism detection";
            ]}
            useCases={[;
              "Blog Writing","Social Media","Email Campaigns","Product Descriptions";
            ]}
            icon="✍️";
            href="/services/ai-content-generation";
          />;
          <AIService;
            title="AI Data Analytics";
            description="Predictive analytics and intelligent insights from your business data using machine learning";
            price="Starting at $3,000";
            features={[;
              "Predictive modeling","Anomaly detection","Trend analysis","Custom ML models","Real-time insights";
            ]}
            useCases={[;
              "Sales Forecasting","Risk Assessment","Customer Segmentation","Performance Optimization";
            ]}
            icon="🧠";
            href="/services/ai-data-analytics";
          />;
          <AIService;
            title="AI Code Reviewer";
            description="Automated code analysis and quality assurance with AI-powered suggestions and security scanning";
            price="Starting at $1,000";
            features={[;
              "Code quality analysis","Security vulnerability detection","Performance optimization","Best practice recommendations","CI/CD integration";
            ]}
            useCases={[;
              "Code Quality","Security Audits","Performance Reviews","Team Training";
            ]}
            icon="🔍";
            href="/services/ai-code-reviewer";
          />;
          <AIService;
            title="AI Meeting Assistant";
            description="Intelligent meeting transcription, summarization, and action item extraction";
            price="Starting at $2,000";
            features={[;
              "Real-time transcription","Meeting summaries","Action item extraction","Calendar integration","Meeting analytics";
            ]}
            useCases={[;
              "Meeting Notes","Action Tracking","Team Collaboration","Client Meetings";
            ]}
            icon="🎤";
            href="/services/ai-meeting-assistant";
          />;
          <AIService;
            title="AI Customer Insights";
            description="Customer behavior analysis and personalized recommendations using advanced AI algorithms";
            price="Starting at $2,500";
            features={[;
              "Customer segmentation","Behavior prediction","Personalized recommendations","Churn prediction","ROI analysis";
            ]}
            useCases={[;
              "Customer Retention","Personalization","Marketing Optimization","Sales Enhancement";
            ]}
            icon="👥";
            href="/services/ai-customer-insights";
          />;
          <AIService;
            title="Computer Vision Solutions";
            description="Image and video analysis using advanced computer vision and deep learning models";
            price="Starting at $4,000";
            features={[;
              "Object detection","Image classification","Facial recognition","Video analysis","Real-time processing";
            ]}
            useCases={[;
              "Quality Control","Security Systems","Medical Imaging","Retail Analytics";
            ]}
            icon="👁️";
            href="/services/computer-vision-solutions";
          />;
          <AIService;
            title="AI Document Processing";
            description="Intelligent document analysis, extraction, and processing using OCR and NLP technologies";
            price="Starting at $2,000";
            features={[;
              "OCR text extraction","Document classification","Data validation","Workflow automation","Multi-format support";
            ]}
            useCases={[;
              "Invoice Processing","Contract Analysis","Data Entry","Compliance";
            ]}
            icon="📄";
            href="/services/ai-document-processor";
          />;
          <AIService;
            title="AI Email Optimizer";
            description="AI-powered email marketing optimization with smart subject lines and content personalization";
            price="Starting at $99";
            features={[;
              "Subject line optimization","Content personalization","Send time optimization","A/B testing automation","Performance analytics";
            ]}
            useCases={[;
              "Email Marketing","Campaign Optimization","Personalization","Engagement";
            ]}
            icon="📧";
            href="/services/ai-email-optimizer";
          />;
        </div>;
      </section>;
      {/* AI Technologies */}
      <section className="py-12 bg-gray-50 rounded-lg">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            AI Technologies We Use;
          </h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            We leverage cutting-edge AI technologies and frameworks to deliver;
            state-of-the-art solutions.;
          </p>;
        </div>;
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">;
          {[;
            {name: "OpenAI GPT",icon: "🧠",description: "Large Language Models";
            },{ name: "TensorFlow", icon: "🔧", description: "Machine Learning" },{ name: "PyTorch", icon: "🔥", description: "Deep Learning" },{ name: "Hugging Face", icon: "🤗", description: "NLP Models" },{ name: "OpenCV", icon: "👁️", description: "Computer Vision" },{ name: "LangChain", icon: "⛓️", description: "LLM Applications" },{ name: "Pinecone", icon: "🌲", description: "Vector Database" },{ name: "Weaviate", icon: "🔍", description: "Vector Search" },{ name: "MLflow", icon: "📊", description: "ML Lifecycle" },{ name: "Kubeflow", icon: "☸️", description: "ML Pipelines" },{ name: "Ray", icon: "⚡", description: "Distributed ML" },{ name: "Docker", icon: "🐳", description: "Containerization" }
          ].map((tech, index) => (<div;
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200";
            >;
              <div className="text-2xl mb-2">{tech.icon}</div>;
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>;
              <p className="text-xs text-gray-600">{tech.description}</p>;
            </div>;
          ))}
        </div>;
      </section>;
      {/* AI Process */}
      <section className="py-12">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Our AI Development Process;
          </h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            We follow a proven methodology to ensure your AI solutions are;
            robust, scalable, and deliver real business value.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {[;
            {step: "01",title: "Discovery & Strategy",description:;
                "We analyze your business needs and create a comprehensive AI strategy with clear objectives and success metrics.";
            },{step: "02",title: "Data Preparation",description:;
                "We assess your data quality, prepare datasets, and implement data pipelines for optimal AI model training.";
            },{step: "03",title: "Model Development",description:;
                "We develop, train, and validate AI models using state-of-the-art techniques and frameworks.";
            },{step: "04",title: "Deployment & Monitoring",description:;
                "We deploy your AI solution to production and implement monitoring systems for continuous optimization.";
            }
          ].map((phase, index) => (<div key={index} className="text-center">;
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">;
                {phase.step}
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;
                {phase.title}
              </h3>;
              <p className="text-gray-600">{phase.description}</p>;
            </div>;
          ))}
        </div>;
      </section>;
      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            AI Services Pricing;
          </h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            Flexible pricing options for AI services. Choose the plan that fits;
            your project needs and budget.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
          <PricingTier;
            name="Discovery";
            price="$5,000";
            period="project";
            description="AI strategy and proof of concept";
            features={[;
              "Business analysis","AI strategy development","Proof of concept","Technology selection","Project roadmap";
            ]}
            cta="Get Started";
          />;
          <PricingTier;
            name="Development";
            price="$25,000";
            period="project";
            description="Most popular for AI implementation";
            features={[;
              "Custom AI model development","Data preparation","Model training & validation","Integration & deployment","3 months support";
            ]}
            popular={true}
            cta="Get Started";
          />;
          <PricingTier;
            name="Enterprise";
            price="$100,000";
            period="project";
            description="Complete AI transformation";
            features={[;
              "Custom AI platform","Advanced ML pipelines","Scalable infrastructure","Dedicated AI team","12 months support";
            ]}
            cta="Contact Sales";
          />;
        </div>;
      </section>;
      {/* Success Stories */}
      <section className="py-12">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Success Stories;
          </h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            See how we've helped businesses transform their operations with AI;
            solutions.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {[;
            {company: "E-commerce Platform",industry: "Retail",result: "40% increase in conversion",description:;
                "Implemented AI-powered recommendation engine that increased conversion rates by 40% and average order value by 25%.";
            },{company: "Financial Services",industry: "Finance",result: "95% fraud detection accuracy",description:;
                "Deployed AI fraud detection system that achieved 95% accuracy in identifying fraudulent transactions, reducing losses by $2M annually.";
            },{company: "Healthcare Provider",industry: "Healthcare",result: "30% faster diagnosis",description:;
                "Developed AI diagnostic assistant that reduced diagnosis time by 30% and improved accuracy by 15% for radiology assessments.";
            }
          ].map((story, index) => (<div;
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200";
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a;
              href="tel:+13024640950";
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
            >;
              Get AI Consultation;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors";
            >;
              Discuss Your AI Project;
            </a>;
          </div>;
        </div>;
        {/* Core AI Services */}
        <div className="mb-16">;
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">;
            Core AI Services;
          </h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="text-center p-6 bg-white rounded-lg shadow-md">;
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🧠</span>;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom LLM Development</h3>;
              <p className="text-gray-600">Build and deploy custom large language models tailored to your specific use cases</p>;
            </div>;
            <div className="text-center p-6 bg-white rounded-lg shadow-md">;
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🔍</span>;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">RAG Systems</h3>;
              <p className="text-gray-600">Retrieval-Augmented Generation systems for intelligent document processing</p>;
            </div>;
            <div className="text-center p-6 bg-white rounded-lg shadow-md">;
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🤖</span>;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Agents</h3>;
              <p className="text-gray-600">Intelligent autonomous agents for task automation and decision making</p>;
            </div>;
            <div className="text-center p-6 bg-white rounded-lg shadow-md">;
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">👁️</span>;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision</h3>;
              <p className="text-gray-600">Image recognition, object detection, and visual analysis solutions</p>;
            </div>;
            <div className="text-center p-6 bg-white rounded-lg shadow-md">;
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">⚙️</span>;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MLOps</h3>;
              <p className="text-gray-600">Machine learning operations for model deployment and monitoring</p>;
            </div>;
            <div className="text-center p-6 bg-white rounded-lg shadow-md">;
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">💬</span>;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-4">NLP Solutions</h3>;
              <p className="text-gray-600">Natural language processing for text analysis and understanding</p>;
            </div>;
          </div>;
        </div>;
        {/* Benefits */}
        <div className="mb-16">;
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">;
            Why Choose Our AI Services?;
          </h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🎯</span>;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>;
              <p className="text-gray-600">Tailored AI solutions that fit your specific business needs</p>;
            </div>;
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">⚡</span>;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h3>;
              <p className="text-gray-600">Rapid deployment with proven methodologies and best practices</p>;
            </div>;
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">🔒</span>;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>;
              <p className="text-gray-600">Bank-level security and compliance for all AI implementations</p>;
            </div>;
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">📞</span>;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>;
              <p className="text-gray-600">Round-the-clock support and maintenance for all AI systems</p>;
            </div>;
          </div>;
        </div>;
        {/* CTA Section */}
        <div className="text-center py-16 bg-blue-50 rounded-lg">;
          <h2 className="text-3xl font-bold text-gray-900 mb-6">;
            Ready to Transform Your Business with AI?;
          </h2>;
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">;
            Let's discuss your AI requirements and create a custom solution that drives real business value.;
          </p>;
          <a;
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry";
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
          >;
            Get Started Today;
          </a>;
        </div>;
      </section>;
    </div>;
  )}
ursor/automate-test-improve-and-merge-code-646c;
function AIServiceCard() {return (<Link;
      href={href}
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200";
    >;
      <div className="text-4xl mb-4">{icon}</div>;
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">;
        {title}
      </h3>;
      <p className="text-gray-600 mb-4">{description}</p>;
      <ul className="space-y-2 mb-4">;
        {features.map((feature, index) => (<li key={index} className="flex items-center text-sm text-gray-600">;
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>;
            {feature}
          </li>;
        ))}
      </ul>;
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>;
    </Link>;
  )}function IndustryCard() {return (<div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">;
      <div className="text-3xl mb-4">{icon}</div>;
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>;
      <p className="text-gray-600 mb-3 text-sm">{description}</p>;
      <ul className="space-y-1 mb-3">;
        {features.map((feature, index) => (<li key={index} className="text-xs text-gray-600 flex items-center">;
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>;
            {feature}
          </li>;
        ))}
      </ul>;
      <div className="text-sm font-semibold text-blue-600">{pricing}</div>;
    </div>;
  )}function ProcessStep() {return (<div className="text-center">;
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">;
        {step}
      </div>;
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>;
      <p className="text-gray-600 mb-3">{description}</p>;
      <ul className="space-y-1">;
        {features.map((feature, index) => (<li key={index} className="text-sm text-gray-600 flex items-center justify-center">;
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>;
            {feature}
          </li>;
        ))}
      </ul>;
    </div>;
  )}function TechCard() {return (<div className="text-center p-4 bg-white rounded-lg border border-gray-200">;
      <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>;
      <p className="text-sm text-gray-600">{description}</p>;
    </div>;
  )}function MetricCard() {return (<div className="text-center">;
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>;
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>;
      <div className="text-sm text-gray-600">{description}</div>;
    </div>;
  )}
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From custom LLM development to AI automation, we deliver enterprise-grade AI services.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive AI solutions tailored to your business needs, 
              from strategy to implementation and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom LLM Development</h3>
              <p className="text-gray-600 mb-4">
                Build custom large language models tailored to your specific use case and data requirements.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fine-tuning existing models</li>
                <li>• Custom model architecture</li>
                <li>• Domain-specific training</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RAG Systems</h3>
              <p className="text-gray-600 mb-4">
                Implement Retrieval-Augmented Generation systems for accurate, context-aware AI responses.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Vector database integration</li>
                <li>• Document processing</li>
                <li>• Context-aware responses</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Agents</h3>
              <p className="text-gray-600 mb-4">
                Deploy intelligent AI agents that can perform complex tasks and interact with your systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Task automation</li>
                <li>• System integration</li>
                <li>• Continuous learning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                Implement computer vision solutions for image recognition, object detection, and visual analysis.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Image classification</li>
                <li>• Object detection</li>
                <li>• Visual analytics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MLOps Solutions</h3>
              <p className="text-gray-600 mb-4">
                Streamline your machine learning operations with automated pipelines and monitoring.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Model deployment</li>
                <li>• Performance monitoring</li>
                <li>• Automated retraining</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic AI consulting to help you identify opportunities and plan your AI transformation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• AI strategy development</li>
                <li>• Technology assessment</li>
                <li>• Implementation planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can help you achieve your business goals. 
            Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}