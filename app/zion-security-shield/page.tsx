
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap, AlertTriangle, Lock, Eye, Shield } from 'lucide-react';
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "The AI financial analysis platform has revolutionized our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      company: "FinancePro",
      content: "Incredible accuracy and insights that have improved our portfolio performance.",
      rating: 5
    }
  ];
export default function ZionSecurityShield() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection with 99.9% accuracy using machine learning algorithms"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Trust Architecture",
      description: "Implement zero-trust security model with continuous verification and monitoring"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant alerts and automated response systems"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and vulnerability scanning for all your assets"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Incident Response",
      description: "AI-driven incident response with automated containment and recovery procedures"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Behavioral Analytics",
      description: "Advanced user behavior analysis to detect insider threats and anomalies"
    }
  ];

  const securityFeatures = [
    "Multi-factor Authentication (MFA)",
    "End-to-end Encryption",
    "DDoS Protection",
    "Web Application Firewall (WAF)",
    "Intrusion Detection System (IDS)",
    "Security Information and Event Management (SIEM)",
    "Penetration Testing",
    "Compliance Reporting (SOC 2, ISO 27001, GDPR)",
    "Data Loss Prevention (DLP)",
    "Mobile Device Management (MDM)",
    "Email Security Gateway",
    "Cloud Security Posture Management"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly security reports",
        "Email support",
        "Up to 10 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Advanced threat detection",
        "Real-time monitoring",
        "Vulnerability scanning",
        "Incident response",
        "Priority support",
        "Up to 50 users",
        "Compliance reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "AI-powered security",
        "24/7 SOC monitoring",
        "Custom security policies",
        "Dedicated security team",
        "White-label reporting",
        "Unlimited users",
        "Advanced compliance",
        "Custom integrations"
      ],
      popular: false
    }
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Security Shield - Zion Tech Group</title>
        <meta name="description" content="Zion Security Shield solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Security Shield</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion security shield solutions designed to meet your business needs.
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

}