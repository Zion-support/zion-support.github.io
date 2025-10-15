</div>
</div>
</section>

{/* Features Section */}
</div>
))}
</div>
</div>
</section>

{/* Pricing Section */}
<section className="py-16 sm:py-20">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center mb-12 sm:mb-16">"
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">"
Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>"
</h2>
<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">"
Choose the plan that fits your content creation needs. All plans include our core AI features.
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
{pricingPlans.map((plan, index) => (
<div;>
key={index}
className={`relative bg-slate-800/50 rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
plan.popular
? 'border-cyan-500 shadow-cyan-500/20'
: 'border-slate-700 hover:border-cyan-500 hover:shadow-cyan-500/20'
}`}
{plan.popular && (
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">"
Most Popular
</div>
)}

<div className="text-center mb-6">"
<h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>"
<div className="flex items-center justify-center mb-2">"
<span className="text-4xl font-bold text-cyan-400">{plan.price}</span>"
<span className="text-sm text-gray-400 line-through ml-2">{plan.originalPrice}</span>"
</div>
<p className="text-gray-400 text-sm">{plan.description}</p>"
</div>

<ul className="space-y-3 mb-8">"
{plan.features.map((feature, featureIndex) => (
<li key={featureIndex} className="flex items-center text-sm text-gray-300">"
<CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />"
<span>{feature}</span>
</li>
))}
</ul>

<Link;>
to="/contact"
className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
plan.popular
? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover:scale-105'
: 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
}`}
Start Free Trial
</Link>
</div>
))}
</div>
</div>
</section>

{/* Testimonials Section */}
<section className="py-16 sm:py-20 bg-slate-800/30">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center mb-12 sm:mb-16">"
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">"
What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Customers Say</span>"
</h2>
<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">"
Join thousands of satisfied customers who have transformed their content creation process.
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
{testimonials.map((testimonial, index) => (
<div;>
key={index}
className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
<div className="flex items-center mb-4">"
{[...Array(testimonial.rating)].map((_, i) => (
<StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />"
))}
</div>
<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>"
<div>
<p className="text-white font-semibold">{testimonial.name}</p>"
<p className="text-cyan-400 text-sm">{testimonial.role}</p>"
<p className="text-gray-400 text-sm">{testimonial.company}</p>"
</div>
</div>
))}
</div>
</div>
</section>

{/* CTA Section */}
Schedule Demo
</Link>
</div>
</div>
</section>
</div>
</>
);
const page  = React.lazy(() => import('./page'))'"'"
