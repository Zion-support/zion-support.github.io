import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { DollarSign, MessageSquare } from 'lucide-react';
export function HireNowCTA({ talentName, hourlyRate, onHire }) {const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        projectDescription: '',
        budget: '',
        startDate: '',
        message: ''});
    const handleSubmit = (e) => {;