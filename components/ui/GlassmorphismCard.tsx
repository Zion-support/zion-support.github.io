<<<<<<< HEAD
import React from 'react';
import { ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassmorphismCard({ 
  children, 
  className = "bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/30" ;
}: GlassmorphismCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
=======
import React from 'react'; import { ReactNode } from "react; interface GlassmorphismCardProps { children ReactNode; className? string; } export default function GlassmorphismCard({ children, className = bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/30" }: GlassmorphismCardProps) { return ( <div className="{className}"> {children} </div> ); } 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
