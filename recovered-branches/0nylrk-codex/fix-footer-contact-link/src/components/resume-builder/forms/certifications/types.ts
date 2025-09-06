
import { z } from 'zod';
// Define schema for form validation

export const certificationSchema = z.object({
import {z} from 'zod';
// Define schema for form validation
export const certificationSchema = z.object({;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  name: z.string().min(1, 'Certification name is required');
  issuing_organization: z.string().min(1, 'Issuing organization is required');
  issue_date: z.string().optional();
  expiration_date: z.string().optional();
  credential_id: z.string().optional()
  credential_url: z.string().optional()});
export type CertificationFormValues = z.infer<typeof certificationSchema>;

<<<<<<< HEAD
export type CertificationFormValues = z.infer<typeof certificationSchema>;
export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export type CertificationFormValues = z.infer<typeof certificationSchema>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
