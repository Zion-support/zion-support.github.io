import React from 'react';

const Badge = ({ className, variant = 'default', children, ...props }) => {
  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  const variantClasses = {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

<<<<<<< HEAD
export {Badge};

export {Badge};

export {Badge};

export {Badge};

export {Badge};

export {Badge};';
;';;';
=======
export { Badge };
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
