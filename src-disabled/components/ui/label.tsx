import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>  {className?: string;
}export const Label: React.FC<LabelProps> = ({ className = ', ...props }) => {return (<label;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement />  {className?: string;}
}

export const Label: React.FC<LabelProps /> = ({ className = '', ...props    }) => {}
  return (<label;}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    />;
  )}