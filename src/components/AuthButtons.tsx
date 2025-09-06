
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


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
    <div className={`mt-6 grid ${gridCols} gap-3`}>;
      {providers && providers.includes('google') && (;
        <Button

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            </svg>
          )}
        </Button>;
      )}
      {providers && providers.includes('github') && (;
        <Button

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            </svg>
          )}
        </Button>;
      )}
      {providers && providers.includes('facebook') && (;
        <Button
=======
          type='button'
          variant='outline'
          className='w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan'
          onClick={() => handleSignIn('facebook')}
          disabled={loadingProvider !== null}        >
          <span className='sr-only'>Sign in with Facebook</span>
          {loadingProvider === 'facebook' ? (
            <svg className='h-5 w-5 animate-spin' viewBox='0 0 24 24' />
          ) : (
            <Facebook className='h-5 w-5' />
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => handleSignIn('facebook')}
          disabled={loadingProvider !== null}
        >
          <span className="sr-only">Sign in with Facebook</span>
          {loadingProvider === 'facebook' ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" />
          ) : (
            <Facebook className="h-5 w-5" />
<<<<<<< HEAD

          )}
        </Button>;
      )}
      {providers && providers.includes('credentials') && (;
        <Button
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          ) : (
            <>Email Login</>
          )}
        </Button>
      )};
    </div>;
  );
};
}

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    </div>;
  );
}
;
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
