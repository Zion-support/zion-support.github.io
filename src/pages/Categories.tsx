import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Users, 
  Building, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Zap, 
  Globe, 
  Cpu, 
  Lock, 
  BarChart3, 
  Palette, 
  Smartphone, 
  Rocket, 
  Target, 
  Lightbulb, 
  Code, 
  Network, 
  Eye, 
  Star, 
  ArrowRight 
} from 'lucide-react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('all');