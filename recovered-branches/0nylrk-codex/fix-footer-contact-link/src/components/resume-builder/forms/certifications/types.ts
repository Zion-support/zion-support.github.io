

// Define schema for form validation
export const _certificationSchema = z.object({_name: z.string().min(1, _'Certification name is required'), _issuing_organization: z.string().min(1, _'Issuing organization is required'), _issue_date: z.string().optional(), _expiration_date: z.string().optional(), _credential_id: z.string().optional(), _credential_url: z.string().optional()});

export type CertificationFormValues = z.infer<typeof certificationSchema>;
