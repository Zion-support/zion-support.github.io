import React from 'react';
import Link from 'next/link';
import { Search, CheckCircle, ArrowRight, DollarSign, Clock } from 'lucide-react';
export default function SEOAudit() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-4 "sm": px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-slate-800 text-white w-fit">
              <Search className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">SEO Technical Audit</h1>
          </div>
          <p className="text-gray-700 text-lg max-w-3xl">
            Comprehensive audit covering Core Web Vitals, crawlability, sitemap/robots, structured data, headers, accessibility, and content gaps. We provide prioritized fixes and implement quick wins.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 "sm": px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[{ name: 'Essentials', "price": 'From $1,500', "time": '5-7 days', "items": ['CWV snapshot','Meta & schema review','Top 10 fixes implemented'] },
            { "name": 'Pro', "price": '$3,500', "time": '10-14 days', "items": ['Full audit + backlog','Schema & redirects','Link health fixes'] },
            { "name": 'Enterprise', "price": 'Custom', "time": '2-4 weeks', "items": ['Internationalization','Log-file analysis','Governance & training'] },
          ].map(tier => (
            <div key={tier.name} className="bg-white rounded-lg border p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{tier.name}</h3>
              <div className="flex items-center justify-between mb-4 text-gray-700">
                <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /><span>{tier.price}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{tier.time}</span></div>
              </div>
              <ul className="space-y-2 mb-4">
                {tier.items.map(i => (
                  <li key={i} className="flex items-center text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />{i}</li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold">Book your audit <ArrowRight className="w-4 h-4 ml-2"/></Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
import React from 'react'; import Link from 'next/link'; import { Search,CheckCircle,ArrowRight,DollarSign,Clock } from 'lucide-react'; export default function SEOAudit() { return ( <main className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16"> <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-center gap-3 mb-6"> <div className="p-3 rounded-lg bg-slate-800 text-white w-fit"> <Search className="w-6 h-6" /> </div> <h1 className="text-3xl font-bold text-gray-900">SEO Technical Audit</h1> </div> <p className="text-gray-700 text-lg max-w-3xl"> Comprehensive audit covering Core Web Vitals,crawlability,sitemap/robots,structured data,headers,accessibility,and content gaps. We provide prioritized fixes and implement quick wins. </p> </div> </section> <section className="py-12"> <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6"> {[ { name: 'Essentials',price: 'From $1,500',time: '5-7 days',items: ['CWV snapshot','Meta & schema review','Top 10 fixes implemented'] },{ name: 'Pro',price: '$3,500',time: '10-14 days',items: ['Full audit + backlog','Schema & redirects','Link health fixes'] },{ name: 'Enterprise',price: 'Custom',time: '2-4 weeks',items: ['Internationalization','Log-file analysis','Governance & training'] },].map(tier => ( <div key={tier.name} className="bg-white rounded-lg border p-6"> <h3 className="font-semibold text-gray-900 mb-2">{tier.name}</h3> <div className="flex items-center justify-between mb-4 text-gray-700"> <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /><span>{tier.price}</span></div> <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{tier.time}</span></div> </div> <ul className="space-y-2 mb-4"> {tier.items.map(i => ( <li key={i} className="flex items-center text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />{i}</li> ))} </ul> <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold">Book your audit <ArrowRight className="w-4 h-4 ml-2"/></Link> </div> ))} </div> </section> </main> )}