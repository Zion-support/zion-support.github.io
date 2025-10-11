  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setIsLoading(true);
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/90 mb-4">You've successfully subscribed to our newsletter. Check your email for confirmation.</p>
        </p>
        >
          Subscribe another email;
        </button>
      </div>
  }

        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">Get the latest insights on AI, IT, and technology trends delivered to your inbox.</p>
        </p>
      </div>

            type="email"
            value={email}onChange={(e) => setEmail(e.target.value)}placeholder="Enter your email address"
            required;
            className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          />
            ) : (
              'Subscribe'
            )} </button>
        </div>
        
          <div className="text-gray-400">Subscribers</div>
        </div>
        <div className="text-sm">
          </div><div className="text-2xl font-bold text-purple-400">Weekly</div>
          <div className="text-gray-400">Updates</div>
        </div>
        <div className="text-sm">
          </div><div className="text-2xl font-bold text-green-400">Free</div>
          <div className="text-gray-400">Forever</div>
        </div>
      </div>
    </div>
  )
}
export default ContentNewsletterSignup
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  <span className="text-blue-100">{feature.text}
              ))}
          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              <$2 />
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center">
                {isLoading ? (
                  <React.Fragment>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2">
                    Subscribing...
                ) : (
                  <React.Fragment>
                    {buttonText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                )}
              <p className="text-sm text-blue-200 text-center">
                We respect your privacy. Unsubscribe at any time.
  )
}
export default ContentNewsletterSignup</div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></p></p></p></p></h2></h2></h2>
