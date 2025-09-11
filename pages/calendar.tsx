import {
  Calendar
  Clock
  Users
  CheckCircle
  ArrowRight
  Phone
  Mail
  MapPin
  Video
  MessageSquare
  Building

import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Video,
  MessageSquare,
  Building,;
} from "lucide-react";
const timeSlots = [
  { time: "9:00 AM", available: true, type: "Video Call" }
  { time: "9:30 AM", available: true, type: "Phone Call" }
  { time: "10:00 AM", available: false, type: "Video Call" }
  { time: "10:30 AM", available: true, type: "In-Person" }
  { time: "11:00 AM", available: true, type: "Video Call" }
  { time: "11:30 AM", available: true, type: "Phone Call" }
  { time: "1:00 PM", available: true, type: "Video Call" }
  { time: "1:30 PM", available: false, type: "In-Person" }
  { time: "2:00 PM", available: true, type: "Video Call" }
  { time: "2:30 PM", available: true, type: "Phone Call" }
  { time: "3:00 PM", available: true, type: "In-Person" }
  { time: "3:30 PM", available: true, type: "Video Call" }
  { time: "4:00 PM", available: false, type: "Phone Call" }
  { time: "4:30 PM", available: true, type: "Video Call" }
  { time: "5:00 PM", available: true, type: "Phone Call" }
];
const consultationTypes = [
  {
    title: "Free Discovery Call"
    duration: "30 minutes"
    description:
      "Discuss your project requirements and explore how we can help"
    price: "Free"
    icon: MessageSquare
    features: [
      "Project assessment"
      "Solution recommendations"
      "Timeline discussion"
      "Budget estimation"
    ]
  }
  {
    title: "Technical Consultation"
    duration: "60 minutes"
    description:
      "Deep dive into technical requirements and architecture planning"
    price: "$200"
    icon: Building
    features: [
      "Technical architecture review"
      "Technology stack recommendations"
      "Implementation planning"
      "Risk assessment"
    ]
  }
  {
    title: "Strategy Session"
    duration: "90 minutes"
    description:
      "Comprehensive business strategy and digital transformation planning"
    price: "$500"
    icon: Users
    features: [
      "Business analysis"
      "Digital strategy planning"
      "ROI projections"
      "Implementation roadmap"
    ]
  }
];
const teamMembers = [
  {
    name: "Sarah Johnson"
    role: "CEO & Founder"
    expertise: "Strategic Planning, AI Strategy"
    image: "/images/team/sarah-johnson.jpg"
    available: true
  }
  {
    name: "Michael Chen"
    role: "CTO"
    expertise: "Cloud Architecture, Quantum Computing"
    image: "/images/team/michael-chen.jpg"
    available: true
  }
  {
    name: "Dr. Emily Rodriguez"
    role: "Head of AI Research"
    expertise: "Machine Learning, AI Research"
    image: "/images/team/emily-rodriguez.jpg"
    available: false
  }
  {
    name: "David Kim"
    role: "Head of Cybersecurity"
    expertise: "Cybersecurity, Risk Management"
    image: "/images/team/david-kim.jpg"
    available: true
  }
];
export default function CalendarPage() {
const timeSlots = [;
  { time: "9:00 AM", available: true, type: "Video Call" },;
  { time: "9:30 AM", available: true, type: "Phone Call" },;
  { time: "10:00 AM", available: false, type: "Video Call" },;
  { time: "10:30 AM", available: true, type: "In-Person" },;
  { time: "11:00 AM", available: true, type: "Video Call" },;
  { time: "11:30 AM", available: true, type: "Phone Call" },;
  { time: "1:00 PM", available: true, type: "Video Call" },;
  { time: "1:30 PM", available: false, type: "In-Person" },;
  { time: "2:00 PM", available: true, type: "Video Call" },;
  { time: "2:30 PM", available: true, type: "Phone Call" },;
  { time: "3:00 PM", available: true, type: "In-Person" },;
  { time: "3:30 PM", available: true, type: "Video Call" },;
  { time: "4:00 PM", available: false, type: "Phone Call" },;
  { time: "4:30 PM", available: true, type: "Video Call" },;
  { time: "5:00 PM", available: true, type: "Phone Call" },;
];
export default function CalendarPage() {;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;
      <Head>;
        <title>Schedule a Consultation - ZION TECH GROUP</title>;
        <meta
          name="description"
          content="Schedule a free consultation with our experts. Book a call to discuss your AI, IT, or digital transformation needs."
        />;
        <meta
          name="keywords"
          content="schedule, consultation, book call, free consultation, AI experts, IT consulting"
        />;
      </Head>;


      {/* Consultation Types */}
      <section className="py-20 px-4 bg-white">;
        <div className="max-w-7xl mx-auto">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;
              Choose Your Consultation Type;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Select the type of consultation that best fits your needs and;
              schedule.;
            </p>;
          </motion && motion.div>;
          <div className="grid md:grid-cols-3 gap-8">;
            {consultationTypes && consultationTypes.map((type, index) => (;
              <motion&& motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  index === 0
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                    : "bg-white"
                }`}>;
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">;
                  <type && type.icon className="w-6 h-6" />;
                </div>;
                <h3 className="text-2xl font-bold mb-2">{type && type.title}</h3>;
                <p className="text-lg mb-4 opacity-90">{type && type.description}</p>;
                <div className="flex items-center justify-between mb-6">;
                  <span className="text-sm opacity-75">{type && type.duration}</span>;
                  <span className="text-2xl font-bold">{type && type.price}</span>;
                </div>;
                <ul className="space-y-2 mb-6">;
                  {type && type.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm">;
                      <CheckCircle className="w-4 h-4 mr-2" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">;
                  Book Now;
                </button>;
              </motion && motion.div>;
            ))}
          </div>;
        </div>;
      </section>;



              <div className="mt - 8">;
                <Link;
                  href="/contact";
                  className="inline - flex items - center px - 6 py - 3 bg - white text - blue - 600 font - semibold rounded - lg hover:bg - gray - 100 transition - colors";
                >;
                  Contact Us Now;
                  <ArrowRight className="w - 5 h - 5 ml - 2" />;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py - 20 px - 4 bg - white">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text - 4xl font - bold text - gray - 900 mb - 6">;
              Ready to Get Started?;
            </h2>;
            <p className="text - xl text - gray - 600 mb - 8">;
              Book your consultation today and take the first step towards;
              transforming your business with cutting - edge technology.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link;
                href="/services";
                className="inline - flex items - center px - 8 py - 4 bg - blue - 600 text - white font - semibold rounded - lg hover:bg - blue - 700 transition - colors";
              >;
                View Our Services;
                <ArrowRight className="w - 5 h - 5 ml - 2" />;
              </Link>;
              <Link;
                href="/about";
                className="inline - flex items - center px - 8 py - 4 border - 2 border - blue - 600 text - blue - 600 font - semibold rounded - lg hover:bg - blue - 600 hover:text - white transition - colors";
              >;
                Learn About Us;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>);
}