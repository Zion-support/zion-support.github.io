<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Network } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Activity } from 'lucide-react';
import { Cloud } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f

const CloudInfrastructure = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with zero downtime and minimal risk",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Zero-downtime migration", "Data integrity assurance", "Cost optimization", "Security compliance"],
      price: "From $2,999/month"
    },
    {
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning and management using modern IaC tools and best practices",
      icon: <Settings className="w-8 h-8" />,
      features: ["Terraform automation", "Version control", "Environment consistency", "Disaster recovery"],
      price: "From $1,999/month"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure from threats and vulnerabilities",
      icon: <Shield className="w-8 h-8" />,
      features: ["Identity management", "Network security", "Data encryption", "Compliance monitoring"],
      price: "From $1,499/month"
    },
    {
      title: "Auto Scaling",
      description: "Dynamic resource scaling based on demand to optimize costs and ensure optimal performance",
      icon: <Activity className="w-8 h-8" />,
      features: ["Automatic scaling", "Cost optimization", "Performance monitoring", "Load balancing"],
      price: "From $999/month"
    }
  ];

  const stats = [
    {
      number: "99.99%",
      label: "Uptime Guarantee",
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      number: "40%",
      label: "Cost Reduction",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />
    },
    {
      number: "0",
      label: "Security Incidents",
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      number: "<1s",
      label: "Response Time",
      icon: <Activity className="w-6 h-6 text-purple-400" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our cloud infrastructure. We achieved 40% cost savings while improving performance.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Their cloud migration expertise saved us months of work. Zero downtime and seamless transition.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of IT, InnovateLab",
      content: "The security implementation was flawless. We now have enterprise-grade protection at a fraction of the cost.",
      avatar: "ER"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses starting their cloud journey",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Standard support",
        "Cloud migration assistance",
        "Security baseline",
        "Monthly reporting"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses with complex infrastructure needs",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Priority support",
        "Full cloud migration",
        "Advanced security",
        "Weekly reporting",
        "Auto-scaling setup",
        "Disaster recovery"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Comprehensive solution for large organizations with mission-critical infrastructure",
      features: [
        "Unlimited servers",
        "Real-time monitoring",
        "24/7 dedicated support",
        "Custom migration strategy",
        "Enterprise security",
        "Daily reporting",
        "Custom auto-scaling",
        "Multi-region setup",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
export default function CloudInfrastructurePage() {
  const stats = [
    { label: "Uptime", value: "99.9%", icon: <Activity className="w-6 h-6" /> },
    { label: "Cost Savings", value: "40%", icon: <BarChart3 className="w-6 h-6" /> },
    { label: "Performance", value: "3x Faster", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const capabilities = [
    "Multi-cloud deployment and management",
    "Automated scaling and load balancing",
    "High availability and disaster recovery",
    "Security and compliance monitoring"
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "CTO", 
      company: "TechCorp", 
      content: "Zion's cloud infrastructure transformed our business operations." 
    }
  ];
}

}}