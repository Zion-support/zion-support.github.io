<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
'use client'
import React, { useEffect, useState } from 'react'
import {supabase} from '@/utils/supabase/client'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {User, LogOut, LogIn} from 'lucide-react'
import {useRouter} from 'next/navigation'
import type {
  User as SupabaseUser
  AuthChangeEvent
  Session
} from '@supabase/supabase-js'
interface UserProfileProps {
  onUserChange?: (user: SupabaseUser | null) => void
export default function UserProfile({ onUserChange }: UserProfileProps) {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() =></SupabaseUser> {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
      onUserChange?.(session?.user ?? null)
    }
    getInitialSession()
    // Listen for auth changes
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null)
        setLoading(false)
        onUserChange?.(session?.user ?? null)
      }
    )
    return () => subscription.unsubscribe()
  }, [onUserChange])
  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }
  const handleSignIn = () => {
    router.push('/auth/login')
  }
'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, LogOut, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { User as SupabaseUser, AuthChangeEvent, Session } from '@supabase/supabase-js';
interface UserProfileProps {;
  onUserChange?: (user: SupabaseUser | null) => void;
}
;
export default function UserProfile({ onUserChange }: UserProfileProps) {;
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {;
    // Get initial session;
    const getInitialSession = async () => {;
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
      onUserChange?.(session?.user ?? null);
    };

    getInitialSession();
    // Listen for auth changes;
    const { data: { subscription } } = supabase.auth.onAuthStateChange(;
      (event: AuthChangeEvent, session: Session | null) => {;
        setUser(session?.user ?? null);
        setLoading(false);
        onUserChange?.(session?.user ?? null),
      }
    );
    return () => subscription.unsubscribe();
  }, [onUserChange]);
  const handleSignOut = async () => {;
    await supabase.auth.signOut();
  };

  const handleSignIn = () => {
    router.push('/auth/login');
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (loading) {
    return (
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    )
  }
  if (!user) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Not Signed In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSignIn} className="w-full">
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </CardContent>
      </Card>
    )
<<<<<<< HEAD
=======
'use client'
import React, { useEffect, useState } from 'react'
import {supabase} from '@/utils/supabase/client'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {User, LogOut, LogIn} from 'lucide-react'
import {useRouter} from 'next/navigation'
========
'use client';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {supabase} from '@/utils / supabase / client';
import {Button} from '@/components / ui / button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Badge} from '@/components / ui / badge';
import {User, LogOut, LogIn} from 'lucide-react';
import {use_router} from 'next / navigation';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
import type {
  User as SupabaseUser,
  AuthChangeEvent,
  Session,
} from '@supabase / supabase - js';
interface UserProfileProps {
  onUserChange?: (user: SupabaseUser | null) => void,
export default /**
 * UserProfile - Function description
 */
function UserProfile() {
  const [user, set_user] = useState < SupabaseUser | null>(null);
  const [loading, set_loading] = useState (true);
  const router = use_router ();
  useEffect (() =></SupabaseUser> {
    // Get initial session;
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.get_session ();
      set_user (session?.user ?? null);
      set_loading (false);
      onUserChange?.(session?.user ?? null);
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
    }
    getInitialSession ();
    // Listen for auth changes;
    const {
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
      data: { subscription },
    } = supabase.auth.onAuthStateChange (
      (event: AuthChangeEvent, session: Session | null) => {
        set_user (session?.user ?? null);
        set_loading (false);
        onUserChange?.(session?.user ?? null),
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
      }
    );
    return () => subscription.unsubscribe ();
  }, [onUserChange]);
  const handleSignOut = async () => {
    await supabase.auth.sign_out ();
  }
  const handleSignIn = () =>: any {
    router.push ('/auth / login');
  }
>>>>>>>   if (loading) {
ursor/fix-website-loading-errors-and-merge-6662
}
    return (
      <Card className='w - full max - w-sm'>;
        <CardContent className='p - 6'>;
          <div className='animate - pulse space - y-4'>;
            <div className='h - 4 bg - muted rounded'></div>;
            <div className='h - 4 bg - muted rounded w - 3/4'></div>;
          </div>;
        </CardContent>;
      </Card>);
  }
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
'use client';
import React, { useEffect, useState } from 'react';
import {supabase} from '@/utils/supabase/client';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {User, LogOut, LogIn} from 'lucide-react';
import {useRouter} from 'next/navigation';
import type {;
  User as SupabaseUser,;
  AuthChangeEvent,;
  Session,;
} from '@supabase/supabase-js';
interface UserProfileProps {;
  onUserChange?: (user: SupabaseUser | null) => void,;
export default function UserProfile(): any ({ onUserChange }: UserProfileProps) {;
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() =></SupabaseUser> {;
    // Get initial session;
    const getInitialSession = async () => {;
      const {;
        data: { session },;
      } = await supabase && supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
      onUserChange?.(session?.user ?? null);
    };
    getInitialSession();
    // Listen for auth changes;
    const {;
      data: { subscription },;
    } = supabase && supabase.auth.onAuthStateChange(;
      (event: AuthChangeEvent, session: Session | null) => {;
        setUser(session?.user ?? null);
        setLoading(false);
        onUserChange?.(session?.user ?? null),;
      }
    );
    return () => subscription && subscription.unsubscribe();
  }, [onUserChange]);
  const handleSignOut = async () => {;
    await supabase && supabase.auth.signOut();
  };
  const handleSignIn = () => {;
    router && router.push('/auth/login');
  };
  if (loading) {;
    return (
      <Card className='w-full max-w-sm'>;
        <CardContent className='p-6'>;
          <div className='animate-pulse space-y-4'>;
            <div className='h-4 bg-muted rounded'></div>;
            <div className='h-4 bg-muted rounded w-3/4'></div>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx


>>>>>>>     return (
========
  if (!user) {;
    return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
      <Card className='w-full max-w-sm'>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <User className='h-5 w-5' />;
=======
;
import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, LogOut, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { User as SupabaseUser, AuthChangeEvent, Session } from '@supabase/supabase-js';
;
interface UserProfileProps {;
  onUserChange?:(user:SupabaseUser | null) => void;
}
;
export default function UserProfile({ onUserChange } UserProfileProps) {;
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
;
  useEffect(() => {;
    // Get initial session;
    const getInitialSession = async () => {;
      const { data:{ session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
      onUserChange?.(session?.user ?? null);
    }
;
    getInitialSession();
;
    // Listen for auth changes;
    const { data:{ subscription } } = supabase.auth.onAuthStateChange(;
      (event:AuthChangeEvent, session:Session | null) => {;
        setUser(session?.user ?? null);
        setLoading(false);
        onUserChange?.(session?.user ?? null);
      }
    );
;
    return () => subscription.unsubscribe();
  }, [onUserChange]);
;
  const handleSignOut = async () => {;
    await supabase.auth.signOut();
  }
;
  const handleSignIn = () => {;
    router.push('/auth/login');
  }
;
  if (loading) {;
    return (;
      <Card className="w-full max-w-sm">;
        <CardContent className="p-6">;
          <div className="animate-pulse space-y-4">;
            <div className="h-4 bg-muted rounded"></div>;
            <div className="h-4 bg-muted rounded w-3/4"></div>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
;
  if (!user) {;
    return (;
      <Card className="w-full max-w-sm">;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <User className="h-5 w-5" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Not Signed In;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
<<<<<<< HEAD
          <Button onClick={handleSignIn} className='w-full'>;
            <LogIn className='h-4 w-4 mr-2' />;
=======
          <Button onClick={handleSignIn} className="w-full">;
            <LogIn className="h-4 w-4 mr-2" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            Sign In;
          </Button>;
        </CardContent>;
      </Card>;
    );
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          User Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Email:</span>
            <span className="text-sm">{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            <Badge variant={user.email_confirmed_at ? "default" : "secondary"}>
              {user.email_confirmed_at ? "Verified" : "Unverified"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Joined:</span>
            <span className="text-sm">
              {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button onClick={handleSignOut} variant='outline' className='w-full'>
          <LogOut className='h-4 w-4 mr-2' />
          Sign Out
        </Button>;
      </CardContent>;
    </Card>;
  );
}
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
<<<<<<< HEAD
>>>>>>>           Sign Out
        </Button>
      </CardContent>
    </Card>
  )
  )
} 
>>>>>>> >>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          Sign Out
        </Button>
      </CardContent>
    </Card>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  )
} 

=======
========
  }
<<<<<<< HEAD
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
    <Card className='w-full max-w-sm'>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <User className='h-5 w-5' />;
          User Profile;
        </CardTitle>;
      </CardHeader>;
      <CardContent className='space-y-4'>;
        <div className='space-y-2'>;
          <div className='flex items-center gap-2'>;
            <span className='text-sm font-medium'>Email:</span>;
            <span className='text-sm'>{user && user.email}</span>;
          </div>;
          <div className='flex items-center gap-2'>;
            <span className='text-sm font-medium'>Status:</span>;
            <Badge variant={user && user.email_confirmed_at ? 'default' : 'secondary'}>;
              {user && user.email_confirmed_at ? 'Verified' : 'Unverified'}
            </Badge>;
          </div>;
          <div className='flex items-center gap-2'>;
            <span className='text-sm font-medium'>Joined:</span>;
            <span className='text-sm'>;
              {new Date(user && user.created_at).toLocaleDateString()}
            </span>;
          </div>;
        </div>;
        <Button onClick={handleSignOut} variant='outline' className='w-full'>;
          <LogOut className='h-4 w-4 mr-2' />;
=======
;
  return (;
    <Card className="w-full max-w-sm">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <User className="h-5 w-5" />;
          User Profile;
        </CardTitle>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="space-y-2">;
          <div className="flex items-center gap-2">;
            <span className="text-sm font-medium">Email:</span>;
            <span className="text-sm">{user.email}</span>;
          </div>;
          <div className="flex items-center gap-2">;
            <span className="text-sm font-medium">Status:</span>;
            <Badge variant={user.email_confirmed_at ? "default" :"secondary"}>;
              {user.email_confirmed_at ? "Verified" :"Unverified"}
            </Badge>;
          </div>;
          <div className="flex items-center gap-2">;
            <span className="text-sm font-medium">Joined:</span>;
            <span className="text-sm">;
              {new Date(user.created_at).toLocaleDateString()}
            </span>;
          </div>;
        </div>;
        ;
        <Button onClick={handleSignOut} variant="outline" className="w-full">;
          <LogOut className="h-4 w-4 mr-2" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          Sign Out;
        </Button>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx

  )
} 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className='w - full max - w-sm'>;
        <CardHeader>;
          <CardTitle className='flex items - center gap - 2'>;
            <User className='h - 5 w - 5' />;
            Not Signed In;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <Button on_click={handleSignIn} className='w - full'>;
            <LogIn className='h - 4 w - 4 mr - 2' />;
            Sign In;
          </Button>;
        </CardContent>;
      </Card>);
  }
  return (
    <Card className='w - full max - w-sm'>;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <User className='h - 5 w - 5' />;
          User Profile;
        </CardTitle>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        <div className='space - y-2'>;
          <div className='flex items - center gap - 2'>;
            <span className='text - sm font - medium'>Email:</span>;
            <span className='text - sm'>{user.email}</span>;
          </div>;
          <div className='flex items - center gap - 2'>;
            <span className='text - sm font - medium'>Status:</span>;
            <Badge variant={user.email_confirmed_at ? 'default' : 'secondary'}>;
              {user.email_confirmed_at ? 'Verified' : 'Unverified'}
            </Badge>;
          </div>;
          <div className='flex items - center gap - 2'>;
            <span className='text - sm font - medium'>Joined:</span>;
            <span className='text - sm'>;
              {new Date (user.created_at).toLocaleDateString ()}
            </span>;
          </div>;
        </div>;
        <Button on_click={handleSignOut} variant='outline' className='w - full'>;
          <LogOut className='h - 4 w - 4 mr - 2' />;
          Sign Out;
        </Button>;
      </CardContent>;
    </Card>);
<<<<<<<< HEAD:src/components/auth/UserProfile.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  );} 
'use client' import { ;
  {;
  React,  {;
  useEffect, useState ';
 } from "react";
import {;
  {;
  type {;
  User as SupabaseUser,  AuthChangeEvent, Session ';
}from '@supabase/supabase-js' interface UserProfileProps {;
  onUserChange?: (user: SupabaseUser | null) => void ;
}export default function UserProfile ({;
  onUserChange ;
}: UserProfileProps) {;
  const [user,  setUser] = useState<SupabaseUser | null> (null) const [loading, setLoading] = useState (true) const router = useRouter () useEffect ( () => {;
  //Get initial session const getInitialSession = async () => {;
  const {;
  data: {;
  session ;
}
}= await supabase.auth.getSession () setUser (session?.user ?? null) setLoading (false) onUserChange?. (session?.user ?? null) ;
}getInitialSession () //Listen for auth changes const {;
  data: {;
  subscription ;
}
}= supabase.auth.onAuthStateChange ( (event: AuthChangeEvent, session: Session | null) => {;
  setUser (session?.user ?? null) setLoading (false) onUserChange?. (session?.user ?? null) ;
}) return () => subscription.unsubscribe () ;
}, [onUserChange]) const handleSignOut = async () => {;
  await supabase.auth.signOut () ;
}const handleSignIn = () => {';
  router.push ('/auth/login') ;
}</div> </CardContent> </Card>) ;
}<CardHeader> <CardTitle className="flex items-center gap-2" > <User className="h-5 w-5" /> Not Signed In </CardTitle> </CardHeader> <CardContent> <Button onClick={;
  handleSignIn ";
}className="w-full" > <LogIn className="h-4 w-4 mr-2" /> Sign In </Button> </CardContent> </Card>) ";
}return (<Card className="w-full max-w-sm" > <CardHeader> <CardTitle className="flex items-center gap-2" > <User className="h-5 w-5" /> User Profile </CardTitle> </CardHeader> </span> </div> </div> Sign Out </Button> </CardContent> </Card>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/UserProfile.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  )
  )
} 
  )
} 
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
