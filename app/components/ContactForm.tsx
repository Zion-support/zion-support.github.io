app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
app/components/ContactForm.tsx'app/components/ContactForm.tsx;

import React from app/components/ContactForm.tsx'app/components/ContactForm.tsx;
import { useState  } from app/components/ContactForm.tsx'app/components/ContactForm.tsx;
import { MessageSquare, Mail, Phone, Send, CheckCircle  } from app/components/ContactForm.tsx'app/components/ContactForm.tsx;
interface FormData {
name: app/components/ContactForm.tsx"app/components/ContactForm.tsx,email: app/components/ContactForm.tsx"app/components/ContactForm.tsx,company: app/components/ContactForm.tsx"app/components/ContactForm.tsx,}
  servic,e: app/components/ContactForm.tsx"app/components/ContactForm.tsx,}
}

const ContactForm: app/components/ContactForm.tsx"app/components/ContactForm.tsx,setFormData,] = useState<FormData>({
name: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,email: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,phone: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,company: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,message: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,service: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,;})
const [isSubmitting, setIsSubmitting,] = useState(false)
  const [isSubmitted, setIsSubmitted,] = useState(false);</FormData>
</FormData>
const handleChange = (
setFormData({)
      ...formData,[e.target.name,]: e.target.value)
    ) => {
$app/components/ContactForm.tsx;
})
  }
const handleSubmit = async (e: app/components/ContactForm.tsx"app/components/ContactForm.tsx,2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 app/components/ContactForm.tsx;
setTimeout(() => {
setIsSubmitted(false)
      setFormData({)
name: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,email: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,phone: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,company: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,message: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,service: app/components/ContactForm.tsx"app/components/ContactForm.tsxapp/components/ContactForm.tsx'app/components/ContactForm.tsx,;})
    ;}, 3000)
  ;}
const services = [
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
    app/components/ContactForm.tsx'app/components/ContactForm.app/components/ContactForm.tsx;
  ]
if(isSubmitted) {
return (
    </HTMLInputElement> <>

      </HTMLInputElement> <div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx /> <CheckCircle className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </CheckCircle>
    <h1 className = app/components/ContactForm.tsx"app/components/ContactForm.tsx>Message Sent!</h3>
        <p className=app/components/ContactForm.tsx"app/components/ContactForm.tsx>Thank you for reaching out. We&apos;ll get back to you soon.</$1>
  );
  )
  ,}

return (
    <div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </div>
    <h1 className = app/components/ContactForm.tsx"app/components/ContactForm.tsx>Send us a Message</h2>
      <form onSubmit={handleSubmit,} className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </form>
    <div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx>
    </div>
      <div />
    </div>
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Full Name *</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.tsx,name = app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={
formData.app/components/ContactForm.tsx;
,}
              onChange = {
app/components/ContactForm.tsx;
,}
              app/components/ContactForm.tsx;
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />

    </app>
            <div />
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Email Address *</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.tsx,name = app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={
formData.app/components/ContactForm.tsx;
,}
              onChange = {
app/components/ContactForm.tsx;
,}
              app/components/ContactForm.tsx;
className=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />,<div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx>
    </div>
      <div />
    </div>
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Phone Number</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={formData.phone,}
              onChange = {handleChange,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.tsx)
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />

    </app>
            <div />
    </div>
            <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Company</label>
            </label>

            <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={formData.company,}
              onChange = {handleChange,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
            / />

    </app>
      <div/ />
    </div>
    </div>
          <label htmlFor=app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Service Interest</label>
          </label>

          <app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={formData.service,}
            onChange = {handleChange,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
           />
    </app>
            <option value=app/components/ContactForm.tsx"app/components/ContactForm.tsx>Select a service</option>
            {services.map((service,index) => (
              <option key = {index,} value = {service,} className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </option>
                {service,}</option>
              </option>
            ))}

          </select>
      <div/ />
    </div>
    </div>
          <label htmlFor = app/components/ContactForm.tsx"app/components/ContactForm.tsx className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </label>
Message *</label>
          </label>

          <app/components/ContactForm.tsx;
id=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
name=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
value={
formData.app/components/ContactForm.tsx;
,}
            onChange = {
app/components/ContactForm.tsx;
,}
            app/components/ContactForm.tsx;
rows = {6,}
className=app/components/ContactForm.tsx"app/components/ContactForm.tsxoutline-none focus:ring-2 focus:ring-cyan-500 focuapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
placeholder=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
          / />
    </app>
          </div>
        <app/components/ContactForm.tsx;
type=app/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
disabled={isSubmitting,}
          className=app/components/ContactForm.tsx"app/components/ContactForm.tsxfrom-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disableapp/components/ContactForm.tsx"app/components/ContactForm.app/components/ContactForm.tsx;
         />
    </app>
          {isSubmitting ? (</button> <>

    </div>,<div className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />
    </div>
Sending...
              </div>
          ) : (
            <> <Send className=app/components/ContactForm.tsx"app/components/ContactForm.tsx />

    </Send>
Send app/components/ContactForm.tsx;
      </Send>
    </div>
              </div>
          ),}
        </button>
      </form>
      </$1>
  );
}

export default app/components/ContactForm.tsx;
}