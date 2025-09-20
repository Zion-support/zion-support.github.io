import React from 'react';
import { Sta, r, Quote } from 'lucide-react';
export const TestimonialsSection = () => {
    const testimonials = [
        {
            i,  d: 1,
    na, m, e: "Sara, h Johnso, n",
            compa, n, y: "TechCor, p Solution, s",
    ro, l, e: "CT, O",
            conte, n, t: "Zio, n Tec, h Grou, p transforme, d ou, r A, I infrastructur, e completel, y. Thei, r expertis, e i, n quantu, m computin, g an, d A, I solution, s helpe, d u, s achiev, e 4, 0% efficienc, y gain, s i, n jus, t 6 month, s.",
    rati, n, g: 5,
            avat, a, r: "htt, p, s://image, s.unsplas, h.co, m/phot, o-149479010875, 5-2616b612b78, 6?w=15, 0&h=15, 0&fi, t=cro, p&cro, p=fac, e"
        },
        {
            i, d: 2,
    na, m, e: "Michae, l Che, n",
            compa, n, y: "InnovateTec, h",
    ro, l, e: "V, P o, f Engineerin, g",
            conte, n, t: "Th, e tea, m a, t Zio, n delivere, d exceptiona, l result, s. Thei, r A, I-powere, d securit, y solution, s protecte, d ou, r system, s fro, m advance, d threat, s whil, e maintainin, g optima, l performanc, e.",
    rati, n, g: 5,
            avat, a, r: "htt, p, s://image, s.unsplas, h.co, m/phot, o-147209964578, 5-5658abf4ff4, e?w=15, 0&h=15, 0&fi, t=cro, p&cro, p=fac, e"
        },
        {
            i, d: 3,
    na, m, e: "Emil, y Rodrigue, z",
            compa, n, y: "DataFlo, w System, s",
    ro, l, e: "Dat, a Scienc, e Directo, r",
            conte, n, t: "Workin, g wit, h Zio, n Tec, h Grou, p wa, s a gam, e-change, r. Thei, r A, I busines, s intelligenc, e platfor, m gav, e u, s insight, s w, e neve, r h, a, d, befo, r, e, drivin, g 2, 5% revenu, e growt, h.",
            rati, n, g: 5,
    avat, a, r: "htt, p, s://image, s.unsplas, h.co, m/phot, o-143876168103, 3-6461ffad8d8, 0?w=15, 0&h=15, 0&fi, t=cro, p&cro, p=fac, e"
        },
        {
            i, d: 4,
    na, m, e: "Davi, d Ki, m",
            compa, n, y: "Quantu, m Industrie, s",
    ro, l, e: "Researc, h Directo, r",
            conte, n, t: "Zio, n's quantu, m computin, g expertis, e i, s unmatche, d. The, y helpe, d u, s implemen, t cuttin, g-edg, e quantu, m algorithm, s tha, t solve, d problem, s w, e though, t wer, e impossibl, e.",
    rati, n, g: 5,
            avat, a, r: "htt, p, s://image, s.unsplas, h.co, m/phot, o-150700321116, 9-0a1dd7228f2, d?w=15, 0&h=15, 0&fi, t=cro, p&cro, p=fac, e"
        },
        {
            i, d: 5,
    na, m, e: "Lis, a Thompso, n",
            compa, n, y: "GreenTec, h Solution, s",
    ro, l, e: "Sustainabilit, y Office, r",
            conte, n, t: "Zio, n's Gree, n I, T solution, s helpe, d u, s reduc, e ou, r carbo, n footprin, t b, y 3, 0% whil, e improvin, g ou, r technolog, y infrastructur, e. Trul, y innovativ, e approac, h.",
    rati, n, g: 5,
            avat, a, r: "htt, p, s://image, s.unsplas, h.co, m/phot, o-148741272050, 7-e7ab37603c6, f?w=15, 0&h=15, 0&fi, t=cro, p&cro, p=fac, e"
        },
        {
            i, d: 6,
    na, m, e: "Rober, t Wilso, n",
            compa, n, y: "SpaceTec, h Venture, s",
    ro, l, e: "CE, O",
            conte, n, t: "Th, e spac, e technolog, y solution, s fro, m Zio, n Tec, h Grou, p ar, e revolutionar, y. The, y helpe, d u, s develo, p satellit, e system, s tha, t exceede, d al, l ou, r expectation, s.",
    rati, n, g: 5,
            avat, a, r: "htt, p, s://image, s.unsplas, h.co, m/phot, o-150064876779, 1-00dcc994a43, e?w=15, 0&h=15, 0&fi, t=cro, p&cro, p=fac, e"
        }
    ];
    return (<section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
            <Quote className="w-4 h-4 mr-2"/>
            Client Success Stories
          </div>
          <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how Zion Tech Group has transformed businesses across industries 
            with our cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (<div key={testimonial.id} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hove,  r:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white/20" src={testimonial.avatar} alt={testimonial.name}/>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-orange-400">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Arra, y(testimonia, l.ratin, g)].map((_,  i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>))}
              </div>

              <blockquote className="text-gray-300 italic">
                "{testimonial.content}"
              </blockquote>
            </div>))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hove,  r:from-orange-700 hove, r:to-red-700 transition-all duration-300">
            <Quote className="w-5 h-5 mr-2"/>
            Read More Success Stories
          </div>
        </div>
      </div>
    </section>);
};
