import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cloud Optimization Services | Zion Tech Group - AI-Powered Cloud Performance',
  description: 'Revolutionary cloud optimization services with AI-powered cost reduction, performance enhancement, security hardening, and automated scaling solutions.',
  keywords: 'cloud optimization, cloud cost reduction, cloud performance, AWS optimization, Azure optimization, GCP optimization, cloud migration'
};

export default function CloudOptimizationPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Cloud Optimization Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Maximize your cloud ROI with AI-powered optimization. 
          Reduce costs by up to 60% while improving performance, security, and scalability across AWS, Azure, and GCP.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Cloud Optimization Services Inquiry"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Get Free Cloud Audit
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Cloud Optimization</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform analyzes your entire cloud infrastructure to identify optimization opportunities and implement cost-effective solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="💰"
            title="AI-Powered Cost Optimization"
            description="Machine learning algorithms analyze usage patterns to identify cost-saving opportunities and implement automated optimization strategies."
            features={[
              "Right-sizing recommendations",
              "Reserved instance optimization",
              "Spot instance utilization",
              "Storage tier optimization",
              "Automated cost alerts"
            ]}
          />
          <FeatureCard
            icon="⚡"
            title="Performance Enhancement"
            description="Optimize application performance with intelligent load balancing, caching strategies, and resource allocation based on real-time demand."
            features={[
              "Auto-scaling optimization",
              "Load balancer tuning",
              "CDN configuration",
              "Database optimization",
              "Network performance tuning"
            ]}
          />
          <FeatureCard
            icon="🔒"
            title="Security Hardening"
            description="Comprehensive security assessment and hardening across all cloud services with automated compliance monitoring and threat detection."
            features={[
              "Security posture assessment",
              "Compliance automation",
              "Threat detection",
              "Access control optimization",
              "Encryption implementation"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Intelligent Monitoring"
            description="Advanced monitoring and alerting with predictive analytics to prevent issues before they impact your business."
            features={[
              "Predictive monitoring",
              "Anomaly detection",
              "Custom dashboards",
              "Automated remediation",
              "Performance forecasting"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Automated Scaling"
            description="Intelligent auto-scaling that responds to demand patterns and business requirements while maintaining cost efficiency."
            features={[
              "Predictive scaling",
              "Cost-aware scaling",
              "Multi-cloud scaling",
              "Custom scaling policies",
              "Performance optimization"
            ]}
          />
          <FeatureCard
            icon="🏗️"
            title="Architecture Optimization"
            description="Redesign and optimize your cloud architecture for better performance, security, and cost efficiency using best practices."
            features={[
              "Architecture assessment",
              "Migration planning",
              "Best practice implementation",
              "Disaster recovery design",
              "Multi-cloud strategy"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Service Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the optimization package that fits your cloud infrastructure and budget requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Cloud Audit"
            price="$2,500"
            period="one-time"
            description="Comprehensive assessment of your current cloud infrastructure and optimization opportunities"
            features={[
              "Infrastructure analysis",
              "Cost optimization report",
              "Security assessment",
              "Performance evaluation",
              "Recommendations roadmap",
              "30-day support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Optimization Plus"
            price="$5,000"
            period="per month"
            description="Ongoing optimization services with continuous monitoring and improvement"
            features={[
              "Monthly optimization",
              "24/7 monitoring",
              "Automated cost reduction",
              "Performance tuning",
              "Security updates",
              "Priority support",
              "Monthly reports"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise Suite"
            price="$15,000"
            period="per month"
            description="Complete cloud management with dedicated team and custom solutions"
            features={[
              "Dedicated cloud team",
              "Custom optimization",
              "Multi-cloud management",
              "Advanced security",
              "Disaster recovery",
              "SLA guarantee",
              "White-glove service"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our cloud optimization services have delivered measurable results for clients across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <MetricCard
            number="60%"
            label="Average Cost Reduction"
            description="Typical savings achieved through our optimization strategies"
          />
          <MetricCard
            number="45%"
            label="Performance Improvement"
            description="Average increase in application performance and response times"
          />
          <MetricCard
            number="99.9%"
            label="Uptime Achievement"
            description="Reliability improvement through optimized architecture"
          />
          <MetricCard
            number="$2.8M"
            label="Average Annual Savings"
            description="Typical annual cost savings for enterprise clients"
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from our cloud optimization implementations across various industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard
            company="E-commerce Giant"
            challenge="High cloud costs and performance issues during peak seasons"
            solution="Implemented AI-powered auto-scaling and cost optimization"
            results={[
              "65% reduction in cloud costs",
              "50% improvement in page load times",
              "99.9% uptime during Black Friday",
              "$1.2M annual savings"
            ]}
          />
          <CaseStudyCard
            company="Financial Services Firm"
            challenge="Compliance requirements and security concerns"
            solution="Comprehensive security hardening and compliance automation"
            results={[
              "100% compliance achievement",
              "40% reduction in security incidents",
              "30% improvement in audit scores",
              "Zero compliance violations"
            ]}
          />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Cloud Savings</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much you could save with our cloud optimization services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Cloud Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly cloud spend:</span>
                  <span className="font-semibold">$50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Underutilized resources:</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Performance issues:</span>
                  <span className="font-semibold">$5,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security incidents:</span>
                  <span className="font-semibold">$3,000/month</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Monthly Cost:</span>
                    <span className="text-red-600">$58,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">With Cloud Optimization</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Optimized cloud spend:</span>
                  <span className="font-semibold text-green-600">$20,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Resource utilization:</span>
                  <span className="font-semibold text-green-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Performance improvements:</span>
                  <span className="font-semibold text-green-600">+$4,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security hardening:</span>
                  <span className="font-semibold text-green-600">+$2,500</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Monthly Savings:</span>
                    <span className="text-green-600">$31,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Cloud Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get a free cloud audit and discover how much you can save with our optimization services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Cloud Optimization - Free Audit Request"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Cloud Audit
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=Cloud Optimization - ${name} Package Inquiry`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-orange-600 text-white hover:bg-orange-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl font-bold text-orange-600 mb-2">{number}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function CaseStudyCard({ company, challenge, solution, results }: {
  company: string;
  challenge: string;
  solution: string;
  results: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{company}</h3>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-1">Challenge:</h4>
        <p className="text-sm text-gray-600">{challenge}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-1">Solution:</h4>
        <p className="text-sm text-gray-600">{solution}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Results:</h4>
        <ul className="space-y-1">
          {results.map((result, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}