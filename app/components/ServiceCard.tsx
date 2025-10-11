'use client';
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
interface ServiceCardProps {
      title: string;,
      description: string;,
      features: string[]
  price?: string;
  popular?: boolean;
  onSelect?: () => void,
  className?: string;
  }
