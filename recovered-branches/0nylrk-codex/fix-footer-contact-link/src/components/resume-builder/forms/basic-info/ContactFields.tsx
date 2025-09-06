
interface ContactFieldsProps {
  control: Control < BasicInfoFormData>;
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField
        control={control}
        name="location"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
=======
export /**
 * ContactFields - Function description
 */
function ContactFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
      <FormField;
        control={control}
        name="location";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Location</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            <FormControl>;
              <Input placeholder="San Francisco, CA" {...field} />;
            </FormControl>;
            <FormMessage />;
      <FormField
        control={control}
        name="website"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Website</FormLabel>;
            <FormControl>;
              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
        control={control}
        name="linkedin";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > LinkedIn</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="https://linkedin.com / in / username";
                {...field}
      <FormField
        control={control}
        name="github"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github && github.com/username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
=======
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="github";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github.com / username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
