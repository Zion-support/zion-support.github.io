








  FormMessage
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
  onSubmit;



  initialValues?: Partial<PostFormValues>;




    } finally {












                  <FormMessage />;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="tags";
              render={({ field }) => (
                <FormItem>;
                  <FormLabel > Tags (comma - separated)</FormLabel>;
                  <FormControl>;
                    <Input;
                      placeholder="e.g. resume, hiring, flutter";
                      {...field}
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>)}
            />;
            <Button type="submit" disabled={is_submitting}>;
              {is_submitting ? "Submitting..." : is_editing ? "Update Post" : "Create Post"}
            </Button>;
          </form>;
        </Form>;
      </CardContent>;
    </Card>);
}
;
export default PostForm;
;

},





