const fs = require('fs');
const path = require('path');

// List of missing pages that need to be created
const missingPages = [
  'ai-automation',
  'ai-business-intelligence',
  'ai-content-generation',
  'ai-customer-service',
  'ai-data-analytics',
  'ai-email-automation',
  'ai-fraud-detection',
  'ai-healthcare',
  'ai-marketing',
  'ai-predictive-analytics',
  'ai-project-management',
  'ai-recommendation-engine',
  'ai-sales-automation',
  'ai-workflow-automation',
  'cloud-infrastructure',
  'web-development',
  'mobile-development',
  'database-management',
  'custom-software',
  'network-infrastructure',
  'zion-analytics-pro',
  'zion-security-shield',
  'zion-cloud-vault',
  'zion-content-studio',
  'zion-ai-video-generator',
  'zion-ai-invoice-generator',
  'zion-ai-customer-insights',
  'zion-ai-email-analyzer',
  'zion-smart-inventory-optimizer',
  'zion-ai-customer-sentiment-tracker',
  'zion-smart-expense-categorizer',
  'zion-ai-voice-assistant-pro',
  'zion-ai-code-reviewer',
  'zion-ai-social-media-manager',
  'zion-ai-contract-analyzer',
  'zion-ai-performance-optimizer',
  'zion-ai-customer-churn-predictor',
  'zion-ai-supply-chain-optimizer',
  'zion-ai-financial-forecaster',
  'zion-ai-content-moderator',
  'zion-ai-translator-pro',
  'zion-ai-data-cleaner',
  'zion-ai-task-scheduler',
  'zion-ai-customer-support-pro',
  'zion-ai-meeting-transcriber',
  'zion-ai-sales-predictor',
  'zion-smart-expense-tracker',
  'zion-ai-document-analyzer',
  'zion-customer-satisfaction-monitor',
  'zion-ai-workflow-automator',
  '5g-data-analytics',
  '5g-edge-computing',
  '5g-implementation',
  '5g-mobile-applications',
  '5g-network-infrastructure',
  '5g-private-networks',
  '5g-smart-city-solutions',
  '5g-iot-solutions',
  'blog',
  'micro-saas-services',
  '5g-solutions',
  'tutorials',
  'demo',
  'support',
  'privacy',
  'terms'
];

// Template for page components
const pageTemplate = (pageName, title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Sparkles,
  TrendingUp,
  Cpu,
  Brain,
  Target
} from 'lucide-react';

const ${pageName.replace(/^[0-9]/, (match) => 'A' + match).replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^[a-z]/, (match) => match.toUpperCase())}Page: React.FC = () => {
  const features = [
    {
      title: "Advanced AI Technology",
      description: "Leverage cutting-edge artificial intelligence to automate processes and gain valuable insights.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["AI automation", "Smart insights", "Predictive analytics"]
    },
    {
      title: "Real-time Processing",
      description: "Process data and execute tasks in real-time for immediate results and responses.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Real-time data", "Instant results", "Live monitoring"]
    },
    {
      title: "Scalable Solutions",
      description: "Scale your operations seamlessly as your business grows with our flexible architecture.",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Auto-scaling", "Flexible pricing", "Growth support"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic features",
        "Email support",
        "Standard templates",
        "5GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced features",
        "Priority support",
        "Custom templates",
        "50GB storage",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "All features",
        "Dedicated support",
        "White-label options",
        "Unlimited storage",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${pageName.replace(/-/g, ', ')}, AI solutions, technology services" />
        <link rel="canonical" href="https://ziontechgroup.com/${pageName}" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 text-sm font-medium">#1 ${title} Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  ${title}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                ${description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                  <Target className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to succeed with our ${title.toLowerCase()} solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={\`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl \${
                    plan.popular 
                      ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                      : 'border-white/10 hover:border-blue-500/30'
                  }\`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={\`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 \${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400/10'
                    }\`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using our ${title.toLowerCase()} solution. 
                Start your free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${pageName.replace(/^[0-9]/, (match) => 'A' + match).replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/^[a-z]/, (match) => match.toUpperCase())}Page;`;

// Function to create page titles and descriptions
const getPageInfo = (pageName) => {
  const pageInfo = {
    'ai-automation': { title: 'AI Automation', description: 'Automate your business processes with intelligent AI solutions that work 24/7.' },
    'ai-business-intelligence': { title: 'AI Business Intelligence', description: 'Transform your data into actionable insights with advanced AI analytics.' },
    'ai-content-generation': { title: 'AI Content Generation', description: 'Create high-quality content at scale with our AI-powered writing tools.' },
    'ai-customer-service': { title: 'AI Customer Service', description: 'Provide exceptional customer support with intelligent AI chatbots and automation.' },
    'ai-data-analytics': { title: 'AI Data Analytics', description: 'Analyze your data with AI-powered insights and predictive analytics.' },
    'ai-email-automation': { title: 'AI Email Automation', description: 'Automate your email marketing with AI-powered personalization and optimization.' },
    'ai-fraud-detection': { title: 'AI Fraud Detection', description: 'Protect your business with advanced AI-powered fraud detection and prevention.' },
    'ai-healthcare': { title: 'AI Healthcare', description: 'Revolutionize healthcare with AI-powered diagnostics and patient care solutions.' },
    'ai-marketing': { title: 'AI Marketing', description: 'Supercharge your marketing with AI-driven campaigns and customer insights.' },
    'ai-predictive-analytics': { title: 'AI Predictive Analytics', description: 'Predict future trends and outcomes with advanced AI analytics models.' },
    'ai-project-management': { title: 'AI Project Management', description: 'Streamline project management with AI-powered planning and optimization.' },
    'ai-recommendation-engine': { title: 'AI Recommendation Engine', description: 'Boost engagement with personalized AI-powered recommendations.' },
    'ai-sales-automation': { title: 'AI Sales Automation', description: 'Accelerate sales with AI-powered lead generation and conversion optimization.' },
    'ai-workflow-automation': { title: 'AI Workflow Automation', description: 'Automate complex workflows with intelligent AI process optimization.' },
    'cloud-infrastructure': { title: 'Cloud Infrastructure', description: 'Build scalable cloud solutions with our enterprise-grade infrastructure services.' },
    'web-development': { title: 'Web Development', description: 'Create stunning, responsive websites with our modern web development services.' },
    'mobile-development': { title: 'Mobile Development', description: 'Build powerful mobile apps for iOS and Android with our expert development team.' },
    'database-management': { title: 'Database Management', description: 'Optimize your database performance with our comprehensive management services.' },
    'custom-software': { title: 'Custom Software', description: 'Get tailored software solutions designed specifically for your business needs.' },
    'network-infrastructure': { title: 'Network Infrastructure', description: 'Design and implement robust network infrastructure for your organization.' },
    'blog': { title: 'Blog', description: 'Stay updated with the latest insights on AI, technology, and business innovation.' },
    'micro-saas-services': { title: 'Micro SAAS Services', description: 'Discover our innovative micro SAAS solutions designed for modern businesses.' },
    '5g-solutions': { title: '5G Solutions', description: 'Leverage the power of 5G technology with our comprehensive connectivity solutions.' },
    'tutorials': { title: 'Tutorials', description: 'Learn how to use our AI and technology solutions with comprehensive tutorials.' },
    'demo': { title: 'Demo', description: 'See our solutions in action with interactive demos and live examples.' },
    'support': { title: 'Support', description: 'Get help and support for all our products and services.' },
    'privacy': { title: 'Privacy Policy', description: 'Learn about how we protect and handle your personal information.' },
    'terms': { title: 'Terms of Service', description: 'Review our terms and conditions for using our services.' }
  };

  return pageInfo[pageName] || { 
    title: pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), 
    description: `Professional ${pageName.replace(/-/g, ' ')} services for your business.` 
  };
};

// Generate all missing pages
missingPages.forEach(pageName => {
  const pageDir = path.join(__dirname, 'app', pageName);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Check if page already exists and is not empty
  if (fs.existsSync(pageFile)) {
    const content = fs.readFileSync(pageFile, 'utf8');
    if (content.trim().length > 0) {
      console.log(`Skipping ${pageName} - already exists and not empty`);
      return;
    }
  }
  
  const pageInfo = getPageInfo(pageName);
  const pageContent = pageTemplate(pageName, pageInfo.title, pageInfo.description);
  
  fs.writeFileSync(pageFile, pageContent);
  console.log(`Generated ${pageName}/page.tsx`);
});

console.log('All missing pages have been generated!');