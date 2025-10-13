import React from 'react';


interface ImprovedImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedImage({ className = '', children }: ImprovedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export default function ImprovedImage({ className = '', children, ...props }: ImprovedImageProps) {
        <div className="component" {...props}>
import { ImageIcon } from 'lucide-react';


export default function Improvedimage({ className = '', children, ...props }: ImprovedimageProps) {
}}
