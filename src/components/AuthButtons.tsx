import { useState } from 'react';
import { Button } from '@/components / ui / button';
import { Facebook } from 'lucide-react';
import { sign_in } from 'next - auth / react';
type Provider = 'google' | 'github' | 'facebook' | 'credentials';
interface AuthButtonsProps {
  providers?: Provider[];
export /**
 * AuthButtons - Function description
 */
function AuthButtons() {
  const [loading_provider, setLoadingProvider] = useState < string | null>(null);

  const handleSignIn = async (provider: Provider) => {
    setLoadingProvider (provider);
    await sign_in (provider);
  }

type Provider = 'google' | 'github' | 'facebook' | 'credentials';
interface AuthButtonsProps {;
  providers?: Provider[];

export function AuthButtons(): any ({;
  providers = ['google', 'github', 'facebook', 'credentials'],;
}: AuthButtonsProps) {;
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSignIn = async (provider: Provider) => {;
    setLoadingProvider(provider);
    await signIn(provider);
  };
  const gridCols = `grid-cols-${providers && providers.length}`;



  const gridCols = `grid-cols-${providers.length}`,



          ) : (
            <>Email Login</>
          )}
        </Button>
      )};
    </div>;
  );
};
}



    </div>;
  );
}
;