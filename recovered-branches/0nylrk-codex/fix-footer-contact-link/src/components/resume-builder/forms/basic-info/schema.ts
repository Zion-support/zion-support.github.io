

export const _basicInfoSchema = z.object({_fullName: z.string().min(1, _"Full name is required"), _title: z.string().min(1, _"Professional title is required"), _email: z.string().email("Invalid email address"), _phone: z.string().optional(), _location: z.string().optional(), _website: z.string().url().optional().or(z.literal("")), _linkedin: z.string().optional(), _github: z.string().optional(), _hourlyRate: z.number().positive().optional()});

export type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
