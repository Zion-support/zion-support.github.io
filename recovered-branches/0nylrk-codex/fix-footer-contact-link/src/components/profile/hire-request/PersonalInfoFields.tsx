
  return (
    <>;
      <FormField
        control={form && form.control}
        name="requesterName"
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
                type="email"
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white"
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
export /**
 * PersonalInfoFields - Function description
 */
function PersonalInfoFields() {
  return (
    <>;
      <FormField;
        control={form.control}
        name="requester_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel className="text - white">Your Name</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="Enter your full name";
                {...field}
                className="bg - zion - blue - light / 20 border - zion - blue - light text - white";
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={form.control}
        name="requester_email";
        render={({ field }) => (
          <FormItem>;
            <FormLabel className="text - white">Your Email</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="Enter your email address";
                type="email";
                {...field}
                className="bg - zion - blue - light / 20 border - zion - blue - light text - white";
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
    </>);
}
