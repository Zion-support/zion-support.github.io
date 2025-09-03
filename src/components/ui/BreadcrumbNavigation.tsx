<<<<<<< HEAD
 import { Link, useLocation } from &apos;react-router-dom&apos; import { ChevronRight, Home } from &apos;lucide-react&apos; import { motion } from &apos;framer-motion&apos;  interface BreadcrumbItem {
=======
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion }  from 'framer-motion';interface BreadcrumbItem {;
>>>>>>> main
   label: string;
   pat,h: string;
   isCurrent?: boolean} interface BreadcrumbNavigationProps {
   items?: BreadcrumbItem[];
<<<<<<< HEAD
   className?: string""
   showHome?: boolean} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() ';'
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion } from 'framer-motion'  interface BreadcrumbItem {
=======
   className?: string"
   showHome?: boolean} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() 
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion }  from 'framer-motion';interface BreadcrumbItem {
>>>>>>> main
   label: string
   path: string
   isCurrent?: boolean, } interface BreadcrumbNavigationProps {
   items?: BreadcrumbItem[]
   className?: string
<<<<<<< HEAD
   showHome?: boolean}&apos; export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = &apos;&apos;, showHome = true }) => {&apos;}&apos; const;const location = useLocation() ';
&apos;'
=======
<<<<<<< HEAD
   showHome?: boolean", "
} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() ''
;""
}}
=======
<<<<<<< HEAD
   showHome?: boolean} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() ';'
=======
   showHome?: boolean",
} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() 
}}
>>>>>>> main
>>>>>>> main
>>>>>>> main
