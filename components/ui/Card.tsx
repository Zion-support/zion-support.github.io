);
Card.displayName = "Card";
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}  />
  )

);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}  />

    {...props}>
 />
))


CardHeader.displayName = "CardHeader"
const CardTitle = React.forwardRef<
  HTMLParagraphElement>
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => ("
  <h3 ref="{ref}""
    className="{cn(""
      "text-2xl font-semibold leading-none tracking-tight"
      className>
=======

    ref={ref}
    className={cn ("text - sm text - muted - foreground", class_name)}
    {...props}
const CardContent = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent && CardContent.displayName = "CardContent";

const CardFooter = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  <div
  />));
CardDescription.display_name = "CardDescription";
;
const CardContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div ref={ref} className={cn ("p - 6 pt - 0", class_name)} {...props} />));
CardContent.display_name = "CardContent";
;
const CardFooter = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => (
  <div;
    ref={ref}
    className={cn ("flex items - center p - 6 pt - 0", class_name)}
    {...props}
import React from 'react',;


import React from 'react';
import React from 'react',;
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;

import React from 'react';
interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void

  hover?: boolean
}
const Card: React.FC<CardProps> = ({

  children
  className = ''
  style
  onClick
  hover = true}) => {
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden'
  const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : ''
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : ''
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`
export default function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return <div className={`rounded border border-gray-800 bg-black/40 ${className}`}>{children}</div>
}=======

import React from 'react',;
interface CardProps {
  children: React.ReactNode,
  class_name?: string,
  style?: React.CSSProperties,
  on_click?: () => void,
  hover?: boolean;
}
const Card: React.FC<CardProps> = ({

  children
  className = ''
  style
  onClick
  hover = true}) => {
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden'
  const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : ''
  const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : ''
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`
  return (
    <div
      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}
      <div className="absolute inset - 0 bg - gradient - to - br from - blue - 500 / 5 via - transparent to - purple - 500 / 5 opacity - 0 hover:opacity - 100 transition - opacity duration - 300" />;

      {/* Content wrapper */}
      <div className="relative z - 10">;
        {children}


=======      </div>;
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />)}
    </div>);

},
export default Card,
;

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };


;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
;
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
}
export default Card;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
},

export default Card,;
;

=======
=======

    ref={ref}
    className={cn ("text - sm text - muted - foreground", class_name)}
    {...props}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
},
export default Card,
;
},
export default Card,
;



=======
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
