<<<<<<< HEAD
=======
import { z } from 'zod';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

<<<<<<< HEAD
import { z } from "zod";
export const basicInfoSchema = null;
=======
import {z} from "zod";
export const basicInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required");
  title: z.string().min(1, "Professional title is required");
  email: z.string().email("Invalid email address");
  phone: z.string().optional();
  location: z.string().optional();
  website: z.string().url().optional().or(z.literal(""));
  linkedin: z.string().optional();
  github: z.string().optional()
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
