import { ArrowRight, Cloud, Server, Shield, Zap, BarChart3, Users, Clock, CheckCircle, Star, Globe, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudNativeKubernetes() {
  const features = [
    {
      title: "Kubernetes Orchestration",
      description: "Advanced container orchestration with auto-scaling and load balancing",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Microservices Architecture",
      description: "Design and deploy scalable microservices with service mesh",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps Automation",
      description: "CI/CD pipelines with GitOps and automated deployments",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring with Prometheus, Grafana, and Jaeger",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,499",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 nodes",
        "Basic monitoring",
        "Standard support",
        "Documentation",
        "Email support",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 nodes",
        "Advanced monitoring",
        "Priority support",
        "Custom configurations",
        "Phone & email support",
        "Advanced security",
        "24/7 monitoring",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited nodes",
        "Premium monitoring",
        "Dedicated support team",
        "Custom solutions",
        "24/7 phone support",
        "Enterprise security",
        "SLA guarantee",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: "Kubernetes Migration",
      description: "Migrate your applications to Kubernetes with zero downtime",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Service Mesh Implementation",
      description: "Implement Istio or Linkerd for advanced traffic management",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CI/CD Pipeline Setup",
      description: "Automate your deployment process with GitOps workflows",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Hardening",
      description: "Implement security best practices and compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Performance Optimization",
      description: "Optimize cluster performance and resource utilization",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Disaster Recovery",
      description: "Implement backup and disaster recovery solutions",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Native Kubernetes Solutions - Zion Tech Group | Container Orchestration</title>
        <meta
          name="description"
          content="Expert Kubernetes solutions for cloud-native applications. Container orchestration, microservices architecture, DevOps automation, and comprehensive monitoring. Scale your applications with confidence."
        />
        <meta
          name="keywords"
          content="Kubernetes, cloud native, container orchestration, microservices, DevOps, CI/CD, service mesh, monitoring, cloud migration, containerization"
        />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-native-kubernetes" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Cloud Native Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud Native
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Kubernetes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your applications with expert Kubernetes solutions. Container orchestration, 
              microservices architecture, and DevOps automation for modern cloud-native applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Server className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Kubernetes Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our expert team provides end-to-end Kubernetes solutions that enable you to 
                build, deploy, and scale cloud-native applications with confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Kubernetes Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From migration to optimization, we provide comprehensive Kubernetes services 
                tailored to your specific needs and requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your Kubernetes needs. All plans include our expert support and monitoring.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Go Cloud Native?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your applications with our expert Kubernetes solutions. 
              Scale with confidence and embrace the future of cloud-native computing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Consultation
                <Clock className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}