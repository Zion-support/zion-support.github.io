<<<<<<< HEAD

interface BadgeProps {
  variant?:'
    | 'default''
    | 'secondary''
    | 'destructive''
    | 'outline''
    | 'success''
    | 'warning';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;


    
    
    return()
      <div
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
        ref={ref}
        className={cn()
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )}
);

Badge.displayName = 'Badge';
;
export { Badge };
