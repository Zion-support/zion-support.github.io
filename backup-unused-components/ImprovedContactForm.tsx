import React from 'react';
import React, { useState } from "react"lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

const ImprovedContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
//     name: ",
//     email: """,
//     company: ",
//     message: """,
//     budget: ",
//     timeline: ""AI Solutions",
//     ",
//     "Cloud Infrastructure"Web Development",
//     ",
//     "Database Management"Custom Software",
//     ",
//     "Micro SAAS"5 G Solutions",
//     "
  ];

  const budgets = [
//     "Under $10,000"$10,000 - $50,000",
//     ",
//     "$100,000 - $500,000"Over $500,000",
//     "
  ];

  const timelines = [
//     "ASAP"Within 1 month",
//     ",
//     "3-6 months"6+ months",
//     "
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = ";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"Please enter a valid phone number";
      }
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = ";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setIsServiceDropdownOpen(false);
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real app, you would send the data to your backend
      console.log('Form submitted:', formData);

      setIsSubmitted(true);
      setFormData({
//         name: ",
//         email: """,
//         company: ",
//         message: """,
//         budget: ",
//         timeline: ""bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2 xl p-8 text-center"w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"w-8 h-8 text-green-400"text-2 xl font-bold text-white mb-2"text-gray-300 mb-6"bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-8"flex items-center gap-3 mb-6"w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center"w-6 h-6 text-cyan-400"text-2 xl font-bold text-white"text-gray-300"space-y-6"grid md:grid-cols-2 gap-4"name" className="w-4 h-4 inline mr-2" />
//               Full Name *
//             </label>
//             <input
              type="
              id="name"name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
//                 errors.name ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="
//             />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1" />
                {errors.name}
</p>
            )}
</div>

//           <div>
            <label htmlFor="email"block text-sm font-medium text-white mb-2"w-4 h-4 inline mr-2"email"
              id="
              name="email"your.email@example.com"
//             />
            {errors.email && (
              <p className="w-4 h-4" />
                {errors.email}
</p>
            )}
</div>
</div>

        {/* Phone and Company Row */}
        <div className="phone" className="w-4 h-4 inline mr-2" />
//               Phone Number
//             </label>
//             <input
              type="
              id="phone"phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
//                 errors.phone ? 'border-red-500' : 'border-white/20'
              }`}
              placeholder="
//             />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1" />
                {errors.phone}
</p>
            )}
</div>

//           <div>
            <label htmlFor="company"block text-sm font-medium text-white mb-2"w-4 h-4 inline mr-2"text"
              id="
              name="company"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"Your company name"block text-sm font-medium text-white mb-2"relative"button"
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors flex items-center justify-between ${
//                 errors.service ? 'border-red-500' : 'border-white/20'
              }`}
//             >
              <span className={formData.service ? 'text-white' : 'text-gray-400'}>
                {formData.service || 'Select a service'}
</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
</button>

            {isServiceDropdownOpen && (
              <div className="button"
                    onClick={() => handleServiceSelect(service)}
                    className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="grid md:grid-cols-2 gap-4">
//           <div>
            <label htmlFor=" className="block text-sm font-medium text-white mb-2"
              name="budget"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors""bg-slate-800"timeline"block text-sm font-medium text-white mb-2"timeline"timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="">Select timeline</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline} className="message" className="w-4 h-4 inline mr-2" />
//             Message *
//           </label>
//           <textarea
            id="
            name="message"Tell us about your project, requirements, or any questions you have..."
//           />
          {errors.message && (
            <p className="w-4 h-4" />
              {errors.message}
</p>
          )}
</div>

        {/* Submit Button */}
//         <button
          type="
          disabled={isSubmitting}
          className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2" />
//               Sending...
//             </>
          ) : (
//             <>
              <Send className="w-5 h-5" />
//               Send Message
//             </>
          )}
</button>
      </form>
</div>
  );
