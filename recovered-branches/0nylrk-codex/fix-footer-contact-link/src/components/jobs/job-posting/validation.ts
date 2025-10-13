import { z } from "zod";";
export const jobSchema = z.object({
  // TODO: Add properties
}
  // TODO: Add properties
}
  title: z.string().min(3, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: "}),"
  company: z.string().min(3, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: "}),"
  location: z.string().min(3, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: "}),"
  job_type: z.string().min(3, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: "}),"
  salary_range: z.string().optional(),
  description: z.string().min(10, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: "}),"
    message: ","
  }),
  company: z.string().min(3, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: ","
  }),
  location: z.string().min(3, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: ","
  }),
  job_type: z.string().min(3, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: ","
  }),
  salary_range: z.string().optional(),
  description: z.string().min(10, {
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: ","
  }),
  responsibilities: z.string().optional(),
  qualifications: z.string().optional(),
  benefits: z.string().optional(),
  application_instructions: z.string().optional(),
  contact_email: z.string().email({
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: "}).optional(),"
    message: ","
  }).optional(),
  published_date: z.string().optional(),
  expiry_date: z.string().optional(),
  is_remote: z.boolean().default(false).optional(),
  category: z.string().optional(),
  status: z.string().optional(),
  external_apply_link: z.string().url({
  // TODO: Add properties
}
  // TODO: Add properties
}
    message: "}).optional()})"
    message: ","
  }).optional(),
});
export type JobSchemaType = z.infer<typeof jobSchema>;