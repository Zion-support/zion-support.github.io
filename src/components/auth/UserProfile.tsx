'use client';
<<<<<<< HEAD
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
=======

import React, { useEffect, useState } from 'react';
import {supabase} from '@/utils/supabase/client';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {User, LogOut, LogIn} from 'lucide-react';
import {useRouter} from 'next/navigation';
import type {
  User as SupabaseUser,
  AuthChangeEvent,
  Session,;
} from '@supabase/supabase-js';

interface UserProfileProps {
  onUserChange?: (user: SupabaseUser | null) => void,

export default function UserProfile({ onUserChange }: UserProfileProps) {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() =></SupabaseUser> {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
>>>>>>> main
      setUser(session?.user ?? null);
      setLoading(false);
      onUserChange?.(session?.user ?? null);
    };

    getInitialSession();
<<<<<<< HEAD
    // Listen for auth changes;
    const { data: { subscription } } = supabase.auth.onAuthStateChange(;
      (event: AuthChangeEvent, session: Session | null) => {;
=======

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
>>>>>>> main
        setUser(session?.user ?? null);
        setLoading(false);
        onUserChange?.(session?.user ?? null),
      }
    );
<<<<<<< HEAD
    return () => subscription.unsubscribe();
  }, [onUserChange]);
  const handleSignOut = async () => {;
=======

    return () => subscription.unsubscribe();
  }, [onUserChange]);

  const handleSignOut = async () => {
>>>>>>> main
    await supabase.auth.signOut();
  };

  const handleSignIn = () => {
    router.push('/auth/login');
<<<<<<< HEAD
  }

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
=======
  };

  if (loading) {
    return (
      <Card className='w-full max-w-sm'>
        <CardContent className='p-6'>
          <div className='animate-pulse space-y-4'>
            <div className='h-4 bg-muted rounded'></div>
            <div className='h-4 bg-muted rounded w-3/4'></div>
          </div>
        </CardContent>
      </Card>
    );
>>>>>>> main
  }

  if (!user) {
    return (
<<<<<<< HEAD
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
=======
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <User className='h-5 w-5' />
>>>>>>> main
            Not Signed In
          </CardTitle>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <Button onClick={handleSignIn} className="w-full">
            <LogIn className="h-4 w-4 mr-2" />
=======
          <Button onClick={handleSignIn} className='w-full'>
            <LogIn className='h-4 w-4 mr-2' />
>>>>>>> main
            Sign In
          </Button>
        </CardContent>
      </Card>
<<<<<<< HEAD
    )
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
=======
    );
  }

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <User className='h-5 w-5' />
          User Profile
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-medium'>Email:</span>
            <span className='text-sm'>{user.email}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-medium'>Status:</span>
            <Badge variant={user.email_confirmed_at ? 'default' : 'secondary'}>
              {user.email_confirmed_at ? 'Verified' : 'Unverified'}
            </Badge>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-medium'>Joined:</span>
            <span className='text-sm'>
>>>>>>> main
              {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
<<<<<<< HEAD
        
        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
=======

        <Button onClick={handleSignOut} variant='outline' className='w-full'>
          <LogOut className='h-4 w-4 mr-2' />
>>>>>>> main
          Sign Out
        </Button>
      </CardContent>
    </Card>
<<<<<<< HEAD
  )
} 
=======
  );
>>>>>>> main
