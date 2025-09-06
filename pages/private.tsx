import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import { createServerSideClient } from '../src/utils/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar, Shield } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import type { User as SupabaseUser } from '@supabase/supabase-js';

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export default function PrivatePage({ user }: PrivatePageProps) {
  return (
    <>
      <Head>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Private User Profile
            </CardTitle>
            <p className="text-muted-foreground">
              This page is only accessible to authenticated users
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold">User Information</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{user.email}</span>
                    <Badge variant={user.email_confirmed_at ? "default" : "secondary"}>
                      {user.email_confirmed_at ? "Verified" : "Unverified"  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      Joined {new Date(user.created_at).toLocaleDateString()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">User ID: </span>
                    <code className="px-2 py-1 bg-muted rounded text-xs font-mono">
                      {user.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
                <div>
                  <span className="font-medium">App Metadata: </span>
                  <code className="text-xs">
                    {JSON.stringify(user.app_metadata, null, 2)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </code>
                </div>
              </div>
            </div>

              <Button asChild>
                <Link href="/dashboard">
                  Go to Dashboard
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
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

