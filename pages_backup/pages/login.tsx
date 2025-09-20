import React from 'react';
import { Helmet } from 'react-helmet-async';


import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";

import {
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
origin/automation-improvements-final
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





} from "lucide-react";
  DizzyFace2
} from 'lucide-react';
origin/automation-improvements-final


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







  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [error, setError] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({

      ...prev
      [name]: value
      ...prev,
      [name]: value,
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
origin/automation-improvements-final
      ...prev
      [name]: value

    }));
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);




    setError("");
    try {
      // Simulate API call
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
origin/automation-improvements-final

    } finally {



      setIsLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>login | Zion Tech Group</title>
        <meta name="description" content="login - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">login</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default login;