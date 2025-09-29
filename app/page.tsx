<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

interface CardProps {
=======
import { Link } from 'react-router-dom';
import React from 'react';
import { 
  NewBlogBanner, 
  AnalyticsPlatformBanner, 
  TechCorpSuccessBanner,
  WorkflowAutomationBanner,
  AIAnalyticsBanner,
  HealthTechSuccessBanner,
  ComprehensiveAIBanner,
  EnterpriseAIBanner,
  CustomerSupportAIBanner,
  CloudNativeBanner,
  RetailTechSuccessBanner,
  ManufacturingIoTSuccessBanner,
  AIGovernanceFrameworkBanner,
  MLOpsVectorDatabasesBanner,
  FinTechRiskComplianceBanner,
  LatestContentShowcaseBanner
} from '../components/PromotionalBanner';
import ContentShowcase from '../components/ContentShowcase';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Promotional Banners */}
      <LatestContentShowcaseBanner />
      <AIGovernanceFrameworkBanner />
      <MLOpsVectorDatabasesBanner />
      <FinTechRiskComplianceBanner />
      <AutonomousAgentsBanner />
      <SecurityComplianceBanner />
      <ManufacturingSuccessBanner />
      <PredictiveMaintenanceBanner />
      <NewBlogBanner />
      <CustomerSupportAIBanner />
      <CloudNativeBanner />
      <RetailTechSuccessBanner />
      <ManufacturingIoTSuccessBanner />
      <WorkflowAutomationBanner />
      <AIAnalyticsBanner />
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$2M+</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured AI & IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular services that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedServiceCard
              title="AI Data Analytics"
              description="Transform data into actionable insights with predictive modeling and real-time dashboards"
              price="$199/month"
              features={['Predictive Analytics', 'Real-time Dashboards', 'Data Integration']}
              href="/services/ai-data-analytics"
              popular={true}
            />
            <FeaturedServiceCard
              title="AI Workflow Automation"
              description="Automate business processes with intelligent workflow design and smart triggers"
              price="$149/month"
              features={['Process Automation', 'Smart Triggers', 'Performance Monitoring']}
              href="/services/ai-workflow-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="AI Virtual Assistant"
              description="24/7 intelligent customer support with natural language processing"
              price="$99/month"
              features={['24/7 Support', 'Multi-channel', 'Personalized Responses']}
              href="/services/ai-virtual-assistant"
              popular={false}
            />
            <FeaturedServiceCard
              title="Cloud Migration"
              description="Seamless migration to cloud infrastructure with zero downtime"
              price="$2,999"
              features={['Zero Downtime', 'Security Compliance', 'Cost Optimization']}
              href="/services/cloud-migration"
              popular={false}
            />
            <FeaturedServiceCard
              title="DevOps Automation"
              description="Automate CI/CD pipelines and infrastructure management"
              price="$399/month"
              features={['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling']}
              href="/services/devops-automation"
              popular={false}
            />
            <FeaturedServiceCard
              title="Cybersecurity Consulting"
              description="Advanced threat detection and zero-trust security architecture"
              price="$599/month"
              features={['Threat Detection', 'Zero-trust Architecture', 'Compliance']}
              href="/services/cybersecurity-consulting"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest AI Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our latest content, case studies, and AI innovations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link to="/blog/ai-governance-framework-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Guide
                  </span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Governance Framework 2025: Enterprise Implementation
                </h3>
                <p className="text-gray-600 mb-4">
                  Master AI governance with comprehensive framework covering risk management, compliance, and ethical deployment.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Guide →
                </div>
              </div>
            </Link>
            
            <Link to="/blog/ai-mlops-vector-databases-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Technical Guide
                  </span>
                  <span className="text-sm text-gray-500">18 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI MLOps with Vector Databases 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Master MLOps for AI applications with vector databases and production-ready RAG architecture.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Guide →
                </div>
              </div>
            </Link>
            
            <Link to="/case-studies/fintech-ai-risk-compliance-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">FinTech</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  FinTech: 70% AI Risk Reduction
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a leading fintech achieved 70% AI risk reduction with automated governance frameworks.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
            
            <Link to="/blog/llm-cost-optimization-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">9 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  LLM Cost Optimization in 2025: Practical Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Cut LLM spend by 30–70% with routing, caching, and quantization patterns.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/edge-llm-latency-patterns" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">7 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Edge LLM Latency Patterns: Sub-200ms Interactions
                </h3>
                <p className="text-gray-600 mb-4">
                  Streaming, prefetch, and edge compute patterns for instant-feel AI UX.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/genai-guardrails-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">11 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  GenAI Guardrails 2025: Practical Playbook for Reliable AI
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical patterns to ship safe, reliable, and auditable GenAI systems in production.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>
            <Link to="/blog/ai-revolution-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">12 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Revolution 2025: Complete Business Transformation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link to="/blog/ai-agents-in-the-enterprise-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">10 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Agents in the Enterprise: 2025 Adoption Playbook
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical guide to rolling out autonomous AI agents across enterprise workflows with ROI.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link to="/case-studies/techcorp-ai-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">E-commerce</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  TechCorp: 90% Efficiency Gain with AI
                </h3>
                <p className="text-gray-600 mb-4">
                  See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link to="/case-studies/finserve-genai-risk-mitigation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Fintech</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  FinServe: GenAI Risk Mitigation & Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  How a fintech leader cut AI risk by 70% and achieved audit-ready compliance.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link to="/blog/ai-powered-customer-support-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Article
                  </span>
                  <span className="text-sm text-gray-500">Customer Support</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI-Powered Customer Support in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI is revolutionizing customer support with 80% faster response times and intelligent automation.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link to="/blog/cloud-native-architecture-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    New Guide
                  </span>
                  <span className="text-sm text-gray-500">Cloud Architecture</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Cloud-Native Architecture in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Master cloud-native patterns, microservices design, and container orchestration for scalable applications.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Read Guide →
                </div>
              </div>
            </Link>

            <Link to="/case-studies/retailtech-ai-transformation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Retail Technology</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  RetailTech: 95% Efficiency Gain
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a retail tech company achieved 95% efficiency improvement and $1.2M annual savings.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>

            <Link to="/case-studies/manufacturing-iot-automation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Manufacturing</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Manufacturing: 75% Efficiency with IoT
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how IoT automation and predictive maintenance delivered 75% efficiency improvement.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Content
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Content Showcase */}
      <ContentShowcase />

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses achieve remarkable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStory
              company="TechCorp Inc."
              industry="E-commerce"
              challenge="Manual data processing taking 40 hours/week"
              solution="AI Data Analytics automation"
              result="90% time reduction, 60% cost savings"
              metric="$500K saved annually"
            />
            <SuccessStory
              company="HealthTech Solutions"
              industry="Healthcare"
              challenge="Customer support overwhelmed with queries"
              solution="AI Virtual Assistant implementation"
              result="80% faster response time, 24/7 support"
              metric="95% customer satisfaction"
            />
            <SuccessStory
              company="FinanceFlow Ltd."
              industry="Fintech"
              challenge="Complex workflow bottlenecks"
              solution="AI Workflow Automation platform"
              result="75% process efficiency improvement"
              metric="300% ROI in 6 months"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Newsletter Signup */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">
                Stay Ahead with AI & Tech Insights
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get weekly updates on AI trends, tech innovations, and exclusive service offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Join 10,000+ professionals. Unsubscribe anytime.
              </p>
            </div>

            {/* Content Highlights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Revolution 2025 Guide</h4>
                    <p className="text-sm opacity-90">Complete business transformation strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">⚙️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Workflow Automation Guide</h4>
                    <p className="text-sm opacity-90">Reduce manual work by 80%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Analytics Implementation</h4>
                    <p className="text-sm opacity-90">Transform data into insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <h4 className="font-semibold mb-1">HealthTech Success Story</h4>
                    <p className="text-sm opacity-90">80% efficiency gain with AI</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  to="/blog"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  View All Content →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🚀 Fresh Content for 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest AI insights, governance frameworks, and success stories 
              that are transforming businesses in 2025
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">AI Governance</h3>
                  <p className="text-sm text-gray-600">Enterprise Framework</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive 12-pillar framework for enterprise AI governance with 70% risk reduction strategies.
              </p>
              <Link
                href="/blog/ai-governance-framework-2025"
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Read Framework Guide →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">MLOps & Vector DBs</h3>
                  <p className="text-sm text-gray-600">Production Architecture</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Production-ready MLOps patterns for vector databases with &lt;50ms search latency optimization.
              </p>
              <Link
                href="/blog/ai-mlops-vector-databases-2025"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Explore MLOps Guide →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">FinTech Success</h3>
                  <p className="text-sm text-gray-600">Risk Compliance</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                See how a leading fintech achieved 70% AI risk reduction and $2.5M cost savings.
              </p>
              <Link
                href="/case-studies/fintech-ai-risk-compliance-2025"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                View Success Story →
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-lg border border-gray-200">
              <div className="text-2xl">📚</div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900">Explore All New Content</h4>
                <p className="text-sm text-gray-600">15+ new articles, guides, and case studies for 2025</p>
              </div>
              <Link
                href="/blog"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Browse All
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Promotional Banners */}
      <AnalyticsPlatformBanner />
      <HealthTechSuccessBanner />
      <ComprehensiveAIBanner />
      <NewContentBanner />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedServiceCard({
  title,
  description,
  price,
  features,
  href,
  popular = false,
}: {
>>>>>>> origin/main
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, href }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <div className="text-blue-600 mr-3">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={href} className="text-blue-600 hover:text-blue-700 font-semibold">
      Learn More →
    </Link>
  </div>
);

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.',
      icon: '🤖'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs.',
      icon: '☁️'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly.',
      icon: '🛠️'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading technology solutions provider specializing in AI development, 
            cloud architecture, and digital transformation for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with measurable results 
              and exceptional customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-600">
                We leverage the latest technologies including AI, machine learning, 
                and cloud computing to deliver innovative solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Our solutions have helped hundreds of businesses improve efficiency, 
                reduce costs, and drive growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Our team of experienced developers and consultants brings deep 
                expertise across multiple technology domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="AI Development"
              description="Custom AI solutions including machine learning models, natural language processing, and automation systems."
              icon={<Zap className="w-6 h-6" />}
              href="/services/ai-services"
            />
            <Card
              title="Cloud Architecture"
              description="Scalable cloud infrastructure design and migration services for optimal performance and cost efficiency."
              icon={<Award className="w-6 h-6" />}
              href="/services/cloud-architecture"
            />
            <Card
              title="Digital Transformation"
              description="Complete digital transformation strategies to modernize your business processes and technology stack."
              icon={<Star className="w-6 h-6" />}
              href="/services/digital-transformation"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
