

      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed') {
          toast.success(data.message || "You're already subscribed!")
        } else {

          toast.success(data.message || "Thanks for subscribing!")
        }
        setIsSubmitted(true),;
        setEmail("");
      } else {;
        // Handle error responses;
        logErrorToProduction('Newsletter subscription failed:', { data: data }),;
        toast.error(data.error || "Subscription failed. Please try again.");
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err }),
      toast.error("Unable to subscribe right now. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  },

  return (
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Stay Updated</h3>
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>

        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
          <label htmlFor="enhanced-newsletter-email" className="sr-only">
            Email address for newsletter subscription
          </label>
          <Input

}
