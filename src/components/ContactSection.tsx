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
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((err) => {
        setIsSubmitting(false),
        toast({


          title: "Submission Error",
          description: err.message,
          variant: "destructive"})
      })
  },




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
                </Link>
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
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.name && (
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
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.email && (
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
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {errors.subject && (
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
                    rows = {4,}
                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}set_errors (field_errors);
toast ({
  return;
}set_errors ({
});
setIsSubmitting (true);
}) .catch ( (err) => {
  setIsSubmitting (false);
toast ({
  title: "Submission Error";
description: err.message;
});
}";
}</div> <div> <label html_for="email" className="block text - sm font - medium text - zion - slate - light mb - 1" > Email </label> <Input) ";
}</div> </div> <div> <label html_for="subject" className="block text - sm font - medium text - zion - slate - light mb - 1" > Subject </label> <Input) ";
}</div> <div> <label html_for="message" className="block text - sm font - medium text - zion - slate - light mb - 1" > Message </label> <Textarea);
}</div> <div> <Button > {';
  is_submitting ? 'Sending...' : 'Send Message';
}</Button>);
}</div> </form> </div> </div> </div> </div> </section>);
}'"}
}
