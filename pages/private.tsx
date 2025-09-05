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
<<<<<<< HEAD
              <div className=&quot;flex-1 space-y-2&quot;>
                <h3 className=&quot;text-lg font-semibold&quot;>User Information</h3>
                <div className=&quot;grid gap-3&quot;>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Mail className=&quot;h-4 w-4 text-muted-foreground&quot; />
                    <span className=&quot;text-sm&quot;>{user.email}</span>
                    <Badge variant={user.email_confirmed_at ? &quot;default&quot; : &quot;secondary&quot;}>
                      {user.email_confirmed_at ? &quot;Verified&quot; : &quot;Unverified&quot;}
                    </Badge>
                  </div>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Calendar className=&quot;h-4 w-4 text-muted-foreground&quot; />
                    <span className=&quot;text-sm&quot;>
                      Joined {new Date(user.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <span className=&quot;text-sm&quot;>User ID: </span>
                    <code className=&quot;px-2 py-1 bg-muted rounded text-xs font-mono&quot;>
                      {user.id}
=======
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold">User Information</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.email}</span>
                    <Badge variant={_user.email_confirmed_at ? "default" : "secondary"}>
                      {_user.email_confirmed_at ? "Verified" : "Unverified"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      Joined {_new Date(user.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">User ID: </span>
                    <code className="px-2 py-1 bg-muted rounded text-xs font-mono">
                      {_user.id}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className=&quot;p-4 bg-muted/50 rounded-lg&quot;>
              <h4 className=&quot;font-medium mb-2&quot;>Authentication Details</h4>
              <div className=&quot;grid gap-2 text-sm&quot;>
                <div>
<<<<<<< HEAD
                  <span className=&quot;font-medium&quot;>Last Sign In: </span>
                  {user.last_sign_in_at 
=======
                  <span className="font-medium">Last Sign In: </span>
                  {_user.last_sign_in_at 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ? new Date(user.last_sign_in_at).toLocaleString()
                    : 'Never'}
                </div>
                <div>
<<<<<<< HEAD
                  <span className=&quot;font-medium&quot;>App Metadata: </span>
                  <code className=&quot;text-xs&quot;>
                    {JSON.stringify(user.app_metadata, null, 2)}
=======
                  <span className="font-medium">App Metadata: </span>
                  <code className="text-xs">
                    {_JSON.stringify(user.app_metadata, _null, _2)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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