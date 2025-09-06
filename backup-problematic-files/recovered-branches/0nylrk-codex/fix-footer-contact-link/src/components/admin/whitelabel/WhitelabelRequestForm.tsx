
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/
import { Input } from '@/components/ui/
import { Button } from '@/components/ui/
import { Textarea } from '@/components/ui/
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/
import { toast } from '@/hooks/
import { supabase } from '@/integrations/supabase/
    .regex(/^[a-z0-9-]+$/
  primary_color:z.string().regex(/^#([0-9A-F]{6})$/