<<<<<<< HEAD
=======
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Users, Zap, Shield, Code, BarChart3, Bot, Building, CheckCircle, Sparkles, Brain, Database, Cloud, Smartphone, FileText, Settings, DollarSign, Clock, Target, Cpu, Heart, Eye, ExternalLink, Play, BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES } from '@/data/enhancedInnovativeServices';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '@/data/innovativeMicroSaasServices';
import { motion } from 'framer-motion';
// Combine all services
const ALL_SERVICES = [
    ...ENHANCED_INNOVATIVE_SERVICES,
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES
];
const categoryIcons = {
    'AI & Legal Tech': FileText,
    'AI & FinTech': DollarSign,
    'AI & Healthcare': Heart,
    'Cybersecurity & Quantum': Shield,
    'AI & Supply Chain': Building,
    'AI & Energy': Zap,
    'AI & Customer Experience': Users,
    'Quantum & AI': Cpu,
    'AI & Data Governance': Database,
    'AI & HR Tech': Users,
    'AI & Machine Learning': Brain,
    'AI & Business Intelligence': BarChart3,
    'AI & Marketing Automation': Target,
    'AI & CRM': Users,
    'AI & ERP': Building,
    'AI & Project Management': Code,
    'AI & Autonomous Systems': Bot,
    'AI & Research': Brain,
    'AI & Content Generation': FileText,
    'AI & Voice Technology': Smartphone,
    'AI & Video Generation': Eye,
    'AI & Threat Intelligence': Shield,
    'AI & Cloud Management': Cloud,
    'AI & DevOps': Code
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
};
export default ComprehensiveServicesOverview;