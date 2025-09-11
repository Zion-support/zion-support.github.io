import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart,
  Star,
  Rocket,
  Building,
  Truck,
  Network,
  Eye,
  Lock,
  BarChart3,
  MessageCircle,
  TrendingUp,
  Code,
  Server,
  Smartphone,
  Database,
  Clock,
  BookOpen,
  Briefcase,
  Newspaper,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Cpu,
  PenTool,
  GitFork,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Zion Tech Group is a leading technology company specializing in AI, IT services, and micro SaaS solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We help businesses transform their operations through innovative technology solutions and expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;