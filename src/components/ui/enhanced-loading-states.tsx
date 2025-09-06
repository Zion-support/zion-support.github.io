import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Loader2, AlertTriangle, RefreshCw, Wifi, WifiOff, Clock, Zap } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { cn  } from '@/lib/utils';
// Enhanced loading spinner with different variants
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl',
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
  showText?: boolean;
  text?: string
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size;
