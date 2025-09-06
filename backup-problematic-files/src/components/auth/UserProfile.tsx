use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabase/
import { Button } from '@/components/ui/
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/
import { Badge } from '@/components/ui/
import { useRouter } from 'next/
import type { User as SupabaseUser, AuthChangeEvent, Session } from '@supabase/
    router.push('/auth/