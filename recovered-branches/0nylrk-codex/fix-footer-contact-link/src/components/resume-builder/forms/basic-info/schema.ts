
export const basicInfoSchema = z.object({;

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  fullName: z.string().min(1, "Full name is required");
  title: z.string().min(1, "Professional title is required");
  email: z.string().email("Invalid email address");
  phone: z.string().optional();
  location: z.string().optional();
  website: z.string().url().optional().or(z.literal(""));
<<<<<<< HEAD
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


import { z } from './zod';
=======
  linkedin: z.string().optional();import { z } from './zod';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD




  github: z.string().optional()
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { z } from "zod",
export const basicInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Professional title is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional(),
<<<<<<< HEAD

  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),



export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

=======
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

import { z } from "zod",;
;
export const basicInfoSchema = z.object({;
  fullName:z.string().min(1, "Full name is required"),;
  title:z.string().min(1, "Professional title is required"),;
  email:z.string().email("Invalid email address"),;
  phone:z.string().optional(),;
  location:z.string().optional(),;
  website:z.string().url().optional().or(z.literal("")),;
  linkedin:z.string().optional(),;
  github:z.string().optional(),;
  hourlyRate:z.number().positive().optional()}),;
;
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>,; export const basicInfoSchema = z.object ({
  fullName: z.string () .min (1, "Full name is required");
title: z.string () .min (1, "Professional title is required");
email: z.string () .email ("Invalid email address");
phone: z.string () .optional ();
location: z.string () .optional ();
website: z.string () .url () .optional () .or (z.literal ("") );
linkedin: z.string () .optional ();
github: z.string () .optional ();
hourlyRate: z.number () .positive () .optional () 
});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
