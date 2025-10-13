
interface FuturisticcardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristiccard({ className = '', children, ...props }: FuturisticcardProps) {
  return (
    <div className={`futuristiccard-component ${className}`} {...props}>
      {children}
    </div>
  );
}
