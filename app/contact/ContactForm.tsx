

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: ',
    email: ',
    company: ',
    service: ',
    budget: ',
    message: '
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle | success' | 'error>(idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success);
      setFormData({
        name: ',
        email: ',
        company: ',
        service: ',
        budget: ',
  message: '}
      }
})
    } catch {}
      setSubmitStatus(error');}
    } finally {}
      setIsSubmitting(false);}
        message: '
      });
    } catch {
      setSubmitStatus(error');
    } finally {
      setIsSubmitting(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    }
  }
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow>
      <h3 className=text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600>
        {details.map((detail, index) => (
          <li key={index} className=flex items-center">
            <span className="text-orange-500 mr-2>•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className=max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12>
        <h1 className=text-4xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto>
          Ready to transform your business with cutting-edge technology? 

        </p>
      </div>

      <div className=grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8>

          <div>
            <h2 className=text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4>
              <div className=flex items-center space-x-3">

                <div>
                  <p className="font-medium text-gray-900>Phone</p>
                  <p className=text-gray-600">+1 302 464 0950</p>
                </div>
              </div>

              <div className="flex items-center space-x-3>

                <div>
                  <p className=font-medium text-gray-900">Email</p>
                  <p className="text-gray-600>kleber@ziontechgroup.com</p>
                </div>
              </div>

              <div className=flex items-center space-x-3">

                </div>
              </div>

              <div className="flex items-center space-x-3>

                <div>
                  <p className=font-medium text-gray-900">Business Hours</p>
                  <p className="text-gray-600>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>


          {/* Quick Response Promise */}
          <div className=bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3>


              <div>
                <label htmlFor=budget" className="block text-sm font-medium text-gray-700 mb-2>
                  Project Budget
                </label>
                <select
                  id=budget"
                  name="budget
                  value={formData.budget}
                  onChange={handleInputChange}
                  className=form-input"
                >
                  <option value=">Select budget range</option>
                  <option value=under-10k">Under $10,000</option>
                  <option value="10k-25k>$10,000 - $25,000</option>
                  <option value=25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k>$50,000 - $100,000</option>
                  <option value=over-100k">Over $100,000</option>
                  <option value="discuss>Prefer to discuss</option>
                </select>
              </div>

              <div>
                <label htmlFor=message" className="block text-sm font-medium text-gray-700 mb-2>
                  Project Details *
                </label>
                <textarea
                  id=message"
                  name="message
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className=form-input"
                  placeholder="Tell us about your project, goals, and any specific requirements...
                />
              </div>

              <button
type=\submit\"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed}
                    : bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed
                    : btn btn-primary'
                } transition-colors`}
              >

                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}