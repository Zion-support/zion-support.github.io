
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
=======
import { useState } from &quot;react&quot;;
import { Star } from 'lucide-react'
import { useForm } from &quot;react-hook-form&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import {
  RadioGroup,
  RadioGroupItem} from "@/components/ui/radio-group",
import { Switch } from "@/components/ui/switch",
import { Review } from "@/types/reviews",
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import {
  RadioGroup,
  RadioGroupItem} from &quot;@/components/ui/radio-group&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { Review } from &quot;@/types/reviews&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ReviewFormValues {
  rating?: number,
  review_text?: string,
  communication_rating?: number,
  quality_rating?: number,
  timeliness_rating?: number,
  would_work_again?: boolean,
  is_anonymous?: boolean
=======
import { useState } from "react",;
import { Star } from 'lucide-react';
import { useForm } from "react-hook-form",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import {;
  RadioGroup,;
  RadioGroupItem} from "@/components/ui/radio-group",;
import { Switch } from "@/components/ui/switch",;
import { Review } from "@/types/reviews",;
interface ReviewFormValues {;
  rating?: number,;
  review_text?: string,;
  communication_rating?: number,;
  quality_rating?: number,;
  timeliness_rating?: number,;
  would_work_again?: boolean,;
  is_anonymous?: boolean;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
interface ReviewFormProps {;
  projectId: string,;
  revieweeId: string,;
  revieweeName: string,;
  onSubmit: (data: any) => Promise<boolean>,;
  defaultValues?: Review,;
  isSubmitting: boolean;
}
<<<<<<< HEAD

export function ReviewForm({
  projectId,
  revieweeId,
  revieweeName,
  onSubmit,
  defaultValues,
  isSubmitting}: ReviewFormProps) {
  const [hoveredStar, setHoveredStar] = useState<number>(0),
  
  const form = useForm<ReviewFormValues>({
    defaultValues: defaultValues ? {
      rating: defaultValues.rating,
      review_text: defaultValues.review_text,
      communication_rating: defaultValues.communication_rating,
      quality_rating: defaultValues.quality_rating,
      timeliness_rating: defaultValues.timeliness_rating,
      would_work_again: defaultValues.would_work_again,
      is_anonymous: defaultValues.is_anonymous} : {
      rating: 0,
      review_text: "&quot;,
      communication_rating: undefined,
      quality_rating: undefined,
      timeliness_rating: undefined,
      would_work_again: undefined,
=======
;
export function ReviewForm({;
  projectId,;
  revieweeId,;
  revieweeName,;
  onSubmit,;
  defaultValues,;
  isSubmitting}: ReviewFormProps) {;
  const [hoveredStar, setHoveredStar] = useState<number>(0),;
  const form = useForm<ReviewFormValues>({;
    defaultValues: defaultValues ? {;
      rating: defaultValues.rating,;
      review_text: defaultValues.review_text,;
      communication_rating: defaultValues.communication_rating,;
      quality_rating: defaultValues.quality_rating,;
      timeliness_rating: defaultValues.timeliness_rating,;
      would_work_again: defaultValues.would_work_again,;
      is_anonymous: defaultValues.is_anonymous} : {;
      rating: 0,;
      review_text: "",;
      communication_rating: undefined,;
      quality_rating: undefined,;
      timeliness_rating: undefined,;
      would_work_again: undefined,;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      is_anonymous: false}
  }),;
  const handleSubmit = async (values: ReviewFormValues) => {;
    const formattedData = {;
      ...values,;
      project_id: projectId,;
      reviewee_id: revieweeId},;
    const success = await onSubmit(formattedData),;
    if (success) {;
      form.reset();
    }
<<<<<<< HEAD
  },
  
<<<<<<< HEAD
  const watchRating = form.watch("rating"),
=======
  const watchRating = form.watch(&quot;rating");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6&quot;>
=======
  },;
  const watchRating = form.watch("rating"),;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {/* Main Rating */}
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name=&quot;rating&quot;
          rules={{ required: &quot;Rating is required" }}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="block text-center mb-2">
                How was your experience with {revieweeName}?
              </FormLabel>
              <FormControl>
                <div className="flex justify-center gap-1&quot;>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type=&quot;button"
=======
          name="rating";
          rules={{ required: "Rating is required" }}
          render={({ field }: { field: any }) => (;
            <FormItem>;
              <FormLabel className="block text-center mb-2">;
                How was your experience with {revieweeName}?;
              </FormLabel>;
              <FormControl>;
                <div className="flex justify-center gap-1">;
                  {[1, 2, 3, 4, 5].map((star) => (;
                    <button;
                      key={star}
                      type="button";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      onClick={() => field.onChange(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="focus:outline-none transition-transform hover:scale-110";
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
<<<<<<< HEAD
                    >
                      <Star
                        className={`h-10 w-10 ${
                          star <= (hoveredStar || field.value || 0)
                            ? "fill-yellow-400 text-yellow-400&quot;
                            : &quot;text-gray-300"
=======
                    >;
                      <Star;
                        className={`h-10 w-10 ${;
                          star <= (hoveredStar || field.value || 0);
                            ? "fill-yellow-400 text-yellow-400";
                            : "text-gray-300";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        } transition-colors`}
                      />;
                    </button>;
                  ))}
<<<<<<< HEAD
                </div>
              </FormControl>
              <div className="text-center mt-1 h-5&quot;>
                <FormMessage />
              </div>
            </FormItem>
=======
                </div>;
              </FormControl>;
              <div className="text-center mt-1 h-5">;
                <FormMessage />;
              </div>;
            </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          )}
        />;
        {/* Review Text */}
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name=&quot;review_text&quot;
          rules={{
            required: &quot;Please provide feedback&quot;,
            minLength: {
              value: 20,
              message: &quot;Review must be at least 20 characters&quot;}}}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=&quot;Share your experience and feedback..."
                  className="min-h-24 resize-none"
=======
          name="review_text";
          rules={{;
            required: "Please provide feedback";
            minLength: {;
              value: 20;
              message: "Review must be at least 20 characters"}}}
          render={({ field }: { field: any }) => (;
            <FormItem>;
              <FormLabel>Your Review</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder="Share your experience and feedback...";
                  className="min-h-24 resize-none";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
        {/* Additional Rating Categories (only shown if main rating is provided) */}
<<<<<<< HEAD
        {(watchRating ?? 0) > 0 && (
          <div className="space-y-6 border-t pt-6">
            <h3 className="font-medium text-sm&quot;>Additional Ratings (Optional)</h3>
            
=======
        {(watchRating ?? 0) > 0 && (;
          <div className="space-y-6 border-t pt-6">;
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            {/* Communication */}
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;communication_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Communication</FormLabel>
                  <FormControl>
                    <RadioGroup
=======
              name="communication_rating";
              render={({ field }: { field: any }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Communication</FormLabel>;
                  <FormControl>;
                    <RadioGroup;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem;
                          key={value}
<<<<<<< HEAD
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal&quot;>
=======
                          className="flex items-center space-x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.toString()} />;
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;quality_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Quality of Work</FormLabel>
                  <FormControl>
                    <RadioGroup
=======
              name="quality_rating";
              render={({ field }: { field: any }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Quality of Work</FormLabel>;
                  <FormControl>;
                    <RadioGroup;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem;
                          key={value}
<<<<<<< HEAD
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal&quot;>
=======
                          className="flex items-center space-x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.toString()} />;
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;timeliness_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Timeliness</FormLabel>
                  <FormControl>
                    <RadioGroup
=======
              name="timeliness_rating";
              render={({ field }: { field: any }) => (;
                <FormItem className="space-y-2">;
                  <FormLabel>Timeliness</FormLabel>;
                  <FormControl>;
                    <RadioGroup;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4";
                    >;
                      {[1, 2, 3, 4, 5].map((value) => (;
                        <FormItem;
                          key={value}
<<<<<<< HEAD
                          className="flex items-center space-x-2"
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal&quot;>
=======
                          className="flex items-center space-x-2";
                        >;
                          <FormControl>;
                            <RadioGroupItem value={value.toString()} />;
                          </FormControl>;
                          <FormLabel className="cursor-pointer font-normal">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;would_work_again"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Would you work with {revieweeName} again?</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2&quot;>
                        <Switch
                          aria-label=&quot;Would work again"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <span className="text-sm text-muted-foreground&quot;>
                          {field.value ? &quot;Yes&quot; : &quot;No&quot;}
                        </span>
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
=======
              name="would_work_again";
              render={({ field }: { field: any }) => (;
                <FormItem>;
                  <div className="flex items-center gap-2">;
                    <FormLabel>Would you work with {revieweeName} again?</FormLabel>;
                    <FormControl>;
                      <div className="flex items-center space-x-2">;
                        <Switch;
                          aria-label="Would work again";
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />;
                        <span className="text-sm text-muted-foreground">;
                          {field.value ? "Yes" : "No"}
                        </span>;
                      </div>;
                    </FormControl>;
                  </div>;
                  <FormMessage />;
                </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            />;
          </div>;
        )}
;
        {/* Anonymous Review */}
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name=&quot;is_anonymous"
          render={({ field }: { field: any }) => (
            <FormItem>
              <div className="flex items-center gap-2&quot;>
                <FormControl>
                  <Switch
                    aria-label=&quot;Submit anonymously"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer font-normal">
                  Submit anonymously
                </FormLabel>
              </div>
              <p className="text-xs text-muted-foreground mt-1&quot;>
                Anonymous reviews won't display your name but will still be linked to your account.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type=&quot;submit"
          className="w-full&quot;
          disabled={isSubmitting || !form.formState.isValid}
        >
          {isSubmitting ? &quot;Submitting...&quot; : defaultValues ? &quot;Save Changes&quot; : &quot;Submit Review"}
        </Button>
      </form>
    </Form>
  )
=======
          name="is_anonymous";
          render={({ field }: { field: any }) => (;
            <FormItem>;
              <div className="flex items-center gap-2">;
                <FormControl>;
                  <Switch;
                    aria-label="Submit anonymously";
                    checked={field.value}
                    onCheckedChange={field.onChange}
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
        <Button;
          type="submit";
          className="w-full";
          disabled={isSubmitting || !form.formState.isValid}
        >;
          {isSubmitting ? "Submitting..." : defaultValues ? "Save Changes" : "Submit Review"}
        </Button>;
      </form>;
    </Form>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;