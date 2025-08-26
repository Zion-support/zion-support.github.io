import React from 'react';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedCard;

// Enhanced Card Header component
export function EnhancedCardHeader({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn('p-6 pb-0', className)}>
      {children}
    </div>
  );
}

// Enhanced Card Content component
export function EnhancedCardContent({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}

// Enhanced Card Footer component
export function EnhancedCardFooter({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
}