interface Props {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  children: ReactNode;
  fallback?: ReactNode;
}

export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
  return()
    <div className={`errorboundary-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}