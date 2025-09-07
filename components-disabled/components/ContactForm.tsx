import React, { useState } from 'react';''
import LoadingSpinner from './LoadingSpinner';'
interface FormData {
  // TODO: Implement
}
  name: string;,
  email: string;
  company: string;,
  phone: string;
  service: string;,
  message: string;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
</FormData>)'
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');'
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
</HTMLInputElement>'
    <div className="max-w-2xl mx-auto bg-white rounded-lgshadow-lgp-8">"
</div>"
      <h2 className="text-3xl font-bold text-gray-900mb-6text-center">Get In Touch</h2>""
        <div className="mb-6 p-4 bg-green-100 border border-green-400text-green-700rounded">"
</div>
        </div>"
        <div className="mb-6 p-4 bg-red-100 border border-red-400text-red-700rounded">"
</div>
        </div>"
      <form onSubmit={handleSubmit} className="space-y-6">"
</form>"
        <div className="grid grid-cols-1md:grid-cols-2gap-6">"
</div>
          <div>
</div>"
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-700mb-2">"
</label>
            </label>
            <input;"
              type="text"""
              id="name"""
              name="name""
              value={formData.name}
              onChange={handleInputChange}
              required;"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent""
            />
</input>
          </div>
          
          <div>
</div>"
            <label htmlFor="email" className="block text-sm font-mediumtext-gray-700mb-2">"
</label>
            </label>
            <input;"
              type="email"""
              id="email"""
              name="email""
              value={formData.email}
              onChange={handleInputChange}
              required;"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent""
            />
</input>
          </div>
        </div>
"
        <div className="grid grid-cols-1md:grid-cols-2gap-6">"
</div>
          <div>
</div>"
            <label htmlFor="company" className="block text-sm font-mediumtext-gray-700mb-2">"
</label>
            </label>
            <input;"
              type="text"""
              id="company"""
              name="company""
              value={formData.company}
              onChange={handleInputChange}"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent""
            />
</input>
          </div>
          
          <div>
</div>"
            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-700mb-2">"
</label>
            </label>
            <input;"
              type="tel"""
              id="phone"""
              name="phone""
              value={formData.phone}
              onChange={handleInputChange}"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent""
            />
</input>
          </div>
        </div>

        <div>
</div>"
          <label htmlFor="service" className="block text-sm font-mediumtext-gray-700mb-2">"
</label>
          </label>
          <select;"
            id="service"""
            name="service""
            value={formData.service}
            onChange={handleInputChange}"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent""
          >
</select>"
            <option value="">Select a service</option>""
            <option value="web-development">Web Development</option>""
            <option value="mobile-development">Mobile Development</option>""
            <option value="cloud-solutions">Cloud Solutions</option>""
            <option value="consulting">Consulting</option>""
            <option value="other">Other</option>"
          </select>
        </div>

        <div>
</div>"
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-700mb-2">"
</label>
          </label>
          <textarea;"
            id="message"""
            name="message""
            value={formData.message}
            onChange={handleInputChange}
            required;
            rows={5}"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"""
            placeholder="Tell us about your project...""
          />
</textarea>
        </div>

        <button;"
          type="submit""
          disabled={isSubmitting}"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowedtransition-colorsduration-200""
        >
</button>"
            <div className="flexitems-centerjustify-center">"
</div>
              <LoadingSpinner />
</LoadingSpinner>"
              <span className="ml-2">Sending...</span>"
            </div>
        </button>
      </form>
    </div>"