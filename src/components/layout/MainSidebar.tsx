import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  HelpCircle,
  Code,
  Smartphone,
  Globe,
  Building,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const location = useLocation();
