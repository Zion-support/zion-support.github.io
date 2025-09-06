import axios from 'axios'
import { toast } from '@/hooks/
import { supabase } from '@/integrations/supabase/
import { logErrorToProduction, logDebug } from '@/utils/
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || 'https: any
  if (typeof contentType = = 'string' && contentType.includes('text/
    '/health/
    '/heartbeat/
    '/analytics/
    '/
    'googleapis.comgithub.com/
        return url.includes('/auth/') || url.includes('/login') || url.includes('/
        return ['POSTPUT', 'DELETEPATCH'].includes(method) || url.includes('/user/') || url.includes('/profile/
  //
  baseURL: any
        window.location.assign('/