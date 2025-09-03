<<<<<<< HEAD
import React from 'react'; import { Link, useLocation  } from 'react-router-dom'; import { ChevronRight, Home  } from 'lucide-react'; import { motion  } from 'framer-motion'; ; interface BreadcrumbItem {; label: string; path: string; isCurrent?: boolean; }; interface BreadcrumbNavigationProps {; items?: BreadcrumbItem[]; className?: string; showHome?: boolean; }; export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({; items = [],; className = '',; showHome = true; }) => {; const location = useLocation(); ;
=======
<<<<<<< HEAD
import React from 'react'; import { Link, useLocation    } from 'react-router-dom'; import { ChevronRight, Home    } from 'lucide-react'; import { motion    } from 'framer-motion'; ; interface BreadcrumbItem { label: string; path: string; isCurrent?: boolean;  }; interface BreadcrumbNavigationProps { items?: BreadcrumbItem[]; className?: string; showHome?: boolean; }; export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({; items = [],; className = '',; showHome = true; }) => {; const location = useLocation(); ;
=======
<<<<<<< HEAD

 import { Link, useLocation } from 'react-router-dom'; import { ChevronRight, Home } from 'lucide-react'; import { motion } from 'framer-motion'; ; interface BreadcrumbItem {; label: string; path: string; isCurrent?: boolean; }; interface BreadcrumbNavigationProps {; items?: BreadcrumbItem[]; className?: string; showHome?: boolean; }; export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({; items = [],; className = '',; showHome = true; }) => {; const location = useLocation(); ;'';,"});,"})
;,"});,"})
 import { Link, useLocation    } from 'react-router-dom'; import { ChevronRight, Home    } from 'lucide-react'; import { motion    } from 'framer-motion'; ; interface BreadcrumbItem { label: string; path: string; isCurrent?: boolean;  }; interface BreadcrumbNavigationProps { items?: BreadcrumbItem[]; className?: string; showHome?: boolean; }; export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({; items = [],; className = '',; showHome = true; }) => {; const location = useLocation(); ;,"});,"})
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff;,"});,"})
=======
<<<<<<< HEAD
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion } from 'framer-motion'  interface BreadcrumbItem {   label: string;
=======
<<<<<<< HEAD
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion } from 'framer-motion'  interface BreadcrumbItem { label: string;
>>>>>>> main
   path: string;
   isCurrent?: boolean  } interface BreadcrumbNavigationProps {
   items?: BreadcrumbItem[];
   className?: string
   showHome?: boolean} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() ''
=======
<<<<<<< HEAD
 import { Link, useLocation } from 'react-router-dom' import { ChevronRight, Home } from 'lucide-react' import { motion } from 'framer-motion'  interface BreadcrumbItem {;
   label: string;
<<<<<<< HEAD
   pat,
    h: string;
   isCurrent?: boolean} interface BreadcrumbNavigationProps {
   items?: BreadcrumbItem[];
   className?: string'
   showHome?: boolean} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() ';
'
=======
   path: string;
   isCurrent?: boolean} interface BreadcrumbNavigationProps {;
   items?: BreadcrumbItem[];
   className?: string;
<<<<<<< HEAD
   showHome?: boolean;
} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = '', showHome = true }) => { const location = useLocation() ';;
=======
   showHome?: boolean} export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items = [], className = ', showHome = true }) => { const location = useLocation() ';
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function BreadcrumbNavigation() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="BreadcrumbNavigation - Zion Tech Group" description="Professional BreadcrumbNavigation services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">BreadcrumbNavigation</h1>
        <p className="text-gray-300 text-lg">
          Professional BreadcrumbNavigation services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
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
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
