
interface NotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NotFound({ className = '', children, ...props }: NotFoundProps) {
  return (
    <div className={`notfound-component ${className}`} {...props}>
      {children}
    </div>
  );
}
