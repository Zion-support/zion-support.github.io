
<<<<<<< HEAD
import { z } from 'zod',
// Define schema for form validation
export const certificationSchema = z.object({
  name: z.string().min(1, 'Certification name is required'),
  issuing_organization: z.string().min(1, 'Issuing organization is required'),
  issue_date: z.string().optional(),
  expiration_date: z.string().optional(),
  credential_id: z.string().optional(),
  credential_url: z.string().optional()}),
=======

// Define schema for form validation
export const _certificationSchema = z.object({_name: z.string().min(1, _'Certification name is required'), _issuing_organization: z.string().min(1, _'Issuing organization is required'), _issue_date: z.string().optional(), _expiration_date: z.string().optional(), _credential_id: z.string().optional(), _credential_url: z.string().optional()});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type CertificationFormValues = z.infer<typeof certificationSchema>,
