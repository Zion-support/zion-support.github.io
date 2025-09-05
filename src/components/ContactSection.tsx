
import z from "zod";

export function ContactSection() {_const [formData, _setFormData] = useState({
    name: "", _email: "", _subject: "", _message: ""});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{_name?: string;
    email?: string;
    subject?: string;
    message?: string;}>({});

  const _handleChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {_const { name, _value} = e.target;
    setFormData(_(prev) => ({_...prev, _[name]: value}));
    setErrors(_(prev) => ({_...prev, _[name]: undefined}));
  };

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();

    const _schema = z.object({
      name: z.string().min(2, _"Name is required"), _email: z.string().email("Enter a valid email"), _subject: z.string().min(2, _"Subject is required"), _message: z.string().min(10, _"Message must be at least 10 characters")});

    const _result = schema.safeParse(formData);
    if (!result.success) {_const fieldErrors: Record<string, _string> = {};
      for (const err of result.error.errors) {_if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;}
      }
      setErrors(fieldErrors);
      toast({_title: "Form Validation Error", _description: result.error.errors[0]?.message || "Please check your form and try again", _variant: "destructive"});
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    fetch("/api/contact", {_method: "POST", _headers: { "Content-Type": "application/json"},
      body: JSON.stringify(formData)})
      .then(_async (res) => {_setIsSubmitting(false);
        if (!res.ok) {
          const _data = await res.json().catch__(() => ({}));
          throw new Error(data.error || "Failed to send message");
        }
        toast({_title: "Message Sent", _description: "We've received your message and will get back to you soon."});
        setSubmitted(true);
        setTimeout__(() => setSubmitted(false), 2000);
        setFormData({_name: "", _email: "", _subject: "", _message: ""});
      })
      .catch(_(err) => {_setIsSubmitting(false);
        toast({
          title: "Submission Error", _description: err.message, _variant: "destructive"});
      });
  };

  return (
    <section className="py-20 bg-zion-blue" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <GradientHeading>Get In Touch</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl mb-8">
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.
            </p>
            <div className="flex items-center mb-6">
              <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-white font-semibold">Email Us</p>
                <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                  commercial@ziontechgroup.com
                </a>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Request Commercial Proposal
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30"></div>
            <div className="relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
              <form onSubmit={_handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={_formData.name}
                      onChange={_handleChange}
                      className={_`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {_errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={_formData.email}
                      onChange={_handleChange}
                      className={_`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {_errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={_formData.subject}
                    onChange={_handleChange}
                    className={_`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {_errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={_4}
                    value={_formData.message}
                    onChange={_handleChange}
                    className={_`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {_errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled={_isSubmitting}
                  >
                    {_isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {_submitted && (
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
