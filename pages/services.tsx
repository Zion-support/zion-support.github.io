import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
  }, []);

  const { trackClick } = useAnalytics();

  const serviceDetails = {
    'ai-ml': {
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'Automated Decision Making'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'HuggingFace', 'Scikit-learn', 'Pandas'],
      benefits: [
        'Automate repetitive tasks and processes',
        'Gain insights from large datasets',
        'Improve customer experience with intelligent interactions',
        'Reduce operational costs through automation',
        'Make data-driven decisions with predictive analytics'
      ]
    },
    'cloud': {
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and reliable cloud infrastructure tailored to your business needs.',
      features: [
        'Cloud Migration & Strategy',
        'Infrastructure as Code (IaC)',
        'Serverless Computing',
        'Containerization (Docker, Kubernetes)',
        'Cloud Security & Compliance',
        'Managed Cloud Services'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      benefits: [
        'Increase scalability and flexibility',
        'Enhance data security and compliance',
        'Reduce infrastructure costs',
        'Improve disaster recovery and business continuity',
        'Accelerate innovation and deployment'
      ]
    },
    'digital-transformation': {
      title: 'Digital Transformation',
      description: 'Modernize your operations and enhance customer experiences with comprehensive digital transformation strategies.',
      features: [
        'Process Automation & Optimization',
        'Legacy System Modernization',
        'Customer Experience (CX) Design',
        'Enterprise Resource Planning (ERP)',
        'Supply Chain Digitalization',
        'Data-Driven Strategy'
      ],
      technologies: ['Salesforce', 'SAP', 'Custom CRM', 'Power BI', 'Tableau'],
      benefits: [
        'Streamline business processes for efficiency',
        'Improve customer engagement and satisfaction',
        'Gain a competitive edge through innovation',
        'Foster a culture of digital readiness',
        'Unlock new revenue streams and business models'
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity Services',
      description: 'Protect your digital assets with robust cybersecurity strategies and advanced threat detection.',
      features: [
        'Vulnerability Assessments & Penetration Testing',
        'Security Information and Event Management (SIEM)',
        'Incident Response & Forensics',
        'Data Encryption & Privacy',
        'Cloud Security Posture Management (CSPM)',
        'Employee Security Training'
      ],
      technologies: ['Splunk', 'Fortinet', 'Palo Alto Networks', 'CrowdStrike', 'Tenable'],
      benefits: [
        'Minimize risk of data breaches and cyber attacks',
        'Ensure compliance with industry regulations',
        'Protect sensitive customer and business data',
        'Maintain business continuity during security incidents',
        'Build trust with customers and stakeholders'
      ]
    },
    'data-analytics': {
      title: 'Data Analytics & BI',
      description: 'Leverage your data to gain actionable insights and make informed business decisions.',
      features: [
        'Data Warehousing & Lake Solutions',
        'Business Intelligence Dashboards',
        'Predictive Modeling',
        'Data Visualization',
        'ETL Development',
        'Big Data Processing'
      ],
      technologies: ['Apache Spark', 'Hadoop', 'Tableau', 'Power BI', 'SQL', 'Python (Pandas, NumPy)'],
      benefits: [
        'Uncover hidden trends and patterns',
        'Optimize operational efficiency',
        'Personalize customer experiences',
        'Forecast future outcomes with higher accuracy',
        'Support strategic planning and growth initiatives'
      ]
    },
    'custom-software': {
      title: 'Custom Software Development',
      description: 'Build bespoke software solutions tailored to your unique business requirements and challenges.',
      features: [
        'Web Application Development',
        'Mobile App Development (iOS/Android)',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'UI/UX Design & Prototyping',
        'Quality Assurance & Testing'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', 'Swift', 'Kotlin'],
      benefits: [
        'Address specific business needs not met by off-the-shelf solutions',
        'Improve operational workflows and productivity',
        'Enhance user experience and engagement',
        'Achieve greater flexibility and scalability',
        'Gain a competitive advantage with unique functionalities'
      ]
    }
  };

  const [activeService, setActiveService] = useState('ai-ml');

  const handleServiceClick = (serviceKey: string) => {
    setActiveService(serviceKey);
    trackClick(`service-tab-${serviceKey}`, 'navigation');
  };

  const currentService = serviceDetails[activeService];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading services...</p>
      </div>
    );
  }

  return (
    <>
      <SEO />
      <Head>
        <title>Our Services - Zion App</title>
        <meta name="description" content="Explore Zion App's comprehensive technology services including AI, Cloud, and Digital Transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering cutting-edge solutions in AI, Cloud, Digital Transformation, and more.
            </p>
          </header>

          <main>
            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(serviceDetails).map((key) => (
                <button
                  key={key}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    activeService === key
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'
                  }`}
                  onClick={() => handleServiceClick(key)}
                >
                  {serviceDetails[key].title}
                </button>
              ))}
            </div>

            {/* Service Details */}
            {currentService && (
              <section className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentService.title}</h2>
                <p className="text-lg text-gray-700 mb-8">{currentService.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {currentService.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies We Use</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {currentService.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits for Your Business</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {currentService.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="mt-16 text-center">
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl mb-6">Contact us today to discuss your project and get a tailored solution.</p>
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get a Free Consultation
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}