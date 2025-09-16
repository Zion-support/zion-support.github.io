import React from 'react';

const EnhancedNewsletterSignup2026: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedNewsletterSignup2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
        <p className="text-xl opacity-90 mb-6">
          You're now part of our exclusive community of innovators and early adopters. 
          Get ready for exclusive updates on the latest technological breakthroughs.
        </p>
    );
  }

  return (
          </div>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Be the first to experience the most advanced technologies in human history. 
            Get exclusive access to AI consciousness, quantum reality, and neural interfaces.
          </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-cyan-500 bg-white/20 border-white/30 rounded focus:ring-cyan-500"
                    required
                  />
                  <span className="text-sm text-gray-200">
                    I agree to receive updates about revolutionary technologies and consent to 
                    the processing of my data for this purpose.
                  </span>
                </label>
                
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 text-cyan-500 bg-white/20 border-white/30 rounded focus:ring-cyan-500"
                    required
                  />
                  <span className="text-sm text-gray-200">
                    I want to be notified about exclusive early access opportunities and 
                    beta testing programs.
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  isLoading
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-2xl hover:scale-105'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Joining the Revolution...</span>
                  </div>
                ) : (
                  '🚀 Join the Revolution'
                )}
              </button>
            </form>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default EnhancedNewsletterSignup2026;