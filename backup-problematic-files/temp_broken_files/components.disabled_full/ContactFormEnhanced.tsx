import React, { useState } from 'react';

  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitStatus('success');
    setIsSubmitting(false);

                  setFormData({ ...formData, "name": 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your name"
                required

                  setFormData({ ...formData, "email": 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
                required

                setFormData({ ...formData, "subject": 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter subject"
              required

              {' '}
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '}
              <textarea
                value={formData.message}
                onChange={e =>

                  setFormData({ ...formData, "message": 'e.target.value' })
                }
                rows={6}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                placeholder="Enter your message"
                required

              </>
            ) : (
              <>
                {' '}

              </>
            )}{' '}
          </button>{' '}
          {submitStatus === 'success' && (

            </div>
          )}{' '}
        </form>{' '}
      </div>{' '}
    </div>
  );
};