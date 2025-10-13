
export default function CloudServices() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ["Identity & Access Management", "Data Encryption", "Security Monitoring", "Compliance Management"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Storage",
      description: "Scalable and secure cloud storage solutions for all your data needs.",
      features: ["Data Backup & Recovery", "File Synchronization", "Content Delivery", "Archive Solutions"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Build and manage robust cloud infrastructure tailored to your business requirements.",
      features: ["Virtual Machines", "Container Orchestration", "Load Balancing", "Auto Scaling"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for maximum performance and cost efficiency.",
      features: ["Cost Analysis", "Resource Optimization", "Performance Tuning", "Monitoring & Alerting"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Cloud Solutions",
      description: "Leverage multiple cloud providers for enhanced reliability and flexibility.",
      features: ["Multi-Cloud Strategy", "Cloud Interconnect", "Disaster Recovery", "Vendor Management"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Migration & Infrastructure</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. Expert cloud migration, infrastructure management, and security solutions from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cloud Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to management, 
              we provide end-to-end cloud services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
              </Link>
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </div>

          </div>
        </div>
      </div>
    </>
  );
}
