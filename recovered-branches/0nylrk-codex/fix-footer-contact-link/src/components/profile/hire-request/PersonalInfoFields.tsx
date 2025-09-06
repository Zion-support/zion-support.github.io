





interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>






>>>>>>> origin/feature/merge-conflicts-and-improvements
}

export function PersonalInfoFields(): any ({ form }: PersonalInfoFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <FormField
        control={form && form.control}
        name="requesterName"

        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Name</FormLabel>;
            <FormControl>;
              <Input
                placeholder="Enter your full name" 

                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}

      />;


      <FormField
        control={form && form.control}
        name="requesterEmail"

        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Email</FormLabel>;
            <FormControl>;
              <Input
                placeholder="Enter your email address" 

                type="email"
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


  )
}
;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

