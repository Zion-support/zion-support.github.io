
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

import { 
  X, 
  Building2, 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  ShoppingCart,
  Heart,
  GraduationCap,
  Factory,
  Truck,
  CreditCard,
  Phone,
  Mail,
  ExternalLink;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
} from 'lucide-react';
interface SidebarProps {
  isOpen: boolean, onClose: () => void
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)

}
;
export default Sidebar;


<<<<<<< HEAD

}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
};

export default Sidebar;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
