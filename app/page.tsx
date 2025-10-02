import React from 'react';
import Link from 'next/link';
import Ultimate2025ContentShowcaseBanner from '../components/Ultimate2025ContentShowcaseBanner';
import March2027QuantumSingularityBanner from '../components/March2027QuantumSingularityBanner';
import {
  NewBlogBanner,
  AnalyticsPlatformBanner,
  TechCorpSuccessBanner,
  WorkflowAutomationBanner,
  AIAnalyticsBanner,
  HealthTechSuccessBanner,
  ComprehensiveAIBanner,
  EnterpriseAIBanner,
  NewContentBanner,
  CustomerServiceAIBanner,
  HealthcareAIBanner,
  RetailSuccessBanner,
  AIContentShowcaseBanner,
  AIRevolutionBanner,
  AutonomousAgentsBanner,
  AIGovernanceBanner,
  FinTechSuccessBanner,
  NewContentShowcaseBanner,
  AIRoadmapsBanner,
  AIFinOpsBanner,
  AIMultimodalEnterpriseBanner,
  AIEnterpriseAutomationBanner,
  AIDataAnalyticsEnterpriseBanner,
  EnterpriseTransformationSuccessBanner,
  HealthcareTransformationBanner,
  NewContent2026Banner,
  AIAgentOrchestrationBanner,
  AISustainabilityBanner,
  QuantumComputingBanner,
  SustainabilityCaseStudyBanner,
  QuantumOptimizationBanner,
  AIOperationalExcellenceBanner,
  AIAgentObservabilityBanner,
  ManufacturingTransformationBanner,
  Latest2026ContentBanner,
  AISecurityEnterprise2026Banner,
  AIMultimodalEnterprise2026Banner,
  AISustainabilityTransformationBanner,
  LatestContent2026Banner
} from '../components/PromotionalBanner';
import {
  NewContent2026Banner as NewContent2026BannerComponent,
  AutonomousOperationsBanner,
  FinOpsAdvancedBanner,
  PlatformArchitectureBanner,
  AutonomousOperationsSuccessBanner,
  NewContentShowcaseBanner2026,
  LatestContent2026Banner,
  AISecurityEnterprise2026Banner,
  AIMultimodalEnterprise2026Banner,
  AISustainabilityTransformationBanner,
  NewLatest2026ContentBanner,
  AIAutonomousCloudOpsBanner,
  AIFinTechTransformationBanner,
  AIRetailAutomationBanner,
  Latest2026ContentBanner
} from '../components/NewContent2026Banners';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';
import InteractiveContentShowcase from '../components/InteractiveContentShowcase';
import ContentRecommendationSystem from '../components/ContentRecommendationSystem';
import EnhancedContentShowcase2026 from '../components/EnhancedContentShowcase2026';
import SimplifiedBanner from '../components/SimplifiedBanner';
import BlogCard from '../components/BlogCard';
import LatestContent2026Banner from '../components/LatestContent2026Banner';
import NewContent2026ShowcaseBanner from '../components/NewContent2026ShowcaseBanner';
import LatestContentPromotionalBanner from '../components/LatestContentPromotionalBanner';
import NewContentPromotionalBanner2026 from '../components/NewContentPromotionalBanner2026';
import AIInnovationShowcaseBanner2026 from '../components/AIInnovationShowcaseBanner2026';
import Revolutionary2026ContentBanner from '../components/Revolutionary2026ContentBanner';
import UltimateContent2026Showcase from '../components/UltimateContent2026Showcase';
import Revolutionary2027ContentBanner from '../components/Revolutionary2027ContentBanner';
import UltimateContent2027Showcase from '../components/UltimateContent2027Showcase';
import NewContentShowcase2026 from '../src/components/NewContentShowcase2026';
import September30NewAIBreakthroughsBanner from '../components/September30NewAIBreakthroughsBanner';
import September30BreakthroughContentBanner from '../components/September30BreakthroughContentBanner';
import Revolutionary2026ContentShowcaseBanner from '../components/Revolutionary2026ContentShowcaseBanner';
import Latest2026ContentMegaBanner from '../components/Latest2026ContentMegaBanner';
import Ultimate2026ContentShowcaseBanner from '../components/Ultimate2026ContentShowcaseBanner';
import RevolutionaryQuantumAIBreakthroughBanner from '../components/RevolutionaryQuantumAIBreakthroughBanner';
import AutonomousBusinessSystemsMegaBanner from '../components/AutonomousBusinessSystemsMegaBanner';
import QuantumAI2027BreakthroughBanner from '../components/QuantumAI2027BreakthroughBanner';
import AutonomousBusinessIntelligence2026Banner from '../components/AutonomousBusinessIntelligence2026Banner';
import NewContent2027ShowcaseBanner from '../components/NewContent2027ShowcaseBanner';
import RevolutionaryBreakthrough2026Banner from '../src/components/RevolutionaryBreakthrough2026Banner';
import AICostOptimizationBanner from '../src/components/AICostOptimizationBanner';
import AutonomyBlueprint2026Banner from '../components/AutonomyBlueprint2026Banner';
import September30ContentPromo2025 from '../components/September30ContentPromo2025';
import NewContent2026BreakthroughBanner from '../components/NewContent2026BreakthroughBanner';
import InteractiveAI2026BreakthroughCalculator from '../components/InteractiveAI2026BreakthroughCalculator';
import FreshContent2027ShowcaseBanner from '../components/FreshContent2027ShowcaseBanner';
import RevolutionaryAI2027Banner from '../components/RevolutionaryAI2027Banner';
import AI2028RevolutionaryBreakthroughBanner from '../components/AI2028RevolutionaryBreakthroughBanner';
import AI2028ContentShowcaseBanner from '../components/AI2028ContentShowcaseBanner';
import Ultimate2025ContentShowcaseBanner from '../components/Ultimate2025ContentShowcaseBanner';
export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 Zion Tech Group: Leading AI Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI & Technology Solutions for Enterprise
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
              Transform Your Business with Advanced AI, Micro SaaS, and Enterprise IT Solutions. Real implementations with proven ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/comprehensive-services" 
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
              >
                View All Services →
              </a>
              <a 
                href="/blog/ai-2026-april-mega-breakthrough-revolution" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Insights →
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">50x</div>
                <div className="text-xs text-blue-300">Performance Boost</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
                <div className="text-xs text-purple-300">Uptime Guarantee</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">$2B+</div>
                <div className="text-xs text-green-300">Value Delivered</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">24/7</div>
                <div className="text-xs text-orange-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Content Banners */}
      <SimplifiedBanner
        title="New Services 2026 - Revolutionary AI Solutions"
        description="Discover our latest breakthrough services including Quantum ML, AI Healthcare, and Metaverse Development"
        link="/services-advertising"
        badge="NEW 2026"
        badgeColor="green"
        icon="🚀"
      />

      <SimplifiedBanner
        title="Enterprise Success Stories"
        description="See how Fortune 500 companies achieved 300% ROI with our solutions"
        link="/case-studies"
        badge="FEATURED"
        badgeColor="blue"
        icon="💼"
      />

      <SimplifiedBanner
        title="Comprehensive Services Catalog"
        description="Explore our complete portfolio of AI, Micro SaaS, and IT solutions with transparent pricing"
        link="/comprehensive-services"
        badge="CATALOG"
        badgeColor="purple"
        icon="📋"
      />

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <FeaturedServiceCard
              title="AI Data Analytics Platform"
              description="Transform raw data into actionable insights with predictive modeling, real-time dashboards, and automated reporting. Includes data integration from 50+ sources."
              price="$299/month"
              features={['Predictive Analytics', 'Real-time Dashboards', '50+ Data Sources', 'Automated Reports', 'Custom ML Models']}
              to="/services/ai-data-analytics"
              popular={true}
            />
            <FeaturedServiceCard
              title="AI Workflow Automation Suite"
              description="Automate complex business processes with intelligent workflow design, smart triggers, and performance monitoring. Reduce manual work by 80%."
              price="$199/month"
              features={['Process Automation', 'Smart Triggers', 'Performance Monitoring', 'Custom Workflows', 'API Integrations']}
              to="/services/ai-workflow-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Virtual Assistant Pro"
              description="24/7 intelligent customer support with natural language processing, multi-channel support, and personalized responses. Handles 95% of queries automatically."
              price="$149/month"
              features={['24/7 Support', 'Multi-channel', 'Personalized Responses', 'Voice & Text', 'CRM Integration']}
              to="/services/ai-virtual-assistant"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Content Generation Engine"
              description="Generate high-quality content for blogs, social media, emails, and marketing materials using advanced AI. Create 100+ pieces of content daily."
              price="$99/month"
              features={['Blog Posts', 'Social Media', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Training']}
              to="/services/ai-content-generation"
              popular={true}
            />
            <FeaturedServiceCard
              title="AI Code Review Assistant"
              description="Automated code review with security scanning, performance optimization suggestions, and best practice recommendations. Catch bugs before deployment."
              price="$199/month"
              features={['Security Scanning', 'Performance Analysis', 'Best Practices', 'Bug Detection', 'Multi-language Support']}
              to="/services/ai-code-review"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI SEO Optimization Suite"
              description="Automated SEO optimization with keyword research, content optimization, and performance tracking. Improve rankings by 200% on average."
              price="$179/month"
              features={['Keyword Research', 'Content Optimization', 'Rank Tracking', 'Technical SEO', 'Competitor Analysis']}
              to="/services/ai-seo-optimization"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Email Marketing Automation"
              description="Intelligent email marketing with personalized content, send-time optimization, and advanced segmentation. Increase open rates by 300%."
              price="$129/month"
              features={['Personalization', 'Send-time Optimization', 'Advanced Segmentation', 'A/B Testing', 'Analytics Dashboard']}
              to="/services/ai-email-marketing"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Social Media Manager"
              description="Automated social media management with content creation, posting schedules, engagement tracking, and influencer identification."
              price="$159/month"
              features={['Content Creation', 'Auto Posting', 'Engagement Tracking', 'Influencer ID', 'Multi-platform']}
              to="/services/ai-social-media"
              popular={false}
            />

            {/* IT Services */}
            <FeaturedServiceCard
              title="Cloud Migration Pro"
              description="Seamless migration to cloud infrastructure with zero downtime, security compliance, and cost optimization. Migrate any workload safely."
              price="$2,999"
              features={['Zero Downtime', 'Security Compliance', 'Cost Optimization', 'Multi-cloud Support', '24/7 Support']}
              to="/services/cloud-migration"
              popular={false}
            />
            <FeaturedServiceCard
              title="DevOps Automation Platform"
              description="Automate CI/CD pipelines, infrastructure management, and deployment processes. Reduce deployment time by 90% and eliminate errors."
              price="$399/month"
              features={['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling', 'Monitoring', 'Security Scanning']}
              to="/services/devops-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="Cybersecurity Shield Pro"
              description="Advanced threat detection, zero-trust security architecture, and compliance management. Protect against 99.9% of cyber threats."
              price="$599/month"
              features={['Threat Detection', 'Zero-trust Architecture', 'Compliance Management', 'Incident Response', 'Security Training']}
              to="/services/cybersecurity-consulting"
              popular={false}
            />
            <FeaturedServiceCard
              title="API Management Suite"
              description="Comprehensive API management with rate limiting, authentication, monitoring, and analytics. Scale APIs to handle millions of requests."
              price="$249/month"
              features={['Rate Limiting', 'Authentication', 'API Monitoring', 'Analytics', 'Documentation']}
              to="/services/api-management"
              popular={false}
            />
            <FeaturedServiceCard
              title="Database Optimization Pro"
              description="Automated database performance optimization, query tuning, and scaling. Improve query performance by 500% and reduce costs by 60%."
              price="$199/month"
              features={['Query Optimization', 'Performance Tuning', 'Auto-scaling', 'Backup Management', 'Monitoring']}
              to="/services/database-optimization"
              popular={false}
            />
            <FeaturedServiceCard
              title="Performance Monitoring Suite"
              description="Real-time application and infrastructure monitoring with alerting, performance analytics, and capacity planning."
              price="$179/month"
              features={['Real-time Monitoring', 'Smart Alerting', 'Performance Analytics', 'Capacity Planning', 'Custom Dashboards']}
              to="/services/performance-monitoring"
              popular={false}
            />
            <FeaturedServiceCard
              title="Backup & Disaster Recovery"
              description="Automated backup solutions with disaster recovery planning, data encryption, and rapid restoration. 99.99% uptime guarantee."
              price="$149/month"
              features={['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Rapid Restoration', 'Compliance']}
              to="/services/backup-disaster-recovery"
              popular={false}
            />
            <FeaturedServiceCard
              title="Network Security Gateway"
              description="Advanced network security with firewall management, intrusion detection, and traffic analysis. Block 99.9% of malicious traffic."
              price="$299/month"
              features={['Firewall Management', 'Intrusion Detection', 'Traffic Analysis', 'VPN Management', 'Threat Intelligence']}
              to="/services/network-security"
              popular={false}
            />

            {/* Business Services */}
            <FeaturedServiceCard
              title="CRM Automation Platform"
              description="Intelligent CRM with lead scoring, automated follow-ups, and sales pipeline management. Increase sales by 150% with AI-powered insights."
              price="$199/month"
              features={['Lead Scoring', 'Automated Follow-ups', 'Pipeline Management', 'Sales Analytics', 'Integration Hub']}
              to="/services/crm-automation"
              popular={true}
            />
            <FeaturedServiceCard
              title="AI Finance Automation Suite"
              description="Automate financial processes with 95% accuracy, fraud detection, and real-time reporting. Save $3M+ annually with intelligent automation."
              price="$1,299/month"
              features={['95% Automation', 'Fraud Detection', 'Real-time Reporting', 'Compliance', 'Financial Analytics']}
              to="/services/ai-finance-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Inventory Management"
              description="Intelligent inventory management with demand forecasting, automated reordering, and waste reduction. Optimize stock levels and reduce costs by 40%."
              price="$179/month"
              features={['Demand Forecasting', 'Automated Reordering', 'Waste Reduction', 'Stock Optimization', 'Supplier Management']}
              to="/services/ai-inventory-management"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Customer Analytics"
              description="Deep customer insights with behavior analysis, churn prediction, and personalized recommendations. Increase customer lifetime value by 200%."
              price="$249/month"
              features={['Behavior Analysis', 'Churn Prediction', 'Personalized Recommendations', 'Customer Segmentation', 'ROI Tracking']}
              to="/services/ai-customer-analytics"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI HR Management Suite"
              description="Automated HR processes with recruitment screening, performance tracking, and employee engagement analytics. Reduce HR workload by 70%."
              price="$199/month"
              features={['Recruitment Screening', 'Performance Tracking', 'Engagement Analytics', 'Payroll Automation', 'Compliance']}
              to="/services/ai-hr-management"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Project Management"
              description="Intelligent project management with resource optimization, risk assessment, and automated reporting. Deliver projects 30% faster and under budget."
              price="$159/month"
              features={['Resource Optimization', 'Risk Assessment', 'Automated Reporting', 'Team Collaboration', 'Progress Tracking']}
              to="/services/ai-project-management"
              popular={false}
            />

            {/* Advanced AI Services */}
            <FeaturedServiceCard
              title="AI Edge Computing Platform"
              description="Real-time AI processing at the edge with sub-50ms response times, offline capability, and intelligent caching. Perfect for IoT and real-time applications."
              price="$799/month"
              features={['Sub-50ms Latency', 'Edge Intelligence', 'Offline Capability', 'IoT Integration', 'Real-time Processing']}
              to="/services/ai-edge-computing"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Infrastructure Orchestration"
              description="Achieve 99.99% uptime and 85% cost reduction with intelligent automation, self-healing infrastructure, and predictive scaling."
              price="$15,000/month"
              features={['99.99% Uptime', 'Self-Healing', '85% Cost Reduction', 'Predictive Scaling', 'Multi-cloud Management']}
              to="/services/ai-infrastructure-orchestration-platform-2026"
              popular={true}
            />
            <FeaturedServiceCard
              title="AI DevSecOps Automation"
              description="Reduce security vulnerabilities by 95% with automated security operations, compliance management, and continuous security monitoring."
              price="$12,500/month"
              features={['95% Vuln Reduction', 'Automated Compliance', '$18M+ ROI', 'Security Monitoring', 'Incident Response']}
              to="/services/ai-devsecops-automation"
              popular={true}
>>>>>>> b6a51865afa66b830de2393d9694a59c329f6c3f
            />
            <FeaturedServiceCard
              title="AI Document Processing"
              description="Automated document processing with OCR, data extraction, and intelligent classification. Process 10,000+ documents daily with 99% accuracy."
              price="$199/month"
              features={['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Compliance']}
              to="/services/ai-document-processing"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Voice Assistant Platform"
              description="Custom voice assistants with natural language understanding, multi-language support, and integration with existing systems."
              price="$299/month"
              features={['Natural Language', 'Multi-language', 'System Integration', 'Custom Commands', 'Analytics']}
              to="/services/ai-voice-assistant"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Image Recognition Suite"
              description="Advanced image recognition with object detection, facial recognition, and content moderation. Process millions of images with high accuracy."
              price="$249/month"
              features={['Object Detection', 'Facial Recognition', 'Content Moderation', 'Custom Models', 'API Access']}
              to="/services/ai-image-recognition"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions designed for specific industries with proven results and specialized expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare Solutions */}
            <FeaturedServiceCard
              title="Healthcare AI Platform"
              description="AI-powered healthcare solutions with patient diagnosis assistance, treatment recommendations, and medical record analysis. Improve patient outcomes by 40%."
              price="$2,499/month"
              features={['Diagnosis Assistance', 'Treatment Recommendations', 'Medical Records Analysis', 'HIPAA Compliance', 'Clinical Decision Support']}
              to="/services/healthcare-ai-platform"
              popular={true}
            />
            <FeaturedServiceCard
              title="Pharmaceutical AI Suite"
              description="Drug discovery acceleration, clinical trial optimization, and regulatory compliance automation. Reduce drug development time by 50%."
              price="$4,999/month"
              features={['Drug Discovery', 'Clinical Trial Optimization', 'Regulatory Compliance', 'Safety Monitoring', 'Market Analysis']}
              to="/services/pharmaceutical-ai-suite"
              popular={false}
            />

            {/* Financial Services */}
            <FeaturedServiceCard
              title="FinTech AI Platform"
              description="Advanced financial AI with fraud detection, risk assessment, and algorithmic trading. Process $1B+ transactions with 99.9% accuracy."
              price="$3,999/month"
              features={['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Regulatory Compliance', 'Real-time Analytics']}
              to="/services/fintech-ai-platform"
              popular={true}
            />
            <FeaturedServiceCard
              title="Insurance AI Suite"
              description="Automated claims processing, risk assessment, and fraud detection for insurance companies. Reduce processing time by 80%."
              price="$2,199/month"
              features={['Claims Processing', 'Risk Assessment', 'Fraud Detection', 'Policy Optimization', 'Customer Service']}
              to="/services/insurance-ai-suite"
              popular={false}
            />

            {/* Manufacturing & Supply Chain */}
            <FeaturedServiceCard
              title="Manufacturing AI Platform"
              description="Predictive maintenance, quality control, and supply chain optimization for manufacturing. Reduce downtime by 60% and improve quality by 35%."
              price="$2,799/month"
              features={['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'IoT Integration', 'Production Planning']}
              to="/services/manufacturing-ai-platform"
              popular={false}
            />
            <FeaturedServiceCard
              title="Supply Chain Intelligence"
              description="End-to-end supply chain visibility with demand forecasting, inventory optimization, and risk management. Optimize costs by 25%."
              price="$1,999/month"
              features={['Demand Forecasting', 'Inventory Optimization', 'Risk Management', 'Supplier Analytics', 'Logistics Optimization']}
              to="/services/supply-chain-intelligence"
              popular={false}
            />

            {/* Retail & E-commerce */}
            <FeaturedServiceCard
              title="Retail AI Platform"
              description="Personalized shopping experiences, inventory management, and customer analytics for retail. Increase sales by 45% and reduce inventory costs by 30%."
              price="$1,799/month"
              features={['Personalized Shopping', 'Inventory Management', 'Customer Analytics', 'Price Optimization', 'Recommendation Engine']}
              to="/services/retail-ai-platform"
              popular={true}
            />
            <FeaturedServiceCard
              title="E-commerce Automation Suite"
              description="Automated product management, customer service, and marketing for e-commerce. Scale operations without proportional staff increases."
              price="$999/month"
              features={['Product Management', 'Customer Service', 'Marketing Automation', 'Order Processing', 'Analytics Dashboard']}
              to="/services/ecommerce-automation-suite"
              popular={false}
            />

            {/* Real Estate */}
            <FeaturedServiceCard
              title="Real Estate AI Platform"
              description="Property valuation, market analysis, and lead generation for real estate professionals. Increase closing rates by 200%."
              price="$1,299/month"
              features={['Property Valuation', 'Market Analysis', 'Lead Generation', 'Customer Matching', 'Investment Analysis']}
              to="/services/real-estate-ai-platform"
              popular={false}
            />

            {/* Education */}
            <FeaturedServiceCard
              title="EdTech AI Suite"
              description="Personalized learning paths, automated grading, and student performance analytics. Improve learning outcomes by 50%."
              price="$1,499/month"
              features={['Personalized Learning', 'Automated Grading', 'Performance Analytics', 'Content Generation', 'Student Engagement']}
              to="/services/edtech-ai-suite"
              popular={false}
            />

            {/* Legal */}
            <FeaturedServiceCard
              title="Legal AI Platform"
              description="Document analysis, contract review, and legal research automation. Reduce legal research time by 70% and improve accuracy by 90%."
              price="$2,299/month"
              features={['Document Analysis', 'Contract Review', 'Legal Research', 'Compliance Monitoring', 'Case Prediction']}
              to="/services/legal-ai-platform"
              popular={false}
            />

            {/* Transportation & Logistics */}
            <FeaturedServiceCard
              title="Transportation AI Suite"
              description="Route optimization, fleet management, and predictive maintenance for transportation companies. Reduce fuel costs by 20% and improve efficiency by 35%."
              price="$1,899/month"
              features={['Route Optimization', 'Fleet Management', 'Predictive Maintenance', 'Driver Analytics', 'Fuel Optimization']}
              to="/services/transportation-ai-suite"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Pricing & Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              All our services come with comprehensive support, training, and implementation assistance. 
              Contact us for custom pricing and enterprise solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Pricing Information */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexible Pricing Options</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Basic Services</span>
                  <span className="text-blue-600 font-bold">$99 - $299/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Professional Services</span>
                  <span className="text-blue-600 font-bold">$399 - $1,299/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Enterprise Solutions</span>
                  <span className="text-blue-600 font-bold">$2,499 - $15,000/month</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-700">Custom Solutions</span>
                  <span className="text-blue-600 font-bold">Contact Us</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Special Offer:</strong> Get 30% off your first 3 months when you sign up for any annual plan. 
                  Includes free setup, training, and 24/7 support.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with our latest research, case studies, and industry insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="AI Trends 2024"
              description="Discover the latest trends and breakthroughs in artificial intelligence that are shaping the future."
              icon="📊"
              link="/blog/ai-trends-2024"
              readTime="8 min read"
              category="AI Research"
            />
            
            <BlogCard
              title="Enterprise Case Study"
              description="How we helped a Fortune 500 company achieve 300% ROI through AI implementation."
              icon="💼"
              link="/case-studies/enterprise-ai-success"
              readTime="12 min read"
              category="Case Study"
            />
            
            <BlogCard
              title="Cloud Best Practices"
              description="Essential strategies for successful cloud migration and optimization."
              icon="🚀"
              link="/blog/cloud-best-practices"
              readTime="6 min read"
              category="Cloud Computing"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have accelerated their digital transformation with our AI and cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}