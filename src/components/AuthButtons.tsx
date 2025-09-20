import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Github, Mail } from 'lucide-react';

interface AuthButtonsProps {
  providers?: string[];
  onProviderClick?: (provider: string) => void;
  isLoading?: boolean;
}

export function AuthButtons({ 
  providers = ['google', 'github', 'facebook'], 
  onProviderClick,
  isLoading = false 
}: AuthButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleProviderClick = async (provider: string) => {
    setLoadingProvider(provider);
    try {
      if (onProviderClick) {
        await onProviderClick(provider);
      }
    } finally {
      setLoadingProvider(null);
    }
  };

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'google':
        return <Mail className="h-4 w-4" />;
      case 'github':
        return <Github className="h-4 w-4" />;
      case 'facebook':
        return <Facebook className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  const getProviderLabel = (provider: string) => {
    switch (provider) {
      case 'google':
        return 'Continue with Google';
      case 'github':
        return 'Continue with GitHub';
      case 'facebook':
        return 'Continue with Facebook';
      default:
        return `Continue with ${provider}`;
    }
  };

  const gridCols = providers.length === 1 ? 'grid-cols-1' : 
                   providers.length === 2 ? 'grid-cols-2' : 'grid-cols-3';

  return (
    <div className={`mt-6 grid ${gridCols} gap-3`}>
      {providers.map((provider) => (
        <Button
          key={provider}
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleProviderClick(provider)}
          disabled={isLoading || loadingProvider === provider}
        >
          {loadingProvider === provider ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            getProviderIcon(provider)
          )}
          <span className="ml-2">{getProviderLabel(provider)}</span>
        </Button>
      ))}
    </div>
  );
}