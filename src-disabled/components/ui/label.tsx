import React from 'react';
:src_backup/components/ui/label.tsx
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>  {className?: string;
}export const Label: React.FC<LabelProps> = ({ className = '', ...props }) => {return (<label;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement />  {className?: string;}
}

export const Label: React.FC<LabelProps /> = ({ className = '', ...props    }) => {

;}
  return (<label;}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    />;
  )}