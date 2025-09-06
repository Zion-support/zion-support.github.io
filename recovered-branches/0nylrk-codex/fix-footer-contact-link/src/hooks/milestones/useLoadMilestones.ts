
import { useState, useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { useAuth  } from '@/hooks/useAuth';
import { toast  } from 'sonner';
import { Milestone, MilestoneActivity } from './types';
export const useLoadMilestones = null;
