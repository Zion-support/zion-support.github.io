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
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import React, { useState } from './react';
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
  DizzyFace2
} from 'lucide-react';
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
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  User,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Database,
  Cloud,
  Brain,
  Code,
  Settings,
  Wrench,
  Cog,
  Activity,
  PieChart,
  BarChart,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  Heart,
  ClipboardList,
  TreePine,
  Droplets,
  Building,
  Rocket,
  Lightbulb,
  Target,
  MessageSquare,
  HelpCircle,
  Info,
  XCircle,
  Plus,
  Minus,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Unlock,
  Bell,
  BellOff,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Kiss,
  Tongue,
  Wink2,
  KissWinkHeart,
  KissClosedEyes,
  StuckOutTongue,
  StuckOutTongueWinkingEye,
  StuckOutTongueClosedEyes,
  Disappointed,
  Worried,
  Angry2,
  Rage,
  Cry,
  Scream,
  Confounded,
  Hugging,
  Smirk,
  NoMouth,
  NeutralFace,
  Expressionless,
  Unamused,
  RollingEyes,
  Thinking,
  LyingFace,
  HandOverMouth,
  ShushingFace,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  Sunglasses,
  NerdFace,
  MonocleFace,
  Confused,
  WorriedFace,
  SlightlyFrowningFace,
  OpenMouth,
  Hushed,
  Astonished,
  Flushed,
  PleadingFace,
  FrowningFace,
  AnguishedFace,
  FearfulFace,
  ColdSweat,
  DisappointedRelieved,
  CryFace,
  LoudlyCryingFace,
  ScreamFace,
  StuckOutTongueFace,
  DroolingFace,
  UnamusedFace,
  SweatSmile,
  Sweat,
  WearyFace,
  TiredFace,
  SleepyFace,
  YawningFace,
  DizzyFace,
  ExplodingHeadFace,
  CowboyHatFace2,
  DisguisedFace2,
  SunglassesFace,
  NerdFace2,
  MonocleFace2,
  ConfusedFace,
  WorriedFace2,
  SlightlyFrowningFace2,
  OpenMouthFace,
  HushedFace,
  AstonishedFace,
  FlushedFace,
  PleadingFace2,
  FrowningFace2,
  AnguishedFace2,
  FearfulFace2,
  ColdSweatFace,
  DisappointedRelievedFace,
  CryFace2,
  LoudlyCryingFace2,
  ScreamFace2,
  StuckOutTongueFace2,
  DroolingFace2,
  UnamusedFace2,
  SweatSmileFace,
  SweatFace,
  WearyFace2,
  TiredFace2,
  SleepyFace2,
  YawningFace2,
  DizzyFace2
} from 'lucide-react';
  DizzyFace2,
} from "lucide-react";
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
} from './lucide-react';
;
export default /**
 * LoginPage - Function description
 */
function LoginPage() {
  const [form_data, setFormData] = useState ({
    email: "",
    password: "",
  });
  const [show_password, setShowPassword] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
  const [error, set_error] = useState ("");
;
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const { name, value } = e.target;
    setFormData ((prev) => ({
      ...prev,
      [name]: value,
  const [error, setError] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
      ...prev
      [name]: value
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.password) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e && e.target;
    setFormData((prev) => ({;
      ...prev,;
      [name]: value,;
    }));
    try {;
      // Simulate API call;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // For demo purposes, accept any email/password;
      if (formData && formData.email && formData && formData.password) {;
        // Redirect to dashboard or home page;
        window && window.location.href = "/";
      } else {;
        setError("Please fill in all fields");
      }
    } catch (err) {;
      setError("Login failed. Please try again.");
    setIsLoading(true);
    setError('');
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      // For demo purposes, accept any email/password
      if (formData.email && formData.password) {
        // Redirect to dashboard or home page
        window.location.href = '/';
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    setError("");
      // For demo purposes, accept any email/password
      if (formData.email && formData.password) {
        // Redirect to dashboard or home page
        window.location.href = "/";
      } else {
        setError("Please fill in all fields");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false)
    }
  }
  const title = 'Sign In — Zion Tech Group'
  const description = 'Access your Zion Tech Group account to manage AI, cloud, and cybersecurity solutions.'
  return (
    <Layout>
      <Head>
        <title>Login - Zion Tech Group</title>
        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />
        <meta
          name="description"
          content="Sign in to your Zion Tech Group account to access your dashboard and services."
        />
      </Head>
        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
    <Layout>;
      <Head>;
        <title>Login - Zion Tech Group</title>;
        <meta
          name="description"
          content="Sign in to your Zion Tech Group account to access your dashboard and services."
        />;
      </Head>;
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-md w-full space-y-8">;
          <motion&& motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">;
              <Shield className="h-6 w-6 text-white" />;
            </div>;
            <h2 className="mt-6 text-3xl font-bold text-gray-900">;
              Sign in to your account;
            </h2>;
            <p className="mt-2 text-sm text-gray-600">;
              Or{" "}
              Or{' '}
              Or{' '}
              Or{" "}
              <Link
                href="/contact"
                className="font-medium text-blue-600 hover:text-blue-500">;
                contact us for access;
              </Link>;
            </p>;
          </motion && motion.div>;
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
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
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
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData && formData.email}
                    onChange={handleInputChange}
                    className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email"
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  />;
                </div>;
              </div>;
              <div>;
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2">;
                  Password;
                </label>;
                <div className="relative">;
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">;
                    <Lock className="h-5 w-5 text-gray-400" />;
                  </div>;
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={formData && formData.password}
                    onChange={handleInputChange}
                    className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />;
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >;
                    {showPassword ? (;
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />;
                    ) : (;
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />;
                    )}
                  </div>
                  </button>;
                </div>;
              </div>;
              <div className="flex items-center justify-between">;
                <div className="flex items-center">;
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                  />;
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900">;
                    Remember me;
                  </label>;
                </div>;
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="w-full inline-flex justify-center py-3 px-4 border border-zion-blue-light rounded-lg shadow-sm bg-zion-blue-light/20 text-sm font-medium text-zion-slate-light hover:bg-zion-blue-light/30 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="ml-2">Google</span>
                    </button>
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Access Your Technology Hub
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Manage your AI autonomous systems, monitor cloud infrastructure, and control cybersecurity platforms
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Security Dashboard</h3>
                <p className="text-zion-slate-light">
                  Monitor threat detection, access controls, and security compliance in real-time
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">AI Management</h3>
                <p className="text-zion-slate-light">
                  Control autonomous AI systems, monitor performance, and optimize machine learning models
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan-light to-zion-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Cloud Control</h3>
                <p className="text-zion-slate-light">
                  Manage cloud infrastructure, monitor costs, and optimize resource allocation
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-gray-600">
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
              Don't have an account?{" "}
              Don't have an account?{' '}
              Don't have an account?{' '}
              Don't have an account?{" "}
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
}