import { z } from 'zod';
<<<<<<< HEAD
// Define schema for form validation
export const certificationSchema = null;
export const certificationSchema = z.object({
  name: z.string().min($2);
  issuing_organization: z.string().min($2);
  issue_date: z.string().optional($2);
  expiration_date: z.string().optional($2);
  credential_id: z.string().optional($2);
  credential_url: z.string().optional()}),

export type CertificationFormValues = $2;
=======
// Define schema for form validation;
export const certificationSchema = z.object({';
import {z} from 'zod';

import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;

<<<<<<< HEAD
}

import { z } from 'zod';'
// Define schema for form validation,
export const certificationSchema = z.object({
}
// Define schema for form validation,
export const certificationSchema = z.object({;import { z } from 'zod';'
=======
>>>>>>> origin/chore/fix-lint-and-merge
// Define schema for form validation;
export const certificationSchema = z.object({;
'
  name: z.string().min(1, 'Certification name is required');'

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { z } from 'zod';
// Define schema for form validation

export const certificationSchema = z.object({
import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  name: z.string().min(1, 'Certification name is required');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

'
import { z } from 'zod',;

>>>>>>> origin/chore/fix-lint-and-merge
// Define schema for form validation;
export const certificationSchema = z.object({;'
  name: z.string().min(1, 'Certification name is required'),;'
  issuing_organization: z.string().min(1, 'Issuing organization is required'),;
  issue_date: z.string().optional(),;
  expiration_date: z.string().optional(),;
  credential_id: z.string().optional(),;
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;

import {z} from 'zod';
// Define schema for form validation;
export const certification_schema = z.object ({';
  name: z.string ().min (1, 'Certification name is required');'
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { z } from 'zod',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Define schema for form validation;
export const certificationSchema = z.object({;'
  name: z.string().min(1, 'Certification name is required'),;'
  issuing_organization: z.string().min(1, 'Issuing organization is required'),;
  issue_date: z.string().optional(),;
  expiration_date: z.string().optional(),;
  credential_id: z.string().optional(),;
  credential_url: z.string().optional()});

<<<<<<< HEAD
export type CertificationFormValues = z.infer<typeof certificationSchema>;
=======
export type CertificationFormValues = z.infer<typeof certificationSchema>;
<<<<<<< HEAD
export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
