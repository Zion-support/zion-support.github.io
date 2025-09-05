
import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
import {_RadioGroup, _RadioGroupItem} from "@/components/ui/radio-group";

interface ReviewFormValues {_rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
  is_anonymous?: boolean;}

interface ReviewFormProps {_projectId: string;
  revieweeId: string;
  revieweeName: string;
  onSubmit: (_data: unknown) => Promise<boolean>; 
  defaultValues?: Review;
  isSubmitting: boolean;}

export function ReviewForm(_{_projectId, _revieweeId, _revieweeName, _onSubmit, _defaultValues, _isSubmitting}: ReviewFormProps) {_const [hoveredStar, _setHoveredStar] = useState<number>(0);
  
  const _form = useForm<ReviewFormValues>({
    defaultValues: defaultValues ? {
      rating: defaultValues.rating, _review_text: defaultValues.review_text, _communication_rating: defaultValues.communication_rating, _quality_rating: defaultValues.quality_rating, _timeliness_rating: defaultValues.timeliness_rating, _would_work_again: defaultValues.would_work_again, _is_anonymous: defaultValues.is_anonymous} : {_rating: 0, _review_text: "", _communication_rating: undefined, _quality_rating: undefined, _timeliness_rating: undefined, _would_work_again: undefined, _is_anonymous: false}
  });
  
  const _handleSubmit = async (_values: ReviewFormValues) => {_const _formattedData = {
      ...values, _project_id: projectId, _reviewee_id: revieweeId};
    
    const _success = await onSubmit(formattedData);
    if (success) {_form.reset();}
  };
  
  const _watchRating = form.watch("rating");
  
  return (
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(handleSubmit)} className="space-y-6">
        {_/* Main Rating */}
        <FormField
          control={_form.control}
          name="rating"
          rules={_{ required: "Rating is required"}}
          render={_(_{ field}: {_field: unknown}) => (_<FormItem>
              <FormLabel className="block text-center mb-2">
                How was your experience with {_revieweeName}?
              </FormLabel>
              <FormControl>
                <div className="flex justify-center gap-1">
                  {_[1, _2, _3, _4, _5].map((star) => (_<button
                      key={star}
                      type="button"
                      onClick={_() => field.onChange(star)}
                      onMouseEnter={_() => setHoveredStar(star)}
                      onMouseLeave={_() => setHoveredStar(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                      aria-label={_`Rate ${star} star${_star > 1 ? 's' : ''}`}
                    >
                      <Star
                        className={_`h-10 w-10 ${
                          star <= (hoveredStar || field.value || 0)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"} transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </FormControl>
              <div className="text-center mt-1 h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        {_/* Review Text */}
        <FormField
          control={_form.control}
          name="review_text"
          rules={_{
            required: "Please provide feedback", _minLength: {
              value: 20, _message: "Review must be at least 20 characters"}}}
          render={_(_{ field}: {_field: unknown}) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience and feedback..."
                  className="min-h-24 resize-none"
                  {_...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {_/* Additional Rating Categories (only shown if main rating is provided) */}
        {_(watchRating ?? 0) > 0 && (
          <div className="space-y-6 border-t pt-6">
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>
            
            {/* Communication */}
            <FormField
              control={_form.control}
              name="communication_rating"
              render={_(_{ field}: {_field: unknown}) => (_<FormItem className="space-y-2">
                  <FormLabel>Communication</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={_(value) => field.onChange(parseInt(value))}
                      defaultValue={_field.value?.toString()}
                      className="flex flex-wrap gap-4"
                    >
                      {_[1, _2, _3, _4, _5].map(_(value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={_value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {_value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {_/* Quality */}
            <FormField
              control={_form.control}
              name="quality_rating"
              render={_(_{ field}: {_field: unknown}) => (_<FormItem className="space-y-2">
                  <FormLabel>Quality of Work</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={_(value) => field.onChange(parseInt(value))}
                      defaultValue={_field.value?.toString()}
                      className="flex flex-wrap gap-4"
                    >
                      {_[1, _2, _3, _4, _5].map(_(value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={_value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {_value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {_/* Timeliness */}
            <FormField
              control={_form.control}
              name="timeliness_rating"
              render={_(_{ field}: {_field: unknown}) => (_<FormItem className="space-y-2">
                  <FormLabel>Timeliness</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={_(value) => field.onChange(parseInt(value))}
                      defaultValue={_field.value?.toString()}
                      className="flex flex-wrap gap-4"
                    >
                      {_[1, _2, _3, _4, _5].map(_(value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={_value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {_value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {_/* Would Work Again */}
            <FormField
              control={_form.control}
              name="would_work_again"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Would you work with {_revieweeName} again?</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Switch
                          aria-label="Would work again"
                          checked={_field.value}
                          onCheckedChange={_field.onChange}
                        />
                        <span className="text-sm text-muted-foreground">
                          {_field.value ? "Yes" : "No"}
                        </span>
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        
        {_/* Anonymous Review */}
        <FormField
          control={_form.control}
          name="is_anonymous"
          render={_(_{ field}: {_field: unknown}) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    aria-label="Submit anonymously"
                    checked={_field.value}
                    onCheckedChange={_field.onChange}
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
          disabled={_isSubmitting || !form.formState.isValid}
        >
          {_isSubmitting ? "Submitting..." : defaultValues ? "Save Changes" : "Submit Review"}
        </Button>
      </form>
    </Form>
  );
}
