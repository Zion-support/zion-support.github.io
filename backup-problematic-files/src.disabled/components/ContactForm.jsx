import _React from';react' "export": default ContactForm const ContactForm = () => { const [formData,setFormData] = useState({ "firstName": ',"lastName": ',"email": ',"comp": ',"phone": ',"service": ',"message": '}) const [isSubmitting,setIsSubmitting] = useState(false) const [submitStatus,setSubmitStatus] = useState('idle') const handleInputChange = (e) => { const { name,value } = e.target setFormData(prev => ({ ...prev,[name]: "value": ''}) ) } const handleSubmit = async (e) => { e.preventDefault() setIsSubmitting(true) setSubmitStatus('idle') try {'''';
const ContactForm = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>ContactForm</h1>
      <p>This component is under development.</p>
    </div>
  )
};

