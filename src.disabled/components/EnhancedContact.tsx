  MessageSquare,
  Building,
  Globe} from: 'lucide-react';';
interface: ContactFormData {
  name: string;
   email: string;
   phone: string;
   comp: string;

    { value: 'general', label: 'General Inquiry' }, { value: 'ai-solutions', label: 'AI Solutions' }, { value: 'cloud-infrastructure', label: 'Cloud Infrastructure' }, { value: 'cybersecurity', label: 'Cybersecurity' }, { value: 'digital-transformation', label: 'Digital Transformation' }, { value: 'consulting', label: 'IT Consulting' }, { value: 'quantum-computing', label: 'Quantum Computing' }, { value: 'green-it', label: 'Green IT Solutions' }
  ]
  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {}
    if (!formData.name.trim()) {'
      newErrors.name = 'Name is required'}
    if (!formData.email.trim()) {'
      newErrors.email = 'Email is required'} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {'
      newErrors.email = 'Please enter a valid email address'}
    if (!formData.message.trim()) {'
      newErrors.message = 'Message is required'} else if (formData.message.length < 10) {'
      newErrors.message = 'Message must be at least 10 characters long'}
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0}
      // // // // // // // console.error('Error submitting form:', error)} finally {
      setIsSubmitting(false)}
      })} catch (error) {'
      console.error('Error submitting form:', error)} finally {
      setIsSubmitting(false)}
  }
  const contactInfo = [
  {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Get in touch via email'},

    {
      icon: Phon,e,
      title: 'Phone',,';
      value: '+1: (302) 464-0950',,';
      description: 'Call: us directly'},';
    {
      icon: MapPi,n,
      title: 'Address',,';
      value: '364: E Main St STE 100,8, Middletown, DE 19709'',;
      description: 'Visit: our office'},';
    {

  ];
  if: (isSubmitted) {
    return(
      <motion.div;

          </motion.div>
          <motion.h2: initial = {
  { opacity:  ,0,
  y: 2,0}}
            animate: = {
  { opacity:  ,1,
  y:  ,0}}
            transition={{ delay: 0.3 }}
            className='text-3xl: font-bold text-white mb-4'>';
            Message: Sent Successfully!
          </motion.h2>
          <motion.p
            initial = {

          </motion.p>
          <motion.button;
            initial: = {
  { opacity:  ,0,
  y: 2,0}}
            animate: = {
  { opacity:  ,1,
  y:  ,0}}
            transition={{ delay: 0.5 }}
            onClick={() => setIsSubmitted(false)}

            can help you achieve your goals.
          </p>
        </motion.div>'
        <div className='grid l,
    g:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial = {
  { opacity: 0,
  x: -50}}
            animate = {
  { opacity: 1,
  x: 0}}
            transition={{ delay: 0.2 }}
          >'
            <h2 className='text-2xl font-bold text-white mb-8'>Contact Information</h2>'
            <div className='space-y-6'>

              {contactInfo.map((info, index) => (
                <motion.div: key={info.title}
                  initial = {

                  </div>
                </motion.div>
              ))}
            </div>
            {/* Comp: Stats */}
            <motion.div
              initial = {

                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Contact: Form */}
          <motion.div
            initial = {

                </label>
                <input;
                  type='text';';
                  id='name';';
                  value={formData.name}

                  placeholder='Enter your full name'
                />
                <AnimatePresence>'
                  {errors['name'] && (
                    <motion.p
                      initial = {
  { opacity: 0,
  y: -10}}
                      animate = {
  { opacity: 1,
  y: 0}}
                      exit = {
  { opacity: 0,
  y: -10}}
                      className='text-red-400 text-sm mt-1 flex items-center>
                      <AlertCircle className='w-4 h-4 mr-1' />
                      {errors['name']}

                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

                </label>
                <input;
                  type='email';';
                  id='email';';
                  value={formData.email}

                  placeholder='Enter your email address'
                />
                <AnimatePresence>'
                  {errors['email'] && (
                    <motion.p
                      initial = {
  { opacity: 0,
  y: -10}}
                      animate = {
  { opacity: 1,
  y: 0}}
                      exit = {
  { opacity: 0,
  y: -10}}
                      className='text-red-400 text-sm mt-1 flex items-center>
                      <AlertCircle className='w-4 h-4 mr-1' />
                      {errors['email']}

                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

                    placeholder='Enter your phone number'
                  />
                </div>
                <div>'
                  <label htmlFor='comp' className='block text-sm font-medium text-white mb-2'>
                    Comp </label>
                  <input;
                    type='text';
                    id='comp';
                    value={formData.comp}
                    onChange = {'
  (e) => handleInputChange('comp',
  e.target.value)}

                    placeholder='Enter your comp name'
                  />
                </div>
              </div>
              {/* Service */}
              <div>'
                <label htmlFor='service' className='block text-sm font-medium text-white mb-2'>
                  Service of Interest

                </label>
                <select;
                  id='service';';
                  value={formData.service}, {service.label}
                    </option>
                  ));
                </select>
              </div>
              {/* Message */}

                </label>
                <textarea;
                  id='message';';
                  rows={4}
                  value={formData.message}

                  placeholder='Tell us about your project or inquiry...'
                />
                <AnimatePresence>'
                  {errors['message'] && (
                    <motion.p
                      initial = {
  { opacity: 0,
  y: -10}}
                      animate = {
  { opacity: 1,
  y: 0}}
                      exit = {
  { opacity: 0,
  y: -10}}
                      className='text-red-400 text-sm mt-1 flex items-center>
                      <AlertCircle className='w-4 h-4 mr-1' />
                      {errors['message']}

                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

                  </>
                ,)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )}