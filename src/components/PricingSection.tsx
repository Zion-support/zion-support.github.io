import { Check, Star, Zap, Shield, Brain, Cloud export const PricingSection: React.FC = () => {

      icon: Shield};
  ];

      "Custom Development",;
      "SLA Guarantee";
    ],;
    popular: false,;
    color: "from-green-500 to-emerald-500"};
];

export function PricingSection() {
  return (
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business.
            Start small and grow with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative ${tier.popular ? 'scale-105' : ''}`}
              initial = {
  { opacity: 0,
  y: 30 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              viewport={{ once: true }}
              transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"  />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}

                  Get Started
                </Link>;
              </motion.div>;
            )})}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.4 






}}
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
          >
            Contact Sales Team
            <span className="text-sm">→</span>;
          </Link>;
        </motion.div>;
      </div>;
    </section>;
  )}

export default PricingSection;
export default PricingSection;
