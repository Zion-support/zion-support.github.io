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
    }
;
    getInitialSession();
    // Listen for auth changes;
    const { data: { subscription } } = supabase.auth.onAuthStateChange(;
      (event: AuthChangeEvent, session: Session | null) => {;
        setUser(session?.user ?? null);
        setLoading(false);
        onUserChange?.(session?.user ?? null);
      }
    );
    return () => subscription.unsubscribe();
  }, [onUserChange]);
  const handleSignOut = async () => {;
    await supabase.auth.signOut();
  }
;
  const handleSignIn = () => {;
    router.push('/auth/login');
  }
<<<<<<< HEAD

  if (loading) {
    return (
      <Card className=&quot;w-full max-w-sm&quot;>
        <CardContent className=&quot;p-6&quot;>
          <div className=&quot;animate-pulse space-y-4&quot;>
            <div className=&quot;h-4 bg-muted rounded&quot;></div>
            <div className=&quot;h-4 bg-muted rounded w-3/4&quot;></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!user) {
    return (
      <Card className=&quot;w-full max-w-sm&quot;>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <User className=&quot;h-5 w-5&quot; />
            Not Signed In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSignIn} className=&quot;w-full&quot;>
            <LogIn className=&quot;h-4 w-4 mr-2&quot; />
            Sign In
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className=&quot;w-full max-w-sm&quot;>
      <CardHeader>
        <CardTitle className=&quot;flex items-center gap-2&quot;>
          <User className=&quot;h-5 w-5&quot; />
          User Profile
        </CardTitle>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        <div className=&quot;space-y-2&quot;>
          <div className=&quot;flex items-center gap-2&quot;>
            <span className=&quot;text-sm font-medium&quot;>Email:</span>
            <span className=&quot;text-sm&quot;>{user.email}</span>
          </div>
          <div className=&quot;flex items-center gap-2&quot;>
            <span className=&quot;text-sm font-medium&quot;>Status:</span>
            <Badge variant={user.email_confirmed_at ? &quot;default&quot; : &quot;secondary&quot;}>
              {user.email_confirmed_at ? &quot;Verified&quot; : &quot;Unverified&quot;}
            </Badge>
          </div>
          <div className=&quot;flex items-center gap-2&quot;>
            <span className=&quot;text-sm font-medium&quot;>Joined:</span>
            <span className=&quot;text-sm&quot;>
              {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <Button onClick={handleSignOut} variant=&quot;outline&quot; className=&quot;w-full&quot;>
          <LogOut className=&quot;h-4 w-4 mr-2&quot; />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  )
} 
=======
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
            Not Signed In;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;
          <Button onClick={handleSignIn} className="w-full">;
            <LogIn className="h-4 w-4 mr-2" />;
            Sign In;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }
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
            <Badge variant={user.email_confirmed_at ? "default" : "secondary"}>;
              {user.email_confirmed_at ? "Verified" : "Unverified"}
            </Badge>;
          </div>;
          <div className="flex items-center gap-2">;
            <span className="text-sm font-medium">Joined:</span>;
            <span className="text-sm">;
              {new Date(user.created_at).toLocaleDateString()}
            </span>;
          </div>;
        </div>;
        <Button onClick={handleSignOut} variant="outline" className="w-full">;
          <LogOut className="h-4 w-4 mr-2" />;
          Sign Out;
        </Button>;
      </CardContent>;
    </Card>;
  );
} ;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
