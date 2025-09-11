>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  name: string, email: string,
  company: string, phone: string,
  service: string,
  message: string,
}
const ContactForm: React.FC = () => {
  const [form_data, setFormData] = useState < FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
      setSubmitStatus('success');
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  }
  return (    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">;
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">;
        Get In Touch;
      </h2>;
      {submitStatus === 'success' && (;
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">;
          Thank you for your message! We&apos;ll get back to you soon.;
        </div>;
      )}
      {submitStatus === 'error' && (;
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">;
          Something went wrong. Please try again.;
        </div>;
      )}
      <form onSubmit={handleSubmit} className="space-y-6">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <div>;
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;
              Name *;
            </label>;

=======
}
};

export default ContactForm;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
