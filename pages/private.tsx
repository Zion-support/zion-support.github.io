import { GetServerSideProps, GetServerSidePropsContext } from 'next / types';
import { createServerSideClient } from '../src / utils / supabase / server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { User, Mail, Calendar, Shield } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import type { User as SupabaseUser } from '@supabase/supabase-js';

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export default /**
 * PrivatePage - Function description
 */
function PrivatePage() {
  return (
    <>
      <Head>

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
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Authentication Details</h4>
              <div className="grid gap-2 text-sm">

                <div>
                  <span className="font-medium">Last Sign In: </span>

                  {user.last_sign_in_at
                    ? new Date(user.last_sign_in_at).toLocaleString()
                    : 'Never'
                  }
                </div>
                <div>
                  <span className=&quot;font-medium&quot;>App Metadata: </span>
                  <code className=&quot;text-xs&quot;>
                    {JSON.stringify(user.app_metadata, null, 2)}
                  </code>
                </div>
              </div>
            </div>

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

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {;
  const supabase = createServerSideClient(context);
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {;
    return {;
      redirect: {;
        destination: '/auth/login';
        permanent: false}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return {;
    props: {;
      user: data.user}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

} ;

