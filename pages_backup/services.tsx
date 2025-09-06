<<<<<<< HEAD:pages/services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Layout from '../components/layout/Layout';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services and solutions" />
      </Head>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-center text-gray-600">Comprehensive technology solutions for your business needs.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
=======
=======
import Head from 'next/head';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services.tsx
export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business requirements.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
      icon: "💻"
    },
    {
      title: "AI & Machine Learning",
      description: "Advanced AI solutions that automate processes, enhance decision-making, and drive innovation.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & Virtual Assistants"],
      icon: "🤖"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps & CI/CD", "Monitoring & Optimization"],
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your data and systems from modern threats.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      icon: "🔒"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Data Warehousing"],
      icon: "📊"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions and optimize your IT investments.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Vendor Management"],
      icon: "💡"
    }
  ];

  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including custom software development, AI solutions, cloud services, cybersecurity, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
=======
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered IT services and solutions" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive AI-powered solutions for your business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-emerald-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}







origin/main
origin/automation-improvements-final

import React from 'react';
import Link from 'next/link';
import React from 'react';

import Link from 'next/link';
import Link from 'next / link';
;
type Service = {
type Service = {;
  name: string;
  summary: string;
  pricing: string;
  link: string;
}
];
const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation'
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Predictive Analytics & Forecasting'
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'GenAI Content & SEO Automation'
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Computer Vision & Image Analysis'
    summary: 'Object detection, facial recognition, quality control, and medical imaging analysis.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Natural Language Processing Suite'
    summary: 'Sentiment analysis, entity extraction, text classification, and language translation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Fraud Detection'
    summary: 'Real-time fraud scoring, anomaly detection, and risk assessment for financial transactions.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Recommendation Engine Platform'
    summary: 'Personalized product recommendations, content suggestions, and user behavior analysis.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Voice AI & Speech Processing'
    summary: 'Speech-to-text, text-to-speech, voice commands, and conversational AI interfaces.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI Data Pipeline Automation'
    summary: 'Automated data cleaning, feature engineering, model training, and deployment pipelines.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Document Analysis'
    summary: 'Contract analysis, legal document review, compliance checking, and knowledge extraction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Supply Chain Optimization'
    summary: 'Demand forecasting, route optimization, inventory management, and supplier risk assessment.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Conversational AI Platform'
    summary: 'Multi-channel chatbots, voice assistants, and intelligent virtual agents.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI Model Monitoring & MLOps'
    summary: 'Model performance tracking, drift detection, automated retraining, and deployment management.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Process Automation'
    summary: 'RPA with AI, workflow automation, document processing, and business process optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Market Research'
    summary: 'Competitive intelligence, trend analysis, consumer sentiment, and market forecasting.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Edge AI & IoT Intelligence'
    summary: 'Real-time inference on edge devices, IoT data processing, and distributed AI systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Cybersecurity Threat Detection'
    summary: 'Advanced threat hunting, behavioral analysis, and automated incident response.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Process Mining & Optimization'
    summary: 'Business process discovery, bottleneck identification, and workflow optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Content Moderation Platform'
    summary: 'Automated content filtering, toxicity detection, and community management.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Manufacturing Quality Control'
    summary: 'Computer vision for defect detection, predictive maintenance, and quality optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Healthcare Diagnostics'
    summary: 'Medical image analysis, symptom prediction, and treatment recommendation systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Document Intelligence Platform'
    summary: 'Advanced document understanding, information extraction, and knowledge graph creation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Risk Assessment Engine'
    summary: 'Credit scoring, insurance underwriting, and financial risk modeling.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Energy Grid Optimization'
    summary: 'Demand forecasting, load balancing, and renewable energy integration.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Personalization Engine'
    summary: 'Real-time user profiling, content recommendation, and experience optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Automation Orchestration'
    summary: 'RPA with AI decision-making, workflow automation, and process intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Environmental Monitoring'
    summary: 'Climate data analysis, pollution detection, and environmental impact assessment.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Transportation Optimization'
    summary: 'Route optimization, traffic prediction, and fleet management intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Agricultural Intelligence'
    summary: 'Crop monitoring, yield prediction, and precision farming optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Customer Journey Analytics'
    summary: 'Behavioral analysis, journey mapping, and conversion optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Real Estate Valuation'
    summary: 'Property assessment, market analysis, and investment opportunity identification.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Retail Analytics Platform'
    summary: 'Customer behavior analysis, inventory optimization, and sales forecasting.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Educational Assessment'
    summary: 'Learning analytics, personalized education, and performance prediction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Financial Trading Algorithms'
    summary: 'Algorithmic trading, market prediction, and portfolio optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Smart City Solutions'
    summary: 'Urban planning optimization, traffic management, and resource allocation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Quantum Computing Solutions'
    summary: 'Quantum algorithms for optimization, cryptography, and complex problem solving.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Neural Network Architectures'
    summary: 'Custom deep learning models, transformer networks, and specialized AI architectures.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Drug Discovery Platform'
    summary: 'Molecular analysis, drug interaction prediction, and pharmaceutical research automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Autonomous Systems'
    summary: 'Self-driving algorithms, robotic process automation, and autonomous decision making.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Financial Trading Algorithms'
    summary: 'Algorithmic trading, market prediction, and automated portfolio management.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Natural Language Generation'
    summary: 'GPT-style content creation, automated reporting, and intelligent document generation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Scientific Research Assistant'
    summary: 'Literature analysis, hypothesis generation, and research automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Multi-Modal AI Systems'
    summary: 'Vision-language models, audio-visual processing, and cross-modal understanding.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Space Technology Solutions'
    summary: 'Satellite data analysis, space mission optimization, and astronomical research.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Reinforcement Learning Systems'
    summary: 'Game AI, optimization algorithms, and adaptive learning systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Metaverse Development'
    summary: 'Virtual world creation, avatar intelligence, and immersive experience optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Blockchain Analytics'
    summary: 'Cryptocurrency analysis, smart contract optimization, and DeFi intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Climate Change Solutions'
    summary: 'Climate modeling, carbon footprint optimization, and environmental impact prediction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Computer Vision for Robotics'
    summary: 'Robot vision systems, object manipulation, and autonomous navigation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Mental Health Analytics'
    summary: 'Emotional analysis, mental health prediction, and therapeutic intervention systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Energy Storage Optimization'
    summary: 'Battery management, grid storage optimization, and renewable energy integration.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Smart City Infrastructure'
    summary: 'Urban planning optimization, traffic management, and city service automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced AI Ethics & Bias Detection'
    summary: 'Algorithmic fairness, bias detection, and ethical AI implementation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Cybersecurity Intelligence'
    summary: 'Advanced threat detection, zero-day vulnerability analysis, and security automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Digital Twin Technology'
    summary: 'Virtual replicas, predictive maintenance, and real-time system optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Augmented Reality Solutions'
    summary: 'AR object recognition, spatial computing, and immersive experience creation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced AI Model Compression'
    summary: 'Model optimization, edge deployment, and efficient AI inference.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Supply Chain Intelligence'
    summary: 'End-to-end visibility, disruption prediction, and optimization across global networks.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI Model Governance'
    summary: 'Model lifecycle management, compliance monitoring, and AI governance frameworks.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Personalized Medicine'
    summary: 'Genomic analysis, treatment optimization, and precision healthcare delivery.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced AI-Powered Education Systems'
    summary: 'Personalized learning, adaptive assessment, and intelligent tutoring systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Smart Manufacturing 4.0'
    summary: 'Industrial IoT intelligence, predictive maintenance, and autonomous production.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Legal Tech'
    summary: 'Contract analysis, legal research automation, and case outcome prediction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Materials Discovery'
    summary: 'Material property prediction, composition optimization, and novel material design.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Sports Analytics'
    summary: 'Performance optimization, injury prediction, and strategic decision support.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Robotics'
    summary: 'Humanoid robots, collaborative automation, and intelligent robotic systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Gaming Systems'
    summary: 'Procedural content generation, intelligent NPCs, and adaptive gameplay.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Biometrics'
    summary: 'Multi-modal authentication, behavioral analysis, and identity verification.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Logistics'
    summary: 'Route optimization, warehouse automation, and last-mile delivery intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Simulation Systems'
    summary: 'Physics simulation, virtual testing, and scenario modeling.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Content Creation'
    summary: 'Multi-modal content generation, creative AI, and automated media production.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Data Science'
    summary: 'Automated feature engineering, model selection, and advanced analytics.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Customer Intelligence'
    summary: 'Advanced customer profiling, behavior prediction, and relationship optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Process Mining'
    summary: 'Business process discovery, optimization, and intelligent automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Decision Support'
    summary: 'Strategic decision making, scenario analysis, and intelligent recommendations.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Predictive Analytics'
    summary: 'Multi-variate forecasting, anomaly detection, and predictive insights.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Knowledge Management'
    summary: 'Automated knowledge extraction, semantic search, and intelligent information retrieval.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Optimization'
    summary: 'Multi-objective optimization, constraint solving, and intelligent resource allocation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Innovation Systems'
    summary: 'Idea generation, innovation management, and creative problem solving.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Human-Computer Interaction'
    summary: 'Natural language interfaces, gesture recognition, and intelligent user experience.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Quality Assurance'
    summary: 'Automated testing, defect prediction, and quality optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Security Systems'
    summary: 'Threat intelligence, security automation, and intelligent incident response.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Performance Optimization'
    summary: 'System optimization, resource management, and intelligent scaling.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Integration Systems'
    summary: 'API intelligence, data integration, and intelligent system connectivity.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Monitoring Systems'
    summary: 'Real-time monitoring, anomaly detection, and intelligent alerting.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Analytics Platform'
    summary: 'Multi-dimensional analysis, pattern recognition, and intelligent insights.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Automation Suite'
    summary: 'End-to-end automation, intelligent workflows, and process optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Intelligence Platform'
    summary: 'Comprehensive AI solutions, intelligent decision making, and strategic insights.'
    link: 'https://ziontechgroup.com/ai-services'}
];
export default function Services(): React.JSX.Element {

export default function Services(): React.JSX.Element {;
  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24
        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>;
        <divstyle={{ 
          width: 4, height: 32, background: color, borderRadius: 2 
        }}></div>;
        <h2style={{ 
          fontSize: 28, fontWeight: 800, margin: 0,
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>{title}</h2>;
        <divstyle={{ 
          background: `${color}20`, color: color, padding: '4px 12px', 
          borderRadius: 20, fontSize: 14, fontWeight: 600 
        }}>;
          {items && items.length} Services;
        </div>;
      </div>;
      <divstyle={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: 20 
      }}>;
        {items && items.map((s) => (;
          <akey={s && s.name} href={s && s.link} style={{
            border: '1px solid rgba(0,0,0,0 && 0.08)', borderRadius: 16, padding: 24,
            background: 'white', textDecoration: 'none', color: '#0b1220',
            transition: 'all 0 && 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0 && 0.04)',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0 && 0.12)',
              borderColor: `${color}40`
            }
              borderRadius: 8, display: 'inline-block'
            }}>{s && s.pricing}</div>;
          </a>;
        ))}
      </div>;
    </section>;
  );
  return (
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,

export default function Services() {
            </div>
          </div>
        </div>
      </section>
      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      {/* CTA Section */}
      <section style={{ 
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px',
        textAlign: 'center', background: 'white', marginTop: 40,
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{ 
          fontSize: 32, fontWeight: 700, marginBottom: 16,
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{ 
          fontSize: 18, color: '#64748b', marginBottom: 32,
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover 
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block', 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block', 
            background: 'rgba(34, 197, 94, 0.1)', 
            color: '#22c55e', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
  );
}
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
export default function Services() {;
  const [isLoaded, setIsLoaded] = useState(false);

  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',
  };

            </div>;
          </div>;
        </section>;

              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Our Services;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">;
                Comprehensive technology solutions designed to transform your business and drive growth.;
              </p>;
              <div className="flex flex-wrap justify-center gap-4">;
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Get Started;
                </button>;
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                  View Pricing;
                </button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;

          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                What We Offer;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">;
                  <div className="flex items-center mb-4">;
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">;
                      <service && service.icon className="h-8 w-8 text-blue-600" />;
                    </div>;
                    <h3 className="text-xl font-semibold text-gray-900">;
                      {service && service.title}
                    </h3>;
                  </div>;
                  <p className="text-gray-600 mb-4">;
                    {service && service.description}
                  </p>;
                  <ul className="space-y-2 mb-6">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <div className="text-blue-600 font-semibold mb-4">;
                    {service && service.pricing}
                  </div>;
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">;
                    Learn More;
                  </button>;
                </motion && motion.div>;
              ))}
            </div>
          </div>
        </div>
      </section>

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
  }
import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect  } from 'react';
import { ContactInfo  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = null;
                  return (
                    <div 
                      key={category.title}
                      className={`p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-${category.color}-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
        </section>
              transition={{ duration: 0.8 }}
              className="text - center mb - 16";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                What We Offer;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {services.map ((service, index) => (
                <motion.div;

                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg - white p - 8 rounded - lg shadow - lg hover:shadow - xl transition - shadow border border - gray - 200";
                >;
                  <div className="flex items - center mb - 4">;
                    <div className="p - 3 bg - blue - 100 rounded - lg mr - 4">;
                      <service.icon className="h - 8 w - 8 text - blue - 600" />;
                    </div>;
                    <h3 className="text - xl font - semibold text - gray - 900">;
                      {service.title}
                    </h3>;
                  </div>;
                  <p className="text - gray - 600 mb - 4">;
                    {service.description}
                  </p>;
                  <ul className="space - y-2 mb - 6">;
                    {service.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - sm text - gray - 600">;
                        <CheckCircle className="h - 4 w - 4 text - green - 500 mr - 2" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <div className="text - blue - 600 font - semibold mb - 4">;
                    {service.pricing}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center p-6">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <benefit && benefit.icon className="h-8 w-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                    {benefit && benefit.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {benefit && benefit.description}
                  </p>;
                </motion && motion.div>;
              ))}
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
      services: [
        'AI-Powered Video Clip Maker',
        'Smart Contract Analyzer',
        'Cybersecurity Threat Intelligence',
        'Multi-Language Website Translator',
        'Predictive Inventory Optimizer',
        'Real-Time Analytics Dashboard',
        'Automated Customer Support',
        'Blockchain Transaction Monitor',
      ],
      href: '/micro-saas',
    },
    {
      title: 'AI Services',
      description:
        'Advanced artificial intelligence solutions for enterprise needs',
      count: '100+',
      color: 'purple',
      services: [
        'Autonomous AI Agents',
        'AI-Powered Financial Trading',
        'AI Legal Document Analysis',
        'AI-Powered Voice Analytics',
        'AI-Powered Search & Discovery',
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions',
      ],
      href: '/ai-services',
    },
    {
      id: 'it-services',
      name: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      services: [
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High-Performance Computing',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Disaster Recovery Solutions',
      ],
      href: '/it-services',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
      
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        ring: 'focus:ring-blue-500',
      },
      purple: {
        bg: 'bg-purple-600',
        hover: 'hover:bg-purple-700',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
ring: 'focus:ring-purple-500',
      },
      green: {
origin/cursor/automate-test-improve-and-merge-code-2533
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-400',
        border: 'border-green-500/40',
ring: 'focus:ring-green-500',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
<meta
origin/cursor/automate-test-improve-and-merge-code-2533
          name='description'
          content='Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business.'
        />;
        <meta
          name='keywords'
          content='micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity'
        />;
        <meta name='viewport' content='width=device-width, initial-scale=1 && 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact && contact.site}/services`} />;
      </Head>;

      <ErrorBoundary level='page'>;
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>;
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>;
            <div className='max-w-4xl mx-auto'>;
              <h1
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p
              >
                350+ Innovative Solutions for Modern Businesses
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                From cutting-edge AI services to comprehensive IT solutions and
                specialized micro SaaS products, we provide everything your
                business needs to thrive in the digital age.
              </p>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400">
                Scalable and secure cloud infrastructure, migration, and management services.
              </p>
            </div>




          </section>
          {/* Service Categories */}
<section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid lg:grid-cols-3 gap-8'>
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);
<<<<<<< HEAD:pages/services.tsx
<<<<<<< HEAD


                    >
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors.text}`}>
        <meta name="description" content="Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services`} />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
<<<<<<< HEAD
=======
          </section>

          {/* Service Categories */}
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);
                  return (
                    <div 
                      key={category.title}
                      className={`p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-${category.color}-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className={`text-2xl font-bold ${colors.text}`}>

                  </div>;
                  <button className="w - full bg - blue - 600 text - white px - 4 py - 2 rounded - lg hover:bg - blue - 700 transition - colors">;
                    Learn More;
                  </button>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        <section className="py - 20 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 16";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Why Choose Us?;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                We deliver exceptional results through our proven expertise and commitment to excellence.;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {benefits.map ((benefit, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text - center p - 6";
                >;
                  <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <benefit.icon className="h - 8 w - 8 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - gray - 900 mb - 2">;
                    {benefit.title}
                  </h3>;
                  <p className="text - gray - 600">;
                    {benefit.description}
                  </p>;
                </motion.div>))}
import Head from 'next / head';
import Link from 'next / link';
import Header from '../components / Header';
import Footer from '../components / Footer';
;
export default /**
 * Services - Function description
 */
function Services() {
  const service_categories = [;
    {
      title: 'Micro SaaS Products',
      description:;
        'Innovative, focused software solutions for modern businesses',
      count: '150+',
      color: 'blue',
      services: [;
        'AI - Powered Video Clip Maker',
        'Smart Contract Analyzer',
        'Cybersecurity Threat Intelligence',
        'Multi - Language Website Translator',
        'Predictive Inventory Optimizer',
        'Real - Time Analytics Dashboard',
        'Automated Customer Support',
        'Blockchain Transaction Monitor',
      ],
      href: '/micro - saas',
    },
    {
      title: 'AI Services',
      description:;
        'Advanced artificial intelligence solutions for enterprise needs',
      count: '100+',
      color: 'purple',
      services: [;
        'Autonomous AI Agents',
        'AI - Powered Financial Trading',
        'AI Legal Document Analysis',
        'AI - Powered Voice Analytics',
        'AI - Powered Search & Discovery',
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions',
      ],
      href: '/ai - services',
    },
    {
      id: 'it - services',
      name: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise - grade operations',
      services: [;
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High - Performance Computing',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Disaster Recovery Solutions',
      ],
      href: '/it - services',
    },  ];
;
  const getColorClasses = (color: string) =>: any {
    const colors = {
      blue: {
        bg: 'bg - blue - 600',
        hover: 'hover:bg - blue - 700',
        text: 'text - blue - 400',
        border: 'border - blue - 500 / 40',
        ring: 'focus:ring - blue - 500',
      },
      purple: {        bg: 'bg - purple - 600',
        hover: 'hover:bg - purple - 700',
        text: 'text - purple - 400',
        border: 'border - purple - 500 / 40',
        ring: 'focus:ring - purple - 500',
      },      green: {
        bg: 'bg - green - 600',
        hover: 'hover:bg - green - 700',
        text: 'text - green - 400',
        border: 'border - green - 500 / 40',
        ring: 'focus:ring - green - 500',
      },
    }
    return colors[color as keyof typeof colors] || colors.blue;  }
;
  return (
    <>;
      <Head>;
        <title > Our Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business.';
        />;
        <meta;
          name='keywords';
          content='micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity';
        />;
        <meta name='viewport' content='width = device - width, initial - scale = 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact.site}/services`} />;
      </Head>;
      <ErrorBoundary level='page'>;
        <main className='min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
          {/* Hero Section */}
          <section className='py - 20 px - 4 text - center' role='banner'>;
            <div className='max - w-4xl mx - auto'>;
              <h1;
                className={`text - 5xl md:text - 6xl font - extrabold tracking - tight mb - 6 transition - all duration - 1000 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                Our Services;
              </h1>;
              <p;
                className={`text - xl md:text - 2xl text - slate - 300 mb - 8 transition - all duration - 1000 delay - 200 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                350+ Innovative Solutions for Modern Businesses;
              </p>;
              <p;
                className={`text - lg text - slate - 400 mb - 12 max - w-3xl mx - auto transition - all duration - 1000 delay - 400 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                From cutting - edge AI services to comprehensive IT solutions and;
                specialized micro SaaS products, we provide everything your;
                business needs to thrive in the digital age.              </p>;
            </div>;
          </section>;
          {/* Service Categories */}
          <section className='py - 16 px - 4' role='main'>;
            <div className='max - w-7xl mx - auto'>;
              <div className='grid lg:grid - cols - 3 gap - 8'>;
                {service_categories.map ((category, index) => {
                  const colors = getColorClasses (category.color);
;
                    >;
                      <div className='flex items - center justify - between mb - 6'>                        <h3 className={`text - 2xl font - bold ${colors.text}`}>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services.tsx
                    >
                      <div className='flex items-center justify-between mb-6'>
                        <h3 className={`text-2xl font-bold ${colors.text}`}>
origin/cursor/automate-test-improve-and-merge-code-2533
                          {category.title}
                        </h3>;
                        <span className={`text - 3xl font - bold ${colors.text}`}>;
                          {category.count}
                        </span>
                      </div>
<p className='text-slate-300 mb-6'>
                        {category.description}
                      </p>
                      <ul className='text-slate-400 space-y-2 mb-8'>
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className='flex items-center'>
                            <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></span>
                            {service}
                          </li>
                        ))}
                      </ul>
<Link
                        href={category.href}
                        className={`inline-flex items-center px-6 py-3 ${colors.bg} ${colors.hover} rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${colors.ring} focus:ring-offset-2 focus:ring-offset-slate-900`}
                      >
                        View All {category.title}
<svg
origin/cursor/automate-test-improve-and-merge-code-2533
                          className='ml-2 w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>;
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />;
                        </svg>;
                      </Link>;
                    </div>;
                  );
                })}
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>24/7 Support</h3>
                  <p className='text-slate-400'>
                    Round-the-clock technical support and maintenance
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Code,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  Network,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Services() {
  const title = 'Services — Zion Tech Group';
  const description =
    'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm: py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">
                  Our Services
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From strategy to production, we deliver outcomes fast. Our
                comprehensive suite of services covers everything you need to
                transform your business.
              </p>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-24 sm: py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* AI Autonomous Systems */}
              <div
                id="ai"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    <Brain className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      AI Autonomous Systems
                    </h2>
                    <p className="text-sm text-blue-600 font-medium">
                      Intelligent Automation
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Transform your operations with intelligent automation and
                  AI-powered decision making.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Sales/CS multi-agent copilots
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      RAG and workflow orchestration
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Observability and guardrails
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Intelligent process automation
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>2-4 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                    aria-label="Get started with AI services"
                  >
                    Get started with AI
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* Cloud Platforms */}
              <div
                id="cloud"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                    <Cloud className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Cloud Platforms
                    </h2>
                    <p className="text-sm text-green-600 font-medium">
                      Scalable Infrastructure
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Build scalable, resilient cloud infrastructure that grows with
                  your business.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Serverless and Kubernetes
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Data pipelines and ML ops
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      FinOps and SRE practices
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Multi-cloud architecture
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>4-8 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-green-600 hover: text-green-500 transition-colors group"
                    aria-label="Get started with cloud services"
                  >
                    Get started with Cloud
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* Cybersecurity */}
              <div
                id="cybersecurity"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Cybersecurity
                    </h2>
                    <p className="text-sm text-purple-600 font-medium">
                      Zero-Trust Security
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Protect your business with enterprise-grade security
                  frameworks and compliance automation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Zero-trust architecture
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Compliance automation
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Incident response
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Security audits
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>3-6 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group"
                    aria-label="Get started with cybersecurity services"
                  >
                    Get started with Security
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* Micro SaaS */}
              <div
                id="saas"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors">
                    <Code className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Micro SaaS
                    </h2>
                    <p className="text-sm text-orange-600 font-medium">
                      Custom Solutions
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Custom software solutions tailored to your specific business
                  needs and workflows.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      Custom web applications
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      API development
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      Integration services
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      Maintenance & support
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>6-12 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group"
                    aria-label="Get started with custom software services"
                  >
                    Get started with SaaS
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Additional Core Services */}
            <div className="grid gap-8 lg:grid-cols-2 mt-16">
              {/* Blockchain & Web3 Services */}
              <div
                id="blockchain"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
                    <Database className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Blockchain & Web3 Solutions
                    </h2>
                    <p className="text-sm text-indigo-600 font-medium">
                      Decentralized Innovation
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Build secure, scalable blockchain applications and Web3
                  solutions for the decentralized future.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      Smart contract development and auditing
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      DeFi protocols and DApp development
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      NFT marketplace and tokenization
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      Cross-chain interoperability solutions
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>4-12 weeks delivery</span>
                  </div>
                  <Link
                    href="https: //ziontechgroup.com/blockchain-solutions"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group"
                    aria-label="Get started with blockchain services"
                  >
                    Get started with Web3
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* IoT & Edge Computing */}
              <div
                id="iot"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-teal-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 group-hover:bg-teal-700 transition-colors">
                    <Network className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      IoT & Edge Computing
                    </h2>
                    <p className="text-sm text-teal-600 font-medium">
                      Connected Intelligence
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Connect and manage IoT devices with edge computing for
                  real-time data processing and analytics.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      IoT device management and monitoring
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      Edge computing and real-time analytics
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      Industrial IoT and predictive maintenance
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      Smart city and building automation
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>6-16 weeks delivery</span>
                  </div>
                  <Link
                    href="https://ziontechgroup.com/iot-solutions"
                    className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors group"
                    aria-label="Get started with IoT services"
                  >
                    Get started with IoT
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Expanded Service Catalog */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Expanded Service Catalog
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                More real, production-ready services across AI, IT, and Micro
                SaaS. Transparent starting prices and clear outcomes. Visit our
                website at{' '}
                <a
                  href="https: //ziontechgroup.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ziontechgroup.com
                </a>
                .
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Average market price ranges referenced from public agency rate
                cards and vendor quotes. For tailored pricing, see our{' '}
                <Link
                  href="/pricing-guide"
                  className="text-blue-600 hover: text-blue-500 underline"
                >
                  Pricing Guide
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">
                    Revenue AI Agents (Sales/CS)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Multi-agent copilots for SDR, AM, and Support with guardrails.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Integrates CRM, Helpdesk, and Knowledge Base</li>
                  <li>• Measurable pipeline lift and deflection</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-blue-600">
                    Starting $8k–$25k
                  </span>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover: text-blue-500"
                  >
                    Talk to us →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    Data Engineering as a Service
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Modern ELT, dbt, and warehouse modeling, with governance.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Snowflake/BigQuery/Redshift, Lakehouse setups</li>
                  <li>• Data quality SLAs and observability</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    Starting $10k–$40k
                  </span>
                  <Link
                    href="/contact"
                    className="text-indigo-600 hover: text-indigo-500"
                  >
                    Get estimate →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    MLOps Platform Setup
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  CI/CD for models, feature stores, evals, and monitoring.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Vertex/SageMaker/Databricks integrations</li>
                  <li>• Reproducible pipelines and governance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    Starting $15k–$60k
                  </span>
                  <Link
                    href="/contact"
                    className="text-emerald-600 hover: text-emerald-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
              {/* IT & Cloud */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">
                    FinOps & Cloud Cost Optimization
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Rightsizing, savings plans, architectural refactors for cost.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Typical 20–45% monthly savings</li>
                  <li>• Automated policy enforcement</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-green-600">
                    Assessments $4k–$12k
                  </span>
                  <Link
                    href="/contact"
                    className="text-green-600 hover: text-green-500"
                  >
                    Start now →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">
                    SOC-as-a-Service
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Managed detection & response with 24/7 coverage.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• SIEM, EDR, and threat intel</li>
                  <li>• Incident playbooks and compliance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-purple-600">
                    From $3k/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-purple-600 hover: text-purple-500"
                  >
                    Request details →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">
                    Fractional CTO/Architecture Advisory
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Strategy, roadmap, and architecture leadership on-demand.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Platform modernization & product strategy</li>
                  <li>• Vendor selection and governance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-orange-600">
                    From $4k/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-orange-600 hover: text-orange-500"
                  >
                    Book intro →
                  </Link>
                </div>
              </div>
              {/* AI Services - Additional */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-violet-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Business Intelligence
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated insights, predictive analytics, and intelligent
                  reporting.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Natural language query interface</li>
                  <li>• Automated anomaly detection and alerts</li>
                  <li>• Custom dashboard generation</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-violet-600">
                    From $399/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-violet-600 hover: text-violet-500"
                  >
                    Schedule demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-cyan-600" />
                  <h3 className="font-semibold text-gray-900">
                    Intelligent Document Processing
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Extract, classify, and process documents with AI accuracy.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• OCR with 99%+ accuracy</li>
                  <li>• Automated data extraction and validation</li>
                  <li>• Workflow automation and routing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-cyan-600">
                    From $299/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-cyan-600 hover: text-cyan-500"
                  >
                    Try free trial →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI Test Automation Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Self-healing test scripts and intelligent test case
                  generation.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Visual regression testing with AI</li>
                  <li>• Automated test maintenance</li>
                  <li>• Cross-browser and device testing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-yellow-600">
                    From $199/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Start testing →
                  </Link>
                </div>
              </div>
              {/* Micro SaaS */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="h-5 w-5 text-rose-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI Content Localization SaaS
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Translate and culturally adapt content at scale.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Multi-market SEO and brand alignment</li>
                  <li>• Human-in-the-loop quality controls</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-rose-600">
                    From $199/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-rose-600 hover:text-rose-500"
                  >
                    Request demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-sky-600" />
                  <h3 className="font-semibold text-gray-900">
                    Predictive Maintenance Toolkit
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Out-of-the-box anomaly detection for equipment and IoT.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Sensor ingestion, dashboards, and alerts</li>
                  <li>• Edge or cloud deployment options</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-sky-600">
                    From $299/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-sky-600 hover: text-sky-500"
                  >
                    See live demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-5 w-5 text-teal-600" />
                  <h3 className="font-semibold text-gray-900">
                    Compliance Copilot (SOC2/HIPAA/GDPR)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated evidence collection and continuous controls.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Policy templates and auditor-ready reports</li>
                  <li>• Ticketing and alerting integrations</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-teal-600">
                    From $249/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-teal-600 hover: text-teal-500"
                  >
                    Book a walkthrough →
                  </Link>
                </div>
              </div>
              {/* Additional IT Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-lime-600" />
                  <h3 className="font-semibold text-gray-900">
                    DevOps Automation Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Complete CI/CD pipelines with infrastructure as code.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• GitOps workflows and automated deployments</li>
                  <li>• Infrastructure monitoring and alerting</li>
                  <li>• Multi-cloud orchestration</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-lime-600">
                    From $599/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-lime-600 hover:text-lime-500"
                  >
                    Get started →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-pink-600" />
                  <h3 className="font-semibold text-gray-900">
                    Digital Transformation Consulting
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  End-to-end modernization strategy and implementation.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Legacy system migration and modernization</li>
                  <li>• Cloud-native architecture design</li>
                  <li>• Change management and training</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-pink-600">
                    From $8k–$50k
                  </span>
                  <Link
                    href="/contact"
                    className="text-pink-600 hover:text-pink-500"
                  >
                    Schedule consultation →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-gray-900">
                    Infrastructure Monitoring & Observability
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Real-time monitoring with AI-powered anomaly detection.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Application performance monitoring (APM)</li>
                  <li>• Log aggregation and analysis</li>
                  <li>• Predictive scaling and optimization</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-amber-600">
                    From $199/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-amber-600 hover: text-amber-500"
                  >
                    Monitor now →
                  </Link>
                </div>
              </div>
              {/* Additional Micro SaaS */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    Smart Project Management Suite
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  AI-powered project tracking with intelligent resource
                  allocation.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Automated task prioritization and scheduling</li>
                  <li>• Team performance analytics and insights</li>
                  <li>• Integration with popular tools (Slack, Jira, etc.)</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    From $149/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-emerald-600 hover: text-emerald-500"
                  >
                    Start free trial →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    Customer Feedback Intelligence Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  AI-driven sentiment analysis and actionable insights from
                  customer feedback.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Multi-channel feedback aggregation</li>
                  <li>• Sentiment analysis and trend identification</li>
                  <li>• Automated response recommendations</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    From $99/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Analyze feedback →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    Workflow Automation Engine
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  No-code workflow builder with AI-powered optimization
                  suggestions.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Visual workflow designer with drag-and-drop</li>
                  <li>• 500+ pre-built integrations</li>
                  <li>• AI-powered efficiency recommendations</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-600">
                    From $79/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-red-600 hover:text-red-500"
                  >
                    Automate workflows →
                  </Link>
                </div>
              </div>
              {/* New AI-Powered Micro SaaS Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Lead Scoring & Qualification
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Intelligent lead scoring with behavioral analysis and
                  conversion prediction.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time lead scoring with 95%+ accuracy</li>
                  <li>• Behavioral pattern recognition and intent analysis</li>
                  <li>• Automated follow-up recommendations and timing</li>
                  <li>• CRM integration with Salesforce, HubSpot, Pipedrive</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-purple-600">
                    From $199/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/ai-lead-scoring"
                    className="text-purple-600 hover:text-purple-500"
                  >
                    Try demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">
                    Smart Data Quality & Enrichment Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated data cleaning, validation, and enrichment with AI
                  accuracy.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time data validation and deduplication</li>
                  <li>• AI-powered data enrichment from 50+ sources</li>
                  <li>• Automated data quality scoring and monitoring</li>
                  <li>• GDPR/CCPA compliant data processing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-blue-600">
                    From $299/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/data-quality"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    Clean your data →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Fraud Detection & Prevention
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Real-time fraud detection with machine learning and behavioral
                  analysis.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time transaction monitoring and scoring</li>
                  <li>• Behavioral biometrics and device fingerprinting</li>
                  <li>• Customizable risk rules and thresholds</li>
                  <li>• Integration with payment processors and banks</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-green-600">
                    From $499/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/fraud-detection"
                    className="text-green-600 hover:text-green-500"
                  >
                    Secure transactions →
                  </Link>
                </div>
              </div>
              {/* New IT Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="h-5 w-5 text-cyan-600" />
                  <h3 className="font-semibold text-gray-900">
                    Multi-Cloud Migration & Management
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Seamless migration between AWS, Azure, GCP with cost
                  optimization.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Zero-downtime migration strategies</li>
                  <li>• Automated cost optimization and rightsizing</li>
                  <li>• Disaster recovery and backup solutions</li>
                  <li>• 24/7 monitoring and support</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-cyan-600">
                    From $5k–$25k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/cloud-migration"
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    Migrate now →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">
                    Kubernetes & Container Orchestration
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Production-ready Kubernetes clusters with auto-scaling and
                  monitoring.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Managed Kubernetes clusters (EKS, AKS, GKE)</li>
                  <li>• Auto-scaling and load balancing</li>
                  <li>• CI/CD pipeline integration</li>
                  <li>• Security hardening and compliance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-orange-600">
                    From $2k–$8k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/kubernetes"
                    className="text-orange-600 hover:text-orange-500"
                  >
                    Deploy K8s →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    Zero-Trust Security Implementation
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Complete zero-trust architecture with identity and access
                  management.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Identity and access management (IAM)</li>
                  <li>• Network segmentation and micro-segmentation</li>
                  <li>• Endpoint detection and response (EDR)</li>
                  <li>• Security awareness training and testing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-600">
                    From $10k–$50k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/zero-trust"
                    className="text-red-600 hover:text-red-500"
                  >
                    Secure your network →
                  </Link>
                </div>
              </div>
              {/* New Micro SaaS Solutions */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Inventory Optimization
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Predictive inventory management with demand forecasting and
                  automated reordering.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Demand forecasting with 90%+ accuracy</li>
                  <li>• Automated reorder point calculations</li>
                  <li>• Supplier performance analytics</li>
                  <li>• Integration with ERP and e-commerce platforms</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    From $149/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/inventory-optimization"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Optimize inventory →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-pink-600" />
                  <h3 className="font-semibold text-gray-900">
                    Smart Employee Onboarding Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated onboarding workflows with AI-powered personalization
                  and compliance tracking.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Personalized onboarding journeys</li>
                  <li>• Automated document collection and verification</li>
                  <li>• Compliance tracking and reporting</li>
                  <li>• Integration with HRIS and payroll systems</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-pink-600">
                    From $99/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/employee-onboarding"
                    className="text-pink-600 hover:text-pink-500"
                  >
                    Streamline onboarding →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-teal-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered SEO & Content Optimization
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated SEO analysis, content optimization, and keyword
                  research with AI insights.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time SEO audits and recommendations</li>
                  <li>• AI-generated content suggestions</li>
                  <li>• Competitor analysis and gap identification</li>
                  <li>• Automated technical SEO monitoring</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-teal-600">
                    From $199/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/seo-optimization"
                    className="text-teal-600 hover:text-teal-500"
                  >
                    Boost SEO →
                  </Link>
                </div>
              </div>
              {/* Advanced AI Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-violet-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Customer Service Automation
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Intelligent chatbots and virtual assistants with natural
                  language processing.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Multi-language chatbot with 95%+ accuracy</li>
                  <li>• Sentiment analysis and escalation routing</li>
                  <li>• Integration with CRM and ticketing systems</li>
                  <li>• Custom training on your business data</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-violet-600">
                    From $399/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/ai-customer-service"
                    className="text-violet-600 hover:text-violet-500"
                  >
                    Automate support →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Predictive Analytics Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Advanced predictive modeling for business forecasting and
                  decision making.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Revenue and sales forecasting</li>
                  <li>• Customer churn prediction and prevention</li>
                  <li>• Market trend analysis and insights</li>
                  <li>• Custom model development and training</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    From $599/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/predictive-analytics"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Predict the future →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Code Review & Quality Assurance
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated code analysis, security scanning, and quality
                  improvement suggestions.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Automated code review with AI insights</li>
                  <li>• Security vulnerability detection</li>
                  <li>• Performance optimization recommendations</li>
                  <li>• Integration with GitHub, GitLab, Bitbucket</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-yellow-600">
                    From $199/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/ai-code-review"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Improve code quality →
                  </Link>
                </div>
              </div>
              {/* Emerging Technology Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Voice & Video Analytics
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Real-time speech recognition, sentiment analysis, and video
                  content understanding.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>
                    • Multi-language voice transcription with 99%+ accuracy
                  </li>
                  <li>• Real-time sentiment and emotion analysis</li>
                  <li>• Video content analysis and object detection</li>
                  <li>• Integration with Zoom, Teams, and custom platforms</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-purple-600">
                    From $299/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/voice-video-analytics"
                    className="text-purple-600 hover:text-purple-500"
                  >
                    Analyze media →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-cyan-600" />
                  <h3 className="font-semibold text-gray-900">
                    Quantum-Ready Data Encryption
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Future-proof encryption solutions preparing for quantum
                  computing threats.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Post-quantum cryptography implementation</li>
                  <li>• Quantum key distribution (QKD) systems</li>
                  <li>• Hybrid classical-quantum security protocols</li>
                  <li>• Compliance with NIST quantum standards</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-cyan-600">
                    From $2k–$15k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/quantum-encryption"
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    Secure future →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-rose-600" />
                  <h3 className="font-semibold text-gray-900">
                    Metaverse & Virtual Reality Solutions
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Immersive virtual experiences and metaverse platform
                  development.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• VR/AR application development</li>
                  <li>• Virtual event and conference platforms</li>
                  <li>• 3D virtual showrooms and retail spaces</li>
                  <li>• Cross-platform metaverse integration</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-rose-600">
                    From $5k–$30k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/metaverse-solutions"
                    className="text-rose-600 hover:text-rose-500"
                  >
                    Enter metaverse →
                  </Link>
                </div>
              </div>
              {/* Specialized Industry Solutions */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    Healthcare AI & HIPAA Compliance
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  AI-powered healthcare solutions with full HIPAA compliance and
                  medical data security.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Medical image analysis and diagnosis assistance</li>
                  <li>• Patient data anonymization and privacy protection</li>
                  <li>• Clinical decision support systems</li>
                  <li>• Integration with EHR and medical devices</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    From $8k–$50k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/healthcare-ai"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Transform healthcare →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-gray-900">
                    FinTech & RegTech Solutions
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Financial technology solutions with regulatory compliance and
                  risk management.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Automated KYC/AML compliance systems</li>
                  <li>• Real-time fraud detection and prevention</li>
                  <li>• Cryptocurrency trading and portfolio management</li>
                  <li>• Regulatory reporting and audit automation</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-amber-600">
                    From $10k–$75k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/fintech-solutions"
                    className="text-amber-600 hover:text-amber-500"
                  >
                    Innovate finance →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    EdTech & Learning Management AI
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Intelligent learning platforms with personalized education and
                  assessment.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• AI-powered personalized learning paths</li>
                  <li>• Automated content generation and curation</li>
                  <li>• Intelligent assessment and grading systems</li>
                  <li>• Student performance analytics and insights</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    From $5k–$25k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/edtech-solutions"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Transform education →
                  </Link>
                </div>
              </div>
              {/* Advanced Automation Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-lime-600" />
                  <h3 className="font-semibold text-gray-900">
                    Hyperautomation Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  End-to-end business process automation with AI, RPA, and
                  intelligent workflows.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Robotic Process Automation (RPA) implementation</li>
                  <li>• Intelligent document processing and OCR</li>
                  <li>• Business process mining and optimization</li>
                  <li>• Cross-system integration and orchestration</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-lime-600">
                    From $3k–$20k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/hyperautomation"
                    className="text-lime-600 hover:text-lime-500"
                  >
                    Automate everything →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-violet-600" />
                  <h3 className="font-semibold text-gray-900">
                    Edge AI & Real-Time Processing
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Deploy AI models at the edge for ultra-low latency and
                  real-time decision making.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Edge AI model optimization and deployment</li>
                  <li>• Real-time video and image processing</li>
                  <li>• IoT sensor data analysis and insights</li>
                  <li>• Autonomous system control and decision making</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-violet-600">
                    From $4k–$25k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/edge-ai"
                    className="text-violet-600 hover:text-violet-500"
                  >
                    Deploy edge AI →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Threat Intelligence
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Advanced threat detection and response with machine learning
                  and behavioral analysis.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time threat detection and analysis</li>
                  <li>• Automated incident response and remediation</li>
                  <li>• Threat hunting and intelligence gathering</li>
                  <li>• Security orchestration and automation (SOAR)</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-600">
                    From $2k–$15k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/threat-intelligence"
                    className="text-red-600 hover:text-red-500"
                  >
                    Defend against threats →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-500">
              Need something custom? Email{' '}
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-blue-600 hover:text-blue-500"
              >
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a
                href="tel:+13024640950"
                className="text-blue-600 hover:text-blue-500"
              >
                +1 302 464 0950
              </a>
              .
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Delivery Process
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We follow a proven methodology that ensures quality, speed, and
                successful outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Discovery
                </h3>
                <p className="text-gray-600">
                  Understand your needs and requirements
                </p>
              </div>
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Strategy
                </h3>
                <p className="text-gray-600">Plan the solution architecture</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Development
                </h3>
                <p className="text-gray-600">Build and test the solution</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Deployment
                </h3>
                <p className="text-gray-600">Launch and monitor performance</p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing & Market Positioning Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Competitive Pricing & Market Leadership
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our pricing reflects the true value of cutting-edge technology
                solutions, with transparent costs and exceptional ROI.
              </p>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 lg: grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Micro SaaS Solutions
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    $300 - $8,000
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Rapid deployment (1-8 weeks)
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Industry-specific solutions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    AI-powered automation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Scalable architecture
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    Market Average: $1, 200 - $15,000/month
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Save up to 60%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover: shadow-lg transition-all duration-300 ring-2 ring-blue-500">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Services
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    $1, 500 - $75,000
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Cutting-edge AI technology
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Custom model development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Advanced analytics
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    Market Average: $5, 000 - $100,000/month
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Save up to 40%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover: shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    IT Services
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    $4, 000 - $150,000
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Enterprise-grade solutions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    24/7 support & monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Advanced security
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Scalable infrastructure
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    Market Average: $8, 000 - $200,000/month
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Save up to 50%
                  </div>
                </div>
              </div>
            </div>

            {/* Market Positioning */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven expertise to
                  deliver solutions that drive real business value.
                </p>
              </div>

              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Industry Leaders
                  </h4>
                  <p className="text-sm text-gray-600">
                    500+ successful projects across diverse industries
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Rapid Delivery
                  </h4>
                  <p className="text-sm text-gray-600">
                    50% faster deployment than industry average
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Enterprise Security
                  </h4>
                  <p className="text-sm text-gray-600">
                    99.9% uptime with enterprise-grade security
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Proven ROI
                  </h4>
                  <p className="text-sm text-gray-600">
                    Average 300% ROI within first year
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                  </p>
                </div>
              </div>
            </div>
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors'
                >
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'
                >
                  Email Us
                </a>
              </div>
</motion.div>
<<<<<<< HEAD:pages/services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services.tsx
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Discovery</h3>
                <p className="text-gray-300">
                  We start by understanding your business goals, challenges, and requirements through detailed consultation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Planning</h3>
                <p className="text-gray-300">
                  Our team creates a comprehensive project plan with timelines, milestones, and resource allocation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Development</h3>
                <p className="text-gray-300">
                  We build your solution using agile methodologies with regular updates and feedback sessions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Deployment</h3>
                <p className="text-gray-300">
                  We deploy your solution and provide comprehensive training and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks to build robust, scalable solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">React</span>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">Next.js</span>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">TypeScript</span>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-2 mb-2">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Node.js</span>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Python</span>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Java</span>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2">Go</span>
                </div>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">AWS</span>
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">Azure</span>
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">Docker</span>
                  <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm mr-2 mb-2">Kubernetes</span>
                </div>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-white mb-4">AI & Data</h3>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">TensorFlow</span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">PyTorch</span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">MongoDB</span>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mr-2 mb-2">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create a solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD:pages/services.tsx
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
ursor/fix-netlify-build-and-merge-to-main-9571


origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services.tsx
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Let&aposs discuss your project requirements and how we can help
                you achieve your goals.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                  aria-label="Contact us to get started"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
                  aria-label="Back to homepage"
                >
                  Back to Home{' '}
                  <span
                    aria-hidden="true"
                    className="group-hover:translate-x-1 transition-transform inline-block"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
}
<<<<<<< HEAD:pages/services.tsx
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/services.tsx
