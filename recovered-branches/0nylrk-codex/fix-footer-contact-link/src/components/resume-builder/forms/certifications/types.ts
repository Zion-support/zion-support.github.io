
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  name: z.string().min(1, 'Certification name is required');
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;

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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export type CertificationFormValues = z.infer<typeof certificationSchema>;
