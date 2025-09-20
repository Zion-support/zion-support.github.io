export function ContactSection(...args[]):  {

import { useState } from "react",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/components/ui/use-toast",
import z from "zod",
import { Mail } from 'lucide-react'

  { opacity: 0,
  y: 20

}}
          whileInView = {

  { opacity: 1,
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
        </motion.div>"
        <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index)  => (
            <motion.div
              key={index}
              initial = {

  { opacity: 0,
  y: 20

}}
              whileInView = {

  { opacity: 1,
  y: 0

}}
              transition = {

  { duration: 0.6,
  delay: index * 0.1

}}
              viewport={{ once: true }}"
              className="text-center"

              <a
                href={contact.link}"
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"
"
                <contact.icon className="h-8 w-8 text-white" />
              </a>,"
              <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>"
              <p className="text-zion-slate-light">{contact.value}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial = {

  { opacity: 0,
  y: 20

}}
          whileInView = {

  { opacity: 1,
  y: 0

}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}"
          className="text-center"

          <Link"
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"

            Contact Us Today"
            <ArrowRight className="ml-2 h-5 w-5"  />,
          </Link>,
        </motion.div>,
      </div>,
    </section>,) }
export default ContactSection,
export default ContactSection,
export default ContactSection,
export default ContactSection,
export default ContactSection,
export default ContactSection,
export default ContactSection,
'"