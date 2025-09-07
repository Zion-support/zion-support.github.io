<<<<<<< HEAD

import { z } from "zod";
export const basicInfoSchema = z.object({
  fullName: z.string().min($2);
  title: z.string().min($2);
  email: z.string().email($2);
  phone: z.string().optional($2);
  location: z.string().optional($2);
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional($2);
  github: z.string().optional($2);
  hourlyRate: z.number().positive().optional()}),

export type BasicInfoFormData = $2;
=======
export const basicInfoSchema = z.object({;

<<<<<<< HEAD
=======

<<<<<<< HEAD

import {z} from "zod";
export const basicInfoSchema = z.object({
import {z} from "zod";
export const basicInfoSchema = z.object({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  fullName: z.string().min(1, "Full name is required");
  title: z.string().min(1, "Professional title is required");

  email: z.string().email("Invalid email address");
  phone: z.string().optional();
  location: z.string().optional();"
  website: z.string().url().optional().or(z.literal(""));
<<<<<<< HEAD

export const basicInfoSchema = z && z.object({";
  fullName: z && z.string().min(1, "Full name is required");"
  title: z && z.string().min(1, "Professional title is required");"
=======
  linkedin: z.string().optional();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const basicInfoSchema = z && z.object({
  fullName: z && z.string().min(1, "Full name is required");
  title: z && z.string().min(1, "Professional title is required");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  email: z && z.string().email("Invalid email address");
  phone: z && z.string().optional();
  location: z && z.string().optional();"

  website: z && z.string().url().optional().or(z && z.literal(""));
  linkedin: z && z.string().optional();
  github: z && z.string().optional(),
  hourlyRate: z && z.number().positive().optional()});
export type BasicInfoFormData = z && z.infer<typeof basicInfoSchema>;
<<<<<<< HEAD

=======
import { z } from './zod';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const basicInfoSchema = z.object ({
  full_name: z.string ().min (1, "Full name is required");
  title: z.string ().min (1, "Professional title is required");

  email: z.string ().email ("Invalid email address");
  phone: z.string ().optional ();
  location: z.string ().optional ();"
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
<<<<<<< HEAD
=======

=======


<<<<<<< HEAD
  github: z.string().optional()
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { z } from "zod",
export const basicInfoSchema = z.object({"
  fullName: z.string().min(1, "Full name is required"),"
  title: z.string().min(1, "Professional title is required"),"

  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),"
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional(),
<<<<<<< HEAD

  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>,

import { z } from "zod",;
export const basicInfoSchema = z.object({;"
  fullName: z.string().min(1, "Full name is required"),;"
  title: z.string().min(1, "Professional title is required"),;"
  email: z.string().email("Invalid email address"),;
  phone: z.string().optional(),;
  location: z.string().optional(),;"
  website: z.string().url().optional().or(z.literal("")),;
  linkedin: z.string().optional(),;
  github: z.string().optional(),;
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

import { z } from "zod",;
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

<<<<<<< HEAD
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

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
=======


export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
