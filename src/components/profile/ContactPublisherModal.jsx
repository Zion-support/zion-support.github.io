import React, {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle,} from '@/components/ui/dialog';
 from '@/components/ui/dialog';
 from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from '@/components/ui/form';
import {useForm} from 'react-hook-form';
import { Mail, PaperPlane import api from '@/services/apiClient'; import { toast } from '@/hooks/use-toast';
);
export function ContactPublisherModal(props: any) {
);
export default Component