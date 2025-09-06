import React from 'react',
import Card from '../ui/Card';
import { Zap } from 'lucide-react';
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  delay?: number
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
  columns?: 2 | 3 | 4
}

const Features: React.FC<FeaturesProps> = ({
  title;
  subtitle;
  features;
  columns;