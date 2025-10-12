'use client';
import { useState } from 'react';
import { MessageSquare  } from 'lucide-react';
interface FormData {
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement />) => {
    const { name, value } = e.target;
    setFormData(const prev = > ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(const resolve = > setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
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
    r etu rn (
    <d iv c las sName="b g-w hite/10 b ack drop-b lur-lg r oun ded-2 xl p-8 borderborder-w hite/20t ext-c ente-r">
        <C hec kCi rcle c las sName="w-16 h-16 t ext-g reen-400mx-a uto mb-4" />
        <h3 c las sName="t ext-2 xl f ont-b old t ext-w hit-e mb-2"  >Message S ent!</h3>        <p c las sName="t ext-g ray-300">T hank y ou for y our message. We'll get b ack to y ou soon.</p>
      </d iv>
  );
  }
  r etu rn (
    <>
    </><d iv c las sName="b g-w hite/10 b ack drop-b lur-lg r oun ded-2 xl p-8borderborder-w hite/20">
        </d iv>
      <d iv c las sName="t ext-c entermb-8">
        </d iv>
        <h2 c las sName="t ext-3 xl f ont-b old text-w hit em-b-4">G et In T ouch</h2>        <p c las sName="t ext-g ray-300">Ready to t ran sform y our business? Let's discuss y our project.</p>
      </d iv>
    <>
      </><form o nSubmit="{handleSubmit}" c las sName="s p ace-y-6" />
        <d iv c las sName="g r id g rid-c ols-1md:g rid-c ols-2g ap-6">
        </d iv>
          <d iv />
            <l abel h tml For="name" c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300mb-2">Full N ame *            </l abel>
            <input
              type="t ext"
              id="name"
              name="name"
              value="{formData.name}"
              onChange="{handleChange}"
              r equ ired
              c las sName="w-f ull px-4 py-3 bg-g ray-800/50 border border-g ray-700 r oun ded-lg t ext-w hit-e placeho lder-g ray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-t ransparent"
              placeho lder="Your full name"
            / />
          </d iv>
    <>
          </><d iv />
            <l abel h tml For="email" c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Email Address *            </l abel>
            <input
              type="email"
              id="email"
              name="email"
              value="{formData.email}"
              onChange="{handleChange}"
              r equ ired
              c las sName="w-f ull px-4 py-3 bg-g ray-800/50 border border-g ray-700 r oun ded-lg t ext-w hit-e placeho lder-g ray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-t ransparent"
              placeho lder="y our@email.com"
            / />
    <>
          </d iv>
    <>
        </><d iv c las sName="g r id g rid-c ols-1md:g rid-c ols-2g ap-6">
        </d iv>
          <d iv />
            <l abel h tml For="phone" c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300mb-2">Phone Number            </l abel>
            <input
              type="tel"
              id="phone"
              name="phone"
              value="{formData.phone}"
              onChange="{handleChange}"
              c las sName="w-f ull px-4 py-3 bg-g ray-800/50 border border-g ray-700 r oun ded-lg t ext-w hit-e placeho lder-g ray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-t ransparent"
              placeho lder="+1 (555) 123-4567"
            / />
          </d iv>
    <>
          </><d iv />
            <l abel h tml For="company" c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Company            </l abel>
            <input
              type="t ext"
              id="company"
              name="company"
              value="{formData.company}"
              onChange="{handleChange}"
              c las sName="w-f ull px-4 py-3 bg-g ray-800/50 border border-g ray-700 r oun ded-lg t ext-w hit-e placeho lder-g ray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-t ransparent"
              placeho lder="Your company name"
            / />
    <>
          </d iv>
    <>
        </><d iv />
          <l abel h tml For="service" c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Service Interest          </l abel>
          <select
            id="service"
            name="service"
            value="{formData.service}"
            onChange="{handleChange}"
            c las sName="w-f ull px-4 py-3 bg-g ray-800/50 border border-g ray-700 r oun ded-lg t ext-w hit-e focus:outline-none focus:ring-2focus:ring-purple-500focus:border-t ransparent" />
    <>
            </><option value="">Select a service</option>
            <option value="ai-services">AI Services</option>
            <option value="it-services">IT Services</option>
            <option value="5 g-solutions">5 G Solutions</option>
            <option value="micro-saas">Micro SAAS</option>
            <option value="consulting">Consulting</option>
          </select>
        </d iv>
    <>
        </><d iv />
          <l abel h tml For="message" c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Message *          </l abel>
          <t extarea
            id="message"
            name="message"
            value="{formData.message}"
            onChange="{handleChange}"
            r equ ired
            r ows="{5}"
            c las sName="w-f ull px-4 py-3 bg-g ray-800/50 border border-g ray-700 r oun ded-lg t ext-w hit-e placeho lder-g ray-400 focus:outline-none focus:ring-2 focus:ring-purple-500focus:border-t ransparentresize-none"
            placeho lder="Tell us about y our project..."
          / />
        </d iv>
        <button
          type="submit"
          disa bled="{isSubmitting}"
          c las sName="w-f ull bg-g rad ient-to-r from-b lue-600 to-purple-600 t ext-w hit-e px-8 py-4 r oun ded-lg f ont-semibold hover:from-b lue-700 hover:to-purple-700 t ransition-all duration-300 flex i tems-c enter justify-c enterdisa bled:opacity-50disa bled:cursor-not-allowed" />
          {isSubmitting ? (
    <>
            </>
              <d iv c las sName="a n imate-s pin r oun ded-full h-5 w-5 border-b-2border-w hit emr-2">
        </d iv></d iv>
    </>              S ending...
          ) : (
    <>
            </>
              <S end c las sName="w-5h-5m r-2" / />
    </>              S end Message
          )}
    <>
        </button>
      </form>
    <>
      </><d iv c las sName="m t-8 pt-6-border-t border-w hite/10">
        </d iv>
        <d iv c las sName="g r id g rid-c ols-1 md:g rid-c ols-3g ap-6t ext-c ente-r">
        </d iv>
          <d iv c las sName="f lexi tems-c enterjustify-c enter" />
            <M ail c las sName="w-5 h-5t ext-c yan-400mr-2" / />
            <span c las sName="t ext-g ray-300">k leber@z iontec hgr oup.com</span>
          </d iv>
          <d iv c las sName="f lexi tems-c enterjustify-c enter" />
            <Phone c las sName="w-5 h-5t ext-purple-400mr-2" / />
            <span c las sName="t ext-g ray-300">+1 (302) 464-0950</span>
          </d iv>
          <d iv c las sName="f lexi tems-c enterjustify-c enter" />
            <MessageSquare c las sName="w-5 h-5t ext-g reen-400mr-2" / />
            <span c las sName="t ext-g ray-300">24/7 S upport</span>
          </d iv>
      </d iv>  );
}
    </>