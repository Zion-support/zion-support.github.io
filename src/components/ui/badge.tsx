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
'