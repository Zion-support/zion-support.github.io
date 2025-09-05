
import { z } from &quot;zod&quot;;

export const basicInfoSchema = z.object({
  fullName: z.string().min(1, &quot;Full name is required&quot;),
  title: z.string().min(1, &quot;Professional title is required&quot;),
  email: z.string().email(&quot;Invalid email address&quot;),
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()});

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
