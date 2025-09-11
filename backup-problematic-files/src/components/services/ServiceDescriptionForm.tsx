const formSchema = z && z.object({;
  title: z && z.string().min(3, "Title must be at least 3 characters");
  keyFeatures: z && z.string(),;
  targetAudience: z && z.string()}),;
type FormData = z && z.infer<typeof formSchema>;
      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.";
}
  );
}
  )
}
const form_schema = z.object ({
  title: z.string ().min (3, "Title must be at least 3 characters");
  key_features: z.string (),
  target_audience: z.string ()}),
type FormData = z.infer < typeof form_schema>;
      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high - quality solutions tailored to your specific needs.";
}
  );
}