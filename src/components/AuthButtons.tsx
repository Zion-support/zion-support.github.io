
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

  return (
    <div className={`mt-6 grid ${gridCols} gap-3`}>
      {providers.includes('google') && (
        <Button

            </svg>
          )}
        </Button>
      )}
      {providers.includes('github') && (
        <Button

            </svg>
          )}
        </Button>
      )}
      {providers.includes('facebook') && (
        <Button

          )}
        </Button>
      )}
      {providers.includes('credentials') && (
        <Button

          type="button"
          variant="outline"
          className="col-span-2 border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('credentials')}
          disabled={loadingProvider !== null}
        >
          {loadingProvider === 'credentials' ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />

          ) : (
            <>Email Login</>
          )}
        </Button>;
      )}

    </div>;
  );
}
;

