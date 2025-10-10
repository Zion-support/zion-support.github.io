'use client';
import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {;
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,;
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock,;
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText,;
  Mail, Phone, DollarSign, Clock, Award, CheckCircle,;
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart,;
  CreditCard, Building, Factory, Car, Plane, Ship, Train,;
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench,;
  Hammer, Paintbrush, Scissors, BookOpen, Calculator,;
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning,;
  Target as Crosshair, Shield as Security, Users as People,;
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow,;
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,;
  Eye, Search, MessageSquare, PieChart as Chart,;
  Download, Upload, RefreshCw, Play, Pause, Stop,;
  Volume2, VolumeX, Mic, MicOff, Headphones,;
  Wifi, WifiOff, Battery, BatteryCharging,;
  Sun, Moon, Sunrise, Sunset, CloudRain,;
  Snowflake, Wind, Thermometer, Droplets,;
  Lightbulb, LightbulbOff, Power, PowerOff,;
  Wrench as Tool, Hammer as HammerIcon,;
  Paintbrush as Brush, Scissors as ScissorIcon,;
  BookOpen as Book, Calculator as Calc,;
  Compass as CompassIcon, PieChart as PieChartIcon,;
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon,;
  Grid3X3, Package, Utensils, Microscope,;
  Atom, Cpu as CpuIcon, Database as DatabaseIcon,;
  Network, Layers, Workflow, GitBranch,;
  Zap as ZapIcon, Brain as BrainIcon, Eye as EyeIcon,;
  Search as SearchIcon, MessageSquare as MessageSquareIcon,;
  PieChart as PieChartIcon2, BarChart as BarChartIcon,;
  TrendingUp as TrendingUpIcon, Activity as ActivityIcon2,;
  Target as TargetIcon, Globe as GlobeIcon,;
  Shield as ShieldIcon, Lock as LockIcon,;
  Users as UsersIcon, Settings as SettingsIcon,;
  Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,;
  FileText as FileTextIcon, Mail as MailIcon2,;
  Phone as PhoneIcon2, DollarSign as DollarSignIcon,;
  Clock as ClockIcon, Award as AwardIcon,;
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon,;
  Bot as BotIcon, Palette as PaletteIcon,;
  Camera as CameraIcon, Music as MusicIcon,;
  Video as VideoIcon, Gamepad2 as Gamepad2Icon,;
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,;
  Building as BuildingIcon, Factory as FactoryIcon,;
  Car as CarIcon, Plane as PlaneIcon,;
  Ship as ShipIcon, Train as TrainIcon,;
  Home as HomeIcon, Heart as HeartIcon,;
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,;
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,;
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,;
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,;
  Calculator as CalculatorIcon, Compass as CompassIcon2,;
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,;
  Activity as ActivityIcon3, Zap as ZapIcon2,;
  Target as TargetIcon2, Shield as ShieldIcon2,;
  Users as UsersIcon2, Star as StarIcon2,;
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,;
  Phone as PhoneIcon3, Mail as MailIcon3,;
  MapPin as LocationIcon, Server, HardDrive,;
  Monitor, Printer, Router, Wifi as WifiIcon,;
  Smartphone as SmartphoneIcon, Laptop,;
  Tablet, Headphones as HeadphonesIcon,;
  Keyboard, Mouse, Webcam, Speaker,;
  HardDrive as HardDriveIcon, Server as ServerIcon,;
  Monitor as MonitorIcon, Printer as PrinterIcon,;
  Router as RouterIcon, Wifi as WifiIcon2,;
  Smartphone as SmartphoneIcon2, Laptop as LaptopIcon,;
  Tablet as TabletIcon, Headphones as HeadphonesIcon2,;
  Keyboard as KeyboardIcon, Mouse as MouseIcon,;
  Webcam as WebcamIcon, Speaker as SpeakerIcon;}
} from 'lucide-react';
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;}
  });
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <div className="flex flex-col lg:flex-row gap-6 mb-8"></div>;
            {/* Search */}</div>;
            <div className="flex-1"></div>;
              <div className="relative"></div>;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search IT services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
            {/* Category Filter */}
            <div className="lg:w-64"></div>;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                    {category.name}
                  </option>;
                ))}
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8"></div>;
            {categories.map((category) => (</div>;
              <button;}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category.id;
                    ? 'bg-cyan-500 text-white';
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400';}
                }`}
              >;
                {category.name}
              </button>;
            ))}
