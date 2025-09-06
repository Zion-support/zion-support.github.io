
              <FormControl>;
                <Input placeholder="Brief title for the interview" {...field} />;
              </FormControl>;
              <FormMessage />;

            render={({ field }) => (;
              <FormItem className="flex flex-col">;
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;

                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0" align="start">;

                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;

                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select time" />;
                    </SelectTrigger>;
                  </FormControl>;

            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Notes (Optional)</FormLabel>;
              <FormControl>;

                  {...field}
                />;
              </FormControl>;
              <FormMessage />;

        <div className="flex justify-end gap-4 pt-4">;
          <Button variant="outline" onClick={onClose} type="button">;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isSubmitting}>;

          </Button>;
        </div>;
      </form>;
    </Form>;

}