<<<<<<< HEAD

<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
<<<<<<< HEAD
<<<<<<< HEAD
import {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from './react';
import Head from './next / head';
import Link from './next / link';
import { motion  } from './framer-motion';
import Layout from "./components / Layout";
import {
<<<<<<< HEAD
origin/automation-improvements-final
import {
=======
=======
origin/automation-improvements-final
import {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  DizzyFace2,
  DizzyFace2,;





} from "lucide-react";
  DizzyFace2
} from 'lucide-react';
<<<<<<< HEAD
origin/automation-improvements-final
=======
>>>>>>> origin/automation-improvements-final
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: ""
    password: ""
    email: "",
    password: "",;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev
      [name]: value
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ...prev,
      [name]: value,
  const [error, setError] = useState('');

<<<<<<< HEAD

export default function LoginPage() {
  const [formData, setFormData] = useState({

    email: "",
    password: "",;

  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
origin/automation-improvements-final
      ...prev
      [name]: value
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export default function LoginPage() {
  const [formData, setFormData] = useState({

    email: "",
    password: "",;

  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }));
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e && e.target;
    setFormData((prev) => ({;
      ...prev,;
      [name]: value,;
    }));
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {;
      // Simulate API call;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setIsLoading(true);
    setError("");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // For demo purposes, accept any email/password;
      if (formData && formData.email && formData && formData.password) {;
        // Redirect to dashboard or home page;
        window && window.location.href = "/";
      } else {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setError("Please fill in all fields");
      }
    } catch (err) {;
      setError("Login failed. Please try again.");
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setError('');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
=======
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // For demo purposes, accept any email/password
      if (formData.email && formData.password) {
        // Redirect to dashboard or home page
        window.location.href = '/';
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    } finally {
<<<<<<< HEAD
origin/automation-improvements-final
=======
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } finally {
    } finally {;
=======
origin/automation-improvements-final
    } finally {
=======
    } finally {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsLoading(false);
    }
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Layout>
      <Head>
        <title>Login - Zion Tech Group</title>
        <meta
          name="description"
          content="Sign in to your Zion Tech Group account to access your dashboard and services."
        />
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />



<<<<<<< HEAD
        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />
        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />
origin/automation-improvements-final
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <meta name="description" content="Sign in to your Zion Tech Group account to access your dashboard and services." />
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
              Or{" "}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Or{" "}
              Or{" "}
              Or{' '}
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
              Or{" "}
              Or{" "}
              Or{' '}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/automation-improvements-final
              <Link
                href="/contact"

<<<<<<< HEAD
<<<<<<< HEAD
              <Link
                href="/contact"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="font-medium text-blue-600 hover:text-blue-500">;
                contact us for access;
              </Link>;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
          <motion&& motion.div
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <motion&& motion.div

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
              <div>

                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">


                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

=======
              <div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
origin/automation-improvements-final
<<<<<<< HEAD
=======

                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

=======

=======
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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
<<<<<<< HEAD
=======
=======

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">


<<<<<<< HEAD
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
origin/automation-improvements-final
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
<<<<<<< HEAD
                  />;
                </div>;
              </div>;
=======
=======
                  />;
                </div>;
              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </button>;
                </div>;
              </div>;
              <div className="flex items-center justify-between">;
                <div className="flex items-center">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  </button>;
                </div>;
              </div>;

              <div className="flex items-center justify-between">;
                <div className="flex items-center">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">


<<<<<<< HEAD
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
origin/automation-improvements-final
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                  />;
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900">;
                    Remember me;
                  </label>;
                </div>;
                <div className="text-sm">;
                  <Link
                    href="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500">;
  }
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    setIsLoading (true);
    set_error ("");
;
    try {
      // Simulate API call;
      await new Promise ((resolve) => set_timeout (resolve, 1000));
;
      // For demo purposes, accept any email / password;
      // Check condition
if ( {) {
  $2
}
        // Redirect to dashboard or home page;
        window.location.href = "/";
      } else {
        set_error ("Please fill in all fields");
      }
    } catch (err) {
      set_error ("Login failed. Please try again.");
    } finally {
      setIsLoading (false);
    }
  }
;
  return (
    <Layout>;
      <Head>;
        <title > Login - Zion Tech Group</title>;
        <meta;
          name="description";
          content="Sign in to your Zion Tech Group account to access your dashboard and services.";
        />;
      </Head>;
      <div className="min - h-screen bg - gray - 50 flex items - center justify - center py - 12 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-md w - full space - y-8">;
          <motion.div;
            className="text - center";
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="mx - auto h - 12 w - 12 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - full flex items - center justify - center">;
              <Shield className="h - 6 w - 6 text - white" />;
            </div>;
            <h2 className="mt - 6 text - 3xl font - bold text - gray - 900">;
              Sign in to your account;
            </h2>;
            <p className="mt - 2 text - sm text - gray - 600">;
              Or{" "}
              <Link;
                href="/contact";
                className="font - medium text - blue - 600 hover:text - blue - 500";
              >;
                contact us for access;
              </Link>;
            </p>;
          </motion.div>;
          <motion.div;
            className="mt - 8 bg - white py - 8 px - 6 shadow - lg rounded - lg";
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            <form className="space - y-6" on_submit={handle_submit}>;
              {error && (
                <motion.div;
                  className="bg - red - 50 border border - red - 200 text - red - 600 px - 4 py - 3 rounded - lg flex items - center";
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >;
                  <AlertCircle className="h - 5 w - 5 mr - 2" />;
                  {error}
                </motion.div>)}
              <div>;
                <label;
                  html_for="email";
                  className="block text - sm font - medium text - gray - 700 mb - 2";
                >;
                  Email address;
                </label>;
                <div className="relative">;
                  <div className="absolute inset - y-0 left - 0 pl - 3 flex items - center pointer - events - none">;
                    <Mail className="h - 5 w - 5 text - gray - 400" />;
                  </div>;
                  <input;
                    id="email";
                    name="email";
                    type="email";
                    auto_complete="email";
                    required;
                    value={form_data.email}
                    on_change={handleInputChange}
                    className="appearance - none relative block w - full pl - 10 pr - 3 py - 3 border border - gray - 300 placeholder - gray - 500 text - gray - 900 rounded - lg focus:outline - none focus:ring - blue - 500 focus:border - blue - 500 focus:z - 10 sm:text - sm";
                    placeholder="Enter your email";
                  />;
                </div>;
              </div>;
              <div>;
                <label;
                  html_for="password";
                  className="block text - sm font - medium text - gray - 700 mb - 2";
                >;
                  Password;
                </label>;
                <div className="relative">;
                  <div className="absolute inset - y-0 left - 0 pl - 3 flex items - center pointer - events - none">;
                    <Lock className="h - 5 w - 5 text - gray - 400" />;
                  </div>;
                  <input;
                    id="password";
                    name="password";
                    type={show_password ? "text" : "password"}
                    auto_complete="current - password";
                    required;
                    value={form_data.password}
                    on_change={handleInputChange}
                    className="appearance - none relative block w - full pl - 10 pr - 10 py - 3 border border - gray - 300 placeholder - gray - 500 text - gray - 900 rounded - lg focus:outline - none focus:ring - blue - 500 focus:border - blue - 500 focus:z - 10 sm:text - sm";
                    placeholder="Enter your password";
                  />;
                  <button;
                    type="button";
                    className="absolute inset - y-0 right - 0 pr - 3 flex items - center";
                    on_click={() => setShowPassword (!show_password)}
                  >;
                    {show_password ? (
                      <EyeOff className="h - 5 w - 5 text - gray - 400 hover:text - gray - 600" />) : (
                      <Eye className="h - 5 w - 5 text - gray - 400 hover:text - gray - 600" />)}
                  </button>;
                </div>;
              </div>;
              <div className="flex items - center justify - between">;
                <div className="flex items - center">;
                  <input;
                    id="remember - me";
                    name="remember - me";
                    type="checkbox";
                    className="h - 4 w - 4 text - blue - 600 focus:ring - blue - 500 border - gray - 300 rounded";
                  />;
                  <label;
                    html_for="remember - me";
                    className="ml - 2 block text - sm text - gray - 900";
                  >;
                    Remember me;
                  </label>;
                </div>;
                <div className="text - sm">;
                  <Link;
                    href="/forgot - password";
                    className="font - medium text - blue - 600 hover:text - blue - 500";
                  >;
                    Forgot your password?;
                  </Link>;
                </div>;
              </div>;

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Sign in
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
<<<<<<< HEAD
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
origin/automation-improvements-final
=======
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
              Don't have an account?{" "}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Don't have an account?{" "}
              Don't have an account?{" "}
              Don't have an account?{' '}
<<<<<<< HEAD


origin/automation-improvements-final
=======
>>>>>>> origin/automation-improvements-final
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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