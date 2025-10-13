
}

export default function Seooptimizer({ className = '', children, ...props }: SeooptimizerProps) {
  return()
    <div className={`seooptimizer-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}