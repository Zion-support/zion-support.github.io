'use client';
import React { useEffect useState } from 'react'
import { supabase } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, LogOut, LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type {
  User as SupabaseUser,
AuthChangeEvent
