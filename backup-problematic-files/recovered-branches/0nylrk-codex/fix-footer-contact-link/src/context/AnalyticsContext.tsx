
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/
import { supabase } from '@/integrations/supabase/
  //
; //
  //
/Cast is used here because the context default is undefined until provided //