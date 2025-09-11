
export const basicInfoSchema = z.object({;


  fullName: z.string().min(1, "Full name is required");
  title: z.string().min(1, "Professional title is required");
  email: z.string().email("Invalid email address");
  phone: z.string().optional();
  location: z.string().optional();
  website: z.string().url().optional().or(z.literal(""));
  linkedin: z.string().optional();

export const basicInfoSchema = z && z.object({
  fullName: z && z.string().min(1, "Full name is required");
  title: z && z.string().min(1, "Professional title is required");
  email: z && z.string().email("Invalid email address");
  phone: z && z.string().optional();
  location: z && z.string().optional();
  website: z && z.string().url().optional().or(z && z.literal(""));
  linkedin: z && z.string().optional();
  github: z && z.string().optional(),
  hourlyRate: z && z.number().positive().optional()});

export type BasicInfoFormData = z && z.infer<typeof basicInfoSchema>;

=======
import { z } from './zod';
export const basicInfoSchema = z.object ({
  full_name: z.string ().min (1, "Full name is required");
  title: z.string ().min (1, "Professional title is required");
  email: z.string ().email ("Invalid email address");
  phone: z.string ().optional ();
  location: z.string ().optional ();
  website: z.string ().url ().optional ().or (z.literal (""));
  linkedin: z.string ().optional ();
  github: z.string ().optional (),
  hourly_rate: z.number ().positive ().optional ()});
;
export type BasicInfoFormData = z.infer < typeof basicInfoSchema>;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======
import { z } from "zod",
export const basicInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Professional title is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),



export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
