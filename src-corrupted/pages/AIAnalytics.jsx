<<<<<<< HEAD
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Brain,
  BarChart3,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Smartphone,
  Monitor,
  Code,
  FileText,
  PieChart,
  LineChart} from 'lucide-react';

    integrations["Python", "Scikit-learn", "TensorFlow", "Custom APIs"]
  }
];

const aiCapabilities = [
  {title: "Machine Learning",
    description: "Advanced algorithms that learn from data and improve over time",
    icon: Brain,
    impact: "High"},
  {title: "Deep Learning",
    description: "Neural networks for complex pattern recognition and analysis",
    icon: Code,
    impact: "High"},
  {title: "Natural Language Processing",
    description: "Understanding and processing human language for insights",
    icon: FileText,
    impact: "Critical"},
  {
    title: "Computer Vision",
    description: "Image and video analysis for visual data insights",
    icon: Eye,
    impact: "High"

];

const successStories = [
  {
    id: 1,
    comp: "E-commerce Giant",
    industry: "Retail",
    challenge: "Needed predictive analytics for inventory management",
    solution: "Built AI-powered forecasting system with 95% accuracy",
    results: "30% reduction in stockouts, 25% cost savings, improved customer satisfaction",
    logo: "EG"
  },
  {id: 2,
    comp: "Financial Services Corp",
    industry: "Finance",
    challenge: "Required real-time fraud detection system",
    solution: "Implemented AI-powered anomaly detection with machine learning",
    results: "90% fraud detection rate, 60% reduction in false positives, $2M saved",
    logo: "FS"},
  {
    id: 3,
    comp: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Needed patient behavior analytics for better care",
    solution: "Developed AI-driven patient insights platform",
    results: "40% improvement in patient outcomes, 35% reduction in readmissions",
    logo: "HN"

];

const processSteps = [
  {
    step: 1,
    title: "Data Assessment",
    description: "Evaluate data quality, sources, and requirements for AI implementation",
    icon: Database,
    duration: "1-2 weeks"
  },
  {step: 2,
    title: "AI Model Design",
    description: "Design and select appropriate AI/ML models for the use case",
    icon: Brain,
    duration: "2-3 weeks"},
  {step: 3,
    title: "Development & Training",
    description: "Build AI models and train them with relevant data",
    icon: Code,
    duration: "8-20 weeks"},
  {
    step: 4,
    title: "Deployment & Optimization",
    description: "Deploy models and continuously optimize performance",
    icon: Zap,
    duration: "2-4 weeks"

];

export default function AIAnalytics
export { AIAnalytics }() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Predictive Analytics', 'Business Intelligence', 'Customer Analytics', 'Real-Time Analytics', 'NLP Analytics', 'Anomaly Detection'];

  const filteredSolutions = selectedCategory === 'All'
    ? aiAnalyticsSolutions
    : aiAnalyticsSolutions.filter(solution => solution.category === selectedCategory);
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const AIAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>AIAnalytics | Zion Tech Group</title>
        <meta name="description" content="AIAnalytics - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">AIAnalytics</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
