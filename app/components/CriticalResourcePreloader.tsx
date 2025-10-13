interface CriticalresourcepreloaderProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Criticalresourcepreloader({ className = '', children, ...props }: CriticalresourcepreloaderProps) {
  return (
    <div className={`criticalresourcepreloader-component ${className}`} {...props}>
      {children}
    </div>
  );
}