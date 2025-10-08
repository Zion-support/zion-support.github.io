import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle,
  Star,
  Play,
} from 'lucide-react';

const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // console.log('Form submitted:', formData);
  };

  const features = [
    {
      icon: <Calendar className='w-6 h-6' />,
      title: 'Schedule Demo',
      description: 'Book a personalized demo with our AI experts.',
    },
    {
      icon: <Play className='w-6 h-6' />,
      title: 'Live Demo',
      description:
        'See our AI solutions in action with real-time demonstrations.',
    },
    {
      icon: <CheckCircle className='w-6 h-6' />,
      title: 'Custom Solutions',
      description:
        'Get tailored AI solutions for your specific business needs.',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>Demo</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Experience our revolutionary AI solutions in action.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <Play className='h-8 w-8 text-blue-600 mr-3' />
              <h3 className='text-xl font-semibold'>AI Platform Demo</h3>
            </div>
            <p className='text-gray-600 mb-4'>
              Experience our revolutionary AI platform delivering unprecedented
              business transformation.
            </p>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
            >
              {isPlaying ? 'Pause Demo' : 'Start Demo'}{' '}
              <Play className='h-4 w-4 ml-2' />
            </button>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <CheckCircle className='h-8 w-8 text-green-600 mr-3' />
              <h3 className='text-xl font-semibold'>Success Stories</h3>
            </div>
            <p className='text-gray-600 mb-4'>
              See how our AI solutions have transformed businesses across
              industries.
            </p>
            <Link
              to='/case-studies'
              className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
            >
              View Stories <Star className='h-4 w-4 ml-2' />
            </Link>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow'>
            <div className='flex items-center mb-4'>
              <Calendar className='h-8 w-8 text-purple-600 mr-3' />
              <h3 className='text-xl font-semibold'>Schedule Demo</h3>
            </div>
            <p className='text-gray-600 mb-4'>
              Book a personalized demo with our AI experts.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
            >
              Schedule Now <Clock className='h-4 w-4 ml-2' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
