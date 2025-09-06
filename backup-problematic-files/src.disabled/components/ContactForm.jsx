<<<<<<< HEAD
<<<<<<< HEAD
import _React from';react' "export": default ContactForm const ContactForm = () => { const [formData,setFormData] = useState({ "firstName": ',"lastName": ',"email": ',"comp": ',"phone": ',"service": ',"message": '}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState('idle') const handleInputChange = (e) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: "value": ''}) ) } const handleSubmit = async (e) => { e.preventDefault() setIsSubmitting(true) setSubmitStatus('idle') try {'''';
=======
import React from\';react\' \"export\": default ContactForm const ContactForm = () => { const [formData,setFormData] = useState({ \"firstName\": \',\"lastName\": \',\"email\": \',\"comp\": \',\"phone\": \',\"service\": \',\"message\": \'}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState(\'idle\') const handleInputChange = (e) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: \"value\": \''}) ) } const handleSubmit = async (e) => { e.preventDefault() setIsSubmitting(true) setSubmitStatus(\'idle\') try {\''\'';
const React from";react" export: default ContactForm const ContactForm = () => { const [formData,setFormData] = useState({ firstName: ",lastName: ",email: ",comp: ",phone: ",service: ",message: "}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState("idle") const handleInputChange = (e) => { const { name,value } = e.target setFormData(prev => ({ .prev,[name]: value: ""}) ) } const handleSubmit = async (e) => { e.preventDefault() setIsSubmitting(true) setSubmitStatus("idle") try {"""";"""
import _React from';react' "export": default ContactForm const ContactForm = () => { const [formData,setFormData] = useState({ "firstName": ',"lastName": ',"email": ',"comp": ',"phone": ',"service": ',"message": '}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState('idle') const handleInputChange = (e) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: "value": ''}) ) } const handleSubmit = async (e) => { e.preventDefault() setIsSubmitting(true) setSubmitStatus('idle') try {'''';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const ContactForm = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactForm</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
