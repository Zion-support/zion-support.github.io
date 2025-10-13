interface Props {

  children: ReactNode;
  fallback?: ReactNode;
}

export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
}