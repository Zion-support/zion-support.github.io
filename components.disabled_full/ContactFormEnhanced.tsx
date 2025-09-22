import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {
=======

import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  MessageSquare} from 'lucide-react';
const "ContactFormEnhanced": React.FC = () => {}
  const [formData, setFormData] = useState({'"
    "name": '','"
    "email": '','"
    "subject": '','"
    "message": ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'
    'idle' | 'success' | 'error''
  >('idle');
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

  const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  const handleSubmit = async ("e": React.FormEvent) => {
=======

"
  const handleSubmit = async ("e": React.FormEvent) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));'
    setSubmitStatus('success');
    setIsSubmitting(false);
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormData({ name: '', email: '', subject: '', message: '' });
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setFormData({ "name": '', "email": '', "subject": '', "message": '' });
  };
  return ("
    <div className="max-w-2xl mx-auto p-6">'
      {' '}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      <div className="bg-white "dark": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        {' '}
        <h2 className="text-2xl font-bold text-gray-900 "dark": text-white mb-6">
=======

"
      <div className="bg-white "dark": bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">'
        {' '}"
        <h2 className="text-2xl font-bold text-gray-900 "dark": text-white mb-6">'
          {' '}'
          Get in Touch{' '}'
        </h2>{' '}"
        <form onSubmit={handleSubmit} className="space-y-4">'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {' '}
          <div>'
            {' '}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
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

  const handleSubmit = async ("e": React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitStatus('success');
    setIsSubmitting(false);

    setFormData({ "name": '', "email": '', "subject": '', "message": '' });
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      {' '}

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Name *{' '}
            </label>{' '}
            <div className="relative">
              {' '}

              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}
              <input"
                type="text"
                value={formData.name}
                onChange={e =>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

                  setFormData({ ...formData, name: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  setFormData({ ...formData, name: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  setFormData({ ...formData, "name": 'e.target.value' })
                }"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""
                placeholder="Enter your name"
                required'
              />{' '}'
            </div>{' '}'
          </div>{' '}
          <div>'
            {' '}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}
              <input
                type="text"
                value={formData.name}
                onChange={e =>

                  setFormData({ ...formData, "name": 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your name"
                required
              />{' '}
            </div>{' '}
          </div>{' '}
          <div>
            {' '}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Email *{' '}
            </label>{' '}
            <div className="relative">
              {' '}

              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}
              <input"
                type="email"
                value={formData.email}
                onChange={e =>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

                  setFormData({ ...formData, email: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  setFormData({ ...formData, email: 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  setFormData({ ...formData, "email": 'e.target.value' })
                }"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""
                placeholder="Enter your email"
                required'
              />{' '}'
            </div>{' '}'
          </div>{' '}
          <div>'
            {' '}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Subject *{' '}
=======

"
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">'
              {' '}'
              Subject *{' '}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </label>{' '}
            <input"
              type="text"
              value={formData.subject}
              onChange={e =>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

                setFormData({ ...formData, subject: 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                setFormData({ ...formData, subject: 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                setFormData({ ...formData, "subject": 'e.target.value' })
              }"
              className="w-full px-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white""
              placeholder="Enter subject"
              required'
            />{' '}'
          </div>{' '}
          <div>'
            {' '}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '}
              <input
                type="email"
                value={formData.email}
                onChange={e =>

                  setFormData({ ...formData, "email": 'e.target.value' })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
                required
              />{' '}
            </div>{' '}
          </div>{' '}
          <div>
            {' '}

            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Subject *{' '}
            </label>{' '}
            <input
              type="text"
              value={formData.subject}
              onChange={e =>

                setFormData({ ...formData, "subject": 'e.target.value' })
              }
              className="w-full px-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter subject"
              required
            />{' '}
          </div>{' '}
          <div>
            {' '}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <label className="block text-sm font-medium text-gray-700 "dark": text-gray-300 mb-2">
              {' '}
              Message *{' '}
            </label>{' '}
            <div className="relative">
              {' '}

              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '}
              <textarea;
                value={formData.message}
                onChange={e =>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
                  setFormData({ ...formData, message: 'e.target.value' })
                }
                rows={6}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '}
              <textarea
                value={formData.message}
                onChange={e =>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  setFormData({ ...formData, "message": 'e.target.value' })
                }
                rows={6}"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none""
                placeholder="Enter your message"
                required'
              />{' '}'
            </div>{' '}'
          </div>{' '}
          <button"
            type="submit"
            disabled={isSubmitting}
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2"
          >'
            {' '}
            {isSubmitting ? (
              <>'
                {' '}'"
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '}'
                <span>Sending...</span>{' '}
              </>
            ) : (
              <>'
                {' '}'"
                <Send className="w-4 h-4" /> <span>Send Message</span>{' '}
              </>'
            )}{' '}'
          </button>{' '}'
          {submitStatus === 'success' && (
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
            <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
              {' '}
              <CheckCircle className="w-5 h-5" />{' '}
=======

"
            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">'
              {' '}'"
              <CheckCircle className="w-5 h-5" />{' '}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <span>Message sent successfully!</span>{' '}
            </div>'
          )}{' '}'
        </form>{' '}'
=======
                  setFormData({ ...formData, "message": 'e.target.value' })
                }
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

            <div className="p-4 bg-green-100 "dark": bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2">
              {' '}
              <CheckCircle className="w-5 h-5" />{' '}
              <span>Message sent successfully!</span>{' '}
            </div>
          )}{' '}
        </form>{' '}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </div>{' '}
    </div>
  );
};
export default ContactFormEnhanced;
<<<<<<< HEAD
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6

'"
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React,{ useState } from 'react'; import { motion } from 'framer-motion'; import { Send,CheckCircle,AlertCircle,User,Mail,MessageSquare,} from 'lucide-react'; const ContactFormEnhanced: React.FC = () => { const [formData,setFormData] = useState({ name: '',email: '',subject: '',message: '',}); const [isSubmitting,setIsSubmitting] = useState(false); const [submitStatus,setSubmitStatus] = useState< 'idle' | 'success' | 'error' >('idle'); const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setIsSubmitting(true); await new Promise(resolve => setTimeout(resolve,2000)); setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '',email: '',subject: '',message: '' })}; return ( <div className="max-w-2xl mx-auto p-6"> {' '} <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6"> {' '} <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"> {' '} Get in Touch{' '} </h2>{' '} <form onSubmit={handleSubmit} className="space-y-4"> {' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Name *{' '} </label>{' '} <div className="relative"> {' '} <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="text" value={formData.name} onChange={e => setFormData({ ...formData,name: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your name" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Email *{' '} </label>{' '} <div className="relative"> {' '} <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{' '} <input type="email" value={formData.email} onChange={e => setFormData({ ...formData,email: 'e.target.value' }) } className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter your email" required />{' '} </div>{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Subject *{' '} </label>{' '} <input type="text" value={formData.subject} onChange={e => setFormData({ ...formData,subject: 'e.target.value' }) } className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Enter subject" required />{' '} </div>{' '} <div> {' '} <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> {' '} Message *{' '} </label>{' '} <div className="relative"> {' '} <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />{' '} <textarea value={formData.message} onChange={e => setFormData({ ...formData,message: 'e.target.value' }) } rows={6} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none" placeholder="Enter your message" required />{' '} </div>{' '} </div>{' '} <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-2" > {' '} {isSubmitting ? ( <> {' '} <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>{' '} <span>Sending...</span>{' '} </> ) : ( <> {' '} <Send className="w-4 h-4" /> <span>Send Message</span>{' '} </> )}{' '} </button>{' '} {submitStatus === 'success' && ( <div className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-2"> {' '} <CheckCircle className="w-5 h-5" />{' '} <span>Message sent successfully!</span>{' '} </div> )}{' '} </form>{' '} </div>{' '} </div> )}; export default ContactFormEnhanced;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
