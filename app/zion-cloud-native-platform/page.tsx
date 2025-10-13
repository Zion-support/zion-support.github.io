import { ArrowRight, Cloud, Server, Zap, Shield, CheckCircle, Star, Brain, Globe, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionCloudNativePlatform() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Multi-Cloud Orchestration",
      description: "Seamlessly manage workloads across AWS, Azure, GCP, and private clouds with unified orchestration"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Kubernetes-Native Platform",
      description: "Enterprise-grade Kubernetes platform with advanced networking, storage, and security features"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Scaling & Optimization",
      description: "Intelligent auto-scaling based on demand patterns with cost optimization and performance tuning"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero-Trust Security",
      description: "Built-in security with network policies, service mesh, and runtime protection for cloud-native apps"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Operations",
      description: "ML-driven monitoring, anomaly detection, and automated incident response for cloud infrastructure"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Edge Computing",
      description: "Deploy applications closer to users with global edge computing and CDN integration"
    }
  ];

  const capabilities = [
    "Container Orchestration",
    "Service Mesh (Istio)",
    "API Gateway Management",
    "Microservices Architecture",
    "CI/CD Pipeline Automation",
    "Infrastructure as Code",
    "Monitoring & Observability",
    "Log Aggregation & Analysis",
    "Disaster Recovery",
    "Backup & Restore",
    "Compliance Automation",
    "Cost Management & Optimization"
  ];

  const pricingPlans = [
    {
      name: "Development",
      price: "$199",
      period: "/month",
      description: "Perfect for development teams",
      features: [
        "Up to 10 nodes",
        "Basic monitoring",
        "Standard support",
        "Community features",
        "Basic security",
        "1 environment"
      ],
      popular: false
    },
    {
      name: "Production",
      price: "$599",
      period: "/month",
      description: "Most popular for production workloads",
      features: [
        "Up to 50 nodes",
        "Advanced monitoring",
        "Priority support",
        "Enterprise features",
        "Advanced security",
        "3 environments",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited nodes",
        "Custom monitoring",
        "Dedicated support",
        "White-label solution",
        "Custom security",
        "Unlimited environments",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "FinTech Startup",
      role: "CTO",
      content: "Zion Cloud Native Platform enabled us to scale from 0 to 1M users in 6 months. The auto-scaling and monitoring features are incredible.",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      company: "E-commerce Platform",
      role: "DevOps Director",
      content: "The multi-cloud orchestration saved us 40% on infrastructure costs while improving performance. Game-changing platform!",
      rating: 5
    },
    {
      name: "David Chen",
      company: "SaaS Company",
      role: "Platform Engineer",
      content: "This platform transformed our cloud operations. The AI-powered monitoring and automated incident response are invaluable.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Cloud Native Platform - Enterprise Cloud Infrastructure Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Build and scale cloud-native applications with Zion Cloud Native Platform - the ultimate enterprise cloud infrastructure platform. Kubernetes, multi-cloud orchestration, and AI-powered operations."
        />
        <meta
          name="keywords"
          content="cloud native platform, kubernetes, multi-cloud, container orchestration, microservices, cloud infrastructure, devops, platform engineering"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Enterprise Cloud Native Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zion Cloud Native Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and scale cloud-native applications with enterprise-grade infrastructure. 
              Multi-cloud orchestration, Kubernetes-native platform, and AI-powered operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Deployment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Cloud Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and scale cloud-native applications with confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Cloud Native Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools and services you need for modern cloud-native application development and operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Scalable Cloud Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your cloud infrastructure needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Platform Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what platform engineers say about Zion Cloud Native Platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Go Cloud Native?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations using our platform to build and scale cloud-native applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}