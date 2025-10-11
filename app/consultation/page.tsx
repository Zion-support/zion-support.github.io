import { ArrowRight, CheckCircle, Clock, Users, Target } from 'lucide-react';
const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Data Analytics',
    'Custom Development',
    'IT Consulting',
    'Digital Transformation',
    'Other'
  ];
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];
  const benefits = [
    {
      icon: User,
      title: 'Expert Consultation',
      description: 'Get advice from industry experts with years of experience in AI and IT solutions.'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works best for your schedule with our flexible booking system.'
    },
    {
      icon: MessageSquare,
      title: 'Personalized Solutions',
      description: 'Receive tailored recommendations based on your specific business needs and goals.'
    },
    {
      icon: CheckCircle,
      title: 'Follow-up Support',
      description: 'Get ongoing support and guidance to ensure successful implementation of solutions.'
    }
  ];
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Consultation Requested!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
          >
            Request Another Consultation
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Footer />
    </>
  );
};
export default ConsultationPage;
