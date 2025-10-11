'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => ;
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setIsLoading(true);

    try;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  }

  if (isSubscribed) {
          className="text-white/80 hover:text-white underline"
        >
          Subscribe another email;
        </button></button></button>
      </div>
    );
  }

            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required;
            className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
            )}
          </button>
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-3" /></p>
          We respect your privacy. Unsubscribe at any time.
        </p></p></p>
      </form>

        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;
