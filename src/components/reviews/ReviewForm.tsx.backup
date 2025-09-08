
import { useState } from "react",
import { Star } from 'lucide-react'
import { useForm } from "react-hook-form",
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage} from "@/components/ui/form",
import {
  RadioGroup;
  RadioGroupItem} from "@/components/ui/radio-group",
import { Switch } from "@/components/ui/switch";
import { Review } from "@/types/reviews";
interface ReviewFormValues {
  rating?: number;
  review_text?: string;
  communication_rating?: number;
  quality_rating?: number;
  timeliness_rating?: number;
  would_work_again?: boolean;
  is_anonymous?: boolean
}
interface ReviewFormProps {
<<<<<<< HEAD
  projectId: string;
  revieweeId: string;
  revieweeName: string;
  onSubmit: (data: any) => Promise<boolean>;
  defaultValues?: Review;
  isSubmitting: boolean
}

export function ReviewForm({
  projectId;
  revieweeId;
  revieweeName;
  onSubmit;
  defaultValues;
  isSubmitting}: ReviewFormProps) {
  const [hoveredStar, setHoveredStar] = useState<number>(0),
  
  const form = null;
              message: "Review must be at least 20 characters"}}}
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience and feedback..."
                  className="min-h-24 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Additional Rating Categories (only shown if main rating is provided) */}
        {(watchRating ?? 0) > 0 && (
          <div className="space-y-6 border-t pt-6">
            <h3 className="font-medium text-sm">Additional Ratings (Optional)</h3>
            
            {/* Communication */}
            <FormField
              control={form.control}
              name="communication_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Communication</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4">{[1, 2, 3, 4, 5].map((value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"><FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Quality */}
            <FormField
              control={form.control}
              name="quality_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Quality of Work</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4">{[1, 2, 3, 4, 5].map((value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"><FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Timeliness */}
            <FormField
              control={form.control}
              name="timeliness_rating"
              render={({ field }: { field: any }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Timeliness</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value?.toString()}
                      className="flex flex-wrap gap-4">{[1, 2, 3, 4, 5].map((value) => (
                        <FormItem
                          key={value}
                          className="flex items-center space-x-2"><FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {value}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Would Work Again */}
            <FormField
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
            />
          </div>
        )}
        
        {/* Anonymous Review */}
        <FormField
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
          disabled={isSubmitting || !form.formState.isValid}>{isSubmitting ? "Submitting..." : defaultValues ? "Save Changes" : "Submit Review"}
        </Button>
      </form>
    </Form>
=======
  projectId: string
  revieweeId: string
  revieweeName: string
  onSubmit: (data: any) => Promise<boolean>
  }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  )
}