'use client';
import React, { lazy } from 'react';
import { Brain, Cpu, Shield, Cloud, Zap, Code, Settings, BarChart, MessageSquare, Eye, Bot, Palette, Music, Video, Heart, Briefcase, Wrench, Navigation as NavIcon, PieChart, Users, Lock, Database, Globe, Target, Search, FileText, Smartphone, Phone, Mail, CheckCircle, TrendingUp, DollarSign, Calendar, Clock3, Calculator, CreditCard, Stethoscope, GraduationCap, Factory, Truck, Home, Scale, Mic, Cube, Camera, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Hammer, Paintbrush, Scissors, BookOpen, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Package, Headphones } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))

const ServicesPage: React.FC = React.memo((props) => {
  const microSAASServices = [
    // Productivity & Management Tools
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
      icon: BarChart,
      price: '$99/month',
      originalPrice: '$149/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
