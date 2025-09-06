
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
