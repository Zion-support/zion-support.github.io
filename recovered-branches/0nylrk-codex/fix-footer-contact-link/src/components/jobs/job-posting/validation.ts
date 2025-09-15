
import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(3, {
<<<<<<< HEAD
    message: "Title must be at least 3 characters."}),
  company: z.string().min(3, {
    message: "Company name must be at least 3 characters."}),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters."}),
  job_type: z.string().min(3, {
    message: "Job type must be at least 3 characters."}),
  salary_range: z.string().optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters."}),
=======
    message: "Title must be at least 3 characters.",
  }),
  company: z.string().min(3, {
    message: "Company name must be at least 3 characters.",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters.",
  }),
  job_type: z.string().min(3, {
    message: "Job type must be at least 3 characters.",
  }),
  salary_range: z.string().optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
>>>>>>> origin/auto/autonomy-17186719616
  responsibilities: z.string().optional(),
  qualifications: z.string().optional(),
  benefits: z.string().optional(),
  application_instructions: z.string().optional(),
  contact_email: z.string().email({
<<<<<<< HEAD
    message: "Please enter a valid email address."}).optional(),
=======
    message: "Please enter a valid email address.",
  }).optional(),
>>>>>>> origin/auto/autonomy-17186719616
  published_date: z.string().optional(),
  expiry_date: z.string().optional(),
  is_remote: z.boolean().default(false).optional(),
  category: z.string().optional(),
  status: z.string().optional(),
  external_apply_link: z.string().url({
<<<<<<< HEAD
    message: "Please enter a valid URL."}).optional()});
=======
    message: "Please enter a valid URL.",
  }).optional(),
});
>>>>>>> origin/auto/autonomy-17186719616

export type JobSchemaType = z.infer<typeof jobSchema>;
