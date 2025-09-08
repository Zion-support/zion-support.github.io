export const Alert: React.FC<AlertProps> = ({ children, className, variant = 'default' }) => {
  return (
    <div
      className={cn(
        "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
        variant === 'destructive' && "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        className
      )}
    >
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, className }) => {
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
  >
    {children}
  </div>
);
