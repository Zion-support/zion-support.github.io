import React from 'react';
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ui/label.tsx
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>  {className?: string;
}export const Label: React.FC<LabelProps> = ({ className = '', ...props }) => {return (<label;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>  {className?: string;
}export const Label: React.FC<LabelProps> = ({ className = ', ...props }) => {return (<label;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement />  {className?: string;}
}

export const Label: React.FC<LabelProps /> = ({ className = '', ...props    }) => {

;}
  return (<label;}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    />;
  )}