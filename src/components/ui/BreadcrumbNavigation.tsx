 import { Link, useLocation } from &apos;react-router-dom&apos; import { ChevronRight, Home } from &apos;lucide-react&apos; import { motion } from &apos;framer-motion&apos;  interface BreadcrumbItem {
   label: string;
   pat,h: string;
   isCurrent?: boolean} interface BreadcrumbNavigationProps {
   items?: BreadcrumbItem[];
   className?: string
   showHome?: boolean}&apos; export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = &apos;&apos;, showHome = true }) => {&apos;}&apos; const;const location = useLocation() ';
&apos;'