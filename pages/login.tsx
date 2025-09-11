class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
=======import React, { useState } from './react';
import Head from './next / head';
import Link from './next / link';
import { motion  } from './framer-motion';
import Layout from "./components / Layout";
import {
import {;
  Mail,;
  Lock,;
  Eye,;
  EyeOff,;
  ArrowRight,;
  CheckCircle,;
  AlertCircle,;
  User,;
  Shield,;
  Globe,;
  Smartphone,;
  Monitor,;
  Server,;
  Database,;
  Cloud,;
  Brain,;
  Code,;
  Settings,;
  Wrench,;
  Cog,;
  Activity,;
  PieChart,;
  BarChart,;
  TrendingUp,;
  DollarSign,;
  ShoppingCart,;
  Home,;
  Trash2,;
  Camera,;
  Heart,;
  ClipboardList,;
  TreePine,;
  Droplets,;
  Building,;
  Rocket,;
  Lightbulb,;
  Target,;
  MessageSquare,;
  HelpCircle,;
  Info,;
  XCircle,;
  Plus,;
  Minus,;
  ChevronUp,;
  ChevronRight,;
  ChevronLeft,;
  ChevronDown,;
  ArrowUp,;
  ArrowDown,;
  ArrowLeft,;
  Pause,;
  Stop,;
  SkipForward,;
  SkipBack,;
  Volume2,;
  VolumeX,;
  Maximize,;
  Minimize,;
  RotateCcw,;
  RotateCw,;
  RefreshCw,;
  Upload,;
  Share,;
  Copy,;
  Edit,;
  Trash,;
  Save,;
  Unlock,;
  Bell,;
  BellOff,;
  Star as StarIcon,;
  Heart as HeartIcon,;
  ThumbsUp,;
  ThumbsDown,;
  MessageCircle,;
  Send,;
  Paperclip,;
  Smile,;
  Frown,;
  Meh,;
  Laugh,;
  Angry,;
  Sad,;
  Surprised,;
  Wink,;
  Kiss,;
  Tongue,;
  Wink2,;
  KissWinkHeart,;
  KissClosedEyes,;
  StuckOutTongue,;
  StuckOutTongueWinkingEye,;
  StuckOutTongueClosedEyes,;
  Disappointed,;
  Worried,;
  Angry2,;
  Rage,;
  Cry,;
  Scream,;
  Confounded,;
  Hugging,;
  Smirk,;
  NoMouth,;
  NeutralFace,;
  Expressionless,;
  Unamused,;
  RollingEyes,;
  Thinking,;
  LyingFace,;
  HandOverMouth,;
  ShushingFace,;
  ExplodingHead,;
  CowboyHatFace,;
  DisguisedFace,;
  Sunglasses,;
  NerdFace,;
  MonocleFace,;
  Confused,;
  WorriedFace,;
  SlightlyFrowningFace,;
  OpenMouth,;
  Hushed,;
  Astonished,;
  Flushed,;
  PleadingFace,;
  FrowningFace,;
  AnguishedFace,;
  FearfulFace,;
  ColdSweat,;
  DisappointedRelieved,;
  CryFace,;
  LoudlyCryingFace,;
  ScreamFace,;
  StuckOutTongueFace,;
  DroolingFace,;
  UnamusedFace,;
  SweatSmile,;
  Sweat,;
  WearyFace,;
  TiredFace,;
  SleepyFace,;
  YawningFace,;
  DizzyFace,;
  ExplodingHeadFace,;
  CowboyHatFace2,;
  DisguisedFace2,;
  SunglassesFace,;
  NerdFace2,;
  MonocleFace2,;
  ConfusedFace,;
  WorriedFace2,;
  SlightlyFrowningFace2,;
  OpenMouthFace,;
  HushedFace,;
  AstonishedFace,;
  FlushedFace,;
  PleadingFace2,;
  FrowningFace2,;
  AnguishedFace2,;
  FearfulFace2,;
  ColdSweatFace,;
  DisappointedRelievedFace,;
  CryFace2,;
  LoudlyCryingFace2,;
  ScreamFace2,;
  StuckOutTongueFace2,;
  DroolingFace2,;
  UnamusedFace2,;
  SweatSmileFace,;
  SweatFace,;
  WearyFace2,;
  TiredFace2,;
  SleepyFace2,;
  YawningFace2,;
  DizzyFace2,;

} from "lucide-react";




} from "lucide-react";
  DizzyFace2
} from 'lucide-react';
=======
  DizzyFace2
} from 'lucide-react';
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Mail
  Lock
  Eye
  EyeOff
  ArrowRight
  CheckCircle
  AlertCircle
  User
  Shield
  Globe
  Smartphone
  Monitor
  Server
  Database
  Cloud
  Brain
  Code
  Settings
  Wrench
  Cog
  Activity
  PieChart
  BarChart
  TrendingUp
  DollarSign
  ShoppingCart
  Home
  Trash2
  Camera
  Heart
  ClipboardList
  TreePine
  Droplets
  Building
  Rocket
  Lightbulb
  Target
  MessageSquare
  HelpCircle
  Info
  XCircle
  Plus
  Minus
  ChevronUp
  ChevronRight
  ChevronLeft
  ChevronDown
  ArrowUp
  ArrowDown
  ArrowLeft
  Pause
  Stop
  SkipForward
  SkipBack
  Volume2
  VolumeX
  Maximize
  Minimize
  RotateCcw
  RotateCw
  RefreshCw
  Upload
  Share
  Copy
  Edit
  Trash
  Save
  Unlock
  Bell
  BellOff
  Star as StarIcon
  Heart as HeartIcon
  ThumbsUp
  ThumbsDown
  MessageCircle
  Send
  Paperclip
  Smile
  Frown
  Meh
  Laugh
  Angry
  Sad
  Surprised
  Wink
  Kiss
  Tongue
  Wink2
  KissWinkHeart
  KissClosedEyes
  StuckOutTongue
  StuckOutTongueWinkingEye
  StuckOutTongueClosedEyes
  Disappointed
  Worried
  Angry2
  Rage
  Cry
  Scream
  Confounded
  Hugging
  Smirk
  NoMouth
  NeutralFace
  Expressionless
  Unamused
  RollingEyes
  Thinking
  LyingFace
  HandOverMouth
  ShushingFace
  ExplodingHead
  CowboyHatFace
  DisguisedFace
  Sunglasses
  NerdFace
  MonocleFace
  Confused
  WorriedFace
  SlightlyFrowningFace
  OpenMouth
  Hushed
  Astonished
  Flushed
  PleadingFace
  FrowningFace
  AnguishedFace
  FearfulFace
  ColdSweat
  DisappointedRelieved
  CryFace
  LoudlyCryingFace
  ScreamFace
  StuckOutTongueFace
  DroolingFace
  UnamusedFace
  SweatSmile
  Sweat
  WearyFace
  TiredFace
  SleepyFace
  YawningFace
  DizzyFace
  ExplodingHeadFace
  CowboyHatFace2
  DisguisedFace2
  SunglassesFace
  NerdFace2
  MonocleFace2
  ConfusedFace
  WorriedFace2
  SlightlyFrowningFace2
  OpenMouthFace
  HushedFace
  AstonishedFace
  FlushedFace
  PleadingFace2
  FrowningFace2
  AnguishedFace2
  FearfulFace2
  ColdSweatFace
  DisappointedRelievedFace
  CryFace2
  LoudlyCryingFace2
  ScreamFace2
  StuckOutTongueFace2
  DroolingFace2
  UnamusedFace2
  SweatSmileFace
  SweatFace
  WearyFace2
  TiredFace2
  SleepyFace2
  YawningFace2
  DizzyFace2
} from "lucide-react";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    email: "",
    password: "",;

  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


=======  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
origin/automation-improvements-final
      ...prev
      [name]: value
export default function LoginPage() {
  const [formData, setFormData] = useState({

    email: "",
    password: "",;

  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }));
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {;
      // Simulate API call;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setIsLoading(true);
    setError("");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // For demo purposes, accept any email/password;
      if (formData && formData.email && formData && formData.password) {;
        // Redirect to dashboard or home page;
        window && window.location.href = "/";
      } else {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setError("Please fill in all fields");
      }
    } catch (err) {;
      setError("Login failed. Please try again.");    setError('');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
=======
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
            // For demo purposes, accept any email/password
      if (formData.email && formData.password) {
        // Redirect to dashboard or home page
        window.location.href = '/';
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
=======

    } finally {
        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />



=======
              Or{" "}
              Or{" "}
              Or{' '}origin/automation-improvements-final
              <Link
                href="/contact"
=======

          <motion&& motion.div
            className="mt-8 bg-white py-8 px-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
            <form className="space-y-6" onSubmit={handleSubmit}>;
              {error && (;
                <motion&& motion.div
                  className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center"
                  initial={{ opacity: 0, scale: 0 && 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.3 }}>;
                  <AlertCircle className="h-5 w-5 mr-2" />;
                  {error}
                </motion && motion.div>;
              )}
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">


                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

=======
              <div>                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
origin/automation-improvements-final
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

=======

=======
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>;
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2">;
                  Email address;
                </label>;
                <div className="relative">;
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">;
                    <Mail className="h-5 w-5 text-gray-400" />;
                  </div>;

                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                  <Globe className="h-5 w-5" />
                  <span className="ml-2">Google</span>
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                  <User className="h-5 w-5" />
                  <span className="ml-2">Microsoft</span>
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-gray-600">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </button>;
              </div>;
            </form>;
            <div className="mt-6">;
              <div className="relative">;
                <div className="absolute inset-0 flex items-center">;
                  <div className="w-full border-t border-gray-300" />;
                </div>;
                <div className="relative flex justify-center text-sm">;
                  <span className="px-2 bg-white text-gray-500">;
                    Or continue with;
                  </span>;
                </div>;
              </div>;
              <div className="mt-6 grid grid-cols-2 gap-3">;
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">;
                  <Globe className="h-5 w-5" />;
                  <span className="ml-2">Google</span>;
                </button>;
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">;
                  <User className="h-5 w-5" />;
                  <span className="ml-2">Microsoft</span>;
                </button>;
              </div>;
            </div>;
          </motion && motion.div>;
          <motion&& motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
            <p className="text-sm text-gray-600">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              Don't have an account?{" "}
              Don't have an account?{" "}
              Don't have an account?{' '}
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link
                href="/contact"
                className="font-medium text-blue-600 hover:text-blue-500">;
                Contact us to get started;
              </Link>;
            </p>;
          </motion && motion.div>;
        </div>;
      </div>;
    </Layout>;
  );
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>;
                <button;
                  type="submit";
                  disabled={is_loading}
                  className="group relative w - full flex justify - center py - 3 px - 4 border border - transparent text - sm font - medium rounded - lg text - white bg - blue - 600 hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500 disabled:opacity - 50 disabled:cursor - not - allowed transition - colors";
                >;
                  {is_loading ? (
                    <div className="flex items - center">;
                      <div className="animate - spin rounded - full h - 4 w - 4 border - b-2 border - white mr - 2"></div>;
                      Signing in...;
                    </div>) : (
                    <div className="flex items - center">;
                      Sign in;
                      <ArrowRight className="ml - 2 h - 4 w - 4 group - hover:translate - x-1 transition - transform" />;
                    </div>)}
                </button>;
              </div>;
            </form>;
            <div className="mt - 6">;
              <div className="relative">;
                <div className="absolute inset - 0 flex items - center">;
                  <div className="w - full border - t border - gray - 300" />;
                </div>;
                <div className="relative flex justify - center text - sm">;
                  <span className="px - 2 bg - white text - gray - 500">;
                    Or continue with;
                  </span>;
                </div>;
              </div>;
              <div className="mt - 6 grid grid - cols - 2 gap - 3">;
                <button className="w - full inline - flex justify - center py - 2 px - 4 border border - gray - 300 rounded - lg shadow - sm bg - white text - sm font - medium text - gray - 500 hover:bg - gray - 50 transition - colors">;
                  <Globe className="h - 5 w - 5" />;
                  <span className="ml - 2">Google</span>;
                </button>;
                <button className="w - full inline - flex justify - center py - 2 px - 4 border border - gray - 300 rounded - lg shadow - sm bg - white text - sm font - medium text - gray - 500 hover:bg - gray - 50 transition - colors">;
                  <User className="h - 5 w - 5" />;
                  <span className="ml - 2">Microsoft</span>;
                </button>;
              </div>;
            </div>;
          </motion.div>;
          <motion.div;
            className="text - center";
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <p className="text - sm text - gray - 600">;
              Don't have an account?{" "}
              <Link;
                href="/contact";
                className="font - medium text - blue - 600 hover:text - blue - 500";
              >;
                Contact us to get started;
              </Link>;
            </p>;
          </motion.div>;
        </div>;
      </div>;
    </Layout>);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}