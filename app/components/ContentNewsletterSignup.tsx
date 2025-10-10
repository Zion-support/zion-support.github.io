}

const ContentNewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = 'Stay Updated',
  description = 'Get the latest news and updates delivered to your inbox.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Something went wrong. Please try again.',
  backgroundColor = 'bg-slate-800',
  textColor = 'text-white',
  buttonColor = 'bg-cyan-500 hover:bg-cyan-600',
  showIcon = true,
  showDescription = true,
  showSuccessMessage = true,
  showErrorMessage = true
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
    } finally {
      setIsSubmitting(false)
    }
  if (isSubscribed) {
    return (
      <div className={`${backgroundColor} ${textColor} py-16 px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
      </div>
    </div>
  );
};
