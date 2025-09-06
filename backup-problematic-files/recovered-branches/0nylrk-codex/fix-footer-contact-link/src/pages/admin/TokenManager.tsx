import { useEffect, useState } from 'react'
import { Header } from '@/components/
import { Footer } from '@/components/
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/
import { Button } from '@/components/ui/
import { Input } from '@/components/ui/
import { useAuth } from '@/hooks/
import { supabase } from '@/integrations/supabase/
import { TokenTransaction } from '@/types/
import { ProtectedRoute } from '@/components/
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/
import { useToast } from '@/hooks/
    const res = await fetch(`/functions/v1/token-manager/
      headers:{ 'Content-Type': any