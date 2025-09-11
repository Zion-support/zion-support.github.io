import { motion } from 'framer-motion';
import {
  }
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
  MessageSquare,
} from 'lucide-react';
const ContactFormEnhanced: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  MessageSquare} from 'lucide-react';
const "ContactFormEnhanced": React.FC = () => {
  const [formData, setFormData] = useState({
    "name": '',
    "email": '',
    "subject": '',
    "message": ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleSubmit = async ("e": React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitStatus('success');
    setIsSubmitting(false);

<<<<<<< HEAD
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormData({ name: '', email: '', subject: '', message: '' });
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setFormData({ "name": '', "email": '', "subject": '', "message": '' });
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      {' '}

<<<<<<< HEAD
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="bg-white "dark": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
    setFormData({ name: '', email: '', subject: '', message: '' });      <div className="bg-white "dark": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">        {' '}
        <h2 className="text-2xl font-bold text-gray-900 "dark": text-white mb-6">
          {' '}
          Get in Touch{' '}
        </h2>{' '}
        <form onSubmit={handleSubmit} className="space-y-4">
          {' '}
          <div>
            {' '}

<<<<<<< HEAD
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Name *{' '}
            </label>{' '}
            <div className="relative">
              {' '}
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}
              <input
                type="text"
                value={formData.name}
                onChange={e =>

<<<<<<< HEAD
                  setFormData({ ...formData, name: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  setFormData({ ...formData, name: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  setFormData({ ...formData, name: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  setFormData({ ...formData, "name": 'e.target.value' })
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">                  setFormData({ ...formData, "name": 'e.target.value' })                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your name"
                required
              />{' '}
            </div>{' '}
          </div>{' '}
          <div>
            {' '}

<<<<<<< HEAD
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Email *{' '}
            </label>{' '}
            <div className="relative">
              {' '}
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}
              <input
                type="email"
                value={formData.email}
                onChange={e =>

<<<<<<< HEAD
                  setFormData({ ...formData, email: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  setFormData({ ...formData, email: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  setFormData({ ...formData, email: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  setFormData({ ...formData, "email": 'e.target.value' })
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">                  setFormData({ ...formData, "email": 'e.target.value' })                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
                required
              />{' '}
            </div>{' '}
          </div>{' '}
          <div>
            {' '}

<<<<<<< HEAD
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Subject *{' '}
            </label>{' '}
            <input
              type="text"
              value={formData.subject}
              onChange={e =>

<<<<<<< HEAD
                setFormData({ ...formData, subject: 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                setFormData({ ...formData, subject: 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                setFormData({ ...formData, subject: 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                setFormData({ ...formData, "subject": 'e.target.value' })
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">                setFormData({ ...formData, "subject": 'e.target.value' })              }
              className="w-full px-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter subject"
              required
            />{' '}
          </div>{' '}
          <div>
            {' '}

<<<<<<< HEAD
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Message *{' '}
            </label>{' '}
            <div className="relative">
              {' '}
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '}
              <textarea
                value={formData.message}
                onChange={e =>
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
                  setFormData({ ...formData, message: 'e.target.value' })
                }
                rows={6}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  setFormData({ ...formData, "message": 'e.target.value' })
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">                  setFormData({ ...formData, "message": 'e.target.value' })                }
                rows={6}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                placeholder="Enter your message"
                required
              />{' '}
            </div>{' '}
          </div>{' '}
          <button
            type="submit"
            disabled={isSubmitting}

<<<<<<< HEAD
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {' '}
            {isSubmitting ? (
              <>
                {' '}
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '}
                <span>Sending...</span>{' '}
              </>
            ) : (
              <>
                {' '}
                <Send className="w-4 h-4" /> <span>Send Message</span>{' '}
              </>
            )}{' '}
          </button>{' '}
          {submitStatus === 'success' && (

<<<<<<< HEAD
            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">              {' '}
              <CheckCircle className="w-5 h-5" />{' '}
              <span>Message sent successfully!</span>{' '}
            </div>
          )}{' '}
        </form>{' '}
      </div>{' '}
    </div>
  );
};
export default ContactFormEnhanced;

<<<<<<< HEAD
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
