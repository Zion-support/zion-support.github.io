
import { cn } from "@/lib/utils";
interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

<<<<<<< HEAD
=======
export function GradientHeading({ childrenclassNamelevel = "h2" }: GradientHeadingProps) {
  const Tag = level;
  
  return (
    <Tag 
      className={cn(
        "text-4xl font-bold tracking-tight bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
