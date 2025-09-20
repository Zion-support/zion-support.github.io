import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault()
    setIsSubmitting(true)
    ;
    // Simulate API call;
    try {;
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setEmail('')
    } catch (error) {;
      setSubmitStatus('error')
    } finally {;
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Stay Updated;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI, quantum computing, and cutting-edge technology delivered to your inbox.;
          </p>
          ;
          {submitStatus === 'success' && (;
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
              Thank you for subscribing! You'll receive our latest updates soon.;
            </div>
          )}
          ;
          {submitStatus === 'error' && (;
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
              Sorry, there was an error subscribing. Please try again.;
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input;
                type="email";
                value={{email}}
                onChange={{(e) => setEmail(e.target.value)}}
                placeholder="Enter your email address";
                required;
                className="className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300";"
              />
              <button;
                type="submit";
                disabled={{isSubmitting}}
                className="className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105";"
              >
                {isSubmitting ? (;
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...;
                  </div>
                ) : (;
                  'Subscribe';
                )}
              </button>
            </div>
          </form>
          ;
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.;
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup;