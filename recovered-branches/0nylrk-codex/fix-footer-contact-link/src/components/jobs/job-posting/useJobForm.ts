import {useState, useEffect} from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { format  } from 'date-fns';
import { toast } from "sonner";
<<<<<<< HEAD
import { useNavigate  } from 'react-router-dom';
import { jobSchema, JobSchemaType  } from './validation';

=======
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { jobSchema, JobSchemaType } from './validation';
import { useAuth } from "@/hooks/useAuth";
export interface JobPostingProps {
  jobId?: string,
  onSuccess?: () => void
=======
import { useNavigate  } from 'react-router-dom';
import { jobSchema, JobSchemaType  } from './validation';
=======
import {use_form} from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import {format} from 'date - fns';
import { toast } from './sonner';
import {use_navigate} from 'react-router-dom';
import {job_schema, JobSchemaType} from './validation';
import { use_auth } from '@/hooks / use_auth';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
import {useState, useEffect} from 'react';
import { useState, useEffect  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { format  } from 'date-fns';
import { toast } from "sonner";
import { useNavigate  } from 'react-router-dom';
import { jobSchema, JobSchemaType  } from './validation';
import { useAuth } from "@/hooks/useAuth";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {format} from 'date-fns';
import {toast} from "sonner";
import {useNavigate} from 'react-router-dom';
import {jobSchema, JobSchemaType} from './validation';

import {useAuth} from "@/hooks/useAuth";
export interface JobPostingProps {;
  jobId?: string;
  onSuccess?: () => void;

  jobId?: string;
  onSuccess?: () => void

}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth();
  const navigate = useNavigate();
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from 'react',

import { useForm } from 'react-hook-form',
import { zodResolver } from "@hookform/resolvers/zod",
import { format } from 'date-fns',
import { toast } from "sonner",
import { useNavigate } from 'react-router-dom',
import { jobSchema, JobSchemaType } from './validation',
import { useAuth } from "@/hooks/useAuth",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface JobPostingProps {

<<<<<<< HEAD
  job_id?: string;
  on_success?: () => void;
}

  const [startDate, setStartDate] = useState<Date | undefined>(undefined),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [isRemote, setIsRemote] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),

      title: '';

      company: '';
      location: '';
      job_type: '';
      salary_range: '',

      expiry_date: '',
      is_remote: false,'
      category: '','
      status: '','
      external_apply_link: ''},"
    mode: "onChange"}),

  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {}
    if (!user) {"
      toast.error("You must be logged in to post a job"),"
      navigate("/login"),

import { useAuth } from "@/hooks/useAuth",;
export interface JobPostingProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [isRemote, setIsRemote] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),;
  const form = useForm<JobSchemaType>({;
    resolver: zodResolver(jobSchema),;
    defaultValues: {;'
      title: '',;'
      company: '',;'
      location: '',;'
      job_type: '',;'
      salary_range: '',;'
      description: '',;'
      responsibilities: '',;'
      qualifications: '',;'
      benefits: '',;'
      application_instructions: '',;'
      contact_email: '',;'
      published_date: '',;'
      expiry_date: '',;
      is_remote: false,;'
      category: '',;'
      status: '',;'
      external_apply_link: ''},;"
    mode: "onChange"}),;
  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {;
    if (!user) {;"
      toast.error("You must be logged in to post a job"),;"
      navigate("/login"),;
      return;
    }
;
    setIsLoading(true),;
    try {;'
      const publishedDate = startDate ? startDate.toString() : '',;'
      const expiryDate = endDate ? endDate.toString() : '',;
      const jobData = {;
        ...values,;
        published_date: publishedDate,;
        expiry_date: expiryDate,;
        is_remote: isRemote,;
        user_id: user.id},;
      if (onSuccess) {;
        onSuccess();

      responsibilities: '';
      qualifications: '';
      benefits: '';
      application_instructions: '';
      contact_email: '';
      published_date: '';
      expiry_date: '';
      is_remote: false;
      category: '';

      toast && toast.error("You must be logged in to post a job");
      navigate("/login"),

      return
    }
    setIsLoading(true);
    try {

      const publishedDate = startDate ? startDate && startDate.toString() : '';
      const expiryDate = endDate ? endDate && endDate.toString() : '';

      const jobData = {
        ...values;
        published_date: publishedDate;
        expiry_date: expiryDate;

        is_remote: isRemote,
        user_id: user && user.id};

      if (onSuccess) {
        onSuccess()
      }
      return jobData
    } catch (error: any) {

import { useForm } from 'react-hook-form',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { format } from 'date-fns',;
import { toast } from "sonner",;
import { useNavigate } from 'react-router-dom',;
import { jobSchema, JobSchemaType } from './validation',;
import { useAuth } from "@/hooks/useAuth",;
export interface JobPostingProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [isRemote, setIsRemote] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),;
  const form = useForm<JobSchemaType>({;
    resolver: zodResolver(jobSchema),;
    defaultValues: {;
      title: '',;
      company: '',;
      location: '',;
      job_type: '',;
      salary_range: '',;
      description: '',;
      responsibilities: '',;
      qualifications: '',;
      benefits: '',;
      application_instructions: '',;
      contact_email: '',;
      published_date: '',;
      expiry_date: '',;
      is_remote: false,;
      category: '',;
      status: '',;
      external_apply_link: ''},;
    mode: "onChange"}),;
  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {;
    if (!user) {;
      toast.error("You must be logged in to post a job"),;
      navigate("/login"),;
      return;
    }
;
    setIsLoading(true),;
    try {;
      const publishedDate = startDate ? startDate.toString() : '',;
      const expiryDate = endDate ? endDate.toString() : '',;
      const jobData = {;
        ...values,;
        published_date: publishedDate,;
        expiry_date: expiryDate,;
        is_remote: isRemote,;
        user_id: user.id},;
      if (onSuccess) {;
        onSuccess();

export interface JobPostingProps {
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  job_id?: string;
  on_success?: () => void;
}

<<<<<<< HEAD
=======

  const { user } = useAuth(),
  const navigate = useNavigate(),

<<<<<<< HEAD
  
export interface JobPostingProps {
  jobId?: string,
  onSuccess?: () => void
}

export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isRemote, setIsRemote] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null);
  const { user } = useAuth(),
  const navigate = useNavigate(),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [isRemote, setIsRemote] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),

<<<<<<< HEAD
=======

  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema);
    defaultValues: {
<<<<<<< HEAD
  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
=======

export const useJobForm = ({ job_id, on_success }: JobPostingProps) =>: any {
  const { user } = use_auth ();
  const navigate = use_navigate ();
;
  const [start_date, setStartDate] = useState < Date | undefined>(undefined);
  const [end_date, setEndDate] = useState < Date | undefined>(undefined);
  const [is_remote, setIsRemote] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
  const [initial_values, setInitialValues] = useState < JobSchemaType | null>(null);
;
  const form = use_form < JobSchemaType>({
    resolver: zod_resolver (job_schema);
    default_values: {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      title: '';
      company: '';
      location: '';
      job_type: '';
      salary_range: '';
      description: '';
      responsibilities: '';
      qualifications: '';
      benefits: '';
      application_instructions: '';
      contact_email: '';
      published_date: '';
      expiry_date: '';
      is_remote: false;
      category: '';
<<<<<<< HEAD
      status: ''
      external_apply_link: ''}
    mode: "onChange"});
  // Function to create/update jobs that will be implemented by parent component
  const submitJob = async (values: JobSchemaType) => {
    if (!user) {
      toast.error("You must be logged in to post a job");
      navigate("/login")
=======

      toast && toast.error("You must be logged in to post a job");
      navigate("/login"),

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return
    }
    setIsLoading(true);
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      const publishedDate = startDate ? startDate.toString() : '';
      const expiryDate = endDate ? endDate.toString() : '';
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      const publishedDate = startDate ? startDate && startDate.toString() : '';
      const expiryDate = endDate ? endDate && endDate.toString() : '';

<<<<<<< HEAD
      const jobData = {
      navigate("/login"),      const jobData = {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const jobData = {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        ...values;
        published_date: publishedDate;
        expiry_date: expiryDate;
<<<<<<< HEAD
        is_remote: isRemote
        user_id: user.id}
=======

        is_remote: isRemote,
        user_id: user && user.id};
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (onSuccess) {
        onSuccess()
      }
      return jobData
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Error in job form submission:", error);
      toast.error(error.message |"Failed to process form");
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  return {
    form;
    isLoading;
    startDate;
    setStartDate;
    endDate
    setEndDate;
    isRemote;
    setIsRemote;
    initialValues;
    setInitialValues;
    submitJob
  }
>>>>>>> merged-prs-20250907-203621
}
=======

      console && console.error("Error in job form submission:", error);
      toast && toast.error(error && error.message || "Failed to process form");

      throw error
=======
      status: '',
      external_apply_link: ''}
    mode: "on_change"});
;
  // Function to create / update jobs that will be implemented by parent component;
  const submit_job = async (values: JobSchemaType) => {
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to post a job");
      navigate ("/login"),
      return;
    }
    setIsLoading (true);
;
    try {
      const published_date = start_date ? start_date.to_string () : '';
      const expiry_date = end_date ? end_date.to_string () : '';
;
      const job_data = {
        ...values;
        published_date: published_date;
        expiry_date: expiry_date;
        is_remote: is_remote,
        user_id: user.id}
;
      // Check condition
if ( {) {
  $2
}
        on_success ();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      title: '',
      company: '',
      location: '',
      job_type: '',
      salary_range: '',
      description: '',
      responsibilities: '',
      qualifications: '',
      benefits: '',
      application_instructions: '',
      contact_email: '',
      published_date: '',
      expiry_date: '',
      is_remote: false,
      category: '',
      status: '',
      external_apply_link: ''},
    mode: "onChange"}),

  // Function to create/update jobs that will be implemented by parent component
  const submitJob = async (values: JobSchemaType) => {
    if (!user) {
      toast.error("You must be logged in to post a job"),
      navigate("/login"),
      return
<<<<<<< HEAD
    }

    setIsLoading(true);

    try {
      const publishedDate = startDate ? startDate.toString() : '';
      const expiryDate = endDate ? endDate.toString() : '';

      const jobData = {
        ...values;
        published_date: publishedDate;
        expiry_date: expiryDate;
        is_remote: isRemote,
        user_id: user.id};

      if (onSuccess) {
        onSuccess()
import { useState, useEffect } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { format } from 'date-fns',;
import { toast } from "sonner",;
import { useNavigate } from 'react-router-dom',;
import { jobSchema, JobSchemaType } from './validation',;
import { useAuth } from "@/hooks/useAuth",;
export interface JobPostingProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [isRemote, setIsRemote] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),;
  const form = useForm<JobSchemaType>({;
    resolver: zodResolver(jobSchema),;
    defaultValues: {;
      title: '',;
      company: '',;
      location: '',;
      job_type: '',;
      salary_range: '',;
      description: '',;
      responsibilities: '',;
      qualifications: '',;
      benefits: '',;
      application_instructions: '',;
      contact_email: '',;
      published_date: '',;
      expiry_date: '',;
      is_remote: false,;
      category: '',;
      status: '',;
      external_apply_link: ''},;
    mode: "onChange"}),;
  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {;
    if (!user) {;
      toast.error("You must be logged in to post a job"),;
      navigate("/login"),;
      return;
    }
;
    setIsLoading(true),;
    try {;
      const publishedDate = startDate ? startDate.toString() : '',;
      const expiryDate = endDate ? endDate.toString() : '',;
      const jobData = {;
        ...values,;
        published_date: publishedDate,;
        expiry_date: expiryDate,;
        is_remote: isRemote,;
        user_id: user.id},;
      if (onSuccess) {;
        onSuccess();

export const useJobForm = ({ job_id, on_success }: JobPostingProps) =>: any {
  const { user } = use_auth ();
  const navigate = use_navigate ();
;
  const [start_date, setStartDate] = useState < Date | undefined>(undefined);
  const [end_date, setEndDate] = useState < Date | undefined>(undefined);
  const [is_remote, setIsRemote] = useState (false);
  const [is_loading, setIsLoading] = useState (false);
  const [initial_values, setInitialValues] = useState < JobSchemaType | null>(null);
;
  const form = use_form < JobSchemaType>({
    resolver: zod_resolver (job_schema);
    default_values: {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      title: '';

      company: '';
      location: '';
      job_type: '';
      salary_range: '',

      expiry_date: '',
      is_remote: false,'
      category: '','
      status: '','
      external_apply_link: ''},"
    mode: "onChange"}),

  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {}
    if (!user) {"
      toast.error("You must be logged in to post a job"),"
      navigate("/login"),

import { useAuth } from "@/hooks/useAuth",;
export interface JobPostingProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [isRemote, setIsRemote] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),;
  const form = useForm<JobSchemaType>({;
    resolver: zodResolver(jobSchema),;
    defaultValues: {;'
      title: '',;'
      company: '',;'
      location: '',;'
      job_type: '',;'
      salary_range: '',;'
      description: '',;'
      responsibilities: '',;'
      qualifications: '',;'
      benefits: '',;'
      application_instructions: '',;'
      contact_email: '',;'
      published_date: '',;'
      expiry_date: '',;
      is_remote: false,;'
      category: '',;'
      status: '',;'
      external_apply_link: ''},;"
    mode: "onChange"}),;
  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {;
    if (!user) {;"
      toast.error("You must be logged in to post a job"),;"
      navigate("/login"),;
      return;
    }
;
    setIsLoading(true),;
    try {;'
      const publishedDate = startDate ? startDate.toString() : '',;'
      const expiryDate = endDate ? endDate.toString() : '',;
      const jobData = {;
        ...values,;
        published_date: publishedDate,;
        expiry_date: expiryDate,;
        is_remote: isRemote,;
        user_id: user.id},;
      if (onSuccess) {;
        onSuccess();

      responsibilities: '';
      qualifications: '';
      benefits: '';
      application_instructions: '';
      contact_email: '';
      published_date: '';
      expiry_date: '';
      is_remote: false;
      category: '';

      toast && toast.error("You must be logged in to post a job");
      navigate("/login"),

      return
    }
    setIsLoading(true);
    try {

      const publishedDate = startDate ? startDate && startDate.toString() : '';
      const expiryDate = endDate ? endDate && endDate.toString() : '';

      const jobData = {
        ...values;
        published_date: publishedDate;
        expiry_date: expiryDate;

        is_remote: isRemote,
        user_id: user && user.id};
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      if (onSuccess) {
        onSuccess()
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      return jobData
    } catch (error: any) {

import { useForm } from 'react-hook-form',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { format } from 'date-fns',;
import { toast } from "sonner",;
import { useNavigate } from 'react-router-dom',;
import { jobSchema, JobSchemaType } from './validation',;
import { useAuth } from "@/hooks/useAuth",;
export interface JobPostingProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [isRemote, setIsRemote] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),;
  const form = useForm<JobSchemaType>({;
    resolver: zodResolver(jobSchema),;
    defaultValues: {;
      title: '',;
      company: '',;
      location: '',;
      job_type: '',;
      salary_range: '',;
      description: '',;
      responsibilities: '',;
      qualifications: '',;
      benefits: '',;
      application_instructions: '',;
      contact_email: '',;
      published_date: '',;
      expiry_date: '',;
      is_remote: false,;
      category: '',;
      status: '',;
      external_apply_link: ''},;
    mode: "onChange"}),;
  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {;
    if (!user) {;
      toast.error("You must be logged in to post a job"),;
      navigate("/login"),;
      return;
    }
;
    setIsLoading(true),;
    try {;
      const publishedDate = startDate ? startDate.toString() : '',;
      const expiryDate = endDate ? endDate.toString() : '',;
      const jobData = {;
        ...values,;
        published_date: publishedDate,;
        expiry_date: expiryDate,;
        is_remote: isRemote,;
        user_id: user.id},;
      if (onSuccess) {;
        onSuccess();

export interface JobPostingProps {
  job_id?: string;
  on_success?: () => void;
}      title: '';
      company: '';
      location: '';
      job_type: '';
      salary_range: '',
  description: '';
      responsibilities: '';
      qualifications: '';
      benefits: '';
      application_instructions: '';
      contact_email: '';
      published_date: '';
      expiry_date: '';
      is_remote: false;
      category: '';

      toast && toast.error("You must be logged in to post a job");
      navigate("/login"),

      return
    }
    setIsLoading(true);
    try {

      const publishedDate = startDate ? startDate && startDate.toString() : '';
      const expiryDate = endDate ? endDate && endDate.toString() : '';

      const jobData = {
      navigate("/login"),      const jobData = {
        ...values;
        published_date: publishedDate;
        expiry_date: expiryDate;

        is_remote: isRemote,
        user_id: user && user.id};

      if (onSuccess) {
        onSuccess()
      }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return jobData
    } catch (error: any) {

      console && console.error("Error in job form submission:", error);
      toast && toast.error(error && error.message || "Failed to process form");

      throw error
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      status: '',
      external_apply_link: ''}

    mode: "on_change"});
;
  // Function to create / update jobs that will be implemented by parent component;
  const submit_job = async (values: JobSchemaType) => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("You must be logged in to post a job");"

      navigate ("/login"),
      return;
    }
    setIsLoading (true);
;

        ...values;
        published_date: published_date;
        expiry_date: expiry_date;
        is_remote: is_remote,
        user_id: user.id}
;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      // Check condition
if ( {) {
  $2
}
        on_success ();

      title: '',
      company: '',
      location: '',
      job_type: '',
      salary_range: '',
      description: '',
      responsibilities: '',
      qualifications: '',
      benefits: '',
      application_instructions: '',
      contact_email: '',
      published_date: '',
      expiry_date: '',
      is_remote: false,
      category: '',
      status: '',
      external_apply_link: ''},
    mode: "onChange"}),

  // Function to create/update jobs that will be implemented by parent component
  const submitJob = async (values: JobSchemaType) => {
    if (!user) {
      toast.error("You must be logged in to post a job"),
      navigate("/login"),
      return

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }
      return job_data;

    } catch (error: any) {
      console.error ("Error in job form submission:", error);
      toast.error (error.message || "Failed to process form");
      throw error;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    } finally {
<<<<<<< HEAD

      setIsLoading (false);
    }
  }

    form;
    is_loading;
    start_date;
    setStartDate;
    setEndDate;
    is_remote;
    setIsRemote;
    initial_values;

;

=======
      }
>>>>>>> merged-prs-20250907-203621
      
      return jobData
    } catch (error: any) {
      console.error("Error in job form submission:", error),
      toast.error(error.message || "Failed to process form"),
      throw error
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
  },

  return {
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate, 
    setEndDate,
    isRemote,
    setIsRemote,
    initialValues,
    setInitialValues,
    submitJob
=======
  };

  return {
    form;
    isLoading;
    startDate;
    setStartDate;
    endDate, 
    setEndDate;
    isRemote;
    setIsRemote;
    initialValues;
    setInitialValues;
    submitJob
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return jobData;
    } catch (error: any) {;"
      console.error("Error in job form submission:", error),;"
      toast.error(error.message || "Failed to process form"),;
      throw error;
    } finally {;
      setIsLoading(false);
    }
  },;
  return {;
    form,;
    isLoading,;
    startDate,;
    setStartDate,;
    endDate,;
    setEndDate,;
    isRemote,;
    setIsRemote,;
    initialValues,;
    setInitialValues;
    submitJob;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } finally {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      setIsLoading (false);
    }
  }

    form;
    is_loading;
    start_date;
    setStartDate;
    setEndDate;
    is_remote;
    setIsRemote;
    initial_values;

;

      return jobData;
    } catch (error: any) {;"
      console.error("Error in job form submission:", error),;"
      toast.error(error.message || "Failed to process form"),;
      throw error;
    } finally {;
      setIsLoading(false);
    }
  },;
  return {;
    form,;
    isLoading,;
    startDate,;
    setStartDate,;
    endDate,;
    setEndDate,;
    isRemote,;
    setIsRemote,;
    initialValues,;
    setInitialValues;
<<<<<<< HEAD
    submitJob;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  }
};
=======
    submit_job;
      setIsLoading(false)


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
}

;

<<<<<<< HEAD
  }
};
  }
<<<<<<< HEAD
};
=======
};
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  }
};
  }
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
