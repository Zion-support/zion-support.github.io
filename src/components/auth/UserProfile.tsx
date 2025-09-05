'use client'

import React, {_useEffect, _useState} from 'react'
import type {_User as SupabaseUser, _AuthChangeEvent, _Session} from '@supabase/supabase-js'

interface UserProfileProps {_onUserChange?: (_user: SupabaseUser | null) => void}

export default function UserProfile(_{_onUserChange}: UserProfileProps) {_const [user, _setUser] = useState<SupabaseUser | null>(null)
  const [loading, _setLoading] = useState(true)
  const _router = useRouter()

  useEffect__(() => {
    // Get initial session
    const _getInitialSession = async () => {
      const { data: { session} } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
      onUserChange?.(session?.user ?? null)
    }

    getInitialSession()

    // Listen for auth changes
    const {_data: { subscription} } = supabase.auth.onAuthStateChange(_(event: AuthChangeEvent, _session: Session | null) => {_setUser(session?.user ?? null)
        setLoading(false)
        onUserChange?.(session?.user ?? null)}
    )

    return () => subscription.unsubscribe()
  }, [onUserChange])

  const _handleSignOut = async () => {_await supabase.auth.signOut()}

  const _handleSignIn = () => {_router.push('/auth/login')}

  if (loading) {_return (
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    )}

  if (!user) {_return (
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
            <span className="text-sm">{_user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            <Badge variant={_user.email_confirmed_at ? "default" : "secondary"}>
              {_user.email_confirmed_at ? "Verified" : "Unverified"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Joined:</span>
            <span className="text-sm">
              {_new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <Button onClick={_handleSignOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  )
} 