interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ className = '', children }: HeaderProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
