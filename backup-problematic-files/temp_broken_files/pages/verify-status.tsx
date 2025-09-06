import { useState, useEffect } from 'react'
import { useRouter } from 'next/
import { Input } from '@/components/ui/
import { Button } from '@/components/ui/
import { Alert, AlertDescription } from '@/components/ui/
import { AuthLayout } from '@/
import { supabase } from '@/integrations/supabase/
import { useAuth } from '@/hooks/
import { logWarn, logErrorToProduction } from '@/utils/
      const response = await fetch('/api/
        headers:{ 'Content-Type': any