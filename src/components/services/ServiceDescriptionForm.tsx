const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters");
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  keyFeatures: z.string(),
  targetAudience: z.string()}),

type FormData = z.infer<typeof formSchema>;

    

      const description = response ? (response as any).description : "Professional service with expert knowledge and proven results. We deliver high-quality solutions tailored to your specific needs.";
      

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
