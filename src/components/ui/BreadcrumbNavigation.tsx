<<<<<<< HEAD
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion } from 'framer-motion'  interface BreadcrumbItem {
=======
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion } from 'framer-motion'  interface BreadcrumbItem {
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-2b9a
   label: string;
   path: string;
   isCurrent?: boolean;
} interface BreadcrumbNavigationProps {
   items?: BreadcrumbItem[];
   className?: string;
   showHome?: boolean;
} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() ';;
;