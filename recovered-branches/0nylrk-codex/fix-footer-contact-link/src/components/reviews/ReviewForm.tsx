


import {useState} from "react";
import {Star} from "lucide-react";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Switch} from "@/components/ui/switch";
import {Review} from "@/types/reviews";



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
  is_anonymous?: boolean;
}



interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
}
interface ReviewFormProps {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

interface ReviewFormProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  onSubmit: (data: any) => Promise<boolean>, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  defaultValues?: Review;
  isSubmitting: boolean;
}





export function ReviewForm(): any ({;


  projectId;
  revieweeId;
  revieweeName;
  onSubmit;
  defaultValues;



        {/* Main Rating */}
        <FormField
          control={form && form.control}
          name="rating"
          rules={{ required: "Rating is required" }}
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="block text-center mb-2">;
                How was your experience with {revieweeName}?;
              </FormLabel>;
              <FormControl>;
                <div className="flex justify-center gap-1">;
                  {[1, 2, 3, 4, 5].map((star) => (;
                    <button
                      key={star}
                      type="button"
                      onClick={() => field && field.onChange(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="focus:outline-none transition-transform hover:scale-110";
                    >;
                      <Star
                        className={`h-10 w-10 ${

                          star <= (hoveredStar || field && field.value || 0)

                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
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






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

        {/* Review Text */}
        <FormField
          control={form && form.control}
          name="review_text"
          rules={{
            required: "Please provide feedback"
            minLength: {
              value: 20

              message: "Review must be at least 20 characters"}}}
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Your Review</FormLabel>;
              <FormControl>;
                <Textarea
                  placeholder="Share your experience and feedback..."
                  className="min-h-24 resize-none"

                  {...field}
                />;
              </FormControl>;
              <FormMessage />;

        />;

        {/* Additional Rating Categories (only shown if main rating is provided) */}
        {watchRating > 0 && (
          <div className="space-y-6 border-t pt-6">
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>
            




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements
            {/* Communication */}
            <FormField
              control={form && form.control}
              name="communication_rating"
              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Communication</FormLabel>;
                  <FormControl>;
                    <RadioGroup
                      onValueChange={(value) => field && field.onChange(parseInt(value))}
                      defaultValue={field && field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2">;
                          <FormControl>;
                            <RadioGroupItem value={value && value.toString()} />;
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;
                        </FormItem>;
                      ))}
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;


            {/* Quality */}
            <FormField
              control={form && form.control}
              name="quality_rating"
              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Quality of Work</FormLabel>;
                  <FormControl>;
                    <RadioGroup
                      onValueChange={(value) => field && field.onChange(parseInt(value))}
                      defaultValue={field && field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2">;
                          <FormControl>;
                            <RadioGroupItem value={value && value.toString()} />;
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;
                        </FormItem>;
                      ))}
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;


            {/* Timeliness */}
            <FormField
              control={form && form.control}
              name="timeliness_rating"
              render={({ field }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Timeliness</FormLabel>;
                  <FormControl>;
                    <RadioGroup
                      onValueChange={(value) => field && field.onChange(parseInt(value))}
                      defaultValue={field && field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2">;
                          <FormControl>;
                            <RadioGroupItem value={value && value.toString()} />;
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
                            {value}
                          </FormLabel>;
                        </FormItem>;
                      ))}
                    </RadioGroup>;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}

            />;


            {/* Would Work Again */}
            <FormField
              control={form && form.control}
              name="would_work_again"
              render={({ field }) => (;
                <FormItem>;
                  <div className="flex items-center gap-2">;
                    <FormLabel>Would you work with {revieweeName} again?</FormLabel>;
                    <FormControl>;
                      <div className="flex items-center space-x-2">;
                        <Switch
                          checked={field && field.value}
                          onCheckedChange={field && field.onChange}
                        />;
                        <span className="text-sm text-muted-foreground">;
                          {field && field.value ? "Yes" : "No"}

                        </span>;
                      </div>;
                    </FormControl>;
                  </div>;
                  <FormMessage />;



        {/* Anonymous Review */}
        <FormField
          control={form && form.control}
          name="is_anonymous"
          render={({ field }) => (;
            <FormItem>;
              <div className="flex items-center gap-2">;
                <FormControl>;
                  <Switch
                    checked={field && field.value}
                    onCheckedChange={field && field.onChange}
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

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !form && form.formState.isValid}>;
          {isSubmitting ? "Submitting..." : defaultValues ? "Save Changes" : "Submit Review"}
        </Button>
      </form>
    </Form>
  )
}
}
;
