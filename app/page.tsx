import React from 'react';
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leading AI & Technology Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI, micro SaaS, and enterprise IT solutions. 
              Build faster, scale smarter, and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Services
              </a>
              <a 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
<<<<<<< HEAD
                Get Started Today
              </a>
              <a 
                href="/services/innovative-solutions-2025" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
              >
                New 2025 Solutions →
              </a>
              <a 
                href="/services-advertising" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
              >
                View Pricing →
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
        title="Latest AI Breakthroughs"
        description="Discover our newest AI innovations and enterprise solutions"
        link="/blog/ai-breakthroughs-2024"
        badge="NEW"
        badgeColor="green"
        icon="🧠"
      />

      <SimplifiedBanner
        title="Enterprise Success Stories"
        description="See how Fortune 500 companies achieved 300% ROI with our solutions"
        link="/case-studies"
        badge="FEATURED"
        badgeColor="blue"
        icon="💼"
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
            <FeaturedServiceCard
              title="AI Meeting Intelligence Platform"
              description="Real-time meeting analysis with sentiment tracking, action item extraction, and automated follow-ups. Transform meetings into actionable insights."
              price="$299/month"
              features={['Real-time Transcription', 'Sentiment Analysis', 'Action Item Extraction', 'CRM Integration', 'Automated Follow-ups']}
              to="/services/innovative-solutions-2025"
              popular={true}
            />
            <FeaturedServiceCard
              title="Smart Document Processing Suite"
              description="AI-powered document analysis, extraction, and workflow automation. Process thousands of documents with 99.8% accuracy."
              price="$199/month"
              features={['OCR Processing', 'Data Extraction', 'Workflow Automation', 'Compliance Monitoring', 'API Integration']}
              to="/services/innovative-solutions-2025"
              popular={false}
            />
            <FeaturedServiceCard
              title="Customer Experience Analytics Engine"
              description="Multi-channel customer journey tracking with predictive analytics and personalization. Increase retention by 45%."
              price="$399/month"
              features={['Journey Mapping', 'Predictive Analytics', 'Personalization', 'A/B Testing', 'Advanced Segmentation']}
              to="/services/innovative-solutions-2025"
              popular={true}
            />
            <FeaturedServiceCard
              title="Autonomous Business Process Orchestration"
              description="Self-managing workflows that adapt and optimize business processes in real-time. Achieve 500% efficiency gains."
              price="$2,999/month"
              features={['Self-healing Automation', 'Dynamic Optimization', 'Cross-system Integration', 'Predictive Prevention', 'Real-time Monitoring']}
              to="/services/innovative-solutions-2025"
              popular={false}
            />
            <FeaturedServiceCard
              title="Zero-Trust Security Architecture"
              description="Comprehensive security framework with continuous verification and micro-segmentation. Reduce security incidents by 99.9%."
              price="$4,999/month"
              features={['Identity Management', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection', 'Compliance Automation']}
              to="/services/innovative-solutions-2025"
              popular={true}
            />
=======
                Get Started
              </a>
            </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-d5ef
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedServiceCard
              title="AI Services & Solutions"
              description="Advanced artificial intelligence solutions including machine learning, deep learning, and AI automation."
              icon="🤖"
              href="/services/ai-services"
              features={[
                "Machine Learning Models",
                "Deep Learning Systems", 
                "AI Automation",
                "Predictive Analytics"
              ]}
            />
            
            <FeaturedServiceCard
              title="Micro SaaS Solutions"
              description="Scalable software-as-a-service applications designed for rapid deployment and growth."
              icon="⚡"
              href="/services/micro-saas"
              features={[
                "Rapid Development",
                "Scalable Architecture",
                "Cloud-Native Design",
                "API-First Approach"
              ]}
            />
            
            <FeaturedServiceCard
              title="IT Services & Solutions"
              description="Comprehensive IT infrastructure, cloud migration, and DevOps services."
              icon="☁️"
              href="/services/it-services"
              features={[
                "Cloud Migration",
                "DevOps & SRE",
                "Infrastructure Management",
                "Security & Compliance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our enterprise clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SuccessStory
              title="Fortune 500 Manufacturing Transformation"
              description="Implemented AI-powered predictive maintenance reducing downtime by 40% and saving $25M annually."
              metrics={[
                { label: "Downtime Reduction", value: "40%" },
                { label: "Annual Savings", value: "$25M" },
                { label: "ROI", value: "350%" }
              ]}
              industry="Manufacturing"
            />
            
            <SuccessStory
              title="Healthcare AI Platform Deployment"
              description="Deployed comprehensive AI platform improving patient outcomes and operational efficiency."
              metrics={[
                { label: "Patient Satisfaction", value: "95%" },
                { label: "Processing Speed", value: "3x Faster" },
                { label: "Cost Reduction", value: "30%" }
              ]}
              industry="Healthcare"
            />
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentShowcase />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already leveraging our AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}