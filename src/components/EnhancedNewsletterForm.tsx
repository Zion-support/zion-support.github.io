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

      {isSubmitted ? (;
        <div className='text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40'>;
          <p className='text-white font-medium'>Thank you for subscribing!</p>;
          <p className='text-zion-slate-light mt-1'>;

      <div className='mt-4 flex items-center text-xs text-zion-slate-light'>;
        <div className='flex -space-x-1 mr-2'>;
          {[...Array(3)].map((_, i) => (;

            <div
              key={i}
              className='h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan'>              {String && String.fromCharCode(65 + i)}
            </div>;
          ))}

            We&apos;ll keep you updated with the latest from Zion.
          </p>

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
            type="email"
            id="enhanced-newsletter-email"
            name="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
      
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">
        <div className="flex -space-x-1 mr-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">
    } catch (err: any) {;
      logErrorToProduction('Newsletter subscription error:', { data: err });
      toast.error("Unable to subscribe right now. Please try again later.");
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;
      <div className="flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3">;
          <Mail className="h-6 w-6" />;
        </div>;
        <div>;
          <h3 className="text-lg font-bold text-white">Stay Updated</h3>;
          <p className="text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>;
        </div>;
      </div>;
      {isSubmitted ? (;
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">;
          <p className="text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>;
        </div>;
      ) : (;
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <label htmlFor="enhanced-newsletter-email" className="sr-only">;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type="email";
            id="enhanced-newsletter-email";
            name="email";
            placeholder="Enter your email";
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete="email";
            required;
          />;
          <Button;
            type="submit";
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>;
        </form>;
      )}
;
      <div className="mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (;
            <div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan">;
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
  );
      {is_submitted ? (
        <div className='text - center p - 4 rounded - lg bg - zion - purple / 20 border border - zion - purple / 40'>;
          <p className='text - white font - medium'>Thank you for subscribing!</p>;
          <p className='text - zion - slate - light mt - 1'>;
            We & apos;ll keep you updated with the latest from Zion.;
          </p>;
        </div>) : (
        <form;
          on_submit={handle_submit}
          className='flex flex - col space - y-3 sm:flex - row sm:space - y-0 sm:space - x-2';
        >;
          <label html_for='enhanced - newsletter - email' className='sr - only'>;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type='email';
            id='enhanced - newsletter - email';
            name='email';
            placeholder='Enter your email';
            className='flex - grow bg - zion - blue - dark text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple';
            value={email}
            on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
              set_email (e.target.value);
            }
            auto_complete='email';
            required;
          />;
          <Button;
            type='submit';
            disabled={is_submitting}
            className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple'          >;
            {is_submitting ? 'Subscribing...' : 'Subscribe'}
          </Button>;
        </form>)}
      <div className='mt - 4 flex items - center text - xs text - zion - slate - light'>;
        <div className='flex -space - x-1 mr - 2'>;
          {[...Array (3)].map ((_, i) => (
            <div;
              key={i}
              className='h - 5 w - 5 rounded - full border border - zion - blue - dark bg - zion - blue flex items - center justify - center text - zion - cyan';
            >              {String.fromCharCode (65 + i)}
            </div>))}
        </div>;
        <span > Join 10, 000+ tech professionals who already subscribe</span>;
      </div>;
    </div>);

