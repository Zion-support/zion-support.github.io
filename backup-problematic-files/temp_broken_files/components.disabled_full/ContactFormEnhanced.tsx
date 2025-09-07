import React, { useState } from 'react';
<<<<<<< HEAD
import {
=======
import { motion } from 'framer-motion';

import { motion } from 'framer-motion';




import { motion } from 'framer-motion';

import { motion  } from 'framer-motion';
;
import { Send,CheckCircle,AlertCircle,User,Mail;
ursor/fix-syntax-push-and-merge-to-main-40de;}
  MessageSquare;}
 } from 'lucide-react';
const ContactFormEnhanced: React.FC = () => {const [formData;, setFormData] = useState({name: '';,
  email: '';,subject: '';,}
  message: '';}
  })ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
  MessageSquare} from 'lucide-react';
const \"ContactFormEnhanced\": React.FC = () => {const [formData, setFormData] = useState({\"name\": '',\"email\": '',\"subject\": '',\"message\": ''})const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle');
  const handleSubmit = async (e: React.FormEvent) => {const handleSubmit = async (e: React.FormEvent) => {const handleSubmit = async (e: React.FormEvent) => {ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;}
  const handleSubmit = async (\"e\": React.FormEvent) => {e.preventDefault()setIsSubmitting(true)await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setIsSubmitting(false);}
    setFormData({ name: '';,
  email: '';, subject: '';,}
  message: '' ;})setFormData({ name: '';,
  email: '';, subject: '';,}
  message: '' ;})setFormData({ name: '';,
  email: '';, subject: '';,}
  message: '' ;})ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
    setFormData({ \"name\": '', \"email\": '', \"subject\": '', \"message\": '' })}return (<div className=\"max-w-2xl mx-auto p-6\" />;
      {' '}
;
      <div className=\"bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6\" />;
        {' '}
        <h2 className=\"text-2xl font-bold text-gray-900 dark:text-white mb-6\" />;
      <div className=\"bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6\" />;
        {' '}
        <h2 className=\"text-2xl font-bold text-gray-900 dark:text-white mb-6\" />;
      <div className=\"bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6\" />;
        {' '}
        <h2 className=\"text-2xl font-bold text-gray-900 dark:text-white mb-6\" />;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
      <div className=\"bg-white \"dark\": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6\" />;
        {' '}
        <h2 className=\"text-2xl font-bold text-gray-900 \"dark\": text-white mb-6\" />;
          {' '}
          Get in Touch{' '}
        </h2>{' '}
        <form onSubmit={handleSubmit} className=\"space-y-4\" />;
          {' '}
          <div />;
            {' '}
;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />;
              {' '}
              Name *{' '}
            </label>{' '}
            <div className=\"relative\" />;
              {' '}
              <User className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '}
              <input;
                type=\"text\";
                value={formData.name}
                onChange={e = />;}
;}
                  setFormData({ ...formData, name: 'e.target.value' ;})}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                  setFormData({ ...formData, name: 'e.target.value' ;})}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                  setFormData({ ...formData, name: 'e.target.value' ;})}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
                  setFormData({ ...formData, \"name\": 'e.target.value' })}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                placeholder=\"Enter your name\";
                required;
              />{' '}
            </div>{' '}
          </div>{' '}
          <div />;
            {' '}
;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />;
              {' '}
              Email *{' '}
            </label>{' '}
            <div className=\"relative\" />;
              {' '}
              <Mail className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '}
              <input;
                type=\"email\";
                value={formData.email}
                onChange={e = />;}
;}
                  setFormData({ ...formData, email: 'e.target.value' ;})}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                  setFormData({ ...formData, email: 'e.target.value' ;})}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                  setFormData({ ...formData, email: 'e.target.value' ;})}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
                  setFormData({ ...formData, \"email\": 'e.target.value' })}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                placeholder=\"Enter your email\";
                required;
              />{' '}
            </div>{' '}
          </div>{' '}
          <div />;
            {' '}
;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />;
              {' '}
              Subject *{' '}
            </label>{' '}
            <input;
              type=\"text\";
              value={formData.subject}
              onChange={e = />;}
;}
                setFormData({ ...formData, subject: 'e.target.value' ;})}
              className=\"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                setFormData({ ...formData, subject: 'e.target.value' ;})}
              className=\"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
                setFormData({ ...formData, subject: 'e.target.value' ;})}
              className=\"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
                setFormData({ ...formData, \"subject\": 'e.target.value' })}
              className=\"w-full px-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\";
              placeholder=\"Enter subject\";
              required;
            />{' '}
          </div>{' '}
          <div />;
            {' '}
;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
            <label className=\"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2\" />;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />;
              {' '}
              Message *{' '}
            </label>{' '}
            <div className=\"relative\" />;
              {' '}
              <MessageSquare className=\"absolute left-3 top-3 w-4 h-4 text-gray-400\" />{' '}
              <textarea;
                value={formData.message}
                onChange={e = />;
;}
ursor/fix-syntax-push-and-merge-to-main-40de;}
                  setFormData({ ...formData, message: 'e.target.value' ;})}
                rows={6}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none\";
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
                  setFormData({ ...formData, \"message\": 'e.target.value' })}
                rows={6}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none\";
                placeholder=\"Enter your message\";
                required;
              />{' '}
            </div>{' '}
          </div>{' '}
          <button;
            type=\"submit\";
            disabled={isSubmitting}
;
            className=\"w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2\";
            className=\"w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2\";
            className=\"w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2\";
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
            className=\"w-full px-6 py-3 bg-blue-600 text-white rounded-lg \"hover\": bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2\";
           />;
            {' '}
            {isSubmitting ? (<>;}
                {' '}
                <div className=\"animate-spin rounded-full h-4 w-4 border-b-2 border-white\" /></div>{' '}
                <span />Sending...</span>{' '}
              </>;
            ) : (<>;
                {' '}
                <Send className=\"w-4 h-4\" /> <span />Send Message</span>{' '}
              </>;
            )}{' '}
          </button>{' '}
          {submitStatus === 'success' && (;
            <div className=\"p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2\" />;
            <div className=\"p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2\" />;
            <div className=\"p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2\" />;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;}
            <div className=\"p-4 bg-green-100 \"dark\": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2\" />;}
              {' '}
              <CheckCircle className=\"w-5 h-5\" />{' '}
              <span />Message sent successfully!</span>{' '}
            </div>;
          )}{' '}
        </form>{' '}
      </div>{' '}
    </div>;
  )}export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData;,setFormData] = useState({ name: '';
  email: '';,subject: '';,}
  message: '';})const [isSubmitting,setIsSubmitting] = useState(false)const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle')const handleSubmit = async (e: React.FormEvent) => { e.preventDefault()setIsSubmitting(true)await new Promise(resolve => setTimeout(resolve;,2000))setSubmitStatus('success')setIsSubmitting(false)setFormData({ name: '';,
  email: '';,subject: '';,}
  message: '' ;})}return ( <div className=\"max-w-2xl mx-auto p-6\" /> {' '} <div className=\"bg-white dark: bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6\" /> {' ';} <h2 className=\"text-2xl font-bold text-gray-900 dark: text-white mb-6\" /> {' ';} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className=\"space-y-4\" /> {' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Name *{' '} </label>{' '} <div className=\"relative\" /> {' '} <User className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '} <input type=\"text\" value={formData.name} onChange={e = /> setFormData({ ...formData,name: 'e.target.value' ;}) } className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\" placeholder=\"Enter your name\" required />{' ';} </div>{' '} </div>{' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Email *{' '} </label>{' '} <div className=\"relative\" /> {' '} <Mail className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '} <input type=\"email\" value={formData.email} onChange={e = /> setFormData({ ...formData,email: 'e.target.value' ;}) } className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\" placeholder=\"Enter your email\" required />{' ';} </div>{' '} </div>{' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Subject *{' '} </label>{' '} <input type=\"text\" value={formData.subject} onChange={e = /> setFormData({ ...formData,subject: 'e.target.value' ;}) } className=\"w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\" placeholder=\"Enter subject\" required />{' ';} </div>{' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Message *{' '} </label>{' '} <div className=\"relative\" /> {' '} <MessageSquare className=\"absolute left-3 top-3 w-4 h-4 text-gray-400\" />{' '} <textarea value={formData.message} onChange={e = /> setFormData({ ...formData,message: 'e.target.value' ;}) } rows={6} className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none\" placeholder=\"Enter your message\" required />{' ';} </div>{' '} </div>{' '} <button type=\"submit\" disabled={isSubmitting} className=\"w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover: bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2\"  /> {' ';} {isSubmitting ? ( <> {' '} <div className=\"animate-spin rounded-full h-4 w-4 border-b-2 border-white\" /></div>{' '} <span />Sending...</span>{' '} </> ) : ( <> {' '} <Send className=\"w-4 h-4\" /> <span />Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className=\"p-4 bg-green-100 dark: bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2\" /> {' ';} <CheckCircle className=\"w-5 h-5\" />{' '} <span />Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}export default ContactFormEnhanced;
;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
;
;
import { motion } from 'framer-motion';
import {
  // TODO: Implement;
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  MessageSquare} from 'lucide-react';
const "ContactFormEnhanced": React.FC = () => {
  const [formData, setFormData] = useState({
    "name": '',
    "email": '',
    "subject": '',
    "message": ''});
=======
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData;,setFormData] = useState({ name: '';,email: '';,subject: '';,message: '';,}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '';,email: '';,subject: '';,message: '' ;})}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark: bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' ';} <h2 className="text-2xl font-bold text-gray-900 dark: text-white mb-6"> {' ';} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' ;}) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' ';} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' ;}) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' ';} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' ;}) } className="w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' ';} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' ;}) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' ';} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover: bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' ';} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark: bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' ';} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;












  MessageSquare} from 'lucide-react';
const "ContactFormEnhanced": React.FC = () => {"
  const [formData, setFormData] = useState({"
    "name": ,
    "email": ,
    "subject": ,')
    "message": });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error
  >('idle');
  const handleSubmit = async ("e": React.FormEvent) => {"
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));"
    setSubmitStatus('success');
    setIsSubmitting(false);



    setFormData({ "name": , "email": , "subject": , "message":  });
  };
  return (
    <div className="max-w-2xl mx-auto p-6">"
</div>"
      <div className="bg-white "dark": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">"
        <h2 className="text-2xl font-bold text-gray-900 "dark": text-white mb-6">"
</h2>"
        </h2>{' '}
        <form onSubmit={handleSubmit} className="space-y-4">"
</form>
          <div>
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">"
</label>"
            </label>{' '}
            <div className="relative">"
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}

              <input;
                type="text""
                value={formData.name}
                onChange={e =>
</input>"
            </div>{' '}
</div>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}

                type="email""
                value={formData.email}
              value={formData.subject}
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '}

              <textarea;
                value={formData.message}
</textarea>
          <button;
            type="submit""
            disabled={isSubmitting}


"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2""
          >
</button>
              <>"
                {' '}
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '}
                <span>Sending...</span>{' '}
              </>)
            ) : (
              <>
                <Send className="w-4 h-4" /> <span>Send Message</span>{' '}

            )}{' '}
          </button>{' '}
            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">"
              <CheckCircle className="w-5 h-5" />{' '}

              <span>Message sent successfully!</span>{' '}
        </form>{' '}
import React,{ useState } from 'react'; import { motion, Send, CheckCircle, AlertCircle, User, Mail, MessageSquare,  } from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData;,setFormData] = useState({ name:  ;,email:  ;,subject:  ;,message:  ;,}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name:  ;,email:  ;,subject:  ;,message:  ;})}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark: bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' ';} <h2 className="text-2xl font-bold text-gray-900 dark: text-white mb-6"> {' ';} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' ;}) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' ';} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' ;}) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' ';} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' ;}) } className="w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' ';} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2"> {' ';} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' ;}) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' ';} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover: bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' ';} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark: bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' ';} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
pr-12325

}
}
  MessageSquare} from 'lucide-react';
const \"ContactFormEnhanced\": React.FC = () => {
  const [formData, setFormData] = useState({
    \"name\": '',
    \"email\": '',}
    \"subject\": '',}
    \"message\": ''});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  const handleSubmit = async ("e": React.FormEvent) => {
=======



  const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













  const handleSubmit = async ("e": React.FormEvent) => {
  const handleSubmit = async (\"e\": React.FormEvent) => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitStatus('success');
    setIsSubmitting(false);
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    setFormData({ "name": '', "email": '', "subject": '', "message": '' });
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      {' '}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
      <div className="bg-white "dark": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 "dark": text-white mb-6">
          {' '}
          Get in Touch{' '}
        </h2>{' '}
        <form onSubmit={handleSubmit} className="space-y-4">
          {' '}
          <div>
            {' '}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======



    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormData({ name: '', email: '', subject: '', message: '' });
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













    setFormData({ "name": '', "email": '', "subject": '', "message": '' });
}
}
    setFormData({ \"name\": '', \"email\": '', \"subject\": '', \"message\": '' });
  };
  return (
    <div className=\"max-w-2xl mx-auto p-6\" />
      {' '}



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













      <div className="bg-white "dark": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 "dark": text-white mb-6">
      <div className=\"bg-white \"dark\": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6\" />
        {' '}
        <h2 className=\"text-2xl font-bold text-gray-900 \"dark\": text-white mb-6\" />
          {' '}
          Get in Touch{' '}
        </h2>{' '}
        <form onSubmit={handleSubmit} className=\"space-y-4\" />
          {' '}
          <div />
            {' '}



            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />
              {' '}
              Name *{' '}
            </label>{' '}
            <div className=\"relative\" />
              {' '}
              <User className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '}
              <input;
type=\"text\"
                value={formData.name}
                onChange={e =>



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













>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  setFormData({ ...formData, "name": 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your name"
                required
<<<<<<< HEAD
              />{' '}
            </div>{' '}
          </div>{' '}
          <div>
            {' '}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
                onChange={e = />

}
}
                  setFormData({ ...formData, \"name\": 'e.target.value' })
                }
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\"
                placeholder=\"Enter your name\"
                required;
              />{' '}
            </div>{' '}
          </div>{' '}
          <div />
            {' '}



            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />
              {' '}
              Email *{' '}
            </label>{' '}
            <div className=\"relative\" />
              {' '}
              <Mail className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '}
              <input;
type=\"email\"
                value={formData.email}
                onChange={e =>



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













>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  setFormData({ ...formData, "email": 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
                required
<<<<<<< HEAD
              />{' '}
            </div>{' '}
          </div>{' '}
          <div>
            {' '}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Subject *{' '}
            </label>{' '}
            <input
              type="text"
              value={formData.subject}
              onChange={e =>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
                onChange={e = />

}
}
                  setFormData({ ...formData, \"email\": 'e.target.value' })
                }
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\"
                placeholder=\"Enter your email\"
                required;
              />{' '}
            </div>{' '}
          </div>{' '}
          <div />
            {' '}



            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />
              {' '}
              Subject *{' '}
            </label>{' '}
            <input;
type=\"text\"
              value={formData.subject}
              onChange={e =>



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













>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                setFormData({ ...formData, "subject": 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter subject"
              required
<<<<<<< HEAD
            />{' '}
          </div>{' '}
          <div>
            {' '}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Message *{' '}
            </label>{' '}
            <div className="relative">
=======
              onChange={e = />

}
}
                setFormData({ ...formData, \"subject\": 'e.target.value' })
              }
              className=\"w-full px-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\"
              placeholder=\"Enter subject\"
              required;
            />{' '}
          </div>{' '}
          <div />
            {' '}



            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
            <label className=\"block text-sm font-medium text-gray-700 \"dark\": text-gray-300 mb-2\" />
              {' '}
              Message *{' '}
            </label>{' '}
            <div className=\"relative\" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {' '}
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '}
              <textarea
                value={formData.message}
                onChange={e =>
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======












>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  setFormData({ ...formData, "message": 'e.target.value' })
                }
                rows={6}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                placeholder="Enter your message"
                required
<<<<<<< HEAD
              />{' '}
            </div>{' '}
          </div>{' '}
          <button
            type="submit"
            disabled={isSubmitting}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {' '}
            {isSubmitting ? (
              <>
                {' '}
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '}
                <span>Sending...</span>{' '}
=======
              <MessageSquare className=\"absolute left-3 top-3 w-4 h-4 text-gray-400\" />{' '}
              <textarea;
value={formData.message}
                onChange={e = />

}
}
                  setFormData({ ...formData, \"message\": 'e.target.value' })
                }
                rows={6}
                className=\"w-full pl-10 pr-4 py-2 border border-gray-300 \"dark\": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none\"
                placeholder=\"Enter your message\"
                required;
              />{' '}
            </div>{' '}
          </div>{' '}
          <button;
type=\"submit\"
            disabled={isSubmitting}



            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            className=\"w-full px-6 py-3 bg-blue-600 text-white rounded-lg \"hover\": bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2\"
           />
            {' '}
            {isSubmitting ? (}
              <>}
                {' '}
                <div className=\"animate-spin rounded-full h-4 w-4 border-b-2 border-white\" /></div>{' '}
                <span />Sending...</span>{' '}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </>
            ) : (
              <>
                {' '}
<<<<<<< HEAD
                <Send className="w-4 h-4" /> <span>Send Message</span>{' '}
=======
                <Send className=\"w-4 h-4\" /> <span />Send Message</span>{' '}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </>
            )}{' '}
          </button>{' '}
          {submitStatus === 'success' && (
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
              {' '}
              <CheckCircle className="w-5 h-5" />{' '}
              <span>Message sent successfully!</span>{' '}
=======



            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de













            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
}
            <div className=\"p-4 bg-green-100 \"dark\": bg-green-900/20 text-green-800 dark: text-green-200 rounded-lg flex items-center space-x-2\" />;}
              {' '}
              <CheckCircle className=\"w-5 h-5\" />{' '}
              <span />Message sent successfully!</span>{' '}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </div>
          )}{' '}
        </form>{' '}
      </div>{' '}
    </div>
  );
};
<<<<<<< HEAD
export default ContactFormEnhanced;
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======



import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de




import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
export default ContactFormEnhanced;


export default ContactFormEnhanced;
  email: '';,subject: '';,}
  message: '';}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '';,
  email: '';,subject: '';,}
  message: '' ;})}; return ( <div className=\"max-w-2xl mx-auto p-6\" /> {' '} <div className=\"bg-white dark: bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6\" /> {' ';} <h2 className=\"text-2xl font-bold text-gray-900 dark: text-white mb-6\" /> {' ';} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className=\"space-y-4\" /> {' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Name *{' '} </label>{' '} <div className=\"relative\" /> {' '} <User className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '} <input type=\"text\" value={formData.name} onChange={e = /> setFormData({ ...formData,name: 'e.target.value' ;}) } className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\" placeholder=\"Enter your name\" required />{' ';} </div>{' '} </div>{' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Email *{' '} </label>{' '} <div className=\"relative\" /> {' '} <Mail className=\"absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400\" />{' '} <input type=\"email\" value={formData.email} onChange={e = /> setFormData({ ...formData,email: 'e.target.value' ;}) } className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\" placeholder=\"Enter your email\" required />{' ';} </div>{' '} </div>{' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Subject *{' '} </label>{' '} <input type=\"text\" value={formData.subject} onChange={e = /> setFormData({ ...formData,subject: 'e.target.value' ;}) } className=\"w-full px-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white\" placeholder=\"Enter subject\" required />{' ';} </div>{' '} <div /> {' '} <label className=\"block text-sm font-medium text-gray-700 dark: text-gray-300 mb-2\" /> {' ';} Message *{' '} </label>{' '} <div className=\"relative\" /> {' '} <MessageSquare className=\"absolute left-3 top-3 w-4 h-4 text-gray-400\" />{' '} <textarea value={formData.message} onChange={e = /> setFormData({ ...formData,message: 'e.target.value' ;}) } rows={6} className=\"w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none\" placeholder=\"Enter your message\" required />{' ';} </div>{' '} </div>{' '} <button type=\"submit\" disabled={isSubmitting} className=\"w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover: bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2\"  /> {' ';} {isSubmitting ? ( <> {' '} <div className=\"animate-spin rounded-full h-4 w-4 border-b-2 border-white\" /></div>{' '} <span />Sending...</span>{' '} </> ) : ( <> {' '} <Send className=\"w-4 h-4\" /> <span />Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className=\"p-4 bg-green-100 dark: bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2\" /> {' ';} <CheckCircle className=\"w-5 h-5\" />{' '} <span />Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
