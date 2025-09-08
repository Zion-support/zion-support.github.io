
<<<<<<< HEAD
export const basicInfoSchema = z.object({;

  fullName: z.string().min(1, "Full name is required");
  title: z.string().min(1, "Professional title is required");

  email: z.string().email("Invalid email address");
  phone: z.string().optional();
  location: z.string().optional();"
  website: z.string().url().optional().or(z.literal(""));
  linkedin: z.string().optional();import { z } from './zod';
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
import { z } from "zod",
export const basicInfoSchema = z.object({"
  fullName: z.string().min(1, "Full name is required"),"
  title: z.string().min(1, "Professional title is required"),"

  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),"
  website: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().optional(),
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df