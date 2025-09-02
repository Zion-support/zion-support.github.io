import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import {
  Code,
  Cloud,
  Zap,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Database,
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  TrendingUp,
  Target,
  FileText,
  MessageSquare,
  Eye,
  Brain,
  Mail,
  Phone,
  MapPin,
  Monitor,
  Server,
  Lock,
  Cpu,
  Network,
  Terminal,
  Calendar
} from &apos;lucide-react&apos;;
import PageTransition from &apos;../src/components/PageTransition&apos;;

export default function MicroSaaS() {
  const title = &apos;Micro SaaS Solutions — Zion Tech Group&apos;;
  const description = &apos;Custom micro SaaS applications and software solutions tailored to your business needs. Scalable, secure, and innovative.&apos;;

  const microSaaSServices = [
    {
      title: &apos;AI-Powered Email Responder&apos;,
      description: &apos;Intelligent email automation with sentiment analysis and smart categorization&apos;,
      icon: MessageSquare,
      features: [
        &apos;Automated email responses with personalization&apos;,
        &apos;Smart categorization and priority handling&apos;,
        &apos;Sentiment analysis and escalation triggers&apos;,
        &apos;CRM and helpdesk integration&apos;,
        &apos;Multi-language support and compliance&apos;,
        &apos;Analytics and performance tracking&apos;
      ],
      pricing: &apos;$2,500 - $8,000/month&apos;,
      delivery: &apos;2-3 weeks&apos;,
      category: &apos;Communication SaaS&apos;
    },
    {
      title: &apos;Mobile-First Survey Platform&apos;,
      description: &apos;Responsive survey tool optimized for mobile devices with real-time analytics&apos;,
      icon: Smartphone,
      features: [
        &apos;Mobile-optimized survey creation&apos;,
        &apos;Real-time response analytics&apos;,
        &apos;Adaptive questioning and branching&apos;,
        &apos;Multi-channel distribution&apos;,
        &apos;Data export and integration&apos;,
        &apos;White-label customization&apos;
      ],
      pricing: &apos;$1,500 - $5,000/month&apos;,
      delivery: &apos;2-4 weeks&apos;,
      category: &apos;Survey SaaS&apos;
    },
    {
      title: &apos;Niche Productivity Planner&apos;,
      description: &apos;Industry-specific productivity tools with customized workflows and templates&apos;,
      icon: Target,
      features: [
        &apos;Industry-specific templates and workflows&apos;,
        &apos;Project management and task tracking&apos;,
        &apos;Team collaboration features&apos;,
        &apos;Performance analytics and reporting&apos;,
        &apos;Integration with popular tools&apos;,
        &apos;Custom branding and white-labeling&apos;
      ],
      pricing: &apos;$2,000 - $6,000/month&apos;,
      delivery: &apos;3-5 weeks&apos;,
      category: &apos;Productivity SaaS&apos;
    },
    {
      title: &apos;Event Management Dashboard&apos;,
      description: &apos;Comprehensive event planning and management platform with ticketing and analytics&apos;,
      icon: Calendar,
      features: [
        &apos;Event creation and management&apos;,
        &apos;Ticketing and registration system&apos;,
        &apos;Attendee engagement tools&apos;,
        &apos;Real-time analytics and reporting&apos;,
        &apos;Payment processing integration&apos;,
        &apos;Mobile app for attendees&apos;
      ],
      pricing: &apos;$3,000 - $10,000/month&apos;,
      delivery: &apos;4-6 weeks&apos;,
      category: &apos;Event SaaS&apos;
    },
    {
      title: &apos;AI Content Creation Suite&apos;,
      description: &apos;AI-powered content generation platform for marketing and documentation&apos;,
      icon: FileText,
      features: [
        &apos;Automated content generation&apos;,
        &apos;SEO optimization and keyword integration&apos;,
        &apos;Multi-format content creation&apos;,
        &apos;Brand voice consistency&apos;,
        &apos;Content scheduling and publishing&apos;,
        &apos;Performance analytics and optimization&apos;
      ],
      pricing: &apos;$2,500 - $8,000/month&apos;,
      delivery: &apos;3-5 weeks&apos;,
      category: &apos;Content SaaS&apos;
    },
    {
      title: &apos;Customer Support Platform&apos;,
      description: &apos;Comprehensive helpdesk solution with AI chatbots and ticket management&apos;,
      icon: Users,
      features: [
        &apos;Multi-channel ticket management&apos;,
        &apos;AI-powered chatbot integration&apos;,
        &apos;Knowledge base and FAQ system&apos;,
        &apos;Live chat and video support&apos;,
        &apos;Performance metrics and SLA tracking&apos;,
        &apos;Integration with CRM systems&apos;
      ],
      pricing: &apos;$2,000 - $7,000/month&apos;,
      delivery: &apos;3-4 weeks&apos;,
      category: &apos;Support SaaS&apos;
    },
    {
      title: &apos;AI Recruiting Platform&apos;,
      description: &apos;Intelligent recruitment system with automated screening and matching&apos;,
      icon: Brain,
      features: [
        &apos;Resume parsing and skill extraction&apos;,
        &apos;Automated candidate screening&apos;,
        &apos;Interview scheduling and management&apos;,
        &apos;Bias detection and elimination&apos;,
        &apos;Candidate matching algorithms&apos;,
        &apos;Analytics and reporting dashboard&apos;
      ],
      pricing: &apos;$4,000 - $15,000/month&apos;,
      delivery: &apos;5-8 weeks&apos;,
      category: &apos;HR SaaS&apos;
    },
    {
      title: &apos;Document Processing Automation&apos;,
      description: &apos;AI-powered document analysis and processing for business automation&apos;,
      icon: FileText,
      features: [
        &apos;Automated data extraction&apos;,
        &apos;Document classification and routing&apos;,
        &apos;OCR with high accuracy&apos;,
        &apos;Contract analysis and risk assessment&apos;,
        &apos;Compliance monitoring&apos;,
        &apos;Workflow automation&apos;
      ],
      pricing: &apos;$3,500 - $12,000/month&apos;,
      delivery: &apos;4-6 weeks&apos;,
      category: &apos;Document SaaS&apos;
    },
    {
      title: &apos;Analytics Dashboard Platform&apos;,
      description: &apos;Custom business intelligence and analytics platform with real-time insights&apos;,
      icon: BarChart3,
      features: [
        &apos;Real-time data visualization&apos;,
        &apos;Custom dashboard creation&apos;,
        &apos;Data integration and ETL&apos;,
        &apos;Predictive analytics and forecasting&apos;,
        &apos;Mobile-responsive design&apos;,
        &apos;API and third-party integrations&apos;
      ],
      pricing: &apos;$5,000 - $20,000/month&apos;,
      delivery: &apos;6-10 weeks&apos;,
      category: &apos;Analytics SaaS&apos;
    },
    {
      title: &apos;Workflow Automation Engine&apos;,
      description: &apos;No-code workflow automation platform for business process optimization&apos;,
      icon: Settings,
      features: [
        &apos;Visual workflow builder&apos;,
        &apos;API integrations and webhooks&apos;,
        &apos;Conditional logic and branching&apos;,
        &apos;Task automation and scheduling&apos;,
        &apos;User management and permissions&apos;,
        &apos;Audit trails and compliance&apos;
      ],
      pricing: &apos;$3,000 - $10,000/month&apos;,
      delivery: &apos;4-7 weeks&apos;,
      category: &apos;Automation SaaS&apos;
    },
    {
      title: &apos;AI-Powered E-commerce Return Manager&apos;,
      description: &apos;Intelligent return processing system with automated decision making and fraud detection&apos;,
      icon: ArrowRight,
      features: [
        &apos;Automated return request processing&apos;,
        &apos;AI-powered fraud detection and prevention&apos;,
        &apos;Smart return label generation&apos;,
        &apos;Real-time inventory updates&apos;,
        &apos;Customer satisfaction tracking&apos;,
        &apos;Analytics and reporting dashboard&apos;
      ],
      pricing: &apos;$1,500 - $5,000/month&apos;,
      delivery: &apos;3-5 weeks&apos;,
      category: &apos;E-commerce SaaS&apos;
    },
    {
      title: &apos;Smart Inventory Optimization Platform&apos;,
      description: &apos;AI-driven inventory management with demand forecasting and automated reordering&apos;,
      icon: BarChart3,
      features: [
        &apos;Demand forecasting with machine learning&apos;,
        &apos;Automated reorder point calculations&apos;,
        &apos;Multi-location inventory tracking&apos;,
        &apos;Supplier performance analytics&apos;,
        &apos;Cost optimization recommendations&apos;,
        &apos;Integration with ERP and POS systems&apos;
      ],
      pricing: &apos;$2,500 - $8,000/month&apos;,
      delivery: &apos;4-6 weeks&apos;,
      category: &apos;Inventory SaaS&apos;
    },
    {
      title: &apos;AI-Powered SEO Content Optimizer&apos;,
      description: &apos;Intelligent content optimization platform that enhances web page performance and rankings&apos;,
      icon: TrendingUp,
      features: [
        &apos;Real-time SEO analysis and recommendations&apos;,
        &apos;Content optimization suggestions&apos;,
        &apos;Keyword research and competitor analysis&apos;,
        &apos;Technical SEO audits and fixes&apos;,
        &apos;Performance tracking and reporting&apos;,
        &apos;Multi-language SEO support&apos;
      ],
      pricing: &apos;$199 - $799/month&apos;,
      delivery: &apos;1-2 weeks&apos;,
      category: &apos;SEO SaaS&apos;
    },
    {
      title: &apos;Intelligent Lead Scoring Platform&apos;,
      description: &apos;AI-powered lead qualification and scoring system with behavioral analysis&apos;,
      icon: Target,
      features: [
        &apos;Behavioral lead scoring algorithms&apos;,
        &apos;Multi-channel lead tracking&apos;,
        &apos;Automated lead qualification&apos;,
        &apos;CRM integration and synchronization&apos;,
        &apos;Predictive analytics and insights&apos;,
        &apos;Custom scoring model creation&apos;
      ],
      pricing: &apos;$299 - $1,200/month&apos;,
      delivery: &apos;2-4 weeks&apos;,
      category: &apos;Sales SaaS&apos;
    },
    {
      title: &apos;AI-Powered Social Media Manager&apos;,
      description: &apos;Comprehensive social media management with AI content creation and scheduling&apos;,
      icon: Globe,
      features: [
        &apos;AI-generated social media content&apos;,
        &apos;Optimal posting time recommendations&apos;,
        &apos;Hashtag research and optimization&apos;,
        &apos;Engagement analytics and insights&apos;,
        &apos;Multi-platform scheduling&apos;,
        &apos;Brand voice consistency monitoring&apos;
      ],
      pricing: &apos;$149 - $599/month&apos;,
      delivery: &apos;2-3 weeks&apos;,
      category: &apos;Social Media SaaS&apos;
    },
    {
      title: &apos;Smart Expense Management System&apos;,
      description: &apos;AI-powered expense tracking and approval workflow with receipt processing&apos;,
      icon: FileText,
      features: [
        &apos;Automated receipt scanning and processing&apos;,
        &apos;Expense categorization with AI&apos;,
        &apos;Approval workflow automation&apos;,
        &apos;Policy compliance checking&apos;,
        &apos;Real-time expense reporting&apos;,
        &apos;Integration with accounting software&apos;
      ],
      pricing: &apos;$99 - $399/month&apos;,
      delivery: &apos;2-3 weeks&apos;,
      category: &apos;Finance SaaS&apos;
    },
    {
      title: &apos;AI-Powered Customer Onboarding Platform&apos;,
      description: &apos;Intelligent customer onboarding with personalized journey mapping and automation&apos;,
      icon: Users,
      features: [
        &apos;Personalized onboarding workflows&apos;,
        &apos;Progress tracking and analytics&apos;,
        &apos;Automated email sequences&apos;,
        &apos;Interactive tutorials and guides&apos;,
        &apos;Success metrics and optimization&apos;,
        &apos;Integration with CRM and support tools&apos;
      ],
      pricing: &apos;$199 - $799/month&apos;,
      delivery: &apos;3-4 weeks&apos;,
      category: &apos;Customer Success SaaS&apos;
    },
    {
      title: &apos;Intelligent Meeting Scheduler&apos;,
      description: &apos;AI-powered meeting scheduling with time zone optimization and conflict resolution&apos;,
      icon: Calendar,
      features: [
        &apos;Smart time zone handling&apos;,
        &apos;Automatic conflict detection and resolution&apos;,
        &apos;Meeting room and resource booking&apos;,
        &apos;Calendar integration across platforms&apos;,
        &apos;Meeting preparation automation&apos;,
        &apos;Follow-up task generation&apos;
      ],
      pricing: &apos;$49 - $199/month&apos;,
      delivery: &apos;1-2 weeks&apos;,
      category: &apos;Productivity SaaS&apos;
    },
    {
      title: &apos;AI-Powered Code Review Assistant&apos;,
      description: &apos;Intelligent code analysis and review platform with automated quality checks&apos;,
      icon: Code,
      features: [
        &apos;Automated code quality analysis&apos;,
        &apos;Security vulnerability detection&apos;,
        &apos;Performance optimization suggestions&apos;,
        &apos;Code style and best practices enforcement&apos;,
        &apos;Integration with Git and CI/CD&apos;,
        &apos;Team collaboration and feedback tools&apos;
      ],
      pricing: &apos;$299 - $1,200/month&apos;,
      delivery: &apos;3-5 weeks&apos;,
      category: &apos;Development SaaS&apos;
    }
  ];

  const technologies = [
    { name: &apos;Frontend&apos;, icon: Monitor, description: &apos;React, Next.js, Vue.js, Angular&apos; },
    { name: &apos;Backend&apos;, icon: Server, description: &apos;Node.js, Python, Go, Java&apos; },
    { name: &apos;Database&apos;, icon: Database, description: &apos;PostgreSQL, MongoDB, Redis&apos; },
    { name: &apos;Cloud&apos;, icon: Cloud, description: &apos;AWS, Azure, GCP, DigitalOcean&apos; },
    { name: &apos;Security&apos;, icon: Shield, description: &apos;OAuth, JWT, SSL, Encryption&apos; },
    { name: &apos;Mobile&apos;, icon: Smartphone, description: &apos;React Native, Flutter, PWA&apos; }
  ];

  const benefits = [
    {
      title: &apos;Faster Development&apos;,
      description: &apos;Rapid prototyping and deployment&apos;,
      icon: Zap,
      stat: &apos;50%&apos;
    },
    {
      title: &apos;Cost Effective&apos;,
      description: &apos;Lower development and maintenance costs&apos;,
      icon: TrendingUp,
      stat: &apos;60%&apos;
    },
    {
      title: &apos;Scalable Solutions&apos;,
      description: &apos;Built to grow with your business&apos;,
      icon: Target,
      stat: &apos;Unlimited&apos;
    },
    {
      title: &apos;Custom Features&apos;,
      description: &apos;Tailored to your specific needs&apos;,
      icon: Settings,
      stat: &apos;100%&apos;
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name=&quot;description&quot; content={description} />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/micro-saas&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 sm:py-32&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-3xl text-center&quot;>
            <div className=&quot;flex items-center justify-center mb-6&quot;>
              <Code className=&quot;h-12 w-12 text-orange-600 mr-4&quot; />
              <Award className=&quot;h-6 w-6 text-orange-600 mr-2&quot; />
              <span className=&quot;text-base font-semibold leading-7 text-orange-600&quot;>Micro SaaS</span>
            </div>
            <h1 className=&quot;text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl&quot;>
              Micro SaaS Solutions
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Custom software solutions that solve specific business problems. From concept to deployment, 
              we build scalable micro SaaS applications tailored to your needs.
            </p>
            <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600&quot;
              >
                Get Started
                <ArrowRight className=&quot;ml-2 h-4 w-4 inline&quot; />
              </Link>
              <Link
                href=&quot;/pricing-guide&quot;
                className=&quot;text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600&quot;
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
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Proven expertise in building scalable, secure, and innovative software solutions
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4&quot;>
                  <benefit.icon className=&quot;h-8 w-8 text-orange-600&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-gray-900 mb-2&quot;>{benefit.stat}</h3>
                <h4 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{benefit.title}</h4>
                <p className=&quot;text-gray-600&quot;>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className=&quot;py-24 sm:py-32 bg-gray-50&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Technologies We Use
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Modern, proven technologies for building robust and scalable applications
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {technologies.map((tech, index) => (
              <div key={index} className=&quot;bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow&quot;>
                <div className=&quot;flex items-center mb-4&quot;>
                  <div className=&quot;flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100&quot;>
                    <tech.icon className=&quot;h-6 w-6 text-orange-600&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-gray-900 ml-4&quot;>{tech.name}</h3>
                </div>
                <p className=&quot;text-gray-600&quot;>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className=&quot;py-24 sm:py-32 bg-white&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Our Micro SaaS Portfolio
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Custom software solutions tailored to your business needs. All applications include design, 
              development, testing, and deployment. Contact us at{&apos; &apos;}
              <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-orange-600 hover:text-orange-500&quot;>
                kleber@ziontechgroup.com
              </Link>{&apos; &apos;}
              or call{&apos; &apos;}
              <a href=&quot;tel:+13024640950&quot; className=&quot;text-orange-600 hover:text-orange-500&quot;>
                +1 302 464 0950
              </Link>{&apos; &apos;}
              for custom pricing.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 lg:grid-cols-2&quot;>
            {microSaaSServices.map((service, index) => (
              <div key={index} className=&quot;group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300&quot;>
                <div className=&quot;flex items-center gap-x-3 mb-6&quot;>
                  <div className=&quot;flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors&quot;>
                    <service.icon className=&quot;h-7 w-7 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-xl font-semibold text-gray-900&quot;>{service.title}</h3>
                    <p className=&quot;text-sm text-orange-600 font-medium&quot;>{service.category}</p>
                  </div>
                </div>
                <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center gap-x-3&quot;>
                      <CheckCircle className=&quot;h-4 w-4 text-orange-600 flex-shrink-0&quot; />
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
                    <div className=&quot;font-semibold text-orange-600&quot;>{service.pricing}</div>
                  </div>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group&quot;
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

      {/* Development Process Section */}
      <section className=&quot;py-24 sm:py-32 bg-gray-50&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Our Development Process
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              A proven methodology for delivering high-quality software solutions
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-orange-600&quot;>1</span>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Discovery</h3>
              <p className=&quot;text-gray-600&quot;>Requirements gathering and project planning</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-orange-600&quot;>2</span>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Design</h3>
              <p className=&quot;text-gray-600&quot;>UI/UX design and system architecture</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-orange-600&quot;>3</span>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Development</h3>
              <p className=&quot;text-gray-600&quot;>Agile development with regular updates</p>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4&quot;>
                <span className=&quot;text-2xl font-bold text-orange-600&quot;>4</span>
              </div>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Deployment</h3>
              <p className=&quot;text-gray-600&quot;>Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;bg-orange-600 py-16 sm:py-24&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-white sm:text-4xl&quot;>
              Ready to Build Your Custom SaaS Solution?
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-orange-100&quot;>
              Let&apos;s discuss your requirements and create a custom solution that drives your business forward. 
              Get a free consultation and project estimate.
            </p>
            <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;rounded-md bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white&quot;
              >
                Start Your Project
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;text-sm font-semibold leading-6 text-white hover:text-orange-100&quot;
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