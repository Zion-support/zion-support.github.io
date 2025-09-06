
interface PersonalInfoFieldsProps {
  control: Control < BasicInfoFormData>;
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Full Name</FormLabel>;
=======
export /**
 * PersonalInfoFields - Function description
 */
function PersonalInfoFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
      <FormField;
        control={control}
        name="full_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Full Name</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            <FormControl>;
              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;
      <FormField
        control={control}
        name="title"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Professional Title</FormLabel>;
=======
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="title";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Professional Title</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            <FormControl>;
              <Input placeholder="Senior Software Engineer" {...field} />;
            </FormControl>;
            <FormMessage />;
      <FormField
        control={control}
        name="email"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Email</FormLabel>;
            <FormControl>;
              <Input type="email" placeholder="john@example && example.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Phone</FormLabel>;
=======
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="email";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Email</FormLabel>;
            <FormControl>;
              <Input type="email" placeholder="john@example.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="phone";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Phone</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            <FormControl>;
              <Input placeholder="+1 234 567 8900" {...field} />;
            </FormControl>;
            <FormMessage />;
=======
          </FormItem>)}
      />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
