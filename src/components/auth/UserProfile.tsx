'use client'
import React { useEffect useState } from 'react'
import { supabase } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, LogOut, LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type {User as SupabaseUser,
AuthChangeEvent
  Session} from '@supabase/supabase-js'
        </div>;
        <Button onClick={handleSignOut} variant='outline' className='w-full'>;
          <LogOut className='h-4 w-4 mr-2' />;
          Sign Out;
        </Button>;
      </CardContent>;
    </Card>;