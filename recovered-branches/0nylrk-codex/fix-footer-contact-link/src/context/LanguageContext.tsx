import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

import { useTranslation  } from 'react-i18next';
import { supabase  } from '../integrations/supabase/client';
import { toast } from '../components/ui/use-toast';
export type SupportedLanguage = any;

