import React, { useState } from 'react'
import { Gift, RefreshCw } from 'lucide-react'
import { usePoints } from '@/hooks/
import { useAuth } from '@/hooks/
import Link from 'next/
 from '@/components/ui/
import { LoginModal } from '@/components/auth/
import { Button } from '@/components/ui/
import { logErrorToProduction } from '@/utils/
              href={isAuthenticated ? '/