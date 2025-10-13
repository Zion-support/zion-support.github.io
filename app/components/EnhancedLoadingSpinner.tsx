className?: string;
  children?: React.ReactNode;
}

export default function Enhancedloadingspinner({ className = '', children, ...props }: EnhancedloadingspinnerProps) {
  return()
    <div className={`enhancedloadingspinner-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}