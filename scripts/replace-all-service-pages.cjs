#!/usr/bin/env node
/**
 * Replace All Service Pages
 * Replaces all service pages with simple working ones
 */
const fs = require("fs");
const path = require("path");

function createServicePage(serviceName, serviceTitle, description) {
  return `export const metadata = {
  title: '${serviceTitle} | Zion Tech Group',
  description: '${description}',
  keywords: '${serviceName}, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${serviceTitle}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ${serviceName} solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ${serviceName} solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

function replaceAllServicePages() {
  console.log("🔧 Replacing all service pages...");
  
  const servicesDir = path.join(process.cwd(), "app", "services");
  
  if (!fs.existsSync(servicesDir)) {
    console.log("Services directory not found");
    return;
  }
  
  const services = [
    { name: 'ai-analytics-platform', title: 'AI Analytics Platform', description: 'Professional AI analytics platform services for your business needs.' },
    { name: 'ai-chatbot', title: 'AI Chatbot', description: 'Advanced AI chatbot solutions for customer engagement and support.' },
    { name: 'ai-chatbot-builder', title: 'AI Chatbot Builder', description: 'Build custom AI chatbots with our easy-to-use platform.' },
    { name: 'ai-code-reviewer', title: 'AI Code Reviewer', description: 'Professional AI code reviewer solutions for your business needs.' },
    { name: 'ai-content-generator', title: 'AI Content Generator', description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.' },
    { name: 'ai-content-writer', title: 'AI Content Writer', description: 'Professional AI content writer services for your business needs.' },
    { name: 'ai-customer-support', title: 'AI Customer Support', description: 'AI-powered customer support solutions for enhanced user experience.' },
    { name: 'ai-customer-support-automation', title: 'AI Customer Support Automation', description: 'Automated customer support solutions powered by AI technology.' },
    { name: 'ai-data-analysis', title: 'AI Data Analysis', description: 'Professional AI data analysis services for your business needs.' },
    { name: 'ai-data-analytics', title: 'AI Data Analytics', description: 'Advanced AI data analytics solutions for business intelligence.' },
    { name: 'ai-documentation-generator', title: 'AI Documentation Generator', description: 'Professional AI documentation generator solutions for your business needs.' },
    { name: 'ai-email-optimizer', title: 'AI Email Optimizer', description: 'AI-powered email optimization for better engagement and deliverability.' },
    { name: 'ai-financial-analytics', title: 'AI Financial Analytics', description: 'Advanced AI financial analytics solutions for business intelligence.' },
    { name: 'ai-financial-analyzer', title: 'AI Financial Analyzer', description: 'Professional AI financial analyzer solutions for your business needs.' },
    { name: 'ai-fintech-solutions', title: 'AI Fintech Solutions', description: 'Cutting-edge AI fintech solutions for the financial industry.' },
    { name: 'ai-healthcare-analytics', title: 'AI Healthcare Analytics', description: 'AI-powered healthcare analytics for improved patient outcomes.' },
    { name: 'ai-hr-management', title: 'AI HR Management', description: 'AI-powered human resources management solutions.' },
    { name: 'ai-inventory-management', title: 'AI Inventory Management', description: 'Smart AI inventory management solutions for businesses.' },
    { name: 'ai-invoice-generator', title: 'AI Invoice Generator', description: 'Automated AI invoice generation for streamlined billing.' },
    { name: 'ai-marketing-automation', title: 'AI Marketing Automation', description: 'AI-powered marketing automation for better campaign performance.' },
    { name: 'ai-meeting-assistant', title: 'AI Meeting Assistant', description: 'AI meeting assistant for enhanced productivity and collaboration.' },
    { name: 'ai-powered-crm', title: 'AI Powered CRM', description: 'AI-powered customer relationship management solutions.' },
    { name: 'ai-predictive-analytics', title: 'AI Predictive Analytics', description: 'Advanced AI predictive analytics for business forecasting.' },
    { name: 'ai-project-management-suite', title: 'AI Project Management Suite', description: 'Comprehensive AI project management solutions.' },
    { name: 'ai-services', title: 'AI Services', description: 'Comprehensive AI services for modern businesses.' },
    { name: 'ai-social-media-scheduler', title: 'AI Social Media Scheduler', description: 'AI-powered social media scheduling and management.' },
    { name: 'ai-social-scheduler', title: 'AI Social Scheduler', description: 'Smart AI social media scheduling solutions.' },
    { name: 'ai-testing-automation', title: 'AI Testing Automation', description: 'AI-powered testing automation for software quality assurance.' },
    { name: 'ai-video-generator', title: 'AI Video Generator', description: 'AI-powered video generation for marketing and content creation.' },
    { name: 'analytics-dashboard', title: 'Analytics Dashboard', description: 'Comprehensive analytics dashboard for business intelligence.' },
    { name: 'api-testing-suite', title: 'API Testing Suite', description: 'Professional API testing suite for software quality assurance.' },
    { name: 'automated-workflow-builder', title: 'Automated Workflow Builder', description: 'Build automated workflows with our intuitive platform.' },
    { name: 'automation-solutions', title: 'Automation Solutions', description: 'Comprehensive automation solutions for business efficiency.' },
    { name: 'blockchain', title: 'Blockchain Solutions', description: 'Advanced blockchain solutions for secure transactions.' },
    { name: 'blockchain-solutions', title: 'Blockchain Solutions', description: 'Comprehensive blockchain solutions for modern businesses.' },
    { name: 'ci-cd-pipeline-builder', title: 'CI/CD Pipeline Builder', description: 'Build robust CI/CD pipelines for continuous integration and deployment.' },
    { name: 'cloud-services', title: 'Cloud Services', description: 'Scalable cloud services for modern applications.' },
    { name: 'crm-platform', title: 'CRM Platform', description: 'Comprehensive customer relationship management platform.' },
    { name: 'crm-solution', title: 'CRM Solution', description: 'Professional CRM solution for business growth.' },
    { name: 'customer-support-automation', title: 'Customer Support Automation', description: 'Automated customer support solutions for better service.' },
    { name: 'cybersecurity', title: 'Cybersecurity Solutions', description: 'Advanced cybersecurity solutions for data protection.' },
    { name: 'cybersecurity-suite', title: 'Cybersecurity Suite', description: 'Comprehensive cybersecurity suite for enterprise security.' },
    { name: 'data-analytics', title: 'Data Analytics', description: 'Advanced data analytics solutions for business intelligence.' },
    { name: 'devops-automation', title: 'DevOps Automation', description: 'Automated DevOps solutions for streamlined development.' },
    { name: 'digital-transformation', title: 'Digital Transformation', description: 'Comprehensive digital transformation solutions for businesses.' },
    { name: 'e-commerce-solutions', title: 'E-commerce Solutions', description: 'Complete e-commerce solutions for online businesses.' },
    { name: 'ecommerce-platform', title: 'E-commerce Platform', description: 'Robust e-commerce platform for online retail.' },
    { name: 'email-automation', title: 'Email Automation', description: 'Advanced email automation for marketing campaigns.' },
    { name: 'email-automation-suite', title: 'Email Automation Suite', description: 'Comprehensive email automation suite for businesses.' },
    { name: 'email-campaign-manager', title: 'Email Campaign Manager', description: 'Professional email campaign management solutions.' },
    { name: 'erp-solutions', title: 'ERP Solutions', description: 'Enterprise resource planning solutions for business management.' },
    { name: 'expense-tracker', title: 'Expense Tracker', description: 'Smart expense tracking solutions for financial management.' },
    { name: 'fintech-solutions', title: 'Fintech Solutions', description: 'Innovative fintech solutions for the financial industry.' },
    { name: 'healthcare-solutions', title: 'Healthcare Solutions', description: 'Comprehensive healthcare solutions for medical practices.' },
    { name: 'helpdesk-platform', title: 'Helpdesk Platform', description: 'Professional helpdesk platform for customer support.' },
    { name: 'invoice-automation', title: 'Invoice Automation', description: 'Automated invoice processing for streamlined billing.' },
    { name: 'iot-solutions', title: 'IoT Solutions', description: 'Internet of Things solutions for connected devices.' },
    { name: 'it-services', title: 'IT Services', description: 'Comprehensive IT services for business technology needs.' },
    { name: 'lead-generation-tool', title: 'Lead Generation Tool', description: 'Advanced lead generation tools for sales growth.' },
    { name: 'micro-saas', title: 'Micro SaaS Solutions', description: 'Micro SaaS solutions for niche business needs.' },
    { name: 'mobile-development', title: 'Mobile Development', description: 'Professional mobile app development services.' },
    { name: 'project-management', title: 'Project Management', description: 'Comprehensive project management solutions.' },
    { name: 'project-management-suite', title: 'Project Management Suite', description: 'Advanced project management suite for teams.' },
    { name: 'qa-testing', title: 'QA Testing', description: 'Professional quality assurance testing services.' },
    { name: 'real-time-data-processing', title: 'Real-time Data Processing', description: 'Real-time data processing solutions for instant insights.' },
    { name: 'seo-analyzer', title: 'SEO Analyzer', description: 'Advanced SEO analysis tools for better search rankings.' },
    { name: 'smart-invoice-generator', title: 'Smart Invoice Generator', description: 'Intelligent invoice generation with AI capabilities.' },
    { name: 'social-media-management', title: 'Social Media Management', description: 'Comprehensive social media management solutions.' },
    { name: 'social-media-scheduler', title: 'Social Media Scheduler', description: 'Advanced social media scheduling and management.' },
    { name: 'software-development', title: 'Software Development', description: 'Professional software development services.' },
    { name: 'team-collaboration-hub', title: 'Team Collaboration Hub', description: 'Advanced team collaboration platform for productivity.' },
    { name: 'vulnerability-scanner', title: 'Vulnerability Scanner', description: 'Comprehensive vulnerability scanning for security assessment.' },
    { name: 'web-development', title: 'Web Development', description: 'Professional web development services.' },
    { name: 'website-analyzer', title: 'Website Analyzer', description: 'Advanced website analysis tools for optimization.' }
  ];
  
  for (const service of services) {
    const serviceDir = path.join(servicesDir, service.name);
    const pagePath = path.join(serviceDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      console.log(`Replacing ${service.name}...`);
      const content = createServicePage(service.name, service.title, service.description);
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`✅ Replaced ${service.name}`);
    }
  }
  
  console.log("✅ All service pages replaced!");
}

replaceAllServicePages();