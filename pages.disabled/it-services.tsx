import Head from 'next/head';

export default function ITServices() {
  const items = [
    {
      title: 'Platform Engineering for Kubernetes',
      description: 'Golden paths, templates, GitOps, policy guardrails, and SRE dashboards',
      pricing: '$6,000 - $28,000/month',
    },
    {
      title: 'Data Compliance Toolkit (SOC 2/HIPAA/GDPR)',
      description: 'Controls, evidence capture, DPIA workflows, and continuous monitoring',
      pricing: '$2,500 - $14,000/month',
    },
    {
      title: 'Observability Stack (OpenTelemetry + Grafana)',
      description: 'Unified logs, metrics, traces, SLOs, and cost-optimized pipelines',
      pricing: '$1,800 - $9,500/month',
    },
  ];

  const technologies = [;
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },;
    { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },;
    { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },;
    { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },;
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },;
    { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
  ];

  const benefits = [;
  {;
      title: 'Reduced Downtime',;
      description: 'Proactive monitoring and maintenance',;
      icon: Clock,;
      stat: '99.9%'},;
    {;
      title: 'Cost Savings',;
      description: 'Optimized infrastructure and processes',;
      icon: Zap,;
      stat: '40%'},;
    {;
      title: 'Enhanced Security',;
      description: 'Enterprise-grade protection',;
      icon: Shield,;
      stat: '100%'},;
    {;
      title: 'Scalability',;
      description: 'Flexible and scalable solutions',;
      icon: TrendingUp,;
      stat: 'Unlimited'}
  ];

  return (;
    <PageTransition>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />;
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8">;
          <div className="mx-auto max-w-3xl text-center">;
            <div className="flex items-center justify-center mb-6">;
              <Server className="h-12 w-12 text-green-600 mr-4" />;
              <Award className="h-6 w-6 text-green-600 mr-2" />;
              <span className="text-base font-semibold leading-7 text-green-600">IT Services</span>;
            </div>;
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">;
              Future-Ready IT Infrastructure;
            </h1>;
            <p className="mt-6 text-lg leading-8 text-gray-600">;
              Transform your technology infrastructure with our comprehensive IT services. From quantum-safe cryptography and neuromorphic computing to space-based infrastructure and consciousness research platforms, we deliver cutting-edge solutions that prepare your organization for the next generation of computing. Our expertise spans traditional IT services to revolutionary technologies that will define the future of business.;
            </p>;
            <div className="mt-8 flex items-center justify-center gap-x-8 text-sm text-gray-500">;
              <div className="flex items-center">;
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />;
                <span>200+ Infrastructure Deployments</span>;
              </div>;
              <div className="flex items-center">;
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />;
                <span>Zero-Trust Security</span>;
              </div>;
              <div className="flex items-center">;
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />;
                <span>Quantum-Ready Architecture</span>;
              </div>;
            </div>;
            <div className="mt-10 flex items-center justify-center gap-x-6">;
              <Link;
                href="/contact";
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">;
                Get Started;
                <ArrowRight className="ml-2 h-4 w-4 inline" />;
              </Link>;
              <Link;
                href="/pricing-guide";
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">;
                View Pricing <span aria-hidden="true">→</span>;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-white">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8">;
          <div className="mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">;
              Why Choose Our IT Services?;
            </h2>;
            <p className="mt-6 text-lg leading-8 text-gray-600">;
              Proven expertise and measurable results for your technology infrastructure;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">;
            {benefits.map((benefit, index) => (;
              <div key={index} className="text-center">;
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4">;
                  <benefit.icon className="h-8 w-8 text-green-600" />;
                </div>;
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.stat}</h3>;
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>;
                <p className="text-gray-600">{benefit.description}</p>;
              </div>;
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

