import React from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Info,
  Heart,
  Share2,
  Mail,
  Phone,
  Globe,
  Calendar,
  Briefcase,
  Sparkles,
  ArrowRight,
  User,
  BarChart3,
  Monitor
} from 'lucide-react';

// Re-export common icons for easy use
export {
  Star,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Heart,
  Share2,
  Mail,
  Phone,
  Globe,
  Calendar,
  Briefcase,
  Sparkles,
  ArrowRight,
  User,
  BarChart3,
  Monitor
};

// Custom icon components
export const StarIcon = ({ filled = false, className = '' }: { filled?: boolean; className?: string }) => (
  <Star 
    className={className} 
    fill={filled ? 'currentColor' : 'none'} 
  />
);

export const BriefcaseIcon = ({ className = '' }: { className?: string }) => (
  <Briefcase className={className} />
);

export const LocationIcon = ({ className = '' }: { className?: string }) => (
  <MapPin className={className} />
);

export const TimeIcon = ({ className = '' }: { className?: string }) => (
  <Clock className={className} />
);

export const PriceIcon = ({ className = '' }: { className?: string }) => (
  <DollarSign className={className} />
);

export const TeamIcon = ({ className = '' }: { className?: string }) => (
  <Users className={className} />
);

export const CertificationIcon = ({ className = '' }: { className?: string }) => (
  <Award className={className} />
);

export const SuccessIcon = ({ className = '' }: { className?: string }) => (
  <CheckCircle className={className} />
);

export const ErrorIcon = ({ className = '' }: { className?: string }) => (
  <XCircle className={className} />
);

export const WarningIcon = ({ className = '' }: { className?: string }) => (
  <AlertCircle className={className} />
);

export const InfoIcon = ({ className = '' }: { className?: string }) => (
  <Info className={className} />
);