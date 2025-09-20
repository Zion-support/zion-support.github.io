import { Link, useLocation  } from 'react-router-dom';
 from 'react';
export const EnhancedMobileNavigation: React.FC = () => {
import { motion, AnimatePresence  } from 'framer-motion';

 from 'lucide-react';

>} from 'lucide-react';

interface NavigationItem {

  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string
}>;
} from 'lucide - react';

interface NavigationItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children?: NavigationItem[];
}}
          className={`relative ${depth > 0 ? 'ml-4' : ''}`}
                size={16}`
                size={16}`
