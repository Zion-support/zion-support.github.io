import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Page: React.FC = () => {
  return (
    <>
      <Navigation /><>
</Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<main className="container mx-auto px-4 py-16 pt-24"><>
</main className="container mx-auto px-4 py-16 pt-24">
<section className="text-center mb-16"><>
</section className="text-center mb-16">
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1><//h1>
              Service Coming Soon</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-cyan-400 mb-8"></p><//p>
              This service is currently under development</p><>
<//p>
</p><>
<//p>
<p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8"></p><//p>
              We're working hard to bring you this amazing service. Contact us to learn more about our development timeline.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              ></a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </a><>
<//a>
<a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ><>
</a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
<Phone className="w-5 h-5" /></Phone className="w-5 h-5" />
                +1 302 464 0950
              </a><>
<//a>
</div><>
<//div>
</section><>
<//section>
</main><>
<//main>
<Footer /><>
</Footer />
</div><>
<//div>
</><//>
  );
};

export default Page;
