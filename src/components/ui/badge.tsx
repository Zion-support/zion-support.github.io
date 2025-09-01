interface BadgeProps {}
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
      <div;
        ref={ref}
        className={cn()
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className;
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
