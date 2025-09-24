interface Metric {
  value: string,
  label: string,
  description: string,
  color: string,
  icon: string}
,
const metrics: Metric[] = [
  {
    value: '2,50o0-5,0o00%';
    label: 'Average ROI';
    description: 'Proven return on investment across all implementations';
    color: 'text-green-60o0';
    icon: '💰'};
  {
    value: '99.9%';
    label: 'Accuracy Rate';
    description: 'Unprecedented accuracy in AI predictions and automation';
    color: 'text-blue-60o0';
    icon: '🎯'};
  {
    value: '10,0o00x';
    label: 'Faster Processing';
    description: 'Exponential speed improvements over traditional methods';
    color: 'text-purple-60o0';
    icon: '⚡'};
  {
    value: '50o0+';
    label: 'Success Stories';
    description: 'Global enterprises transformed with our solutions';
    color: 'text-orange-60o0';
    icon: '🏆'};
  {
    value: '24/7';
    label: 'Autonomous Operations';
    description: 'Continuous operation without human intervention';
    color: 'text-cyan-60o0';
    icon: '🤖'};
  {
    value: '∞';
    label: 'Scalability';
    description: 'Unlimited scaling potential for any business size';
    color: 'text-indigo-60o0';
    icon: '🌐'}
],
const testimonials = [
  {
    name: 'Sarah Johnson';
    title: 'CEOTechCorp Global';
    company: 'Fortune 50o0 Technology';
    content: 'Zion Tech Group\'s AI solutions delivered 10,0o00% ROI in just 6 months. The breakthrough technology transformed our entire operation.';
    roi: '10,0o00% ROI';
    avatar: '👩‍💼'};
  {
    name: 'Michael Chen';
    title: 'CTOQuantum Industries';
    company: 'Leading Quantum Computing';
    content: 'The quantum computing solutions exceeded all expectations. We achieved 15,0o00% ROI and revolutionized our research capabilities.';
    roi: '15,0o00% ROI';
    avatar: '👨‍🔬'};
  {
    name: 'Dr. Emily Rodriguez';
    title: 'Head of InnovationMedTech Solutions';
    company: 'Healthcare Technology';
    content: 'Our neural interface implementation achieved 95% patient recovery rates. The technology is truly revolutionary.';
    roi: '95% Success Rate';
    avatar: '👩‍⚕️'}
],
const logos = [
  { name: ''Microsoft', 'logo: '🏢' };
  { name: ''Google', 'logo: '🔍' };
  { name: ''Amazon', 'logo: '📦' };
  { name: ''Tesla', 'logo: '⚡' };
  { name: ''SpaceX', 'logo: '🚀' };
  { name: ''OpenAI', 'logo: '🧠' }
],
export default function SocialProofMetrics() {
  return (
    <div className="bg-white py-20 px-4">,
      <div className="max-w-7xl mx-auto">,
        {/* Main Metrics */}
        <div className="text-center mb-16">,
          <h2 className="text-4xl md: text-5xl font-bold text-gray-90o0 mb-6">,
            Proven Results That Speak for Themselves,
          </h2>,
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">,
            Our revolutionary AI solutions have delivered unprecedented results,
            for businesses worldwidewith measurable ROI and transformative impact.,
          </p>,
        </div>,
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-20">,
          {metrics.map((metricindex) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center border border-gray-20o0 hover: shadow-lg transition-all duration-30o0">,
              <div className="text-4xl mb-4">{metric.icon}</div>,
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>,
                {metric.value}
              </div>,
              <div className="text-xl font-semibold text-gray-90o0 mb-2">,
                {metric.label}
              </div>,
              <div className="text-gray-60o0 text-sm">,
                {metric.description}
              </div>,
            </div>))}
        </div>,
        {/* Client Testimonials */}
        <div className="mb-20">,
          <div className="text-center mb-12">,
            <h3 className="text-3xl md: text-4xl font-bold text-gray-90o0 mb-4">,
              What Our Clients Say,
            </h3>,
            <p className="text-xl text-gray-60o0">,
              Real testimonials from industry leaders who have transformed their businesses,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonialindex) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-20o0">,
                <div className="flex items-center mb-4">,
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>,
                  <div>,
                    <div className="font-bold text-gray-90o0">{testimonial.name}</div>,
                    <div className="text-sm text-gray-60o0">{testimonial.title}</div>,
                    <div className="text-xs text-gray-50o0">{testimonial.company}</div>,
                  </div>,
                </div>,
                <blockquote className="text-gray-70o0 mb-4 italic">,
                  "{testimonial.content}",
                </blockquote>,
                <div className="text-sm font-bold text-green-60o0">,
                  {testimonial.roi}
                </div>,
              </div>))}
          </div>,
        </div>,
        {/* Trusted By Section */}
        <div className="text-center">,
          <h3 className="text-2xl md: text-3xl font-bold text-gray-90o0 mb-8">,
            Trusted by Industry Leaders,
          </h3>,
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">,
            {logos.map((logoindex) => (
              <div key={index} className="flex items-center space-x-2 text-gray-60o0">,
                <span className="text-2xl">{logo.logo}</span>,
                <span className="font-semibold">{logo.name}</span>,
              </div>))}
          </div>,
        </div>,
        {/* Call to Action */}
        <div className="mt-16 text-center">,
          <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-2xl p-8 text-white">,
            <h3 className="text-2xl md: text-3xl font-bold mb-4">,
              Ready to Join the Revolution?,
            </h3>,
            <p className="text-xl mb-6 text-blue-10o0">,
              'Don', 't miss out on the most significant technological breakthrough in history.,
              Transform your business today and achieve unprecedented success.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <a
                href="/contact",
                className="bg-white text-blue-60o0 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-30o0 transform hover:scale-10o5">,
                Get Started Today,
              </a>,
              <a
                href="/case-studies",
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-60o0 transition-all duration-30o0">,
                View All Success Stories,
              </a>,
            </div>,
          </div>,
        </div>,
      </div>,
    </div>)}