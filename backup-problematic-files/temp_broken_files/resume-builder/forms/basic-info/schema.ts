
import { z } from "zod";
;
export const basicInfoSchema = z.object({;
  fullName:z.string().min(1, "Full name is required");
  title:z.string().min(1, "Professional title is required");
  email:z.string().email("Invalid email address");
  phone:z.string().optional();
  location:z.string().optional();
  website:z.string().url().optional().or(z.literal(""));
  linkedin:z.string().optional();
  github:z.string().optional();
  hourlyRate:z.number().positive().optional()});
;
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>; export const basicInfoSchema = z.object ({
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
