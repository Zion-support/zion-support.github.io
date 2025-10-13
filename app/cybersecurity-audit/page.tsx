import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

const CybersecurityAuditPage = () => {
  const features = [
    {
      title: "Comprehensive Security Assessment",
      description: "Thorough evaluation of your entire security infrastructure and policies",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vulnerability Scanning",
      description: "Advanced scanning tools to identify security weaknesses and potential threats",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to test your defenses and identify real vulnerabilities",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Verification",
      description: "Ensure adherence to industry standards like GDPR, HIPAA, and SOC 2",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];
}
