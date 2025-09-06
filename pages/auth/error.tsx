<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { use_router } from 'next / router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { AlertTriangle } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import Head from 'next/head';

=======


const errorMessages: Record<string string> = {;
  OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const errorMessages: Record<string, string> = {;
  OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export default function AuthErrorPage() {
  const { query } = useRouter()
  const message = errorMessages[query.error as string] || errorMessages.default

  return (
    <>
      <Head>

<<<<<<< HEAD
=======
        <title>Authentication Error - Zion Tech Marketplace</title>
        <meta name="description" content="Authentication error page" />

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Link from 'next / link';
import Head from 'next / head';
const error_messages: Record < string string> = {
  OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';
}
export default /**
 * AuthErrorPage - Function description
 */
function AuthErrorPage() {
  const { query } = use_router ();
  const message = error_messages[query.error as string] || error_messages.default;
  return (
    <>;
      <Head>;
        <title > Authentication Error - Zion Tech Marketplace</title>;
        <meta name=&quot;description & quot; content=&quot;Authentication error page & quot; />;
      </Head>;
      <div className=&quot;min - h-screen flex items - center justify - center bg - gradient - to - br from - red - 50 to - orange - 100 dark:from - gray - 900 dark:to - gray - 800 p - 4&quot;>;
        <Card className=&quot;w - full max - w-md & quot;>;
          <CardHeader className=&quot;space - y-1 text - center & quot;>;
            <div className=&quot;mx - auto mb - 4 flex h - 12 w - 12 items - center justify - center rounded - full bg - red - 100 dark:bg - red - 900 / 20 & quot;>;
              <AlertTriangle className=&quot;h - 6 w - 6 text - red - 600 dark:text - red - 400 & quot; />;
            </div>;
            <CardTitle className=&quot;text - 2xl font - bold & quot;>Authentication Error</CardTitle>;
            <p className=&quot;text - sm text - muted - foreground & quot;>{message}</p>;
          </CardHeader>;
          <CardContent className=&quot;space - y-4 & quot;>;
            <div className=&quot;text - center space - y-2 & quot;>;
              <Button as_child className=&quot;w - full & quot;>;
                <Link href=&quot;/auth / login & quot;>Try Again</Link>;
              </Button>;
              <Button as_child variant=&quot;outline & quot; className=&quot;w - full & quot;>;
                <Link href=&quot;/&quot;>Go to Homepage</Link>;
              </Button>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
    </>);
<<<<<<< HEAD

}
=======

=======
}
=======
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
const errorMessages: Record<string string> = {OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';
}
export default function AuthErrorPage() {
  const { query } = useRouter()
  const message = errorMessages[query.error as string] |errorMessages.default
=======
const errorMessages: Record<string string> = {;
  OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
const errorMessages: Record<string, string> = {;
  OAuthSignin: 'The authentication provider is temporarily unavailable. Please try again later.';
  default: 'There was an issue with your authentication request.';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export default function AuthErrorPage() {
  const { query } = useRouter()
  const message = errorMessages[query.error as string] || errorMessages.default
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Authentication Error - Zion Tech Marketplace</title>;
        <meta name=&quot;description&quot; content=&quot;Authentication error page&quot; />
=======
        <title>Authentication Error - Zion Tech Marketplace</title>
        <meta name="description" content="Authentication error page" />
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
