import { GradientHeading } from "./GradientHeading";
import Link from "next/link";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
const categories = [
  {
    title: "AI Services",
    description: "Cutting-edge AI solutions, chatbots, and machine learning",
    icon: <Brain className="w-10 h-10" />,
    link: "/ai-services",
    color: "from-purple-500 to-indigo-600",
    gradient: "from-zion-purple to-zion-purple-dark",
  },
  {
    title: "Micro SAAS",
    description: "Cloud-based software solutions for modern businesses",
    icon: <Cloud className="w-10 h-10" />,
    link: "/micro-saas",
    color: "from-cyan-500 to-blue-600",
    gradient: "from-zion-cyan to-zion-blue",
  },
  {
    title: "IT Services",
    description: "Infrastructure, security, and technical consulting",
    icon: <Zap className="w-10 h-10" />,
    link: "/all-services",
    color: "from-amber-500 to-orange-600",
    gradient: "from-zion-cyan-light to-zion-cyan",
  },
  {
    title: "Digital Transformation",
    description: "Business modernization and digital strategy",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "/all-services",
    color: "from-emerald-500 to-green-600",
    gradient: "from-zion-purple-light to-zion-purple",
  },
];
const specialServices = [
  {
    title: "IT Onsite Services",
    link: "/it-onsite-services"
  },
  {
    title: "Comprehensive Services",
    link: "/comprehensive-services"
  },
  {
    title: "Services Comparison",
    link: "/services-comparison"
  }
];
interface CategoriesSectionProps {
  showTitle?: boolean;
}
