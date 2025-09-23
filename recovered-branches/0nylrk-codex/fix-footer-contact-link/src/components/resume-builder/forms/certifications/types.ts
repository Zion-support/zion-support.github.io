
import { z } from 'zod';

// Define schema for form validation
export const certificationSchema = z.object({
  name: z.string().min(1, 'Certification name is required'),
  issuing_organization: z.string().min(1, 'Issuing organization is required'),
  issue_date: z.string().optional(),
  expiration_date: z.string().optional(),
  credential_id: z.string().optional(),
<<<<<<< HEAD
=======
  credential_url: z.string().optional()});

export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
