
import { z } from "zod";

export const basicInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Professional title is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional(),
  github: z.string().optional(),
<<<<<<< HEAD
  hourlyRate: z.number().positive().optional(),
});
=======
  hourlyRate: z.number().positive().optional()});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
