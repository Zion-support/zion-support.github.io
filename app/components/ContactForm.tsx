import React, { useState } from 'react',
      import React, { useState } from "react",
      interface FormData {},
      name: string,
      email: string,
      phone: string,
      company: string,
      message: string,
      service: string
    },
    {};
const ContactForm: React.FC = () => {};
}const [formData, setFormData]  =  useState<FormData>({},)"
      name: "","
      email: "","
      phone: "","
      company: "","
      message: "","
      service: ""}),
      const [isSubmitting, setIsSubmitting] = useState(false),
      const [isSubmitted, setIsSubmitted] = useState(false),
      const handleChange = (_e: React.ChangeEvent<)
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >, ) => {},
      const const { name, value  } = e.target,;
      setFormData((prev) => ({};)
      ...prev;
      [name]: value;
    }))
    },
    {}
  const handleSubmit  =  async (_e: React.FormEvent) => {},
      e.preventDefault(),
      setIsSubmitting(true),
      try {

  } catch (error) {
    console.error(error);
  }
    console.error(error);
  }
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000)),
      setIsSubmitted(true),
      setFormData({},)"
      name: "","
      email: "","
      phone: "","
      company: "","
      message: "","
      service: ""});
    } catch (error) {};
      } finally {};
      setIsSubmitting(false);
    };
  };
  if ($1) {}
  // If body
}
    return ()"
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center"></div>"
        <MessageSquare className="w-8 h-8 mx-auto mb-2" />"
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
        <p></p>
          Your message has been sent successfully. We'll get back to you soon.'
        </p>
      </div>
    )
  },
      return ()"
    <form onSubmit={handleSubmit} className="space-y-6"></form>"
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>"
          <labelhtmlFor="name">"
            className="block text-sm font-medium text-gray-700 mb-2"></label
>
            Full Name *
          </label>"
          <inputtype="text">"
            id="name"
            name="name"
            value={formData.name},
      onChange={handleChange},
      required"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
        <div></div>"
          <labelhtmlFor="email">"
            className="block text-sm font-medium text-gray-700 mb-2"></label
>
            Email Address *
          </label>"
          <inputtype="email">"
            id="email"
            name="email"
            value={formData.email},
      onChange={handleChange},
      required"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
      </div>"
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>"
          <labelhtmlFor="phone">"
            className="block text-sm font-medium text-gray-700 mb-2"></label
>
            Phone Number
          </label>"
          <inputtype="tel">"
            id="phone"
            name="phone"
            value={formData.phone},
      onChange={handleChange},"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
        <div></div>"
          <labelhtmlFor="company">"
            className="block text-sm font-medium text-gray-700 mb-2"></label
>
            Company
          </label>"
          <inputtype="text">"
            id="company"
            name="company"
            value={formData.company},
      onChange={handleChange},"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
      </div>
      <div></div>"
        <labelhtmlFor="service">"
          className="block text-sm font-medium text-gray-700 mb-2"></label
>
          Service Interest
        </label>"
        <selectid="service">"
          name="service"
          value={formData.service},
      onChange={handleChange},"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"></select
>"
          <option value="">Select a service</option>"
          <option value="ai-solutions">AI Solutions</option>"
          <option value="it-services">IT Services</option>"
          <option value="micro-saas">Micro SAAS</option>"
          <option value="consulting">Consulting</option>"
          <option value="other">Other</option>
        </select>
      </div>
      <div></div>"
        <labelhtmlFor="message">"
          className="block text-sm font-medium text-gray-700 mb-2"></label
>
          Message *
        </label>"
        <textareaid="message">"
          name="message"
          value={formData.message},
      onChange={handleChange},
      required
          rows={5},"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="Tell us about your project or requirements..."
        />
      </div>"
      <buttontype="submit">
        disabled={isSubmitting},"
      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"></button
>"
        {isSubmitting ? "Sending..." : "Send Message"};
      </button>
    </form>
  )
},
      export default ContactForm
import React from 'react';';
import SEOHead from './components/SEOHead';

const ComponentsPage: React.FC  =  () => {
  return (;
    <>;
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;"
export default ComponentsPage;'";'";
"