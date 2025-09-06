import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'
export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Authentication Error - Zion Tech Marketplace</title>
        <meta name="description" content="Authentication error page" />
      </Head>
<<<<<<< HEAD
      <div className=&quot;min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4&quot;>
        <Card className=&quot;w-full max-w-md&quot;>
          <CardHeader className=&quot;space-y-1 text-center&quot;>
            <div className=&quot;mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20&quot;>
              <AlertTriangle className=&quot;h-6 w-6 text-red-600 dark:text-red-400&quot; />
=======
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
              <div className=&quot;pt-4 space-y-2&quot;>
                <Button asChild className=&quot;w-full&quot;>
                  <Link href=&quot;/auth/login&quot;>
=======
              <div className="pt-4 space-y-2">
                <Button asChild className="w-full">
                  <Link href="/auth/login">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                    Try Again
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">
                    Go to Homepage
                  </Link>
                </Button>
              </div>
<<<<<<< HEAD
              <div className=&quot;text-center text-sm text-muted-foreground pt-4&quot;>
                Need help? <Link href=&quot;/contact&quot; className=&quot;hover:text-primary&quot;>Contact Support</Link>
=======
              <div className="text-center text-sm text-muted-foreground pt-4">
                Need help? <Link href="/contact" className="hover:text-primary">Contact Support</Link>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}