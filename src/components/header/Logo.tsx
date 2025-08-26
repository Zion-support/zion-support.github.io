import { Link } from 'react-router-dom';

interface LogoProps {
  customColor?: string;
}

export function Logo({ customColor }: LogoProps) {
  const logoColor = customColor || '#3b82f6'; // Default blue color
  
  return (
    <Link href="/" className="flex items-center">
      <img loading="lazy" src="/logos/zion-logo.png" alt="Zion Logo" className="h-8" />
    </Link>
  );
};