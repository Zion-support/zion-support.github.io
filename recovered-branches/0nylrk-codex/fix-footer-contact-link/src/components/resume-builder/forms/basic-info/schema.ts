<<<<<<< HEAD
import { z } from 'zod';

export const basicInfoSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  title: z.string().min(1, 'Professional title is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional(),
});

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
=======
 export const basicInfoSchema = z.object ({
  fullName: z.string () .min (1, "Full name is required");
title: z.string () .min (1, "Professional title is required");
email: z.string () .email ("Invalid email address");
phone: z.string () .optional ();
location: z.string () .optional ();
website: z.string () .url () .optional () .or (z.literal ("") );
linkedin: z.string () .optional ();
github: z.string () .optional ();
hourlyRate: z.number () .positive () .optional () 
});
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
