
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router', // Changed from useParams
import { supabase  } from '@/integrations/supabase/client';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel', // Re-use the preview panel
import { Button  } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'

import Link from 'next/link', // For a back button, changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger';
// Placeholder for user context/role checking
// In a real app, this would come from an auth context

