import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { Textarea  } from '@/components/ui/textarea';
import { Input  } from '@/components/ui/input';
import { Checkbox  } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { WorkExperience  } from '@/types/resume';
const workExperienceSchema = null;
                      location: ''})
