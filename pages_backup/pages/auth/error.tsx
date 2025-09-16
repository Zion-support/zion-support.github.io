import { use_router } from 'next / router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { AlertTriangle } from 'lucide-react';

import Link from 'next/link';
import Head from 'next/head';

const errorMessages: Record<string string> = {OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';
}
export default function AuthErrorPage() {
  const { query } = useRouter()
  const message = errorMessages[query.error as string] |errorMessages.default
const errorMessages: Record<string string> = {;
  OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';

const errorMessages: Record<string, string> = {;
  OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }











}
export default function AuthErrorPage() {
  const { query } = useRouter()
  const message = errorMessages[query.error as string] || errorMessages.default



  return (
    <>
      <Head>
        <title>Authentication Error - Zion Tech Marketplace</title>;
        <meta name=&quot;description&quot; content=&quot;Authentication error page&quot; />
        <title>Authentication Error - Zion Tech Marketplace</title>
        <meta name="description" content="Authentication error page" />

      </Head>
      <div className=&quot;min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4&quot;>
        <Card className=&quot;w-full max-w-md&quot;>
          <CardHeader className=&quot;space-y-1 text-center&quot;>
            <div className=&quot;mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20&quot;>
              <AlertTriangle className=&quot;h-6 w-6 text-red-600 dark:text-red-400&quot; />
            </div>
            <CardTitle className=&quot;text-2xl font-bold&quot;>Authentication Error</CardTitle>
            <p className=&quot;text-sm text-muted-foreground&quot;>{message}</p>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div className=&quot;text-center space-y-2&quot;>
              <Button asChild className=&quot;w-full&quot;>
                <Link href=&quot;/auth/login&quot;>Try Again</Link>
              </Button>
              <Button asChild variant=&quot;outline&quot; className=&quot;w-full&quot;>
                <Link href=&quot;/&quot;>Go to Homepage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

