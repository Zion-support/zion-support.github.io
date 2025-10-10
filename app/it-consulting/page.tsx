'use client'
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom'
import {
    Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock,
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText,
  Mail, Phone, DollarSign, Clock, Award, CheckCircle,
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart,
  CreditCard, Building, Factory, Car, Plane, Ship, Train,
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench,
  Hammer, Paintbrush, Scissors, BookOpen, Calculator,
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning,
  Target as Crosshair, Shield as Security, Users as People,
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Eye, Search, MessageSquare, PieChart as Chart,
  Download, Upload, RefreshCw, Play, Pause, Stop,
  Volume2, VolumeX, Mic, MicOff, Headphones,
  Wifi, WifiOff, Battery, BatteryCharging,
  Sun, Moon, Sunrise, Sunset, CloudRain,
  Snowflake, Wind, Thermometer, Droplets,
  Lightbulb, LightbulbOff, Power, PowerOff,
  Wrench as Tool, Hammer as HammerIcon,
  Paintbrush as Brush, Scissors as ScissorIcon,
  BookOpen as Book, Calculator as Calc,
  Compass as CompassIcon, PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon,
  Grid3X3, Package, Utensils, Microscope,
  Atom, Cpu as CpuIcon, Database as DatabaseIcon,
  Network, Layers, Workflow, GitBranch,
  Zap as ZapIcon, Brain as BrainIcon, Eye as EyeIcon,
  Search as SearchIcon, MessageSquare as MessageSquareIcon,
  PieChart as PieChartIcon2, BarChart as BarChartIcon,
  TrendingUp as TrendingUpIcon, Activity as ActivityIcon2,
  Target as TargetIcon, Globe as GlobeIcon,
  Shield as ShieldIcon, Lock as LockIcon,
  Users as UsersIcon, Settings as SettingsIcon,
  Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,
  FileText as FileTextIcon, Mail as MailIcon2,
  Phone as PhoneIcon2, DollarSign as DollarSignIcon,
  Clock as ClockIcon, Award as AwardIcon,
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon,
  Bot as BotIcon, Palette as PaletteIcon,
  Camera as CameraIcon, Music as MusicIcon,
  Video as VideoIcon, Gamepad2 as Gamepad2Icon,
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,
  Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon,
  Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon,
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon, Compass as CompassIcon2,
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,
  Activity as ActivityIcon3, Zap as ZapIcon2,
  Target as TargetIcon2, Shield as ShieldIcon2,
  Users as UsersIcon2, Star as StarIcon2,
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,
  Phone as PhoneIcon3, Mail as MailIcon3,
  MapPin as LocationIcon, Server, HardDrive,
  Monitor, Printer, Router, Wifi as WifiIcon,
  Smartphone as SmartphoneIcon, Laptop,
  Tablet, Headphones as HeadphonesIcon,
  Keyboard, Mouse, Webcam, Speaker,
  HardDrive as HardDriveIcon, Server as ServerIcon,
  Monitor as MonitorIcon, Printer as PrinterIcon,
  Router as RouterIcon, Wifi as WifiIcon2,
  Smartphone as SmartphoneIcon2, Laptop as LaptopIcon,
  Tablet as TabletIcon, Headphones as HeadphonesIcon2,
  Keyboard as KeyboardIcon, Mouse as MouseIcon,
  Webcam as WebcamIcon, Speaker as SpeakerIcon
  }
} from 'lucide-react'
const ITConsultingPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
const [searchTerm, setSearchTerm] = useState('')
const itServices = [
    // IT Infrastructure Services
    {
      id: 'it-infrastructure-design',
      name: 'IT Infrastructure Design & Implementation',
      description: 'Complete IT infrastructure design, deployment, and optimization for modern businesses',
      category: 'infrastructure',
      icon: Server,
      price: 'Starting at $5,000',;
      features: [,
        'Network architecture design',
        'Server deployment and configuration',
        'Storage solutions implementation',
        'Backup and disaster recovery setup',

        'Security infrastructure deployment',

        'Monitoring and management tools',

        'Documentation and training',


        'Improved system performance',

        'Enhanced security posture',

        'Reduced downtime and outages',


        'Cost optimization analysis',

        'Performance tuning',

        'Disaster recovery setup',


        'Improve scalability and flexibility',

        'Enhanced security and compliance',

        'Better disaster recovery capabilities',


        'Email security implementation',

        'Security awareness training',

        'Compliance auditing',


        'Ensure regulatory compliance',

        'Reduce security risks by 90%',

        'Improve incident response time',


        'Network monitoring implementation',

        'Traffic analysis and optimization',

        'Redundancy and failover setup',


        'Reduce network downtime',

        'Optimize bandwidth usage',

        'Enhance user experience',


        'Monitoring and alerting',

        'Query optimization',

        'Capacity planning',


        'Ensure data integrity and security',

        'Reduce maintenance overhead',

        'Optimize storage usage',


        'Hardware support and replacement',

        'User training and onboarding',

        'IT asset management',


        'Lower IT support costs',

        'Improve user productivity',

        'Proactive issue resolution',


        'Database design and implementation',

        'Testing and quality assurance',

        'Deployment and maintenance',


        'Improve operational efficiency',

        'Gain competitive advantage',

        'Reduce manual work',


        'Cost-benefit analysis',

        'Risk assessment and mitigation',

        'Change management planning',


        'Optimize technology investments',

        'Reduce implementation risks',

        'Accelerate digital transformation',


        'Business continuity planning',

        'Cloud-based recovery solutions',

        'Documentation and procedures',


        'Ensure rapid recovery',

        'Protect critical data',

        'Maintain customer service',


        'Training and awareness programs',

        'Ongoing compliance monitoring',

        'Documentation and reporting',


        'Reduce audit findings',

        'Improve security posture',

        'Avoid penalties and fines',

  ),
};

export default ITConsultingPage;
