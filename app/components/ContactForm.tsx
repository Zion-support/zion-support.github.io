


  message: string,;}
}
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {







    message: '';}




    message: '';}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;}



      [name]: value;}






        message: 'Sorry, there was an error sending your message. Please try again.';}

    }

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@company.com"
              />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
          </label>
          </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
          </label>
          </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
          </label>
          </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />

          </select>
  const services = [
          </select>
    'AI Solutions',
          </select>
    'Web Development',
          </select>
    'Mobile App Development',
          </select>
    'Cloud Services',
          </select>
    'Data Analytics',
          </select>
    'Cybersecurity',
          </select>
    'IT Consulting',
          </select>
    'Other'
          </select>
  ]
          </select>

          </select>
              </label>
          </select>
              <input
          </select>
                type="text"
          </input>
                id="name"
          </input>
                name="name"
          </input>
                value={formData.name}
                onChange={handleChange}
                required
          </input>
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          </input>
                placeholder="Your full name"
          </input>
              />
          </input>
            </div>
          </input>
            <div></div>
          </input>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          </div>
                Email Address *
          </label>
              </label>
          </label>
              <input
          </label>
                type="email"
          </input>
                id="email"
          </input>
                name="email"
          </input>
                value={formData.email}
                onChange={handleChange}
                required
          </input>
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          </input>
                placeholder="your.email@company.com"
          </input>
              />
          </input>
            </div>
          </input>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
          </input>
            <div></div>
          </div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          </div>
                Company
          </label>
              </label>
          </label>
              <input
          </label>
                type="text"
          </input>
                id="company"
          </input>
                name="company"
          </input>
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          </input>
                placeholder="Your company name"
          </input>
              />
          </input>
            </div>
          </input>
            <div></div>
          </input>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          </div>
                Phone Number
          </label>
              </label>
          </label>
              <input
          </label>
                type="tel"
          </input>
                id="phone"
          </input>
                name="phone"
          </input>
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          </input>
                placeholder="+1 (555) 123-4567"
          </input>
              />
          </input>
            </div>
          </input>
          </div>
          </input>
          <div></div>
          </input>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          </div>
              Service Interest
          </label>
            </label>
          </label>
            <select
          </label>
              id="service"
          </select>
              name="service"
          </select>
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          </select>
            >
          </select>
              ) : (
          </select>
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>
          </select>
              )}
              <span className="text-sm font-medium">{status.message}</span>
          </div>
            </div>
          </span>
          )}
