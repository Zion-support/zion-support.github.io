<<<<<<< HEAD

=======
import { useState } from "react",;
import { Star } from "lucide-react",;
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
;
interface ReviewFormValues {;
  rating?:number,;
  review_text?:string,;
  communication_rating?:number,;
  quality_rating?:number,;
  timeliness_rating?:number,;
  would_work_again?:boolean,;
  is_anonymous?:boolean,;}
;
interface ReviewFormProps {;
  projectId:string,;
  revieweeId:string,;
  revieweeName:string,;
  onSubmit:(data:any) => Promise<boolean>, ;
  defaultValues?:Review,;
  isSubmitting:boolean;
}
;
export function ReviewForm({;
  projectId,;
  revieweeId,;
  revieweeName,;
  onSubmit,;
  defaultValues,;
  isSubmitting} ReviewFormProps) {;
  const [hoveredStar, setHoveredStar] = useState<number>(0),;
  ;
  const form = useForm<ReviewFormValues>({;
    defaultValues:defaultValues ? {;
      rating:defaultValues.rating,;
      review_text:defaultValues.review_text,;
      communication_rating:defaultValues.communication_rating,;
      quality_rating:defaultValues.quality_rating,;
      timeliness_rating:defaultValues.timeliness_rating,;
      would_work_again:defaultValues.would_work_again,;
      is_anonymous:defaultValues.is_anonymous} {;
      rating:0,;
      review_text:"",;
      communication_rating:undefined,;
      quality_rating:undefined,;
      timeliness_rating:undefined,;
      would_work_again:undefined,;
      is_anonymous:false}
  }),;
  ;
  const handleSubmit = async (values:ReviewFormValues) => {;
    const formattedData = {;
      ...values,;
      project_id:projectId,;
      reviewee_id:revieweeId},;
    ;
    const success = await onSubmit(formattedData),;
    if (success) {;
      form.reset(),;
    }
  },;
  ;
  const watchRating = form.watch("rating"),;
  ;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">;
        {/* Main Rating */}
        <FormField;
          control={form.control}
          name="rating";
          rules={{ required:"Rating is required" }}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          render={({ field }) => (;
            <FormItem>;
              <FormLabel className="block text-center mb-2">;
                How was your experience with {revieweeName}?;
              </FormLabel>;
              <FormControl>;
                <div className="flex justify-center gap-1">;
                  {[1, 2, 3, 4, 5].map((star) => (;
<<<<<<< HEAD

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
=======
 import {;
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
interface ReviewFormValues {;
  rating?: number;
review text?: string;
communication rating?: number;
quality rating?: number;
timeliness rating?: number;
would work again?: boolean;
is anonymous?: boolean ;
}interface ReviewFormProps {;
  projectId: string;
revieweeId: string;
revieweeName: string;
onSubmit: (data: any) => Promise<boolean>;
defaultValues?: Review;
isSubmitting: boolean ;
}export function ReviewForm ({;
  projectId;
revieweeId;
revieweeName;
onSubmit;
defaultValues;
isSubmitting ;
}: ReviewFormProps) {;
  const [hoveredStar, setHoveredStar] = useState<number> (0);
defaultValues: defaultValues ? {;
  return (<Form {;
  ...form ;
}> <form onSubmit= {;
  form.handleSubmit (handleSubmit) ;
}className="space-y-6" > {;
  /* Main Rating */ ;
}<FormField control= {;"  form.control ";"}name="rating" rules= {;"  {";"  required: "Rating is required",
}
}render= {;
  ({;
  field ;
}: {;
  field: any ;"}) => (<FormItem> revieweeName ";"}? </FormLabel> <FormControl> className="focus:outline-none transition-transform hover:scale-110" aria-label= {;
  `Rate $ {;
  star ;
}star$ {;
  star > 1 ? 's' : '' ;
}` ;
}> <Star className= {;
  `h-10 w-10 $ {;"  star <= (hoveredStar || field.value || 0) /> </button>) ) ";"}</div> </FormControl> <div className="text-center mt-1 h-5" > <FormMessage /> </div> </FormItem>) ;
}/> {;"  /* Review Text */ ";"}<FormField <FormItem> <FormLabel>Your Review</FormLabel> <FormControl> <Textarea placeholder="Share your experience and feedback..." className="min-h-24 resize-none" {;
  ...field ;
}/> </FormControl> <FormMessage /> </FormItem>) ;
}/> {;
  /* Additional Rating Categories (only shown if main rating is provided) */ ;"}{";"  (watchRating ?? 0) > 0 && (<div className="space-y-6 border-t pt-6"> <h3 className="font-medium text-sm" >Additional Ratings (Optional) </h3> {;
  /* Communication */ ;
}<FormField <FormLabel>Communication</FormLabel> <FormControl> <RadioGroup onValueChange= {;
  (value) => field.onChange (parseInt (value) ) ;
}defaultValue= {;"  field.value?.toString () ";"}className="flex flex-wrap gap-4" > {;
  [1, 2, 3,  4, 5].map ( (value) => (<FormItem key= {;"  value ";"}className="flex items-center space-x-2" > <FormControl> <RadioGroupItem value= {;
  value.toString () ;
}/> </FormControl> </FormLabel> </FormItem>) ) ;
}</RadioGroup> </FormControl> <FormMessage /> </FormItem>) ;
}/> {;
  /* Quality */ ;
}<FormField <FormLabel>Quality of Work</FormLabel> <FormControl> <RadioGroup onValueChange= {;
  (value) => field.onChange (parseInt (value) ) ;
}defaultValue= {;"  field.value?.toString () ";"}className="flex flex-wrap gap-4" > {;
  [1, 2, 3,  4, 5].map ( (value) => (<FormItem key= {;"  value ";"}className="flex items-center space-x-2" > <FormControl> <RadioGroupItem value= {;
  value.toString () ;
}/> </FormControl> </FormLabel> </FormItem>) ) ;
}</RadioGroup> </FormControl> <FormMessage /> </FormItem>) ;
}/> {;
  /* Timeliness */ ;
}<FormField <FormLabel>Timeliness</FormLabel> <FormControl> <RadioGroup onValueChange= {;
  (value) => field.onChange (parseInt (value) ) ;
}defaultValue= {;"  field.value?.toString () ";"}className="flex flex-wrap gap-4" > {;
  [1, 2, 3,  4, 5].map ( (value) => (<FormItem key= {;"  value ";"}className="flex items-center space-x-2" > <FormControl> <RadioGroupItem value= {;
  value.toString () ;
}/> </FormControl> </FormLabel> </FormItem>) ) ;
}</RadioGroup> </FormControl> <FormMessage /> </FormItem>) ;
}/> {;"  /* Would Work Again */ ";"}<FormField <FormItem> <div className="flex items-center gap-2"> <FormLabel>Would you work with {;"  revieweeName ";"}again?</FormLabel> <FormControl> <div className="flex items-center space-x-2" > <Switch </span> </div> </FormControl> </div> <FormMessage /> </FormItem>) ;
}/> </div>) ;
}{;"  /* Anonymous Review */ '";"}<FormField <FormItem> <div className="flex items-center gap-2" > <FormControl> <Switch /> </FormControl> <FormLabel className="cursor-pointer font-normal"> Submit anonymously </FormLabel> </div> <p className="text-xs text-muted-foreground mt-1" > Anonymous reviews won't display your name but will still be linked to your account. </p> <FormMessage /> </FormItem>) ;
}/> <Button </Button> </form> </Form>) ;"}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
