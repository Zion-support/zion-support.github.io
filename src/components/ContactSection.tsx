

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

fetch("/api/contact", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify(formData)})
      .then(async (res) => {

          const data = await res.json().catch(() => ({}));          throw new Error(data.error || "Failed to send message")
        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message")

        }
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),

        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message")
        }
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),

        setSubmitted(true),
        setTimeout(() => setSubmitted(false), 2000),
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((err) => {
        setIsSubmitting(false),
        toast({

          title: "Submission Error",
          description: err.message,
          variant: "destructive"})
      })

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contact@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Why Choose Us?</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 Expert Support</li>
                <li>• Custom Solutions for Your Business</li>
                <li>• Proven Track Record</li>
                <li>• Competitive Pricing</li>
                <li>• Fast Implementation</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitted && (
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>
                  )}

                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;

    </section>);
}set_errors (field_errors);
toast ({
  return;
}set_errors ({
});
setIsSubmitting (true);
}) .catch ( (err) => {
  setIsSubmitting (false);
toast ({
  title: "Submission Error";
description: err.message;
});
}";
}</div> <div> <label html_for="email" className="block text - sm font - medium text - zion - slate - light mb - 1" > Email </label> <Input) ";
}</div> </div> <div> <label html_for="subject" className="block text - sm font - medium text - zion - slate - light mb - 1" > Subject </label> <Input) ";
}</div> <div> <label html_for="message" className="block text - sm font - medium text - zion - slate - light mb - 1" > Message </label> <Textarea);
}</div> <div> <Button > {';
  is_submitting ? 'Sending...' : 'Send Message';
}</Button>);
}</div> </form> </div> </div> </div> </div> </section>);
}'"}
}
;

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
