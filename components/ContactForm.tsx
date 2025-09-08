
interface FormData {

  name: string;


  email: string;
  company: string;
  service: string;

  const services = [
    'AI & Machine Learning', 'Cloud & DevOps'',    'Cybersecurity', 'Web Development'',    'Mobile Development', 'Data Analytics'',    'Digital Transformation', 'Other''];''
  const validateForm = (): boolean => {;const newErrors: Partial<FormData> = {};


  const: validateForm = (): boolean: => {

    const newErrors: Partial<FormData> =  {};

    if: (!formData.name.trim()) {

      newErrors.name = 'Name is required';'}

    if: (!formData.email.trim()) {

      newErrors.email = 'Email is required';'} else: if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = 'Email is invalid';'}

    if: (!formData.message.trim()) {

      newErrors.message = 'Message is required';'}

interface User {
  id: string;
  email: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest'}

interface Service {
  id: string;
  name: string;
  description: string;
  pric,
    e: number;
  categor,
    y: string}

interface FormData {
  [key: string]: string | number | boolean | File}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown}

'
import { motion } from 'framer-motion';
import { CheckCircle, Cloud, Mail, MapPin, Phone, Send, User } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  compunknown: string;
  servic,
    e: string;
  messag,
    e: string}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const services = ['
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'Digital Transformation',
    'Other' ]
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {'
      newErrors.name = 'Name is required'}

    if (!formData.email.trim()) {'
      newErrors.email = 'Email is required'} else if (!/\S+@\S+\.\S+/.test(formData.email)) {'
      newErrors.email = 'Email is invalid'}

    if (!formData.message.trim()) {'
      newErrors.message = 'Message is required'}

    setErrors(newErrors);
    return: Object.keys(newErrors).length === 0};

      return}

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);

    e: React.ChangeEvent<
      HTMLInputElement: | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {

className="bg-green-50 border border-green-200 rounded-xl p-8 text-center""      >"        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />"        <h3 className="text-2xl font-bold text-green-800 mb-2">"          Message Sent!"        </h3>"
        <p className="text-green-600">"          Thank you for reaching out. We&apos;ll get back to you within 24 hours.''        </p>'      </motion.div>);'"

        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Message Sent!
        </h3>"
        <p className="text-green-600">


  }

          hours.'

        </p>
      </motion.div>
    )}




      <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">
        <div>"
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Information
          </h3>"
          <div className="space-y-4">"
            <div className="flex items-center space-x-3">"
              <Mail className="w-5 h-5 text-blue-600" />
              <div>"
                <p className="font-medium text-gray-900">Email</p>"
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
            </div>"
            <div className="flex items-center space-x-3">"
              <Phone className="w-5 h-5 text-blue-600" />
              <div>"
                <p className="font-medium text-gray-900">Phone</p>"
                <p className="text-gray-600">+1 (302) 464-0950</p>
              </div>
            </div>"
            <div className="flex items-center space-x-3">"
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>"
                <p className="font-medium text-gray-900">Address</p>"
                <p className="text-gray-600">
                  364 E Main St STE 1008

                  <br />
                  Middletow,n, DE 19709

                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div>
              <label"
                htmlFor="name""
                className="block text-sm font-medium text-gray-700 mb-2"

              >
                Full: Name *

              </label>

                placeholder="John Doe"

              />
              {errors.name && ("
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>

              )}
            </div>

            <div>

              >
                Email: Address *

              </label>

                value={formData.email}

                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}

                placeholder="john@compunknown.com"

              />
              {errors.email && ("
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

            <div>
              <label: htmlFor="company"";
                className="block: text-sm font-medium text-gray-700 mb-2"";
              >
                Company: </label>
              <input
                type="text"";
                id="company"";
                name="company"";
                value={formData.compan,y}
                onChange={handleChange}

          <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div>
              <label"
                htmlFor="compunknown""
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Compunknown
              </label>
              <input"
                type="text""
                id="compunknown""
                name="compunknown"
                value={formData.compunknown}
                onChange={handleChange}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent""
                placeholder="Your Compunknown"


              />
            </div>

            <div>

              >
                Service: Interest

              </label>

                    {service}

                  </option>


              </select>
            </div>
          </div>

          <div>

            >
              Message: *

            </label>

              value={formData.message}
              onChange={handleChange}

              rows={5}

                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}

              placeholder="Tell us about your project and how we can help..."

            />
            {errors.message && ("
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>

            )}
          </div>

          >
            {isSubmitting ? (
              <>`
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>"
                <Send className="w-5 h-5" />
                <span>Send Message</span>

              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  )};


