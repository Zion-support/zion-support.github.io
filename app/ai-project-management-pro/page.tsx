

const testimonials = [
  {,
    name: "Sarah Johnson",
      role: "CEO",
      content: "Zion Tech Group has transformed our business with their AI solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "TechCorp"
  },
  {,
    name: "Michael Chen",
      role: "CTO", ,
    content: "The performance improvements are remarkable. Highly recommended!",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "InnovateLabs"
  },
  {,
    name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Outstanding support and cutting-edge technology solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "FutureTech"
  }
export default function AIProjectManagementPro() {

  const features = [
    {,
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
        title: "AI-Powered Planning",
        description:
        "Intelligent project planning with automated task breakdown and resource allocation",
    },
    {,
    icon: <Clock className="w-6 h-6 text-purple-400" />,
        title: "Smart Scheduling",
        description:
        "Automated scheduling that considers dependencies, resources, and deadlines",
    },
    {,
    icon: <Target className="w-6 h-6 text-yellow-400" />,
        title: "Progress Tracking",
        description:
        "Real-time project monitoring with predictive analytics and risk assessment",
    },
    {,
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
        title: "Analytics & Insights",
        description:
        "Comprehensive reporting and analytics to optimize project performance",
    },

  const projectFeatures = [
    {,
    category: "Project Planning",
        items: [
        "AI Task Breakdown",
        "Resource Optimization",
        "Timeline Generation",
        "Risk Assessment",
        "Dependency Mapping",
        "Milestone Tracking",
      ],
    },
    {,
    category: "Team Management",
        items: [
        "Team Collaboration",
        "Role Assignment",
        "Workload Balancing",
        "Communication Tools",
        "Progress Updates",
        "Performance Tracking",
      ],
    },
    {,
    category: "Automation",
        items: [
        "Workflow Automation",
        "Notification System",
        "Report Generation",
        "Status Updates",
        "Deadline Alerts",
        "Quality Checks",
      ],
    },
    {,
    category: "Integration",
        items: [
        "Tool Integration",
        "API Connectivity",
        "Data Synchronization",
        "Third-party Apps",
        "Cloud Storage",
        "Version Control",
      ],
    },

  const pricingPlans = [
    {,
    name: "Professional",
        price: "$99",
        period: "/month",
        description: "Perfect for small teams",
        features: [
        "Up to 10 projects",
        "Basic AI features",
        "Team collaboration",
        "Email support",
        "Basic reporting",
        "Mobile access",
      ],
        popular: false,
    },
    {,
    name: "Enterprise",
        price: "$299",
        period: "/month",
        description: "Ideal for growing businesses",
        features: [
        "Unlimited projects",
        "Advanced AI features",
        "Custom workflows",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
      ],
        popular: true,
    },
    {,
    name: "Custom",
        price: "Contact Us",
        period: "",
        description: "Tailored solutions",
        features: [
        "Custom features",
        "On-premise deployment",
        "24/7 support",
        "Training & consulting",
        "White-label solution",
        "SLA guarantee",
      ],
        popular: false,
    },

import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Project Management Pro solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Project Management Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai project management pro solutions designed to meet your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

