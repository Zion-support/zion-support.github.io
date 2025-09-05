
<<<<<<< HEAD
<<<<<<< HEAD
import { z } from "zod",
=======
import { z } from &quot;zod&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const basicInfoSchema = z.object({
  fullName: z.string().min(1, &quot;Full name is required&quot;),
  title: z.string().min(1, &quot;Professional title is required&quot;),
  email: z.string().email(&quot;Invalid email address&quot;),
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>,
=======
import { z } from "zod",;
export const basicInfoSchema = z.object({;
  fullName: z.string().min(1, "Full name is required"),;
  title: z.string().min(1, "Professional title is required"),;
  email: z.string().email("Invalid email address"),;
  phone: z.string().optional(),;
  location: z.string().optional(),;
  website: z.string().url().optional().or(z.literal("")),;
  linkedin: z.string().optional(),;
  github: z.string().optional(),;
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
