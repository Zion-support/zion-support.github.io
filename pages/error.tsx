<<<<<<< HEAD


=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'
export default function ErrorPage() {
  return (
    <>
      <Head>;
        <title>Authentication Error - Zion Tech Marketplace</title>;
        <meta name=&quot;description&quot; content=&quot;Authentication error page&quot; />
      </Head>
      <div className=&quot;min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4&quot;>
        <Card className=&quot;w-full max-w-md&quot;>
          <CardHeader className=&quot;space-y-1 text-center&quot;>
            <div className=&quot;mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20&quot;>
              <AlertTriangle className=&quot;h-6 w-6 text-red-600 dark:text-red-400&quot; />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Head>
        <title>Authentication Error - Zion Tech Marketplace</title>
        <meta name="description" content="Authentication error page" />
      </Head>


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            <CardTitle className=&quot;text-2xl font-bold&quot;>Authentication Error</CardTitle>
            <p className=&quot;text-sm text-muted-foreground&quot;>
              There was an issue with your authentication request
            </p>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div className=&quot;text-center space-y-4&quot;>
              <p className=&quot;text-sm text-muted-foreground&quot;>
                This could be due to:
              </p>
              <ul className=&quot;text-sm text-muted-foreground space-y-1 text-left&quot;>
                <li>• Invalid email or password</li>
                <li>• Account not verified</li>
                <li>• Network connectivity issues</li>
                <li>• Temporary service unavailability</li>
              </ul>
<<<<<<< HEAD


=======
              <div className=&quot;pt-4 space-y-2&quot;>
                <Button asChild className=&quot;w-full&quot;>
                  <Link href=&quot;/auth/login&quot;>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="pt-4 space-y-2">
                <Button asChild className="w-full">
                  <Link href="/auth/login">


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Try Again
                  </Link>
                </Button>
                <Button asChild variant=&quot;outline&quot; className=&quot;w-full&quot;>
                  <Link href=&quot;/&quot;>
                    Go to Homepage
                  </Link>
                </Button>
              </div>
<<<<<<< HEAD


=======
              <div className=&quot;text-center text-sm text-muted-foreground pt-4&quot;>
                Need help? <Link href=&quot;/contact&quot; className=&quot;hover:text-primary&quot;>Contact Support</Link>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-center text-sm text-muted-foreground pt-4">
                Need help? <Link href="/contact" className="hover:text-primary">Contact Support</Link>


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )

import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { AlertTriangle } from 'lucide-react';
import Link from 'next / link';
import Head from 'next / head';
export default /**
 * ErrorPage - Function description
 */
function ErrorPage() {
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
            <p className=&quot;text - sm text - muted - foreground & quot;>;
              There was an issue with your authentication request;
            </p>;
          </CardHeader>;
          <CardContent className=&quot;space - y-4 & quot;>;
            <div className=&quot;text - center space - y-4 & quot;>;
              <p className=&quot;text - sm text - muted - foreground & quot;>;
                This could be due to:;
              </p>;
              <ul className=&quot;text - sm text - muted - foreground space - y-1 text - left & quot;>;
                <li>• Invalid email or password</li>;
                <li>• Account not verified</li>;
                <li>• Network connectivity issues</li>;
                <li>• Temporary service unavailability</li>;
              </ul>;
              <div className=&quot;pt - 4 space - y-2 & quot;>;
                <Button as_child className=&quot;w - full & quot;>;
                  <Link href=&quot;/auth / login & quot;>;
                    Try Again;
                  </Link>;
                </Button>;
                <Button as_child variant=&quot;outline & quot; className=&quot;w - full & quot;>;
                  <Link href=&quot;/&quot;>;
                    Go to Homepage;
                  </Link>;
                </Button>;
              </div>;
              <div className=&quot;text - center text - sm text - muted - foreground pt - 4&quot;>;
                Need help? <Link href=&quot;/contact & quot; className=&quot;hover:text - primary & quot;>Contact Support</Link>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
    </>);

}
<<<<<<< HEAD
<<<<<<< HEAD

}
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'
export default function ErrorPage() {
  return (
    <>
      <Head>;
        <title>Authentication Error - Zion Tech Marketplace</title>;
        <meta name=&quot;description&quot; content=&quot;Authentication error page&quot; />
      </Head>
      <div className=&quot;min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4&quot;>
        <Card className=&quot;w-full max-w-md&quot;>
          <CardHeader className=&quot;space-y-1 text-center&quot;>
            <div className=&quot;mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20&quot;>
              <AlertTriangle className=&quot;h-6 w-6 text-red-600 dark:text-red-400&quot; />
      <Head>
        <title>Authentication Error - Zion Tech Marketplace</title>
        <meta name="description" content="Authentication error page" />
      </Head>
      <div className=&quot;min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4&quot;>
        <Card className=&quot;w-full max-w-md&quot;>
          <CardHeader className=&quot;space-y-1 text-center&quot;>
            <div className=&quot;mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20&quot;>
              <AlertTriangle className=&quot;h-6 w-6 text-red-600 dark:text-red-400&quot; />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl font-bold">Authentication Error</CardTitle>
            <p className="text-sm text-muted-foreground">
              There was an issue with your authentication request
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                This could be due to:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Invalid email or password</li>
                <li>• Account not verified</li>
                <li>• Network connectivity issues</li>
                <li>• Temporary service unavailability</li>
              </ul>
              <div className=&quot;pt-4 space-y-2&quot;>
                <Button asChild className=&quot;w-full&quot;>
                  <Link href=&quot;/auth/login&quot;>
              <div className="pt-4 space-y-2">
                <Button asChild className="w-full">
                  <Link href="/auth/login">
                    Try Again
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">
                    Go to Homepage
                  </Link>
                </Button>
              </div>
              <div className=&quot;text-center text-sm text-muted-foreground pt-4&quot;>
                Need help? <Link href=&quot;/contact&quot; className=&quot;hover:text-primary&quot;>Contact Support</Link>
              <div className="text-center text-sm text-muted-foreground pt-4">
                Need help? <Link href="/contact" className="hover:text-primary">Contact Support</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}

}
}
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
