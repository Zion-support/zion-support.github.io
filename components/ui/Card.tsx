
import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;}
}
}

export default function Card() {return (<div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>`
      {children}
    </div>
  );
}
pr-12243
    </div>;
  )}
import { cn  } from '../../lib/utils';'

interface HTMLDivElement extends HTMLElement  {"tagName": "DIV";"
}
pr-12243
import React from "react";
import { cn } from "../../lib/utils";

interface HTMLParagraphElement extends HTMLElement  {"tagName": "P";"
}

interface HTMLHeadingElement extends HTMLElement  {"tagName": "H1" | "H2" | "H3" | "H4" | "H5" | "H6";"
}

const Card = React.forwardRef<;
  HTMLDivElement,React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (<div;
    ref = {ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm",className,)}"
    {...props}
;
  const CardContent = React && React.forwardRef<;
  HTMLDivElement,React && React.HTMLAttributes<HTMLDivElement    />;
>(({ className, ...props }, ref) => (const CardTitle = React.forwardRef<;
  HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement    />;
>(({ className, ...props }, ref) => (<h3;
    ref={ref}"
    className={cn(\"text-2xl font-semibold leading-none tracking-tight\",className,// Define HTML element types;

const CardContent = React && React.forwardRef<;
  HTMLDivElement,;
const CardContent = React && React.forwardRef<;
  HTMLDivElement,;
  React && React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => (;
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
));
CardContent && CardContent.displayName = "CardContent";
interface HTMLElement  {className: string;
  id: string;
  innerHTML: string;}
  textContent: string | null;}
  style: { [key: string]: string }
}

interface HTMLDivElement extends HTMLElement  {tagName: 'DIV';}
}

interface HTMLParagraphElement extends HTMLElement  {tagName: 'P';}
}

interface HTMLHeadingElement extends HTMLElement  {tagName: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';}
}

const Card = null;
      className;
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight";
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement;
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}

    ref={ref}"
    className={cn (\"flex items - center p - 6 pt - 0\", class_name)}
    {...props}
import React from 'react',interface CardProps {'
  }
  "children": React.ReactNode;
  className?: string;

  return (
    <div
      className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}

      </div>
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  )
}
const Card: React.FC<CardProps> = ({export {Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent;
import React from 'react';,interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () =    /> void;

interface CardProps  {children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;}
}
}

const Card: React.FC<CardProps    /> = ({children;
  className = '';
  style;}
  onClick;}
  hover = true}) => ;
  const baseClasses = 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';

const hoverClasses = hover ? 'hover: border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:bg-gray-900/80 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/20' : '';

const clickableClasses = onClick ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black' : '';

const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;"
  />))CardFooter.display_name = \'CardFooter\';

interface CardProps  {children: React.ReactNode,class_name?: string,style?: React.CSSProperties,on_click?: () => void,hover?: boolean;}
}
  return (className={classes}
      style={style}
      on_click={on_click}
    >;
      {/* Subtle background pattern */}"
        <div className = \"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\"    />)}
    </div>
},export default Card,export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent;}
}
"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }<div className=\"absolute inset - 0 rounded - xl bg - gradient - to - r from - blue - 500 / 0 via - blue - 500 / 5 to - blue - 500 / 0 opacity - 0 hover: opacity - 100 transition - opacity duration - 300 pointer - events - none\"    />
}"
    </div>)CardContent.displayName = \"CardContent\";

const CardFooter = null;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };


