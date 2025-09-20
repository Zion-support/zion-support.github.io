
const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string,
return (
    <section className="py-20 bg-zion-blue" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <GradientHeading>Get In Touch</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl mb-8">
              We have the equipment the parts and the maintenance services ready for you — right now. Contact us today.
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1" htmlFor="input-
                      Name
                    ">
                      Name
                    </label>
                    <Input
id="name"
                      name="name"
                      value = {formData.name,}
                      onChange = {handleChange,}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" htmlFor="input-
                      Email
                    ">
                      Email
                    </label>
                    <Input
id="email"
                      name="email"
                      type="email"
                      value = {formData.email,}
                      onChange = {handleChange,}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" htmlFor="input-
                    Subject
                  ">
                    Subject
                  </label>
                  <Input
id="subject"
                    name="subject"
                    value = {formData.subject,}
                    onChange = {handleChange,}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" htmlFor="input-
                    Message
                  ">
                    Message
                  </label>
                  <Textarea
id="message"
                    name="message"
                    rows = {4,}
                    value = {formData.message,}
                    onChange = {handleChange,}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <div>
                  <Button
type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled = {isSubmitting,}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitted && (
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}setErrors (fieldErrors)
toast ({
  return,
}setErrors ({
})
setIsSubmitting (true)
}) .catch ( (err) => {
  setIsSubmitting (false)
toast ({
  title: "Submission Error",
description: err.message,
})
};"
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" > Email </label> <Input) "
}</div> </div> <div> <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) "
}</div> <div> <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea)
}</div> <div> <Button > {'
  isSubmitting ? 'Sending...' : 'Send Message'
}</Button>)
}</div> </form> </div> </div> </div> </div> </section>)
}'"}