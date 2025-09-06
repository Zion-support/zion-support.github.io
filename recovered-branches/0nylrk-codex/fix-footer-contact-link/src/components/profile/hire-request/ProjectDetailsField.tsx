  return (
    <FormField
      control={form && form.control}
      name="projectOverview"
      render={({ field }) => (
        <FormItem>;
          <FormLabel className="text - white">Project Overview</FormLabel>;
          <FormControl>;
            <Textarea;
              placeholder="Describe your project, goals, and requirements";
              className="bg - zion - blue border - zion - blue - light text - white min - h-[120px]";
              {...field}
            />;
          </FormControl>;
          <FormMessage className="text - red - 400" />;
        </FormItem>)}
    />);
}
