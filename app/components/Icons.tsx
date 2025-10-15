import React from 'react';
import { 
  Wifi, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  ChevronRight,
  Check,
  Star,
  ArrowRight,
  Menu,
  X,
  Search,
  User,
  Settings,
  Home,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icons: React.FC<IconProps> = ({ name, className = '', size = 24 }) => {
  const iconMap = {
    wifi: Wifi,
    zap: Zap,
    shield: Shield,
    globe: Globe,
    cpu: Cpu,
    chevronRight: ChevronRight,
    check: Check,
    star: Star,
    arrowRight: ArrowRight,
    menu: Menu,
    x: X,
    search: Search,
    user: User,
    settings: Settings,
    home: Home,
    info: Info,
    alertCircle: AlertCircle,
    checkCircle: CheckCircle,
    xCircle: XCircle
  };
  
  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} size={size} />;
};

export default Icons;