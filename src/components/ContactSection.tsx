
import { useState } from "react",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/components/ui/use-toast",
import z from "zod",import { Mail } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""}),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitted, setSubmitted] = useState(false),  const [errors, setErrors] = useState<{
    name?: string,
    email?: string,
    subject?: string,
    message?: string
  }>({}),

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target,
    setFormData((prev) => ({ ...prev, [name]: value })),
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),

    const schema = z.object({
      name: z.string().min(2, "Name is required"),
      email: z.string().email("Enter a valid email"),
      subject: z.string().min(2, "Subject is required"),
      message: z.string().min(10, "Message must be at least 10 characters")}),
    const result = schema.safeParse(formData),
    if (!result.success) {
      const fieldErrors: Record<string string> = {},
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      }
      setErrors(fieldErrors),
      toast({
        title: "Form Validation Error",
        description: result.error.errors[0]?.message || "Please check your form and try again",
        variant: "destructive"}),
      return      return;
    }

    setErrors({}),
    setIsSubmitting(true),

    fetch(&quot;/api/contact&quot;, {
      method: &quot;POST&quot;,
      headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
      body: JSON.stringify(formData)})
      .then(async (res) => {
        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message")
        }
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),
        setSubmitted(true),
        setTimeout(() => setSubmitted(false), 2000),
        setFormData({ name: "", email: "", subject: "", message: "" })      })
      .catch((err) => {
        setIsSubmitting(false),
        toast({
          title: &quot;Submission Error&quot;,
          description: err.message,
          variant: "destructive"})
      })
  },      });
  };

  return (
    <section className=&quot;py-20 bg-zion-blue&quot; id=&quot;contact&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center&quot;>
          <div>
            <GradientHeading>Get In Touch</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl mb-8&quot;>
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.
            </p>
            <div className=&quot;flex items-center mb-6&quot;>
              <div className=&quot;mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan&quot;>
                <Mail className=&quot;h-6 w-6&quot; />
              </div>
              <div>
                <p className=&quot;text-white font-semibold&quot;>Email Us</p>
                <a href=&quot;mailto:commercial@ziontechgroup.com&quot; className=&quot;text-zion-cyan hover:text-zion-purple transition-colors&quot;>
                  commercial@ziontechgroup.com
                </Link>
              </div>
            </div>
            <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;>
              Request Commercial Proposal
            </Button>
          </div>
          <div className=&quot;relative&quot;>
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30&quot;></div>
            <div className=&quot;relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8&quot;>
              <h3 className=&quot;text-xl font-bold mb-6 text-white&quot;>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                <div className=&quot;grid grid-cols-1 gap-6 sm:grid-cols-2&quot;>                  <div>
                    <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                      Name
                    </label>
                    <Input
                      id=&quot;name&quot;
                      name=&quot;name&quot;
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.name && (
                      <p className=&quot;mt-1 text-sm text-red-500&quot;>{errors.name}</p>                    )}
                  </div>
                  <div>
                    <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                      Email
                    </label>
                    <Input
                      id=&quot;email&quot;
                      name=&quot;email&quot;
                      type=&quot;email&quot;
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.email && (
                      <p className=&quot;mt-1 text-sm text-red-500&quot;>{errors.email}</p>                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor=&quot;subject&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Subject
                  </label>
                  <Input
                    id=&quot;subject&quot;
                    name=&quot;subject&quot;
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {errors.subject && (
                    <p className=&quot;mt-1 text-sm text-red-500&quot;>{errors.subject}</p>                  )}
                </div>
                <div>
                  <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-zion-slate-light mb-1&quot;>
                    Message
                  </label>
                  <Textarea
                    id=&quot;message&quot;
                    name=&quot;message&quot;
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {errors.message && (
                    <p className=&quot;mt-1 text-sm text-red-500&quot;>{errors.message}</p>                  )}
                </div>
                <div>
                  <Button
                    type=&quot;submit&quot;
                    className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                    disabled={isSubmitting}                  >
                    {_isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitted && (
                    <p className=&quot;text-green-500 text-center mt-2&quot;>Thank you! We'll be in touch.</p>                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
