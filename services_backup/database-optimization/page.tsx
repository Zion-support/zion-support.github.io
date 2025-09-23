export const metadata = {
  title: "Database Optimization | Zion Tech Group",
  description:
    "Maximize your database performance with expert optimization services, query tuning, and performance monitoring."};

export default function DatabaseOptimizationPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Database Optimization
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Maximize your database performance with expert optimization services,
        query tuning, and performance monitoring.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Performance Tuning"
          features={[
            "Query optimization",
            "Index optimization",
            "Schema design",
            "Connection pooling"]}
        />
        <FeatureCard
          title="Database Platforms"
          features={[
            "MySQL optimization",
            "PostgreSQL tuning",
            "MongoDB optimization",
            "SQL Server tuning"]}
        />
        <FeatureCard
          title="Monitoring & Maintenance"
          features={[
            "Performance monitoring",
            "Automated backups",
            "Health checks",
            "Capacity planning"]}
        />
      </div>

      <div className="bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose Our Database Optimization?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-lime-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Performance Boost</h3>
              <p className="text-gray-600">
                Average 300% improvement in query performance and response times
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-lime-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Cost Reduction</h3>
              <p className="text-gray-600">
                Optimize resource usage to reduce database costs by up to 50%
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-lime-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Expert Knowledge</h3>
              <p className="text-gray-600">
                Database specialists with 15+ years of optimization experience
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-lime-500 mr-3 text-xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900">
                Proactive Monitoring
              </h3>
              <p className="text-gray-600">
                24/7 monitoring to prevent performance issues before they occur
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Optimize Your Database?
        </h2>
        <p className="text-gray-600 mb-6">
          Start with a free database performance audit and optimization plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-lime-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-lime-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-lime-600 text-lime-600 px-8 py-3 rounded-lg font-semibold hover:bg-lime-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  features}: {
  title: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-lime-500 mr-2">•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Audit"
          price="$1,999"
          features={[
            "Performance analysis",
            "Optimization report",
            "Recommendations",
            "Implementation guide"]}
        />
        <Plan
          name="Optimization"
          price="$4,999"
          features={[
            "Query tuning",
            "Index optimization",
            "Schema improvements",
            "2 weeks support"]}
          popular={true}
        />
        <Plan
          name="Managed"
          price="$2,999/mo"
          features={[
            "Continuous monitoring",
            "Regular optimization",
            "24/7 support",
            "Performance reports"]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? "border-lime-500 ring-2 ring-lime-200" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-lime-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-lime-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? "bg-lime-600 text-white hover:bg-lime-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
