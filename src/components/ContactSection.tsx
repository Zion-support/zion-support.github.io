<<<<<<< HEAD
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: ""
    email: ""
    subject: ""
    message: ""})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string

  }>({})
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  };
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();  const contactInfo = [{
      icon: Phone
      title: "Phone"
      value: "+1 302 464 0950"
      link: "tel:+13024640950"
}
    {
      icon: Mail
      title: "Email"
      value: "kleber@ziontechgroup.com"
      link: "mailto:kleber@ziontechgroup.com"
},    {
      icon: MapPin,"
      title: "Address","
      value: "364 E Main St STE 1008 Middletown DE 19709","
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"};  ]
  return ("
    <section className="py-16 px-4 sm:px-6 lg:px-8">"
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial = {
  { opacity: 0
  y: 20
}}
          whileInView = {
  { opacity: 1
  y: 0
}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}"
          className="text-center mb-16"
"
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>"
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Ready to transform your business? Contact us today to discuss your technology needs
          </p>
        </div>

import { useState } from "react",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/components/ui/use-toast",
import z from "zod",
import { Mail } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""}),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitted, setSubmitted] = useState(false),
  const [errors, setErrors] = useState<{
    name?: string,
    email?: string,
    subject?: string,
    message?: string
  }>({}),

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target,
    setFormData((prev) => ({ ...prev, [name]: value })),
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  },

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),

    const schema = z.object({
      name: z.string().min(2, "Name is required"),
      email: z.string().email("Enter a valid email"),
      subject: z.string().min(2, "Subject is required"),
      message: z.string().min(10, "Message must be at least 10 characters")}),

    const result = schema.safeParse(formData),
    if (!result.success) {
      const fieldErrors: Record<string string> = {},
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      }
      setErrors(fieldErrors)
      setErrors(fieldErrors),
      toast({
        title: "Form Validation Error"
        description: result.error.errors[0]?.message |"Please check your form and try again"
        variant: "destructive"})
      return
    }
      toast({
        title: "Form Validation Error",
        description: result.error.errors[0]?.message || "Please check your form and try again",
        variant: "destructive"}),
      return;
    }



    setErrors({})
    setIsSubmitting(true)

    setErrors({}),
    setIsSubmitting(true),

    setErrors({}),
    setIsSubmitting(true),

    fetch("/api/contact", {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
fetch("/api/contact", {
      method: "POST"
      headers: { "Content-Type": "application/json" }
      body: JSON.stringify(formData)})
      .then(async (res) => {
<<<<<<< HEAD
        setIsSubmitting(false)
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));          throw new Error(data.error |"Failed to send message")
        }
        toast({
          title: "Message Sent"
          description: "We've received your message and will get back to you soon."})
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          const data = await res.json().catch(() => ({}));          throw new Error(data.error || "Failed to send message")
        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message")
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),
<<<<<<< HEAD
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 2000)
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((err) => {
        setIsSubmitting(false);        toast({
          title: "Submission Error"
          description: err.message
          variant: "destructive"})
      })
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        setIsSubmitting(false),
        if (!res.ok) {
          const data = await res.json().catch(() => ({})),
          throw new Error(data.error || "Failed to send message")
        }
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),

        setSubmitted(true),
        setTimeout(() => setSubmitted(false), 2000),
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((err) => {
        setIsSubmitting(false),
        toast({

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          title: "Submission Error",
          description: err.message,
          variant: "destructive"})
      })




<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <section className="py-20 bg-zion-blue" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <GradientHeading>Get In Touch</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl mb-8">
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.
            </p>
            <div className="flex items-center mb-6">
              <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-white font-semibold">Email Us</p>
                <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">
                  commercial@ziontechgroup.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-tech">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (<div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-3">
                    <div className="text-white">
                      {office.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{office.city}</h4>
                    <p className="text-zion-slate-light text-sm">{office.country}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">{office.address}</p>
              </div>))}
          </div>
        </div>

        {/* Support Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-tech">Why Choose Our Support?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (<div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
<<<<<<< HEAD
                    rows = {4,}
                    value = {formData.message,}
                    onChange = {handleChange,}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/components/ui/use-toast",;
import z from "zod",;
import { Mail } from 'lucide-react';
export function ContactSection() {;
  const [formData, setFormData] = useState({;
    name: "",;
    email: "",;
    subject: "",;
    message: ""}),;
<<<<<<< HEAD
=======
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{;
;
export /**
 * ContactSection - Function description
 */
function ContactSection() {
  const [form_data, setFormData] = useState ({
    name: "",
    email: "",
    subject: "",
    message: ""}),
  const [is_submitting, setIsSubmitting] = useState (false);
  const [submitted, set_submitted] = useState (false);
  const [errors, set_errors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handle_change = (
    e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {
    const { name, value } = e.target;
    setFormData ((prev) => ({ ...prev, [name]: value }));
    set_errors ((prev) => ({ ...prev, [name]: undefined }));
  }
  const handle_submit = (e: React.FormEvent) =>: any {
    e.prevent_default ();  const contact_info = [{
      icon: Phone,
      title: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950";
},
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com";
},    {
      icon: MapPin, ";
      title: "Address", ";
      value: "364 E Main St STE 1008 Middletown DE 19709", ";
      link: "https://maps.google.com/?q = 364 + E+Main + St + STE + 1008 + Middletown + DE + 19709"}  ];
  return (";
    <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">";
      <div className="max - w-7xl mx - auto">;
        <motion.div;
<<<<<<< HEAD
          initial = {
=======

          initial = {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { opacity: 0,
  coordinate_y: 20;
}}
          whileInView = {
<<<<<<< HEAD
  { opacity: 1,
  coordinate_y: 0;
}}
=======

  { opacity: 1,
  coordinate_y: 0;
}}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}";
          className="text - center mb - 16";
";
          <h2 className="text - 3xl sm:text - 4xl font - bold text - white mb - 4">;
            Get In Touch;
          </h2>";
          <p className="text - xl text - zion - slate - light max - w-3xl mx - auto">;
            Ready to transform your business? Contact us today to discuss your technology needs;
          </p>;
        </motion.div>";
        <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 8 mb - 12">;
          {contact_info.map ((contact, index)  => (
            <motion.div;
<<<<<<< HEAD
              key={index}
              initial = {
=======

              key={index}
              initial = {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { opacity: 0,
  coordinate_y: 20;
}}
              whileInView = {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { opacity: 1,
  coordinate_y: 0;
}}
              transition = {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  { duration: 0.6,
  delay: index * 0.1;
}}
              viewport={{ once: true }}";
              className="text - center";
    const schema = z.object ({
      name: z.string ().min (2, "Name is required");
      email: z.string ().email ("Enter a valid email"),
      subject: z.string ().min (2, "Subject is required");
      message: z.string ().min (10, "Message must be at least 10 characters")});
    const result = schema.safe_parse (form_data);
    // Check condition
if ( {) {
  $2
}
      const field_errors: Record < string, string> = {}
      for (const err of result.error.errors) {
        // Check condition
if ( {) {
  $2
}
          field_errors[err.path[0] as string] = err.message;
        }
      }
      set_errors (field_errors);
      toast ({
        title: "Form Validation Error",
        description: result.error.errors[0]?.message || "Please check your form and try again",
        variant: "destructive"}),
      return;
    }
    set_errors ({});
    setIsSubmitting (true);
    fetch ("/api / contact", {
      method: "POST",
      headers: { "Content - Type": "application / json" },
      body: JSON.stringify (form_data)});
      .then (async (res) => {
        setIsSubmitting (false);
        // Check condition
if ( {) {
  $2
}
          const data = await res.json ().catch (() => ({}));          throw new Error (data.error || "Failed to send message");
        }
        toast ({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon."}),
        set_submitted (true);
        set_timeout (() => set_submitted (false), 2000);
        setFormData ({ name: "", email: "", subject: "", message: "" });
      });
      .catch ((err) => {
        setIsSubmitting (false);        toast ({
          title: "Submission Error",
          description: err.message,
          variant: "destructive"});
      });
  }
  return (
    <section className="py - 20 bg - zion - blue" id="contact">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 16 items - center">;
          <div>;
            <GradientHeading > Get In Touch</GradientHeading>;
            <p className="mt - 4 text - zion - slate - light text - xl mb - 8">;
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.;
            </p>;
            <div className="flex items - center mb - 6">;
              <div className="mr - 4 p - 2 bg - zion - purple / 20 rounded - full text - zion - cyan">;
                <Mail className="h - 6 w - 6" />;
              </div>;
              <div>;
                <p className="text - white font - semibold">Email Us</p>;
                <a href="mailto:commercial@ziontechgroup.com" className="text - zion - cyan hover:text - zion - purple transition - colors">;
<<<<<<< HEAD

import { useState } from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { toast } from "@/components/ui/use-toast",;
import z from "zod",;
import { Mail } from 'lucide-react';
;
export function ContactSection() {;
  const [formData, setFormData] = useState({;
    name:"",;
    email:"",;
    subject:"",;
    message:""}),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;
  const [errors, setErrors] = useState<{;
    name?:string,;
    email?:string,;
    subject?:string,;
    message?:string,;
  }>({}),;
;
  const handleChange = (;
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  ) => {;
    const { name, value } = e.target,;
    setFormData((prev) => ({ ...prev, [name]:value })),;
    setErrors((prev) => ({ ...prev, [name]:undefined })),;
  },;
;
  const handleSubmit = (e:React.FormEvent) => {;
    e.preventDefault(),;
;
    const schema = z.object({;
      name:z.string().min(2, "Name is required"),;
      email:z.string().email("Enter a valid email"),;
      subject:z.string().min(2, "Subject is required"),;
      message:z.string().min(10, "Message must be at least 10 characters")}),;
;
    const result = schema.safeParse(formData),;
    if (!result.success) {;
      const fieldErrors:Record<string string> = {},;
      for (const err of result.error.errors) {;
        if (err.path[0]) {;
          fieldErrors[err.path[0] as string] = err.message,;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [submitted, setSubmitted] = useState(false),;
  const [errors, setErrors] = useState<{;
    name?: string,;
    email?: string,;
    subject?: string,;
    message?: string;
  }>({}),;
  const handleChange = (;
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  ) => {;
    const { name, value } = e.target,;
    setFormData((prev) => ({ ...prev, [name]: value })),;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  },;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    const schema = z.object({;
      name: z.string().min(2, "Name is required"),;
      email: z.string().email("Enter a valid email"),;
      subject: z.string().min(2, "Subject is required"),;
      message: z.string().min(10, "Message must be at least 10 characters")}),;
    const result = schema.safeParse(formData),;
    if (!result.success) {;
      const fieldErrors: Record<string string> = {},;
      for (const err of result.error.errors) {;
        if (err.path[0]) {;
          fieldErrors[err.path[0] as string] = err.message;
        }
      }
      setErrors(fieldErrors),;
      toast({;
        title: "Form Validation Error",;
        description: result.error.errors[0]?.message || "Please check your form and try again",;
        variant: "destructive"}),;
      return;
    }
;
    setErrors({}),;
    setIsSubmitting(true),;
    fetch("/api/contact", {;
      method: "POST",;
      headers: { "Content-Type": "application/json" },;
      body: JSON.stringify(formData)});
      .then(async (res) => {;
        setIsSubmitting(false),;
        if (!res.ok) {;
          const data = await res.json().catch(() => ({})),;
          throw new Error(data.error || "Failed to send message");
        }
        toast({;
          title: "Message Sent",;
          description: "We've received your message and will get back to you soon."}),;
        setSubmitted(true),;
        setTimeout(() => setSubmitted(false), 2000),;
        setFormData({ name: "", email: "", subject: "", message: "" });
      });
      .catch((err) => {;
        setIsSubmitting(false),;
        toast({;
          title: "Submission Error",;
          description: err.message;
          variant: "destructive"});
      });
  };
  return (;
    <section className="py-20 bg-zion-blue" id="contact">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
          <div>;
            <GradientHeading>Get In Touch</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl mb-8">;
              We have the equipment, the parts, and the maintenance services ready for you — right now. Contact us today.;
            </p>;
            <div className="flex items-center mb-6">;
              <div className="mr-4 p-2 bg-zion-purple/20 rounded-full text-zion-cyan">;
                <Mail className="h-6 w-6" />;
              </div>;
              <div>;
                <p className="text-white font-semibold">Email Us</p>;
                <a href="mailto:commercial@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  commercial@ziontechgroup.com;
                </a>;
              </div>;
            </div>;
<<<<<<< HEAD
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
=======
            <Button className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Request Commercial Proposal;
            </Button>;
          </div>;
          <div className="relative">;
<<<<<<< HEAD
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg filter blur-3xl opacity-30"></div>;
            <div className="relative bg-zion-blue-light border border-zion-purple/20 rounded-lg p-8">;
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">;
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">;
=======

            <div className="absolute inset - 0 bg - gradient - to - r from - zion - purple / 20 to - zion - cyan / 20 rounded - lg filter blur - 3xl opacity - 30"></div>;
            <div className="relative bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 8">;
              <h3 className="text - xl font - bold mb - 6 text - white">Send Us a Message</h3>;
              <form on_submit={handle_submit} className="space - y-6">;
                <div className="grid grid - cols - 1 gap - 6 sm:grid - cols - 2">;
                  <div>;
                    <label html_for="name" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;
                      Name;
                    ">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      Name;
                    </label>;
                    <Input;
                      id="name";
                      name="name";
<<<<<<< HEAD
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' :''}`}
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required;
                    />;
                    {errors.name && (;
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>;
                    )}
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">;
=======
                      value = {form_data.name, }
                      on_change = {handle_change, }
                      className={`w - full rounded - md bg - zion - blue - dark border - zion - blue - light text - white ${errors.name ? 'border - red - 500 focus - visible:ring - red - 500' : ''}`}
                      required;
                    />;
                    {errors.name && (
                      <p className="mt - 1 text - sm text - red - 500">{errors.name}</p>)}
                  </div>;
                  <div>;
                    <label html_for="email" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;
                      Email;
                    ">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      Email;
                    </label>;
                    <Input;
                      id="email";
                      name="email";
                      type="email";
<<<<<<< HEAD
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' :''}`}
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required;
                    />;
                    {errors.email && (;
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>;
                    )}
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1">;
=======
                      value = {form_data.email, }
                      on_change = {handle_change, }
                      className={`w - full rounded - md bg - zion - blue - dark border - zion - blue - light text - white ${errors.email ? 'border - red - 500 focus - visible:ring - red - 500' : ''}`}
                      required;
                    />;
                    {errors.email && (
                      <p className="mt - 1 text - sm text - red - 500">{errors.email}</p>)}
                  </div>;
                </div>;
                <div>;
                  <label html_for="subject" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;
                    Subject;
                  ">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    Subject;
                  </label>;
                  <Input;
                    id="subject";
                    name="subject";
<<<<<<< HEAD
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' :''}`}
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required;
                  />;
                  {errors.subject && (;
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>;
                  )}
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">;
=======
                    value = {form_data.subject, }
                    on_change = {handle_change, }
                    className={`w - full rounded - md bg - zion - blue - dark border - zion - blue - light text - white ${errors.subject ? 'border - red - 500 focus - visible:ring - red - 500' : ''}`}
                    required;
                  />;
                  {errors.subject && (
                    <p className="mt - 1 text - sm text - red - 500">{errors.subject}</p>)}
                </div>;
                <div>;
                  <label html_for="message" className="block text - sm font - medium text - zion - slate - light mb - 1" html_for="input-;
                    Message;
                  ">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    Message;
                  </label>;
                  <Textarea;
                    id="message";
                    name="message";
<<<<<<< HEAD
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
<<<<<<< HEAD
                    disabled={isSubmitting}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ? 'border-red-500 focus-visible:ring-red-500' :''}`}
                    required;
                  />;
                  {errors.message && (;
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>;
                  )}
                </div>;
                <div>;
                  <Button;
                    type="submit";
                    <p className="text - green - 500 text - center mt - 2">Thank you! We'll be in touch.</p>)}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                    disabled={isSubmitting}
                  >;
                    {isSubmitting ? 'Sending...' :'Send Message'}
                  </Button>;
                  {submitted && (;
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>;
                  )}
                    disabled = {isSubmitting,}
                  >
                    disabled={isSubmitting}
                  >;
=======

                    disabled={isSubmitting}
                  >;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitted && (
                    <p className="text-green-500 text-center mt-2">Thank you! We'll be in touch.</p>
                  )}

                </div>;
              </form>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </section>);
}set_errors (field_errors);
toast ({
  return;
}set_errors ({
});
setIsSubmitting (true);
}) .catch ( (err) => {
  setIsSubmitting (false);
toast ({
  title: "Submission Error";
description: err.message;
});
}";
}</div> <div> <label html_for="email" className="block text - sm font - medium text - zion - slate - light mb - 1" > Email </label> <Input) ";
}</div> </div> <div> <label html_for="subject" className="block text - sm font - medium text - zion - slate - light mb - 1" > Subject </label> <Input) ";
}</div> <div> <label html_for="message" className="block text - sm font - medium text - zion - slate - light mb - 1" > Message </label> <Textarea);
}</div> <div> <Button > {';
  is_submitting ? 'Sending...' : 'Send Message';
}</Button>);
}</div> </form> </div> </div> </div> </div> </section>);
}'"}
}
<<<<<<< HEAD
;

    </section>;
  ),; import {;
  {;
  {;
  Mail ;
}from 'lucide-react' export function ContactSection () {;
  const [formData,  setFormData] = useState ({;
  const [errors, setErrors] = useState< {;
  name?: string;
email?: string;
subject?: string;
message?: string ;
}> ({;
  ;
});
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
  const {;
  name, value ;
}= e.target;
setFormData ( (prev) => ({;
  ...prev, [name]: value ;
}) );
setErrors ( (prev) => ({;
  ...prev, [name]: undefined ;
}) ) ;
};
const handleSubmit = (e: React.FormEvent) => {;
  e.preventDefault ();
const schema = z.object ({;
  const result = schema.safeParse (formData);
if (!result.success) {;
  const fieldErrors: Record<string string> = {;
  ;
};
for (const err of result.error.errors) {;
  if (err.path[0]) {;
  fieldErrors[err.path[0] as string] = err.message ;
}
}setErrors (fieldErrors);
toast ({;
  return;
}setErrors ({;
  ;
});
setIsSubmitting (true);
}) .catch ( (err) => {;
  setIsSubmitting (false);
toast ({;
  title: "Submission Error";
description: err.message;
});
};";
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1" > Email </label> <Input) ";
}</div> </div> <div> <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-1" > Subject </label> <Input) ";
}</div> <div> <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1" > Message </label> <Textarea) ;
}</div> <div> <Button > {';
  isSubmitting ? 'Sending...' : 'Send Message' ;
}</Button>) ;
}</div> </form> </div> </div> </div> </div> </section>) ;
}'"
    </section>;
  );
}
;
}
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
