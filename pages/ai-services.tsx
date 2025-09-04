import Link from 'next/link';
import { Brain, Zap, Shield, Eye, Mic, TrendingUp, Database, FileText, Cog, Search } from 'lucide-react';

export default function AIServices() {
  const plans = [
    {
      name: 'Starter',
      price: 1499,
      features: [
        'AI strategy workshop (2h)',
        'One AI use-case blueprint',
        'Proof-of-concept using OpenAI or Gemini',
        'Data readiness checklist',
        'Security and compliance baseline'
      ]
    },
    {
      name: 'Growth',
      price: 4999,
      features: [
        '2 production-ready AI workflows',
        'Retrieval Augmented Generation (RAG) setup',
        'Evaluation harness and guardrails',
        'Observability dashboards (latency, cost, quality)',
        'Fine-tuning or adapters where applicable'
      ]
    },
    {
      name: 'Scale',
      price: 12999,
      features: [
        'Multi-model routing and fallbacks',
        'Private vector DB + encryption at rest',
        'A/B testing and human feedback loops',
        'SLA, on-call, and monthly optimization',
        'Enterprise SSO and compliance add-ons'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Autonomous Vehicle Systems',
      description: 'Advanced AI systems for autonomous vehicle navigation, safety, and fleet management.',
      features: [
        'Real-time object detection and recognition',
        'Path planning and navigation algorithms',
        'Predictive maintenance and diagnostics',
        'Fleet optimization and routing',
        'Safety monitoring and incident prevention',
        'Integration with smart city infrastructure'
      ],
      pricing: '$100,000 – $500,000 setup',
      perUnit: '$0.10 – $1.00 per mile',
      timeline: '24–48 weeks',
      benefits: [
        '99.9% safety improvement',
        'Reduced transportation costs',
        'Optimized fleet operations',
        'Enhanced passenger experience'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Augmented Reality Solutions',
      description: 'Intelligent AR applications for training, maintenance, and customer experiences.',
      features: [
        'Real-time object recognition and tracking',
        'Interactive 3D content generation',
        'Spatial mapping and navigation',
        'Hand gesture and voice control',
        'Multi-user collaboration features',
        'Integration with IoT devices'
      ],
      pricing: '$15,000 – $75,000 setup',
      perUnit: '$0.50 – $5.00 per session',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced training effectiveness',
        'Reduced maintenance time',
        'Improved customer engagement',
        'Cost-effective remote assistance'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Climate Change Analytics',
      description: 'Advanced climate modeling and environmental impact analysis using machine learning.',
      features: [
        'Climate pattern prediction and modeling',
        'Environmental impact assessment',
        'Carbon footprint tracking and optimization',
        'Renewable energy optimization',
        'Disaster prediction and preparedness',
        'Sustainability reporting and compliance'
      ],
      pricing: '$25,000 – $125,000 setup',
      perUnit: '$0.10 – $1.00 per analysis',
      timeline: '16–32 weeks',
      benefits: [
        'Accurate climate predictions',
        'Reduced environmental impact',
        'Cost savings through optimization',
        'Improved sustainability metrics'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Quantum Computing Applications',
      description: 'Quantum machine learning and optimization solutions for complex problem solving.',
      features: [
        'Quantum machine learning algorithms',
        'Optimization problem solving',
        'Cryptographic security enhancement',
        'Drug discovery and molecular simulation',
        'Financial modeling and risk analysis',
        'Supply chain optimization'
      ],
      pricing: '$50,000 – $250,000 setup',
      perUnit: '$1.00 – $10.00 per computation',
      timeline: '20–40 weeks',
      benefits: [
        'Exponential computational speedup',
        'Breakthrough problem-solving capabilities',
        'Enhanced security and encryption',
        'Revolutionary optimization results'
      ]
    },
    {
      icon: Users,
      name: 'AI-Powered Mental Health Support',
      description: 'Intelligent mental health monitoring, assessment, and intervention systems.',
      features: [
        'Emotional state detection and analysis',
        'Personalized therapy recommendations',
        'Crisis intervention and alert systems',
        'Progress tracking and analytics',
        'Integration with healthcare providers',
        'Privacy-preserving data handling'
      ],
      pricing: '$10,000 – $50,000 setup',
      perUnit: '$0.50 – $5.00 per session',
      timeline: '12–24 weeks',
      benefits: [
        'Improved mental health outcomes',
        'Early intervention capabilities',
        'Reduced healthcare costs',
        'Accessible mental health support'
      ]
    },
    {
      icon: Database,
      name: 'AI-Powered Data Fabric Platform',
      description: 'Intelligent data integration and management across hybrid cloud environments.',
      features: [
        'Automated data discovery and cataloging',
        'Real-time data integration and synchronization',
        'Data quality assessment and improvement',
        'Privacy-preserving data sharing',
        'Automated data governance',
        'Cross-platform data analytics'
      ],
      pricing: '$20,000 – $100,000 setup',
      perUnit: '$0.01 – $0.10 per GB',
      timeline: '16–32 weeks',
      benefits: [
        'Unified data access and management',
        'Improved data quality and consistency',
        'Reduced data silos',
        'Enhanced analytics capabilities'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning-driven pharmaceutical research and drug development acceleration.',
      features: [
        'Molecular structure analysis and design',
        'Drug-target interaction prediction',
        'Clinical trial optimization',
        'Adverse effect prediction',
        'Drug repurposing identification',
        'Regulatory compliance assistance'
      ],
      pricing: '$100,000 – $500,000 setup',
      perUnit: '$1.00 – $10.00 per compound',
      timeline: '24–48 weeks',
      benefits: [
        'Faster drug development cycles',
        'Reduced research and development costs',
        'Improved success rates',
        'Enhanced patient safety'
      ]
    },
    {
      icon: Globe,
      name: 'AI-Powered Space Technology Solutions',
      description: 'Advanced AI systems for satellite operations, space exploration, and Earth observation.',
      features: [
        'Satellite constellation management',
        'Earth observation data analysis',
        'Space debris tracking and avoidance',
        'Mission planning and optimization',
        'Autonomous spacecraft operations',
        'Real-time space weather monitoring'
      ],
      pricing: '$75,000 – $375,000 setup',
      perUnit: '$0.50 – $5.00 per observation',
      timeline: '20–40 weeks',
      benefits: [
        'Enhanced space mission success',
        'Improved satellite operations',
        'Better Earth monitoring capabilities',
        'Reduced space mission costs'
      ]
    },
    {
      icon: Zap,
      name: 'AI-Powered Energy Grid Optimization',
      description: 'Intelligent energy grid management with predictive analytics and renewable integration.',
      features: [
        'Demand forecasting and load balancing',
        'Renewable energy integration optimization',
        'Grid stability monitoring and control',
        'Predictive maintenance for infrastructure',
        'Energy storage optimization',
        'Real-time pricing and market analysis'
      ],
      pricing: '$30,000 – $150,000 setup',
      perUnit: '$0.01 – $0.10 per kWh',
      timeline: '16–32 weeks',
      benefits: [
        'Improved grid efficiency and reliability',
        'Increased renewable energy integration',
        'Reduced energy costs',
        'Enhanced grid stability'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Agricultural Intelligence',
      description: 'Smart farming solutions with precision agriculture and crop optimization.',
      features: [
        'Crop health monitoring and analysis',
        'Precision irrigation and fertilization',
        'Pest and disease detection',
        'Yield prediction and optimization',
        'Weather pattern analysis',
        'Automated farming equipment control'
      ],
      pricing: '$15,000 – $75,000 setup',
      perUnit: '$0.10 – $1.00 per acre',
      timeline: '12–24 weeks',
      benefits: [
        'Increased crop yields and quality',
        'Reduced resource consumption',
        'Improved sustainability',
        'Enhanced farm profitability'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Digital Twin Technology',
      description: 'Virtual replicas of physical systems with real-time monitoring and predictive analytics.',
      features: [
        'Real-time system modeling and simulation',
        'Predictive maintenance and optimization',
        'Performance monitoring and analysis',
        'Scenario planning and testing',
        'Integration with IoT sensors',
        'Automated decision support'
      ],
      pricing: '$25,000 – $125,000 setup',
      perUnit: '$0.50 – $5.00 per simulation',
      timeline: '16–32 weeks',
      benefits: [
        'Improved system performance',
        'Reduced maintenance costs',
        'Enhanced operational efficiency',
        'Better decision-making capabilities'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Neuromorphic Computing',
      description: 'Brain-inspired computing systems for edge AI and real-time processing.',
      features: [
        'Neuromorphic chip design and optimization',
        'Spiking neural network implementation',
        'Ultra-low power consumption',
        'Real-time learning and adaptation',
        'Edge AI processing capabilities',
        'Integration with IoT devices'
      ],
      pricing: '$50,000 – $250,000 setup',
      perUnit: '$0.01 – $0.10 per operation',
      timeline: '20–40 weeks',
      benefits: [
        'Ultra-low power consumption',
        'Real-time processing capabilities',
        'Enhanced edge AI performance',
        'Revolutionary computing efficiency'
      ]
    }
  ];

  const solutions = [
    {
      title: 'AI Analytics Co-pilot',
      desc: 'Natural-language insights over your business data with secure connectors.',
      link: '/services/ai-analytics'
    },
    {
      title: 'NLP Chatbots',
      desc: 'Sales and support bots with tools, memory, and safe actions.',
      link: '/services/nlp-chatbots'
    },
    {
      title: 'Computer Vision',
      desc: 'Detection, OCR, quality control, and video analytics pipelines.',
      link: '/services/computer-vision'
    },
    {
      title: 'Predictive Analytics',
      desc: 'Propensity scoring, forecasting, and anomaly detection for ops.',
      link: '/services/predictive-analytics'
    }
  ];

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Production-grade AI solutions: RAG, chatbots, analytics co-pilots, computer vision, and predictive models with security and observability."
      canonical="https://ziontechgroup.com/ai-services"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            AI Services
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            We design, build, and operate safe, reliable AI systems. From discovery to
            production, our teams deliver measurable outcomes with transparent cost control
            and rigorous evaluation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <Link key={s.title} href={s.link} className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <span className="mt-4 inline-block text-sm text-blue-600">Explore →</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold text-slate-900 text-center">Pricing</h2>
        <p className="mt-2 text-slate-600 text-center">Typical market ranges; final pricing depends on scope.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">${plan.price}<span className="text-base font-normal text-slate-500">/project</span></p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Link href="/request-quote" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Request quote
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Questions? Call <a href="tel:+13024640950" className="text-blue-600">+1 302 464 0950</a> or email
            {' '}<a href="mailto:kleber@ziontechgroup.com" className="text-blue-600">kleber@ziontechgroup.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}