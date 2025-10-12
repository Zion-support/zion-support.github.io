'use client';
import { use State } from 'react';
import { Message Square } from 'lucide-react';

interface Form Data {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;
}

  const [form Data, set Form Data] = use State<F orm Data />({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [is Submitting, set Is Submitting] = use State(false);
  const [is Submitted, set Is Submitted] = use State(false);

  const handle Change = (e: React.Change Event<H T M LInput Element | H TM LText Area Element | H TM LSelect Element />) => {
    const { name, value } = e.target;
    set Form Data(const prev = > ({
      ...prev,
      [name]: value
    }));
  };

  const handle Submit = async (e: React.Form Event) => {
    e.prevent Default();
    set Is Submitting(true);

    // Simulate form submission
    await new Promise(const resolve = > set Timeout(resolve, 1000));
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

  if (is Submitted) {
    return (

    <d iv class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20text-center">
        </d iv>
        <C heck Circle class Name="w-16 h-16 t ext-green-400mx-automb-4" / />
        <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">Message Sent!</h3>
        <p c lass Name="t ext-gray-300">Thank you for your message. We'll get back to you soon.</p>
      </d iv>
  );
  }

  return (

    <d iv class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20">
        </d iv>
      <d iv class Name="t ext-centermb-8">
        </d iv>
        <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-4">Get In Touch</h2>
        <p c lass Name="t ext-gray-300">Ready to transform your business? Let's discuss your project.</p>
      </d iv>

      <f orm on Submit="{handle Submit}" class Name="s pace-y-6" />
        <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-6">
        </d iv>
          <d iv />
            <l abel html For="name" class Name="b lock text-sm font-mediumtext-gray-300mb-2">Full Name *
            </l abel>
            <i nput
              type="text"
              id="name"
              name="name"
              value="{form Data.name}"
              on Change="{handle Change}"
              required
              class Name="w-f ull px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your full name"
            / />
          </d iv>

          <d iv />
            <l abel html For="email" class Name="b lock text-sm font-mediumtext-gray-300mb-2">Email Address *
            </l abel>
            <i nput
              type="email"
              id="email"
              name="email"
              value="{form Data.email}"
              on Change="{handle Change}"
              required
              class Name="w-f ull px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="your@email.com"
            / />

          </d iv>

        <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-6">
        </d iv>
          <d iv />
            <l abel html For="phone" class Name="b lock text-sm font-mediumtext-gray-300mb-2">Phone Number
            </l abel>
            <i nput
              type="tel"
              id="phone"
              name="phone"
              value="{form Data.phone}"
              on Change="{handle Change}"
              class Name="w-f ull px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            / />
          </d iv>

          <d iv />
            <l abel html For="company" class Name="b lock text-sm font-mediumtext-gray-300mb-2">Company
            </l abel>
            <i nput
              type="text"
              id="company"
              name="company"
              value="{form Data.company}"
              on Change="{handle Change}"
              class Name="w-f ull px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your company name"
            / />

          </d iv>

        <d iv />
          <l abel html For="service" class Name="b lock text-sm font-mediumtext-gray-300mb-2">Service Interest
          </l abel>
          <s elect
            id="service"
            name="service"
            value="{form Data.service}"
            on Change="{handle Change}"
            class Name="w-f ull px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent" />

            <o ption value="">Select a service</o ption>
            <o ption value="ai-services">A I Services</o ption>
            <o ption value="it-services">I T Services</o ption>
            <o ption value="5 g-solutions">5 G Solutions</o ption>
            <o ption value="micro-saas">Micro S AA S</o ption>
            <o ption value="consulting">Consulting</o ption>
          </s elect>
        </d iv>

        <d iv />
          <l abel html For="message" class Name="b lock text-sm font-mediumtext-gray-300mb-2">Message *
          </l abel>
          <t extarea
            id="message"
            name="message"
            value="{form Data.message}"
            on Change="{handle Change}"
            required
            rows="{5}"
            class Name="w-f ull px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500focus:border-transparentresize-none"
            placeholder="Tell us about your project..."
          / />
        </d iv>

        <b utton
          type="submit"
          disabled="{is Submitting}"
          class Name="w-f ull bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-centerdisabled:opacity-50disabled:cursor-not-allowed" />
          {is Submitting ? (

              <d iv class Name="a nimate-spin rounded-full h-5 w-5 border-b-2border-whitemr-2">
        </d iv></d iv>

              Sending...
          ) : (

              <S end class Name="w-5h-5m r-2" / />

              Send Message
          )}

        </b utton>
      </f orm>

      <d iv class Name="m t-8 pt-6border-tborder-white/10">
        </d iv>
        <d iv class Name="g rid grid-cols-1 md:grid-cols-3gap-6text-center">
        </d iv>
          <d iv class Name="f lexitems-centerjustify-center" />
            <M ail class Name="w-5 h-5t ext-cyan-400mr-2" / />
            <s pan class Name="t ext-gray-300">kleber@ziontechgroup.com</s pan>
          </d iv>
          <d iv class Name="f lexitems-centerjustify-center" />
            <P hone class Name="w-5 h-5t ext-purple-400mr-2" / />
            <s pan class Name="t ext-gray-300">+1 (302) 464-0950</s pan>
          </d iv>
          <d iv class Name="f lexitems-centerjustify-center" />
            <M essage Square class Name="w-5 h-5t ext-green-400mr-2" / />
            <s pan class Name="t ext-gray-300">24/7 Support</s pan>
          </d iv>
      </d iv>
  );
}
