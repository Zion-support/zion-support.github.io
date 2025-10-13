import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CoreWebVitals({ className = '', children }: CoreWebVitalsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export default function CoreWebVitals({ className = '', children, ...props }: CoreWebVitalsProps) {
        <div className="component" {...props}>

export default function Corewebvitals({ className = '', children, ...props }: CorewebvitalsProps) {
