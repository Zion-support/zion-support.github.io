 from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  comp: string;
  service: string;
  message: string
}

interface ContactFormErrors {
  [key: string]: string}

export function EnhancedContact(...args[]):  {

  const [formData, setFormData] = useState<any>({

    name: '',;
    email: '',;
    phone: '',;
    comp: '',;
    service: 'general',;
    message: ''
  }) ;

  const [errors, setErrors] = useState<any> ({}) ;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

    { value: 'cloud-infrastructure', label: 'Cloud Infrastructure' },;
    { value: 'cybersecurity', label: 'Cybersecurity' },;
    { value: 'digital-transformation', label: 'Digital Transformation' },;
    { value: 'consulting', label: 'IT Consulting' },;
    { value: 'quantum-computing', label: 'Quantum Computing' },;
    { value: 'green-it', label: 'Green IT Solutions' };
  ];

    const newErrors: ContactFormErrors = {};
    }
      })} catch(error) {

  { delay: 0.2,
  type: "spring"
                      <AlertCircle className="w-4 h-4 mr-1"  />
                      {errors['name']}
                      <AlertCircle className="w-4 h-4 mr-1"  />
                      {errors['email']}
                      <AlertCircle className="w-4 h-4 mr-1"  />
                      {errors['message']}
