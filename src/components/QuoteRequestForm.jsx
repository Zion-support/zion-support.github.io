<<<<<<< HEAD
import React, { useState } from &apos;react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &apos;./ui/card';
import { Button } from &apos;./ui/Button.jsx';
import { Input } from &apos;./ui/input';
import { Textarea } from &apos;./ui/textarea.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &apos;./ui/select';import { Checkbox } from &apos;./ui/checkbox';
import {}
  Mail,
  Phone,
  Building,';
  Send,&apos;';
  CheckCircle,&apos;&apos;';
  AlertCircle} from &apos;lucide-react';&apos;&apos;
export const QuoteRequestForm = () => {}
  const;const;const [formData, setFormData] = useState({}
';
&apos;';
&apos;&apos;';
    firstName: &apos;&apos;,&apos;&apos;';
    lastName: &apos;&apos;,&apos;&apos;';
    email: &apos;&apos;,&apos;&apos;';
    phone: &apos;&apos;,&apos;&apos;';
    company: &apos;&apos;,&apos;&apos;';
    serviceType: &apos;&apos;,&apos;&apos;';
    projectDescription: &apos;&apos;,&apos;&apos;';
    timeline: &apos;&apos;,&apos;&apos;';
    budget: &apos;&apos;,&apos;&apos;';
    urgency: &apos;medium&apos;,'&apos;';
    contactMethod: &apos;email&apos;,
    agreeToTerms: false,
    agreeToMarketing: false})&apos;&apos;
  const [isSubmitting, setIsSubmitting] = useState (false) ;
  const [isSubmitted, setIsSubmitted] = useState (false) ;
  const [errors, setErrors] = useState ({}) ';&apos;&apos;
  const serviceTypes = [&apos;&apos;{ value: &apos;ai-services&apos;, label: &apos;AI & Machine Learning Services&apos; },&apos;{ value: &apos;it-solutions&apos;, label: &apos;IT Infrastructure & Solutions&apos; },&apos;{ value: &apos;talent-hiring&apos;, label: &apos;Talent Acquisition & Staffing&apos; },&apos;{ value: &apos;equipment&apos;, label: &apos;Equipment & Hardware&apos; },&apos;{ value: &apos;consulting&apos;, label: &apos;IT Consulting & Strategy&apos; },&apos;{ value: &apos;custom-development&apos;, label: &apos;Custom Software Development&apos; },&apos;{ value: &apos;other&apos;, label: &apos;Other Services&apos; }
  ]';&apos;&apos;
  const timelineOptions = [&apos;&apos;{ value: &apos;asap&apos;, label: &apos;ASAP (Within 1 week)},&apos;{ value: &apos;1-2-weeks&apos;, label: &apos;1-2 weeks&apos; },&apos;{ value: &apos;1-month&apos;, label: &apos;1 month&apos; },&apos;{ value: &apos;2-3-months&apos;, label: &apos;2-3 months&apos; },&apos;{ value: &apos;3-6-months&apos;, label: &apos;3-6 months&apos; },&apos;{ value: &apos;6-months-plus&apos;, label: &apos;6+ months&apos; }
  ]';&apos;&apos;
  const budgetRanges = [&apos;&apos;{ value: &apos;under-5k&apos;, label: &apos;Under $5,000&apos; },&apos;{ value: &apos;5k-10k&apos;, label: &apos;$5,000 - $10,000&apos; },&apos;{ value: &apos;10k-25k&apos;, label: &apos;$10,000 - $25,000&apos; },&apos;{ value: &apos;25k-50k&apos;, label: &apos;$25,000 - $50,000&apos; },&apos;{ value: &apos;50k-100k&apos;, label: &apos;$50,000 - $100,000&apos; },&apos;{ value: &apos;100k-plus&apos;, label: &apos;$100,000+&apos; },&apos;{ value: &apos;to-be-discussed&apos;, label: &apos;To be discussed&apos; }
  ]';&apos;&apos;
  const urgencyLevels = [&apos;&apos;
    { value: &apos;low&apos;, label: &apos;Low - Planning phase&apos; },&apos;{ value: &apos;medium&apos;, label: &apos;Medium - Ready to start soon&apos; },&apos;{ value: &apos;high&apos;, label: &apos;High - Need to start immediately&apos; },&apos;{ value: &apos;critical&apos;, label: &apos;Critical - Emergency situation&apos; }
  ];&apos;&apos;
=======
<<<<<<< HEAD
import React, { useState } from 'react';""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';""
import { Button } from './ui/Button.jsx';""
import { Input } from './ui/input';""
import { Textarea } from './ui/textarea.jsx';""
""
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/Button.jsx';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';import { Checkbox } from './ui/checkbox';
import {}
  Mail, Phone,
  Building, ';'
  Send, '';
  CheckCircle, ''';'
  AlertCircle} from 'lucide-react';
export const QuoteRequestForm = () => {}
  const [formData, setFormData] = useState({}
';'
'';
''';'
    firstName: '', ''';'
    lastName: '', ''';'
    email: '', ''';'
    phone: '', ''';'
    company: '', ''';'
    serviceType: '', ''';'
    projectDescription: '', ''';'
    timeline: '', ''';'
    budget: '', ''';'
    urgency: 'medium', ''';'
    contactMethod: 'email', agreeToTerms: false,
    agreeToMarketing: false})
  const [isSubmitting, setIsSubmitting] = useState (false) ;
  const [isSubmitted, setIsSubmitted] = useState (false) ;
  const [errors, setErrors] = useState ({}) ';'
  const serviceTypes = [''{ value: 'ai-services', label: 'AI & Machine Learning Services' },'{ value: 'it-solutions', label: 'IT Infrastructure & Solutions' },'{ value: 'talent-hiring', label: 'Talent Acquisition & Staffing' },'{ value: 'equipment', label: 'Equipment & Hardware' },'{ value: 'consulting', label: 'IT Consulting & Strategy' },'{ value: 'custom-development', label: 'Custom Software Development' },'{ value: 'other', label: 'Other Services' }
  ]';'
  const timelineOptions = [''{ value: 'asap', label: 'ASAP (Within 1 week)}, '{ value: '1-2-weeks', label: '1-2 weeks' }, '{ value: '1-month', label: '1 month' }, '{ value: '2-3-months', label: '2-3 months' }, '{ value: '3-6-months', label: '3-6 months' }, '{ value: '6-months-plus', label: '6+ months' }
  ]';'
  const budgetRanges = [''{ value: 'under-5k', label: 'Under $5,000' }, '{ value: '5k-10k', label: '$5, 000 - $10,000' }, '{ value: '10k-25k', label: '$10, 000 - $25,000' }, '{ value: '25k-50k', label: '$25, 000 - $50,000' }, '{ value: '50k-100k', label: '$50, 000 - $100,000' }, '{ value: '100k-plus', label: '$100, 000+' },'{ value: 'to-be-discussed', label: 'To be discussed' }
  ]';'
  const urgencyLevels = [''
    { value: 'low', label: 'Low - Planning phase' },'{ value: 'medium', label: 'Medium - Ready to start soon' },'{ value: 'high', label: 'High - Need to start immediately' },'{ value: 'critical', label: 'Critical - Emergency situation' }'
  ];
>>>>>>> main
  const handleChange = (field, value) => {}
    setFormData(prev => ({}
      ...prev, [field]: value}));
    // Clear error when user starts typing;
    if(errors[field]) {}
      setErrors(prev => ({}
<<<<<<< HEAD
        ...prev,';
        [field]: &apos;&apos;}))}
=======
        ...prev, ';'
        [field]: ''}))}
>>>>>>> main
  }
;&apos;&apos;
  const validateForm = () => {}
    const;const;const newErrors = {}
;
<<<<<<< HEAD
    if (!formData.firstName.trim())';
      newErrors.firstName = &apos;First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = &apos;Last name is required';
    if (!formData.email.trim()) newErrors.email = &apos;Email is required';
    if (!formData.company.trim())';
      newErrors.company = &apos;Company name is required';
    if (!formData.serviceType)';
      newErrors.serviceType = &apos;Service type is required';
    if (!formData.projectDescription.trim())';
      newErrors.projectDescription = &apos;Project description is required';
    if (!formData.agreeToTerms)';
      newErrors.agreeToTerms = &apos;You must agree to the terms and conditions';
=======
    if (!formData.firstName.trim())';'
      newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.company.trim())';'
      newErrors.company = 'Company name is required';
    if (!formData.serviceType)';'
      newErrors.serviceType = 'Service type is required';
    if (!formData.projectDescription.trim())';'
      newErrors.projectDescription = 'Project description is required';
    if (!formData.agreeToTerms)';'
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
>>>>>>> main
    setErrors(newErrors) ;
    return Object.keys(newErrors) .length === 0}
;&apos;&apos;
  const handleSubmit = async e => {}
    e.preventDefault();
    if(!validateForm()) {}
      return}
    setIsSubmitting(true) ;
    try {}
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      // Reset form;
      setFormData({}
<<<<<<< HEAD
';
&apos;';
&apos;&apos;';
        firstName: &apos;&apos;,&apos;&apos;';
        lastName: &apos;&apos;,&apos;&apos;';
        email: &apos;&apos;,&apos;&apos;';
        phone: &apos;&apos;,&apos;&apos;';
        company: &apos;&apos;,&apos;&apos;';
        serviceType: &apos;&apos;,&apos;&apos;';
        projectDescription: &apos;&apos;,&apos;&apos;';
        timeline: &apos;&apos;,&apos;&apos;';
        budget: &apos;&apos;,&apos;&apos;';
        urgency: &apos;medium&apos;,'&apos;';
        contactMethod: &apos;email&apos;,
        agreeToTerms: false,
        agreeToMarketing: false})} catch (error) {}
';
&apos;';
&apos;&apos;';
      // console.error(&apos;Error submitting form:&apos;, error)} finally {}
=======
';'
'';
''';'
        firstName: '', ''';'
        lastName: '', ''';'
        email: '', ''';'
        phone: '', ''';'
        company: '', ''';'
        serviceType: '', ''';'
        projectDescription: '', ''';'
        timeline: '', ''';'
        budget: '', ''';'
        urgency: 'medium', ''';'
        contactMethod: 'email', agreeToTerms: false,
        agreeToMarketing: false})} catch (error) {}
';'
'';
''';'
      // console.error('Error submitting form: ', error)} finally {}
>>>>>>> main
      setIsSubmitting(false)}
  }
;
  if(isSubmitted) {}
<<<<<<< HEAD
    return()&apos;&apos;
      <Card className=&apos;max-w-2xl mx-auto&apos;>'&apos;&apos;'&apos;&apos;
        <CardContent className=&apos;p-8 text-center&apos;>'&apos;&apos;'&apos;&apos;
          <CheckCircle className=&apos;w-16 h-16 text-green-500 mx-auto mb-4&apos; />&apos;&apos;'&apos;&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-2&apos;>
            Quote Request Submitted!&apos;&apos;'&apos;&apos;
          </h2>&apos;&apos;'&apos;&apos;'
          <p className=&apos;text-gray-600 mb-6&apos;>
=======
    return()
      <Card className='max-w-2xl mx-auto'>''''
        <CardContent className='p-8 text-center'>''''
          <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />''''
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            Quote Request Submitted!''''
          </h2>''''
          <p className='text-gray-600 mb-6'>
>>>>>>> main
            Thank you for your interest.Our team will review your request and
            get back to you within 24 hours.&apos;</p>
          <Button onClick={ () => setIsSubmitted(false) }>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>) }
<<<<<<< HEAD
&apos;&apos;';
  return (&apos;&apos;'&apos;&apos;'
    <Card className=&apos;max-w-4xl mx-auto&apos;>'&apos;&apos;'&apos;&apos;
      <CardHeader className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
        <CardTitle className=&apos;text-3xl font-bold&apos;>Request a Quote&apos;</CardTitle>
        <CardDescription>';
          Tell us about your project and we&apos;ll provide you with a customized;
          quote&apos;&apos;
        </CardDescription>&apos;&apos;'&apos;&apos;
      </CardHeader>&apos;&apos;'&apos;&apos;'
      <CardContent className=&apos;p-6&apos;>'&apos;&apos;'&apos;&apos;
        <form onSubmit={handleSubmit} className=&apos;space-y-6&apos;>'&apos;&apos;{/* Personal Information */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-4&apos;>'&apos;&apos;''
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                First Name *&apos;
              </label>
              <Input;
                value={formData.firstName}&apos;&apos;'';
                onChange={e => handleChange(&apos;firstName&apos;, e.target.value)}&apos;&apos;'&apos;';
                placeholder=&apos;John&apos;&apos;';
                className={errors.firstName ? &apos;border-red-500&apos; : &apos;&apos;}
              />&apos;&apos;'{errors.firstName && (&apos;&apos;'&apos;&apos;}'
                <p className=&apos;text-red-500 text-sm mt-1&apos;>{errors.firstName}&apos;</p>
              )}
            </div>
&apos;&apos;'&apos;&apos;
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Last Name *&apos;
              </label>
              <Input;
                value={formData.lastName}&apos;&apos;'';
                onChange={e => handleChange(&apos;lastName&apos;, e.target.value)}&apos;&apos;'&apos;';
                placeholder=&apos;Doe&apos;&apos;';
                className={errors.lastName ? &apos;border-red-500&apos; : &apos;&apos;}
              />&apos;&apos;'{errors.lastName && (&apos;&apos;'&apos;&apos;}'
                <p className=&apos;text-red-500 text-sm mt-1&apos;>{errors.lastName}&apos;</p>
              )}
            </div>
          </div>
&apos;&apos;'{/* Contact Information */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-4&apos;>'&apos;&apos;''
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Email *&apos;
              </label>&apos;&apos;'&apos;&apos;
              <Input&apos;&apos;'';
                type=&apos;email&apos;&apos;';
                value={formData.email}&apos;&apos;'';
                onChange={e => handleChange(&apos;email&apos;, e.target.value)}&apos;&apos;'&apos;';
                placeholder=&apos;john@company.com&apos;&apos;';
                className={errors.email ? &apos;border-red-500&apos; : &apos;&apos;}
              />&apos;&apos;'{errors.email && (&apos;&apos;'&apos;&apos;}'
                <p className=&apos;text-red-500 text-sm mt-1&apos;>{errors.email}&apos;</p>
              )}
            </div>
&apos;&apos;'&apos;&apos;
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Phone&apos;
=======
''';'
  return (''''
    <Card className='max-w-4xl mx-auto'>''''
      <CardHeader className='text-center'>''''
        <CardTitle className='text-3xl font-bold'>Request a Quote</CardTitle>
        <CardDescription>';'
          Tell us about your project and we&apos;ll provide you with a customized;'
          quote
        </CardDescription>''''
      </CardHeader>''''
      <CardContent className='p-6'>''''
        <form onSubmit={handleSubmit} className='space-y-6'>'''{/* Personal Information */}'''''
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                First Name *
              </label>
              <Input;
                value={formData.firstName}'''';
                onChange={e => handleChange('firstName', e.target.value)}''''';'
                placeholder='John''';
                className={errors.firstName ? 'border-red-500' : ''}
              />'''{errors.firstName && ('''''
                <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>
              )}
            </div>
''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Last Name *
              </label>
              <Input;
                value={formData.lastName}'''';
                onChange={e => handleChange('lastName', e.target.value)}''''';'
                placeholder='Doe''';
                className={errors.lastName ? 'border-red-500' : ''}
              />'''{errors.lastName && ('''''
                <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>
              )}
            </div>
          </div>
'''{/* Contact Information */}'''''
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email *
              </label>''''
              <Input'''';
                type='email''';
                value={formData.email}'''';
                onChange={e => handleChange('email', e.target.value)}''''';'
                placeholder='john@company.com''';
                className={errors.email ? 'border-red-500' : ''}
              />'''{errors.email && ('''''
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>
''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Phone
>>>>>>> main
              </label>
              <Input;
                value={formData.phone}&apos;&apos;'';
                onChange={e => handleChange(&apos;phone&apos;, e.target.value)}&apos;&apos;'';
                placeholder=&apos;+1 (555) 123-4567&apos;&apos;'
              />&apos;&apos;
            </div>
          </div>
<<<<<<< HEAD
          {/* Company Information */}&apos;&apos;'&apos;&apos;
          <div>&apos;&apos;'&apos;&apos;'
            <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
              Company Name *&apos;
            </label>
            <Input;
              value={formData.company}&apos;&apos;'';
              onChange={e => handleChange(&apos;company&apos;, e.target.value)}&apos;&apos;'&apos;';
              placeholder=&apos;Your Company Inc.&apos;&apos;';
              className={errors.company ? &apos;border-red-500&apos; : &apos;&apos;}
            />&apos;&apos;'{errors.company && (&apos;&apos;'&apos;&apos;}'
              <p className=&apos;text-red-500 text-sm mt-1&apos;>{errors.company}&apos;</p>
            )}
          </div>
&apos;&apos;'{/* Project Details */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-4&apos;>'&apos;&apos;''
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Service Type *&apos;
              </label>
              <Select;
                value={formData.serviceType}';
                onValueChange={value => handleChange(&apos;serviceType&apos;, value)}
              >&apos;&apos;'
                <SelectTrigger&apos;';
                  className={errors.serviceType ? &apos;border-red-500&apos; : &apos;&apos;}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
                  <SelectValue placeholder=&apos;Select a service&apos; />&apos;
=======
          {/* Company Information */}''''
          <div>''''
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Company Name *
            </label>
            <Input;
              value={formData.company}'''';
              onChange={e => handleChange('company', e.target.value)}''''';'
              placeholder='Your Company Inc.''';
              className={errors.company ? 'border-red-500' : ''}
            />'''{errors.company && ('''''
              <p className='text-red-500 text-sm mt-1'>{errors.company}</p>
            )}
          </div>
'''{/* Project Details */}'''''
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Service Type *
              </label>
              <Select;
                value={formData.serviceType}';'
                onValueChange={value => handleChange('serviceType', value)}
              >''
                <SelectTrigger'';
                  className={errors.serviceType ? 'border-red-500' : ''}'''>'''''
                  <SelectValue placeholder='Select a service' />
>>>>>>> main
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map(service => (}
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>) ) }
                </SelectContent>
<<<<<<< HEAD
              </Select>&apos;&apos;'{errors.serviceType && (&apos;&apos;'&apos;&apos;}'
                <p className=&apos;text-red-500 text-sm mt-1&apos;>
                  {errors.serviceType}&apos;
                </p>
              )}
            </div>
&apos;&apos;'&apos;&apos;
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Timeline&apos;
              </label>
              <Select;
                value={formData.timeline}';
                onValueChange={value => handleChange(&apos;timeline&apos;, value)}
              >&apos;&apos;'&apos;&apos;
                <SelectTrigger>&apos;&apos;'&apos;&apos;'
                  <SelectValue placeholder=&apos;Select timeline&apos; />&apos;
=======
              </Select>'''{errors.serviceType && ('''''
                <p className='text-red-500 text-sm mt-1'>
                  {errors.serviceType}
                </p>
              )}
            </div>
''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Timeline
              </label>
              <Select;
                value={formData.timeline}';'
                onValueChange={value => handleChange('timeline', value)}
              >''''
                <SelectTrigger>''''
                  <SelectValue placeholder='Select timeline' />
>>>>>>> main
                </SelectTrigger>
                <SelectContent>
                  {timelineOptions.map(timeline => (}
                    <SelectItem key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </SelectItem>) ) }
                </SelectContent>
              </Select>
            </div>
<<<<<<< HEAD
          </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-4&apos;>'&apos;&apos;''
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Budget Range&apos;
              </label>
              <Select;
                value={formData.budget}';
                onValueChange={value => handleChange(&apos;budget&apos;, value)}
              >&apos;&apos;'&apos;&apos;
                <SelectTrigger>&apos;&apos;'&apos;&apos;'
                  <SelectValue placeholder=&apos;Select budget range&apos; />&apos;
=======
          </div>''';'
''''
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Budget Range
              </label>
              <Select;
                value={formData.budget}';'
                onValueChange={value => handleChange('budget', value)}
              >''''
                <SelectTrigger>''''
                  <SelectValue placeholder='Select budget range' />
>>>>>>> main
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map(budget => (}
                    <SelectItem key={budget.value} value={budget.value}>
                      {budget.label}
                    </SelectItem>) ) }
                </SelectContent>
              </Select>
            </div>
<<<<<<< HEAD
&apos;&apos;'&apos;&apos;
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Urgency Level&apos;
              </label>
              <Select;
                value={formData.urgency}';
                onValueChange={value => handleChange(&apos;urgency&apos;, value)}
              >&apos;&apos;
=======
''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Urgency Level
              </label>
              <Select;
                value={formData.urgency}';'
                onValueChange={value => handleChange('urgency', value)}
              >
>>>>>>> main
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map(urgency => (}
                    <SelectItem key={urgency.value} value={urgency.value}>
                      {urgency.label}
                    </SelectItem>) ) }
                </SelectContent>
              </Select>
            </div>
          </div>
<<<<<<< HEAD
          {/* Project Description */}&apos;&apos;'&apos;&apos;
          <div>&apos;&apos;'&apos;&apos;'
            <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
              Project Description *&apos;
            </label>
            <Textarea;
              value={formData.projectDescription}&apos;&apos;'';
              onChange={e => handleChange(&apos;projectDescription&apos;, e.target.value)}&apos;&apos;'';
              placeholder=&apos;Please describe your project requirements, goals, and any specific needs...&apos;&apos;';
              rows={6}';
              className={errors.projectDescription ? &apos;border-red-500&apos; : &apos;&apos;}
            />&apos;&apos;'{errors.projectDescription && (&apos;&apos;'&apos;&apos;}'
              <p className=&apos;text-red-500 text-sm mt-1&apos;>
                {errors.projectDescription}&apos;
              </p>
            )}
          </div>
&apos;&apos;'{/* Preferences */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-4&apos;>'&apos;&apos;''
            <div>&apos;&apos;'&apos;&apos;'
              <label className=&apos;block text-sm font-medium text-gray-700 mb-2&apos;>
                Preferred Contact Method&apos;
              </label>
              <Select;
                value={formData.contactMethod}';
                onValueChange={value => handleChange(&apos;contactMethod&apos;, value)}
              >&apos;&apos;
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>&apos;&apos;'&apos;&apos;
                <SelectContent>&apos;&apos;'&apos;&apos;'
                  <SelectItem value=&apos;email&apos;>Email&apos;</SelectItem>&apos;&apos;'&apos;&apos;'
                  <SelectItem value=&apos;phone&apos;>Phone&apos;</SelectItem>&apos;&apos;'&apos;&apos;'
                  <SelectItem value=&apos;both&apos;>Both&apos;</SelectItem>
=======
          {/* Project Description */}''''
          <div>''''
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Project Description *
            </label>
            <Textarea;
              value={formData.projectDescription}'''';
              onChange={e => handleChange('projectDescription', e.target.value)}'''';
              placeholder='Please describe your project requirements, goals, and any specific needs...''';
              rows={6}';'
              className={errors.projectDescription ? 'border-red-500' : ''}
            />'''{errors.projectDescription && ('''''
              <p className='text-red-500 text-sm mt-1'>
                {errors.projectDescription}
              </p>
            )}
          </div>
'''{/* Preferences */}'''''
          <div className='grid grid-cols-1 md: grid-cols-2 gap-4'>''''
            <div>''''
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Preferred Contact Method
              </label>
              <Select;
                value={formData.contactMethod}';'
                onValueChange={value => handleChange('contactMethod', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>''''
                <SelectContent>''''
                  <SelectItem value='email'>Email</SelectItem>''''
                  <SelectItem value='phone'>Phone</SelectItem>''''
                  <SelectItem value='both'>Both</SelectItem>
>>>>>>> main
                </SelectContent>
              </Select>
            </div>
          </div>
<<<<<<< HEAD
&apos;&apos;'{/* Checkboxes */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
            <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;''
              <Checkbox&apos;&apos;'';
                id=&apos;terms&apos;&apos;';
                checked={formData.agreeToTerms}
                onCheckedChange={checked =>';
                  handleChange(&apos;agreeToTerms&apos;, checked)}&apos;&apos;'/>&apos;&apos;'&apos;&apos;'
              <label htmlFor=&apos;terms&apos; className=&apos;text-sm text-gray-700&apos;>'&apos;&apos;';
                I agree to the{&apos; &apos;}&apos;&apos;'&apos;&apos;'
                <a href=&apos;/terms&apos; className=&apos;text-blue-600 hover:underline&apos;>';
                  Terms and Conditions&apos;&apos;''
                </a>{&apos; &apos;}
                *&apos;&apos;
              </label>
            </div>&apos;&apos;'{errors.agreeToTerms && (&apos;&apos;'&apos;&apos;}'
              <p className=&apos;text-red-500 text-sm&apos;>{errors.agreeToTerms}&apos;</p>
            )}&apos;&apos;';
&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;''
              <Checkbox&apos;&apos;'';
                id=&apos;marketing&apos;&apos;';
                checked={formData.agreeToMarketing}
                onCheckedChange={checked =>';
                  handleChange(&apos;agreeToMarketing&apos;, checked)}&apos;&apos;'/>&apos;&apos;'&apos;&apos;'
              <label htmlFor=&apos;marketing&apos; className=&apos;text-sm text-gray-700&apos;>
                I agree to receive marketing communications from Zion Tech Group&apos;
              </label>
            </div>
          </div>
&apos;&apos;'{/* Submit Button */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;text-center&apos;>'&apos;&apos;''
            <Button&apos;&apos;'&apos;
              type=&apos;submit&apos;&apos;'';
              disabled={isSubmitting}&apos;&apos;'';
              className=&apos;px-8 py-3 text-lg &apos;>{isSubmitting ? (&apos;&apos;'&apos;}&apos;
                <>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&apos;>&apos;'</div>
                  Submitting...
                </>
              ) : (&apos;&apos;'&apos;&apos;
                <>&apos;&apos;'&apos;&apos;'
                  <Send className=&apos;w-5 h-5 mr-2&apos; />
                  Submit Quote Request&apos;
                </>) }
=======
'''{/* Checkboxes */}'''''
          <div className='space-y-4'>''''
            <div className='flex items-center space-x-2'>''''
              <Checkbox'''';
                id='terms''';
                checked={formData.agreeToTerms}
                onCheckedChange={checked =>';'
                  handleChange('agreeToTerms', checked)}'''/>'''''
              <label htmlFor='terms' className='text-sm text-gray-700'>'''';
                I agree to the{' '}''''
                <a href='/terms' className='text-blue-600 hover: underline'>';'
                  Terms and Conditions''
                </a>{' '}
                *
              </label>
            </div>'''{errors.agreeToTerms && ('''''
              <p className='text-red-500 text-sm'>{errors.agreeToTerms}</p>
            )}''';'
''''
            <div className='flex items-center space-x-2'>''''
              <Checkbox'''';
                id='marketing''';
                checked={formData.agreeToMarketing}
                onCheckedChange={checked =>';'
                  handleChange('agreeToMarketing', checked)}'''/>'''''
              <label htmlFor='marketing' className='text-sm text-gray-700'>
                I agree to receive marketing communications from Zion Tech Group
              </label>
            </div>
          </div>
'''{/* Submit Button */}'''''
          <div className='text-center'>''''
            <Button''''
              type='submit'''';'
              disabled={isSubmitting}'''';
              className='px-8 py-3 text-lg '>{isSubmitting ? (''''
                <>''''
                  <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                  Submitting...
</>
              ) : (''''
                <>''''
                  <Send className='w-5 h-5 mr-2' />
                  Submit Quote Request
</>) }
>>>>>>> main
            </Button>
          </div>
        </form>
      </CardContent>
<<<<<<< HEAD
    </Card>) }&apos;';&quot;
}&apos;';';
&apos;&apos;'&apos;&apos;'
&apos;'
=======
    </Card>) }'';""
}'';';'
''''''
=======
import React, { useState } from 'react
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card
import { Button } from './ui/Button.jsx
import { Input } from './ui/input
import { Textarea } from './ui/textarea.jsx
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
