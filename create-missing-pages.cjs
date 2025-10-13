const fs = require('fs');
const path = require('path');

// List of all pages referenced in App.tsx
const requiredPages = [
  'about', 'contact', 'services', 'blog', 'demo', 'privacy', 'terms',
  'ai-analytics', 'ai-automation', 'ai-business-intelligence', 'ai-content-generation',
  'ai-customer-service', 'ai-data-analytics', 'ai-email-automation', 'ai-fraud-detection',
  'ai-healthcare', 'ai-marketing', 'ai-predictive-analytics', 'ai-project-management',
  'ai-recommendation-engine', 'ai-sales-automation', 'ai-workflow-automation',
  'cloud-infrastructure', 'cybersecurity-solutions', 'web-development', 'mobile-development',
  'database-management', 'custom-software', 'network-infrastructure',
  'zion-analytics-pro', 'zion-security-shield', 'zion-cloud-vault', 'zion-content-studio',
  'zion-ai-video-generator', 'zion-ai-invoice-generator', 'zion-ai-customer-insights',
  'zion-ai-email-analyzer', 'zion-smart-inventory-optimizer', 'zion-ai-customer-sentiment-tracker',
  'zion-smart-expense-categorizer', 'zion-ai-voice-assistant-pro', 'zion-ai-code-reviewer',
  'zion-ai-social-media-manager', 'zion-ai-contract-analyzer', 'zion-ai-performance-optimizer',
  'zion-ai-customer-churn-predictor', 'zion-ai-supply-chain-optimizer', 'zion-ai-financial-forecaster',
  'zion-ai-content-moderator', 'zion-ai-translator-pro', 'zion-ai-data-cleaner',
  'zion-ai-task-scheduler', 'zion-ai-customer-support-pro',
  '5g-solutions', '5g-data-analytics', '5g-edge-computing', '5g-implementation',
  '5g-mobile-applications', '5g-network-infrastructure', '5g-private-networks',
  '5g-smart-city-solutions', '5g-iot-solutions'
];

// Generic page template
const pageTemplate = (pageName, title, description, keywords) => `import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp,
  Brain,
  Target,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Award,
  Sparkles,
  Shield,
  Zap,
  BarChart3
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page = () => {
  const features = [
    {
      title: "Advanced AI Technology",
      description: "Cutting-edge artificial intelligence solutions designed to transform your business operations and drive growth.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive analytics and reporting tools to track performance and optimize results.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability with 99.9% uptime guarantee.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Easy Integration",
      description: "Seamless integration with your existing systems and workflows.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "40% Efficiency Boost",
      description: "Streamline operations and increase productivity",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "99.9% Uptime",
      description: "Reliable service with enterprise-grade infrastructure",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and assistance",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "ROI Optimization",
      description: "Maximize returns with data-driven insights",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="${title} | Zion Tech Group"
        description="${description}"
        keywords="${keywords}"
        canonical="https://ziontechgroup.com/${pageName}"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              ${title}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            ${description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Learn More
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the advanced capabilities that make our solution the perfect choice for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
                className="group hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with Zion Tech Group's cutting-edge technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses already using our solutions to transform their operations. 
              Contact us today to learn more about how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Us
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page;`;

// Function to create page content based on page name
function getPageContent(pageName) {
  const pageData = {
    'about': {
      title: 'About Zion Tech Group',
      description: 'Learn about Zion Tech Group, a leading provider of AI-powered solutions and IT services.',
      keywords: 'about us, company, team, mission, vision, AI solutions, IT services'
    },
    'contact': {
      title: 'Contact Zion Tech Group',
      description: 'Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation.',
      keywords: 'contact, support, sales, AI consulting, IT services, digital transformation'
    },
    'services': {
      title: 'IT Services & Solutions',
      description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation.',
      keywords: 'IT services, cloud computing, cybersecurity, digital transformation, technology consulting'
    },
    'blog': {
      title: 'Technology Blog & Insights',
      description: 'Latest insights on AI, technology trends, and digital transformation from Zion Tech Group.',
      keywords: 'blog, technology insights, AI trends, digital transformation, tech news'
    },
    'demo': {
      title: 'Request a Demo',
      description: 'See our AI solutions and IT services in action with a personalized demo.',
      keywords: 'demo, trial, AI solutions, IT services, product demonstration'
    },
    'privacy': {
      title: 'Privacy Policy',
      description: 'Zion Tech Group privacy policy and data protection information.',
      keywords: 'privacy policy, data protection, GDPR, privacy, security'
    },
    'terms': {
      title: 'Terms of Service',
      description: 'Terms of service and conditions for using Zion Tech Group services.',
      keywords: 'terms of service, legal, conditions, agreement, terms'
    }
  };

  // Default content for AI services
  if (pageName.startsWith('ai-')) {
    const serviceName = pageName.replace('ai-', '').replace(/-/g, ' ');
    return {
      title: `AI ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)} Solutions`,
      description: `Advanced AI-powered ${serviceName} solutions to transform your business operations and drive growth.`,
      keywords: `AI ${serviceName}, artificial intelligence, machine learning, automation, business solutions`
    };
  }

  // Default content for Zion services
  if (pageName.startsWith('zion-')) {
    const serviceName = pageName.replace('zion-', '').replace(/-/g, ' ');
    return {
      title: `Zion ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}`,
      description: `Professional ${serviceName} solutions designed to optimize your business operations and maximize efficiency.`,
      keywords: `${serviceName}, business solutions, automation, productivity, optimization`
    };
  }

  // Default content for 5G services
  if (pageName.startsWith('5g-')) {
    const serviceName = pageName.replace('5g-', '').replace(/-/g, ' ');
    return {
      title: `5G ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)} Solutions`,
      description: `Next-generation 5G ${serviceName} solutions for high-speed connectivity and advanced applications.`,
      keywords: `5G ${serviceName}, next-generation connectivity, high-speed internet, mobile technology`
    };
  }

  // Return default content
  return pageData[pageName] || {
    title: pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' '),
    description: `Professional ${pageName.replace(/-/g, ' ')} solutions for your business needs.`,
    keywords: pageName.replace(/-/g, ', ')
  };
}

// Create missing pages
function createMissingPages() {
  const appDir = path.join(__dirname, 'app');
  let createdCount = 0;

  requiredPages.forEach(pageName => {
    const pageDir = path.join(appDir, pageName);
    const pageFile = path.join(pageDir, 'page.tsx');

    // Check if page directory exists
    if (!fs.existsSync(pageDir)) {
      console.log(`Creating directory: ${pageName}`);
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // Check if page file exists
    if (!fs.existsSync(pageFile)) {
      console.log(`Creating page: ${pageName}/page.tsx`);
      const content = getPageContent(pageName);
      const pageContent = pageTemplate(pageName, content.title, content.description, content.keywords);
      fs.writeFileSync(pageFile, pageContent);
      createdCount++;
    }
  });

  console.log(`Created ${createdCount} missing pages.`);
}

createMissingPages();