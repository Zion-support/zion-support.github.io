import React, { useState } from 'react',
import SEO from '../components/SEO',
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, Award, BookOpen, Video;
  Headphones, Code, Brain, Atom, Rocket, Shield, Zap;
  Star, CheckCircle, ArrowRight, ChevronDown, ChevronUp;
  Play, Download, ExternalLink, Calendar, MapPin, DollarSign;
  TrendingUp, Target, Lightbulb, Building, Globe, Server
 } from 'lucide-react';
export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null),

  const trainingCategories = null;
