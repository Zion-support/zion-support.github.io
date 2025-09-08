export const basicInfoSchema = z.object({;



  linkedin: z.string().optional();
export type BasicInfoFormData = z && z.infer<typeof basicInfoSchema>;

import { z } from './zod';



