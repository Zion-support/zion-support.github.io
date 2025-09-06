=======
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
=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
export default function AuthErrorPage() {
  const { query } = useRouter()
  const message = errorMessages[query.error as string] || errorMessages.default

  return (
    <>
      <Head>

      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl font-bold">Authentication Error</CardTitle>
            <p className="text-sm text-muted-foreground">{message}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <Button asChild className="w-full">
                <Link href="/auth/login">Try Again</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Go to Homepage</Link>
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
