







  description:z.string().optional(),;
  technologies:z.string().optional(),;
  image_url:z.string().optional(),;

  github_url:z;
    .union([z.string().url('Please enter a valid URL'), z.literal()]);
    .optional(),;
  demo_url:z;
  pdf_url: z.string().optional();}),;
type ProjectFormValues = z.infer<typeof projectSchema>,;
</typeof>
  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema);,;
    defaultValues:{;







        technologies:data.technologies ? ;
          data.technologies.split().map(tech => tech.trim()) :[],;
        image_url: data.image_url;,;
        github_url: data.github_url || undefined;,;
        demo_url: data.demo_url || undefined;,;
        pdf_url: data.pdf_url;},;





)
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;"
</form>
        <FormField;



"
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />;"
              <FormMessage />;
            ;          )}
          name="description";"
              <FormLabel>Project Description;

                <Textarea ;"
                  placeholder="Describe what the project does and your role in it...";""
                  className="min-h-[100px]";"
                  {...field} ;
                />;

        ;
























          </Button>;

        </div>;
          name="image_url";"
                <FileImage className="h-4 w-4" />;"
                <Input placeholder="https: //example.com/screenshot.jpg" {...field;} />;"
        <div className="flex justify-end space-x-2 pt-4">;"
</div>"
          <Button type="button" variant="outline" onClick={onCancel}>;"
          <Button type="submit" disabled={isLoading}>;"
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
</Loader2>




