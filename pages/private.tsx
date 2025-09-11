import Link from 'next / link';
import Head from 'next / head';
import type { User as SupabaseUser } from '@supabase / supabase - js';
interface PrivatePageProps {
  user: SupabaseUser;

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import { createServerSideClient } from '../src/utils/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Calendar, Shield } from 'lucide-react';
=======import Link from 'next/link';
import Head from 'next/head';
import type { User as SupabaseUser } from '@supabase/supabase-js';
interface PrivatePageProps {user: SupabaseUser;
interface PrivatePageProps {;
  user: SupabaseUser;
interface PrivatePageProps {;
  user: SupabaseUser;=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export default /**
 * PrivatePage - Function description
 */
function PrivatePage() {
  return (
=======
    <>
      <Head>
        <title>Private Profile - Zion Tech Marketplace</title>;
        <meta name=&quot;description&quot; content=&quot;Private user profile page&quot; />
      </Head>
      <div className=&quot;container max-w-4xl mx-auto py-8&quot;>        <title>Private Profile - Zion Tech Marketplace</title>
        <meta name="description" content="Private user profile page" />
      </Head>




=======
=======
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Authentication Details</h4>
              <div className="grid gap-2 text-sm">                <div>
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
            <div className="flex gap-2">


=======
            <div className=&quot;flex gap-2&quot;>
            <div className="flex gap-2">
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

      user: data.user}}
}
=======
=======
      user: data.user}}
}
=======


=======
} ;
} ;
} ;
=======


} ;>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


} ;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
