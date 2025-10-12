// Optimized icon system to reduce bundle size
// Only import icons that are actually used
// Core icons used across the application
<<<<<<< HEAD
=======
export {
export const IconRegistry = {;
export type IconName = keyof typeof IconRegistry;
// Optimized icon system to reduce bundle size;
// Only import icons that are actually used;
// Core icons used across the application;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Database,
  Code,
  Cloud,
  Brain,
  Cpu,
  Rocket,
  Network,
  BarChart3,
  Bot,
  Lock,
  Star,
  CheckCircle,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  Sparkles,
  Layers,
  Target,
  Award,
  Lightbulb,
  Monitor,
  Server,
  CircuitBoard,
  Atom,
  Satellite,
  Wrench,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Timer,
  Battery,
  Wifi2,
  Signal,
  Bluetooth,
  Camera,
  Mic,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Copy,
  Paste,
  Cut,
  Undo,
  Redo,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Move,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Star2,
  Heart2,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Wink,
  Kiss,
  Tongue,
  FileText,
<<<<<<< HEAD
  Package
} as const;
;
export type IconName = keyof typeof IconRegistry
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
  Package,
  Menu,
  X,
  ChevronDown,
  Twitter,
  Linkedin,
  Github;
} from 'lucide-react'
// Create a centralized icon registry for better tree-shaking
export const IconRegistry = {
  // Navigation
  Menu,
  X,
  ChevronDown,
  // Social
  Twitter,
  Linkedin,
  Github,
  // Core Business
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Database,
  Code,
  Cloud,
  Brain,
  Cpu,
  Rocket,
  Network,
  BarChart3,
  Bot,
  Lock,
  Star,
  CheckCircle,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  Sparkles,
  Layers,
  Target,
  Award,
  Lightbulb,
  Monitor,
  Server,
  CircuitBoard,
  Atom,
  Satellite,
  Wrench,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Timer,
  Battery,
  Wifi2,
  Signal,
  Bluetooth,
  Camera,
  Mic,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  HelpCircle,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Copy,
  Paste,
  Cut,
  Undo,
  Redo,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Move,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Star2,
  Heart2,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Wink,
  Kiss,
  Tongue,
  FileText,
  Package;
} as const;
;
export type IconName = keyof typeof IconRegistry;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
