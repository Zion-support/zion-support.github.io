
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import {useState, useEffect} from 'react';
import {use_form} from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import {format} from 'date - fns';
import { toast } from './sonner';
import {use_navigate} from 'react-router-dom';
import {job_schema, JobSchemaType} from './validation';
import { use_auth } from '@/hooks / use_auth';


import { useState, useEffect  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { format  } from 'date-fns';
import { toast } from "sonner";
import { useNavigate  } from 'react-router-dom';
import { jobSchema, JobSchemaType  } from './validation';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useAuth } from "@/hooks/useAuth";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {format} from 'date-fns';
import {toast} from "sonner";
import {useNavigate} from 'react-router-dom';
import {jobSchema, JobSchemaType} from './validation';
<<<<<<< HEAD
=======
import { useState, useEffect  } from 'react';'
import { useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";'
import { format  } from 'date-fns';"
import { toast } from "sonner";'
import { useNavigate  } from 'react-router-dom';'
import { jobSchema, JobSchemaType  } from './validation';"
import { useAuth } from "@/hooks/useAuth";
'
import {useState, useEffect} from 'react';'
import {useForm} from 'react-hook-form';"
import {zodResolver} from "@hookform/resolvers/zod";'
import {format} from 'date-fns';"
import {toast} from "sonner";'
import {useNavigate} from 'react-router-dom';'
import {jobSchema, JobSchemaType} from './validation';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {useAuth} from "@/hooks/useAuth";
export interface JobPostingProps {;
  jobId?: string;
  onSuccess?: () => void;
=======
import {useAuth} from "@/hooks/useAuth";
export interface JobPostingProps {;
  jobId?: string;
  onSuccess?: () => void
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth();
  const navigate = useNavigate();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from 'react',
=======
import { useAuth } from "@/hooks/useAuth";import { useState, useEffect } from 'react',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useAuth } from "@/hooks/useAuth";import { useState, useEffect } from 'react',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { useState, useEffect } from 'react',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useForm } from 'react-hook-form',
import { zodResolver } from "@hookform/resolvers/zod",
import { format } from 'date-fns',
import { toast } from "sonner",
import { useNavigate } from 'react-router-dom',
import { jobSchema, JobSchemaType } from './validation',
import { useAuth } from "@/hooks/useAuth",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface JobPostingProps {
=======


'
import { useState, useEffect } from 'react','
import { useForm } from 'react-hook-form',"
import { zodResolver } from "@hookform/resolvers/zod",'
import { format } from 'date-fns',"
import { toast } from "sonner",'
import { useNavigate } from 'react-router-dom','
import { jobSchema, JobSchemaType } from './validation',"
import { useAuth } from "@/hooks/useAuth",



export interface JobPostingProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  job_id?: string;
  on_success?: () => void;
}

  
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [isRemote, setIsRemote] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema);
    defaultValues: {

=======
  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema);
    defaultValues: {
<<<<<<< HEAD

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

=======
  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      title: '';
=======
export interface JobPostingProps {
  job_id?: string;
  on_success?: () => void;
}      title: '';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface JobPostingProps {
  job_id?: string;
  on_success?: () => void;
}      title: '';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      company: '';
      location: '';
      job_type: '';
      salary_range: '',
<<<<<<< HEAD
<<<<<<< HEAD
      description: '',
      responsibilities: '',
      qualifications: '',
      benefits: '',
      application_instructions: '',
      contact_email: '',
      published_date: '',
=======
  const form = useForm<JobSchemaType>({}
    resolver: zodResolver(jobSchema);
    defaultValues: {}
'
      title: '';'
      company: '';'
      location: '';'
      job_type: '';'
      salary_range: '';'
      description: '';'
      responsibilities: '';'
      qualifications: '';'
      benefits: '';'
      application_instructions: '';'
      contact_email: '';'
      published_date: '';'
      expiry_date: '';
      is_remote: false;'
      category: '';



      return;
    }
    setIsLoading(true);
    try {}
      const jobData = {}
        ...values;
        published_date: publishedDate;
        expiry_date: expiryDate;



      if (onSuccess) {}
        onSuccess()
      }
      return jobData;
    } catch (error: any) {}
'
      title: '','
      company: '','
      location: '','
      job_type: '','
      salary_range: '','
      description: '','
      responsibilities: '','
      qualifications: '','
      benefits: '','
      application_instructions: '','
      contact_email: '','
      published_date: '','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
      return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { format } from 'date-fns',;
import { toast } from "sonner",;
import { useNavigate } from 'react-router-dom',;
import { jobSchema, JobSchemaType } from './validation',;
=======
      return'
import { useState, useEffect } from 'react',;'
import { useForm } from 'react-hook-form',;"
import { zodResolver } from "@hookform/resolvers/zod",;'
import { format } from 'date-fns',;"
import { toast } from "sonner",;'
import { useNavigate } from 'react-router-dom',;'
import { jobSchema, JobSchemaType } from './validation',;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

      }

      return jobData
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

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

      title: '';
      company: '';
      location: '';
      job_type: '';
      salary_range: '';
      description: '';
=======
  description: '';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  description: '';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export interface JobPostingProps {
  job_id?: string;
  on_success?: () => void;
}


  const { user } = useAuth(),
  const navigate = useNavigate(),

  
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [isRemote, setIsRemote] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),


  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema);
    defaultValues: {

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

      title: '';
      company: '';
      location: '';
      job_type: '';
      salary_range: '';
      description: '';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      if (onSuccess) {
        onSuccess()
      }
      return jobData
    } catch (error: any) {

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console && console.error("Error in job form submission:", error);
      toast && toast.error(error && error.message || "Failed to process form");

      throw error
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      throw error
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      status: '',
      external_apply_link: ''}
=======


      throw error;
'
      status: '','
      external_apply_link: ''}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    mode: "on_change"});
;
  // Function to create / update jobs that will be implemented by parent component;
  const submit_job = async (values: JobSchemaType) => {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("You must be logged in to post a job");"
=======
      throw error
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      navigate ("/login"),
      return;
    }
    setIsLoading (true);
;
<<<<<<< HEAD
    try {'
      const published_date = start_date ? start_date.to_string () : '';'
      const expiry_date = end_date ? end_date.to_string () : '';
;
      const job_data = {}
=======
    try {
      const published_date = start_date ? start_date.to_string () : '';
      const expiry_date = end_date ? end_date.to_string () : '';
;
      const job_data = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        ...values;
        published_date: published_date;
        expiry_date: expiry_date;
        is_remote: is_remote,
        user_id: user.id}
;
<<<<<<< HEAD
      // Check condition;
if ( {) {}
  $2;
}
        on_success ();



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
      return job_data;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    } catch (error: any) {
      console.error ("Error in job form submission:", error);
      toast.error (error.message || "Failed to process form");
      throw error;
    } finally {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setIsLoading(false)
    }
  };
=======
<<<<<<< HEAD

;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      }
      return job_data;
    } catch (error: any) {"
      console.error ("Error in job form submission:", error);"
      toast.error (error.message || "Failed to process form");
      throw error;
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);
    }
  }
  return {}
    form;
    is_loading;
    start_date;
    setStartDate;
    setEndDate;
    is_remote;
    setIsRemote;
    initial_values;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    setInitialValues;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    submit_job;
=======
      setIsLoading(false)
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
    setInitialValues;
    submit_job;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
}

;

<<<<<<< HEAD

      }
      
      return jobData;
    } catch (error: any) {"
      console.error("Error in job form submission:", error),"
      toast.error(error.message || "Failed to process form"),
      throw error;
    } finally {}
=======
      }
      
      return jobData
    } catch (error: any) {
      console.error("Error in job form submission:", error),
      toast.error(error.message || "Failed to process form"),
      throw error
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(false)
    }
  };

<<<<<<< HEAD
  return {}
=======
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    submitJob
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    submitJob;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
;
=======
    setInitialValues;;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
      setIsLoading(false)

;
=======
    setInitialValues;;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    submitJob
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return jobData;
    } catch (error: any) {;
      console.error("Error in job form submission:", error),;
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

=======
    submit_job;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
};
  }
}

<<<<<<< HEAD
;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

;

  }
};
  }
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
