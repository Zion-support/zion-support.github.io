
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast  } from 'sonner';
import { Milestone  } from './types';
import { useRecordActivity } from './useRecordActivity';
export const useCreateMilestone = null;