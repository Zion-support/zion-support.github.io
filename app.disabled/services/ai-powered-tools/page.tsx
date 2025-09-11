export const metadata = {
  title: 'AI-Powered Tools | Zion Tech Group',
  description:
    'Cutting-edge AI-powered micro SAAS tools for content creation, automation, analytics, and business optimization. Leverage artificial intelligence to transform your workflow.',
};

// eslint-disable-next-line react-refresh/only-export-components

        {/* AI Tool Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AIToolCategory
            title="Content Generation"
            icon="✍️"
            description="AI-powered content creation and optimization tools"
            tools={[
              'AI Blog Writer Pro',
              'Social Media Content Generator',
              'Email Marketing AI',
              'SEO Content Optimizer',
              'Video Script Generator',
              'Product Description AI',
            ]}
          />
          <AIToolCategory"
            title="Business Automation""
            icon="🤖""
            description="Intelligent automation for business processes"
            tools={[
              'Smart Document Processor',
              'AI Customer Support Bot',
              'Automated Lead Scoring',
              'Invoice Processing AI',
              'Meeting Scheduler AI',
              'Workflow Automation Engine',
            ]}
          />
          <AIToolCategory"
            title="Analytics & Insights""
            icon="📈""
            description="AI-driven analytics and business intelligence"
            tools={[
              'Predictive Analytics Dashboard',
              'Customer Behavior AI',
              'Sales Forecasting Tool',
              'Market Trend Analyzer',
              'Competitor Intelligence AI',
              'ROI Optimization Engine',
            ]}
          />
        </div>

        {/* Featured AI Tools */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured AI-Powered Tools;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AITool"
              title="AI Content Studio""
              description="Complete content creation suite with AI writing, editing, and optimization"
              features={[
                'Multi-format content generation',
                'Brand voice training',
                'SEO optimization',
                'Plagiarism detection',
                'Content calendar integration',
                'Performance analytics',
              ]}
              price="$29-99/month"
              category="Content Creation"
              useCase="Marketing teams, agencies, content creators"
              demoUrl="https://demo.ziontechgroup.com/ai-content-studio"
            />
            <AITool"
              title="Smart CRM Assistant""
              description="AI-powered CRM with intelligent lead scoring and automated follow-ups"
              features={[
                'Predictive lead scoring',
                'Automated email sequences',
                'Meeting transcription',
                'Deal probability analysis',
                'Customer sentiment tracking',
                'Sales forecasting',
              ]}
              price="$49-149/month"
              category="Sales & CRM"
              useCase="Sales teams, small businesses, startups"
              demoUrl="https://demo.ziontechgroup.com/smart-crm"
            />
            <AITool"
              title="AI Analytics Pro""
              description="Advanced business intelligence with natural language queries"
              features={[
                'Natural language queries',
                'Automated insights generation',
                'Anomaly detection',
                'Custom dashboard creation',
                'Data visualization',
                'Mobile app access',
              ]}
              price="$39-119/month"
              category="Analytics"
              useCase="Data analysts, executives, business owners"
              demoUrl="https://demo.ziontechgroup.com/ai-analytics"
            />
            <AITool"
              title="Document AI Processor""
              description="Intelligent document processing and data extraction"
              features={[
                'OCR with 99% accuracy',
                'Smart data extraction',
                'Document classification',
                'Automated workflows',
                'API integration',
                'Bulk processing',
              ]}
              price="$19-79/month"
              category="Document Processing"
              useCase="Legal firms, accounting, healthcare, insurance"
              demoUrl="https://demo.ziontechgroup.com/document-ai"
            />
            <AITool"
              title="AI Email Marketing""
              description="Intelligent email marketing with personalization and optimization"
              features={[
                'AI subject line optimization',
                'Send time optimization',
                'Content personalization',
                'A/B testing automation',
                'Unsubscribe prediction',
                'Revenue attribution',
              ]}
              price="$25-89/month"
              category="Email Marketing"
              useCase="E-commerce, SaaS, marketing agencies"
              demoUrl="https://demo.ziontechgroup.com/ai-email"
            />
            <AITool"
              title="Smart Inventory Manager""
              description="AI-powered inventory optimization and demand forecasting"
              features={[
                'Demand forecasting',
                'Reorder point optimization',
                'Price optimization',
                'Supplier performance analysis',
                'Seasonal trend analysis',
                'Multi-location management',
              ]}
              price="$35-129/month"
              category="Inventory Management"
              useCase="Retail, e-commerce, manufacturing, distribution"
              demoUrl="https://demo.ziontechgroup.com/smart-inventory"
            />
          </div>
        </div>

        {/* AI Technology Stack */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Technology Stack;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AITechnology"
              category="Language Models"
              technologies={[
                'GPT-4',
                'Claude',
                'Gemini',
                'Llama',
                'Custom Models',
              ]}
            />
            <AITechnology"
              category="Machine Learning"
              technologies={[
                'TensorFlow',
                'PyTorch',
                'Scikit-learn',
                'XGBoost',
                'AutoML',
              ]}
            />
            <AITechnology"
              category="NLP & Processing"
              technologies={[
                'spaCy',
                'NLTK',
                'Transformers',
                'BERT',
                'RoBERTa',
              ]}
            />
            <AITechnology"
              category="Computer Vision"
              technologies={[
                'OpenCV',
                'YOLO',
                'ResNet',
                'EfficientNet',
                'Custom CNNs',
              ]}
            />
          </div>
        </div>

        {/* Integration Capabilities */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Integration Capabilities;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Integration"
              title="CRM & Sales Tools""
              description="Seamless integration with popular CRM platforms"
              platforms={[
                'Salesforce',
                'HubSpot',
                'Pipedrive',
                'Zoho',
                'Custom APIs',
              ]}
            />
            <Integration"
              title="Marketing Platforms""
              description="Connect with marketing automation tools"
              platforms={[
                'Mailchimp',
                'Constant Contact',
                'ActiveCampaign',
                'Marketo',
                'Pardot',
              ]}
            />
            <Integration"
              title="Business Applications""
              description="Integrate with essential business software"
              platforms={[
                'Slack',
                'Microsoft Teams',
                'Google Workspace',
                'Office 365',
                'Zapier',
              ]}
            />
          </div>
        </div>

        {/* Pricing Plans */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Tool Pricing Plans;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AIPricingPlan"
              name="Starter""
              price="$29/month""
              description="Perfect for individuals and small teams"
              features={[
                '1 AI tool access',
                'Basic AI features',
                'Email support',
                'Standard integrations',
                'Monthly usage limits',
                'Basic analytics',
              ]}
              popular={false}
            />
            <AIPricingPlan"
              name="Professional""
              price="$99/month""
              description="Ideal for growing businesses"
              features={[
                '3 AI tools access',
                'Advanced AI features',
                'Priority support',
                'All integrations',
                'Higher usage limits',
                'Advanced analytics',
                'Custom workflows',
              ]}
              popular={true}
            />
            <AIPricingPlan"
              name="Enterprise""
              price="$299/month""
              description="For large organizations"
              features={[
                'Unlimited AI tools',
                'Premium AI features',
                '24/7 dedicated support',
                'Custom integrations',
                'Unlimited usage',
                'Custom analytics',
                'White-label options',
                'SLA guarantee',
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Stories */}"
        <div className="mb-16">"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Success Stories;
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessStory"
              company="TechStart Inc.""
              industry="SaaS""
              tool="AI Content Studio""
              result="300% increase in content production""
              description="Reduced content creation time from 8 hours to 2 hours per article while maintaining quality."
            />
            <SuccessStory"
              company="RetailMax""
              industry="E-commerce""
              tool="Smart Inventory Manager""
              result="40% reduction in stockouts""
              description="Optimized inventory levels and reduced carrying costs by $50k annually."
            />
            <SuccessStory"
              company="MarketingPro Agency""
              industry="Marketing""
              tool="AI Email Marketing""
              result="250% improvement in email open rates""
              description="Personalized email campaigns increased engagement and conversion rates significantly."
            />
          </div>
        </div>

        {/* Contact CTA */}"
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">"
          <h2 className="text-3xl font-bold mb-4">
            Ready to Harness AI Power?
          </h2>"
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with our AI-powered micro SAAS tools. Get;
            started with a free trial and see the difference AI can make.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a"
              href="tel:+13024640950""
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950;
            </a>
            <a"
              href="mailto:kleber@ziontechgroup.com""
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us;
            </a>
          </div>"
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
              View All Services
            </Link>

          </div>
        </div>
      </div>
    </div>
  );

}
  title,
  icon,
  description,
  tools,
}: {}
  title: string;
  icon: string;
  description: string;
  tools: string[];
}) {}
  return ("
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">"
      <div className="text-3xl mb-4">{icon}</div>"
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">
        {tools.map((tool, index) => ("
          <li key={index} className="flex items-center text-gray-600">"
            <span className="text-purple-500 mr-2">•</span>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AITool({}
  title,
  description,
  features,
  price,
  category,
  useCase,
  demoUrl,
}: {}
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  useCase: string;
  demoUrl: string;
}) {}
  return ("
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">"
      <div className="flex justify-between items-start mb-4">"
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>"
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <div className="mb-4">"
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>"
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>"
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>"
          <div className="font-bold text-purple-600">{price}</div>"
          <a href={demoUrl} className="text-sm text-blue-600 hover:underline">
            View Demo;
          </a>
        </div>
        <a"
          href="tel:+13024640950""
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
        >
          Get Started;
        </a>
      </div>
    </div>
  );
}

function AITechnology({}
  category,
  technologies,
}: {}
  category: string;
  technologies: string[];
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>"
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span;
            key={index}"
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Integration({}
  title,
  description,
  platforms,
}: {}
  title: string;
  description: string;
  platforms: string[];
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform, index) => (
          <span;
            key={index}"
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
          >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
}

function AIPricingPlan({}
  name,
  price,
  description,
  features,
  popular,
}: {}
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}) {}
  return (
    <div
      className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-purple-500' : 'border-gray-200'} relative`}
    >
      {popular && ("
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">"
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular;
          </span>
        </div>
      )}"
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>"
      <div className="text-gray-500 mb-6">{description}</div>"
      <ul className="space-y-3">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-center text-gray-600">"
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started;
      </a>
    </div>
  );
}

function SuccessStory({}
  company,
  industry,
  tool,
  result,
  description,
}: {}
  company: string;
  industry: string;
  tool: string;
  result: string;
  description: string;
}) {}
  return ("
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">"
      <div className="flex items-center mb-4">"
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">"
          <span className="text-purple-600 font-bold text-lg">
            {company.charAt(0)}
          </span>
        </div>
        <div>"
          <h4 className="font-bold text-gray-900">{company}</h4>"
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>"
      <h5 className="font-semibold text-gray-900 mb-2">{tool}</h5>"
      <div className="text-2xl font-bold text-purple-600 mb-2">{result}</div>"
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

"`

