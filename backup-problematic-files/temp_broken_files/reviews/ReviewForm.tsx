
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="block text-center mb-2">;
                How was your experience with {revieweeName}?;
              </FormLabel>;
              <FormControl>;
                <div className="flex justify-center gap-1">;
                  {[1, 2, 3, 4, 5].map((star) => (;
onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="focus:outline-none transition-transform hover:scale-110";
                    >;

                        } transition-colors`}
                      />;
                    </button>;
                  ))}
                </div>;
              </FormControl>;
              <div className="text-center mt-1 h-5">;
                <FormMessage />;
              </div>;
            </FormItem>;
          )}
        />;

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Your Review</FormLabel>;
              <FormControl>;

                  {...field}
                />;
              </FormControl>;
              <FormMessage />;

        {/* Additional Rating Categories (only shown if main rating is provided) */}
        {watchRating > 0 && (;
          <div className="space-y-6 border-t pt-6">;
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>;

              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Communication</FormLabel>;
                  <FormControl>;

                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;

                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Quality of Work</FormLabel>;
                  <FormControl>;

                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;

                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Timeliness</FormLabel>;
                  <FormControl>;

                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;

                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;

              render={({ field }) => (;
                <FormItem>;
                  <div className="flex items-center gap-2">;
                    <FormLabel>Would you work with {revieweeName} again?</FormLabel>;
                    <FormControl>;
                      <div className="flex items-center space-x-2">;

                        </span>;
                      </div>;
                    </FormControl>;
                  </div>;
                  <FormMessage />;

          render={({ field }) => (;
            <FormItem>;
              <div className="flex items-center gap-2">;
                <FormControl>;

                  />;
                </FormControl>;
                <FormLabel className="cursor-pointer font-normal">;
                  Submit anonymously;
                </FormLabel>;
              </div>;
              <p className="text-xs text-muted-foreground mt-1">;
                Anonymous reviews won't display your name but will still be linked to your account.;
              </p>;
              <FormMessage />;
            </FormItem>;
          )}
        />;

}
