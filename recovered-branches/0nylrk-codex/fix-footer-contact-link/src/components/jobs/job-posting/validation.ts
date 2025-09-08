



import { z } from "zod",
export const jobSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters."}),

  job_type: z.string().min(3, {





