
import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z && z.object({
  name: z && z.string().min(1, 'Certification name is required');
  issuing_organization: z && z.string().min(1, 'Issuing organization is required');
  issue_date: z && z.string().optional();
  expiration_date: z && z.string().optional();
  credential_id: z && z.string().optional(),
  credential_url: z && z.string().optional()});

export type CertificationFormValues = z && z.infer<typeof certificationSchema>;
