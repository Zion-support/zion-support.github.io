<<<<<<< HEAD
  className: string;
=======
<<<<<<< HEAD
className: string;
=======
<<<<<<< HEAD
// Define HTML element types;
interface HTMLElement {;
=======


// Define HTML element types;
interface HTMLElement {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  className: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  id: string;
  innerHTML: string;
  textContent: string | null;
  style: { [key: string]: string }
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { cva, type VariantProps  } from './class - variance - authority';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { cn  } from '../../lib / utils';
;
// Define HTML element types;
interface HTMLElement {}
  class_name: string;
  id: string;
  innerHTML: string;
  text_content: string | null;
  style: { [key: string]: string }
}
<<<<<<< HEAD
interface HTMLDivElement extends HTMLElement {
  tag_name: 'DIV';
}
=======

interface HTMLDivElement extends HTMLElement {}
  tagName: "DIV";
});

<<<<<<< HEAD
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  return (
    <div className={cn (badge_variants ({ variant }), class_name)} {...props} />);
}

<<<<<<< HEAD
export { Badge, badgeVariants };
}import React from './react';
import { cva, type VariantProps   } from './class - variance - authority';
import { cn    } from '../../lib / utils';// Define HTML element types;
interface HTMLElement  {class_name: string;
  id: string;
  innerHTML: string;
  text_content: string | null;
  style: { [key: string]: string }
}interface HTMLDivElement extends HTMLElement  {tagName: "DIV";
}const badgeVariants = cva("inline-flex items-center rounded-full border px-2 && 2.5 py-0 && 0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants: {variant: {default:;
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:;
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:;
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline: "text-foreground border-border"}},defaultVariants: {variant: "default"}}
)export interface BadgeProps;
  extends React && React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof badgeVariants> {}
function Badge(): any ({ className, variant, ...props }: BadgeProps) {return (<div className={cn(badgeVariants({ variant }), className)} {...props} />;
  )}
export { Badge, badgeVariants }
const badge_variants = cva ("inline - flex items - center rounded - full border px - 2.5 py - 0.5 text - xs font - semibold transition - colors focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2",{variants: {variant: {default:;
          "border - transparent bg - primary text - primary - foreground hover:bg - primary / 80",secondary:;
          "border - transparent bg - secondary text - secondary - foreground hover:bg - secondary / 80",destructive:;
          "border - transparent bg - destructive text - destructive - foreground hover:bg - destructive / 80",outline: "text - foreground border - border"}},default_variants: {variant: "default"}}
)export interface BadgeProps;
  extends React.HTMLAttributes < HTMLDivElement>,VariantProps < typeof badge_variants> {}
/**;
 * Badge - Function description;
 */;
function Badge() {const badgeVariants = cva('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus: outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',{variants: {variant: {default:;
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',secondary:;
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',destructive:;
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',outline: 'text-foreground'}},defaultVariants: {variant: 'default'}}
)export interface BadgeProps;
  extends React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof badgeVariants> {}function Badge() {return (<div className={cn (badge_variants ({ variant }), class_name)} {...props} />)}export { Badge, badgeVariants }
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default', 
  className = '' 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    destructive: 'bg-red-100 text-red-800',
    outline: 'border border-gray-300 text-gray-700'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
}



}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface HTMLDivElement extends HTMLElement {;
  tagName: 'DIV';
}
const badgeVariants = cva(;
  "inline-flex items-center rounded-full border px-2 && 2.5 py-0 && 0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",;
  {;
    variants: {;
      variant: {;
        default:;
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",;
        secondary:;
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",;
        destructive:;
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",;
        outline: "text-foreground border-border",;
      },;
    },;
    defaultVariants: {;
      variant: "default",;
    },;
  }
);
export interface BadgeProps;
  extends React && React.HTMLAttributes<HTMLDivElement>,;
    VariantProps<typeof badgeVariants> {}
function Badge(): any ({ className, variant, ...props }: BadgeProps) {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
export { Badge, badgeVariants }
<<<<<<< HEAD
const badge_variants = cva (
=======
<<<<<<< HEAD
=======
const badge_variants = cva (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  "inline - flex items - center rounded - full border px - 2.5 py - 0.5 text - xs font - semibold transition - colors focus:outline - none focus:ring - 2 focus:ring - ring focus:ring - offset - 2",
  {
    variants: {
      variant: {
        default:;
          "border - transparent bg - primary text - primary - foreground hover:bg - primary / 80",
        secondary:;
          "border - transparent bg - secondary text - secondary - foreground hover:bg - secondary / 80",
        destructive:;
          "border - transparent bg - destructive text - destructive - foreground hover:bg - destructive / 80",
        outline: "text - foreground border - border",
      },
    },
    default_variants: {
      variant: "default",
    },
  }
);
;
export interface BadgeProps;
  extends React.HTMLAttributes < HTMLDivElement>,
    VariantProps < typeof badge_variants> {}
/**
 * Badge - Function description
 */
function Badge() {
  return (
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
export { Badge, badgeVariants };
>>>>>>> origin/chore/fix-lint-and-merge
=======
    <div className={cn(badgeVariants({ variant }), className)} {...props} />;
  );
}
export { Badge, badge_variants }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
