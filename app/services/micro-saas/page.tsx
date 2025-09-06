<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including AI-powered tools, productivity apps, business automation, and revenue-generating solutions. From MVP to enterprise scale.',
export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
};
import React from 'react';
import Link from 'next/link';

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ChartBarIcon, 
  CogIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group - Custom SaaS Development',
  description: 'Build scalable micro SaaS products that solve specific business challenges. Custom web applications, APIs, and cloud-native solutions.',
  keywords: 'micro SaaS, SaaS development, custom web applications, API development, cloud solutions, software as a service',
};

<<<<<<< HEAD
const microSaasServices = [
  {
    name: 'AI-Powered Business Tools',
    description: 'Intelligent micro SaaS applications that automate specific business processes using AI and machine learning.',
    icon: CpuChipIcon,
    features: [
      'AI-powered automation',
      'Custom machine learning models',
      'Real-time data processing',
      'Intelligent decision making',
      'Scalable cloud architecture',
      'API-first design'
    ],
    pricing: '$25,000 - $100,000',
    timeline: '8-16 weeks',
    examples: ['AI Content Generator', 'Smart Analytics Dashboard', 'Automated Report Builder', 'Intelligent CRM'],
    href: '/services/ai-powered-tools'
  },
  {
    name: 'Productivity & Collaboration Tools',
    description: 'Specialized tools that enhance team productivity and streamline collaboration workflows.',
    icon: UserGroupIcon,
    features: [
      'Real-time collaboration',
      'Task management systems',
      'Document sharing and editing',
      'Team communication tools',
      'Project tracking',
      'Integration capabilities'
    ],
    pricing: '$15,000 - $60,000',
    timeline: '6-12 weeks',
    examples: ['Team Workspace', 'Project Management Hub', 'Document Collaboration', 'Meeting Scheduler'],
    href: '/services/productivity-tools'
  },
  {
    name: 'E-commerce & Marketplace Solutions',
    description: 'Custom e-commerce platforms and marketplace solutions tailored to specific industries or niches.',
    icon: CurrencyDollarIcon,
    features: [
      'Custom shopping experiences',
      'Payment processing integration',
      'Inventory management',
      'Order tracking systems',
      'Multi-vendor support',
      'Mobile-responsive design'
    ],
    pricing: '$30,000 - $120,000',
    timeline: '10-20 weeks',
    examples: ['Niche Marketplace', 'B2B E-commerce', 'Subscription Platform', 'Auction Site'],
    href: '/services/ecommerce-solutions'
  },
  {
    name: 'Data Analytics & Visualization Tools',
    description: 'Specialized analytics platforms that transform complex data into actionable business insights.',
    icon: ChartBarIcon,
    features: [
      'Custom dashboards',
      'Real-time data visualization',
      'Advanced analytics',
      'Report generation',
      'Data export capabilities',
      'Interactive charts and graphs'
    ],
    pricing: '$20,000 - $80,000',
    timeline: '8-16 weeks',
    examples: ['Business Intelligence Tool', 'Sales Analytics Platform', 'Performance Dashboard', 'Custom Reports'],
    href: '/services/analytics-tools'
  },
  {
    name: 'Automation & Workflow Tools',
    description: 'Intelligent automation platforms that streamline business processes and reduce manual work.',
    icon: CogIcon,
    features: [
      'Workflow automation',
      'Integration with existing systems',
      'Custom triggers and actions',
      'Error handling and logging',
      'Scalable processing',
      'User-friendly interface'
    ],
    pricing: '$18,000 - $70,000',
    timeline: '6-14 weeks',
    examples: ['Email Automation', 'Data Processing Tool', 'Invoice Automation', 'Lead Management'],
    href: '/services/automation-tools'
  },
  {
    name: 'Industry-Specific Solutions',
    description: 'Tailored micro SaaS applications designed for specific industries and use cases.',
    icon: DocumentTextIcon,
    features: [
      'Industry-specific features',
      'Compliance and security',
      'Custom integrations',
      'Specialized workflows',
      'Regulatory compliance',
      'Expert domain knowledge'
    ],
    pricing: '$35,000 - $150,000',
    timeline: '12-24 weeks',
    examples: ['Healthcare Management', 'Legal Case Management', 'Real Estate Platform', 'Educational Tools'],
    href: '/services/industry-solutions'
  }
];

const techStack = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Material-UI'],
    description: 'Modern, responsive user interfaces'
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Go', 'Rust', 'PostgreSQL', 'MongoDB'],
    description: 'Scalable, high-performance backends'
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    description: 'Cloud-native, scalable infrastructure'
  },
  {
    category: 'AI & ML',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face', 'Pinecone'],
    description: 'Intelligent, AI-powered features'
  }
];

const developmentProcess = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business needs and define the perfect micro SaaS solution.',
    icon: RocketLaunchIcon
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Create user-friendly interfaces and scalable technical architecture.',
    icon: DocumentTextIcon
  },
  {
    step: '03',
    title: 'Development & Integration',
    description: 'Build your micro SaaS with modern technologies and seamless integrations.',
    icon: CpuChipIcon
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description: 'Rigorous testing and smooth deployment to production environments.',
    icon: ShieldCheckIcon
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'Go live with ongoing support, monitoring, and continuous improvements.',
    icon: CloudIcon
  }
];

const benefits = [
  {
    title: 'Rapid Time to Market',
    description: 'Get your micro SaaS to market quickly with our agile development process.',
    icon: '⚡'
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one with cloud-native design.',
    icon: '📈'
  },
  {
    title: 'Cost-Effective',
    description: 'Lower development costs compared to traditional enterprise software.',
    icon: '💰'
  },
  {
    title: 'Focused Solutions',
    description: 'Solve specific problems with targeted, purpose-built applications.',
    icon: '🎯'
  }
];

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Build focused, scalable micro SaaS products that solve specific business challenges. 
              From concept to launch, we deliver solutions that drive real value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Micro SaaS
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
=======
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From MVP to scale, we handle everything so you can focus on growth.
        </p>
      </section>

      <section className="py-12">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSCard
            title="AI-Powered Analytics Dashboard"
            description="Real-time business intelligence with AI insights and predictive analytics"
            features={["Custom dashboards", "AI-powered insights", "Real-time data", "Export capabilities", "Team collaboration"]}
            price="$2,999/month"
            icon="📊"
          />
          <MicroSaaSCard
            title="Automated Social Media Manager"
            description="AI-driven social media scheduling, content creation, and engagement optimization"
            features={["AI content generation", "Multi-platform posting", "Analytics & insights", "Auto-engagement", "Brand voice training"]}
            price="$1,999/month"
            icon="📱"
          />
          <MicroSaaSCard
            title="Smart Email Marketing Platform"
            description="Advanced email automation with AI personalization and behavioral triggers"
            features={["AI personalization", "Behavioral triggers", "A/B testing", "Advanced segmentation", "Deliverability optimization"]}
            price="$1,499/month"
            icon="📧"
          />
          <MicroSaaSCard
            title="Project Management AI Assistant"
            description="Intelligent project tracking with predictive timelines and resource optimization"
            features={["AI task prioritization", "Predictive timelines", "Resource optimization", "Risk assessment", "Team productivity insights"]}
            price="$2,499/month"
            icon="📋"
          />
          <MicroSaaSCard
            title="Customer Support Automation"
            description="AI-powered chatbot and ticket management with sentiment analysis"
            features={["AI chatbot", "Sentiment analysis", "Ticket routing", "Knowledge base", "Multi-language support"]}
            price="$1,799/month"
            icon="🤖"
          />
          <MicroSaaSCard
            title="Financial Analytics & Forecasting"
            description="AI-driven financial planning, budgeting, and cash flow forecasting"
            features={["AI forecasting", "Budget optimization", "Cash flow analysis", "Investment insights", "Risk assessment"]}
            price="$3,499/month"
            icon="💰"
          />
          <MicroSaaSCard
            title="AI Content Creation Suite"
            description="Complete content marketing automation with AI writing, SEO optimization, and multi-format generation"
            features={["AI blog writing", "SEO optimization", "Social media content", "Video scripts", "Email campaigns", "Content calendar"]}
            price="$2,299/month"
            icon="✍️"
          />
          <MicroSaaSCard
            title="Smart Inventory Management"
            description="AI-powered inventory optimization with demand forecasting and automated reordering"
            features={["Demand forecasting", "Auto reordering", "Stock optimization", "Supplier management", "Cost analysis", "Multi-location sync"]}
            price="$1,899/month"
            icon="📦"
          />
          <MicroSaaSCard
            title="Lead Generation & CRM Automation"
            description="Intelligent lead scoring, nurturing, and conversion optimization with AI insights"
            features={["Lead scoring", "Auto-nurturing", "CRM integration", "Conversion tracking", "Pipeline analytics", "Follow-up automation"]}
            price="$2,199/month"
            icon="🎯"
          />
          <MicroSaaSCard
            title="AI-Powered HR Management"
            description="Complete HR automation with AI recruitment, performance tracking, and employee engagement"
            features={["AI resume screening", "Interview scheduling", "Performance analytics", "Employee surveys", "Compliance tracking", "Benefits management"]}
            price="$2,799/month"
            icon="👥"
          />
          <MicroSaaSCard
            title="Smart Document Processing"
            description="AI-powered document analysis, extraction, and workflow automation for business documents"
            features={["Document OCR", "Data extraction", "Contract analysis", "Compliance checking", "Workflow automation", "Version control"]}
            price="$1,599/month"
            icon="📄"
          />
          <MicroSaaSCard
            title="AI Sales Forecasting Platform"
            description="Advanced sales prediction and pipeline management with AI-driven insights and recommendations"
            features={["Sales forecasting", "Pipeline analysis", "Deal scoring", "Revenue prediction", "Market trends", "Performance optimization"]}
            price="$2,399/month"
            icon="📈"
          />
          <MicroSaaSCard
            title="Automated Customer Feedback System"
            description="AI-powered feedback collection, analysis, and action planning for customer experience optimization"
            features={["Multi-channel feedback", "Sentiment analysis", "Trend identification", "Action recommendations", "ROI tracking", "Competitor analysis"]}
            price="$1,299/month"
            icon="💬"
          />
          <MicroSaaSCard
            title="Smart Expense Management"
            description="AI-driven expense tracking, categorization, and approval workflows for businesses"
            features={["Receipt scanning", "Auto-categorization", "Policy compliance", "Approval workflows", "Budget tracking", "Tax preparation"]}
            price="$999/month"
            icon="💳"
          />
          <MicroSaaSCard
            title="AI Website Optimization Suite"
            description="Complete website performance optimization with AI testing, personalization, and conversion enhancement"
            features={["A/B testing", "Personalization", "Speed optimization", "SEO enhancement", "Conversion tracking", "User behavior analysis"]}
            price="$1,799/month"
            icon="🌐"
          />
          <MicroSaaSCard
            title="Automated Meeting Scheduler"
            description="AI-powered scheduling with timezone management, conflict resolution, and meeting optimization"
            features={["Smart scheduling", "Timezone handling", "Conflict resolution", "Meeting prep", "Follow-up automation", "Calendar integration"]}
            price="$799/month"
            icon="📅"
          />
          <MicroSaaSCard
            title="AI-Powered Learning Management"
            description="Intelligent training platform with personalized learning paths and progress tracking"
            features={["Personalized courses", "Progress tracking", "Skill assessment", "Certification management", "Content creation", "Analytics dashboard"]}
            price="$2,599/month"
            icon="🎓"
          />
          <MicroSaaSCard
            title="Smart Contract Management"
            description="AI-powered contract lifecycle management with risk assessment and compliance monitoring"
            features={["Contract analysis", "Risk assessment", "Renewal tracking", "Compliance monitoring", "Template library", "Digital signatures"]}
            price="$2,199/month"
            icon="📋"
          />
          <MicroSaaSCard
            title="AI Data Quality Platform"
            description="Automated data cleaning, validation, and quality monitoring for business intelligence"
            features={["Data validation", "Duplicate detection", "Quality scoring", "Auto-correction", "Monitoring alerts", "Compliance reporting"]}
            price="$1,499/month"
            icon="🔍"
          />
          <MicroSaaSCard
            title="Intelligent Backup & Recovery"
            description="AI-powered data backup with intelligent scheduling, compression, and disaster recovery planning"
            features={["Smart scheduling", "Data compression", "Incremental backups", "Recovery testing", "Compliance reporting", "Multi-cloud support"]}
            price="$1,199/month"
            icon="💾"
          />
          <MicroSaaSCard
            title="AI-Powered SEO Suite"
            description="Complete SEO automation with AI keyword research, content optimization, and ranking tracking"
            features={["AI keyword research", "Content optimization", "Ranking tracking", "Competitor analysis", "Technical SEO audit", "Link building automation"]}
            price="$1,899/month"
            icon="🔍"
          />
          <MicroSaaSCard
            title="Smart Invoice & Billing Platform"
            description="Automated invoicing with AI-powered payment reminders, expense tracking, and financial reporting"
            features={["Auto invoicing", "Payment reminders", "Expense tracking", "Tax calculations", "Financial reports", "Multi-currency support"]}
            price="$1,399/month"
            icon="🧾"
          />
          <MicroSaaSCard
            title="AI Customer Onboarding Automation"
            description="Intelligent customer onboarding with personalized journeys and automated follow-ups"
            features={["Personalized journeys", "Progress tracking", "Auto follow-ups", "Success metrics", "A/B testing", "Integration APIs"]}
            price="$1,599/month"
            icon="🚀"
          />
          <MicroSaaSCard
            title="Smart Time Tracking & Productivity"
            description="AI-powered time tracking with productivity insights and automated reporting"
            features={["Auto time tracking", "Productivity insights", "Project billing", "Team analytics", "Distraction blocking", "Goal tracking"]}
            price="$1,299/month"
            icon="⏰"
          />
          <MicroSaaSCard
            title="AI-Powered Survey & Feedback Platform"
            description="Intelligent survey creation with AI analysis and actionable insights"
            features={["AI survey creation", "Sentiment analysis", "Response analytics", "Action recommendations", "Integration APIs", "Custom dashboards"]}
            price="$1,199/month"
            icon="📝"
          />
          <MicroSaaSCard
            title="Smart Password & Security Manager"
            description="Enterprise-grade password management with AI security monitoring and breach detection"
            features={["Password generation", "Security monitoring", "Breach detection", "Team sharing", "Compliance reporting", "SSO integration"]}
            price="$999/month"
            icon="🔐"
          />
          <MicroSaaSCard
            title="AI-Powered Translation Platform"
            description="Real-time translation with AI context understanding and cultural adaptation"
            features={["Real-time translation", "Context understanding", "Cultural adaptation", "Document translation", "API integration", "Quality scoring"]}
            price="$1,499/month"
            icon="🌍"
          />
          <MicroSaaSCard
            title="Smart Appointment Booking System"
            description="AI-powered scheduling with conflict resolution and customer preference learning"
            features={["Smart scheduling", "Conflict resolution", "Preference learning", "Calendar sync", "Reminder automation", "Payment integration"]}
            price="$899/month"
            icon="📅"
          />
          <MicroSaaSCard
            title="AI-Powered Video Analytics"
            description="Video content analysis with AI insights, engagement tracking, and optimization recommendations"
            features={["Content analysis", "Engagement tracking", "Optimization tips", "Thumbnail generation", "Trend analysis", "Performance metrics"]}
            price="$2,199/month"
            icon="🎥"
          />
          <MicroSaaSCard
            title="Smart Inventory Forecasting"
            description="AI-driven demand prediction with automated reordering and supplier management"
            features={["Demand forecasting", "Auto reordering", "Supplier management", "Cost optimization", "Seasonal analysis", "Multi-location sync"]}
            price="$1,799/month"
            icon="📦"
          />
          <MicroSaaSCard
            title="AI-Powered Email Signature Manager"
            description="Dynamic email signatures with AI personalization and compliance management"
            features={["Dynamic signatures", "AI personalization", "Compliance tracking", "Brand consistency", "Team management", "Analytics dashboard"]}
            price="$599/month"
            icon="✍️"
          />
          <MicroSaaSCard
            title="Smart Meeting Transcription & Notes"
            description="AI-powered meeting transcription with action item extraction and follow-up automation"
            features={["Live transcription", "Action extraction", "Follow-up automation", "Meeting summaries", "Search functionality", "Integration APIs"]}
            price="$1,399/month"
            icon="🎤"
          />
          <MicroSaaSCard
            title="AI-Powered Lead Scoring Platform"
            description="Intelligent lead qualification with behavioral analysis and conversion prediction"
            features={["Behavioral analysis", "Conversion prediction", "Lead scoring", "CRM integration", "A/B testing", "Performance analytics"]}
            price="$1,699/month"
            icon="🎯"
          />
          <MicroSaaSCard
            title="Smart Contract Template Generator"
            description="AI-powered contract creation with legal compliance and risk assessment"
            features={["Template generation", "Legal compliance", "Risk assessment", "Version control", "Digital signatures", "Approval workflows"]}
            price="$1,999/month"
            icon="📋"
          />
          <MicroSaaSCard
            title="AI-Powered A/B Testing Platform"
            description="Intelligent experimentation with AI-powered test design and statistical analysis"
            features={["Test design", "Statistical analysis", "Winner selection", "Segmentation", "Multivariate testing", "Performance tracking"]}
            price="$1,499/month"
            icon="🧪"
          />
          <MicroSaaSCard
            title="Smart Employee Scheduling"
            description="AI-powered workforce management with shift optimization and compliance tracking"
            features={["Shift optimization", "Compliance tracking", "Employee preferences", "Overtime management", "Skills matching", "Mobile app"]}
            price="$1,799/month"
            icon="👥"
          />
          <MicroSaaSCard
            title="AI-Powered Price Optimization"
            description="Dynamic pricing with AI market analysis and competitor monitoring"
            features={["Market analysis", "Competitor monitoring", "Price optimization", "Demand forecasting", "A/B testing", "Revenue tracking"]}
            price="$2,499/month"
            icon="💰"
          />
          <MicroSaaSCard
            title="Smart Document Collaboration"
            description="AI-powered document editing with real-time collaboration and version control"
            features={["Real-time editing", "Version control", "AI suggestions", "Comment system", "Approval workflows", "Integration APIs"]}
            price="$1,299/month"
            icon="📄"
          />
          <MicroSaaSCard
            title="AI-Powered Customer Churn Prediction"
            description="Predictive analytics for customer retention with automated intervention strategies"
            features={["Churn prediction", "Risk scoring", "Intervention strategies", "Retention campaigns", "Success tracking", "ROI analysis"]}
            price="$1,899/month"
            icon="📉"
          />
=======
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
            From MVP to scale, we handle everything so you can focus on growing your business.
          </p>
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Development Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Core Features" 
            details={[
              "Multi-tenant architecture with data isolation",
              "Advanced authentication (OAuth, SSO, MFA)",
              "Stripe billing with subscription management",
              "Real-time admin dashboard & analytics",
              "Progressive web app (PWA) capabilities",
              "API-first architecture with webhooks"
            ]} 
          />
          <Item 
            title="Growth & Marketing" 
            details={[
              "SEO-optimized marketing website",
              "Content management system (CMS)",
              "Email marketing automation",
              "Referral & affiliate program",
              "A/B testing framework",
              "Conversion tracking & analytics"
            ]} 
          />
          <Item 
            title="Operations & Reliability" 
            details={[
              "CI/CD pipeline with automated testing",
              "Comprehensive monitoring & alerting",
              "Error tracking & performance metrics",
              "Automated backups & disaster recovery",
              "Security hardening & compliance",
              "24/7 uptime monitoring"
            ]} 
          />
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceCard 
            title="Product Engineering" 
            details={[
              "Multi-tenant architecture",
              "User authentication & authorization", 
              "Stripe billing integration",
              "Admin dashboard & analytics",
              "In-app onboarding flows",
              "API development & documentation"
            ]} 
            icon="⚙️"
          />
          <ServiceCard 
            title="Growth & Marketing" 
            details={[
              "SEO-optimized marketing site",
              "Content management system",
              "Email marketing automation",
              "Referral & affiliate systems",
              "A/B testing framework",
              "Conversion optimization"
            ]} 
            icon="📈"
          />
          <ServiceCard 
            title="Operations & Reliability" 
            details={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Error tracking & alerting",
              "Performance optimization",
              "Security hardening",
              "Backup & disaster recovery"
            ]} 
            icon="🔧"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Ready-to-Deploy Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              title="AI-Powered Analytics Dashboard"
              description="Real-time business intelligence with custom metrics, automated reporting, and predictive insights."
              features={[
                "Custom KPI tracking",
                "Automated report generation",
                "Predictive analytics",
                "White-label branding"
              ]}
              pricing="Starting at $15,000"
            />
            <SolutionCard
              title="Customer Support Automation"
              description="Intelligent ticketing system with AI-powered responses and multi-channel support."
              features={[
                "AI chatbot integration",
                "Multi-channel support",
                "Automated ticket routing",
                "Performance analytics"
              ]}
              pricing="Starting at $12,000"
            />
            <SolutionCard
              title="Project Management Suite"
              description="Complete project management with time tracking, resource allocation, and team collaboration."
              features={[
                "Task & milestone tracking",
                "Time & resource management",
                "Team collaboration tools",
                "Client portal access"
              ]}
              pricing="Starting at $18,000"
            />
            <SolutionCard
              title="E-commerce Analytics Platform"
              description="Advanced e-commerce analytics with conversion tracking, customer insights, and revenue optimization."
              features={[
                "Conversion funnel analysis",
                "Customer behavior tracking",
                "Revenue optimization",
                "Inventory management"
              ]}
              pricing="Starting at $20,000"
            />
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
          </div>
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
        </div>
<<<<<<< HEAD
      </div>

      {/* Micro SaaS Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized micro SaaS applications designed to solve specific business problems with modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.pricing}</div>
                      <div className="text-sm opacity-90">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-purple-100 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Example Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((example, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center w-full justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
=======
      </section>

<<<<<<< HEAD
      <Pricing />
      <ContactSection />
    </div>
  );
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "Core MVP features",
            "Stripe billing integration", 
            "Basic analytics dashboard",
            "User authentication",
            "Admin panel",
            "Mobile responsive design"
          ]} 
        />
        <Plan 
          name="Growth Ready" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={[
            "Full feature set",
            "SEO-optimized marketing site",
            "Email marketing automation",
            "Advanced analytics",
            "API documentation",
            "Performance optimization"
          ]} 
        />
        <Plan 
          name="Enterprise Scale" 
          price="$60k+" 
          duration="12+ weeks"
          features={[
            "Custom enterprise features",
            "Advanced security & compliance",
            "Multi-region deployment",
            "24/7 monitoring & support",
            "SLA guarantees",
            "Dedicated success manager"
          ]} 
        />
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function ProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function BenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          features={["2–4 weeks", "MVP scope", "Stripe billing", "Basic analytics", "Hosting setup"]} 
          popular={false}
        />
        <Plan 
          name="Growth" 
          price="$20k–$60k" 
          features={["6–10 weeks", "SEO + content", "CRM + email", "Observability", "Advanced features"]} 
          popular={true}
        />
        <Plan 
          name="Scale" 
          price="$60k+" 
          features={["Custom roadmap", "SRE + security", "Multi-region", "SLAs", "Dedicated support"]} 
          popular={false}
        />
      </div>
    </section>
  );
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Quote Request - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

interface ServiceFeatureProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

function ServiceFeature({ icon, title, description, benefits }: ServiceFeatureProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
export const metadata = { title: 'Micro SaaS Development | Zion Tech Group' } export default /**
 * MicroSaaSPage - Function description
 */
function MicroSaaSPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>Micro SaaS Development</h1> <p style={{margin_top: 8, color: '#374151'}}>We design, build, launch and operate revenue - generating micro SaaS products end - to - end.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Core features" details={["Multi - tenant architecture", "Auth (email, OAuth)", "Billing (Stripe)", "Admin + analytics", "In - app onboarding"]} /> <Item title="Growth stack" details={["SEO - ready marketing site", "Blog + docs", "Email campaigns", "Referral + affiliates"]} /> <Item title="Ops & reliability" details={["CI / CD", "Observability", "Error budgets", "SLOs", "On - call setup"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="MVP Sprint" price="$8k–$20k" features={["2–4 weeks", "MVP scope", "Stripe billing", "Basic analytics"]} /> <Plan name="Growth" price="$20k–$60k" features={["6–10 weeks", "SEO + content", "CRM + email", "Observability"]} /> <Plan name="Scale" price="$60k+" features={["Custom roadmap", "SRE + security", "Multi - region", "SLAs"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}

export default function MicroSaaSPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Micro SaaS Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete micro SaaS development from concept to scale. We build, deploy, and optimize 
          your SaaS product with billing, authentication, analytics, and growth features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
=======
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Plan
              name="MVP Sprint"
              price="$8k–$20k"
              features={[
                "2–4 weeks development",
                "Core features only",
                "Basic Stripe integration",
                "Simple analytics",
                "Email support"
              ]}
            />
            <Plan
              name="Growth"
              price="$20k–$60k"
              features={[
                "6–10 weeks development",
                "Full feature set",
                "Advanced analytics",
                "SEO optimization",
                "Priority support",
                "3 months maintenance"
              ]}
              popular={true}
            />
            <Plan
              name="Scale"
              price="$60k+"
              features={[
                "Custom roadmap",
                "Enterprise features",
                "Advanced security",
                "Multi-region deployment",
                "Dedicated support",
                "12 months maintenance"
              ]}
            />
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, scalable, and maintainable micro SaaS applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack) => (
              <div key={stack.category} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                <p className="text-gray-600 mb-4">{stack.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Micro SaaS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Micro SaaS offers unique advantages for businesses looking to solve specific problems efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful micro SaaS products on time and on budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 text-xl font-bold">
                    {step.step}
                  </div>
                  {index < developmentProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <div className="inline-flex p-3 rounded-full bg-gray-100 mb-4">
                  <step.icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Micro SaaS?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's turn your idea into a successful micro SaaS product. Our team has built 200+ 
            micro SaaS applications that serve thousands of users worldwide.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
=======
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
          >
            Start Your SaaS - $2,999/month
          </a>
<<<<<<< HEAD
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      {/* Micro SaaS Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSAASCard
            title="AI Code Assistant"
            description="Intelligent code generation, debugging, and optimization powered by advanced AI."
            href="/services/ai-code-assistant"
            icon="🤖"
            pricing="From $99/month"
            features={["Code generation", "Bug detection", "Performance optimization", "Learning assistance"]}
            category="Developer Tools"
          />
          <MicroSAASCard
            title="AI Social Scheduler"
            description="Intelligent social media scheduling with AI-powered content generation and optimal timing."
            href="/services/ai-social-scheduler"
            icon="📱"
            pricing="From $49/month"
            features={["Content generation", "Optimal timing", "Performance analytics", "Cross-platform management"]}
            category="Social Media"
          />
          <MicroSAASCard
            title="AI Project Manager"
            description="Intelligent project management with AI-powered task automation and predictive analytics."
            href="/services/ai-project-manager"
            icon="📊"
            pricing="From $199/month"
            features={["Task automation", "Predictive analytics", "Team optimization", "Smart scheduling"]}
            category="Project Management"
          />
          <MicroSAASCard
            title="AI Customer Support"
            description="Intelligent customer support automation with AI chatbots and sentiment analysis."
            href="/services/ai-customer-support"
            icon="💬"
            pricing="From $299/month"
            features={["AI chatbots", "Sentiment analysis", "Multilingual support", "Smart routing"]}
            category="Customer Support"
          />
          <MicroSAASCard
            title="AI Data Analytics"
            description="Advanced AI-powered data analytics with predictive modeling and real-time insights."
            href="/services/ai-data-analytics"
            icon="📈"
            pricing="From $399/month"
            features={["Predictive analytics", "Real-time dashboards", "Automated insights", "Natural language queries"]}
            category="Analytics"
          />
          <MicroSAASCard
            title="AI Content Generator"
            description="AI-powered content creation for blogs, marketing materials, and social media posts."
            href="/services/ai-content-generator"
            icon="✍️"
            pricing="From $149/month"
            features={["Blog writing", "Marketing copy", "Social media posts", "SEO optimization"]}
            category="Content Creation"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your SaaS Product?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 500+ successful SaaS founders who built their products with Zion Tech Group.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-green-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
=======
        </section>
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
      </section>
    </div>
  );
}
<<<<<<< HEAD
}
=======

function ServiceCard({ title, details, icon }: { 
  title: string; 
  details: string[]; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            {detail}
          </li>
        ))}
      </ul>
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
        </div>
      </div>
    </div>
  );
}
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
