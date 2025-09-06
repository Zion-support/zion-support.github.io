
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {

} from "@/components/ui/form";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

  const handleSubmit = async (values: ReplyFormValues) => {;
    setIsSubmitting(true);
    try {;
      (await onSubmit(values && values.content), form && form.reset());
    } finally {;
      setIsSubmitting(false);
    }
  },

  return (
    <Card>;
      <CardContent className="pt-6">;
        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleSubmit)}>;
            <FormField
              control={form && form.control}
              name="content"
              render={({ field }) => (;
                <FormItem>;
                  <FormControl>;
                    <Textarea

                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>

