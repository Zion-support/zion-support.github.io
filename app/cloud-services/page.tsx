const CloudServicesPage: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Lightning Fast",
      description: "Deploy and scale applications in seconds"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Reach",
      description: "Deploy anywhere with global infrastructure"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Cost Effective",
      description: "Pay only for what you use, when you use it"
    }
  ];

  const services = [
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "Cloud Security", path: "/cloud-security" },
    { name: "Cloud Monitoring", path: "/cloud-monitoring" },
    { name: "Cloud Optimization", path: "/cloud-optimization" }
  ];

  const benefits = [
    "Scalable infrastructure",
    "Cost-effective solutions",
    "Enhanced security",
    "24/7 monitoring",
    "Global availability",
    "Automated backups"
  ];

  const benefits = [
    "Reduce infrastructure costs by up to 50%",
    "Improve scalability and flexibility",
    "Enhanced security and compliance",
    "24/7 monitoring and support",
    "Faster time to market",
    "Disaster recovery and backup"
  ];
import { Helmet } from 'react-helmet-async';

export default function CloudServicesPage() {
}

}}