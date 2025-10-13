<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Mic } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f

interface ImprovedfooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedFooter({ className = '', children, ...props }: ImprovedfooterProps) {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'News', href: '/news' },
    { label: 'Press', href: '/press' },
    { label: 'Partners', href: '/partners' }
  ];

  const resourceLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
    { label: 'Support', href: '/support' },
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'Whitepapers', href: '/whitepapers' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Security', href: '/security' }
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { label: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className={`improvedfooter-component ${className}`} {...props}>
      {children}
    </div>
  );
};

=======
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro' },
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { label: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { label: 'AI Automation Platform', href: '/ai-automation-platform' },
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro' },
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { label: 'AI HR & Recruitment Pro', href: '/ai-hr-recruitment-pro' },
        { label: 'AI Financial Analysis', href: '/ai-financial-analysis' },
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
        { label: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro' },
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro' },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
        { label: 'AI Sentiment Analysis Pro', href: '/ai-sentiment-analysis-pro' },
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine' },
        { label: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro' },
        { label: 'AI Language Translation', href: '/ai-language-translation' },
        { label: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { label: 'AI Data Mining Pro', href: '/ai-data-mining-pro' },
        { label: 'AI Video Analysis', href: '/ai-video-analysis' },
        { label: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting' },
        { label: 'AI NLP Text Analysis', href: '/ai-nlp-text-analysis' },
        { label: 'View All AI Services', href: '/ai-services', featured: true }
      ]
    },
    {
      title: 'IT Services',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      links: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Blockchain Development', href: '/blockchain-development' },
        { label: 'IoT Solutions', href: '/iot-solutions' },
        { label: 'AR/VR Development', href: '/ar-vr-development' },
        { label: 'DevOps Solutions', href: '/devops-solutions' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'IT Support', href: '/it-support' },
        { label: 'Network Infrastructure', href: '/network-infrastructure' },
        { label: 'IT Consulting', href: '/it-consulting' },
        { label: 'Cybersecurity Audit', href: '/cybersecurity-audit' },
        { label: 'Data Center Services', href: '/data-center-services' },
        { label: 'Asset Management', href: '/asset-management' },
        { label: 'View All IT Services', href: '/services', featured: true }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      links: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
        { label: 'Zion AI Inventory Manager', href: '/zion-ai-inventory-manager' },
        { label: 'Zion HR Assistant Pro', href: '/zion-hr-assistant-pro' },
        { label: 'Zion AI Accounting Suite', href: '/zion-ai-accounting-suite' },
        { label: 'Zion E-commerce Optimizer', href: '/zion-ecommerce-optimizer' },
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights' },
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
        { label: 'Zion AI Social Listener', href: '/zion-ai-social-listener' },
        { label: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer' },
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
        { label: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker' },
        { label: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder' },
        { label: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
        { label: 'Zion AI Workflow Automation', href: '/zion-ai-workflow-automation' },
        { label: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
        { label: 'Zion AI Data Warehouse', href: '/zion-ai-data-warehouse' },
        { label: 'Zion AI Mobile App Builder', href: '/zion-ai-mobile-app-builder' },
        { label: 'Zion AI API Manager', href: '/zion-ai-api-manager' },
        { label: 'Zion AI Backup Manager', href: '/zion-ai-backup-manager' },
        { label: 'Zion AI Testing Automation', href: '/zion-ai-testing-automation' },
        { label: 'View All Micro SAAS', href: '/micro-saas', featured: true }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      links: [
        { label: '5G Data Analytics', href: '/5g-data-analytics' },
        { label: '5G Edge Computing', href: '/5g-edge-computing' },
        { label: '5G Implementation', href: '/5g-implementation' },
        { label: '5G Mobile Applications', href: '/5g-mobile-applications' },
        { label: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { label: '5G Private Networks', href: '/5g-private-networks' },
        { label: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { label: 'View All 5G Solutions', href: '/5g-solutions', featured: true }
      ]
    }
  ];
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
