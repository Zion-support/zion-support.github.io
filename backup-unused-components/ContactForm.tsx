<<<<<<< HEAD
import React from 'react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}
=======
import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
interface FormData;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;

<<<<<<< HEAD
const ContactForm: React.FC = () => 
  const [formData, setFormData] = useState<FormData>(
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
);
=======
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//     service: "",
  });
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
<<<<<<< HEAD
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >,
  ) => 
    const { name, value } = e.target;
    setFormData()prev) => (
      ...prev,
      [name]: value,
();
;
  const handleSubmit = async (e: React.FormEvent) => 
=======
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
//       ...prev,
//       [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
    e.preventDefault();
    setIsSubmitting(true);
    try;
      // Simulate API call;
      await new Promise()resolve) => setTimeout(resolve, 1000();
      setIsSubmitted(true);
<<<<<<< HEAD
      setFormData(
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
);
 catch (error) 
<<<<<<< HEAD
 finally;
=======
 finally 
=======
      setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         message: "",
//         service: "",
      });

    } catch (error) {
      } finally {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      setIsSubmitting(false);

;
  if (isSubmitted) 
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center"></div>
        <MessageSquare className="w-8 h-8 mx-auto mb-2" />
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
<<<<<<< HEAD
        <p></p>
          Your message has been sent successfully. We'll get back to you soon.
        </p>
<<<<<<< HEAD
  </div>
=======
      </div>
=======
//         <p>
//           Your message has been sent successfully. We'll get back to you soon.
</p>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

export default function ContactForm({ className = '', children }: ContactFormProps) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <form onSubmit="{handleSubmit}" className="space-y-6"></form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>
          <label;
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input;
=======
    <form onSubmit="{handleSubmit}" className="space-y-6"></form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>
          <label
=======
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Full Name *
//           </label>
//           <input
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
<<<<<<< HEAD
            required;
=======
//             required
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
<<<<<<< HEAD
          />
  </div>
        <div></div>
<<<<<<< HEAD
          <label;
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input;
=======
          <label
=======
//           />
</div>

//         <div>
//           <label
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Email Address *
//           </label>
//           <input
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
<<<<<<< HEAD
            required;
=======
//             required
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
<<<<<<< HEAD
          />
  </div>
  </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>
<<<<<<< HEAD
          <label;
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number;
          </label>
          <input;
=======
          <label
=======
//           />
</div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Phone Number
//           </label>
//           <input
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
<<<<<<< HEAD
          />
  </div>
        <div></div>
<<<<<<< HEAD
          <label;
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company;
          </label>
          <input;
=======
          <label
=======
//           />
</div>

//         <div>
//           <label
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
//           >
//             Company
//           </label>
//           <input
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
<<<<<<< HEAD
          />
  </div>
  </div>
      <div></div>
<<<<<<< HEAD
        <label;
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Service Interest;
        </label>
        <select;
=======
        <label
=======
//           />
</div>
</div>

//       <div>
//         <label
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Service Interest
//         </label>
//         <select
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//         >
          <option value="">Select a service</option>
          <option value="ai-solutions">AI Solutions</option>
          <option value="it-services">IT Services</option>
          <option value="micro-saas">Micro SAAS</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
<<<<<<< HEAD
        </select>
  </div>
      <div></div>
<<<<<<< HEAD
        <label;
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea;
=======
        <label
=======
//         </select>
</div>

//       <div>
//         <label
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Message *
//         </label>
//         <textarea
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
<<<<<<< HEAD
          required;
=======
//           required
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="Tell us about your project or requirements..."
<<<<<<< HEAD
        />
<<<<<<< HEAD
  </div>
      <button;
=======
      </div>
      <button
=======
//         />
</div>

//       <button
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
        {isSubmitting ? "Sending..." : "Send Message"}
</button>
    </form>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
}