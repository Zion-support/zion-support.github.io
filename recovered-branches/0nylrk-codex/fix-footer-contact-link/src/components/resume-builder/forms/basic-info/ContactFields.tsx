

interface ContactFieldsProps {_control: Control<BasicInfoFormData>;}

export function ContactFields(_{_control}: ContactFieldsProps) {_return (_<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="location"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="San Francisco, CA" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={_control}
        name="website"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder="https://yourwebsite.com" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={_control}
        name="linkedin"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder="https://linkedin.com/in/username" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={_control}
        name="github"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder="https://github.com/username" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
