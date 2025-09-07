import { z } from 'zod';
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