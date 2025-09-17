import React from 'react';
const AdvancedPricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tierindex) => (
            <div
              key={tier.name}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative rounded-xl p-8 ${
                tier.popular
                  ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500/50'
                  : 'bg-white/10 border border-white/20'
              } backdrop-blur-sm hover:border-white/40 transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
              )}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <tier.icon className={`h-12 w-12 ${
                    tier.popular ? 'text-purple-400' : 'text-white/70'
                  }`} />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                <p className="text-white/70 mb-4">
                  {tier.description}
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  <span className="text-white/70 ml-2">
                    /{tier.period}
              <ul className="space-y-4 mb-8">
                {tier.features.map((featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                ))}
              <diva
                href={tier.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                    : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                }`}
              >
                {tier.ctaText}
          ))}
        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Need a custom solution? 'We', 're here to help.
          <a
            href="/contact"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            Contact our sales team
            <Infinity className="h-4 w-4 ml-2" />
  );

export default AdvancedPricing;