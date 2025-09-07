
import React from 'react',;''
import FocusLock from 'react-focus-lock',;'
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;'
  DialogTitle} from '@/components/ui/dialog',;''
import { Button } from '@/components/ui/button',;''
import { Input } from '@/components/ui/input',;''
import { Textarea } from '@/components/ui/textarea',;'

import {;
  Form,;
  FormField,;
  FormItem,;

  FormLabel,;
  FormControl,;'
  FormMessage} from '@/components/ui/form',;''
import { useForm, type Resolver } from 'react-hook-form',;''
import { yupResolver } from '@hookform/resolvers/yup',;''
import * as yup from 'yup',;''
import { SendIcon, Mail } from 'lucide-react';''
import api from '@/services/apiClient',;''
import { toast } from '@/hooks/use-toast',;''
import { useAuth } from '@/hooks/useAuth',;''
import { LoginModal } from '@/components/auth/LoginModal',;'

;
interface ContactPublisherModalProps {;
  isOpen:boolean,;
  onClose:() => void,;
  publisherName:string,;
  publisherEmail?:string,;}
  productId?:string;}
}
;
type FormValues = {;
  subject:string,;}
  message:string;}
},;
;

const schema:yup.ObjectSchema<FormValues> = yup;
</FormValues>
  const [error, setError] = React.useState<string | null>(null),;
</string>
  const form = useForm<FormValues>({;
</FormValues>)
    resolver:yupResolver(schema) as Resolver<FormValues>,;
</FormValues>
    <>;
    <Dialog open={isOpen} onOpenChange={onClose}>;
</Dialog>
      <FocusLock disabled={!isOpen} returnFocus>;
</FocusLock>
        <DialogContent;'
          className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md";"
          onKeyDown={handleKeyDown}"
          aria-modal="true";""
          aria-labelledby="contact-publisher-title";"
        >;
</DialogContent>
          <DialogHeader>;
</DialogHeader>"
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">;"
</DialogTitle>"
              <Mail className="h-5 w-5 text-zion-cyan" />;"
</Mail>
            </DialogTitle>;
          </DialogHeader>;"
          {error && <p className="text-red-500 mb-2">{error}</p>}""
            <div className="mb-4 text-zion-slate-light">;"
</div>"
            <span className="block">Email:</span>;""
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">;"
</a>
            </a>;
          </div>;
        <Form {...form}>;
</Form>"
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">;"
</form>
            <FormField;
              control={form.control}"
              name="subject";"
              render={({ field } { field:any }) => (;
</FormField>
                <FormItem>;
</FormItem>
                  <FormLabel>Subject</FormLabel>;
                  <FormControl>;
</FormControl>
                    <Input;"
                      placeholder="Subject";""
                      className="bg-zion-blue border-zion-blue-light text-white";"
                      {...field}
                    />;
</Input>
                  </FormControl>;"
                  <FormMessage className="text-red-500" />;"
</FormMessage>)

                </FormItem>;              )}
            <FormField;

              control={form.control}"
              name="message";"
              render={({ field } { field:any }) => (;
</FormField>
                <FormItem>;
</FormItem>
                  <FormLabel>Message</FormLabel>;
                  <FormControl>;
</FormControl>
                    <Textarea;
                      placeholder={`Message to ${publisherName}...`}"
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";"
                      {...field}
                    />;
</Textarea>
                  </FormControl>;"
                  <FormMessage className="text-red-500" />;"
</FormMessage>)

                </FormItem>;              )}
            <Button;

              onClick={handleSend}"
              className="w-full";"
              disabled={!form.formState.isValid || isSubmitting}
            >;
</Button>"
              <SendIcon className="mr-2" />;"
</SendIcon>

            </Button>;
          </form>;
        </Form>;
        </DialogContent>;
      </FocusLock>;
    </Dialog>;
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
</LoginModal>
    </>;
  ),}
 const schema: yup.ObjectSchema<FormValues /> = yup .object ({subject: yup .string () .min (5, 'Subject must be at least 5 characters') .required ('Subject is required'),  message: yup .string () .min (20, 'Message must be at least 20 characters') .required ('Message is required')}) .required ()return (<> <Dialog open= {isOpen ;}
}onOpenChange= {onClose ;}
} /> <FocusLock disabled= {!isOpen ;}
}returnFocus /> <DialogContent  /> <DialogHeader /> <DialogTitle id=\"contact-publisher-title\" className=\"text-xl font-bold text-white flex items-center gap-2\"  /> <Mail className=\"h-5 w-5 text-zion-cyan\" /> Contact Publisher </DialogTitle> </DialogHeader> <FormItem /> <FormLabel />Subject</FormLabel> <FormControl /> <Input /> </FormControl> <FormMessage className=\"text-red-500\" /> </FormItem>) \";\"}/> <FormField <FormItem /> <FormLabel />Message</FormLabel> <FormControl /> <Textarea /> </FormControl> <FormMessage className=\"text-red-500\" /> </FormItem>)}/> <Button </Button /> </form> </Form> </DialogContent> </FocusLock> </Dialog> <LoginModal isOpen= {loginOpen ;}
}onOpenChange= {setLoginOpen ;}
:temp_broken_files/profile/ContactPublisherModal.tsx;}
}/> </>)\"}'\";
}/> </>)}'\";
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ContactPublisherModal.tsx;
  ),;}

 const schema: yup.ObjectSchema<FormValues> = yup .object ({;
</FormValues>
return (<> <Dialog open= {;
  isOpen ;
}onOpenChange= {;
  onClose ;
}> <FocusLock disabled= {;
</Dialog>)"
}returnFocus> <DialogContent > <DialogHeader> <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2" > <Mail className="h-5 w-5 text-zion-cyan" /> Contact Publisher </DialogTitle> </DialogHeader> <FormItem> <FormLabel>Subject</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className="text-red-500" /> </FormItem>) ";"}/> <FormField <FormItem> <FormLabel>Message</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage className="text-red-500" /> </FormItem>) ;"
</DialogContent>
}/> <Button </Button> </form> </Form> </DialogContent> </FocusLock> </Dialog> <LoginModal isOpen= {;
  loginOpen ;
}onOpenChange= {;
  setLoginOpen ;
:temp_broken_files/profile/ContactPublisherModal.tsx;"
}/> </>) ;"}'""
}/> </>) ;"
}'""
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ContactPublisherModal.tsx;"

