
  return (
    <>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField
          control={form && form.control}
          name="name"
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Certification Name</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder="AWS Certified Solutions Architect, PMP, etc.";
                  {...field}
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Issuing Organization</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder="Amazon Web Services, PMI, etc.";
                  {...field}
        <FormField
          control={form && form.control}
          name="credential_id"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Credential ID (Optional)</FormLabel>;
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
      </div>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <FormField;
          control={form.control}
          name="issue_date";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Issue Date</FormLabel>;
              <FormControl>;
                <Input type="date" {...field} value={field.value || ""} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="expiration_date";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Expiration Date (Optional)</FormLabel>;
              <FormControl>;
                <Input type="date" {...field} value={field.value || ""} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
      </div>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <FormField;
          control={form.control}
          name="credential_id";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Credential ID (Optional)</FormLabel>;
              <FormControl>;
                <Input placeholder="ABC123XYZ" {...field} />;
              </FormControl>;
              <FormMessage />;
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Credential URL (Optional)</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder="https://www.credential.com / verify / abc123";
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
      </div>;
    </>);
}
