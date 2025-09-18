<<<<<<< HEAD
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {GraduationCap,
  BookOpen,
  Users,
  Smartphone,
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
  Video,
  Headphones,
  Monitor,
  Brain,
  Code} from 'lucide-react';

    integrations["Google Analytics", "Tableau", "Power BI", "Custom APIs"]
  }
];

const edTechTrends = [
  {title: "Personalized Learning",
    description: "AI-driven adaptive learning that customizes content for each student",
    icon: Brain,
    impact: "High"},
  {title: "Hybrid Learning Models",
    description: "Combination of in-person and online learning experiences",
    icon: Globe,
    impact: "Critical"},
  {title: "Immersive Technologies",
    description: "VR/AR for enhanced learning experiences and engagement",
    icon: Monitor,
    impact: "High"},
  {
    title: "Data-Driven Insights",
    description: "Analytics to improve learning outcomes and institutional performance",
    icon: BarChart3,
    impact: "High"

];

const successStories = [
  {
    id: 1,
    comp: "Tech University",
    industry: "Higher Education",
    challenge: "Needed comprehensive LMS for 50,000+ students",
    solution: "Built custom LMS with AI-powered personalization",
    results: "30% improvement in student engagement, 25% higher completion rates",
    logo: "TU"
  },
  {id: 2,
    comp: "Global Learning Network",
    industry: "K-12 Education",
    challenge: "Required mobile learning platform for remote students",
    solution: "Developed cross-platform mobile app with offline capabilities",
    results: "40% increase in mobile learning, 90% student satisfaction",
    logo: "GL"},
  {
    id: 3,
    comp: "Corporate Training Plus",
    industry: "Corporate Training",
    challenge: "Needed VR training simulations for safety training",
    solution: "Created immersive VR training modules with progress tracking",
    results: "60% faster skill acquisition, 80% reduction in training costs",
    logo: "CT"

];

const processSteps = [
  {
    step: 1,
    title: "Educational Assessment",
    description: "Analyze learning objectives and technology requirements",
    icon: Target,
    duration: "1-2 weeks"
  },
  {step: 2,
    title: "Solution Design",
    description: "Design customized educational technology solution",
    icon: FileText,
    duration: "2-3 weeks"},
  {step: 3,
    title: "Development & Testing",
    description: "Build and thoroughly test the educational solution",
    icon: Code,
    duration: "12-32 weeks"},
  {
    step: 4,
    title: "Deployment & Training",
    description: "Deploy solution and provide comprehensive training",
    icon: Users,
    duration: "1-2 weeks"

];

export default function EducationSolutions
export { EducationSolutions }() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'LMS Platforms', 'Mobile Development', 'VR/AR', 'AI & Analytics', 'Communication', 'Analytics'];

  const filteredSolutions = selectedCategory === 'All'
    ? educationSolutions
    : educationSolutions.filter(solution => solution.category === selectedCategory);
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EducationSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>EducationSolutions | Zion Tech Group</title>
        <meta name="description" content="EducationSolutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">EducationSolutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default EducationSolutions;
