import Link from 'next/link'
import Head from 'next/head'
import type {_User as SupabaseUser} from '@supabase/supabase-js'

interface PrivatePageProps {_user: SupabaseUser}

export default function PrivatePage(_{_user}: PrivatePageProps) {_return (
    <>
      <Head>
        <title>Private Profile - Zion Tech Marketplace</title>
        <meta name=&quot;description&quot; content=&quot;Private user profile page&quot; />
      </Head>
      
      <div className=&quot;container max-w-4xl mx-auto py-8&quot;>
        <Card>
          <CardHeader>
            <CardTitle className=&quot;flex items-center gap-2&quot;>
              <Shield className=&quot;h-5 w-5&quot; />
              Private User Profile
            </CardTitle>
            <p className=&quot;text-muted-foreground&quot;>
              This page is only accessible to authenticated users
            </p>
          </CardHeader>
          <CardContent className=&quot;space-y-6&quot;>
            <div className=&quot;flex items-start gap-4&quot;>
              <div className=&quot;p-3 rounded-full bg-blue-100 dark:bg-blue-900/20&quot;>
                <User className=&quot;h-6 w-6 text-blue-600 dark:text-blue-400&quot; />
              </div>
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className=&quot;p-4 bg-muted/50 rounded-lg&quot;>
              <h4 className=&quot;font-medium mb-2&quot;>Authentication Details</h4>
              <div className=&quot;grid gap-2 text-sm&quot;>
                <div>
                    ? new Date(user.last_sign_in_at).toLocaleString()
                    : 'Never'}
                </div>
                <div>
                  </code>
                </div>
              </div>
            </div>

            <div className=&quot;flex gap-2&quot;>
              <Button asChild>
                <Link href=&quot;/dashboard&quot;>
                  Go to Dashboard
                </Link>
              </Button>
              <Button asChild variant=&quot;outline&quot;>
                <Link href=&quot;/&quot;>
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (_context: GetServerSidePropsContext) => {_const _supabase = createServerSideClient(context)

  const { data, _error} = await supabase.auth.getUser()

  if (error || !data?.user) {_return {
      redirect: {
        destination: '/auth/login', _permanent: false}}
  }

  return {_props: {
      user: data.user}}
} 