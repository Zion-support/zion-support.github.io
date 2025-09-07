<<<<<<< HEAD


export const metadata = {
  title: 'AI Data Analytics | Zion Tech Group',
  description:
    'Advanced AI-powered data analytics platform with predictive modeling, real-time insights, and automated reporting.',
};

export default function AIDataAnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Data Analytics
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your data into actionable insights with our AI-powered
          analytics platform. Get predictive modeling, real-time dashboards, and
          automated business intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Analytics Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🧠"
              title="Predictive Modeling"
              description="Machine learning models for forecasting, trend analysis, and predictive insights"
            />
            <FeatureItem
              icon="📊"
              title="Real-Time Dashboards"
              description="Interactive dashboards with live data visualization and customizable KPIs"
            />
            <FeatureItem
              icon="🔍"
              title="Data Mining"
              description="Advanced data mining techniques to discover hidden patterns and correlations"
            />
            <FeatureItem
              icon="📈"
              title="Business Intelligence"
              description="Automated BI reports with natural language insights and recommendations"
            />
            <FeatureItem
              icon="🔄"
              title="Data Integration"
              description="Connect to 100+ data sources including databases, APIs, and cloud platforms"
            />
            <FeatureItem
              icon="🎯"
              title="Anomaly Detection"
              description="AI-powered anomaly detection to identify unusual patterns and potential issues"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h2>
          <div className="space-y-6">
            <PricingCard
              name="Starter"
              price="$199"
              period="month"
              description="Perfect for small teams"
              features={[
                '5 data sources',
                'Basic dashboards',
                'Standard reports',
                'Email support',
                'Monthly insights',
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$499"
              period="month"
              description="Most popular for growing businesses"
              features={[
                '20 data sources',
                'Advanced dashboards',
                'Predictive analytics',
                'Priority support',
                'Real-time monitoring',
                'Custom models',
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$1,299"
              period="month"
              description="For large organizations"
              features={[
                'Unlimited data sources',
                'Custom dashboards',
                'Advanced AI models',
                'Dedicated support',
                'White-label solution',
                'API access',
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Analytics Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Revenue Optimization
            </h3>
            <p className="text-gray-600">
              Identify revenue opportunities and optimize pricing strategies
              with predictive analytics
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Customer Insights
            </h3>
            <p className="text-gray-600">
              Understand customer behavior and preferences to improve retention
              and satisfaction
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Operational Efficiency
            </h3>
            <p className="text-gray-600">
              Optimize operations and reduce costs with data-driven process
              improvements
=======
export const metadata = {
  title: 'Ai Data Analytics | Zion Tech Group',
  description:
    'Professional ai data analytics services for your business needs.',
  keywords: 'ai-data-analytics, services, business, technology',
};

export default function ServicePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Ai Data Analytics
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional ai data analytics services for your business needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored ai data analytics solutions designed for your specific
              business requirements.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Advanced Technology
            </h3>
            <p className='text-gray-300'>
              Cutting-edge technology and best practices to deliver exceptional
              results.
            </p>
          </div>
<<<<<<< HEAD
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai data analytics solutions run smoothly.
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>24/7 Support</h3>
            <p className='text-gray-300'>
              Round-the-clock support to ensure your ai data analytics solutions
              run smoothly.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
            </p>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Unlock Your Data&apos;s Potential
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 800+ businesses using our AI Data Analytics platform to make
          smarter, data-driven decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
<<<<<<< HEAD
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Free Trial - $399/month
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Advanced Analytics Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔮"
            title="Predictive Analytics"
            description="AI-powered forecasting and trend analysis to predict future outcomes with high accuracy."
            features={[
              "Machine learning models",
              "Time series forecasting",
              "Anomaly detection",
              "Risk assessment"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Real-time Dashboards"
            description="Interactive dashboards with live data visualization and customizable metrics."
            features={[
              "Live data streaming",
              "Interactive charts",
              "Custom metrics",
              "Mobile-responsive design"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Insights"
            description="AI automatically identifies patterns, trends, and anomalies in your data."
            features={[
              "Pattern recognition",
              "Trend identification",
              "Anomaly detection",
              "Automated alerts"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Advanced Visualizations"
            description="Create stunning visualizations with AI-suggested chart types and layouts."
            features={[
              "AI-suggested visualizations",
              "Custom chart types",
              "3D data modeling",
              "Interactive exploration"
            ]}
          />
          <FeatureCard
            icon="🔍"
            title="Natural Language Queries"
            description="Ask questions about your data in plain English and get instant answers."
            features={[
              "Voice queries",
              "Text-based questions",
              "Context understanding",
              "Multi-language support"
            ]}
          />
          <FeatureCard
            icon="📋"
            title="Automated Reporting"
            description="Generate comprehensive reports automatically with AI-powered insights and recommendations."
            features={[
              "Scheduled reports",
              "Custom templates",
              "Executive summaries",
              "Action recommendations"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Flexible Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Analyst"
            price="$399"
            period="month"
            description="Perfect for small teams and startups"
            features={[
              "Up to 10 data sources",
              "Basic AI analytics",
              "Standard visualizations",
              "Email support",
              "5 user accounts"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$999"
            period="month"
            description="Ideal for growing businesses"
            features={[
              "Up to 50 data sources",
              "Advanced AI features",
              "Custom visualizations",
              "Priority support",
              "25 user accounts",
              "API access"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$2,499"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited data sources",
              "Custom AI training",
              "White-label solution",
              "24/7 dedicated support",
              "Unlimited users",
              "On-premise deployment"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="95%"
            label="Prediction Accuracy"
            description="Average accuracy of AI predictions"
          />
          <MetricCard
            number="80%"
            label="Time Savings"
            description="Reduction in time spent on data analysis"
          />
          <MetricCard
            number="300%"
            label="Insight Discovery"
            description="Increase in actionable insights found"
          />
          <MetricCard
            number="99.9%"
            label="Uptime"
            description="Platform availability and reliability"
          />
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry-Specific Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            icon="🏦"
            title="Financial Services"
            description="Risk assessment, fraud detection, and regulatory compliance analytics."
            features={["Fraud detection", "Risk modeling", "Compliance reporting", "Market analysis"]}
          />
          <IndustryCard
            icon="🛒"
            title="E-commerce"
            description="Customer behavior analysis, inventory optimization, and sales forecasting."
            features={["Customer segmentation", "Inventory optimization", "Sales forecasting", "Conversion analysis"]}
          />
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="Patient outcomes analysis, resource optimization, and clinical research insights."
            features={["Patient analytics", "Resource optimization", "Clinical insights", "Outcome prediction"]}
          />
          <IndustryCard
            icon="🏭"
            title="Manufacturing"
            description="Quality control, predictive maintenance, and supply chain optimization."
            features={["Quality analytics", "Predictive maintenance", "Supply chain optimization", "Production insights"]}
          />
          <IndustryCard
            icon="🎓"
            title="Education"
            description="Student performance analysis, learning outcomes, and institutional effectiveness."
            features={["Student analytics", "Learning outcomes", "Performance tracking", "Resource optimization"]}
          />
          <IndustryCard
            icon="🏠"
            title="Real Estate"
            description="Market analysis, property valuation, and investment opportunity identification."
            features={["Market analysis", "Property valuation", "Investment insights", "Trend forecasting"]}
          />
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Connect Any Data Source</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <DataSourceCard name="Databases" icon="🗄️" />
          <DataSourceCard name="APIs" icon="🔌" />
          <DataSourceCard name="Cloud Storage" icon="☁️" />
          <DataSourceCard name="Spreadsheets" icon="📊" />
          <DataSourceCard name="Social Media" icon="📱" />
          <DataSourceCard name="IoT Devices" icon="🌐" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Michael Chen"
            role="Chief Data Officer"
            company="FinTech Solutions"
            content="The predictive analytics helped us identify fraud patterns that saved us $2M in the first quarter alone."
            avatar="👨‍💼"
          />
          <TestimonialCard
            name="Lisa Rodriguez"
            role="VP of Analytics"
            company="RetailMax"
            content="Our inventory optimization improved by 40% and we reduced stockouts by 60% using their AI insights."
            avatar="👩‍💼"
          />
          <TestimonialCard
            name="Dr. James Wilson"
            role="Research Director"
            company="MedTech Research"
            content="The clinical analytics platform accelerated our research by 3x and improved patient outcome predictions by 85%."
            avatar="👨‍⚕️"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data&apos;s Potential?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 1,500+ organizations that have transformed their decision-making with our AI analytics platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
=======
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
          >
            Get Free Analysis
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white'}`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
<<<<<<< HEAD

function MetricCard({ number, label, description }: { number: string; label: string; description: string }) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-indigo-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function IndustryCard({ icon, title, description, features }: { 
  icon: string; 
  title: string; 
  description: string; 
  features: string[]; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataSourceCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-semibold text-gray-900">{name}</div>
    </div>
  );
}

function TestimonialCard({ name, role, company, content, avatar }: { 
  name: string; 
  role: string; 
  company: string; 
  content: string; 
  avatar: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{avatar}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">&ldquo;{content}&rdquo;</p>
    </div>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    </div>
  );
}
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
