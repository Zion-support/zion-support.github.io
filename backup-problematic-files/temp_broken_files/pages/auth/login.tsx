import { useRouter } from 'next/
import Link from 'next/
import Head from 'next/
import { signIn } from 'next-auth/
import { supabase } from '@/utils/supabase/
import type { AuthError, User, AuthChangeEvent, Session } from '@supabase/
import { logInfo, logWarn, logErrorToProduction } from '@/utils/
import { Button } from '@/components/ui/
import { Input } from '@/components/ui/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/