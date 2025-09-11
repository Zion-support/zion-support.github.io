

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
import React from 'react';


export default function ZionTechGroupPage() {;
<<<<<<< HEAD
  return (

import Head from 'next / head';
import Link from 'next / link';
<<<<<<< HEAD
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
import React from 'react';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight;
  Star, CheckCircle, Rocket, Globe, Shield, Cpu;
  FileText, Image, Video, Music, Palette, Type;
  User, Search, Eye, Heart, ShoppingCart, Code;
  Database, Users2, Award, Lock, Server, Network, 
  Monitor, Settings, RefreshCw, Play, Pause, 
  AlertTriangle, CheckCircle2, Building, Wifi, 
  HardDrive, Cloud, Smartphone, Blocks, Wallet, 
  CreditCard, PiggyBank, Building2, Activity;
  Waves, BrainCircuit, CpuIcon, MonitorHeart;
  Film, Headphones, Camera, Gamepad2, Tv, Radio;
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2;
  Calendar, Clock, FileText2, PieChart, Atom;
  Truck, ChevronRight, Home
} from 'lucide-react';
export default function ZionTechGroupPage() {;
  return (
import Head from 'next / head';
import Link from 'next / link';
import React from 'react',
import Head from 'next/head';
import Link from 'next/link';

import {
  Brain
  Zap
  Target
  BarChart3
  Users
  TrendingUp
  MessageSquare
  Mail
  Phone
  MapPin
  ArrowRight
  Star
  CheckCircle
  Rocket
  Globe
  Shield
  Cpu
  FileText
  Image
  Video
  Music
  Palette
  Type
  User
  Search
  Eye
  Heart
  ShoppingCart
  Code
  Database
  Users2
  Award
  Lock
  Server
  Network
  Monitor
  Settings
  RefreshCw
  Play
  Pause
  AlertTriangle
  CheckCircle2
  Building
  Wifi
  HardDrive
  Cloud
  Smartphone
  Blocks
  Wallet
  CreditCard
  PiggyBank
  Building2
  Activity
  Waves
  BrainCircuit
  CpuIcon
  MonitorHeart
  Film
  Headphones
  Camera
  Gamepad2
  Tv
  Radio
  Factory
  Cog
  Gauge
  Wrench
  Settings2
  CpuIcon2
  Calendar
  Clock
  FileText2
  PieChart
  Atom
  Truck
  ChevronRight
  Home;} from 'lucide-react';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import {
  Brain, Zap, Target, BarChart3, Users, TrendingUp,
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
  Database, Users2, Award, Lock, Server, Network,
  Monitor, Settings, RefreshCw, Play, Pause,
  AlertTriangle, CheckCircle2, Building, Wifi,
  HardDrive, Cloud, Smartphone, Blocks, Wallet,
  CreditCard, PiggyBank, Building2, Activity,
  Waves, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, FileText2, PieChart, Atom,
  Truck, ChevronRight, Home
} from 'lucide-react',
export default function ZionTechGroupPage() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (

import Head from 'next / head';
import Link from 'next / link';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Brain,
  Zap,
  Target,
  BarChart3,
  Users,
  TrendingUp,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket,
  Globe,
  Shield,
  Cpu,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Type,
  User,
  Search,
  Eye,
  Heart,
  ShoppingCart,
  Code,
  Database,
  Users2,
  Award,
  Lock,
  Server,
  Network,
  Monitor,
  Settings,
  RefreshCw,
  Play,
  Pause,
  AlertTriangle,
  CheckCircle2,
  Building,
  Wifi,
  HardDrive,
  Cloud,
  Smartphone,
  Blocks,
  Wallet,
  CreditCard,
  PiggyBank,
  Building2,
  Activity,
  Waves,
  BrainCircuit,
  CpuIcon,
  MonitorHeart,
  Film,
  Headphones,
  Camera,
  Gamepad2,
  Tv,
  Radio,
  Factory,
  Cog,
  Gauge,
  Wrench,
  Settings2,
  CpuIcon2,
  Calendar,
  Clock,
  FileText2,
  PieChart,
  Atom,
  Truck,
<<<<<<< HEAD

=======
  ChevronRight,
  Home,} from 'lucide-react';
;
export default /**
 * ZionTechGroupPage - Function description
 */
function ZionTechGroupPage() {
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function ZionTechGroupPage() {

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <Head>;
        <title>;
          About Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems;
        </title>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <meta name='viewport' content='width=device-width, initial-scale=1' />;
        <link rel='icon' href='/favicon && favicon.ico' />;
      </Head>;
<<<<<<< HEAD
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Navigation */}
        <nav className='bg-black/20 backdrop-blur-md border-b border-white/10'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='flex justify-between items-center h-16'>;
              <div className='flex items-center'>;
                <div className='flex-shrink-0'>;
                  <Link href='/' className='text-2xl font-bold text-white'>;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <meta;
          name='description';
          content="Discover Zion Tech Group's mission to revolutionize technology with quantum AI, autonomous systems, and cutting - edge platforms. Learn about our innovative solutions and global impact.";
        />;
        <meta;
          name='keywords';
          content='Zion Tech Group, about us, quantum AI, autonomous systems, technology innovation, company mission';
        />;
        <meta name='viewport' content='width = device - width, initial - scale = 1' />;
        <link rel='icon' href='/favicon.ico' />;
      </Head>;
      <div className='min - h-screen bg - gradient - to - br from - slate - 900 via - purple - 900 to - slate - 900'>;
        {/* Navigation */}
        <nav className='bg - black / 20 backdrop - blur - md border - b border - white / 10'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='flex justify - between items - center h - 16'>;
              <div className='flex items - center'>;
                <div className='flex - shrink - 0'>;
                  <Link href='/' className='text - 2xl font - bold text - white'>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Zion Tech Group;
                  </Link>;
                </div>;
              </div>;
              <div className='hidden md:block'>;
<<<<<<< HEAD
<<<<<<< HEAD
  ChevronRight,;
  Home,;} from 'lucide-react';

import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import {
  Brain, Zap, Target, BarChart3, Users, TrendingUp,
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
  Database, Users2, Award, Lock, Server, Network,
  Monitor, Settings, RefreshCw, Play, Pause,
  AlertTriangle, CheckCircle2, Building, Wifi,
  HardDrive, Cloud, Smartphone, Blocks, Wallet,
  CreditCard, PiggyBank, Building2, Activity,
  Waves, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, FileText2, PieChart, Atom,
  Truck, ChevronRight, Home
} from 'lucide-react',
export default function ZionTechGroupPage() {
  return (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>
      <Head>
        <title>About Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems</title>
        <meta name="description" content="Discover Zion Tech Group's mission to revolutionize technology with quantum AI, autonomous systems, and cutting-edge platforms. Learn about our innovative solutions and global impact." />
        <meta name="keywords" content="Zion Tech Group, about us, quantum AI, autonomous systems, technology innovation, company mission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        {/* Navigation */}
        <nav className='bg-black/20 backdrop-blur-md border-b border-white/10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Link href='/' className='text-2xl font-bold text-white'>
                    Zion Tech Group
                  </Link>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        {/* Navigation */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
        {/* Navigation */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/zion-tech-group" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Breadcrumb */}
        <div className='bg-black/20 border-b border-white/10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
            <nav className='flex' aria-label='Breadcrumb'>
              <ol className='flex items-center space-x-4'>
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Breadcrumb */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <li>
                  <div>
                    <Link href="/" className="text-gray-300 hover:text-white">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="ml-4 text-sm font-medium text-white">About Zion Tech Group</span>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </li>
              </ol>
            </nav>
          </div>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Hero Section */}
        <div className='relative overflow-hidden py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>
                <span className='block'>About</span>
                <span className='block text-purple-400'>Zion Tech Group</span>
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="relative overflow-hidden py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">About</span>
                <span className="block text-purple-400">Zion Tech Group</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We are the architects of tomorrow, building revolutionary quantum AI solutions and autonomous systems that will define the next decade of innovation.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
        {/* Mission & Vision Section */}
        <div className='py-16 bg-black/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </div>
          </div>
        </div>

        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Mission & Vision Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To accelerate human progress through revolutionary quantum AI technology, autonomous systems, and cutting-edge platforms that solve humanity's greatest challenges.
                </p>
                <p className="text-gray-300">
                  We believe that technology should serve humanity, not replace it. Our solutions are designed to augment human capabilities, enhance decision-making, and create a more sustainable and prosperous future for all.
                </p>
<<<<<<< HEAD



<<<<<<< HEAD
              </div>
              <div>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <p className='text-gray-300'>
                  We believe that technology should serve humanity, not replace
                  it. Our solutions are designed to augment human capabilities
                  enhance decision-making, and create a more sustainable and
                  prosperous future for all.                </p>
              </div>
              <div>
<<<<<<< HEAD
=======

              </div>
              <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the global leader in quantum AI innovation, creating a world where artificial intelligence and human intelligence work in perfect harmony to solve complex problems.
                </p>
                <p className="text-gray-300">
                  We envision a future where our technology platforms enable breakthroughs in healthcare, climate change, space exploration, and countless other fields that will shape the destiny of our species.
                </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD

        {/* Core Values Section */}
        <div className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Our Core Values
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                These principles guide everything we do and shape the culture of
                our organization.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Brain className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Innovation First
                </h3>
                <p className='text-gray-300'>
                  We constantly push the boundaries of what's possible
                  embracing cutting-edge technologies and unconventional
                  thinking.
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-8 w-8 text-white' />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Core Values Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape the culture of our organization.
              </p>
            </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible, embracing cutting-edge technologies and unconventional thinking.
                </p>
              </div>
<<<<<<< HEAD
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-8 w-8 text-white' />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ethical Responsibility</h3>
                <p className="text-gray-300">
                  We develop technology with a deep commitment to ethical principles, ensuring our solutions benefit humanity and protect our future.
                </p>
              </div>
<<<<<<< HEAD
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-8 w-8 text-white' />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Human-Centric Design</h3>
                <p className="text-gray-300">
                  Every solution we create is designed with human needs at the center, ensuring technology serves people, not the other way around.
                </p>
              </div>
<<<<<<< HEAD
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Globe className='h-8 w-8 text-white' />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
                <p className="text-gray-300">
                  We think globally and act locally, creating solutions that can scale to benefit communities around the world.
                </p>
              </div>
<<<<<<< HEAD
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Award className='h-8 w-8 text-white' />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of quality in everything we do, from research and development to customer support.
                </p>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Future-Focused
                </h3>
                <p className='text-gray-300'>;
                  We don't just adapt to change; we anticipate it and create the
                  technologies that will define tomorrow.                </p>

=======

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Rocket className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Future-Focused
                </h3>
                <p className='text-gray-300'>;
                  We don't just adapt to change; we anticipate it and create the
                  technologies that will define tomorrow.                </p>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Future-Focused</h3>
                <p className="text-gray-300">
                  We don't just adapt to change, we anticipate it and create the technologies that will define tomorrow.
                </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Technology Stack Section */}
        <div className='py-16 bg-black/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Our Technology Stack
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                We leverage the most advanced technologies available to create
                revolutionary solutions.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Brain className='h-6 w-6 text-white' />
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Technology Stack Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the most advanced technologies available to create revolutionary solutions.
              </p>
            </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-300 text-sm">
                  Next-generation quantum processors and algorithms for unprecedented computational power.
                </p>
              </div>
<<<<<<< HEAD
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-white" />



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Cpu className='h-6 w-6 text-white' />
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-white" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Artificial Intelligence</h3>
                <p className="text-gray-300 text-sm">
                  Advanced machine learning, neural networks, and AI systems that learn and adapt.
                </p>
              </div>
<<<<<<< HEAD
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-white" />



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Server className='h-6 w-6 text-white' />
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-white" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm">
                  Scalable, secure cloud platforms built for the most demanding applications.
                </p>
              </div>
<<<<<<< HEAD
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-6 w-6 text-white' />
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">
                  Quantum-resistant encryption and AI-powered threat detection systems.
                </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* Company Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Company Statistics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our impact in numbers - showcasing the scale and reach of our technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Global Clients</div>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            </div>
          </div>
        </div>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* Team Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
            </div>
          </div>
        </div>
{/* Team Section */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts who are driving innovation at Zion Tech Group.
              </p>
            </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />



                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
                <p className="text-purple-400 mb-2">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Visionary leader with over a decade of experience in quantum computing and AI innovation.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-10 w-10 text-white" />



                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Sarah Chen</h3>
                <p className="text-purple-400 mb-2">Chief Technology Officer</p>
                <p className="text-gray-300 text-sm">
                  Quantum computing expert with PhD from MIT and 15+ years in advanced AI research.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />



                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Marcus Rodriguez</h3>
                <p className="text-purple-400 mb-2">Chief Security Officer</p>
                <p className="text-gray-300 text-sm">
                  Cybersecurity specialist with expertise in quantum-resistant encryption and threat detection.
                </p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
                    className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>                    Contact;
className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>                    Contact;
=======

                    className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>                    Contact;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </Link>;
                </div>;
              </div>;
            </div>;
          </div>;
        </nav>;
        {/* Breadcrumb */}
        <div className='bg-black/20 border-b border-white/10'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>;
            <nav className='flex' aria-label='Breadcrumb'>;
              <ol className='flex items-center space-x-4'>;
                <li>;
                  <div>;
                    <Link href='/' className='text-gray-300 hover:text-white'>;
                      <Home className='h-4 w-4' />;
                      <span className='sr-only'>Home</span>                    </Link>;
                  </div>;
                </li>;
                <li>;
                  <div className='flex items-center'>;
                    <ChevronRight className='h-4 w-4 text-gray-400' />;
                    <span className='ml-4 text-sm font-medium text-white'>;
                      About Zion Tech Group;
                    </span>                  </div>;
                </li>;
              </ol>;
            </nav>;
          </div>;
        </div>;
        {/* Hero Section */}
        <div className='relative overflow-hidden py-24'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center'>;
              <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>;
                <span className='block'>About</span>;
                <span className='block text-purple-400'>Zion Tech Group</span>;
              </h1>;
              <p className='mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>;
                We are the architects of tomorrow, building revolutionary;
                quantum AI solutions and autonomous systems that will define the;
                next decade of innovation.              </p>;
            </div>;
          </div>;
        </div>;
        {/* Mission & Vision Section */}
        <div className='py-16 bg-black/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>;
              <div>;
                <div className='w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6'>;
                  <Target className='h-8 w-8 text-white' />;
                </div>;
                <h2 className='text-3xl font-bold text-white mb-4'>;
                  Our Mission;
                </h2>;
                <p className='text-lg text-gray-300 mb-6'>;
                  To accelerate human progress through revolutionary quantum AI;
                  technology, autonomous systems, and cutting-edge platforms;
                  that solve humanity's greatest challenges.;
                </p>;
                <p className='text-gray-300'>;
                  We believe that technology should serve humanity, not replace;
                  it. Our solutions are designed to augment human capabilities,;
                  enhance decision-making, and create a more sustainable and;
                  prosperous future for all.                </p>;
              </div>;
              <div>;
                <div className='w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6'>;
                  <Eye className='h-8 w-8 text-white' />;
                </div>;
                <h2 className='text-3xl font-bold text-white mb-4'>;
                  Our Vision;
                </h2>;
                <p className='text-lg text-gray-300 mb-6'>;
                  To be the global leader in quantum AI innovation, creating a;
                  world where artificial intelligence and human intelligence;
                  work in perfect harmony to solve complex problems.;
                </p>;
                <p className='text-gray-300'>;
                  We envision a future where our technology platforms enable;
                  breakthroughs in healthcare, climate change, space;
                  exploration, and countless other fields that will shape the;
                  destiny of our species.                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Core Values Section */}
        <div className='py-16'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-12'>;
              <h2 className='text-3xl font-bold text-white mb-4'>;
                Our Core Values;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                These principles guide everything we do and shape the culture of;
                our organization.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Brain className='h-8 w-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Innovation First;
                </h3>;
                <p className='text-gray-300'>;
                  We constantly push the boundaries of what's possible,;
                  embracing cutting-edge technologies and unconventional;
                  thinking.;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Shield className='h-8 w-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Ethical Responsibility;
                </h3>;
                <p className='text-gray-300'>;
                  We develop technology with a deep commitment to ethical;
                  principles, ensuring our solutions benefit humanity and;
                  protect our future.;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Users className='h-8 w-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Human-Centric Design;
                </h3>;
                <p className='text-gray-300'>;
                  Every solution we create is designed with human needs at the;
                  center, ensuring technology serves people, not the other way;
                  around.;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Globe className='h-8 w-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Global Impact;
                </h3>;
                <p className='text-gray-300'>;
                  We think globally and act locally, creating solutions that can;
                  scale to benefit communities around the world.;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Award className='h-8 w-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Excellence;
                </h3>;
                <p className='text-gray-300'>;
                  We maintain the highest standards of quality in everything we;
                  do, from research and development to customer support.;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Rocket className='h-8 w-8 text-white' />;
                </div>;
                <h3 className='text-xl font-semibold text-white mb-2'>;
                  Future-Focused;
                </h3>;
                <p className='text-gray-300'>;
                  We don't just adapt to change; we anticipate it and create the;
                  technologies that will define tomorrow.                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Technology Stack Section */}
        <div className='py-16 bg-black/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-12'>;
              <h2 className='text-3xl font-bold text-white mb-4'>;
                Our Technology Stack;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                We leverage the most advanced technologies available to create;
                revolutionary solutions.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>;
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>;
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>;
                  <Brain className='h-6 w-6 text-white' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Quantum Computing;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Next-generation quantum processors and algorithms for;
                  unprecedented computational power.;
                </p>;
              </div>;
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>;
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>;
                  <Cpu className='h-6 w-6 text-white' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Artificial Intelligence;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Advanced machine learning, neural networks, and AI systems;
                  that learn and adapt.;
                </p>;
              </div>;
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>;
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>;
                  <Server className='h-6 w-6 text-white' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Cloud Infrastructure;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Scalable, secure cloud platforms built for the most demanding;
                  applications.;
                </p>;
              </div>;
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>;
                <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4'>;
                  <Shield className='h-6 w-6 text-white' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Cybersecurity;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Quantum-resistant encryption and AI-powered threat detection;
                  systems.                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Company Stats Section */}
        <div className='py-16'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-12'>;
              <h2 className='text-3xl font-bold text-white mb-4'>;
                Company Statistics;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Our impact in numbers - showcasing the scale and reach of our;
                technology solutions.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>;
              <div className='text-center'>;
                <div className='text-4xl font-bold text-purple-400 mb-2'>;
                  500+;
                </div>;
                <div className='text-gray-300'>Global Clients</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-4xl font-bold text-purple-400 mb-2'>;
                  99 && 99.9%;
                </div>;
                <div className='text-gray-300'>Uptime Guarantee</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-4xl font-bold text-purple-400 mb-2'>;
                  24/7;
                </div>;
                <div className='text-gray-300'>Support Available</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-4xl font-bold text-purple-400 mb-2'>;
                  10+;
                </div>;
                <div className='text-gray-300'>Years Experience</div>              </div>;
            </div>;
          </div>;
        </div>;
        {/* Team Section */}
        <div className='py-16 bg-black/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-12'>;
              <h2 className='text-3xl font-bold text-white mb-4'>;
                Our Leadership Team;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                <div className='ml - 10 flex items - baseline space - x-4'>;
                  <Link;
                    href='/';
                    className='text - gray - 300 hover:text - white px - 3 py - 2 rounded - md text - sm font - medium';
                  >;
                    Home;
                  </Link>;
                  <Link;
                    href='/zion - tech - group';
                    className='text - white hover:text - purple - 300 px - 3 py - 2 rounded - md text - sm font - medium';
                  >;
                    About;
                  </Link>;
                  <Link;
                    href='/contact';
                    className='text - gray - 300 hover:text - white px - 3 py - 2 rounded - md text - sm font - medium';
                  >                    Contact;
                  </Link>;
                </div>;
              </div>;
            </div>;
          </div>;
        </nav>;
        {/* Breadcrumb */}
        <div className='bg - black / 20 border - b border - white / 10'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 4'>;
            <nav className='flex' aria - label='Breadcrumb'>;
              <ol className='flex items - center space - x-4'>;
                <li>;
                  <div>;
                    <Link href='/' className='text - gray - 300 hover:text - white'>;
                      <Home className='h - 4 w - 4' />;
                      <span className='sr - only'>Home</span>                    </Link>;
                  </div>;
                </li>;
                <li>;
                  <div className='flex items - center'>;
                    <ChevronRight className='h - 4 w - 4 text - gray - 400' />;
                    <span className='ml - 4 text - sm font - medium text - white'>;
                      About Zion Tech Group;
                    </span>                  </div>;
                </li>;
              </ol>;
            </nav>;
          </div>;
        </div>;
        {/* Hero Section */}
        <div className='relative overflow - hidden py - 24'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center'>;
              <h1 className='text - 4xl tracking - tight font - extrabold text - white sm:text - 5xl md:text - 6xl'>;
                <span className='block'>About</span>;
                <span className='block text - purple - 400'>Zion Tech Group</span>;
              </h1>;
              <p className='mt - 3 max - w-md mx - auto text - base text - gray - 300 sm:text - lg md:mt - 5 md:text - xl md:max - w-3xl'>;
                We are the architects of tomorrow, building revolutionary;
                quantum AI solutions and autonomous systems that will define the;
                next decade of innovation.              </p>;
            </div>;
          </div>;
        </div>;
        {/* Mission & Vision Section */}
        <div className='py - 16 bg - black / 20'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 12'>;
              <div>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - lg flex items - center justify - center mb - 6'>;
                  <Target className='h - 8 w - 8 text - white' />;
                </div>;
                <h2 className='text - 3xl font - bold text - white mb - 4'>;
                  Our Mission;
                </h2>;
                <p className='text - lg text - gray - 300 mb - 6'>;
                  To accelerate human progress through revolutionary quantum AI;
                  technology, autonomous systems, and cutting - edge platforms;
                  that solve humanity's greatest challenges.;
                </p>;
                <p className='text - gray - 300'>;
                  We believe that technology should serve humanity, not replace;
                  it. Our solutions are designed to augment human capabilities,
                  enhance decision - making, and create a more sustainable and;
                  prosperous future for all.                </p>;
              </div>;
              <div>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - lg flex items - center justify - center mb - 6'>;
                  <Eye className='h - 8 w - 8 text - white' />;
                </div>;
                <h2 className='text - 3xl font - bold text - white mb - 4'>;
                  Our Vision;
                </h2>;
                <p className='text - lg text - gray - 300 mb - 6'>;
                  To be the global leader in quantum AI innovation, creating a;
                  world where artificial intelligence and human intelligence;
                  work in perfect harmony to solve complex problems.;
                </p>;
                <p className='text - gray - 300'>;
                  We envision a future where our technology platforms enable;
                  breakthroughs in healthcare, climate change, space;
                  exploration, and countless other fields that will shape the;
                  destiny of our species.                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Core Values Section */}
        <div className='py - 16'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - 3xl font - bold text - white mb - 4'>;
                Our Core Values;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                These principles guide everything we do and shape the culture of;
                our organization.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Brain className='h - 8 w - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Innovation First;
                </h3>;
                <p className='text - gray - 300'>;
                  We constantly push the boundaries of what's possible,
                  embracing cutting - edge technologies and unconventional;
                  thinking.;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Shield className='h - 8 w - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Ethical Responsibility;
                </h3>;
                <p className='text - gray - 300'>;
                  We develop technology with a deep commitment to ethical;
                  principles, ensuring our solutions benefit humanity and;
                  protect our future.;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Users className='h - 8 w - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Human - Centric Design;
                </h3>;
                <p className='text - gray - 300'>;
                  Every solution we create is designed with human needs at the;
                  center, ensuring technology serves people, not the other way;
                  around.;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Globe className='h - 8 w - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Global Impact;
                </h3>;
                <p className='text - gray - 300'>;
                  We think globally and act locally, creating solutions that can;
                  scale to benefit communities around the world.;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Award className='h - 8 w - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Excellence;
                </h3>;
                <p className='text - gray - 300'>;
                  We maintain the highest standards of quality in everything we;
                  do, from research and development to customer support.;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Rocket className='h - 8 w - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Future - Focused;
                </h3>;
                <p className='text - gray - 300'>;
                  We don't just adapt to change; we anticipate it and create the;
                  technologies that will define tomorrow.                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Technology Stack Section */}
        <div className='py - 16 bg - black / 20'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - 3xl font - bold text - white mb - 4'>;
                Our Technology Stack;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                We leverage the most advanced technologies available to create;
                revolutionary solutions.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'>;
              <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 6 border border - white / 10 text - center'>;
                <div className='w - 12 h - 12 bg - purple - 600 rounded - lg flex items - center justify - center mx - auto mb - 4'>;
                  <Brain className='h - 6 w - 6 text - white' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Quantum Computing;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Next - generation quantum processors and algorithms for;
                  unprecedented computational power.;
                </p>;
              </div>;
              <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 6 border border - white / 10 text - center'>;
                <div className='w - 12 h - 12 bg - purple - 600 rounded - lg flex items - center justify - center mx - auto mb - 4'>;
                  <Cpu className='h - 6 w - 6 text - white' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Artificial Intelligence;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Advanced machine learning, neural networks, and AI systems;
                  that learn and adapt.;
                </p>;
              </div>;
              <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 6 border border - white / 10 text - center'>;
                <div className='w - 12 h - 12 bg - purple - 600 rounded - lg flex items - center justify - center mx - auto mb - 4'>;
                  <Server className='h - 6 w - 6 text - white' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Cloud Infrastructure;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Scalable, secure cloud platforms built for the most demanding;
                  applications.;
                </p>;
              </div>;
              <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 6 border border - white / 10 text - center'>;
                <div className='w - 12 h - 12 bg - purple - 600 rounded - lg flex items - center justify - center mx - auto mb - 4'>;
                  <Shield className='h - 6 w - 6 text - white' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Cybersecurity;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Quantum - resistant encryption and AI - powered threat detection;
                  systems.                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Company Stats Section */}
        <div className='py - 16'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - 3xl font - bold text - white mb - 4'>;
                Company Statistics;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Our impact in numbers - showcasing the scale and reach of our;
                technology solutions.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
              <div className='text - center'>;
                <div className='text - 4xl font - bold text - purple - 400 mb - 2'>;
                  500+;
                </div>;
                <div className='text - gray - 300'>Global Clients</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 4xl font - bold text - purple - 400 mb - 2'>;
                  99.9%;
                </div>;
                <div className='text - gray - 300'>Uptime Guarantee</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 4xl font - bold text - purple - 400 mb - 2'>;
                  24 / 7;
                </div>;
                <div className='text - gray - 300'>Support Available</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 4xl font - bold text - purple - 400 mb - 2'>;
                  10+;
                </div>;
                <div className='text - gray - 300'>Years Experience</div>              </div>;
            </div>;
          </div>;
        </div>;
        {/* Team Section */}
        <div className='py - 16 bg - black / 20'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 12'>;
              <h2 className='text - 3xl font - bold text - white mb - 4'>;
                Our Leadership Team;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Meet the visionaries and experts who are driving innovation at;
                Zion Tech Group.;
              </p>;
            </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
              <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 6 border border - white / 10 text - center'>;
                <div className='w - 20 h - 20 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <User className='h - 10 w - 10 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Kleber;
                </h3>;
                <p className='text - purple - 400 mb - 2'>CEO & Founder</p>;
                <p className='text - gray - 300 text - sm'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Visionary leader with over a decade of experience in quantum;
                  computing and AI innovation.;
                </p>;
              </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 6 border border - white / 10 text - center'>;
                <div className='w - 20 h - 20 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Brain className='h - 10 w - 10 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Dr. Sarah Chen;
                </h3>;
                <p className='text - purple - 400 mb - 2'>Chief Technology Officer</p>;
                <p className='text - gray - 300 text - sm'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Quantum computing expert with PhD from MIT and 15+ years in;
                  advanced AI research.;
                </p>;
              </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 6 border border - white / 10 text - center'>;
                <div className='w - 20 h - 20 bg - purple - 600 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Shield className='h - 10 w - 10 text - white' />;
                </div>;
                <h3 className='text - xl font - semibold text - white mb - 2'>;
                  Marcus Rodriguez;
                </h3>;
                <p className='text - purple - 400 mb - 2'>Chief Security Officer</p>;
                <p className='text - gray - 300 text - sm'>;
                  Cybersecurity specialist with expertise in quantum - resistant;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  encryption and threat detection.                </p>;
              </div>;
            </div>;
          </div>;
        </div>;

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Company Stats Section */}
        <div className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Company Statistics
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Our impact in numbers - showcasing the scale and reach of our
                technology solutions.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-purple-400 mb-2'>
                  500+
                </div>
                <div className='text-gray-300'>Global Clients</div>
        {/* Company Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Company Statistics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our impact in numbers - showcasing the scale and reach of our technology solutions.
              </p>
            </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Global Clients</div>
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className='py-16 bg-black/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Our Leadership Team
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Meet the visionaries and experts who are driving innovation at
                Zion Tech Group.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>
                <div className='w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <User className='h-10 w-10 text-white' />
        {/* Team Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts who are driving innovation at Zion Tech Group.
              </p>
            </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
                <p className="text-purple-400 mb-2">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Visionary leader with over a decade of experience in quantum computing and AI innovation.
                </p>
              </div>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>
                <div className='w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Brain className='h-10 w-10 text-white' />
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-10 w-10 text-white" />
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Sarah Chen</h3>
                <p className="text-purple-400 mb-2">Chief Technology Officer</p>
                <p className="text-gray-300 text-sm">
                  Quantum computing expert with PhD from MIT and 15+ years in advanced AI research.
                </p>
              </div>
              <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'>
                <div className='w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-10 w-10 text-white' />
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Marcus Rodriguez</h3>
                <p className="text-purple-400 mb-2">Chief Security Officer</p>
                <p className="text-gray-300 text-sm">
                  Cybersecurity specialist with expertise in quantum-resistant encryption and threat detection.
                </p>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className='bg-purple-600'>
          <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
              <span className='block'>Ready to Join the Future?</span>
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="bg-purple-600">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to Join the Future?</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-100">
              Discover how Zion Tech Group can transform your business with revolutionary technology solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700">
                Schedule Consultation
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                className='inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700'>                Schedule Consultation;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                className='inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700'>                Schedule Consultation;
=======
        {/* CTA Section */}
        <div className='bg - purple - 600'>;
          <div className='max - w-2xl mx - auto text - center py - 16 px - 4 sm:py - 20 sm:px - 6 lg:px - 8'>;
            <h2 className='text - 3xl font - extrabold text - white sm:text - 4xl'>;
              <span className='block'>Ready to Join the Future?</span>;
            </h2>;
            <p className='mt - 4 text - lg leading - 6 text - purple - 100'>;
              Discover how Zion Tech Group can transform your business with;
              revolutionary technology solutions.;
            </p>;
            <div className='mt - 8 flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;
                href='/contact';
                className='inline - flex items - center px - 6 py - 3 border border - transparent text - base font - medium rounded - md text - purple - 600 bg - white hover:bg - gray - 50';
              >;
                Get Started Today;
                <ArrowRight className='ml - 2 h - 4 w - 4' />;
              </Link>;
              <Link;
                href='/contact';
                className='inline - flex items - center px - 6 py - 3 border border - white text - base font - medium rounded - md text - white hover:bg - purple - 700';
              >                Schedule Consultation;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Link>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Footer */}
        <footer className='bg - black / 40'>;
          <div className='max - w-7xl mx - auto py - 12 px - 4 sm: px - 6 lg:py - 16 lg:px - 8'>;
            <div className='xl:grid xl:grid - cols - 3 xl:gap - 8'>;
              <div className='space - y-8 xl:col - span - 1'>;
                <h3 className='text - 2xl font - bold text - white'>;
                  Zion Tech Group;
                </h3>;
                <p className='text - gray - 300 text - base'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Leading the future with revolutionary quantum AI solutions and;
                  autonomous systems.;
                </p>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='mt - 12 grid grid - cols - 2 gap - 8 xl:mt - 0 xl:col - span - 2'>;
                <div className='md:grid md:grid - cols - 2 md:gap - 8'>;
                  <div>;
                    <h3 className='text - sm font - semibold text - gray - 400 tracking - wider uppercase'>;
                      Solutions;
                    </h3>;
                    <ul className='mt - 4 space - y-4'>;
                      <li>;
                        <Link;
                          href='/zion - tech - group';
                          className='text - base text - gray - 300 hover:text - white';
                        >                          Quantum AI;
                        </Link>;
                      </li>;
                      <li>;
                        <Link;
                          href='/zion - tech - group';
                          className='text - base text - gray - 300 hover:text - white';
                        >                          Autonomous Systems;
                        </Link>;
                      </li>;
                      <li>;
                        <Link;
                          href='/zion - tech - group';
                          className='text - base text - gray - 300 hover:text - white';
                        >                          Technology Platforms;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </Link>;
                      </li>;
                    </ul>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Footer */}
        <footer className='bg-black/40'>
          <div className='max-w-7xl mx-auto py-12 px-4 sm: px-6 lg:py-16 lg:px-8'>
            <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
              <div className='space-y-8 xl:col-span-1'>
                <h3 className='text-2xl font-bold text-white'>
                  Zion Tech Group
                </h3>
                <p className='text-gray-300 text-base'>
                  Leading the future with revolutionary quantum AI solutions and
                  autonomous systems.
        {/* Footer */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <footer className="bg-black/40">
          <div className="max-w-7xl mx-auto py-12 px-4 sm: px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-300 text-base">
                  Leading the future with revolutionary quantum AI solutions and autonomous systems.
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Quantum AI
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Autonomous Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Technology Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                          Contact
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy, 2025 Zion Tech Group. All rights reserved.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </footer>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
                          className='text-base text-gray-300 hover:text-white'>                          Contact;
  );

}
=======

                          className='text-base text-gray-300 hover:text-white'>                          Contact;
=======
                  <div className='mt - 12 md:mt - 0'>;
                    <h3 className='text - sm font - semibold text - gray - 400 tracking - wider uppercase'>;
                      Company;
                    </h3>;
                    <ul className='mt - 4 space - y-4'>;
                      <li>;
                        <Link;
                          href='/zion - tech - group';
                          className='text - base text - gray - 300 hover:text - white';
                        >                          About;
                        </Link>;
                      </li>;
                      <li>;
                        <Link;
                          href='/contact';
                          className='text - base text - gray - 300 hover:text - white';
                        >                          Contact;

}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {;
  Brain, Zap, Target, BarChart3, Users, TrendingUp,;
  MessageSquare, Mail, Phone, MapPin, ArrowRight,;
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,;
  FileText, Image, Video, Music, Palette, Type,;
  User, Search, Eye, Heart, ShoppingCart, Code,;
  Database, Users2, Award, Lock, Server, Network,;
  Monitor, Settings, RefreshCw, Play, Pause,;
  AlertTriangle, CheckCircle2, Building, Wifi,;
  HardDrive, Cloud, Smartphone, Blocks, Wallet,;
  CreditCard, PiggyBank, Building2, Activity,;
  Waves, BrainCircuit, CpuIcon, MonitorHeart,;
  Film, Headphones, Camera, Gamepad2, Tv, Radio,;
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,;
  Calendar, Clock, FileText2, PieChart, Atom,;
  Truck, ChevronRight, Home;
} from 'lucide-react';
export default function ZionTechGroupPage(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <title>About Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems</title>;
        <meta name="description" content="Discover Zion Tech Group's mission to revolutionize technology with quantum AI, autonomous systems, and cutting-edge platforms. Learn about our innovative solutions and global impact." />;
        <meta name="keywords" content="Zion Tech Group, about us, quantum AI, autonomous systems, technology innovation, company mission" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon.ico" />;
      </Head>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        {/* Navigation */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="flex justify-between items-center h-16">;
              <div className="flex items-center">;
                <div className="flex-shrink-0">;
                  <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>;
                </div>;
              </div>;
              <div className="hidden md:block">;
                <div className="ml-10 flex items-baseline space-x-4">;
                  <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">;
                    Home;
                  </Link>;
                  <Link href="/zion-tech-group" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">;
                    About;
                  </Link>;
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">;
                    Contact;
                  </Link>;
                </div>;
              </div>;
            </div>;
          </div>;
        </nav>;
        {/* Breadcrumb */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="bg-black/20 border-b border-white/10">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">;
            <nav className="flex" aria-label="Breadcrumb">;
              <ol className="flex items-center space-x-4">;
                <li>;
                  <div>;
                    <Link href="/" className="text-gray-300 hover:text-white">;
                      <Home className="h-4 w-4" />;
                      <span className="sr-only">Home</span>;
                    </Link>;
                  </div>;
                </li>;
                <li>;
                  <div className="flex items-center">;
                    <ChevronRight className="h-4 w-4 text-gray-400" />;
                    <span className="ml-4 text-sm font-medium text-white">About Zion Tech Group</span>;
                  </div>;
                </li>;
              </ol>;
            </nav>;
          </div>;
        </div>;
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="relative overflow-hidden py-24">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">;
                <span className="block">About</span>;
                <span className="block text-purple-400">Zion Tech Group</span>;
              </h1>;
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">;
                We are the architects of tomorrow, building revolutionary quantum AI solutions and autonomous systems that will define the next decade of innovation.;
              </p>;
            </div>;
          </div>;
        </div>;
        {/* Mission & Vision Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="py-16 bg-black/20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
              <div>;
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">;
                  <Target className="h-8 w-8 text-white" />;
                </div>;
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>;
                <p className="text-lg text-gray-300 mb-6">;
                  To accelerate human progress through revolutionary quantum AI technology, autonomous systems, and cutting-edge platforms that solve humanity's greatest challenges.;
                </p>;
                <p className="text-gray-300">;
                  We believe that technology should serve humanity, not replace it. Our solutions are designed to augment human capabilities, enhance decision-making, and create a more sustainable and prosperous future for all.;
                </p>;
              </div>;
              <div>;
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">;
                  <Eye className="h-8 w-8 text-white" />;
                </div>;
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>;
                <p className="text-lg text-gray-300 mb-6">;
                  To be the global leader in quantum AI innovation, creating a world where artificial intelligence and human intelligence work in perfect harmony to solve complex problems.;
                </p>;
                <p className="text-gray-300">;
                  We envision a future where our technology platforms enable breakthroughs in healthcare, climate change, space exploration, and countless other fields that will shape the destiny of our species.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Core Values Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="py-16">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                These principles guide everything we do and shape the culture of our organization.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Brain className="h-8 w-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>;
                <p className="text-gray-300">;
                  We constantly push the boundaries of what's possible, embracing cutting-edge technologies and unconventional thinking.;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Shield className="h-8 w-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Ethical Responsibility</h3>;
                <p className="text-gray-300">;
                  We develop technology with a deep commitment to ethical principles, ensuring our solutions benefit humanity and protect our future.;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Users className="h-8 w-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Human-Centric Design</h3>;
                <p className="text-gray-300">;
                  Every solution we create is designed with human needs at the center, ensuring technology serves people, not the other way around.;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Globe className="h-8 w-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>;
                <p className="text-gray-300">;
                  We think globally and act locally, creating solutions that can scale to benefit communities around the world.;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Award className="h-8 w-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>;
                <p className="text-gray-300">;
                  We maintain the highest standards of quality in everything we do, from research and development to customer support.;
                </p>;
              </div>;
              <div className="text-center">;
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Rocket className="h-8 w-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Future-Focused</h3>;
                <p className="text-gray-300">;
                  We don't just adapt to change, we anticipate it and create the technologies that will define tomorrow.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Technology Stack Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="py-16 bg-black/20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We leverage the most advanced technologies available to create revolutionary solutions.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">;
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Brain className="h-6 w-6 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>;
                <p className="text-gray-300 text-sm">;
                  Next-generation quantum processors and algorithms for unprecedented computational power.;
                </p>;
              </div>;
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">;
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Cpu className="h-6 w-6 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Artificial Intelligence</h3>;
                <p className="text-gray-300 text-sm">;
                  Advanced machine learning, neural networks, and AI systems that learn and adapt.;
                </p>;
              </div>;
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">;
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Server className="h-6 w-6 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>;
                <p className="text-gray-300 text-sm">;
                  Scalable, secure cloud platforms built for the most demanding applications.;
                </p>;
              </div>;
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">;
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Shield className="h-6 w-6 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>;
                <p className="text-gray-300 text-sm">;
                  Quantum-resistant encryption and AI-powered threat detection systems.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Company Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="py-16">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-white mb-4">Company Statistics</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our impact in numbers - showcasing the scale and reach of our technology solutions.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              <div className="text-center">;
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>;
                <div className="text-gray-300">Global Clients</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>;
                <div className="text-gray-300">Uptime Guarantee</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>;
                <div className="text-gray-300">Support Available</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>;
                <div className="text-gray-300">Years Experience</div>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Team Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="py-16 bg-black/20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Meet the visionaries and experts who are driving innovation at Zion Tech Group.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">;
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <User className="h-10 w-10 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>;
                <p className="text-purple-400 mb-2">CEO & Founder</p>;
                <p className="text-gray-300 text-sm">;
                  Visionary leader with over a decade of experience in quantum computing and AI innovation.;
                </p>;
              </div>;
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">;
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Brain className="h-10 w-10 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Sarah Chen</h3>;
                <p className="text-purple-400 mb-2">Chief Technology Officer</p>;
                <p className="text-gray-300 text-sm">;
                  Quantum computing expert with PhD from MIT and 15+ years in advanced AI research.;
                </p>;
              </div>;
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">;
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Shield className="h-10 w-10 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">Marcus Rodriguez</h3>;
                <p className="text-purple-400 mb-2">Chief Security Officer</p>;
                <p className="text-gray-300 text-sm">;
                  Cybersecurity specialist with expertise in quantum-resistant encryption and threat detection.;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="bg-purple-600">;
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">;
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">;
              <span className="block">Ready to Join the Future?</span>;
            </h2>;
            <p className="mt-4 text-lg leading-6 text-purple-100">;
              Discover how Zion Tech Group can transform your business with revolutionary technology solutions.;
            </p>;
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">;
                Get Started Today;
                <ArrowRight className="ml-2 h-4 w-4" />;
              </Link>;
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700">;
                Schedule Consultation;
              </Link>;
            </div>;
          </div>;
        </div>;
        {/* Footer */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <footer className="bg-black/40">;
          <div className="max-w-7xl mx-auto py-12 px-4 sm: px-6 lg:py-16 lg:px-8">;
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">;
              <div className="space-y-8 xl:col-span-1">;
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>;
                <p className="text-gray-300 text-base">;
                  Leading the future with revolutionary quantum AI solutions and autonomous systems.;
                </p>;
              </div>;
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">;
                <div className="md:grid md:grid-cols-2 md:gap-8">;
                  <div>;
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>;
                    <ul className="mt-4 space-y-4">;
                      <li>;
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">;
                          Quantum AI;
                        </Link>;
                      </li>;
                      <li>;
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">;
                          Autonomous Systems;
                        </Link>;
                      </li>;
                      <li>;
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">;
                          Technology Platforms;
                        </Link>;
                      </li>;
                    </ul>;
                  </div>;
                  <div className="mt-12 md:mt-0">;
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>;
                    <ul className="mt-4 space-y-4">;
                      <li>;
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">;
                          About;
                        </Link>;
                      </li>;
                      <li>;
                        <Link href="/contact" className="text-base text-gray-300 hover:text-white">;
                          Contact;
<<<<<<< HEAD
=======

                          className='text-base text-gray-300 hover:text-white'>                          Contact;
=======
                  <div className='mt - 12 md:mt - 0'>;
                    <h3 className='text - sm font - semibold text - gray - 400 tracking - wider uppercase'>;
                      Company;
                    </h3>;
                    <ul className='mt - 4 space - y-4'>;
                      <li>;
                        <Link;
                          href='/zion - tech - group';
                          className='text - base text - gray - 300 hover:text - white';
                        >                          About;
                        </Link>;
                      </li>;
                      <li>;
                        <Link;
                          href='/contact';
                          className='text - base text - gray - 300 hover:text - white';
                        >                          Contact;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </Link>;
                      </li>;
                    </ul>;
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                &copy; 2025 Zion Tech Group. All rights reserved.              </p>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="mt-12 border-t border-gray-700 pt-8">;
              <p className="text-base text-gray-400 xl:text-center">;
                &copy, 2025 Zion Tech Group. All rights reserved.;
              </p>;
=======


                &copy; 2025 Zion Tech Group. All rights reserved.              </p>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </footer>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </>);
;
    </>;
  );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
    </>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
