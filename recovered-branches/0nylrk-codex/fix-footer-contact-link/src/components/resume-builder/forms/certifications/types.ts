
<<<<<<< HEAD
import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;
  name: z.string().min(1, 'Certification name is required');
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional(),
  credential_url: z.string().optional()});

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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export type CertificationFormValues = z.infer<typeof certificationSchema>;
