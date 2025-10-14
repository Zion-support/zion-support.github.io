import { Link } from "react-router-dom";

export default function CustomDevelopment() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements. From concept to deployment, we create applications that drive your business forward.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000",
      features: ["Custom Applications", "API Development", "Database Design", "Quality Assurance"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. From simple websites to complex web platforms, we deliver exceptional user experiences.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Hardening"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless performance across all devices.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $8,000",
      features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with payment integration, inventory management, and customer relationship management features.",
      icon: <Zap className="w-8 h-8" />,
      path: "/e-commerce-development",
      color: "from-orange-500 to-red-500",
      price: "Starting at $4,000",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Portal"]
    },
    {
      title: "Database Development",
      description: "Custom database solutions with optimized performance, data integrity, and scalability. From design to implementation and maintenance.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,000",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"]
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration between systems. Scalable, secure, and well-documented API solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/api-development",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,000",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Rate Limiting"]
    }
  ];

const CustomDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Professional custom development services by Zion Tech Group." />
        <meta name="keywords" content="custom development, software development, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Custom Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional custom development services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDevelopmentPage;
