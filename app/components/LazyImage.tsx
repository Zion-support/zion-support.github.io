className?: string;
  children?: React.ReactNode;
}

export default function Lazyimage({ className = '', children, ...props }: LazyimageProps) {
  return()
    <div className={`lazyimage-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}