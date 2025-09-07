import React, { useState, useEffect } from 'react';


import { FormField, FormItem, FormLabel, FormControl, FormMessage  } from '@/components/ui/form';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
import { Checkbox  } from '@/components/ui/checkbox';
import { cn  } from '@/lib/utils';
import React, { useState, useEffect } from 'react'
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'; import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
origin/cursor/automate-test-improve-and-merge-code-2533
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button';
interface ValidationRule {

  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;

