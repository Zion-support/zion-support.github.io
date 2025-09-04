<<<<<<< HEAD
import React from 'react'; import { Link, useLocation  } from 'react-router-dom'; import { ChevronRight, Home  } from 'lucide-react'; import { motion  } from 'framer-motion'; ; interface BreadcrumbItem { label: string; path: string; isCurrent?: boolean;   }; interface BreadcrumbNavigationProps {';
 items?: BreadcrumbItem[]; className?: string; showHome?: boolean; ';';
}; export const BreadcrumbNavigation: Reac t.FC<BreadcrumbNavigationProps> = ({; items = [],; className = '',; showHome = true; }) => {; const location = useLocation(); ;
';
</BreadcrumbNavigationProps>;';;';
=======
import React from 'react'; import { Link, useLocation  } from 'react-router-dom'; import { ChevronRight, Home  } from 'lucide-react'; import { motion  } from 'framer-motion'; ; interface BreadcrumbItem { label: string; path: string; isCurrent?: boolean;   }; interface BreadcrumbNavigationProps {;
 items?: BreadcrumbItem[]; className?: string; showHome?: boolean; ;
}; export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({; items = [],; className = '',; showHome = true; }) => {; const location = useLocation(); ;
;
</BreadcrumbNavigationProps>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
