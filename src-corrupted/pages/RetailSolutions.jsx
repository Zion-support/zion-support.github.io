<<<<<<< HEAD
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {ShoppingCart,
  Smartphone,
  CreditCard,
  Users,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Activity,
  FileText,
  Clock,
  Eye,
  Package,
  Truck,
  Store,
  Tag,
  Brain,
  Code} from 'lucide-react';

    integrations["E-commerce", "POS Systems", "Mobile Apps", "CRM"]
  }
];

const retailTrends = [
  {title: "AI-Powered Personalization",
    description: "Machine learning algorithms that provide personalized shopping experiences",
    icon: Brain,
    impact: "High"},
  {title: "Omnichannel Integration",
    description: "Seamless experience across online, mobile, and physical stores",
    icon: Globe,
    impact: "High"},
  {title: "Mobile-First Shopping",
    description: "Mobile devices driving majority of online retail traffic",
    icon: Smartphone,
    impact: "Critical"},
  {
    title: "Data-Driven Decisions",
    description: "Analytics and insights driving retail strategy and optimization",
    icon: BarChart3,
    impact: "High"

];

const successStories = [
  {
    id: 1,
    comp: "Fashion Forward",
    industry: "Apparel Retail",
    challenge: "Needed omnichannel platform to connect online and physical stores",
    solution: "Built integrated e-commerce and POS system with unified inventory",
    results: "40% increase in online sales, 25% reduction in inventory costs",
    logo: "FF"
  },
  {id: 2,
    comp: "Tech Gadgets Pro",
    industry: "Electronics Retail",
    challenge: "Required mobile app for enhanced customer engagement",
    solution: "Developed feature-rich mobile shopping app with AR product preview",
    results: "60% mobile traffic increase, 35% higher conversion rate",
    logo: "TG"},
  {
    id: 3,
    comp: "Home & Garden Plus",
    industry: "Home Improvement",
    challenge: "Needed inventory management system for 50+ locations",
    solution: "Implemented cloud-based inventory system with real-time tracking",
    results: "30% reduction in stockouts, 20% improvement in order fulfillment",
    logo: "HG"

];

const processSteps = [
  {
    step: 1,
    title: "Retail Assessment",
    description: "Analyze current retail operations and identify improvement opportunities",
    icon: Target,
    duration: "1-2 weeks"
  },
  {step: 2,
    title: "Solution Design",
    description: "Design customized retail technology solution based on requirements",
    icon: FileText,
    duration: "2-3 weeks"},
  {step: 3,
    title: "Development & Testing",
    description: "Build and thoroughly test the retail solution",
    icon: Code,
    duration: "8-24 weeks"},
  {
    step: 4,
    title: "Deployment & Training",
    description: "Deploy solution and provide comprehensive staff training",
    icon: Users,
    duration: "1-2 weeks"

];

export default function RetailSolutions
export { RetailSolutions }() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'E-commerce', 'Mobile Development', 'POS Systems', 'Analytics', 'Inventory', 'Platform Solutions'];

  const filteredSolutions = selectedCategory === 'All'
    ? retailSolutions
    : retailSolutions.filter(solution => solution.category === selectedCategory);
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const RetailSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>RetailSolutions | Zion Tech Group</title>
        <meta name="description" content="RetailSolutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">RetailSolutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default RetailSolutions;
