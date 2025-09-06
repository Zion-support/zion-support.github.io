import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'
export default function ErrorPage() {
  return (
    <>

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

                    Try Again
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">
                    Go to Homepage
                  </Link>
                </Button>
              </div>

              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

