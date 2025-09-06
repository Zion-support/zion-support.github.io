
<<<<<<< HEAD
=======
import { z } from 'zod',;
;
// Define schema for form validation;
export const certificationSchema = z.object({;
  name:z.string().min(1, 'Certification name is required'),;
  issuing_organization:z.string().min(1, 'Issuing organization is required'),;
  issue_date:z.string().optional(),;
  expiration_date:z.string().optional(),;
  credential_id:z.string().optional(),;
  credential_url:z.string().optional()}),;
;
export type CertificationFormValues = z.infer<typeof certificationSchema>,; export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
