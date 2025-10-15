import React from 'react;'";
import { Link } from 'react-router-dom;'";
import { Helmet } from 'react-helmet-async;'";
import { BookOpen, Code, Database, Cloud, Shield, Zap, Brain } from 'lucide-react;'";
  const getDifficultyColor  = (difficulty: string) => {
    switch (difficulty) {case 'Beginner': return 'text-green-400 bg-green-400/20'";
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20'";
      case 'Advanced': return 'text-orange-400 bg-orange-400/20'";
      case 'Expert': return 'text-red-400 bg-red-400/20'";
      default: return 'text-gray-400 bg-gray-400/20'";
const: Page = () => {
