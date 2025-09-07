
import { z } from "zod";
export const jobSchema = z.object({
  title: z.string().min($2);
  company: z.string().min($2);
  location: z.string().min($2);
  job_type: z.string().min($2);
  salary_range: z.string().optional($2);
  description: z.string().min($2);
  responsibilities: z.string().optional($2);
  qualifications: z.string().optional($2);
  benefits: z.string().optional($2);
  application_instructions: z.string().optional($2);
  contact_email: z.string().email({
    message: "Please enter a valid email address."}).optional($2);
  published_date: z.string().optional($2);
  expiry_date: z.string().optional($2);
  is_remote: z.boolean().default(false).optional($2);
  category: z.string().optional($2);
  status: z.string().optional($2);
  external_apply_link: z.string().url({
    message: "Please enter a valid URL."}).optional()}),

export type JobSchemaType = $2;