

interface PersonalInfoFieldsProps {_control: Control<BasicInfoFormData>;}

export function PersonalInfoFields(_{_control}: PersonalInfoFieldsProps) {_return (_<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="fullName"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={_control}
        name="title"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>
              <Input placeholder="Senior Software Engineer" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={_control}
        name="email"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john@example.com" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={_control}
        name="phone"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="+1 234 567 8900" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
