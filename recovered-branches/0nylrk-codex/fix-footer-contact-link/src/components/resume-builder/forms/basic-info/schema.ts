import { z } from "zod";";
export const basicInfoSchema = z.object({
  // TODO: Add properties
}
  // TODO: Add properties
}
  fullName: z.string().min(1, "),"
  title: z.string().min(1, "),"
  email: z.string().email("),"
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal(")),"
  linkedin: z.string().optional(),
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()})
  hourlyRate: z.number().positive().optional(),
});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;