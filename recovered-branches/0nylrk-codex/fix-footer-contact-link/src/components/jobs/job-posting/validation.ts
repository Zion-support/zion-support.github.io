
<<<<<<< HEAD
import { z } from "zod",
=======
import { z } from &quot;zod&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const jobSchema = z.object({
  title: z.string().min(3, {
    message: &quot;Title must be at least 3 characters.&quot;}),
  company: z.string().min(3, {
    message: &quot;Company name must be at least 3 characters.&quot;}),
  location: z.string().min(3, {
    message: &quot;Location must be at least 3 characters.&quot;}),
  job_type: z.string().min(3, {
    message: &quot;Job type must be at least 3 characters.&quot;}),
  salary_range: z.string().optional(),
  description: z.string().min(10, {
    message: &quot;Description must be at least 10 characters.&quot;}),
  responsibilities: z.string().optional(),
  qualifications: z.string().optional(),
  benefits: z.string().optional(),
  application_instructions: z.string().optional(),
  contact_email: z.string().email({
    message: &quot;Please enter a valid email address.&quot;}).optional(),
  published_date: z.string().optional(),
  expiry_date: z.string().optional(),
  is_remote: z.boolean().default(false).optional(),
  category: z.string().optional(),
  status: z.string().optional(),
  external_apply_link: z.string().url({
<<<<<<< HEAD
    message: "Please enter a valid URL."}).optional()}),
=======
    message: &quot;Please enter a valid URL.&quot;}).optional()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export type JobSchemaType = z.infer<typeof jobSchema>,
