export const metadata = {
  title: "Analytics Dashboard Platform | Zion Tech Group",
  description:
    "Build powerful analytics dashboards with real-time data visualization, custom metrics, and business intelligence. Professional analytics solutions starting at $16k."};

export default function AnalyticsDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Analytics Dashboard Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build powerful analytics dashboards with real-time data visualization,
          custom metrics, and business intelligence tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Data Visualization"
            details={[
              "Interactive charts & graphs",
              "Real-time data updates",
              "Custom dashboard builder",
              "Drag-and-drop interface",
              "Multiple chart types",
              "Responsive design",
              "Export capabilities"]}
          />
          <Item
            title="Data Integration"
            details={[
              "API connections",
              "Database integration",
              "CSV/Excel import",
              "Real-time streaming",
              "Data transformation",
              "ETL pipelines",
              "Data validation"]}
          />
          <Item
            title="Business Intelligence"
            details={[
              "Custom KPI tracking",
              "Automated alerts",
              "Trend analysis",
              "Predictive analytics",
              "Cohort analysis",
              "A/B testing insights",
              "ROI calculations"]}
          />
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Analytics Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Real-Time Processing
              </h3>
              <p className="text-gray-600">
                Process and visualize data in real-time with sub-second latency
                for instant business insights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Custom Metrics
              </h3>
              <p className="text-gray-600">
                Create custom KPIs and metrics tailored to your business needs
                with flexible calculation engines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Multi-User Access
              </h3>
              <p className="text-gray-600">
                Role-based access control with personalized dashboards for
                different user types and departments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Mobile Analytics
              </h3>
              <p className="text-gray-600">
                Access your analytics anywhere with mobile-optimized dashboards
                and push notifications for alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-teal-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Analytics Platform Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          name="Basic Analytics"
          price="$16k–$32k"
          duration="6–10 weeks"
          features={[
            "Basic dashboard builder",
            "5 data sources",
            "Standard chart types",
            "Export functionality",
            "User management",
            "Mobile responsive",
            "Basic support"]}
        />
        <Plan
          name="Professional Analytics"
          price="$32k–$65k"
          duration="10–16 weeks"
          features={[
            "Everything in Basic",
            "Advanced visualizations",
            "Real-time data",
            "Custom metrics",
            "API integrations",
            "White-label options",
            "Priority support"]}
        />
        <Plan
          name="Enterprise Analytics"
          price="$65k+"
          duration="14–22 weeks"
          features={[
            "Everything in Professional",
            "Custom development",
            "Advanced security",
            "Multi-tenant architecture",
            "Dedicated support",
            "SLA guarantees",
            "On-premise deployment"]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Build Your Analytics Platform?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's create a powerful analytics platform that transforms your data
          into actionable business insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Plan({
  name,
  price,
  duration,
  features}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-teal-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Analytics Dashboard Platform Inquiry"
        className="block w-full mt-6 bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
