export default ContactPage;
'use client';import React;
'use client'
, { useState, useCallback } from 'react'
  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  });const [isSubmitting, setIsSubmitting] = useState(false)
    setSubmitStatus('idle');try {// Simulate form submission;
      await new Promise(const resolve = > setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}

                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}

                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}

