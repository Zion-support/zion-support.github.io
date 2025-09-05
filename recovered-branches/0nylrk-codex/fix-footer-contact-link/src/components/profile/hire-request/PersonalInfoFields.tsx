

interface PersonalInfoFieldsProps {_form: UseFormReturn<FormValues>;}

export function PersonalInfoFields(_{_form}: PersonalInfoFieldsProps) {_return (_<>
      <FormField
        control={form.control}
        name="requesterName"
        render={_({ field}) => (
          <FormItem>
            <FormLabel className="text-white">Your Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter your full name" 
                {_...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={_form.control}
        name="requesterEmail"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel className="text-white">Your Email</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter your email address" 
                type="email"
                {_...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
