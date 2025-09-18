import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const departments = [
    {
      id: 'all',
      name: 'All Departments',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-research',
      name: 'AI & Research',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Technology',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    }
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  Users, 
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  Heart,
  Globe,
  Building2,
  GraduationCap,
  Award,
  Coffee,
  Wifi,
  Monitor,
  Smartphone,
  Palette,
  Dumbbell,
  BookOpen,
  Users2,
  Rocket,
  Target,
  Lightbulb,
  CheckCircle,
  Code,
  Settings,
  Eye
} from 'lucide-react';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 24, icon: Building2 },
    { id: 'engineering', name: 'Engineering', count: 12, icon: Code },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4, icon: Shield },
    { id: 'quantum', name: 'Quantum Technology', count: 3, icon: Zap },
    { id: 'sales', name: 'Sales & Business Development', count: 5, icon: Target },
    { id: 'marketing', name: 'Marketing', count: 3, icon: Lightbulb },
    { id: 'operations', name: 'Operations', count: 2, icon: Settings }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 24 },
    { id: 'remote', name: 'Remote', count: 18 },
    { id: 'middletown-de', name: 'Middletown, DE', count: 4 },
    { id: 'new-york', name: 'New York, NY', count: 2 }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', count: 24 },
    { id: 'full-time', name: 'Full-time', count: 20 },
    { id: 'part-time', name: 'Part-time', count: 2 },
    { id: 'contract', name: 'Contract', count: 2 }
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Award, 
  MapPin, 
  Clock,
  ArrowRight,
  Search,
  Filter,
  Building,
  Brain,
  Shield,
  Cpu,
  Network,
  Rocket,
  Star,
  CheckCircle,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 23 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-research', name: 'AI Research', count: 6 },
    { id: 'sales', name: 'Sales & Business', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 23 },
    { id: 'middletown', name: 'Middletown, DE', count: 15 },
    { id: 'remote', name: 'Remote', count: 6 },
    { id: 'amsterdam', name: 'Amsterdam, NL', count: 2 }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', count: 23 },
    { id: 'full-time', name: 'Full Time', count: 18 },
    { id: 'part-time', name: 'Part Time', count: 3 },
    { id: 'contract', name: 'Contract', count: 2 }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "ai",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $180k",
      description: "Join our AI team to develop cutting-edge machine learning models and autonomous systems...",
      requirements: [
        "Advanced degree in Computer Science, AI, or related field",
        "Experience with PyTorch, TensorFlow, and modern ML frameworks",
        "Strong background in deep learning and neural networks",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible remote work options",
        "Health, dental, and vision insurance",
        "Professional development budget"
      ],
      urgent: true
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $130k",
      description: "Help protect our clients' digital assets with advanced security solutions...",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC2, ISO 27001)",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary",
        "Health and wellness benefits",
        "Training and certification support",
        "Career growth opportunities"
      ],
      urgent: false
    },
    {
  Award, 
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Send,
  Star,
  TrendingUp
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import { SEO } from '../components/SEO';

const Careers: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Careers</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Careers;
