import {useState} from 'react';
import {useLoadMilestones} from './useLoadMilestones';
import {useCreateMilestone} from './useCreateMilestone';
import {useUpdateMilestone} from './useUpdateMilestone';
import {useDeleteMilestone} from './useDeleteMilestone';
import {useUploadDeliverable} from './useUploadDeliverable';
import {MilestoneStatus} from './types';
  return {
    milestones;
    activities;
    is_loading;
    error;
    is_submitting;
    create_milestone;
    updateMilestoneStatus;
