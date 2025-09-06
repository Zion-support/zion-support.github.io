

import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;


  name: z.string().min(1, 'Certification name is required');
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;

=======

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

=======
import { z } from 'zod',;
// Define schema for form validation;
export const certificationSchema = z.object({;
  name: z.string().min(1, 'Certification name is required'),;
  issuing_organization: z.string().min(1, 'Issuing organization is required'),;
  issue_date: z.string().optional(),;
  expiration_date: z.string().optional(),;
  credential_id: z.string().optional(),;
  credential_url: z.string().optional()});


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
