
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

import { useLocation  } from 'react-router-dom';
import { useAuth  } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
// Analytics event types
export type AnalyticsEventType = any;

