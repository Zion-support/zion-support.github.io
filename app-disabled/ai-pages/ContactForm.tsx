import {CheckCircle} from 'lucide-react';

      ...prev,
      [name]: value
    }));
  };

  consthandleSubmit= async (e: React.FormEvent) =>{e.preventDefault();

      </di>{/* ContactForm */}
      <divclassName="bg-white/10backdrop-blur-sm rounded-xl p-8borderborder-white/20"><formonSubmit={handleSubmit} className="space-y-6"><divclassName="grid grid-cols-1md:grid-cols-2gap-6"><di v><labelhtmlFor="name"className="block text-whitefont-mediummb-2">Full Name *
              </labe><inputtype="text"
                 id="name"
                 name="name"
                  value={formData.name}
                  onChange={handleChange}
                 requiredclassName="w-full px-4 py-3 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-400 focus:ring-2 focus:ring-cyan-40 0/20transition-colors"
                 placeholder="JohnDoe"
                /></di><di v><labelhtmlFor="email"className="block text-whitefont-mediummb-2">Email Address *
              </labe><inputtype="email"
                 id="email"
                 name="email"
                  value={formData.email}
                  onChange={handleChange}
                 requiredclassName="w-full px-4 py-3 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-400 focus:ring-2 focus:ring-cyan-40 0/20transition-colors"
                 placeholder="john@company.com"
                /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-6"><di v><labelhtmlFor="company"className="block text-whitefont-mediummb-2">Company
              </labe><inputtype="text"
                 id="company"
                 name="company"
                  value={formData.company}
                  onChange={handleChange}
                 className="w-full px-4 py-3 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-400 focus:ring-2 focus:ring-cyan-40 0/20transition-colors"
                 placeholder="YourCompany"
                /></di><di v><labelhtmlFor="phone"className="block text-whitefont-mediummb-2">Phone Number
              </labe><inputtype="tel"
                 id="phone"
                 name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                 className="w-full px-4 py-3 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-400 focus:ring-2 focus:ring-cyan-40 0/20transition-colors"
                 placeholder="+1 (55 5)123-4567"
                /></di></di><di v><labelhtmlFor="service"className="block text-whitefont-mediummb-2">Service Interest
            </labe><selectid="service"
               name="service"
                value={formData.service}
                onChange={handleChange}
               className="w-full px-4 py-3 bg-white/10border border-white/20rounded-lg text-whitefocus:outline-nonefocus:border-cyan-400 focus:ring-2 focus:ring-cyan-40 0/20transition-colors"
              ><optionvalue="">Selectaservice</optio>{services.map((service) => (
               <optionkey={service} value={service}className="bg-gray-800">{service}
                </optio>))}
            </selec></di><di v><labelhtmlFor="message"className="block text-whitefont-mediummb-2">Message *
            </labe><textareaid="message"
               name="message"
                value={formData.message}
                onChange={handleChange}
                requiredrows={5}
               className="w-full px-4 py-3 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20transition-colorsresize-none"
               placeholder="Tell us about your project and how we canhelp..."
              /></di>{status.message && (
            <divclassName={`flex items-center space-x-2 p-4 rounded-lg ${
                status.type=== 'success' ? 'bg-green-50 0/20text-green-30 0' :
                status.type=== 'error' ? 'bg-red-50 0/20text-red-30 0'  : 'bg-blue-50 0/20text-blue-30 0'
            }`}>{status.type=== 'success' ? (
                <CheckCircleclassName="w-5h-5flex-shrink-0" />)  : status.type=== 'error' ? (
                <AlertCircleclassName="w-5h-5flex-shrink-0" />) :null}
              <spa n>{status.message}</spa></di>)}

          <
             type="submit"
              disabled={status.type==='loading'}
             className="w-full bg-gradient-to-r from-cyan-500to-purple-600 hover:from-cyan-600 hover:to-purple-700text-white font-bold py-4 px-6 rounded-lg transition-all duration-300transformhover:scale-105 hover:shado w-lghover:shado w-cyan-50 0/25 disabled:opacity-50 disabled:cursor-not-alloweddisabled:transform-none flexitems-centerjustify-center"
            ></
             type="submit"
              disabled={status.type==='loading'}
             className="w-full bg-gradient-to-r from-cyan-500to-purple-600 hover:from-cyan-600 hover:to-purple-700text-white font-bold py-4 px-6 rounded-lg transition-all duration-300transformhover:scale-105 hover:shado w-lghover:shado w-cyan-50 0/25 disabled:opacity-50 disabled:cursor-not-alloweddisabled:transform-none flexitems-centerjustify-center"
            >{status.type=== 'loading' ? (
              <><divclassName="animate-spin rounded-full h-5 w-5 border-b-2border-whitemr-2"></di>Sending...
              </>)  : (
              <>Send Message
                <SendclassName="w-5h-5ml-2" /></>)}
          </butto></for></di></di>

  );
};

export default ContactForm;