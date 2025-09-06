
export const basicInfoSchema = z.object({;

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

import {z} from "zod";
export const basicInfoSchema = z.object({
import {z} from "zod";
export const basicInfoSchema = z.object({;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  fullName: z.string().min(1, "Full name is required");
  title: z.string().min(1, "Professional title is required");
  email: z.string().email("Invalid email address");
  phone: z.string().optional();
  location: z.string().optional();
  website: z.string().url().optional().or(z.literal(""));
<<<<<<< HEAD
  linkedin: z.string().optional();
<<<<<<< HEAD
  github: z.string().optional()
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { z } from './zod';
=======
  linkedin: z.string().optional();import { z } from './zod';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======
=======


  github: z.string().optional()
  hourlyRate: z.number().positive().optional()});
export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

<<<<<<< HEAD


export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  github: z.string().optional(),
  hourlyRate: z.number().positive().optional()}),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
