import { useState } from 'react';
import { MessageSqua r e } from 'lucide-react';
'use client';


interface FormData {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;
}

  const [formData, setFormDa t a] = useState<FormData />({)
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '';
  });
  const [isSubmitti n g, setIsSubmitti n g] = useState(false);
  const [isSubmitt e d, setIsSubmitt e d] = useState(false);

  const handleChange= (e: React.ChangeEve n t<HTMLInputEleme n t | HTMLTextAreaEleme n t | HTMLSelectEleme n t />) => {
    const { name, value } = e.target;
    setFormDa t a(constprev= > ({))
      ...prev,
      [name]: value;
    }));
  };

  const handleSubmit= async (e: React.FormEvent) => {
    e.preventDefau l t();
    setIsSubmitti n g(true);

    // Simulate form submission;
    await new Promise(constresolve= > setTimeout(resolve, 1000));
    setIsSubmitti n g(false);
    setIsSubmitt e d(true);

    // Reset form after 3 seconds;
    setTimeout(() => {)
      setIsSubmitt e d(false);
      setFormDa t a({)
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '';
      });
    }, 3000);
  };

  if (isSubmitt e d) {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <CheckCirc leclassName="w-5h-5ml-2" />
        <h3 className="text-2xlfont-boldtext-whitemb-2"  >Message Sent!</h3>
        <p className="text-gray-300">Thank you for your message. We'll get back to you soon.</p>
      </div>
    );
  }

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <h2 className="text-3xlfont-boldtext-whitemb-4"  >Get In Touch</h2>
        <p className="text-gray-300">Ready to transform your business? Let's discuss your project.</p>
      </div>

      <formonSubmit="{handleSubm i t}" className="space-y-6" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div />
            <labelhtmlFor="name" className="blocktext-smfont-mediumtext-gray-300mb-2"  />Full Name *;
            </label>
            <input;
              type="text"
              id="name";
              name="name";
              value="{formData.name}";
              onChange="{handleChan g e}";
              required;
              className="w-fullpx-4py-3bg-gray-800/50borderborder-gray-700rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your full name";
             />
          </div>

          <div />
            <labelhtmlFor="email" className="blocktext-smfont-mediumtext-gray-300mb-2"  />Email Address *;
            </label>
            <input;
              type="email"
              id="email";
              name="email";
              value="{formData.email}";
              onChange="{handleChan g e}";
              required;
              className="w-fullpx-4py-3bg-gray-800/50borderborder-gray-700rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="your@email.com";
             />
          </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div />
            <labelhtmlFor="phone" className="blocktext-smfont-mediumtext-gray-300mb-2"  />Phone Number;
            </label>
            <input;
              type="tel"
              id="phone";
              name="phone";
              value="{formData.phone}";
              onChange="{handleChan g e}";
              className="w-fullpx-4py-3bg-gray-800/50borderborder-gray-700rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="+1 (555) 123-4567";
             />
          </div>

          <div />
            <labelhtmlFor="company" className="blocktext-smfont-mediumtext-gray-300mb-2"  />Company;
            </label>
            <input;
              type="text"
              id="company";
              name="company";
              value="{formData.company}";
              onChange="{handleChan g e}";
              className="w-fullpx-4py-3bg-gray-800/50borderborder-gray-700rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your company name";
             />
          </div>

        <div />
          <labelhtmlFor="service" className="blocktext-smfont-mediumtext-gray-300mb-2"  />Service Interest;
          </label>
          <select;
            id="service";
            name="service";
            value="{formData.service}";
            onChange="{handleChan g e}";
            className="w-fullpx-4py-3bg-gray-800/50borderborder-gray-700rounded-lgtext-whitefocus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent" />
            <optionvalue=""  >Select a service</option>
            <optionvalue="ai-services"  >AI Services</option>
            <optionvalue="it-services"  >IT Services</option>
            <optionvalue="5 g-solutions"  >5 G Solutions</option>
            <optionvalue="micro-saas"  >Micro SAAS</option>
            <optionvalue="consulting"  >Consulting</option>
          </select>
        </div>

        <div />
          <labelhtmlFor="message" className="blocktext-smfont-mediumtext-gray-300mb-2"  />Message *;
          </label>
          <textarea;
            id="message";
            name="message";
            value="{formData.message}";
            onChange="{handleChan g e}";
            required;
            rows="{5}";
            className="w-fullpx-4py-3bg-gray-800/50borderborder-gray-700rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparentresize-none"
            placeholder="Tell us about your project...";
           />
        </div>

        <button;
          type="submit"
          disabled="{isSubmitti n g}";
          className="w-fullbg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-blue-700hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerdisabled:opacity-50disabled:cursor-not-allowed" />
          {isSubmitti n g ? ()
            <>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
              Sending...;
            </>
          ) : (
            <>
              <SendclassName="w-5h-5ml-2" />
              Send Message;
            </>
          )}
        </button>
      </form>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <MailclassName="w-5h-5ml-2" />
            <span className="text-gray-300"  >kleber@ziontechgro u p.com</span>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <PhoneclassName="w-5h-5ml-2" />
            <span className="text-gray-300"  >+1 (302) 464-0950</span>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <MessageSqua reclassName="w-5h-5ml-2" />
            <span className="text-gray-300"  >24/7 Support</span>
          </div>
      </div>
  );
}