import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "GitHub",
      href: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />
    }
  ];

  const serviceCategories = [
    {
      title: "AI Solutions",
      services: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Support", href: "/ai-customer-support" },
        { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
        { name: "AI Data Analytics", href: "/ai-data-analytics" }
      ]
    },
    {
      title: "IT Services",
      services: [
        { name: "Cloud Migration", href: "/cloud-migration" },
        { name: "DevOps Services", href: "/devops" },
        { name: "IT Consulting", href: "/it-consulting" },
        { name: "Network Security", href: "/network-security" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    },
    {
      title: "Micro SAAS",
      services: [
        { name: "Zion Analytics Pro", href: "/zion-ai-analytics-pro" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
        { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" },
        { name: "Zion AI Marketing", href: "/zion-ai-marketing-automation" }
      ]
    },
    {
      title: "5G Solutions",
      services: [
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Smart Cities", href: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
    { name: "Support", path: "/support" },
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Document Processing", path: "/ai-document-processing" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" },
  ];

  const microSaasServices = [
    { name: "AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "AI Email Analyzer", path: "/zion-ai-email-analyzer" },
    { name: "Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },
    { name: "AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker" },
    { name: "Smart Expense Categorizer", path: "/zion-smart-expense-categorizer" },
    { name: "AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro" },
    { name: "AI Code Reviewer", path: "/zion-ai-code-reviewer" },
    { name: "AI Social Media Manager", path: "/zion-ai-social-media-manager" },
    { name: "AI Document Analyzer", path: "/zion-ai-document-analyzer" },
    { name: "AI Project Manager Pro", path: "/zion-ai-project-manager-pro" },
    { name: "AI Cybersecurity Suite Pro", path: "/zion-ai-cybersecurity-suite-pro" },
  ];

  const itServices = [
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "DevOps Services", path: "/devops" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Network Security", path: "/network-security" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "System Integration", path: "/system-integration" },
    { name: "Web Development", path: "/web-development" },
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Implementation", path: "/5g-implementation" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about#team" },
    { name: "Careers", path: "/careers" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" },
  ];

  const supportLinks = [
    { name: "Help Center", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Status", path: "/status" },
    { name: "Contact Support", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR", path: "/gdpr" },
  ];

          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">AI & IT Services</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              to="/services"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center mt-3"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

            </div>
          </div>
        </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

