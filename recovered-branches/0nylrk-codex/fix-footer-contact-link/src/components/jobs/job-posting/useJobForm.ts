
import {useState, useEffect} from 'react';
import {use_form} from 'react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import {format} from 'date - fns';
import { toast } from './sonner';
import {use_navigate} from 'react-router-dom';
import {job_schema, JobSchemaType} from './validation';
import { use_auth } from '@/hooks / use_auth';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  onSuccess?: () => void
}

export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth();
  const navigate = useNavigate();
==============

=======import { useState, useEffect } from 'react',
import { useForm } from 'react-hook-form',
import { zodResolver } from "@hookform/resolvers/zod",
import { format } from 'date-fns',
import { toast } from "sonner",
import { useNavigate } from 'react-router-dom',
import { jobSchema, JobSchemaType } from './validation',
import { useAuth } from "@/hooks/useAuth",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface JobPostingProps {
  job_id?: string;
  on_success?: () => void;
}

=======export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isRemote, setIsRemote] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null);
  const { user } = useAuth(),
  const navigate = useNavigate(),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      return job_data;
    } catch (error: any) {
      console.error ("Error in job form submission:", error);
      toast.error (error.message || "Failed to process form");
      throw error;
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
=======    } finally {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;

  return {
    form;
    is_loading;
    start_date;
    setStartDate;

    end_date,

    setEndDate;
    is_remote;
    setIsRemote;
    initial_values;
    setInitialValues;
    submit_job;

  }
}

;

  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
