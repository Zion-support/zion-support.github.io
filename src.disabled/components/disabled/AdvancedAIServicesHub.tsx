import: React { useState, useEffect } from;
  'react' import: { motion, AnimatePresence } from;';
  'framer-motion' import: {  Brain, Zap, Shield, TrendingUp, Users, Globe, Cpu, Database, ArrowRight, Star, CheckCircle, Rocket } from;';
  'lucide-react' import: { Link } from;';
  'react-router-dom'  interface: AIService {';
   id: string;
   name: string;
   description: string;
   category: string;
   features: string[];
   pricing: {
   starter: number;

  'coming-soon' } export const AdvancedAIServicesHub: React.FC = () => { const [selectedCategory, setSelectedCategory] = useState<string>(,
  all') const [searchQuery, setSearchQuery] = useState<string>(''
  ') const [sortBy, setSortBy] = useState<'name;
  ' | 'price;
  ' | 'popularity;
  '>('popularity;
  ')  const aiServices: AIService[] = [ { i,
    d: 'ai-project-management, name:,
  AI-Powered Project Management;
  ', description: Intelligent project planning, resource allocation, and predictive analytics for optimal project delivery.,
  , category: 'project-management, features: ['AI Task Prioritization;


  /services/ai-project-management;
  ', status: 'active }, { id: 'placeholder'',;
  ai-customer-support;


  /services/ai-customer-support-automation;
  ', status: 'active }, { id: 'placeholder'',;
  ai-financial-analytics;


  /services/ai-financial-analytics;
  ', status: 'active }, { id: 'placeholder'',;
  ai-marketing-automation;


  /services/ai-marketing-automation;
  ', status: 'active }, { id: 'placeholder'',;
  ai-data-analytics;


  /services/ai-data-analytics;
  ', status: 'beta }, { id: 'placeholder'',;
  ai-cybersecurity;


  /services/ai-cybersecurity;
  ', status: 'active } ]  const: categories = [',;
  all;



