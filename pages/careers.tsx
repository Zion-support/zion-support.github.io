import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Lightbulb,
  Target,
  Award,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Code,
  BarChart3,
  Smartphone,
  Cloud,
  Database,
  Network,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Building,
  User,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  GraduationCap,
  Rocket,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Settings,
  Monitor,
  Car,
  Rocket as RocketIcon,
  Heart as HeartIcon,
  Building as BuildingIcon,
  Sprout,
  ShoppingCart,
  BookOpen as BookOpenIcon,
  Home,
  Gamepad2
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Lead the development of cutting-edge AI solutions and machine learning models."
  },
  {
    id: 2,
    title: "Cloud Infrastructure Specialist",
    department: "Infrastructure",
    location: "New York, NY",
    type: "Full-time",
    description: "Design and maintain scalable cloud infrastructure solutions."
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We encourage creative thinking and embrace new technologies to solve complex problems."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives to achieve great results."
  },
  {
    title: "Continuous Learning",
    description: "We invest in our people's growth and provide opportunities for professional development."
  },
  {
    title: "Client Success",
    description: "Our success is measured by our clients' success and satisfaction with our solutions."
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of technology." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600">Help us build the future of technology</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  {job.department}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}