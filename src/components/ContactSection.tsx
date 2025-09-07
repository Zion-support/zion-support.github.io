import React, { useState } from 'react';''
import { Mail, Phone, MapPin, Send } from 'lucide-react';'
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({'
    name: '',''
    email: '',''
    company: '',''
    message: '',')
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
</HTMLInputElement>'
    <section className="py-16 px-4 bg-white">"
</section>"
      <div className="container mx-auto max-w-6xl">"
</div>"
        <div className="text-center mb-12">"
</div>"
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>""
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
</p>
          </p>
        </div>
"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"
</div>"
          <div className="space-y-8">"
</div>
            <div>
</div>"
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>""
              <div className="space-y-6">"
</div>"
                <div className="flex items-start space-x-4">"
</div>"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">"
</div>"
                    <Mail className="w-6 h-6 text-blue-600" />"
</Mail>
                  </div>
                  <div>
</div>"
                    <h4 className="font-semibold text-gray-900">Email</h4>""
                    <p className="text-gray-600">contact@ziontechgroup.com</p>""
                    <p className="text-gray-600">support@ziontechgroup.com</p>"
                  </div>
                </div>
"
                <div className="flex items-start space-x-4">"
</div>"
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">"
</div>"
                    <Phone className="w-6 h-6 text-green-600" />"
</Phone>
                  </div>
                  <div>
</div>"
                    <h4 className="font-semibold text-gray-900">Phone</h4>""
                    <p className="text-gray-600">+1 (555) 123-4567</p>""
                    <p className="text-gray-600">+1 (555) 987-6543</p>"
                  </div>
                </div>
"
                <div className="flex items-start space-x-4">"
</div>"
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">"
</div>"
                    <MapPin className="w-6 h-6 text-purple-600" />"
</MapPin>
                  </div>
                  <div>
</div>"
                    <h4 className="font-semibold text-gray-900">Office</h4>""
                    <p className="text-gray-600">"
</p>
                      123 Tech Street<br />
</br>
                      Innovation District<br />
</br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
"
            <div className="bg-gray-50 p-6 rounded-lg">"
</div>"
              <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>""
              <div className="space-y-2 text-gray-600">"
</div>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
</div>"
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>""
            <form onSubmit={handleSubmit} className="space-y-6">"
</form>"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
                <div>
</div>"
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                  </label>
                  <input;"
                    type="text"""
                    id="name"""
                    name="name""
                    required;
                    value={formData.name}
                    onChange={handleChange}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                    placeholder="Your full name""
                  />
</input>
                </div>
                <div>
</div>"
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                  </label>
                  <Textarea;"
                    id="message"""
                    name="message"""
import { useState } from "react",;""
import { GradientHeading } from "@/components/GradientHeading",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;""
import { Textarea } from "@/components/ui/textarea",;""
import { toast } from "@/components/ui/use-toast",;""
import z from "zod",;""
import { Mail } from 'lucide-react';'
export function ContactSection() {;
  const [formData, setFormData] = useState({;'
    name: "",;""
    email: "",;""
    subject: "",;")"
    message: ""}),;"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{;
;
export /**
 * ContactSection - Function description;
 */
function ContactSection() {
  const [form_data, setFormData] = useState ({"
    name: "",""
    email: "",""
    subject: "",")"
    message: ""}),"
  const [is_submitting, setIsSubmitting] = useState (false);
  const [submitted, set_submitted] = useState (false);
  const [errors, set_errors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
</Textarea>
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {
  // TODO: Implement
}
    const { name, value } = e.target;
    setFormData ((prev) => ({ ...prev, [name]: value }));
    set_errors ((prev) => ({ ...prev, [name]: undefined }));
  }
  const handle_submit = (e: React.FormEvent) =>: any {
  // TODO: Implement
}
    e.prevent_default ();  const contact_info = [{
      icon: Phone,"
      title: "Phone",""
      value: "+1 302 464 0950",""
      link: "tel:+13024640950";"
},
    {
      icon: Mail,"
      title: "Email",""
      value: "kleber@ziontechgroup.com",""
      link: "mailto:kleber@ziontechgroup.com";"
},    {"
      icon: MapPin, ";""
      title: "Address", ";""
      value: "364 E Main St STE 1008 Middletown DE 19709", ";"]"
      link: "https://maps.google.com/?q = 364 + E+Main + St + STE + 1008 + Middletown + DE + 19709"}  ];""
  return (";""
    <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">";"
</section>"
      <div className="max - w-7xl mx - auto">;"
</div>
        <motion.div;

          initial = {

  { opacity: 0,
  coordinate_y: 20;
}}
          whileInView = {

  { opacity: 1,
  coordinate_y: 0;
}}

          transition={{ duration: 0.8 }}"
          viewport={{ once: true }}";""
          className="text - center mb - 16";""
";""
          <h2 className="text - 3xl sm:text - 4xl font - bold text - white mb - 4">;"
</motion>"
          </h2>";""
          <p className="text - xl text - zion - slate - light max - w-3xl mx - auto">;"
</p>
          </p>;"
        </motion.div>";""
        <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8 mb - 12">;"
</div>
            <motion.div;

              key={index}
              initial = {

  { opacity: 0,
  coordinate_y: 20;
}}
              whileInView = {

  { opacity: 1,
  coordinate_y: 0;
}}
              transition = {

  { duration: 0.6,
  delay: index * 0.1;
}}"
              viewport={{ once: true }}";""
              className="text - center";"
    const schema = z.object ({)"
      name: z.string ().min (2, "Name is required");""
      email: z.string ().email ("Enter a valid email"),""
      subject: z.string ().min (2, "Subject is required");""
      message: z.string ().min (10, "Message must be at least 10 characters")});"
    const result = schema.safe_parse (form_data);
    // Check condition;
if ( {) {
  $2;
}
      const field_errors: Record < string, string> = {}
</motion>"
    <section className="py - 20 bg - zion - blue" id="contact">;"
</section>"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
        <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 16 items - center">;"
</div>
          <div>;
</div>
            <GradientHeading > Get In Touch</GradientHeading>;"
            <p className="mt - 4 text - zion - slate - light text - xl mb - 8">;"
</p>
            </p>;"
            <div className="flex items - center mb - 6">;"
</div>"
              <div className="mr - 4 p - 2 bg - zion - purple / 20 rounded - full text - zion - cyan">;"
</div>"
                <Mail className="h - 6 w - 6" />;"
</Mail>
              </div>;
              <div>;
</div>"
                <p className="text - white font - semibold">Email Us</p>;""
                <a href="mailto:commercial@ziontechgroup.com" className="text - zion - cyan hover:text - zion - purple transition - colors">;"
</a>
                </a>;
              </div>;
            </div>;"
            <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white">;"
</Button>
            </Button>;
          </div>;"
          <div className="relative">;"
</div>"
            <div className="absolute inset - 0 bg - gradient - to - r from - zion - purple / 20 to - zion - cyan / 20 rounded - lg filter blur - 3xl opacity - 30"></div>;""
            <div className="relative bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 8">;"
</div>"
              <h3 className="text - xl font - bold mb - 6 text - white">Send Us a Message</h3>;""
              <form on_submit={handle_submit} className="space - y-6">;"
</form>"
                <div className="grid grid - cols - 1 gap - 6 sm:grid - cols - 2">;"
</div>
                  <div>;
</div>"
                    <label html_for="name" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;"
                      Name;"
                    ">;"
</label>
                    </label>;
                    <Input;"
                      id="name";""
                      name="name";"
                      value = {form_data.name, }
                      on_change = {handle_change, }"
                      className={`w - full rounded - md bg - zion - blue - dark border - zion - blue - light text - white ${errors.name ? 'border - red - 500 focus - visible:ring - red - 500' : ''}`}'
                      required;
                    />;
</Input>'
                      <p className="mt - 1 text - sm text - red - 500">{errors.name}</p>)}"
                  </div>;
                  <div>;
</div>"
                    <label html_for="email" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;"
                      Email;"
                    ">;"
</label>
                    </label>;
                    <Input;"
                      id="email";""
                      name="email";""
                      type="email";"
                      value = {form_data.email, }
                      on_change = {handle_change, }"
                      className={`w - full rounded - md bg - zion - blue - dark border - zion - blue - light text - white ${errors.email ? 'border - red - 500 focus - visible:ring - red - 500' : ''}`}'
                      required;
                    />;
</Input>'
                      <p className="mt - 1 text - sm text - red - 500">{errors.email}</p>)}"
                  </div>;
                </div>;
                <div>;
</div>"
                  <label html_for="subject" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;"
                    Subject;"
                  ">;"
</label>
                  </label>;
                  <Input;"
                    id="subject";""
                    name="subject";"
                    value = {form_data.subject, }
                    on_change = {handle_change, }"
                    className={`w - full rounded - md bg - zion - blue - dark border - zion - blue - light text - white ${errors.subject ? 'border - red - 500 focus - visible:ring - red - 500' : ''}`}'
                    required;
                  />;
</Input>'
                    <p className="mt - 1 text - sm text - red - 500">{errors.subject}</p>)}"
                </div>;
                <div>;
</div>"
                  <label html_for="message" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;"
                    Message;"
                  ">;"
</label>
                  </label>;
                  <Textarea;"
                    id="message";""
                    name="message";""
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}'
                    required;
                  />
</Textarea>'
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>"
                </div>
                <div>
</div>
                  <Button;"
                    type="submit"""
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
              <div>
</Button>"
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                </label>
                <input;"
                  type="text"""
                  id="company"""
                  name="company""
                  value={formData.company}
                  onChange={handleChange}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                  placeholder="Your company name""
                />
</input>
              </div>

              <div>
</div>"
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">"
</label>
                </label>
                <textarea;"
                  id="message"""
                  name="message""
                  required;
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                  placeholder="Tell us about your project or how we can help...""
                />
</textarea>
              </div>

              <button;"
                type="submit"""
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2""
              >
</button>"
                <Send className="w-5 h-5" />"
</Send>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
                  </Button>"
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>'
                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);'
}</div> <div> <label html_for="email" className="block text - sm font - medium text - zion - slate - light mb - 1" > Email </label> <Input) ";"
</div>"
}</div> </div> <div> <label html_for="subject" className="block text - sm font - medium text - zion - slate - light mb - 1" > Subject </label> <Input) ";"
</div>"
}</div> <div> <label html_for="message" className="block text - sm font - medium text - zion - slate - light mb - 1" > Message </label> <Textarea);"
</div>"
}</div> <div> <Button > {';'
</div>
}</Button>);
}</div> </form> </div> </div> </div> </div> </section>);'