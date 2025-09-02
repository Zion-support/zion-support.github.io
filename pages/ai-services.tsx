import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import {
  Brain,
  Zap,
  Shield,
  Database,
  BarChart3,
  Users,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Network
} from &apos;lucide-react&apos;;
import PageTransition from &apos;../src/components/PageTransition&apos;;

export default function AIServices() {
  const title = &apos;AI Services — Zion Tech Group&apos;;
  const description = &apos;Cutting-edge AI solutions including autonomous systems, machine learning, natural language processing, and intelligent automation.&apos;;

  const aiServices = [
    {
      title: &apos;AI-Powered Email Responder&apos;,
      description: &apos;Automated email responses with sentiment analysis and intelligent categorization&apos;,
      icon: MessageSquare,
      features: [
        &apos;Smart email categorization and prioritization&apos;,
        &apos;Automated response generation with personalization&apos;,
        &apos;Sentiment analysis and escalation triggers&apos;,
        &apos;Integration with CRM and helpdesk systems&apos;,
        &apos;Multi-language support and compliance&apos;
      ],
      pricing: &apos;$2,500 - $8,000/month&apos;,
      delivery: &apos;2-3 weeks&apos;,
      category: &apos;Communication AI&apos;
    },
    {
      title: &apos;AI Content Creation Suite&apos;,
      description: &apos;Comprehensive AI-powered content generation for marketing, social media, and documentation&apos;,
      icon: FileText,
      features: [
        &apos;Automated blog posts and articles&apos;,
        &apos;Social media content generation&apos;,
        &apos;Product descriptions and marketing copy&apos;,
        &apos;Technical documentation creation&apos;,
        &apos;SEO-optimized content with keyword integration&apos;
      ],
      pricing: &apos;$1,500 - $5,000/month&apos;,
      delivery: &apos;1-2 weeks&apos;,
      category: &apos;Content AI&apos;
    },
    {
      title: &apos;Intelligent Document Processing&apos;,
      description: &apos;AI-powered document analysis, extraction, and processing for business automation&apos;,
      icon: FileText,
      features: [
        &apos;Automated data extraction from PDFs and forms&apos;,
        &apos;Document classification and routing&apos;,
        &apos;OCR with 99%+ accuracy&apos;,
        &apos;Contract analysis and risk assessment&apos;,
        &apos;Compliance monitoring and reporting&apos;
      ],
      pricing: &apos;$3,000 - $12,000/month&apos;,
      delivery: &apos;3-4 weeks&apos;,
      category: &apos;Document AI&apos;
    },
    {
      title: &apos;AI-Powered Talent Matching&apos;,
      description: &apos;Advanced recruitment platform with AI-driven candidate screening and matching&apos;,
      icon: Users,
      features: [
        &apos;Resume parsing and skill extraction&apos;,
        &apos;Cultural fit and personality analysis&apos;,
        &apos;Automated interview scheduling&apos;,
        &apos;Bias detection and elimination&apos;,
        &apos;Predictive hiring success metrics&apos;
      ],
      pricing: &apos;$4,000 - $15,000/month&apos;,
      delivery: &apos;4-6 weeks&apos;,
      category: &apos;HR AI&apos;
    },
    {
      title: &apos;Computer Vision Solutions&apos;,
      description: &apos;Image and video analysis for quality control, security, and automation&apos;,
      icon: Eye,
      features: [
        &apos;Real-time object detection and recognition&apos;,
        &apos;Quality control and defect detection&apos;,
        &apos;Facial recognition and access control&apos;,
        &apos;Video analytics and monitoring&apos;,
        &apos;Custom model training and deployment&apos;
      ],
      pricing: &apos;$5,000 - $20,000/month&apos;,
      delivery: &apos;6-8 weeks&apos;,
      category: &apos;Vision AI&apos;
    },
    {
      title: &apos;AI Chatbot & Virtual Assistant&apos;,
      description: &apos;Intelligent conversational AI for customer support and business automation&apos;,
      icon: Bot,
      features: [
        &apos;Natural language understanding&apos;,
        &apos;Multi-channel deployment (web, mobile, voice)&apos;,
        &apos;Integration with business systems&apos;,
        &apos;Sentiment analysis and escalation&apos;,
        &apos;Continuous learning and improvement&apos;
      ],
      pricing: &apos;$2,000 - $10,000/month&apos;,
      delivery: &apos;2-4 weeks&apos;,
      category: &apos;Conversational AI&apos;
    },
    {
      title: &apos;Predictive Analytics Platform&apos;,
      description: &apos;AI-driven forecasting and predictive modeling for business intelligence&apos;,
      icon: TrendingUp,
      features: [
        &apos;Sales forecasting and demand planning&apos;,
        &apos;Customer churn prediction&apos;,
        &apos;Financial risk assessment&apos;,
        &apos;Market trend analysis&apos;,
        &apos;Real-time dashboard and alerts&apos;
      ],
      pricing: &apos;$6,000 - $25,000/month&apos;,
      delivery: &apos;8-12 weeks&apos;,
      category: &apos;Analytics AI&apos;
    },
    {
      title: &apos;AI-Powered Search Engine&apos;,
      description: &apos;Intelligent search with semantic understanding and personalized results&apos;,
      icon: Search,
      features: [
        &apos;Semantic search with natural language queries&apos;,
        &apos;Personalized search results&apos;,
        &apos;Auto-complete and suggestions&apos;,
        &apos;Multi-language support&apos;,
        &apos;Analytics and search optimization&apos;
      ],
      pricing: &apos;$3,500 - $12,000/month&apos;,
      delivery: &apos;4-6 weeks&apos;,
      category: &apos;Search AI&apos;
    },
    {
      title: &apos;AI Voice & Speech Processing&apos;,
      description: &apos;Advanced voice recognition, synthesis, and real-time translation services&apos;,
      icon: Mic,
      features: [
        &apos;Real-time speech-to-text with 99% accuracy&apos;,
        &apos;Multi-language voice synthesis&apos;,
        &apos;Voice cloning and personalization&apos;,
        &apos;Real-time translation and interpretation&apos;,
        &apos;Voice biometric authentication&apos;,
        &apos;Audio content analysis and insights&apos;
      ],
      pricing: &apos;$4,000 - $15,000/month&apos;,
      delivery: &apos;5-8 weeks&apos;,
      category: &apos;Voice AI&apos;
    },
    {
      title: &apos;AI-Powered Fraud Detection&apos;,
      description: &apos;Real-time fraud prevention and risk assessment using machine learning&apos;,
      icon: Shield,
      features: [
        &apos;Real-time transaction monitoring&apos;,
        &apos;Behavioral pattern analysis&apos;,
        &apos;Anomaly detection algorithms&apos;,
        &apos;Risk scoring and decision automation&apos;,
        &apos;Multi-channel fraud prevention&apos;,
        &apos;Compliance reporting and audit trails&apos;
      ],
      pricing: &apos;$5,000 - $20,000/month&apos;,
      delivery: &apos;6-10 weeks&apos;,
      category: &apos;Security AI&apos;
    },
    {
      title: &apos;AI Recommendation Engine&apos;,
      description: &apos;Personalized recommendation system for e-commerce, content, and services&apos;,
      icon: Star,
      features: [
        &apos;Collaborative and content-based filtering&apos;,
        &apos;Real-time personalization&apos;,
        &apos;A/B testing and optimization&apos;,
        &apos;Cross-platform recommendation sync&apos;,
        &apos;Performance analytics and insights&apos;,
        &apos;Custom algorithm development&apos;
      ],
      pricing: &apos;$3,000 - $12,000/month&apos;,
      delivery: &apos;4-7 weeks&apos;,
      category: &apos;Recommendation AI&apos;
    },
    {
      title: &apos;AI-Powered Video Analytics&apos;,
      description: &apos;Intelligent video processing for security, marketing, and business insights&apos;,
      icon: Video,
      features: [
        &apos;Real-time video object detection&apos;,
        &apos;Facial recognition and tracking&apos;,
        &apos;Emotion and sentiment analysis&apos;,
        &apos;Video content summarization&apos;,
        &apos;Automated video editing and optimization&apos;,
        &apos;Live streaming analytics&apos;
      ],
      pricing: &apos;$6,000 - $25,000/month&apos;,
      delivery: &apos;8-12 weeks&apos;,
      category: &apos;Video AI&apos;
    },
    {
      title: &apos;AI Process Mining & Optimization&apos;,
      description: &apos;Intelligent process analysis and optimization for business workflows&apos;,
      icon: Settings,
      features: [
        &apos;Automated process discovery&apos;,
        &apos;Bottleneck identification and analysis&apos;,
        &apos;Process optimization recommendations&apos;,
        &apos;Compliance monitoring and reporting&apos;,
        &apos;Real-time process monitoring&apos;,
        &apos;Predictive process analytics&apos;
      ],
      pricing: &apos;$8,000 - $30,000/month&apos;,
      delivery: &apos;10-16 weeks&apos;,
      category: &apos;Process AI&apos;
    },
    {
      title: &apos;AI-Powered Supply Chain Optimization&apos;,
      description: &apos;Intelligent supply chain management with predictive analytics and automation&apos;,
      icon: Network,
      features: [
        &apos;Demand forecasting and planning&apos;,
        &apos;Supplier risk assessment&apos;,
        &apos;Route optimization and logistics&apos;,
        &apos;Inventory optimization algorithms&apos;,
        &apos;Supply chain visibility and tracking&apos;,
        &apos;Risk mitigation and contingency planning&apos;
      ],
      pricing: &apos;$10,000 - $40,000/month&apos;,
      delivery: &apos;12-20 weeks&apos;,
      category: &apos;Supply Chain AI&apos;
    },
    {
      title: &apos;AI Customer Sentiment Analysis&apos;,
      description: &apos;Real-time customer sentiment monitoring across all communication channels&apos;,
      icon: MessageSquare,
      features: [
        &apos;Multi-channel sentiment monitoring&apos;,
        &apos;Real-time emotion detection&apos;,
        &apos;Trend analysis and reporting&apos;,
        &apos;Automated alert system&apos;,
        &apos;Customer journey sentiment mapping&apos;,
        &apos;Integration with CRM and support tools&apos;
      ],
      pricing: &apos;$2,500 - $8,000/month&apos;,
      delivery: &apos;3-5 weeks&apos;,
      category: &apos;Sentiment AI&apos;
    },
    {
      title: &apos;AI-Powered Code Generation&apos;,
      description: &apos;Intelligent code generation and software development assistance&apos;,
      icon: Code,
      features: [
        &apos;Automated code generation from specifications&apos;,
        &apos;Code review and optimization suggestions&apos;,
        &apos;Bug detection and fixing recommendations&apos;,
        &apos;Documentation generation&apos;,
        &apos;Test case generation and validation&apos;,
        &apos;Integration with development workflows&apos;
      ],
      pricing: &apos;$4,000 - $15,000/month&apos;,
      delivery: &apos;6-10 weeks&apos;,
      category: &apos;Development AI&apos;
    },
    {
      title: &apos;AI-Powered Market Research&apos;,
      description: &apos;Intelligent market analysis and competitive intelligence platform&apos;,
      icon: BarChart3,
      features: [
        &apos;Automated market trend analysis&apos;,
        &apos;Competitor monitoring and analysis&apos;,
        &apos;Consumer behavior insights&apos;,
        &apos;Price optimization recommendations&apos;,
        &apos;Market opportunity identification&apos;,
        &apos;Real-time market intelligence reports&apos;
      ],
      pricing: &apos;$5,000 - $18,000/month&apos;,
      delivery: &apos;6-12 weeks&apos;,
      category: &apos;Market AI&apos;
    }
  ];

  const aiTechnologies = [
    { name: &apos;Machine Learning&apos;, icon: Brain, description: &apos;Custom ML models and algorithms&apos; },
    { name: &apos;Natural Language Processing&apos;, icon: MessageSquare, description: &apos;Text analysis and generation&apos; },
    { name: &apos;Computer Vision&apos;, icon: Eye, description: &apos;Image and video processing&apos; },
    { name: &apos;Deep Learning&apos;, icon: Cpu, description: &apos;Neural networks and deep architectures&apos; },
    { name: &apos;Reinforcement Learning&apos;, icon: Target, description: &apos;Autonomous decision making&apos; },
    { name: &apos;Generative AI&apos;, icon: FileText, description: &apos;Content creation and synthesis&apos; }
  ];

  const benefits = [
    {
      title: &apos;Increased Efficiency&apos;,
      description: &apos;Automate repetitive tasks and processes&apos;,
      icon: Zap,
      stat: &apos;80%&apos;
    },
    {
      title: &apos;Cost Reduction&apos;,
      description: &apos;Reduce operational costs through automation&apos;,
      icon: TrendingUp,
      stat: &apos;60%&apos;
    },
    {
      title: &apos;Enhanced Accuracy&apos;,
      description: &apos;Minimize human errors with AI precision&apos;,
      icon: Target,
      stat: &apos;95%&apos;
    },
    {
      title: &apos;24/7 Availability&apos;,
      description: &apos;Round-the-clock AI-powered services&apos;,
      icon: Clock,
      stat: &apos;99.9%&apos;
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name=&quot;description&quot; content={description} />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-services&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-3xl text-center&quot;>
            <div className=&quot;flex items-center justify-center mb-6&quot;>
              <Brain className=&quot;h-12 w-12 text-blue-600 mr-4&quot; />
              <Award className=&quot;h-6 w-6 text-blue-600 mr-2&quot; />
              <span className=&quot;text-base font-semibold leading-7 text-blue-600&quot;>AI Services</span>
            </div>
            <h1 className=&quot;text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl&quot;>
              Artificial Intelligence Solutions
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Transform your business with cutting-edge AI technologies. From machine learning to natural language processing, 
              we deliver intelligent solutions that drive growth and efficiency.
            </p>
            <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600&quot;
              >
                Get Started
                <ArrowRight className=&quot;ml-2 h-4 w-4 inline&quot; />
              </Link>
              <Link
                href=&quot;/pricing-guide&quot;
                className=&quot;text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600&quot;
              >
                View Pricing <span aria-hidden=&quot;true&quot;>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=&quot;py-24 sm:py-32 bg-white&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Why Choose Our AI Services?
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Proven results and measurable impact for your business
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-4&quot;>
                  <benefit.icon className=&quot;h-8 w-8 text-blue-600&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-gray-900 mb-2&quot;>{benefit.stat}</h3>
                <h4 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{benefit.title}</h4>
                <p className=&quot;text-gray-600&quot;>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className=&quot;py-24 sm:py-32 bg-gray-50&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              AI Technologies We Master
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Cutting-edge AI technologies powering the future of business
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {aiTechnologies.map((tech, index) => (
              <div key={index} className=&quot;bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow&quot;>
                <div className=&quot;flex items-center mb-4&quot;>
                  <div className=&quot;flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100&quot;>
                    <tech.icon className=&quot;h-6 w-6 text-blue-600&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-gray-900 ml-4&quot;>{tech.name}</h3>
                </div>
                <p className=&quot;text-gray-600&quot;>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className=&quot;py-24 sm:py-32 bg-white&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Our AI Service Portfolio
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Comprehensive AI solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{&apos; &apos;}
              <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-blue-600 hover:text-blue-500&quot;>
                kleber@ziontechgroup.com
              </Link>{&apos; &apos;}
              or call{&apos; &apos;}
              <a href=&quot;tel:+13024640950&quot; className=&quot;text-blue-600 hover:text-blue-500&quot;>
                +1 302 464 0950
              </Link>{&apos; &apos;}
              for custom pricing.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 lg:grid-cols-2&quot;>
            {aiServices.map((service, index) => (
              <div key={index} className=&quot;group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300&quot;>
                <div className=&quot;flex items-center gap-x-3 mb-6&quot;>
                  <div className=&quot;flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors&quot;>
                    <service.icon className=&quot;h-7 w-7 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-xl font-semibold text-gray-900&quot;>{service.title}</h3>
                    <p className=&quot;text-sm text-blue-600 font-medium&quot;>{service.category}</p>
                  </div>
                </div>
                <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center gap-x-3&quot;>
                      <CheckCircle className=&quot;h-4 w-4 text-blue-600 flex-shrink-0&quot; />
                      <span className=&quot;text-sm text-gray-700&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className=&quot;flex items-center justify-between&quot;>
                  <div className=&quot;flex items-center space-x-4 text-sm text-gray-500&quot;>
                    <div className=&quot;flex items-center space-x-1&quot;>
                      <Clock className=&quot;h-4 w-4&quot; />
                      <span>{service.delivery}</span>
                    </div>
                    <div className=&quot;font-semibold text-blue-600&quot;>{service.pricing}</div>
                  </div>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group&quot;
                  >
                    Get Started
                    <ArrowRight className=&quot;ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform&quot; />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;bg-blue-600 py-16 sm:py-24&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
              Ready to Transform Your Business with AI?
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-blue-100&quot;>
              Let&apos;s discuss how our AI solutions can drive your business forward. 
              Get a free consultation and custom proposal.
            </p>
            <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white&quot;
              >
                Schedule Consultation
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;text-sm font-semibold leading-6 text-white hover:text-blue-100&quot;
              >
                Call +1 302 464 0950 <span aria-hidden=&quot;true&quot;>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}