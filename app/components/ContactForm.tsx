'useclient';
import { useState   } from 'react';
import { MessageSquare   } from 'lucide-react';
interfaceFormData {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;
}

  const [formData, setFormData] = useState<FormData />({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  consthandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement />) => {
    const { name, value } = e.target;
    setFormData(constprev = > ({
      ...prev,
      [name]: value
    }));
  };

  consthandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // SimulateformsubmissionawaitnewPromise(constresolve = > setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Resetformafter 3 secondssetTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
    <divclassName="b g-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20text-center">
        <CheckCircleclassName="w-16 h-16 t e xt-green-400mx-automb-4" />
        <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"  >MessageSent!</h3>
        <pclassName="t e xt-gray-300">Thankyouforyourmessage. We'llgetbacktoyousoon.</p>
      </div>
  );
  }

  return (
    <divclassName="b g-white/10 backdrop-blur-lgrounded-2 xlp-8borderborder-white/20">
      <divclassName="t e xt-centermb-8">
        <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  >GetInTouch</h2>
        <pclassName="t e xt-gray-300">Readytotransformyourbusiness? Let'sdiscussyourproject.</p>
      </div>
    <>
      <formonSubmit="{handleSubmit}" className="s p ace-y-6" />
        <divclassName="g r idgrid-cols-1md:grid-cols-2gap-6">
          <div />
            <labelhtmlFor="name" className="b l ocktext-smfont-mediumtext-gray-300 mb-2"  />FullName *
            </label>
            <inputtype="text"
              id="name"
              name="name"
              value="{formData.name}"
              onChange="{handleChange}"
              requiredclassName="w-f u llpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Yourfullname"
            / />
          </div>
    <>
          <div />
            <labelhtmlFor="email" className="b l ocktext-smfont-mediumtext-gray-300 mb-2"  />EmailAddress *
            </label>
            <inputtype="email"
              id="email"
              name="email"
              value="{formData.email}"
              onChange="{handleChange}"
              requiredclassName="w-f u llpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="your@email.com"
            / />
    <>
          </div>
        <divclassName="g r idgrid-cols-1md:grid-cols-2gap-6">
          <div />
            <labelhtmlFor="phone" className="b l ocktext-smfont-mediumtext-gray-300 mb-2"  />PhoneNumber
            </label>
            <inputtype="tel"
              id="phone"
              name="phone"
              value="{formData.phone}"
              onChange="{handleChange}"
              className="w-f u llpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            / />
          </div>
    <>
          <div />
            <labelhtmlFor="company" className="b l ocktext-smfont-mediumtext-gray-300 mb-2"  />Company
            </label>
            <inputtype="text"
              id="company"
              name="company"
              value="{formData.company}"
              onChange="{handleChange}"
              className="w-f u llpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Yourcompanyname"
            / />
    <>
          </div>
    <>
        <div />
          <labelhtmlFor="service" className="b l ocktext-smfont-mediumtext-gray-300 mb-2"  />ServiceInterest
          </label>
          <selectid="service"
            name="service"
            value="{formData.service}"
            onChange="{handleChange}"
            className="w-f u llpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whitefocus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent" />
    <>
            <optionvalue="">Selectaservice</option>
            <optionvalue="ai-services">AIServices</option>
            <optionvalue="it-services">ITServices</option>
            <optionvalue="5 g-solutions">5 GSolutions</option>
            <optionvalue="micro-saas">MicroSAAS</option>
            <optionvalue="consulting">Consulting</option>
          </select>
        </div>
    <>
        <div />
          <labelhtmlFor="message" className="b l ocktext-smfont-mediumtext-gray-300 mb-2"  />Message *
          </label>
          <textareaid="message"
            name="message"
            value="{formData.message}"
            onChange="{handleChange}"
            requiredrows="{5}"
            className="w-f u llpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2 focus:ring-purple-500focus:border-transparentresize-none"
            placeholder="Tellusaboutyourproject..."
          / />
        </div>
        <buttontype="submit"
          disabled="{isSubmitting}"
          className="w-f u llbg-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-blue-700 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-centerdisabled:opacity-50disabled:cursor-not-allowed" />
          {isSubmitting ? (
    <>
            <>
              <divclassName="a n imate-spinrounded-fullh-5 w-5 border-b-2border-whitemr-2"></div>
              Sending...
          ) : (
    <>
            <>
              <SendclassName="w-5h-5m r-2" />
              SendMessage
          )}
    <>
        </button>
      </form>
      <divclassName="m t-8 pt-6border-tborder-white/10">
        <divclassName="g r idgrid-cols-1 md:grid-cols-3gap-6text-center">
          <divclassName="f l exitems-centerjustify-center">
            <MailclassName="w-5 h-5t e xt-cyan-400mr-2" />
            <spanclassName="t e xt-gray-300"  >kleber@ziontechgroup.com</span>
          </div>
          <divclassName="f l exitems-centerjustify-center">
            <PhoneclassName="w-5 h-5t e xt-purple-400mr-2" />
            <spanclassName="t e xt-gray-300"  >+1 (302) 464-0950</span>
          </div>
          <divclassName="f l exitems-centerjustify-center">
            <MessageSquareclassName="w-5 h-5t e xt-green-400mr-2" />
            <spanclassName="t e xt-gray-300"  >24/7 Support</span>
          </div>
    </div>
  );
}
    </>
