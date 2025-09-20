import React from ";
import { Dialog;
DialogContent;
DialogHeader;
DialogTitle
} from "
import { Button } from "
import { Input } from "
import { Textarea } from ";
import { Form;
FormField;
FormItem;
FormLabel;
FormControl;
FormMessage
} from "
import { useForm } from "
import { yupResolver } from "
import * as yup from ";
import { Mail;, PaperPlane } from "
import api from "
import { toast } from "

interface ContactPublisherModalProps {;
isOpen: boolean;
onClose: () => void;,
publisherName: string;
publisherEmail?: string;
productId?: string;
}
type FormValues = {;
subject: string;,
message: string;,
}

const schema = z.object({;
subject: z;
.string()
.min(5, "Subject must be at least 5 characters")
.nonempty("Subject is required"),
message: z;
.string()
.min(20, "Message must be at least 20 characters")
.nonempty("Message is required"),
})

export export function ContactPublisherModal({;
isOpen;
onClose;
publisherName;
publisherEmail,
}: ContactPublisherModalProps) {
const [isSubmitting; setIsSubmitting] = React.useState(false)

const form = useForm<FormValues>({;
resolver: zodResolver(schema)
mode: ",
defaultValues: { subject: "", message: "" }
})

const handleSend = async () => {
const values = form.getValues()
setIsSubmitting(true)
try {
await api.post("/messages", {
productId;
subject: values.subject;,
body: values.message;,
})
toast.success("Message sent!")
form.reset()
onClose()
} catch (err: any) {
toast.error(err?.message || "Failed to send message")
} finally {
setIsSubmitting(false)
}
}

return (
<Dialog open={isOpen} onOpenChange={onClose}>
<DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm: max-w-md">
<DialogHeader>
<DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
<Mail className="h-5 w-5 text-zion-cyan" />
Contact Publisher;
</DialogTitle>
</DialogHeader>
{publisherEmail && (
<div className="mb-4 text-zion-slate-light">
<span className="block">Email:</span>
<a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">
{publisherEmail}
</a>
</div>
)}
<Form {...form}>
<form onSubmit={(e) => e.preventDefault()} className="space-y-4">
<FormField;
control={form.control}
name="
render={({ field }) => (
<FormItem>
<FormLabel>Subject</FormLabel>
<FormControl>
<Input;
placeholder="
className="bg-zion-blue border-zion-blue-light text-white"
{...field}
/>
</FormControl>
<FormMessage className="text-red-500" />
</FormItem>
)}
/>
<FormField;
control={form.control}
name="
render={({ field }) => (
<FormItem>
<FormLabel>Message</FormLabel>
<FormControl>
<Textarea;
placeholder={`Message to ${publisherName}...`}
className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
{...field}
/>
</FormControl>
<FormMessage className="text-red-500" />
</FormItem>
)}
/>
<Button;
variant="primary"
onClick={handleSend}
className="w-full"
disabled={!form.formState.isValid || isSubmitting}
>
<PaperPlane className="mr-1" />
{isSubmitting ? "Sending..." : "Send Message"}
</Button>
</form>
</Form>
</DialogContent>
</Dialog>
)
}
<//Dialog><///Dialog>
return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <FocusLock disabled={!isOpen} returnFocus>
          <DialogContent
className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'
            onKeyDown={handleKeyDown}
            aria-modal='true'
            aria-labelledby='contact-publisher-title'
          >
            <DialogHeader>
              <DialogTitle
id='contact-publisher-title'
                className='text-xl font-bold text-white flex items-center gap-2'
              >
                <Mail className='h-5 w-5 text-zion-cyan' />
                Contact Publisher
              </DialogTitle>
            </DialogHeader>
            {error && <p className='text-red-500 mb-2'>{error}</p>}
            {publisherEmail && (
              <div className='mb-4 text-zion-slate-light'>
                <span className='block'>Email:</span>
                <a
href={`mailto:${publisherEmail}`}
                  className='text-zion-cyan hover:underline truncate block'
                >
                  {publisherEmail}
                </a>
              </div>
            )}
            <Form {...form}>
              <form onSubmit={e => e.preventDefault()} className='space-y-4'>
                <FormField
control={form.control}
                  name='subject'
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
placeholder='Subject'
                          className='bg-zion-blue border-zion-blue-light text-white'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
                <FormField
control={form.control}
                  name='message'
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
placeholder={`Message to ${publisherName}...`}
                          className='bg-zion-blue border-zion-blue-light text-white min-h-[120px]'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
                <Button
onClick={handleSend}
                  className='w-full'
                  disabled={!form.formState.isValid |isSubmitting}
                >
                  <SendIcon className='mr-2' />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </FocusLock>
      </Dialog>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />    <Dialog open={isOpen} onOpenChange={onClose}>
      <FocusLock disabled={!isOpen} returnFocus>
        <DialogContent
className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md"
          onKeyDown = {handleKeyDown,}          aria-modal="true"
          aria-labelledby="contact-publisher-title"
        >
          <DialogHeader>
            <DialogTitle id="contact-publisher-title" className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {publisherEmail && (
            <div className="mb-4 text-zion-slate-light">
            <span className="block">Email:</span>
            <a href={`mailto:${publisherEmail}`} className="text-zion-cyan hover:underline truncate block">
              {publisherEmail}
            </a>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={(e,) => e.preventDefault()} className="space-y-4">
            <FormField
control = {form.control,}
              name="subject"
              render={({ field }: { field: any },) => (                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
placeholder="Subject"
                      className="bg-zion-blue border-zion-blue-light text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
control = {form.control,}
              name="message"
              render={({ field }: { field: any },) => (                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
placeholder={`Message to ${publisherName}...`}
                      className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
onClick = {handleSend,}
              className="w-full"
              disabled = {!form.formState.isValid |isSubmitting,}            >
              <SendIcon className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
        </DialogContent>
      </FocusLock>
    </Dialog>
    <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  ) </>
  )
}
