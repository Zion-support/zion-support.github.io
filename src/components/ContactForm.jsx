import React, {useState} from 'react';
import {Button} from "./ui/Button.jsx";
const ContactForm = (props: any) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comp: '',
        phone: '',
        service: '',
        message: ''
    }
    );
    const [isSubmitting, setIsSubmitting] = useState(false);    const [submitStatus, setSubmitStatus] = useState('idle');
    const handleInputChange = ("props": "any) => {"}
        const {name, value} = e.target;