import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Users,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Truck,
  Wrench,
  Cpu,
  Brain,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Heart,
  MessageCircle,
  Smile,
  ThumbsUp,
  Headphones,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  User,
  Settings,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  Settings,
  Palette} from 'lucide-react';

    technologies["Analytics Platforms", "Data Visualization", "Machine Learning", "Reporting Tools"]
  }
];

const customerExperienceTechnologies = [
  {name: "User Research Tools",
    description: "Comprehensive tools for understanding user needs and behaviors",
    icon: Users,
    useCase: "User Insights",
    reliability: "High"},
  {name: "Design Systems",
    description: "Consistent design frameworks for cohesive user experiences",
    icon: Palette,
    useCase: "Design Consistency",
    reliability: "High"},
  {name: "Analytics Platforms",
    description: "Data-driven insights for customer behavior analysis",
    icon: BarChart3,
    useCase: "Customer Insights",
    reliability: "Critical"},
  {
    name: "Personalization AI",
    description: "AI-powered systems for tailored customer experiences",
    icon: Brain,
    useCase: "Custom Experiences",
    reliability: "High"

];

const successStories = [
  {
    id: 1,
    comp: "E-commerce Retailer",
    industry: "Retail",
    challenge: "Needed to improve customer satisfaction and reduce cart abandonment rates",
    solution: "Implemented comprehensive UX redesign with customer journey mapping and personalization",
    results: "35% increase in customer satisfaction, 25% reduction in cart abandonment, improved conversion rates",
    logo: "ER"
  },
  {id: 2,
    comp: "Financial Services",
    industry: "Finance",
    challenge: "Required better customer experience for online banking and mobile apps",
    solution: "Built customer-centric design system with personalized experiences and improved usability",
    results: "40% improvement in user engagement, 30% reduction in support tickets, enhanced customer loyalty",
    logo: "FS"},
  {
    id: 3,
    comp: "Healthcare Provider",
    industry: "Healthcare",
    challenge: "Needed to improve patient portal experience and appointment booking",
    solution: "Redesigned patient portal with intuitive UX and streamlined appointment scheduling",
    results: "50% increase in portal usage, 45% reduction in appointment booking time, improved patient satisfaction",
    logo: "HP"

];

const processSteps = [
  {
    step: 1,
    title: "Customer Research",
    description: "Understand customer needs, behaviors, and pain points",
    icon: Users,
    duration: "2-4 weeks"
  },
  {step: 2,
    title: "Journey Mapping",
    description: "Map customer journeys and identify optimization opportunities",
    icon: MapPin,
    duration: "2-4 weeks"},
  {step: 3,
    title: "Design & Implementation",
    description: "Design and implement improved customer experiences",
    icon: Palette,
    duration: "8-20 weeks"},
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Test experiences and continuously optimize based on feedback",
    icon: Gauge,
    duration: "Ongoing"

];

const customerExperienceBenefits = [
  {
    title: "Improved Customer Satisfaction",
    description: "Better experiences lead to higher customer satisfaction and loyalty",
    icon: Heart,
    examples["Higher satisfaction scores", "Increased loyalty", "Positive reviews", "Word-of-mouth referrals"];
  },;
  {title: "Increased Conversion Rates",
    description: "Optimized experiences drive better business outcomes",
    icon: TrendingUp,
    examples["Higher conversion rates", "Reduced abandonment", "Increased sales", "Better ROI"];},;
  {title: "Reduced Support Costs",
    description: "Better experiences reduce the need for customer support",
    icon: Headphones,
    examples["Fewer support tickets", "Lower support costs", "Self-service adoption", "Improved efficiency"];},;
  {title: "Competitive Advantage",
    description: "Superior customer experiences differentiate your brand",
    icon: Award,
    examples["Brand differentiation", "Market leadership", "Customer preference", "Sustainable advantage"];}
];

export default function CustomerExperience
export {CustomerExperience}() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'UX Design', 'Journey Mapping', 'Feedback Systems', 'Personalization', 'Support Platforms', 'Analytics'];

  const filteredSolutions = selectedCategory === 'All'
    ? customerExperienceSolutions
    : customerExperienceSolutions.filter(solution => solution.category === selectedCategory);

const CustomerExperience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>CustomerExperience | Zion Tech Group</title>
        <meta name="description" content="CustomerExperience - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">CustomerExperience</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
