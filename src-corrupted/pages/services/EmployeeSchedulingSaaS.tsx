<<<<<<< HEAD
import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';
import { Calendar, Users, Clock, CheckCircle, Shield, Zap, BarChart3, Smartphone, Globe, TrendingUp, Target, Bell, Settings, FileText, Database, Cloud, Server, Award, BookOpen  } from 'lucide-react.ts';
import { SEO  } from '@/components/SEO';

export default function EmployeeSchedulingSaaS(...args: any[]): any {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that automatically creates optimal shifts based on availability, skills, and business needs."
    },
    {
      icon: Users,
      title: "Employee Management",
      description: "Complete employee profiles with skills, availability, preferences, and performance tracking."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Accurate time tracking with clock-in/out, break management, and overtime calculation."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into labor costs, productivity, and scheduling efficiency."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Full-featured mobile app for employees to view schedules, request time off, and clock in/out."
    },
    {
      icon: Globe,
      title: "Multi-location Support",
      description: "Manage schedules across multiple locations, departments, and time zones seamlessly."
    }
  ];

  const schedulingCapabilities = [
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description: "AI algorithms create optimal schedules considering availability, skills, and business rules"
    },
    {
      icon: Users,
      title: "Shift Management",
      description: "Easy shift creation, editing, and assignment with drag-and-drop interface"
    },
    {
      icon: Clock,
      title: "Time Off Management",
      description: "Streamlined PTO requests, approvals, and calendar integration"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Automated reminders for shift changes, time off approvals, and schedule updates"
    },
    {
      icon: Settings,
      title: "Custom Rules",
      description: "Configurable business rules for scheduling, overtime, and compliance"
    },
    {
      icon: FileText,
      title: "Compliance Tracking",
      description: "Ensure compliance with labor laws, break requirements, and overtime regulations"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses with basic scheduling needs",
      features: [
        "Up to 25 employees",
        "Basic scheduling tools",
        "Time tracking",
        "Mobile app access",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$129",
      period: "/month",
      description: "Ideal for growing businesses with advanced scheduling requirements",
      features: [
        "Up to 100 employees",
        "AI-powered scheduling",
        "Advanced analytics",
        "Multi-location support",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with complex scheduling needs",
      features: [
        "Unlimited employees",
        "Custom scheduling algorithms",
        "Advanced compliance tools",
        "White-label options",
        "Dedicated account manager",
        "Custom training",
        "On-premise options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Scheduling Time",
      description: "Cut scheduling time by up to 80% with AI-powered automation and smart tools.",
      icon: Clock
    },
    {
      title: "Improve Employee Satisfaction",
      description: "Give employees control over their schedules and improve work-life balance.",
      icon: Users
    },
    {
      title: "Optimize Labor Costs",
      description: "Reduce overtime costs and optimize staffing levels with data-driven insights.",
      icon: TrendingUp
    },
    {
      title: "Ensure Compliance",
      description: "Automatically comply with labor laws and avoid costly violations.",
      icon: Shield
    }
  ];

  const industries = [
    {
      icon: Users,
      title: "Retail",
      description: "Manage complex retail schedules with seasonal demands and part-time workers"
    },
    {
      icon: Clock,
      title: "Healthcare",
      description: "Ensure proper staffing for patient care with 24/7 scheduling requirements"
    },
    {
      icon: Calendar,
      title: "Manufacturing",
      description: "Optimize production schedules with shift rotations and skill requirements"
    },
    {
      icon: Globe,
      title: "Hospitality",
      description: "Handle dynamic scheduling needs for hotels, restaurants, and events"
    },
    {
      icon: Settings,
      title: "Services",
      description: "Manage appointment-based scheduling for professional services"
    },
    {
      icon: BarChart3,
      title: "Construction",
      description: "Coordinate complex project schedules with multiple teams and locations"
    }
  ];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EmployeeSchedulingSaaS: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>EmployeeSchedulingSaaS | Zion Tech Group</title>
        <meta name="description" content="EmployeeSchedulingSaaS - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">EmployeeSchedulingSaaS</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSchedulingSaaS;
