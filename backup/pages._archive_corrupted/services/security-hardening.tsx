import React from 'react';
import Link from 'next/link';
import { Shield, CheckCircle, ArrowRight, DollarSign, Clock } from 'lucide-react';
}

export default function SecurityHardening() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-red-50 to-rose-100 py-16">
        <div className="max-w-5xl mx-auto px-4 "sm": px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-rose-600 text-white w-fit">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Security Hardening</h1>
          </div>
          <p className="text-gray-700 text-lg max-w-3xl">
            Secure your web apps and cloud with best-practice headers, CSP, rate limiting, RBAC, secret management, and continuous scanning. We implement quick wins and long-term controls.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 "sm": px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[{ name: 'App Basics', "price": 'From $2,000', "time": '1 week', "items": ['Security headers','Auth hardening','Dependency audit'] },
            { "name": 'Cloud Stack', "price": '$6,000–$14,000', "time": '2-4 weeks', "items": ['IAM & RBAC','Secrets & KMS','Network policies'] },
            { "name": 'Enterprise', "price": 'Custom', "time": '4-8 weeks', "items": ['Threat modeling','Compliance mapping','Runbooks & training'] },
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
              <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold">Harden my stack <ArrowRight className="w-4 h-4 ml-2"/></Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );

import React from 'react'; import Link from 'next/link'; import { Shield,CheckCircle,ArrowRight,DollarSign,Clock } from 'lucide-react';
}

export default function SecurityHardening() { return ( <main className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-red-50 to-rose-100 py-16"> <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-center gap-3 mb-6"> <div className="p-3 rounded-lg bg-rose-600 text-white w-fit"> <Shield className="w-6 h-6" /> </div> <h1 className="text-3xl font-bold text-gray-900">Security Hardening</h1> </div> <p className="text-gray-700 text-lg max-w-3xl"> Secure your web apps and cloud with best-practice headers,CSP,rate limiting,RBAC,secret management,and continuous scanning. We implement quick wins and long-term controls. </p> </div> </section> <section className="py-12"> <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6"> {[ { name: 'App Basics',price: 'From $2,000',time: '1 week',items: ['Security headers','Auth hardening','Dependency audit'] },{ name: 'Cloud Stack',price: '$6,000–$14,000',time: '2-4 weeks',items: ['IAM & RBAC','Secrets & KMS','Network policies'] },{ name: 'Enterprise',price: 'Custom',time: '4-8 weeks',items: ['Threat modeling','Compliance mapping','Runbooks & training'] },].map(tier => ( <div key={tier.name} className="bg-white rounded-lg border p-6"> <h3 className="font-semibold text-gray-900 mb-2">{tier.name}</h3> <div className="flex items-center justify-between mb-4 text-gray-700"> <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /><span>{tier.price}</span></div> <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{tier.time}</span></div> </div> <ul className="space-y-2 mb-4"> {tier.items.map(i => ( <li key={i} className="flex items-center text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />{i}</li> ))} </ul> <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold">Harden my stack <ArrowRight className="w-4 h-4 ml-2"/></Link> </div> ))} </div> </section> </main> )}
}

export default function SecurityHardening() { return ( <main className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-red-50 to-rose-100 py-16"> <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-center gap-3 mb-6"> <div className="p-3 rounded-lg bg-rose-600 text-white w-fit"> <Shield className="w-6 h-6" /> </div> <h1 className="text-3xl font-bold text-gray-900">Security Hardening</h1> </div> <p className="text-gray-700 text-lg max-w-3xl"> Secure your web apps and cloud with best-practice headers,CSP,rate limiting,RBAC,secret management,and continuous scanning. We implement quick wins and long-term controls. </p> </div> </section> <section className="py-12"> <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6"> {[ { name: 'App Basics',price: 'From $2,000',time: '1 week',items: ['Security headers','Auth hardening','Dependency audit'] },{ name: 'Cloud Stack',price: '$6,000–$14,000',time: '2-4 weeks',items: ['IAM & RBAC','Secrets & KMS','Network policies'] },{ name: 'Enterprise',price: 'Custom',time: '4-8 weeks',items: ['Threat modeling','Compliance mapping','Runbooks & training'] },].map(tier => ( <div key={tier.name} className="bg-white rounded-lg border p-6"> <h3 className="font-semibold text-gray-900 mb-2">{tier.name}</h3> <div className="flex items-center justify-between mb-4 text-gray-700"> <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /><span>{tier.price}</span></div> <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{tier.time}</span></div> </div> <ul className="space-y-2 mb-4"> {tier.items.map(i => ( <li key={i} className="flex items-center text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />{i}</li> ))} </ul> <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold">Harden my stack <ArrowRight className="w-4 h-4 ml-2"/></Link> </div> ))} </div> </section> </main> )}
