import { Facebook } from 'lucide-react'

import { signIn } from 'next-auth/react'
type Provider = 'google' | 'github' | 'facebook' | 'credentials'
interface AuthButtonsProps {
  providers?: Provider[]
export function AuthButtons({
  providers = ['google', 'github', 'facebook', 'credentials']
}: AuthButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)
  const handleSignIn = async (provider: Provider) => {
    setLoadingProvider(provider)
    await signIn(provider)
  }
  const gridCols = `grid-cols-${providers.length}`
=======
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';
import { signIn } from 'next-auth/react',;
type Provider = 'google' | 'github' | 'facebook' | 'credentials',;
interface AuthButtonsProps {;
  providers?: Provider[];
}

export function AuthButtons({ providers = ['googlegithubfacebookcredentials'] }: AuthButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null),

  const handleSignIn = async (provider: Provider) => {
    setLoadingProvider(provider),
    await signIn(provider)
  },

  const gridCols = `grid-cols-${providers.length}`,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className={`mt-6 grid ${gridCols} gap-3`}>
      {providers.includes('google') && (
        <Button
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </svg>
          )}
        </Button>
      )}
      {providers.includes('github') && (
        <Button
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </svg>
          )}
        </Button>
      )}
      {providers.includes('facebook') && (
        <Button
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          )}
        </Button>
      )}
      {providers.includes('credentials') && (
        <Button
=======
          type="button"
          variant="outline"
          className="col-span-2 border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('credentials')}
          disabled={loadingProvider !== null}
        >
          {loadingProvider === 'credentials' ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ) : (
            <>Email Login</>
          )}
        </Button>;
      )}
    </div>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
