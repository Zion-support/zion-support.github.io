import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesIndex: NextPage = () => {
  const microSaasServices = [
    {
      name: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with predictive analytics and automated reporting",
      features: ["Custom dashboards", "Predictive modeling", "Automated alerts", "Multi-platform integration"],
      pricing: "Starting at $299/month",
      link: "/services/ai-analytics-dashboard"
    },
    {
      name: "Smart Document Processor",
      description: "Automated document processing with OCR, classification, and data extraction",
      features: ["OCR technology", "Document classification", "Data extraction", "API integration"],
      pricing: "Starting at $199/month",
      link: "/services/smart-document-processor"
    },
    {
      name: "Customer Experience Optimizer",
      description: "AI-driven customer journey mapping and optimization platform",
      features: ["Journey mapping", "Sentiment analysis", "A/B testing", "ROI tracking"],
      pricing: "Starting at $399/month",
      link: "/services/customer-experience-optimizer"
    },
    {
      name: "Automated Social Media Manager",
      description: "AI-powered social media scheduling, content creation, and engagement tracking",
      features: ["Content generation", "Optimal timing", "Engagement tracking", "Multi-platform support"],
      pricing: "Starting at $149/month",
      link: "/services/automated-social-media-manager"
    },
    {
      name: "Intelligent Inventory Manager",
      description: "Smart inventory optimization with demand forecasting and automated reordering",
      features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Multi-location support"],
      pricing: "Starting at $249/month",
      link: "/services/intelligent-inventory-manager"
    }
  ];

  const itServices = [
    {
      name: "Cloud Migration & Architecture",
      description: "Complete cloud transformation with AWS, Azure, and Google Cloud expertise",
      features: ["Multi-cloud strategy", "Security implementation", "Cost optimization", "24/7 monitoring"],
      pricing: "Starting at $5,000/project",
      link: "/services/cloud-migration"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing protection",
      features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
      pricing: "Starting at $3,000/month",
      link: "/services/cybersecurity-solutions"
    },
    {
      name: "DevOps & CI/CD Implementation",
      description: "Automated deployment pipelines and infrastructure as code solutions",
      features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring setup", "Performance optimization"],
      pricing: "Starting at $4,000/month",
      link: "/services/devops-implementation"
    },
    {
      name: "Database Design & Optimization",
      description: "High-performance database architecture and optimization services",
      features: ["Database design", "Performance tuning", "Backup strategies", "Scalability planning"],
      pricing: "Starting at $2,500/project",
      link: "/services/database-optimization"
    },
    {
      name: "API Development & Integration",
      description: "Custom API development and third-party system integration",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Documentation"],
      pricing: "Starting at $3,500/project",
      link: "/services/api-development"
    }
  ];

  const aiServices = [
    {
      name: "Custom AI Model Development",
      description: "Tailored machine learning models for your specific business needs",
      features: ["Custom model training", "Data preprocessing", "Model deployment", "Performance monitoring"],
      pricing: "Starting at $8,000/project",
      link: "/services/custom-ai-models"
    },
    {
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and content generation",
      features: ["Text analysis", "Chatbot development", "Content generation", "Sentiment analysis"],
      pricing: "Starting at $4,500/project",
      link: "/services/nlp-solutions"
    },
    {
      name: "Computer Vision Solutions",
      description: "Image and video analysis with object detection and recognition capabilities",
      features: ["Object detection", "Image classification", "Video analysis", "Real-time processing"],
      pricing: "Starting at $6,000/project",
      link: "/services/computer-vision"
    },
    {
      name: "Predictive Analytics Platform",
      description: "Advanced forecasting and predictive modeling for business intelligence",
      features: ["Time series forecasting", "Risk assessment", "Trend analysis", "Automated insights"],
      pricing: "Starting at $5,500/month",
      link: "/services/predictive-analytics"
    },
    {
      name: "AI-Powered Automation",
      description: "Intelligent process automation to streamline business operations",
      features: ["Process mapping", "Workflow automation", "Decision trees", "Integration capabilities"],
      pricing: "Starting at $3,000/month",
      link: "/services/ai-automation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services - Zion Tech Group | Technology Solutions & AI Services</title>
        <meta name="description" content="Comprehensive technology services including micro SAAS solutions, IT services, and AI development. Expert solutions for modern businesses." />
        <meta name="keywords" content="technology services, micro SAAS, AI development, cloud solutions, cybersecurity, software development" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth. 
            From innovative micro SAAS platforms to enterprise AI solutions.
          </p>
        </div>

        {/* Micro SAAS Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
            Micro SAAS Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
            IT Services & Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
            AI & Machine Learning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how our technology solutions can accelerate your growth</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesIndex;