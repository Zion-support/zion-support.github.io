import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNotifications } from '../contexts/NotificationContext';
import { useAsync } from '../hooks/useAsync';
import Button from './Button';
import Input from './Input';
import './ContactForm.css';
const ContactForm = ({ onSubmit, className = '', }) => {
    const { showNotification } = useNotifications();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    // Simulate API call
    const submitForm = async (data) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Simulate success
        if (data.email === 'error@example.com') {
            throw new Error('Simulated error for testing');
        }
        return Promise.resolve();
    };
    const [submitState, executeSubmit] = useAsync(submitForm);
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleInputChange = (field) => (e) => {
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [field]: e.target.value })));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => (Object.assign(Object.assign({}, prev), { [field]: undefined })));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            showNotification({
                type: 'error',
                title: 'Validation Error',
                message: 'Please fix the errors below and try again.',
            });
            return;
        }
        try {
            await executeSubmit(formData);
            if (onSubmit) {
                await onSubmit(formData);
            }
            showNotification({
                type: 'success',
                title: 'Message Sent!',
                message: "Thank you for your message. We'll get back to you soon.",
            });
            // Reset form
            setFormData({
                name: '',
                email: '',
                company: '',
                message: '',
            });
        }
        catch (error) {
            showNotification({
                type: 'error',
                title: 'Error',
                message: 'Failed to send message. Please try again.',
            });
        }
    };
    return (_jsxs("form", { className: `contact-form ${className}`, onSubmit: handleSubmit, children: [_jsxs("div", { className: 'contact-form__header', children: [_jsx("h3", { className: 'contact-form__title', children: "Get in Touch" }), _jsx("p", { className: 'contact-form__subtitle', children: "Ready to transform your business? Let's discuss your project." })] }), _jsxs("div", { className: 'contact-form__fields', children: [_jsx("div", { className: 'contact-form__row', children: _jsx(Input, { label: 'Full Name', type: 'text', value: formData.name, onChange: handleInputChange('name'), error: errors.name, placeholder: 'Enter your full name', required: true, fullWidth: true }) }), _jsx("div", { className: 'contact-form__row', children: _jsx(Input, { label: 'Email Address', type: 'email', value: formData.email, onChange: handleInputChange('email'), error: errors.email, placeholder: 'Enter your email address', required: true, fullWidth: true }) }), _jsx("div", { className: 'contact-form__row', children: _jsx(Input, { label: 'Company (Optional)', type: 'text', value: formData.company, onChange: handleInputChange('company'), placeholder: 'Enter your company name', fullWidth: true }) }), _jsx("div", { className: 'contact-form__row', children: _jsxs("div", { className: 'input-container input-container--full-width', children: [_jsxs("label", { htmlFor: 'message', className: 'input-label', children: ["Message", _jsx("span", { className: 'input-required', children: "*" })] }), _jsx("textarea", { id: 'message', className: `input input--textarea ${errors.message ? 'input--error' : ''}`, value: formData.message, onChange: handleInputChange('message'), placeholder: 'Tell us about your project...', rows: 5, required: true }), errors.message && (_jsx("div", { className: 'input-message', children: _jsx("span", { className: 'input-error', role: 'alert', children: errors.message }) }))] }) })] }), _jsx("div", { className: 'contact-form__actions', children: _jsx(Button, { type: 'submit', variant: 'primary', size: 'large', loading: submitState.loading, fullWidth: true, leftIcon: '\uD83D\uDCE7', children: submitState.loading ? 'Sending...' : 'Send Message' }) }), submitState.error && (_jsx("div", { className: 'contact-form__error', children: _jsxs("p", { children: ["Error: ", submitState.error.message] }) }))] }));
};
export default ContactForm;
