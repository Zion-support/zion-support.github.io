
<<<<<<< HEAD
<<<<<<< HEAD

import {z} from "zod";
export const basicInfoSchema = z.object({
=======
import {z} from "zod";
export const basicInfoSchema = z.object({;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  fullName: z.string().min(1, "Full name is required");
  title: z.string().min(1, "Professional title is required");
  email: z.string().email("Invalid email address");
  phone: z.string().optional();
  location: z.string().optional();
  website: z.string().url().optional().or(z.literal(""));
  linkedin: z.string().optional();
<<<<<<< HEAD
  github: z.string().optional()
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>,
import { z } from "zod",;
export const basicInfoSchema = z.object({;
  fullName: z.string().min(1, "Full name is required"),;
  title: z.string().min(1, "Professional title is required"),;
  email: z.string().email("Invalid email address"),;
  phone: z.string().optional(),;
  location: z.string().optional(),;
  website: z.string().url().optional().or(z.literal("")),;
  linkedin: z.string().optional(),;
  github: z.string().optional(),;
  hourlyRate: z.number().positive().optional()});
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
