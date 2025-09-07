import React from 'react';
<<<<<<< HEAD
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>  {className?: string;
}export const Label: React.FC<LabelProps> = ({ className = ', ...props }) => {return (<label;
=======
>>>>>>> origin/chore/fix-lint-and-merge

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement />  {className?: string;}
}

export const Label: React.FC<LabelProps /> = ({ className = '', ...props    }) => {}
  return (<label;}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    />;
  )}