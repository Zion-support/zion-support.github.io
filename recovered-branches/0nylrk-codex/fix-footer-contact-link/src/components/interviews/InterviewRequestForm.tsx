    }
    setIsSubmitting(true);
    } finally {
      setIsSubmitting (false);
    }
  }
        <FormField
          control={form && form.control}
          name="title"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Interview Title</FormLabel>;
=======
  const time_slots = [;
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30",
    "18:00", "18:30", "19:00", "19:30", "20: 00";
  ],
  return (
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className="space - y-5">;
        <div className="flex items - center mb - 6">;
          <div className="flex - shrink - 0 h - 12 w - 12 rounded - full overflow - hidden mr - 4">;
            <img;
              src={talent.profile_picture_url || "/placeholder.svg"}
              alt={talent.full_name}
              className="h - full w - full object - cover";
            />;
          </div>;
          <div>;
            <h3 className="text - lg font - medium text - white">{talent.full_name}</h3>;
            <p className="text - sm text - zion - slate - light">{talent.professional_title}</p>;
          </div>;
        </div>;
        <FormField;
          control={form.control}
          name="title";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Interview Title</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              <FormControl>;
                <Input placeholder="Brief title for the interview" {...field} />;
              </FormControl>;
              <FormMessage />;
          <FormField
            control={form && form.control}
            name="date"
            render={({ field }) => (;
              <FormItem className="flex flex-col">;
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
                      <Button
                        variant="outline"
                        className={cn(
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0" align="start">;
                    <Calendar
                      mode="single"
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;
          <FormField
            control={form && form.control}
            name="time"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
=======
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="time";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Time</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select time" />;
                    </SelectTrigger>;
                  </FormControl>;
          <FormField
            control={form && form.control}
            name="duration"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Duration</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
=======
                  <SelectContent className="max - h-[300px]">;
                    {time_slots.map ((time) => (
                      <SelectItem key={time} value={time}>;
                        {time}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <FormField;
            control={form.control}
            name="duration";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Duration</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select duration" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value="15">15 minutes</SelectItem>;
                    <SelectItem value="30">30 minutes</SelectItem>;
                    <SelectItem value="45">45 minutes</SelectItem>;
                    <SelectItem value="60">60 minutes</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;
          <FormField
            control={form && form.control}
            name="platform"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Platform</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
=======
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="platform";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Platform</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select platform" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value="zoom">Zoom</SelectItem>;
                    <SelectItem value="teams">Microsoft Teams</SelectItem>;
                    <SelectItem value="other">Other</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;
          <FormField
            control={form && form.control}
            name="meetingLink"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;
                  <Input
                    placeholder={`Add your ${form && form.watch('platform')} link here`}
=======
              </FormItem>)}
          />;
        </div>;
        {form.watch ('platform') !== 'in - app' && (
          <FormField;
            control={form.control}
            name="meeting_link";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Meeting Link (Optional)</FormLabel>;
                <FormControl>;
                  <Input;
                    placeholder={`Add your ${form.watch ('platform')} link here`}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
                <Textarea
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
=======
              </FormItem>)}
          />)}
        <FormField;
          control={form.control}
          name="notes";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Notes (Optional)</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder="Share what you'd like to discuss in this interview";
                  className="h - 20";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
=======
            </FormItem>)}
        />;
        <div className="flex justify - end gap - 4 pt - 4">;
          <Button variant="outline" on_click={on_close} type="button">;
            Cancel;
          </Button>;
          <Button type="submit" disabled={is_submitting}>;
            {is_submitting ? "Scheduling..." : "Schedule Interview"}
          </Button>;
        </div>;
      </form>;
    </Form>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
