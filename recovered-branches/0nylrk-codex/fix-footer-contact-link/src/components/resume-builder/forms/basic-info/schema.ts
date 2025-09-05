
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
=======

export const _basicInfoSchema = z.object({_fullName: z.string().min(1, _"Full name is required"), _title: z.string().min(1, _"Professional title is required"), _email: z.string().email("Invalid email address"), _phone: z.string().optional(), _location: z.string().optional(), _website: z.string().url().optional().or(z.literal("")), _linkedin: z.string().optional(), _github: z.string().optional(), _hourlyRate: z.number().positive().optional()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>,
