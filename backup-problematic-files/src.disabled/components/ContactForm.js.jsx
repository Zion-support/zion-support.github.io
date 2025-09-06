<<<<<<< HEAD
import _React from';react' const ContactForm = () => { const [formData,setFormData] = useState({ "firstName": ',"lastName": ',"email": ',"comp": ',"phone": ',"service": ',"message": '}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState('idle') const handleInputChange = e => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: value})) } const handleSubmit = async e => { e.preventDefault() setIsSubmitting(true) setSubmitStatus('idle') try {'''';
import React from\';react\' const ContactForm = () => { const [formData,setFormData] = useState({ \"firstName\": \',\"lastName\": \',\"email\": \',\"comp\": \',\"phone\": \',\"service\": \',\"message\": \'}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState(\'idle\') const handleInputChange = e => { const { name,value } = e && e.target setFormData(prev => ({ ...prev,[name]: value})) } const handleSubmit = async e => { e && e.preventDefault() setIsSubmitting(true) setSubmitStatus(\'idle\') try {\''\'';
const React from";react" const ContactForm = () => { const [formData,setFormData] = useState({ firstName: ",lastName: ",email: ",comp: ",phone: ",service: ",message: "}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState("idle") const handleInputChange = e => { const { name,value } = e && e.target setFormData(prev => ({ .prev,[name]: value})) } const handleSubmit = async e => { e && e.preventDefault() setIsSubmitting(true) setSubmitStatus("idle") try {"""";"""
import _React from';react' const ContactForm = () => { const [formData,setFormData] = useState({ "firstName": ',"lastName": ',"email": ',"comp": ',"phone": ',"service": ',"message": '}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState('idle') const handleInputChange = e => { const { name,value } = e && e.target setFormData(prev => ({ ...prev,[name]: value})) } const handleSubmit = async e => { e && e.preventDefault() setIsSubmitting(true) setSubmitStatus('idle') try {'''';
=======
import React from 'react';

const ContactForm.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContactForm.js</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContactForm.js;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
