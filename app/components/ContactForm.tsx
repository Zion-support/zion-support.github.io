import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}
interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };