import React, {useState}from 'react';
import {Mail, Phone, MapPin, Send, CheckCircle, AlertCircle}}from 'lucide-react';

interface FormData {name: string,}
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';,
      message: string,
}

<<<<<<< HEAD
  const [formData, setFormData] = useState<FormData>()
  })

  const [status, setStatus] = useState<FormStatus>()
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData()
=======
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',)
    message: '')
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',)
    message: '')
  })

<<<<<<< HEAD
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,
    const {name, value}}= e.target;
    setFormData(prev => ({)
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const  name, value } = e.target;
    setFormData(prev => ({
      ...prev,)
      [name]: value)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    }));
  }

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {,
=======
  const handleSubmit = async (e: React.FormEvent) => {;
>>>>>>> origin/main
    e.preventDefault();
    setStatus( type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));

      })
    }
  }

  const services = const services = const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',;
    'IT Consulting',;
    'Other';
              )}
              </div></div><span className="text-sm font-medium">{status.message}</span></span></span>
            </div>
          )}

            )}
          </button>
        </form>

              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ContactForm;
