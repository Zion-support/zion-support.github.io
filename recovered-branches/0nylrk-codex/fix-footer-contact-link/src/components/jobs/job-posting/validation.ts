
<<<<<<< HEAD
import { z } from "zod",;
;
export const jobSchema = z.object({;
  title:z.string().min(3, {;
    message:"Title must be at least 3 characters."}),;
  company:z.string().min(3, {;
    message:"Company name must be at least 3 characters."}),;
  location:z.string().min(3, {;
    message:"Location must be at least 3 characters."}),;
  job_type:z.string().min(3, {;
    message:"Job type must be at least 3 characters."}),;
  salary_range:z.string().optional(),;
  description:z.string().min(10, {;
    message:"Description must be at least 10 characters."}),;
  responsibilities:z.string().optional(),;
  qualifications:z.string().optional(),;
  benefits:z.string().optional(),;
  application_instructions:z.string().optional(),;
  contact_email:z.string().email({;
    message:"Please enter a valid email address."}).optional(),;
  published_date:z.string().optional(),;
  expiry_date:z.string().optional(),;
  is_remote:z.boolean().default(false).optional(),;
  category:z.string().optional(),;
  status:z.string().optional(),;
  external_apply_link:z.string().url({;
    message:"Please enter a valid URL."}).optional()}),;
;
export type JobSchemaType = z.infer<typeof jobSchema>,;
=======
import { z } from "zod",export const jobSchema = z.object({
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

export const _jobSchema = z.object({_title: z.string().min(3, _{
    message: "Title must be at least 3 characters."}),
  company: z.string().min(3, {_message: "Company name must be at least 3 characters."}),
  location: z.string().min(3, {_message: "Location must be at least 3 characters."}),
  job_type: z.string().min(3, {_message: "Job type must be at least 3 characters."}),
  salary_range: z.string().optional(),
  description: z.string().min(10, {_message: "Description must be at least 10 characters."}),
  responsibilities: z.string().optional(),
  qualifications: z.string().optional(),
  benefits: z.string().optional(),
  application_instructions: z.string().optional(),
  contact_email: z.string().email({
    message: &quot;Please enter a valid email address.&quot;}).optional(),  published_date: z.string().optional(),
  expiry_date: z.string().optional(),
  is_remote: z.boolean().default(false).optional(),
  category: z.string().optional(),
  status: z.string().optional(),
  external_apply_link: z.string().url({
    message: "Please enter a valid URL."}).optional()}),  external_apply_link: z.string().url({_message: "Please enter a valid window.URL."}).optional()});

export type JobSchemaType = z.infer<typeof jobSchema>,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
