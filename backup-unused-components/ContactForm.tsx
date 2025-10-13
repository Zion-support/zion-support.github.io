import React from 'react';
interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}
import React, { useState } from "react"lucide-react";
interface FormData;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
interface FormData ,
    name: string;,
    email: string;,
    phone: string;,
    company: string;,
    message: string;,
    service: string;

const ContactForm: React.FC = () =>
  const [formData, setFormData] = useState<FormData>(,
    name: ",
      email: """,
      company: ",
      message: """,
);
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
//     name: ",
//     email: """,
//     company: ",
//     message: """,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (
  const handleChange = (,
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
    e.preventDefault();
    setIsSubmitting(true);
    try;
      // Simulate API call;
      await new Promise()resolve) => setTimeout(resolve, 1000();
      setIsSubmitted(true);
      setFormData(
        name: ",
        email: """,
        company: ",
        message: """,
      setFormData(,
    name: ",
          email: """,
          company: ",
          message: """,
);
 catch (error)
 finally;
 finally
      setFormData({
//         name: ",
//         email: """,
//         company: ",
//         message: """,
      });

    } catch (error) {
      } finally {
      setIsSubmitting(false);

;
  if (isSubmitted)
    return (
      <div className="w-8 h-8 mx-auto mb-2" />
        <h3 className="{handleSubmit}" className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>
          <label;
            htmlFor="
            className="block text-sm font-medium text-gray-700 mb-2">
  className="block text-sm font-medium text-gray-700 mb-2" className="space-y-6"></div>
        <div></div>
          <label
    <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label
            htmlFor="name"block text-sm font-medium text-gray-700 mb-2"text"name"
            name="
            value={formData.name}
            onChange={handleChange}
            required;
//             required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            name="name"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"email"block text-sm font-medium text-gray-700 mb-2"email"block text-sm font-medium text-gray-700 mb-2"email"block text-sm font-medium text-gray-700 mb-2"email"email"
            name="
            value={formData.email}
            onChange={handleChange}
            required;
//             required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            name="email"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"grid grid-cols-1 md:grid-cols-2 gap-6"phone"
            className="phone">
  className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label
            htmlFor="
            className="block text-sm font-medium text-gray-700 mb-2"
            id="phone"phone"
            value={formData.phone}
            onChange={handleChange}
            className="phone">
  name=">
  value={formData.phone}>
  onChange={handleChange}>
  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            className="block text-sm font-medium text-gray-700 mb-2">
  className="block text-sm font-medium text-gray-700 mb-2"
            className="block text-sm font-medium text-gray-700 mb-2"
            id="company"company"
            value={formData.company}
            onChange={handleChange}
            className="company">
  name=">
  value={formData.company}>
  onChange={handleChange}>
  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          className="block text-sm font-medium text-gray-700 mb-2">
  className="block text-sm font-medium text-gray-700 mb-2"
          className="block text-sm font-medium text-gray-700 mb-2"
          name="service"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"service"service">
  value={formData.service}>
  onChange={handleChange}>
  className="text"
            type="
            type="tel"text"
          <option value=">Select a service</option>
          <option value="ai-solutions"it-services">IT Services</option>
          <option value=">Micro SAAS</option>
          <option value="consulting"other">Other</option>
        </select>
  </div>
      <div></div>
        <label;
          htmlFor="
          className="block text-sm font-medium text-gray-700 mb-2">
  className="block text-sm font-medium text-gray-700 mb-2"
          className="block text-sm font-medium text-gray-700 mb-2"
  name="message"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"Tell us about your project or requirements..."w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"Tell us about your project or requirements..."submit"
        disabled={isSubmitting}
        className="submit">
  disabled={isSubmitting}>
  className="message"
  name="
          value={formData.message}
        {isSubmitting ? "Sending..."Send Message"}
</button>
    </form>
  );
