import {useState} from 'react';
import {MessageSquare} from 'lucide-react';
'use client';


interface Form Data {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;
}

  const [form Data, set Form Data] = use State<Form Data/>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [is Submitting, set Is Submitting] = use State(false);
  const [is Submitted, set Is Submitted] = use State(false);

  const handleChange = (e: React.ChangeEvent<HTMLInput Element| HTMLTextArea Element | HTMLSelectElement />) => {
    const {name,value} = e.target;
    set Form Data(constprev = > ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.prevent Default();
    set Is Submitting(true);

    // Simulate form submission
    await new Promise(constresolve = > setTimeout(resolve, 1000));
    set Is Submitting(false);
    set Is Submitted(true);

    // Reset form after 3 seconds
    set Timeout(() => {
      set Is Submitted(false);
      set Form Data({
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
    <div className ="bg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20text-center" />
        <Check Circleclass Name="w-16 h-16 text-green-400mx-automb-4" / />
        <h3className ="text-2 xlfont-boldtext-whitemb-2"  >MessageSent!</h3>
        <pclassName ="text-gray-300">Thankyou foryour message. We'llget backto yousoon.</p>
      </div>
    );
  }

  return (
    <div className ="bg-white/10 backdrop-blur-lgrounded-2 xlp-8borderborder-white/20" />
      <div className ="text-centermb-8" />
        <h2className ="text-3 xlfont-boldtext-whitemb-4"  >GetIn Touch</h2>
        <pclassName ="text-gray-300">Readyto transformyour business? Let'sdiscuss yourproject.</p>
      </div>

      <formonSubmit ="{handleSubmit}" className="space-y-6" />
        <div className ="gridgrid-cols-1md:grid-cols-2gap-6" />
          <div />
            <labelhtmlFor ="name" className="blocktext-smfont-mediumtext-gray-300mb-2"  />FullName *
            </label>
            <inputtype ="text"
              id="name"
              name="name"
              value="{formData.name}"
              onChange ="{handleChange}"
              requiredclassName ="w-fullpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Yourfull name"
            / />
          </div>

          <div />
            <labelhtmlFor ="email" className="blocktext-smfont-mediumtext-gray-300mb-2"  />EmailAddress *
            </label>
            <inputtype ="email"
              id="email"
              name="email"
              value="{formData.email}"
              onChange ="{handleChange}"
              requiredclassName ="w-fullpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="your@email.com"
            / />
          </div>
        </div>

        <div className ="gridgrid-cols-1md:grid-cols-2gap-6" />
          <div />
            <labelhtmlFor ="phone" className="blocktext-smfont-mediumtext-gray-300mb-2"  />PhoneNumber
            </label>
            <inputtype ="tel"
              id="phone"
              name="phone"
              value="{formData.phone}"
              onChange ="{handleChange}"
              className="w-fullpx-4 py-3 bg-gray-800/50 borderborder-gray-700 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            / />
          </div>

          <div />
            <label htmlFor ="company" className="block text-sm font-mediumtext-gray-300mb-2"  />Company
            </label>
            <inputtype ="text"
              id="company"
              name="company"
              value="{form Data.company}"
              onChange ="{handle Change}"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your company name"
            / />
          </div>
        </div>

        <div />
          <label htmlFor ="service" className="block text-sm font-mediumtext-gray-300mb-2"  />Service Interest
          </label>
          <selectid ="service"
            name="service"
            value="{form Data.service}"
            onChange ="{handle Change}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent" />
            <optionvalue =""  >Select a service</option>
            <optionvalue ="ai-services"  >AI Services</option>
            <optionvalue ="it-services"  >IT Services</option>
            <optionvalue ="5 g-solutions"  >5 G Solutions</option>
            <optionvalue ="micro-saas"  >Micro SAAS</option>
            <optionvalue ="consulting"  >Consulting</option>
          </select>
        </div>

        <div />
          <label htmlFor ="message" className="block text-sm font-mediumtext-gray-300mb-2"  />Message *
          </label>
          <textareaid ="message"
            name="message"
            value="{form Data.message}"
            onChange ="{handle Change}"
            requiredrows ="{5}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500focus:border-transparentresize-none"
            placeholder="Tell us about your project..."
          / />
        </div>

        <buttontype ="submit"
          disabled="{is Submitting}"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-centerdisabled:opacity-50disabled:cursor-not-allowed" />
          {is Submitting ? (
            <>
              <div className ="animate-spinrounded-fullh-5 w-5 border-b-2border-whitemr-2" /></div>
              Sending...
            </>
          ) : (
            <>
              <Sendclass Name ="w-5h-5mr-2" / />
              SendMessage
            </>
          )}
        </button>
      </form>

      <div className ="mt-8 pt-6border-t border-white/10" />
        <div className ="grid grid-cols-1 md:grid-cols-3gap-6text-center" />
          <div className ="flexitems-centerjustify-center" />
            <Mailclass Name ="w-5 h-5text-cyan-400mr-2" / />
            <spanclassName ="text-gray-300"  >kleber@ziontechgroup.com</span>
          </div>
          <div className ="flexitems-centerjustify-center" />
            <Phoneclass Name ="w-5 h-5text-purple-400mr-2" / />
            <spanclassName ="text-gray-300"  >+1 (302) 464-0950</span>
          </div>
          <div className ="flexitems-centerjustify-center" />
            <Message Squareclass Name="w-5 h-5text-green-400mr-2" / />
            <spanclassName ="text-gray-300"  >24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}