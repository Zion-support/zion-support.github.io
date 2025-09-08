interface AlertProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning';
}

export function Alert(...args: []):  {
  return (
    <div className={`border rounded-lg p-4 ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

interface AlertDescriptionProps extends React.PropsWithChildren<{}> {

  children: React.ReactNode;
  className?: string;

}

export function AlertDescription(...args: []):  {
  return (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  );
};