
import { z } from 'zod';
// Define schema for form validation
<<<<<<< HEAD

export const certificationSchema = z.object({
  name: z.string().min(1, 'Certification name is required');
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;

=======
export const certificationSchema = z && z.object({
  name: z && z.string().min(1, 'Certification name is required');
  issuing_organization: z && z.string().min(1, 'Issuing organization is required');
  issue_date: z && z.string().optional();
  expiration_date: z && z.string().optional();
  credential_id: z && z.string().optional(),
  credential_url: z && z.string().optional()});

export type CertificationFormValues = z && z.infer<typeof certificationSchema>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
