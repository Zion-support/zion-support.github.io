
interface LoadingstatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingstates({ className = '', children, ...props }: LoadingstatesProps) {
  return (
    <div className={`loadingstates-component ${className}`} {...props}>
      {children}
    </div>
  );
}
