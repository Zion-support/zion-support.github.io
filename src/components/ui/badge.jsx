import React from 'react';
<<<<<<< HEAD
'
const Badge = ({ children, className = '', variant = 'default' }) => {}
'
''
'''
  const baseClasses =''''
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variantClasses = {}
'
''
'''
    default: 'border-transparent bg-primary text-primary-foreground','''
    secondary: 'border-transparent bg-secondary text-secondary-foreground','''
    destructive:''''
      'border-transparent bg-destructive text-destructive-foreground','''
    outline: 'text-foreground'};

  return()
=======

const Badge = ({ children, className = '', variant = 'default' }) => {

  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variantClasses = {

    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-destructive-foreground',
    outline: 'text-foreground'
  };

  return (
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
<<<<<<< HEAD
;
export { Badge };'`
'`'`
=======

export { Badge };

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
