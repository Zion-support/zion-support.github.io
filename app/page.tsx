import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next/link';
>>>>>>> cursor/analyze-improve-and-deploy-application-5157
import ContentShowcase from '../components/ContentShowcase';
import FeaturedServiceCard from '../components/FeaturedServiceCard';
import SuccessStory from '../components/SuccessStory';


export default function HomePage() {
  return (
    <div className="min-h-screen">
=======
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group. Competitive pricing, proven ROI, and expert implementation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, competitive pricing',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  },
};

export default function HomePage() {
  const featuredServices = [
    {
      title: 'Comprehensive AI Services',
      description: 'Full-spectrum AI solutions including machine learning, NLP, computer vision, and autonomous systems',
      icon: '🧠',
      href: '/services/ai-services-comprehensive',
      pricing: 'Starting from $2,500/project',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Autonomous Systems'],
      benefits: ['95% accuracy rate', '300% average ROI', 'Real-time processing']
    },
    {
      title: 'Advanced Micro SaaS Solutions',
      description: 'Cutting-edge micro SaaS platforms designed to solve specific business challenges with AI-powered automation',
      icon: '🚀',
      href: '/services/advanced-micro-saas-solutions',
      pricing: 'Starting from $199/month',
      features: ['Content Creation Suite', 'Inventory Management', 'Customer Support AI', 'Financial Analytics'],
      benefits: ['75% time reduction', '400% average ROI', 'Automated workflows']
    },
    {
      title: 'Complete IT Services',
      description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and digital transformation',
      icon: '💻',
      href: '/services/it-services-comprehensive',
      pricing: 'Starting from $1,500/month',
      features: ['Cloud Migration', 'DevOps Implementation', 'Cybersecurity', 'Infrastructure Management'],
      benefits: ['99.9% uptime', '40% cost reduction', '24/7 support']
    }
  ];

  const successMetrics = [
    { metric: 'Projects Delivered', value: '500+', description: 'Successful implementations worldwide' },
    { metric: 'Cost Savings Generated', value: '$2.3B', description: 'Across all client implementations' },
    { metric: 'Average ROI', value: '156%', description: 'Within first year of implementation' },
    { metric: 'Customer Satisfaction', value: '4.9/5', description: 'Based on client feedback' }
  ];

  const technologies = [
    { name: 'AI/ML', icon: '🧠', description: 'Machine Learning & AI' },
    { name: 'Cloud', icon: '☁️', description: 'AWS, Azure, Google Cloud' },
    { name: 'DevOps', icon: '🔄', description: 'CI/CD & Automation' },
    { name: 'Security', icon: '🔒', description: 'Cybersecurity Solutions' },
    { name: 'SaaS', icon: '🚀', description: 'Micro SaaS Platforms' },
    { name: 'Analytics', icon: '📊', description: 'Business Intelligence' }
  ];

  return (
    <div className="min-h-screen bg-white">
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}AI & Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Enterprise-grade AI services, micro SaaS solutions, and IT consulting with competitive pricing, 
              proven ROI, and expert implementation. Build faster with Zion Tech Group.
            </p>
<<<<<<< HEAD
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
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              <a 
                href="tel:+13024640950"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-blue-600 font-semibold">📞 Phone</div>
                  <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600">+1 302 464 0950</a>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-semibold">✉️ Email</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-green-600">kleber@ziontechgroup.com</a>
                </div>
                <div className="text-center">
                  <div className="text-purple-600 font-semibold">📍 Address</div>
                  <div className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</div>
                </div>
              </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our three main service categories, each designed to address specific business needs 
              with competitive pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl mb-4 block">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-green-600 mb-4">{service.pricing}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Proven Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-blue-500 mr-2">📈</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                  >
                    Learn More & Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results & Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are the measurable results we've achieved for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Master */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver the best solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI and technology solutions can accelerate your growth and drive innovation. 
            Get a custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
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
=======
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ Email Us
            </a>
            <Link
              href="/services-advertising"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              📋 View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600">Explore our services and resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">All Services</h3>
              <p className="text-sm text-gray-600">Comprehensive service catalog</p>
            </Link>
            <Link href="/services-advertising" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Pricing & Quotes</h3>
              <p className="text-sm text-gray-600">Competitive pricing information</p>
            </Link>
            <Link href="/case-studies" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-sm text-gray-600">Client success stories</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch today</p>
            </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e
          </div>
        </div>
      </section>
    </div>
  );
}