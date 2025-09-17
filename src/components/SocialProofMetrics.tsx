import React from 'react';
const SocialProofMetrics: React.FC = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results That Speak for Themselves
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary AI solutions have delivered unprecedented results 
            for businesses worldwidewith measurable ROI and transformative impact.
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {metrics.map((metricindex) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {metric.label}
              <div className="text-gray-600 text-sm">
                {metric.description}
          ))}
        {/* Client Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            <p className="text-xl text-gray-600">
              Real testimonials from industry leaders who have transformed their businesses
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                <div className="text-sm font-bold text-green-600">
                  {testimonial.roi}
            ))}
        {/* Trusted By Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logoindex) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <span className="text-2xl">{logo.logo}</span>
                <span className="font-semibold">{logo.name}</span>
            ))}
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join the Revolution?
            <p className="text-xl mb-6 text-blue-100">
              'Don', 't miss out on the most significant technological breakthrough in history. 
              Transform your business today and achieve unprecedented success.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              <a
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Success Stories
  );

export default SocialProofMetrics;