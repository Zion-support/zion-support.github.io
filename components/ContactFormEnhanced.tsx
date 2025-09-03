

const ContactFormEnhanced: React.FC = () => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))};

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();


    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('error')} finally {
      setIsSubmitting(false)}
  };



      <motion.div
        initial={{ opacity: 0, y: 20 }}

        animate={{ opacity: 1, y: 0 }}

          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input


              </div>
            </div>
            
            <div>

                  onChange={handleChange}
                  required
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'



              </div>
            </div>

          </div>


              Subject *

            </label>
            <input'
              type='text''
              id='subject''
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              required'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent''
              placeholder='What can we help you with?'
            />
          </div>

          <div>'
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
              Message *
            </label>'
            <div className='relative>
              <MessageSquare className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
              <textarea'
                id='message''
                name='message'

          </div>

          <div>

              Message *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea



                value={formData.message}

                onChange={handleChange}
                required
                rows={5}

                placeholder='Tell us about your project or requirements...'/>



            </div>

          </div>

            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>

                <span>Sending...</span>
              </>
            ) : (
              <>

              </>
            ,)}
          </motion.button>

                <Send className='w-5 h-5' />
                <span>Send Message</span>
</>

            )}
          </motion.button>

              <CheckCircle className='w-5 h-5' />
              <span>Message sent successfully! We&apos;ll get back to you soon.</span>'
            </motion.div>
          )}


          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}

              <AlertCircle className='w-5 h-5' />

              <span>Something went wrong. Please try again.</span>

            </motion.div>
          )}

        </form>
      </motion.div>
    </div>


