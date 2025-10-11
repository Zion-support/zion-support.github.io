'use client';
import React from 'react';
'use client';
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Phone,
  Mail,

  MapPin,

  Clock,

  Send,

  CheckCircle;
  }
} from 'lucide-react'
const ContactPage: React.FC = () => {
  })
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = const handleInputChange = const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
;
    const { name, value } = e.target;
    }));
  }, []);
const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try 
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      })
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
  }
const services = const services = const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',

    'Cybersecurity',

    'DevOps',

    'Consulting',;
;
    'Other';
  ];
const contactInfo = const contactInfo = const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST'
  },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours'
  },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office'
  },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time'
  };
    };
  ];
                      ))}

                    </select>
                  </div>
                </div>
                </div>
                <button></button>
                  {
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
                  We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.
                </p></p></p>
              </div>
              {/* Contact Information */}
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p></p></p>
                </div>
                        {info.description}

                      </p></p></p>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
</div>
  ),
};

export default ContactPage;
