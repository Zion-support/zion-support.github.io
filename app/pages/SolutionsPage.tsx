import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: CpuChipIcon,
      features: [
        "Predictive Analytics",
        "Real-time Dashboards",
        "Automated Reporting",
        "Machine Learning Models",
        "Natural Language Queries"
      ],
      benefits: [
        "Increase decision-making speed by 300%",
        "Reduce manual reporting time by 80%",
        "Improve forecast accuracy by 40%"
      ],
      industries: ["Finance", "Retail", "Healthcare", "Manufacturing"],
      color: "from-purple-500 to-pink-500",
      href: "/solutions/ai-business-intelligence"
    },
    {
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Compliance Management",
        "Security Training",
        "Incident Response"
      ],
      benefits: [
        "Reduce security incidents by 90%",
        "Achieve 100% compliance",
        "Cut security costs by 50%"
      ],
      industries: ["Banking", "Government", "Healthcare", "Technology"],
      color: "from-cyan-500 to-blue-500",
      href: "/solutions/enterprise-cybersecurity"
    },
    {
      title: "Cloud Infrastructure Optimization",
      description: "Maximize performance and minimize costs with our cloud management solutions.",
      icon: CloudIcon,
      features: [
        "Multi-cloud Management",
        "Cost Optimization",
        "Auto-scaling",
        "Disaster Recovery",
        "Performance Monitoring"
      ],
      benefits: [
        "Reduce cloud costs by 35%",
        "Improve uptime to 99.9%",
        "Scale resources automatically"
      ],
      industries: ["E-commerce", "SaaS", "Media", "Gaming"],
      color: "from-green-500 to-emerald-500",
      href: "/solutions/cloud-optimization"
    },
    {
      title: "Digital Transformation Platform",
      description: "Modernize your business processes with our comprehensive digital transformation solutions.",
      icon: ChartBarIcon,
      features: [
        "Process Automation",
        "Legacy System Modernization",
        "Change Management",
        "Technology Integration",
        "Performance Analytics"
      ],
      benefits: [
        "Increase operational efficiency by 60%",
        "Reduce manual errors by 85%",
        "Accelerate time-to-market by 50%"
      ],
      industries: ["Manufacturing", "Logistics", "Real Estate", "Education"],
      color: "from-yellow-500 to-orange-500",
      href: "/solutions/digital-transformation"
    },
    {
      title: "Micro SaaS Development",
      description: "Build and deploy custom micro SaaS applications tailored to your specific business needs.",
      icon: GlobeAltIcon,
      features: [
        "Rapid Prototyping",
        "Custom Development",
        "API Integration",
        "User Management",
        "Payment Processing"
      ],
      benefits: [
        "Launch products 3x faster",
        "Reduce development costs by 70%",
        "Scale with your business"
      ],
      industries: ["Startups", "SMBs", "Consulting", "Professional Services"],
      color: "from-pink-500 to-rose-500",
      href: "/solutions/micro-saas"
    },
    {
      title: "5G Technology Solutions",
      description: "Leverage next-generation 5G technology for enhanced connectivity and IoT applications.",
      icon: RocketLaunchIcon,
      features: [
        "5G Network Planning",
        "IoT Integration",
        "Edge Computing",
        "Real-time Applications",
        "Smart City Solutions"
      ],
      benefits: [
        "Enable ultra-low latency applications",
        "Support massive IoT deployments",
        "Improve network efficiency by 90%"
      ],
      industries: ["Telecommunications", "Smart Cities", "Automotive", "Agriculture"],
      color: "from-indigo-500 to-purple-500",
      href: "/solutions/5g-technology"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered diagnostics, patient management, and medical research solutions",
      icon: UserGroupIcon,
      solutions: ["AI Diagnostics", "Patient Analytics", "Medical Imaging", "Drug Discovery"]
    },
    {
      name: "Financial Services",
      description: "Advanced fraud detection, risk management, and algorithmic trading solutions",
      icon: BuildingOfficeIcon,
      solutions: ["Fraud Detection", "Risk Analytics", "Algorithmic Trading", "Compliance"]
    },
    {
      name: "Education",
      description: "Personalized learning, student analytics, and educational technology platforms",
      icon: AcademicCapIcon,
      solutions: ["Learning Analytics", "Personalized Education", "Student Management", "Assessment Tools"]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: ChartBarIcon,
      solutions: ["Predictive Maintenance", "Quality Control", "Supply Chain AI", "Process Optimization"]
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Retailer",
      challenge: "Needed to optimize inventory management and reduce waste across 500+ stores",
      solution: "Implemented AI-powered demand forecasting and automated replenishment system",
      results: [
        "35% reduction in inventory costs",
        "50% decrease in stockouts",
        "25% improvement in profit margins"
      ],
      industry: "Retail"
    },
    {
      title: "Regional Healthcare System",
      challenge: "Required secure, HIPAA-compliant patient data management and analytics",
      solution: "Deployed comprehensive cybersecurity suite with AI-powered threat detection",
      results: [
        "100% HIPAA compliance achieved",
        "90% reduction in security incidents",
        "60% faster threat response time"
      ],
      industry: "Healthcare"
    },
    {
      title: "Global Manufacturing Company",
      challenge: "Needed to modernize legacy systems and improve operational efficiency",
      solution: "Implemented digital transformation platform with process automation",
      results: [
        "40% increase in production efficiency",
        "70% reduction in manual processes",
        "50% faster time-to-market for new products"
      ],
      industry: "Manufacturing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>SolutionsPage - Zion Tech Group</title>
        <meta name="description" content="SolutionsPage page for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">SolutionsPage</h1>
          <p className="text-lg text-gray-300">
            This is the SolutionsPage page for Zion Tech Group.
          </p>
        </div>
      </div>
)
    </>)
  )
}
export default SolutionsPag;e;
';
