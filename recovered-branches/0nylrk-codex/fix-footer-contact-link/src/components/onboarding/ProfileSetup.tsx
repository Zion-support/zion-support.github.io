

  FormLabel,
  FormMessage} from "@/components/ui/form",





  const getTypeLabel = () => {
    switch (userType) {;
      case "serviceProvider": return "Service Provider";

    switch (userType) {
      case "serviceProvider": return "Service Provider",





  };
  return (;



          />;
          <FormField
            control={form && form.control}
            name="headline"
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="headline";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
          />;
          <FormField
            control={form && form.control}
            name="bio"
                    <Input;
                      placeholder={`e.g., ${;
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :;
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";
                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="bio";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
              </FormItem>;









