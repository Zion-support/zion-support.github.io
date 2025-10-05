import { Link } from "react-router-dom";

const October2025InfrastructureExcellenceBanner = () => {
  const newArticles = [
    {
      id: 1,",
      title: "Distributed Tracing for Microservices",
      description: "99.99% observability, 87% faster MTTR, $8.2M savings",
      icon: Activity,",
      link: "/blog/ai-2025-oct-distributed-tracing-microservices",
      gradient: "from-blue-500 to-cyan-500",",
      metrics: ["10M+ events/sec", "Sub-ms overhead", "OpenTelemetry"],
    },
    {
      id: 2,",
      title: "Kubernetes Security Best Practices",
      description: "Zero-trust architecture, 99.97% threat prevention",
      icon: Shield,",
      link: "/blog/ai-2025-oct-kubernetes-security-best-practices",
      gradient: "from-purple-500 to-pink-500",",
      metrics: ["89% fewer incidents", "Defense-in-depth", "mTLS"],
    },
    {
      id: 3,",
      title: "Real-Time Data Streaming",
      description: "Process 10M+ events/sec with sub-100ms latency",
      icon: Zap,",
      link: "/blog/ai-2025-oct-real-time-data-streaming-architectures",
      gradient: "from-orange-500 to-red-500",",
      metrics: ["Kafka + Flink", "Exactly-once", "42% cost cut"],
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 sm:py-20">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"</div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 mb-4">

            <span className="text-sm font-semibold text-blue-400">
              NEW OCTOBER 2025 CONTENT
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Infrastructure Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master production-grade architectures for observability, security, and real-time data processing. 
            Battle-tested patterns from enterprises processing billions of events daily.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {newArticles.map((article) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.id}
                to={article.link}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${article.gradient} mb-4`}>
                    <Icon className="h-6 w-6 text-white"</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {article.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.metrics.map((metric, idx) => (
                      <span
key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 text-xs font-medium text-gray-300 border border-white/10"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Read more link */}
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Read Full Guide</span>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <span>Explore All Articles</span>

            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <span>Get Expert Consulting</span>
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
            <div className="text-2xl font-bold text-white">99.99%</div>
            <div className="text-sm text-gray-400">Observability Coverage</div>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
            <div className="text-2xl font-bold text-white">10M+</div>
            <div className="text-sm text-gray-400">Events/Second</div>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
            <div className="text-2xl font-bold text-white">87%</div>
            <div className="text-sm text-gray-400">Faster MTTR</div>
          </div>
          <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
            <div className="text-2xl font-bold text-white">$21M+</div>
            <div className="text-sm text-gray-400">Annual Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025InfrastructureExcellenceBanner;
