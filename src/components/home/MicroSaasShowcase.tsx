import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Network,
  ArrowRight,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';

export function MicroSaasShowcase() {
  // Get featured services (first 6)
  const featuredServices = MICRO_SAAS_SERVICES.slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-6 w-6" />;
      case 'IT': return <Cloud className="h-6 w-6" />;
      case 'Development': return <Code className="h-6 w-6" />;
      case 'Analytics': return <Database className="h-6 w-6" />;
      case 'Security': return <Shield className="h-6 w-6" />;
      case 'Automation': return <Zap className="h-6 w-6" />;
      case 'Integration': return <Network className="h-6 w-6" />;
      case 'Consulting': return <Users className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
