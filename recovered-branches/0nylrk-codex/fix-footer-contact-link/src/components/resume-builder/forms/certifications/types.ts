

import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;


<<<<<<< HEAD
<<<<<<< HEAD
import { z } from 'zod';
// Define schema for form validation

export const certificationSchema = z.object({
import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  name: z.string().min(1, 'Certification name is required');
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {z} from 'zod';
// Define schema for form validation;
export const certification_schema = z.object ({
  name: z.string ().min (1, 'Certification name is required');
  issuing_organization: z.string ().min (1, 'Issuing organization is required');
  issue_date: z.string ().optional ();
  expiration_date: z.string ().optional ();
  credential_id: z.string ().optional (),
  credential_url: z.string ().optional ()});
;
export type CertificationFormValues = z.infer < typeof certification_schema>;
;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { z } from 'zod',;
// Define schema for form validation;
export const certificationSchema = z.object({;
  name: z.string().min(1, 'Certification name is required'),;
  issuing_organization: z.string().min(1, 'Issuing organization is required'),;
  issue_date: z.string().optional(),;
  expiration_date: z.string().optional(),;
  credential_id: z.string().optional(),;
  credential_url: z.string().optional()});

<<<<<<< HEAD
export type CertificationFormValues = z.infer<typeof certificationSchema>;
<<<<<<< HEAD
export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
