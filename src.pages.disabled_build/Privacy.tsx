import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Settings,
  Trash2,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy: React.FC = (): JSX.Element => {
  const lastUpdated = 'December 15, 2024';