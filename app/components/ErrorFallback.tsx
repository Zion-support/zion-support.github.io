interface ErrorFallbackProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: React.ErrorInfo;
}

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
  return()
    <div className={`errorfallback-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}