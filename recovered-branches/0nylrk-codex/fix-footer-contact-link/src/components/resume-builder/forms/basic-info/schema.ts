
import { z } from "zod";
export const basicInfoSchema = z.object({
  fullName: z.string().min($2);
  title: z.string().min($2);
  email: z.string().email($2);
  phone: z.string().optional($2);
  location: z.string().optional($2);
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional($2);
  github: z.string().optional($2);
  hourlyRate: z.number().positive().optional()}),

export type BasicInfoFormData = $2;