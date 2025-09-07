
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;

              message: "Review must be at least 20 characters"}}}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience and feedback..."
                  className="min-h-24 resize-none"
                  {...field}

        {/* Additional Rating Categories (only shown if main rating is provided) */}
        {(watchRating ?? 0) > 0 && (
          <div className="space-y-6 border-t pt-6">
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>
            {/* Communication */}

              control={form.control}
              name="communication_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Communication</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}

                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}

              control={form.control}
              name="quality_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Quality of Work</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}

                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}

              control={form.control}
              name="timeliness_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Timeliness</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}

                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}

              control={form.control}
              name="would_work_again"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Would you work with {revieweeName} again?</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Switch
                          aria-label="Would work again"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <span className="text-sm text-muted-foreground">
                          {field.value ? "Yes" : "No"}
                        </span>
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}

          control={form.control}
          name="is_anonymous"
          render={({ field }: { field: any }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    aria-label="Submit anonymously"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer font-normal">
                  Submit anonymously
                </FormLabel>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Anonymous reviews won't display your name but will still be linked to your account.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !form.formState.isValid}
        >
          {isSubmitting ? "Submitting..." : defaultValues ? "Save Changes" : "Submit Review"}
        </Button>
      </form>
    </Form>
  )

