

interface ImageOptimizerProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function Imageoptimizer({ className = '', children, ...props }: ImageoptimizerProps) {
  return()
    <div className={`imageoptimizer-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
};